// components/Footer.tsx
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <span className="text-2xl font-bold text-primary">PetShop</span>
            <p className="text-gray-500 text-base">
              Temos tudo o que o seu pet precisa.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Shop
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/products"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Todos os Produtos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/categories"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Categorias
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Suporte
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/contact"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Nos contate
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2024 PetShop, Inc. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
