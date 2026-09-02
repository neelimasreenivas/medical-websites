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

const sharadaTestimonials = [
    {
        name: "Suresh Verma",
        text: "Dr. Sharada's treatment plan made a huge difference in managing my chronic vertigo. Very attentive care.",
    },
    {
        name: "Kavitha Rao",
        text: "Extremely patient and detailed explanation of my condition. I felt well cared for throughout the treatment.",
    },
    {
        name: "Ramesh Patel",
        text: "Highly professional environment and expert guidance for nerve-related issues. Highly recommended!",
    },
];

export default function Neuro2Page() {
    return (
        <>
            <Navbar
                title="Sharada Neuro"
                subtitle="Advanced Neurology Care"
            />

            <Hero
                title="Sharada Neuro"
                subtitle="Advanced Neurology Care"
            />

            <Stats />

            <AboutDoctor
                name="Dr. Sharada"
                bioParagraph1="Dr. Sharada is a distinguished neurologist specializing in comprehensive brain and nerve care, movement disorders, and advanced diagnostic neurology."
                bioParagraph2="Dedicated to providing compassionate patient care, Dr. Sharada creates tailored treatment strategies designed for optimal recovery and long-term wellness."
                imageUrl="https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
            />

            <Conditions />

            <WhyChooseUs />

            <Testimonials testimonials={sharadaTestimonials} />

            <ContactSection
                clinicName="Sharada Neuro"
                phone="+91 9123456789"
                location="Secunderabad, Telangana"
                hours="Mon - Sat | 10 AM - 8 PM"
            />

            <Footer clinicName="Sharada Neuro" />

            <WhatsAppButton
                phoneNumber="919123456789"
                message="Hello, I would like to book an appointment at Sharada Neuro."
            />
        </>
    );
}