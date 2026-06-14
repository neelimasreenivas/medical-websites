"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function ContactSection() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async () => {
        try {
            await addDoc(collection(db, "appointments"), {
                name,
                phone,
                message,
                createdAt: new Date(),
            });

            alert("Appointment request submitted!");

            setName("");
            setPhone("");
            setMessage("");
        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        }
    };

    return (
        <section
            id="contact"
            className="bg-gradient-to-r from-blue-950 to-slate-900 text-white py-24"
        >
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-4xl font-bold mb-6">
                    Book an Appointment
                </h2>

                <p className="text-lg text-gray-300 mb-10">
                    Schedule a consultation with our neurology specialists.
                </p>

                <div className="grid md:grid-cols-3 gap-8">

                    <div className="bg-white/10 p-6 rounded-2xl">
                        <h3 className="font-bold mb-2">
                            📞 Phone
                        </h3>

                        <p>
                            +91 9876543210
                        </p>
                    </div>

                    <div className="bg-white/10 p-6 rounded-2xl">
                        <h3 className="font-bold mb-2">
                            📍 Location
                        </h3>

                        <p>
                            Hyderabad, Telangana
                        </p>
                    </div>

                    <div className="bg-white/10 p-6 rounded-2xl">
                        <h3 className="font-bold mb-2">
                            🕒 Hours
                        </h3>

                        <p>
                            Mon - Sat | 9 AM - 7 PM
                        </p>
                    </div>

                </div>

                <div className="mt-12 max-w-2xl">

                    <div className="space-y-4">

                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-4 rounded-xl bg-white text-black"
                        />

                        <input
                            type="text"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full p-4 rounded-xl bg-white text-black"
                        />

                        <textarea
                            placeholder="Describe your concern"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full p-4 rounded-xl bg-white text-black"
                        />

                        <button
                            onClick={handleSubmit}
                            className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-full font-semibold transition"
                        >
                            Book Appointment
                        </button>

                    </div>

                </div>

            </div>
        </section>
    );
}