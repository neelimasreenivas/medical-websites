import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import AboutDoctor from "../components/AboutDoctor";
import Conditions from "../components/neuro2/Conditions2";
import WhyChooseUs2 from "../components/neuro2/WhyChooseUs2";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Conditions2 from "../components/neuro2/Conditions2";

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
        <div className="bg-slate-50 min-h-screen text-slate-900">
            <Navbar
                title="Sharada Neuro"
                subtitle="Advanced Neurology Care"
            />

            {/* Emerald Hero with Muted Champagne Gold Accents */}
            <Hero
                title="Sharada Neuro"
                subtitle="Advanced Neurology Care & Comprehensive Brain Health Solutions"
                bgStyle="bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900"
                textColor="text-white"
                subtitleColor="text-emerald-100"
                badgeText="EXPERT NEUROLOGICAL CARE"
                badgeStyle="bg-[#D4A373]/20 text-[#E6C594] border border-[#D4A373]/30"
                buttonStyle="bg-gradient-to-r from-[#C59B6A] to-[#D4A373] hover:from-[#B58B5A] hover:to-[#C59B6A] text-slate-950 font-bold shadow-lg shadow-emerald-950/40"
            />

            {/* Muted Gold Stats Numbers */}
            <Stats
                bgStyle="bg-emerald-950"
                textColor="text-[#E6C594]"
                labelColor="text-emerald-100"
                borderColor="border-emerald-800/50"
            />

            <AboutDoctor
                name="Dr. Sharada"
                bioParagraph1="Dr. Sharada is a distinguished neurologist specializing in comprehensive brain and nerve care, movement disorders, and advanced diagnostic neurology."
                bioParagraph2="Dedicated to providing compassionate patient care, Dr. Sharada creates tailored treatment strategies designed for optimal recovery and long-term wellness."
                imageUrl="https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
            />

            <Conditions2 />

            <WhyChooseUs2 />

            <Testimonials testimonials={sharadaTestimonials} />

            {/* Softened Gold Contact Section */}
            <ContactSection
                clinicName="Sharada Neuro"
                phone="+91 9123456789"
                location="Secunderabad, Telangana"
                hours="Mon - Sat | 10 AM - 8 PM"
                bgStyle="bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-950"
                headingColor="text-white"
                subtextColor="text-emerald-200"
                cardBg="bg-emerald-900/40 border border-emerald-700/50 backdrop-blur-md"
                cardTextColor="text-emerald-100"
                formBg="bg-emerald-900/50 border border-emerald-700/60 shadow-2xl backdrop-blur-md"
                buttonStyle="bg-gradient-to-r from-[#C59B6A] to-[#D4A373] hover:from-[#B58B5A] hover:to-[#C59B6A] text-slate-950 font-bold shadow-xl shadow-black/20"
                focusRingColor="focus:ring-[#D4A373]"
            />

            <Footer clinicName="Sharada Neuro" />

            <WhatsAppButton
                phoneNumber="919123456789"
                message="Hello, I would like to book an appointment at Sharada Neuro."
            />
        </div>
    );
}