import Image from "next/image";

const testimonials = [
  {
    id: 1,
    content:
      "Adoro a qualidade dos produtos da PetShop. Meu cachorro está tão feliz com seus novos brinquedos!",
    author: "Sarah Johnson",
    avatar: "/avatar1.avif",
  },
  {
    id: 2,
    content:
      "Ótima seleção e envio rápido. Com certeza serei um cliente recorrente!",
    author: "Mike Thompson",
    avatar: "/avatar2.avif",
  },
  {
    id: 3,
    content:
      "O atendimento ao cliente é excepcional. Eles realmente se importam com os pets e seus donos.",
    author: "Emily Davis",
    avatar: "/avatar3.avif",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          O que dizem os nossos clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-100 rounded-lg p-6">
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="ml-2 font-medium text-gray-900">
                  {testimonial.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
