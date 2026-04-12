"use client"; 

import React from 'react';
import { FiSearch, FiBell, FiChevronDown } from 'react-icons/fi';
import { LuLayoutGrid } from 'react-icons/lu'; // أيقونة تشبه اللي في الصورة تماماً
import { BsArrowUpRight } from 'react-icons/bs'; 

const AllMemos = () => {
  const memos = Array(16).fill({
    sn: "01",
    title: "Operations memo",
    sentFrom: "Williams Achegbani",
    sentTo: "Chief Operations Officer",
    date: "16/11/2022",
    attachment: "Yes",
    type: "Sent",
  });

  return (
    // استخدام font-sans يضمن استدعاء أفضل خط متاح في النظام (غالباً Inter)
    <div className="min-h-screen bg-gray-50 p-8 font-sans text-slate-900">
      
      {/* Header Section */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <div className="flex items-center gap-3">
             {/* الأيقونة الزرقاء المطابقة للصورة */}
             <div className="text-[#2485C1] text-4xl bg-blue-50 p-1 rounded-lg">
                <LuLayoutGrid />
             </div>
             {/* الخط هنا عريض جداً (font-black) ليطابق تصميم الصورة */}
             <h1 className="text-4xl font-black tracking-tight text-black">Memo</h1>
          </div>
          <p className="text-lg text-gray-600 mt-2 font-medium">
            Create and send memos to designated offices.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-all">
            <FiBell className="text-gray-500 text-2xl" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </div>
          
          <div className="flex items-center gap-3 border-l pl-4 border-gray-200">
            <img 
              src="/Ellipse 1.svg" // استخدمت الامتداد svg بناءً على ملفك
              alt="Profile" 
              className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover"
              onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Otor+John"; }}
            />
            <div className="text-right">
              <p className="text-sm font-bold text-gray-900">Otor John</p>
              <p className="text-xs text-gray-500 font-semibold">HR Office</p>
            </div>
            <FiChevronDown className="text-gray-400 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Stats and Search Section */}
      <div className="bg-white p-8 rounded-2xl shadow-sm mb-8 flex flex-wrap items-center justify-between gap-6 border border-gray-100">
        <div className="pr-12 border-r border-gray-100">
          <h2 className="text-5xl font-black text-gray-900">300</h2>
          <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mt-1">Total memo</p>
        </div>

        <div className="flex-1 max-w-md">
          <p className="text-sm font-bold mb-2 text-gray-700">Quick search a memo</p>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Enter search word" 
              className="w-full pl-4 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#2485C1] focus:ring-4 focus:ring-blue-500/5 transition-all font-medium"
            />
            <FiSearch className="absolute right-4 top-4 text-gray-400 text-xl" />
          </div>
        </div>

        <div className="w-52">
          <p className="text-sm font-bold mb-2 text-gray-700">Filter memo</p>
          <select className="w-full p-3.5 border border-gray-200 rounded-xl bg-gray-50 text-sm outline-none cursor-pointer text-gray-600 font-semibold">
            <option>All memos</option>
          </select>
        </div>

        <button className="bg-[#2485C1] hover:bg-[#1a6fa3] text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-200 active:scale-95 self-end">
          Create Memo
        </button>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-[24px] shadow-sm overflow-hidden border border-gray-100">
        <div className="p-7 border-b border-gray-50 flex justify-between items-center">
          <h3 className="font-black text-2xl text-gray-800">All Memos</h3>
          <div className="text-sm font-bold text-gray-500">
            Showing <span className="border-2 border-gray-100 px-4 py-1.5 rounded-xl font-black text-gray-900 mx-1 bg-gray-50">16</span> per page
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50 text-gray-400 text-xs uppercase tracking-[0.1em] border-b border-gray-100 font-black">
                <th className="px-8 py-5">S/N</th>
                <th className="px-8 py-5">Memo Title</th>
                <th className="px-8 py-5">Sent From</th>
                <th className="px-8 py-5">Sent To</th>
                <th className="px-8 py-5">Date</th>
                <th className="px-8 py-5">Attachment?</th>
                <th className="px-8 py-5">Memo Type</th>
                <th className="px-8 py-5">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-50">
              {memos.map((memo, index) => (
                <tr key={index} className="hover:bg-blue-50/30 transition-all cursor-default group">
                  <td className="px-8 py-5 text-gray-400 font-bold">{(index + 1).toString().padStart(2, '0')}</td>
                  <td className="px-8 py-5 font-black text-gray-900">{memo.title}</td>
                  <td className="px-8 py-5 text-gray-600 font-semibold">{memo.sentFrom}</td>
                  <td className="px-8 py-5 text-gray-600 font-semibold">{memo.sentTo}</td>
                  <td className="px-8 py-5 text-gray-500 font-bold">{memo.date}</td>
                  <td className="px-8 py-5 text-gray-600 font-bold">{memo.attachment}</td>
                  <td className="px-8 py-5">
                    <span className="flex items-center gap-1.5 font-black text-gray-800">
                      {memo.type} <BsArrowUpRight className="text-xs text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <button className="text-[#2485C1] font-black hover:text-blue-800 hover:underline transition-all">View more</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-8 border-t border-gray-50 flex items-center gap-3 bg-white">
          <button className="w-12 h-12 flex items-center justify-center bg-[#2485C1] text-white rounded-2xl font-black shadow-xl shadow-blue-200 active:scale-90 transition-all">1</button>
          {[2, 3, 4, 5].map((num) => (
            <button key={num} className="w-12 h-12 flex items-center justify-center border-2 border-gray-100 rounded-2xl hover:bg-gray-50 text-gray-600 transition-all font-black">
              {num}
            </button>
          ))}
          <button className="w-12 h-12 flex items-center justify-center border-2 border-gray-100 rounded-2xl hover:bg-gray-50 text-gray-400 transition-all font-black">»</button>
        </div>
      </div>

      <footer className="mt-14 text-center text-xs text-gray-400 font-bold tracking-widest uppercase">
        Copyright © 2022 Relia Energy. All Rights Reserved
      </footer>
    </div>
  );
};

export default AllMemos;