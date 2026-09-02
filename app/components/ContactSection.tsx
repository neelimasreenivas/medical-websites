"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

interface ContactSectionProps {
    clinicName?: string;
    phone?: string;
    location?: string;
    hours?: string;
    bgStyle?: string;
    headingColor?: string;
    subtextColor?: string;
    cardBg?: string;
    cardTextColor?: string;
    formBg?: string;
    buttonStyle?: string;
    focusRingColor?: string;
}

export default function ContactSection({
    clinicName = "Sharada Neuro",
    phone = "+91 9123456789",
    location = "Secunderabad, Telangana",
    hours = "Mon - Sat | 10 AM - 8 PM",
    bgStyle = "bg-[#F2F4F3]",
    headingColor = "text-[#1E2421]",
    subtextColor = "text-[#5B6658]",
    cardBg = "bg-[#FFFFFF] border border-[#8A9A86]/20",
    cardTextColor = "text-[#1E2421]",
    formBg = "bg-[#FFFFFF] border border-[#8A9A86]/20 shadow-sm",
    buttonStyle = "bg-[#5B6658] hover:bg-[#8A9A86]",
    focusRingColor = "focus:ring-[#8A9A86]",
}: ContactSectionProps) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [appointmentDate, setAppointmentDate] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = async () => {
        if (!name || !userPhone) {
            alert("Please enter your name and phone number");
            return;
        }

        if (userPhone.length < 10) {
            alert("Please enter a valid phone number");
            return;
        }

        try {
            await addDoc(collection(db, "appointments"), {
                clinic: clinicName,
                name,
                age,
                gender,
                phone: userPhone,
                appointmentDate,
                message,
                status: "Pending",
                createdAt: new Date(),
            });

            setSuccess(true);

            setName("");
            setAge("");
            setGender("");
            setUserPhone("");
            setAppointmentDate("");
            setMessage("");

            setTimeout(() => {
                setSuccess(false);
            }, 5000);
        } catch (error) {
            console.error(error);
            alert("Something went wrong.");
        }
    };

    return (
        <section
            id="contact"
            className={`${bgStyle} py-20 transition-colors duration-300`}
        >
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${headingColor}`}>
                        Book an Appointment
                    </h2>

                    <p className={`text-lg ${subtextColor}`}>
                        Schedule a consultation with our neurology specialists at {clinicName}.
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">

                    <div className={`${cardBg} rounded-2xl p-6 shadow-sm`}>
                        <h3 className={`font-bold text-xl mb-3 ${headingColor}`}>
                            📞 Phone
                        </h3>

                        <p className={cardTextColor}>
                            {phone}
                        </p>
                    </div>

                    <div className={`${cardBg} rounded-2xl p-6 shadow-sm`}>
                        <h3 className={`font-bold text-xl mb-3 ${headingColor}`}>
                            📍 Location
                        </h3>

                        <p className={cardTextColor}>
                            {location}
                        </p>
                    </div>

                    <div className={`${cardBg} rounded-2xl p-6 shadow-sm`}>
                        <h3 className={`font-bold text-xl mb-3 ${headingColor}`}>
                            🕒 Hours
                        </h3>

                        <p className={cardTextColor}>
                            {hours}
                        </p>
                    </div>

                </div>

                {/* Form Card */}
                <div className={`max-w-3xl mx-auto ${formBg} rounded-3xl p-8 md:p-10`}>

                    <h3 className={`text-3xl font-bold mb-2 ${headingColor}`}>
                        Appointment Request
                    </h3>

                    <p className={`${subtextColor} mb-8`}>
                        Fill in your details and our team will contact you shortly.
                    </p>

                    {success && (
                        <div className="bg-[#5B6658] text-white p-4 rounded-xl mb-6">
                            Appointment request submitted successfully.
                            Our team will contact you soon.
                        </div>
                    )}

                    <div className="space-y-4">

                        {/* Name + Phone */}
                        <div className="grid md:grid-cols-2 gap-4">

                            <input
                                type="text"
                                placeholder="Full Name *"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={`w-full p-4 rounded-xl bg-[#F2F4F3] text-[#1E2421] border border-[#8A9A86]/30 focus:outline-none focus:ring-2 ${focusRingColor}`}
                            />

                            <input
                                type="text"
                                placeholder="Phone Number *"
                                value={userPhone}
                                onChange={(e) => setUserPhone(e.target.value)}
                                className={`w-full p-4 rounded-xl bg-[#F2F4F3] text-[#1E2421] border border-[#8A9A86]/30 focus:outline-none focus:ring-2 ${focusRingColor}`}
                            />

                        </div>

                        {/* Age + Gender */}
                        <div className="grid md:grid-cols-2 gap-4">

                            <input
                                type="number"
                                placeholder="Age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                className={`w-full p-4 rounded-xl bg-[#F2F4F3] text-[#1E2421] border border-[#8A9A86]/30 focus:outline-none focus:ring-2 ${focusRingColor}`}
                            />

                            <select
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                className={`w-full p-4 rounded-xl bg-[#F2F4F3] text-[#1E2421] border border-[#8A9A86]/30 focus:outline-none focus:ring-2 ${focusRingColor}`}
                            >
                                <option value="">
                                    Select Gender
                                </option>

                                <option value="Male">
                                    Male
                                </option>

                                <option value="Female">
                                    Female
                                </option>

                                <option value="Other">
                                    Other
                                </option>

                                <option value="Prefer not to say">
                                    Prefer not to say
                                </option>
                            </select>

                        </div>

                        {/* Appointment Date */}
                        <div>

                            <label className={`block text-sm mb-2 ${subtextColor}`}>
                                Preferred Appointment Date
                            </label>

                            <input
                                type="date"
                                value={appointmentDate}
                                onChange={(e) =>
                                    setAppointmentDate(e.target.value)
                                }
                                className={`w-full p-4 rounded-xl bg-[#F2F4F3] text-[#1E2421] border border-[#8A9A86]/30 focus:outline-none focus:ring-2 ${focusRingColor}`}
                            />

                            <p className={`text-sm mt-2 ${subtextColor}`}>
                                Select your preferred consultation date.
                                Our team will confirm availability.
                            </p>

                        </div>

                        {/* Concern */}
                        <textarea
                            rows={4}
                            placeholder="Describe your concern"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className={`w-full p-4 rounded-xl bg-[#F2F4F3] text-[#1E2421] border border-[#8A9A86]/30 focus:outline-none focus:ring-2 ${focusRingColor}`}
                        />

                        {/* Button */}
                        <button
                            onClick={handleSubmit}
                            className={`
                                ${buttonStyle}
                                text-white
                                hover:scale-105
                                transition
                                duration-300
                                px-8
                                py-4
                                rounded-full
                                font-semibold
                                shadow-md
                            `}
                        >
                            Schedule Appointment
                        </button>

                    </div>

                </div>

            </div>
        </section>
    );
}