import React from "react";
import ProductCard from "@/components/ProductCard";
import { Header } from "@/components/Header";
import { Content } from "./styles";
import Footer from "@/components/Footer";
function Home() {
  return (
    <>
      <Header />
      <Content>
        <ProductCard />
      </Content>
      <Footer />
    </>
  );
}

export default Home;
