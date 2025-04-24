import { Typography, Button, Input } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Empresa",
    items: ["Sobre Nós", "Carreiras", "Ferramentas Premium", "Blog"],
  },
  {
    title: "Páginas",
    items: ["Entrar", "Registrar", "Adicionar Lista", "Contato"],
  },
  {
    title: "Legal",
    items: ["Termos", "Privacidade", "Equipe", "Sobre Nós"],
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 pt-24 pb-8">
      <div className="container max-w-6xl flex flex-col mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 !w-full ">
          <div className="flex col-span-2 items-center gap-10 mb-10 lg:mb-0 md:gap-36">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography variant="h6" color="blue-gray" className="mb-4">
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      className="py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="">
            <Typography variant="h6" className="mb-3 text-left">
              Inscreva-se
            </Typography>
            <Typography className="!text-gray-500 font-normal mb-4 text-base">
              Tenha acesso a ofertas exclusivas para assinantes e seja o primeiro a saber sobre novas promoções.
            </Typography>
            <Typography variant="small" className="font-medium mb-2 text-left">
              Seu Email
            </Typography>
            <div className="flex mb-3 flex-col lg:flex-row items-start gap-4">
              <div className="w-full">
                {/* @ts-ignore */}
                <Input label="Email" color="gray" />
                <Typography className="font-medium mt-3 !text-sm !text-gray-500 text-left">
                  Eu concordo com os{" "}
                  <a
                    href="#"
                    className="font-bold underline hover:text-gray-900 transition-colors"
                  >
                    Termos e Condições{" "}
                  </a>
                </Typography>
              </div>
              <Button color="gray" className="w-full lg:w-fit" size="md">
                Inscrever
              </Button>
            </div>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="md:text-center mt-16 font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR} Feito com{" "}
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block w-5 h-5 text-black-500 mx-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            >
            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>{" "}
          por{" "}
          <a href="https://www.creative-tim.com" target="_blank">
            Rafa
          </a>
          .
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
