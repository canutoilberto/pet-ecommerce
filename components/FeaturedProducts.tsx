// components/FeaturedProducts.tsx
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Ração Premium",
    price: 29.99,
    image: "/dog-food.avif",
  },
  {
    id: 2,
    name: "Brinquedo para Gato",
    price: 14.99,
    image: "/cat-toy.avif",
  },
  {
    id: 3,
    name: "Caminha para pet",
    price: 39.99,
    image: "/pet-bed.avif",
  },
  {
    id: 4,
    name: "Coleira estilosa",
    price: 9.99,
    image: "/pet-collar.avif",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Produtos em Destaque
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id}>
              <CardContent className="p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="mt-2 text-lg font-medium text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  R${product.price.toFixed(2)}
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Adicione ao Carrinho</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
