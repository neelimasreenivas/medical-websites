"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function ContactSection() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [appointmentDate, setAppointmentDate] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async () => {

        if (!name || !phone) {
            alert("Please enter your name and phone number");
            return;
        }

        if (phone.length < 10) {
            alert("Please enter a valid phone number");
            return;
        }

        try {
            await addDoc(collection(db, "appointments"), {
                name,
                age,
                gender,
                phone,
                email,
                appointmentDate,
                message,
                createdAt: new Date(),
            });

            alert("Appointment request submitted successfully!");

            setName("");
            setAge("");
            setGender("");
            setPhone("");
            setEmail("");
            setAppointmentDate("");
            setMessage("");
        } catch (error) {
            console.error(error);
            alert("Something went wrong.");
        }
    };

    return (
        <section
            id="contact"
            className="bg-gradient-to-r from-blue-950 to-slate-900 text-white py-24"
        >
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-4xl font-bold mb-4">
                    Book an Appointment
                </h2>

                <p className="text-lg text-gray-300 mb-12">
                    Schedule a consultation with our neurology specialists.
                </p>

                {/* Contact Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">

                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
                        <h3 className="font-bold text-xl mb-2">
                            📞 Phone
                        </h3>

                        <p className="text-gray-200">
                            +91 9876543210
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
                        <h3 className="font-bold text-xl mb-2">
                            📍 Location
                        </h3>

                        <p className="text-gray-200">
                            Hyderabad, Telangana
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
                        <h3 className="font-bold text-xl mb-2">
                            🕒 Hours
                        </h3>

                        <p className="text-gray-200">
                            Mon - Sat | 9 AM - 7 PM
                        </p>
                    </div>

                </div>

                {/* Appointment Form Card */}
                <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl">

                    <h3 className="text-2xl font-bold mb-2">
                        Appointment Request
                    </h3>

                    <p className="text-gray-300 mb-8">
                        Fill in your details and our team will contact you shortly.
                    </p>

                    <div className="space-y-4">

                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-4 rounded-xl text-black"
                        />

                        <div className="grid md:grid-cols-2 gap-4">

                            <input
                                type="number"
                                placeholder="Age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                className="w-full p-4 rounded-xl text-black"
                            />

                            <select
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                className="w-full p-4 rounded-xl text-black"
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

                        <input
                            type="text"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full p-4 rounded-xl text-black"
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-4 rounded-xl text-black"
                        />

                        <div>

                            <label className="block mb-2 text-sm text-gray-300">
                                Preferred Appointment Date
                            </label>

                            <input
                                type="date"
                                value={appointmentDate}
                                onChange={(e) =>
                                    setAppointmentDate(e.target.value)
                                }
                                className="w-full p-4 rounded-xl text-black"
                            />

                            <p className="text-sm text-gray-400 mt-2">
                                Select your preferred consultation date. Our
                                team will confirm availability.
                            </p>

                        </div>

                        <textarea
                            rows={4}
                            placeholder="Describe your concern"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full p-4 rounded-xl text-black"
                        />

                        <button
                            onClick={handleSubmit}
                            className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-full font-semibold transition"
                        >
                            Schedule Appointment
                        </button>

                    </div>

                </div>

            </div>
        </section>
    );
}