import { socials } from "../constants/index.jsx";

const Footer = () => {
  return (
    <footer>
      {/* <div className="container py-10">
        <div className="flex w-full max-md:flex-col">
          <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
            <p className="opacity-70">Copyright, JS Mastery</p>
          </div>
          <div className="flex items-center justify-center sm:ml-auto">
            <p className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1">
              Privacy Policy
            </p>
            <p className="text-p5 transition-all duration-500 hover:text-p1">
              Terms of Use
            </p>
          </div>

          <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a href={url} className="social-icon">
                  <img
                    src={icon}
                    alt={title}
                    className="size-1/3 object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
      <div className="container py-16">
        <div className="flex justify-between text-center max-md:flex-col  gap-4">
          <div>
            <h3 className="font-bold text-p4 text-lg">Cano Fisioterapia de Lins Ltda</h3>
            <p>Todos os direitos reservados</p>
            <p>11.434.807/0001-59</p>
          </div>
          <div>
            <h3 className="font-bold text-p4 text-lg">Endereço</h3>
            <p>R. Campos Sáles, 974</p>
            <p>Jardim Campestre - Lins - SP</p>
            <p>CEP: 16400-272</p>
          </div>
          <div>
            <h3 className="font-bold text-p4 text-lg">Contato</h3>
            <p>(14) 99767-5091</p> 
            <p>cerfisioterapialins@hotmail.com</p>
          </div>
          <ul className="flex  justify-center gap-3 max-md:mt-3 md:justify-end">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a href={url} className="social-icon">
                  <img
                    src={icon}
                    alt={title}
                    className="w-[24px] object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </footer>
  );
};
export default Footer;
