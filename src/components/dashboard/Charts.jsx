import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { AreaChart } from "recharts";
import { Area } from "recharts";
import { getTransfers } from "../../api/transfer-service";

const colors = {
  teal: "#e63719",
  blueGrey: "#233765",
  lightGrey: "#eee",
};

const Charts = () => {
  const [transfers, setTransfers] = useState([]);

  let monatTransfers = [{ x: "", y: 0 }];

  useEffect(() => {
    getTransfers().then((resp) => {
      setTransfers(resp.data);
    });
  }, []);

  const getMonatTransfers = () => {
    let betweenDay;

    let date = new Date();
    let firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    let startOfMonth = (date - firstDayOfMonth) / 864e5;

    transfers.forEach((item) => {
      betweenDay =
        new Date(item.transactionDate).getDate() - new Date().getDate();
      if (startOfMonth >= betweenDay) {
        monatTransfers.push({
          x: moment(item.transactionDate).format("D"),
          y: item.transactionAmount,
        });
      }
    });
    return monatTransfers;
  };

  return (
    <>
      <ResponsiveContainer>
        <AreaChart
          data={getMonatTransfers()}
          margin={{ top: 25, right: 25, bottom: 25, left: 0 }}
        >
          <XAxis dataKey="x" />
          <YAxis dataKey="y" />
          <Area
            dataKey="y"
            type="monotone"
            isAnimationActive={true}
            name="Transfer"
            fill={colors.teal}
            stroke={colors.blueGrey}
            strokeWidth={4}
          >
            <LabelList dataKey="y" position="top" offset={10} />
          </Area>
          <CartesianGrid stroke={colors.lightGrey} strokeDasharray="5 5" />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default Charts;
