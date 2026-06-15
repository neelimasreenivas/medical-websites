"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import {
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import {
    collection,
    getDocs,
    deleteDoc,
    doc,
    updateDoc,
} from "firebase/firestore";

export default function AdminPage() {
    const [appointments, setAppointments] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(
            auth,
            (user) => {
                if (!user) {
                    router.push("/login");
                } else {
                    setLoading(false);
                }
            }
        );

        return () => unsubscribe();
    }, [router]);

    const loadAppointments = async () => {
        try {
            const querySnapshot = await getDocs(
                collection(db, "appointments")
            );

            const data = querySnapshot.docs
                .map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                .reverse();

            setAppointments(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (!loading) {
            loadAppointments();
        }
    }, [loading]);

    const handleDelete = async (id: string) => {
        const confirmDelete = confirm(
            "Delete this appointment?"
        );

        if (!confirmDelete) return;

        try {
            await deleteDoc(
                doc(db, "appointments", id)
            );

            loadAppointments();
        } catch (error) {
            console.error(error);
            alert("Failed to delete appointment");
        }
    };

    const handleStatusChange = async (
        id: string,
        status: string
    ) => {
        try {
            await updateDoc(
                doc(db, "appointments", id),
                {
                    status,
                }
            );

            loadAppointments();
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogout = async () => {
        await signOut(auth);
        router.push("/login");
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-100 p-8">

            <div className="flex justify-between items-center mb-8">

                <h1 className="text-4xl font-bold">
                    Admin Dashboard
                </h1>

                <button
                    onClick={handleLogout}
                    className="
                        bg-red-500
                        hover:bg-red-600
                        text-white
                        px-6
                        py-3
                        rounded-xl
                    "
                >
                    Logout
                </button>

            </div>

            <div className="mb-6">

                <div
                    className="
                        bg-blue-600
                        text-white
                        p-6
                        rounded-2xl
                        shadow-lg
                        w-72
                    "
                >
                    <p className="text-sm opacity-80">
                        Total Appointments
                    </p>

                    <h2 className="text-4xl font-bold">
                        {appointments.length}
                    </h2>

                </div>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 overflow-x-auto">

                <table className="w-full">

                    <thead>

                        <tr className="border-b text-left">

                            <th className="p-3">Name</th>

                            <th className="p-3">Phone</th>

                            <th className="p-3">Age</th>

                            <th className="p-3">Gender</th>

                            <th className="p-3">Date</th>

                            <th className="p-3">Status</th>

                            <th className="p-3">Concern</th>

                            <th className="p-3">Actions</th>

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

                                    <select
                                        value={
                                            appointment.status ||
                                            "Pending"
                                        }
                                        onChange={(e) =>
                                            handleStatusChange(
                                                appointment.id,
                                                e.target.value
                                            )
                                        }
                                        className="
                                            border
                                            rounded-lg
                                            px-3
                                            py-2
                                        "
                                    >
                                        <option value="Pending">
                                            Pending
                                        </option>

                                        <option value="Contacted">
                                            Contacted
                                        </option>

                                        <option value="Confirmed">
                                            Confirmed
                                        </option>

                                        <option value="Completed">
                                            Completed
                                        </option>

                                    </select>

                                </td>

                                <td className="p-3">
                                    {appointment.message}
                                </td>

                                <td className="p-3">

                                    <div className="flex gap-2">

                                        <a
                                            href={`https://wa.me/91${appointment.phone}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="
                                                bg-green-500
                                                hover:bg-green-600
                                                text-white
                                                px-3
                                                py-2
                                                rounded-lg
                                            "
                                        >
                                            WhatsApp
                                        </a>

                                        <button
                                            onClick={() =>
                                                handleDelete(
                                                    appointment.id
                                                )
                                            }
                                            className="
                                                bg-red-500
                                                hover:bg-red-600
                                                text-white
                                                px-3
                                                py-2
                                                rounded-lg
                                            "
                                        >
                                            Delete
                                        </button>

                                    </div>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}