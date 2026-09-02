import Navbar from "../components/Navbar";
import GenudermHero from "../components/skinhair/GenudermHero";
import AboutDoctorGenuderm from "../components/skinhair/AboutDoctorGenuderm";
import SkinTreatments from "../components/skinhair/SkinTreatments";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function SkinHairPage() {
    return (
        <div className="bg-slate-50 min-h-screen text-slate-900 font-sans">
            <Navbar title="Genuderm Clinic" subtitle="Skin & Hair Specialist" />

            <GenudermHero />

            <AboutDoctorGenuderm />

            <SkinTreatments />

            <div id="book">
                <ContactSection
                    clinicName="Genuderm Skin & Hair Clinic"
                    phone="+91 9876543210"
                    location="Jubilee Hills, Hyderabad"
                    hours="Mon - Sat | 10 AM - 7 PM"
                    /* Softened Warm Rose & Cream Aesthetics */
                    bgStyle="bg-gradient-to-br from-rose-100/70 via-orange-50/50 to-rose-50"
                    headingColor="text-slate-900"
                    subtextColor="text-slate-600"
                    cardBg="bg-white/80 border border-rose-200/60 shadow-sm"
                    cardTextColor="text-slate-800"
                    formBg="bg-white border border-rose-200/80 shadow-lg shadow-rose-100/50"
                    buttonStyle="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold shadow-md shadow-rose-200"
                    focusRingColor="focus:ring-rose-400"
                />
            </div>

            <Footer clinicName="Genuderm Skin & Hair Clinic" />

            <WhatsAppButton
                phoneNumber="919876543210"
                message="Hello, I would like to book an appointment at Genuderm Skin & Hair Clinic."
            />
        </div>
    );
}