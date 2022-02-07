import React from "react";
import Footer from "../components/common/Footer";
import Menu from "../components/common/Menu";
import PageHeader from "../components/common/PageHeader";
import ScrollToTopOnMount from "../components/common/ScrollToTopOnMount";
import TopBar from "../components/common/TopBar";
import ContactForm from "../components/faqs/ContactForm";
import Faq from "../components/faqs/Faq";

const FaqsPage = () => {
  return (
    <div>
      <Menu />
      <PageHeader image="/assets/images/blog.png" title="FAQ's" />
      <Faq />
      <ContactForm />
      <ScrollToTopOnMount />
    </div>
  );
};

export default FaqsPage;
