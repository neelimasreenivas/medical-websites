"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";

interface Appointment {
    id: string;
    clinic?: string;
    name: string;
    phone: string;
    age?: string;
    gender?: string;
    appointmentDate?: string;
    message?: string;
    status?: string;
    createdAt?: any;
}

export default function AdminDashboard() {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [selectedClinic, setSelectedClinic] = useState<string>("All");
    const [selectedStatus, setSelectedStatus] = useState<string>("All");
    const [loading, setLoading] = useState<boolean>(true);

    const fetchAppointments = async () => {
        setLoading(true);
        try {
            const querySnapshot = await getDocs(collection(db, "appointments"));
            const list: Appointment[] = [];
            querySnapshot.forEach((docSnap) => {
                list.push({
                    id: docSnap.id,
                    ...docSnap.data(),
                } as Appointment);
            });
            setAppointments(list);
        } catch (error) {
            console.error("Error fetching appointments:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAppointments();
    }, []);

    const handleStatusChange = async (id: string, newStatus: string) => {
        try {
            await updateDoc(doc(db, "appointments", id), {
                status: newStatus,
            });
            setAppointments((prev) =>
                prev.map((item) =>
                    item.id === id ? { ...item, status: newStatus } : item
                )
            );
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this appointment?")) return;
        try {
            await deleteDoc(doc(db, "appointments", id));
            setAppointments((prev) => prev.filter((item) => item.id !== id));
        } catch (error) {
            console.error("Error deleting appointment:", error);
        }
    };

    // Filter Logic
    const filteredAppointments = appointments.filter((app) => {
        const clinicMatch =
            selectedClinic === "All" ||
            (app.clinic && app.clinic.toLowerCase() === selectedClinic.toLowerCase());

        const statusMatch =
            selectedStatus === "All" ||
            (app.status || "Pending").toLowerCase() === selectedStatus.toLowerCase();

        return clinicMatch && statusMatch;
    });

    return (
        <div className="min-h-screen bg-slate-100 p-6 md:p-10 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-extrabold text-slate-900">
                            Appointments Dashboard
                        </h1>
                        <p className="text-slate-600 text-sm mt-1">
                            Manage patient inquiries across all clinic locations
                        </p>
                    </div>

                    <button
                        onClick={fetchAppointments}
                        className="bg-slate-900 text-white px-5 py-2.5 rounded-xl font-medium text-sm hover:bg-slate-800 transition"
                    >
                        🔄 Refresh Data
                    </button>
                </div>

                {/* Filters */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-8 flex flex-col md:flex-row gap-6">

                    {/* Clinic Filter */}
                    <div className="flex-1">
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                            Filter by Clinic
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {["All", "Anu Neuro Care", "Sharada Neuro"].map((clinic) => (
                                <button
                                    key={clinic}
                                    onClick={() => setSelectedClinic(clinic)}
                                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${selectedClinic === clinic
                                            ? "bg-slate-900 text-white shadow-sm"
                                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                        }`}
                                >
                                    {clinic}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Status Filter */}
                    <div className="md:w-64">
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                            Filter by Status
                        </label>
                        <select
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.target.value)}
                            className="w-full p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-sm font-medium focus:outline-none"
                        >
                            <option value="All">All Statuses</option>
                            <option value="Pending">Pending</option>
                            <option value="Confirmed">Confirmed</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>

                </div>

                {/* Appointments Table */}
                {loading ? (
                    <div className="bg-white p-12 text-center rounded-2xl shadow-sm text-slate-500">
                        Loading appointments...
                    </div>
                ) : filteredAppointments.length === 0 ? (
                    <div className="bg-white p-12 text-center rounded-2xl shadow-sm text-slate-500">
                        No appointments found matching the selected filters.
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse text-sm">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase text-xs tracking-wider">
                                        <th className="p-4">Clinic</th>
                                        <th className="p-4">Patient</th>
                                        <th className="p-4">Contact</th>
                                        <th className="p-4">Pref. Date</th>
                                        <th className="p-4">Concern</th>
                                        <th className="p-4">Status</th>
                                        <th className="p-4 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {filteredAppointments.map((app) => (
                                        <tr key={app.id} className="hover:bg-slate-50/50 transition">
                                            {/* Clinic Tag */}
                                            <td className="p-4 font-semibold">
                                                <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-bold ${app.clinic === "Sharada Neuro"
                                                        ? "bg-emerald-100 text-emerald-800"
                                                        : "bg-blue-100 text-blue-800"
                                                    }`}>
                                                    {app.clinic || "Anu Neuro Care"}
                                                </span>
                                            </td>

                                            {/* Patient Info */}
                                            <td className="p-4">
                                                <div className="font-bold text-slate-900">{app.name}</div>
                                                <div className="text-xs text-slate-500">
                                                    {app.age ? `${app.age} yrs` : ""} {app.gender ? `• ${app.gender}` : ""}
                                                </div>
                                            </td>

                                            {/* Phone */}
                                            <td className="p-4 text-slate-700 font-medium">
                                                {app.phone}
                                            </td>

                                            {/* Date */}
                                            <td className="p-4 text-slate-600">
                                                {app.appointmentDate || "N/A"}
                                            </td>

                                            {/* Message */}
                                            <td className="p-4 text-slate-500 max-w-xs truncate">
                                                {app.message || "—"}
                                            </td>

                                            {/* Status Selector */}
                                            <td className="p-4">
                                                <select
                                                    value={app.status || "Pending"}
                                                    onChange={(e) => handleStatusChange(app.id, e.target.value)}
                                                    className={`px-2.5 py-1 rounded-lg text-xs font-bold focus:outline-none border border-slate-200 ${app.status === "Confirmed"
                                                            ? "bg-amber-50 text-amber-700"
                                                            : app.status === "Completed"
                                                                ? "bg-emerald-50 text-emerald-700"
                                                                : "bg-slate-100 text-slate-700"
                                                        }`}
                                                >
                                                    <option value="Pending">Pending</option>
                                                    <option value="Confirmed">Confirmed</option>
                                                    <option value="Completed">Completed</option>
                                                </select>
                                            </td>

                                            {/* Action Delete */}
                                            <td className="p-4 text-right">
                                                <button
                                                    onClick={() => handleDelete(app.id)}
                                                    className="text-rose-600 hover:text-rose-800 text-xs font-semibold px-2 py-1 rounded hover:bg-rose-50 transition"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}