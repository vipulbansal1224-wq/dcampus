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
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white p-8 md:p-12 shadow rounded-lg">
          <div className="space-y-8 text-slate-700">
            <section>
              <h2 className="text-2xl font-bold text-[#ff6b00] mb-4">Basic Qualification Needed</h2>
              <p className="mb-4 leading-relaxed">Computer education is such thing, which is necessary for every one, and it can be learnt on any stage of life, and more over it is not restricted to any kind of barrier like age, education or gender. Keeping in mind the importance of computer literacy, even schools have included it in their regular education circle. This is something which can be learn at any age and even not bounded to particular qualifications.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#ff6b00] mb-4">Coaching Scheme</h2>
              <p className="mb-4 leading-relaxed">DCC is here to provide you quality stuff via experienced and highly qualified teachers in field of information and technology. Along with that exams and regular test shall be conducted on a uniform period of time. In terms of providing better knowledge we shall be providing to all study materials in form of books, notes and assignment.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#ff6b00] mb-4">Basic Computer Course</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Computer fundamentals</li>
                <li>Paint, Wordpad, Notepad</li>
                <li>Microsoft Word, Excel, Powerpoint, Access</li>
                <li>Internet surfing & Emails</li>
                <li>Dream weaver</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#ff6b00] mb-4">C Language & Visual Basics</h2>
              <p className="mb-4 leading-relaxed">If some one wants to be a programmer in computer languages to do so the basic step is to start learning C language. C is one of the most widely used programming language of all time.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#182B45] mb-4 mt-12">Why to Join DCC ?</h2>
              <p className="mb-4 font-semibold">Now, it's a valuable and worthy question that why anyone should join DCC, so the answer is as following:</p>
              <ul className="list-disc list-inside space-y-3 ml-4">
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
