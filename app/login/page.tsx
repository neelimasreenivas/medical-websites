"use client";

import { useState } from "react";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            router.push("/admin");
        } catch (error) {
            console.error(error);
            alert("Invalid credentials");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100">

            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

                <h1 className="text-3xl font-bold mb-6">
                    Admin Login
                </h1>

                <div className="space-y-4">

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-4 border rounded-xl"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-4 border rounded-xl"
                    />

                    <button
                        onClick={handleLogin}
                        className="w-full bg-blue-600 text-white py-4 rounded-xl"
                    >
                        Login
                    </button>

                </div>

            </div>

        </div>
    );
}