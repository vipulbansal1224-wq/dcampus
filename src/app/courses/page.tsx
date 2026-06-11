import Image from "next/image";

export default function CoursesPage() {
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
          <h2 className="text-3xl font-bold text-[#182B45] mb-8 text-center">Courses Offered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#ff6b00] mb-3">Basic Computer Applications</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>Computer fundamentals</li>
                <li>Paint, Wordpad, Notepad</li>
                <li>Microsoft Word, Excel, Powerpoint, Access</li>
                <li>Internet surfing & Emails</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#ff6b00] mb-3">Web Developments</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>HTML & CSS Basics</li>
                <li>Dream weaver</li>
                <li>Website Designing</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#ff6b00] mb-3">Programming Languages</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>C Language</li>
                <li>Visual Basics</li>
              </ul>
              <p className="text-sm text-slate-500 mt-4">If some one wants to be a programmer in computer languages to do so the basic step is to start learning C language.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#ff6b00] mb-3">Tally (Accounts)</h3>
              <p className="text-slate-600">Finance is a thing up on which entire world is dependant, every one needs money its utility and its important too to manage and keep records of proper inflows and outflows of the cash and other transaction.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#182B45] mb-3">Short Term Courses</h3>
              <p className="text-slate-600">Specialized short duration courses for quick skill enhancement in specific technologies.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#182B45] mb-3">Long Term Courses</h3>
              <p className="text-slate-600">Comprehensive long duration diplomas covering A-to-Z of computer applications and programming.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:shadow-md transition-shadow lg:col-span-3">
              <h3 className="text-xl font-bold text-[#182B45] mb-3">What is Time Management</h3>
              <p className="text-slate-600">Learn how to effectively manage your time and increase productivity in your professional career. Click Here to know more.</p>
            </div>

          </div>
        </div>

        {/* Why Join & Requirements */}
        <div className="bg-white p-8 md:p-12 shadow rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <section>
              <h2 className="text-2xl font-bold text-[#ff6b00] mb-4">Basic Qualification Needed</h2>
              <p className="mb-4 leading-relaxed text-slate-700">Computer education is such thing, which is necessary for every one, and it can be learnt on any stage of life, and more over it is not restricted to any kind of barrier like age, education or gender. Keeping in mind the importance of computer literacy, even schools have included it in their regular education circle.</p>
              
              <h2 className="text-2xl font-bold text-[#ff6b00] mb-4 mt-8">Coaching Scheme</h2>
              <p className="leading-relaxed text-slate-700">DCC is here to provide you quality stuff via experienced and highly qualified teachers in field of information and technology. Along with that exams and regular test shall be conducted on a uniform period of time. In terms of providing better knowledge we shall be providing to all study materials in form of books, notes and assignment.</p>
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
