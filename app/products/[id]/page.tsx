import ProductDetails from "@/components/ProductDetails";

// This is a mock function to simulate fetching product data
async function getProduct(id: string) {
  // In a real application, you would fetch this data from an API or database
  return {
    id: parseInt(id),
    name: "Ração Premium",
    description: "Ração de alta qualidade e nutritiva para todas as raças.",
    price: 29.99,
    image: "/dog-food.avif",
  };
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  return <ProductDetails product={product} />;
}
