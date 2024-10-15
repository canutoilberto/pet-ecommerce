import ProductGrid from "../../components/ProductGrid";

// This is a mock function to simulate fetching product data
async function getProducts() {
  // In a real application, you would fetch this data from an API or database
  return [
    { id: 1, name: "Ração Premium", price: 29.99, image: "/dog-food.avif" },
    {
      id: 2,
      name: "Brinquedo para Gato",
      price: 14.99,
      image: "/cat-toy.avif",
    },
    { id: 3, name: "Caminha para pet", price: 39.99, image: "/pet-bed.avif" },
    {
      id: 4,
      name: "Coleira estilosa",
      price: 9.99,
      image: "/pet-collar.avif",
    },
    // Add more products as needed
  ];
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
        Todos os Produtos
      </h1>
      <ProductGrid products={products} />
    </div>
  );
}
