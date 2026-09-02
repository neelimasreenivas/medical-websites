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
                subtitle="Specialized Neurological Hospital"
            />

            <Hero
                title="Anu Neuro Care"
                subtitle="Expert diagnosis and treatment for neurological disorders."
                bgStyle="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900"
                textColor="text-white"
                subtitleColor="text-slate-300"
                badgeText="ADVANCED NEUROLOGY CARE"
                badgeStyle="bg-white/10 text-cyan-300 border border-white/10"
                buttonStyle="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
            />

            <Stats
                bgStyle="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900"
                textColor="text-blue-400"
                labelColor="text-gray-300"
                borderColor="border-slate-200/10"
            />

            <AboutDoctor
                name="Dr. Anu"
                bioParagraph1="Dr. Anu is a leading neurologist dedicated to diagnosing and treating complex neurological disorders with cutting-edge medical approaches."
                bioParagraph2="With over 15 years of experience, Dr. Anu provides personalized care to ensure the best possible outcomes for all patients."
                imageUrl="https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
            />

            <Conditions />

            <WhyChooseUs />

            <Testimonials />

            <ContactSection
                clinicName="Anu Neuro Care"
                phone="+91 9876543210"
                location="Hyderabad, Telangana"
                hours="Mon - Sat | 9 AM - 7 PM"
                bgStyle="bg-gradient-to-r from-blue-950 to-slate-900"
                headingColor="text-white"
                subtextColor="text-gray-300"
                cardBg="bg-white/10 backdrop-blur-sm border border-white/10"
                cardTextColor="text-gray-200"
                formBg="bg-white/10 backdrop-blur-md border border-white/10 shadow-2xl"
                buttonStyle="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                focusRingColor="focus:ring-cyan-400"
            />

            <Footer clinicName="Anu Neuro Care" />

            <WhatsAppButton
                phoneNumber="919876543210"
                message="Hello, I would like to book an appointment at Anu Neuro Care."
            />
        </>
    );
}