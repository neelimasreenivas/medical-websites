"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function AdminPage() {
    const [appointments, setAppointments] = useState<any[]>([]);

    useEffect(() => {
        loadAppointments();
    }, []);

    const loadAppointments = async () => {
        const querySnapshot = await getDocs(
            collection(db, "appointments")
        );

        const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        setAppointments(data);
    };

    return (
        <div className="min-h-screen bg-slate-100 p-8">

            <h1 className="text-4xl font-bold mb-8">
                Admin Dashboard
            </h1>

            <div className="bg-white rounded-2xl shadow-lg p-6 overflow-x-auto">

                <table className="w-full">

                    <thead>
                        <tr className="border-b text-left">
                            <th className="p-3">Name</th>
                            <th className="p-3">Phone</th>
                            <th className="p-3">Age</th>
                            <th className="p-3">Gender</th>
                            <th className="p-3">Date</th>
                            <th className="p-3">Concern</th>
                        </tr>
                    </thead>

                    <tbody>

                        {appointments.map((appointment) => (
                            <tr
                                key={appointment.id}
                                className="border-b"
                            >
                                <td className="p-3">
                                    {appointment.name}
                                </td>

                                <td className="p-3">
                                    {appointment.phone}
                                </td>

                                <td className="p-3">
                                    {appointment.age}
                                </td>

                                <td className="p-3">
                                    {appointment.gender}
                                </td>

                                <td className="p-3">
                                    {appointment.appointmentDate}
                                </td>

                                <td className="p-3">
                                    {appointment.message}
                                </td>
                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}