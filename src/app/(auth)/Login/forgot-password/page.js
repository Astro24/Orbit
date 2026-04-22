"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/login/email-verification");
  };

  return (
    <div className="flex h-screen w-full bg-white overflow-hidden font-sans">

      {/* LEFT */}
      <div className="w-[48%] h-full bg-white px-[80px] flex flex-col justify-center">

        {/* HEADER */}
        <div className="flex items-center justify-between w-full mb-[80px]">
          <div className="flex items-center gap-3">
            <Image src="/orbit-logo.png" alt="logo" width={42} height={42} priority />
            <div className="leading-tight">
              <p className="text-[#1976D2] text-[16px] font-bold">Orbit</p>
              <p className="text-[#9E9E9E] text-[10px] font-medium">ERP System</p>
            </div>
          </div>

          <Link
            href="/signup"
            className="text-[#1976D2] text-[12px] font-bold border border-[#1976D2] px-6 py-2 rounded-lg hover:bg-blue-50 transition-all"
          >
            Sign Up
          </Link>
        </div>

        {/* CONTENT */}
        <div className="max-w-[420px] w-full">

          <p className="text-[12px] text-[#9E9E9E] mb-3 font-semibold tracking-[0.1em] uppercase">
            Password recovery
          </p>

          <h2 className="text-[38px] font-bold text-[#1A1A1A] mb-4">
            Forgot your password?
          </h2>

          <p className="text-[14px] text-[#9E9E9E] mb-[50px] leading-[1.7]">
            Enter your email and we’ll send you a verification code.
          </p>

          <div className="mb-8">
            <label className="block text-[14px] font-bold mb-3">
              Email address
            </label>

            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[54px] px-5 border border-[#D0D7DE] rounded-lg focus:border-[#1976D2] outline-none text-black"
            />
          </div>

          <button
            onClick={handleNavigation}
            className="w-full h-[54px] rounded-lg bg-gradient-to-r from-[#2DAAE1] to-[#2C5DAA] text-white font-bold"
          >
            Send
          </button>

        </div>
      </div>

      {/* RIGHT */}
      <div className="w-[52%] h-full relative bg-[#F4F6F8]">
        <Image
          src="/forgot-bg.png"
          alt="Password Recovery"
          fill
          className="object-cover"
          priority
        />
      </div>

    </div>
  );
}