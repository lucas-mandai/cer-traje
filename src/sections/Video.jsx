import { Element } from "react-scroll"
import Button from "../components/Button"


const Video = () => {
    return (
        <section className="pt-28">
            <Element name="video" className="relative">
                <div className="container">
                    <div className="flex justify-around">
                        <div className="relative w-[250px] h-[500px] rounded-20 border-8 border-black">
                            <video
                                className="w-full h-full object-cover rounded-20"
                                src="/images/traje.mp4" // Substitua pelo caminho do seu vídeo
                                autoPlay
                                loop
                                muted
                            ></video>
                            <div className="absolute top-[5px] left-[calc(50%-32px)]">
                                <img src="/images/ilha.png" alt="ilha dinâmica" className="w-16" />
                            </div>
                        </div>
                        <div className=" hidden lg:block lg:w-[500px]">
                            <h3 className="h3 text-p4">Venha conhecer agora mesmo!</h3>
                            <p className="pt-9 pb-9 body-1">
                                Te receberemos com muita alegria para fazer parte da mais nova tendência na área de performance, estética e reabilitação.
                                Pontencialize seus resultados utilizando nosso traje em um treino de apenas 20 minutos.
                            </p>
                            <div className="mt-10 flex w-full justify-start">
                                <Button href="https://wa.link/vdrhb0" icon="/images/zap.svg">Contate-nos</Button>
                            </div>
                        </div>
                    </div>

                </div>
            </Element>
        </section>
    )
}

export default Video