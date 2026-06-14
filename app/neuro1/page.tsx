import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import AboutDoctor from "../components/AboutDoctor";
import Conditions from "../components/Conditions";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Neuro1Page() {
    return (
        <>
            <Navbar />

            <Hero
                title="Advanced Neurology Care"
                subtitle="Expert diagnosis and treatment for neurological disorders."
            />
            <Stats />

            <AboutDoctor />

            <Conditions />

            <WhyChooseUs />

            <Testimonials />


            <ContactSection />

            <Footer />

            <WhatsAppButton />
        </>
    );
}