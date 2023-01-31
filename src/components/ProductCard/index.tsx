import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { CardContainer, Card, CarDesc, CardButton } from "./styles";
import { Product } from "@/types/products";
import { FiShoppingBag } from "react-icons/fi";
import { addToCart } from "@/features/cartSlice";
import { useDispatch } from "react-redux";

interface ProductData {
  products: Product[];
}

const ProductCard: React.FC = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState<ProductData["products"]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(
        `products?page=1&rows=8&sortBy=name&orderBy=DESC`
      );
      setProducts(result.data.products);
    };
    fetchData();
  }, []);

  return (
    <>
      <CardContainer>
        {products.map((product, index) => (
          <Card key={product.id}>
            <img src={product.photo} width={150} height={150}></img>
            <CarDesc>
              <span>{product.name}</span>
              <span>
                R${parseFloat(product.price.toString().replace(",", ""))}
              </span>
            </CarDesc>
            <p>{product.description}</p>
            <CardButton onClick={() => dispatch(addToCart(product))}>
              <FiShoppingBag />
              Comprar
            </CardButton>
          </Card>
        ))}
      </CardContainer>
    </>
  );
};

export default ProductCard;
