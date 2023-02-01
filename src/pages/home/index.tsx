import React, { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Header } from "@/components/Header";
import { Content } from "./styles";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Header />
      <Content>
        <ProductCard />
      </Content>
      <Footer />
    </>
  );
};

export default Home;
