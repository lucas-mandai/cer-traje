import { lazy, Suspense } from "react";

import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faq from "./sections/Faq.jsx";
// import Testimonials from "./sections/Testimonials.jsx";
// import Download from "./sections/Download.jsx";
import Footer from "./sections/Footer.jsx";
import { FloatingWhatsApp } from "react-floating-whatsapp";
// import Video from "./sections/Video.jsx";


const Video = lazy(() => import("./sections/Video.jsx"))

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Suspense fallback={<p>Loading...</p>}>
        <Video />
      </Suspense>

      <Pricing />
      <Faq />
      {/* <Testimonials /> */}
      {/* <Download /> */}
      <Footer />
      <FloatingWhatsApp 
        phoneNumber={"5514997675091"} 
        accountName={"Centro de Excelência em Reabilitação"} 
        statusMessage={""}
        chatMessage={"Olá, como posso te ajudar?"}
        placeholder={"Digite uma mensagem"}
        avatar={"/images/whats-avatar.png"}
      />
    </main>
  );
};

export default App;
