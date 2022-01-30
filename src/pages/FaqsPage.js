import React from "react";
import Footer from "../components/common/Footer";
import Menu from "../components/common/Menu";
import PageHeader from "../components/common/PageHeader";
import TopBar from "../components/common/TopBar";
import ContactForm from "../components/faqs/ContactForm";
import Faq from "../components/faqs/Faq";

const FaqsPage = () => {
  return (
    <div>
      <TopBar />
      <Menu />
      <PageHeader image="/assets/images/blog.png" title="FAQ's" />
      <Faq />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default FaqsPage;
