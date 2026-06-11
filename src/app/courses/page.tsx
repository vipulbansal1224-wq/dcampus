"use client";
import Image from "next/image";
import { useState } from "react";

export default function CoursesPage() {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  const toggleCourse = (course: string) => {
    if (expandedCourse === course) {
      setExpandedCourse(null);
    } else {
      setExpandedCourse(course);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="w-full h-64 md:h-96 relative">
        <Image src="/img11-scaled.jpg" alt="Courses" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white tracking-wider">COURSES</h1>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        
        {/* Director's Desk */}
        <div className="bg-white p-8 md:p-12 shadow rounded-lg border-t-4 border-[#ff6b00]">
          <h2 className="text-3xl font-bold text-[#182B45] mb-6">Message from Director Desk</h2>
          <p className="text-slate-700 leading-relaxed text-lg italic bg-slate-50 p-6 rounded-r-lg border-l-4 border-[#182B45]">
            DAWN COMPUTER CAMPUS the establishment of the institution is based upon "We" not "I". The basic purpose is to import quality education and providing full worth to the time given by the students. In today's world education and money these two are integral component of the survival, every one wants to be educated, infact well educated, and to make this thought practically possible DCC is there to provide futile education, so that student coming to DCC, should gain all around knowledge and experience of working too not rather just having theoretical knowledge, that would help them to raise bar of students capability and instinct. <br/><br/>
            DCC is having an agenda to make students that much perfect, so that when they go to outer world, their knowledge let them to earn.
          </p>
        </div>

        {/* Courses Offered */}
        <div className="bg-white p-8 md:p-12 shadow rounded-lg">
          <h2 className="text-3xl font-bold text-[#182B45] mb-8 text-center uppercase tracking-widest">Courses Offered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Short Term */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-lg overflow-hidden flex flex-col">
              <div className="h-48 relative bg-slate-100">
                <Image src="/short-term-cc.jpg" alt="Short Term Courses" fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow text-center">
                <h3 className="text-xl font-bold text-[#182B45] mb-4 uppercase">Short Term Courses</h3>
                {expandedCourse === 'short' && (
                  <div className="text-slate-600 text-sm mb-4 text-left">
                    Specialized short duration courses for quick skill enhancement in specific technologies. Perfect for working professionals and students looking for quick upgrades.
                  </div>
                )}
                <button onClick={() => toggleCourse('short')} className="mt-auto bg-[#ff6b00] text-white px-6 py-2 rounded-full font-bold hover:bg-orange-600 transition-colors mx-auto">
                  {expandedCourse === 'short' ? 'Hide Details' : 'Show All'}
                </button>
              </div>
            </div>

            {/* Long Term */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-lg overflow-hidden flex flex-col">
              <div className="h-48 relative bg-slate-100">
                <Image src="/long-term.jpg" alt="Long Term Courses" fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow text-center">
                <h3 className="text-xl font-bold text-[#182B45] mb-4 uppercase">Long Term Courses</h3>
                {expandedCourse === 'long' && (
                  <div className="text-slate-600 text-sm mb-4 text-left">
                    Comprehensive long duration diplomas covering A-to-Z of computer applications and programming. Ideal for a solid career foundation.
                  </div>
                )}
                <button onClick={() => toggleCourse('long')} className="mt-auto bg-[#ff6b00] text-white px-6 py-2 rounded-full font-bold hover:bg-orange-600 transition-colors mx-auto">
                  {expandedCourse === 'long' ? 'Hide Details' : 'Show All'}
                </button>
              </div>
            </div>

            {/* Basic Computer */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-lg overflow-hidden flex flex-col">
              <div className="h-48 relative bg-slate-100 p-4">
                <Image src="/basic-computers-c.png" alt="Basic Computer Applications" fill className="object-contain p-4" />
              </div>
              <div className="p-6 flex flex-col flex-grow text-center">
                <h3 className="text-xl font-bold text-[#182B45] mb-4 uppercase">Basic Computer Applications</h3>
                {expandedCourse === 'basic' && (
                  <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm mb-4 text-left">
                    <li>Computer fundamentals</li>
                    <li>Paint, Wordpad, Notepad</li>
                    <li>Microsoft Word, Excel, Powerpoint, Access</li>
                    <li>Internet surfing & Emails</li>
                  </ul>
                )}
                <button onClick={() => toggleCourse('basic')} className="mt-auto bg-[#ff6b00] text-white px-6 py-2 rounded-full font-bold hover:bg-orange-600 transition-colors mx-auto">
                  {expandedCourse === 'basic' ? 'Hide Details' : 'Show All'}
                </button>
              </div>
            </div>

            {/* Web Dev */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-lg overflow-hidden flex flex-col">
              <div className="h-48 relative bg-slate-100 p-4">
                <Image src="/Web-Design-Free-Download-PNG.png" alt="Web Developments" fill className="object-contain p-4" />
              </div>
              <div className="p-6 flex flex-col flex-grow text-center">
                <h3 className="text-xl font-bold text-[#182B45] mb-4 uppercase">Web Developments</h3>
                {expandedCourse === 'web' && (
                  <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm mb-4 text-left">
                    <li>HTML & CSS Basics</li>
                    <li>Dream weaver</li>
                    <li>Website Designing</li>
                  </ul>
                )}
                <button onClick={() => toggleCourse('web')} className="mt-auto bg-[#ff6b00] text-white px-6 py-2 rounded-full font-bold hover:bg-orange-600 transition-colors mx-auto">
                  {expandedCourse === 'web' ? 'Hide Details' : 'Show All'}
                </button>
              </div>
            </div>

            {/* Programming */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-lg overflow-hidden flex flex-col">
              <div className="h-48 relative bg-slate-100 p-4">
                <Image src="/Programming-Language-PNG-Image.png" alt="Programming Languages" fill className="object-contain p-4" />
              </div>
              <div className="p-6 flex flex-col flex-grow text-center">
                <h3 className="text-xl font-bold text-[#182B45] mb-4 uppercase">Programming Languages</h3>
                {expandedCourse === 'prog' && (
                  <div className="text-left">
                    <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm mb-2">
                      <li>C Language</li>
                      <li>Visual Basics</li>
                    </ul>
                    <p className="text-xs text-slate-500 mt-2">If some one wants to be a programmer in computer languages to do so the basic step is to start learning C language.</p>
                  </div>
                )}
                <button onClick={() => toggleCourse('prog')} className="mt-auto bg-[#ff6b00] text-white px-6 py-2 rounded-full font-bold hover:bg-orange-600 transition-colors mx-auto">
                  {expandedCourse === 'prog' ? 'Hide Details' : 'Show All'}
                </button>
              </div>
            </div>

            {/* Tally */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-lg overflow-hidden flex flex-col">
              <div className="h-48 relative bg-slate-100 p-4">
                <Image src="/tally-cc-1.png" alt="Tally Accounts" fill className="object-contain p-4" />
              </div>
              <div className="p-6 flex flex-col flex-grow text-center">
                <h3 className="text-xl font-bold text-[#182B45] mb-4 uppercase">Tally (Accounts)</h3>
                {expandedCourse === 'tally' && (
                  <div className="text-slate-600 text-sm mb-4 text-left">
                    Finance is a thing up on which entire world is dependant, every one needs money its utility and its important too to manage and keep records of proper inflows and outflows of the cash and other transaction.
                  </div>
                )}
                <button onClick={() => toggleCourse('tally')} className="mt-auto bg-[#ff6b00] text-white px-6 py-2 rounded-full font-bold hover:bg-orange-600 transition-colors mx-auto">
                  {expandedCourse === 'tally' ? 'Hide Details' : 'Show All'}
                </button>
              </div>
            </div>

            {/* What is Time Management */}
            <div className="bg-slate-800 text-white border border-slate-700 shadow-sm rounded-lg overflow-hidden flex flex-col lg:col-span-3">
              <div className="p-8 flex flex-col items-center justify-center text-center">
                <h3 className="text-2xl font-bold text-[#ff6b00] mb-4 uppercase">What is Time Management</h3>
                <p className="text-slate-300 mb-6 max-w-2xl">Learn how to effectively manage your time and increase productivity in your professional career. Proper time management is the key to success.</p>
                <a href="/DCC-time-management-1.pdf" target="_blank" rel="noopener noreferrer" className="bg-[#182B45] border border-[#ff6b00] text-[#ff6b00] px-8 py-3 rounded-full font-bold hover:bg-[#ff6b00] hover:text-white transition-colors inline-block">
                  Click Here
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Why Join & Requirements */}
        <div className="bg-white p-8 md:p-12 shadow rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <section>
              <h2 className="text-2xl font-bold text-[#ff6b00] mb-4">What is the basic qualification needed to be a computer literate?</h2>
              <p className="mb-4 leading-relaxed text-slate-700">Computer education is such thing, which is necessary for every one, and it can be learnt on any stage of life, and more over it is not restricted to any kind of barrier like age, education or gender.</p>
              <p className="mb-4 leading-relaxed text-slate-700">Keeping in mind the importance of computer literacy, even schools have included it in their regular education circle.</p>
              <p className="mb-4 leading-relaxed text-slate-700">This is something which can be learn at any age and even not bounded to particular qualifications.</p>
              
              <h2 className="text-2xl font-bold text-[#ff6b00] mb-4 mt-8">Coaching Scheme</h2>
              <p className="leading-relaxed text-slate-700">DCC is here to provide you quality stuff via experienced and highly qualified teachers in field of information and technology. Along with that exams and regular test shall be conducted on a uniform period of time.</p>
              <p className="leading-relaxed text-slate-700 mt-4">In terms of providing better knowledge we shall be providing to all study materials in form of books, notes and assignment.</p>
            </section>

            <section className="bg-slate-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-[#182B45] mb-4">Why to Join DCC ?</h2>
              <p className="mb-4 font-semibold text-slate-700">Now, it's a valuable and worthy question that why anyone should join DCC, so the answer is as following:</p>
              <ul className="list-disc list-inside space-y-3 ml-4 text-slate-600 text-sm">
                <li>We are here to upgrade the education level and education pattern.</li>
                <li>Make the students capable on actual platform of grabbing practical knowledge along with assignment work.</li>
                <li>ISO 9001:2015 certification, so that student can put considerable value to their CV on ground of Technical and additional qualification.</li>
                <li>Information of every student will be displayed on our website and certificates and Diploma will be valid in Public and Private Section.</li>
                <li>Not only computer education will be imported but also general awareness, regular seminars, exposure to practical working condition, educational trips.</li>
                <li>Those who wants to go abroad, we are here to give them genuine guidance and path to their desired destination.</li>
                <li>The top most requirements now a days is 'Job' and we assure you that we will provide you a suitable job, as per students personal skills, capability, that too without any full month or half month charges.</li>
              </ul>
            </section>
          </div>
        </div>

      </div>
    </div>
  );
}
