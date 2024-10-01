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
                    <div className="pt-28 max-md:pt-20">
                        <h2 className=" mb-7 lg:h4  text-p4 max-md:mb-6 max-md:text-3xl max-md:font-semibold text-left lg:text-center">Confira as entrevistas e conheça mais sobre Eletroestimulação</h2>
                        <div className="flex flex-wrap justify-around gap-y-8">
                            <div className="lg:w-9/20">
                                <video className=" object-cover rounded-md" controls>
                                    <source src="https://www.dropbox.com/scl/fi/7un1a9z6p6a5oveqjoog6/Mais-Magazine-Diego-Cano.mp4?rlkey=7yv1x6ius16xlujvx0knp4boa&st=48hxhezg&raw=1" type="video/mp4" />
                                    Seu navegador não suporta a reprodução de vídeos.
                                </video>
                            </div>
                            <div className="lg:w-9/20">
                                <video className=" object-cover rounded-md" controls>
                                    <source src="https://www.dropbox.com/scl/fi/e87fjmbioa2sn7p9fcf54/Mais-Magazine-Mario.mp4?rlkey=0l1nwavf4l554num761j4rex5&st=ylggj59s&raw=1" type="video/mp4" />
                                    Seu navegador não suporta a reprodução de vídeos.
                                </video>
                            </div>
                        </div>
                    </div>

                </div>
            </Element>
        </section>
    )
}

export default Video