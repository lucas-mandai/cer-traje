import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";

const Hero = () => {
  return (
    <section className="relative pt-52 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-28 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              Técnologia ao seu favor
            </div>
            <h1 className="mb-6 h2 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-4xl max-md:leading-12">
              Utilize nosso traje de treinamento
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              Apresentamos o revolucionário Traje de Eletroestimulação Muscular agora disponível para você utilizar no Centro de Excelência em Reabilitação de Lins
            </p>
            <LinkScroll to="características" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Saiba Mais</Button>
            </LinkScroll>
          </div>

          <div className="absolute top-[520px] left-[180px] md:left-[calc(50%+100px)] md:top-[200px] lg:top-[250px] lg:left-[calc(50%+200px)]  
          pointer-events-none ">
            <img
              src="/images/traje.png"
              className="h-[300px] md:h-[400px]  lg:h-[500px]"
              alt="hero"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
