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
            <Navbar
                title="Anu Neuro Care"
                subtitle="Advanced Neurology Center"
            />

            <Hero
                title="Anu Neuro Care"
                subtitle="Expert diagnosis and treatment for neurological disorders."
            />

            <Stats />

            <AboutDoctor />

            <Conditions />

            <WhyChooseUs />

            <Testimonials />

            <ContactSection
                clinicName="Anu Neuro Care"
                phone="+91 9876543210"
                location="Hyderabad, Telangana"
                hours="Mon - Sat | 9 AM - 7 PM"
            />

            <Footer clinicName="Anu Neuro Care" />

            <WhatsAppButton
                phoneNumber="919876543210"
                message="Hello, I would like to book an appointment at Anu Neuro Care."
            />
        </>
    );
}