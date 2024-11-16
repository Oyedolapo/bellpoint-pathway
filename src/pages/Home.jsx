import { useEffect, useState } from "react"
import heroVideo from '../assets/heroVideo.mp4'
import { Hero, Navbar, Services, WhatWeDo, Footer, HowItWorks, Testimonial, Partners, Contact, Blog } from "../components";

const Home = () => {
    const [navbarBg, setNavbarBg] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setNavbarBg(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    
  return (
    <section className="relative w-full max-sm:min-h-[90vh] h-[70vh] xl:h-[60vh] 2xl:h-screen md:h-[60vh]">
        <Navbar navbarBg={navbarBg}/>
        <div className="relative h-full">
            <video src={heroVideo} autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover"/>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#000]/80 to-[#000]/70" />
            <Hero />
        </div>
        <WhatWeDo />
        <Services />
        <HowItWorks />
        <Testimonial />
        <Partners />
        <Contact />
        <Blog />
        <Footer />
    </section>
  )
}

export default Home