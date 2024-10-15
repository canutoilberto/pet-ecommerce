"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ProductDetailsProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  };
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div className="lg:max-w-lg lg:self-end">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>
        <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
          <div className="max-w-xl">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {product.name}
            </h1>
            <div className="mt-3">
              <p className="text-3xl text-gray-900">
                R${product.price.toFixed(2)}
              </p>
            </div>
            <div className="mt-6">
              <h3 className="sr-only">Descrição</h3>
              <div
                className="text-base text-gray-700"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>
            <div className="mt-10">
              <div className="flex items-center">
                <Button
                  onClick={() => handleQuantityChange(-1)}
                  variant="outline"
                  size="icon"
                >
                  -
                </Button>
                <span className="mx-4 text-xl">{quantity}</span>
                <Button
                  onClick={() => handleQuantityChange(1)}
                  variant="outline"
                  size="icon"
                >
                  +
                </Button>
              </div>
              <Button className="mt-4 w-full">Adicionar ao Carrinho</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
