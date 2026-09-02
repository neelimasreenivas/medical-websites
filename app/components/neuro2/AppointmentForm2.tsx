"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AppointmentForm2() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const [appointmentDate, setAppointmentDate] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);

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
                clinic: "Sharada Neuro Care",
                name,
                age,
                gender,
                phone,
                appointmentDate,
                message,
                status: "Pending",
                createdAt: new Date(),
            });

            setSuccess(true);

            setName("");
            setAge("");
            setGender("");
            setPhone("");
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
        <div className="bg-white rounded-3xl p-8 shadow-sm">

            <h3 className="text-3xl font-bold text-slate-900 mb-2">
                Request a Consultation
            </h3>

            <p className="text-slate-600 mb-8">
                Fill in your details and our team will contact you shortly.
            </p>

            {success && (
                <div className="bg-emerald-600 text-white p-4 rounded-xl mb-6">
                    Appointment request submitted successfully.
                    Our team will contact you soon.
                </div>
            )}

            <div className="space-y-4">

                <div className="grid md:grid-cols-2 gap-4">

                    <input
                        type="text"
                        placeholder="Full Name *"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="
                            w-full
                            p-4
                            rounded-xl
                            border
                            border-slate-200
                            focus:outline-none
                            focus:ring-2
                            focus:ring-emerald-400
                        "
                    />

                    <input
                        type="text"
                        placeholder="Phone Number *"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="
                            w-full
                            p-4
                            rounded-xl
                            border
                            border-slate-200
                            focus:outline-none
                            focus:ring-2
                            focus:ring-emerald-400
                        "
                    />

                </div>

                <div className="grid md:grid-cols-2 gap-4">

                    <input
                        type="number"
                        placeholder="Age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="
                            w-full
                            p-4
                            rounded-xl
                            border
                            border-slate-200
                            focus:outline-none
                            focus:ring-2
                            focus:ring-emerald-400
                        "
                    />

                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="
                            w-full
                            p-4
                            rounded-xl
                            border
                            border-slate-200
                            focus:outline-none
                            focus:ring-2
                            focus:ring-emerald-400
                        "
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
                    type="date"
                    value={appointmentDate}
                    onChange={(e) =>
                        setAppointmentDate(e.target.value)
                    }
                    className="
                        w-full
                        p-4
                        rounded-xl
                        border
                        border-slate-200
                        focus:outline-none
                        focus:ring-2
                        focus:ring-emerald-400
                    "
                />

                <textarea
                    rows={4}
                    placeholder="Describe your concern"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="
                        w-full
                        p-4
                        rounded-xl
                        border
                        border-slate-200
                        focus:outline-none
                        focus:ring-2
                        focus:ring-emerald-400
                    "
                />

                <button
                    onClick={handleSubmit}
                    className="
                        w-full
                        bg-gradient-to-r
                        from-emerald-600
                        to-green-600
                        hover:scale-[1.02]
                        transition
                        duration-300
                        text-white
                        font-semibold
                        py-4
                        rounded-xl
                        shadow-lg
                    "
                >
                    Request Appointment
                </button>

            </div>

        </div>
    );
}