import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200">
      {/* Top Header Contact Bar */}
      <div className="w-full bg-blue-900 text-white/90 py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span>?? +91 0000000000</span>
            <span className="hidden sm:inline">?? info@dccampus.com</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="https://www.facebook.com/rahul.ketan?mibextid=ZbWKwL" className="hover:text-white">Facebook</Link>
            <Link href="https://www.instagram.com/dcc_gopal/" className="hover:text-white">Instagram</Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              {/* Fallback Logo */}
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-2xl text-white">DC</div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl tracking-tight text-blue-900 leading-none">Dawn Computer Campus</span>
                <span className="text-xs font-semibold text-slate-500 mt-1">An ISO 9001:2015 Certified Organization</span>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600">
              <Link href="#" className="text-blue-600">Home</Link>
              <Link href="#courses" className="hover:text-blue-600 transition-colors">Courses</Link>
              <Link href="#verify" className="hover:text-blue-600 transition-colors">Certificate Verification</Link>
              <Link href="#events" className="hover:text-blue-600 transition-colors">Events</Link>
              <Link href="#news" className="hover:text-blue-600 transition-colors">Newsroom</Link>
              <Link href="#contact" className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-white border-b border-slate-200 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold mb-6">
            Admissions Open 2026
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Welcome To <span className="text-blue-600">Dawn Computer Campus</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            DAWN refers to a period of early morning which represents a new beginning and a fresh approach to everyday life. We are here to change the orthodox trend of computer education.
            <br/><br/>
            <strong>Our motto is to "make you learn, so that help you to earn"</strong>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#courses" className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded font-bold transition-all shadow-md">
              View Our Courses
            </Link>
            <Link href="#verify" className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-50 border-2 border-slate-200 text-slate-700 rounded font-bold transition-all shadow-sm">
              Verify Certificate
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Facilities */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Facilities & Features</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "7+ Specialist Faculties", desc: "We have experienced specialist faculties for your respective courses.", icon: "?????" },
              { title: "24x7 CCTV Monitoring", desc: "We always monitor all your activity through CCTV 24 x 7 for safety.", icon: "??" },
              { title: "Personalized Classes", desc: "We provide classes according to students abilities and performance.", icon: "??" }
            ].map((f, i) => (
              <div key={i} className="p-8 rounded-xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">{f.title}</h3>
                <p className="text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Career Development Courses</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-slate-600">Find your Career Development Course Here</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "DCA", desc: "Diploma in Computer Applications (120 Hrs)", bg: "bg-blue-50", text: "text-blue-700" },
              { title: "BCA", desc: "Bachelor of Computer Applications", bg: "bg-indigo-50", text: "text-indigo-700" },
              { title: "Tally Prime", desc: "Professional Accounting & GST (150 Hrs)", bg: "bg-emerald-50", text: "text-emerald-700" },
              { title: "Photoshop", desc: "Graphic Design & Editing - 3 Month", bg: "bg-rose-50", text: "text-rose-700" }
            ].map((course, i) => (
              <div key={i} className="p-6 rounded-xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center text-2xl font-bold mb-6  ">
                  {course.title[0]}
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{course.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{course.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Administration */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Administration</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { role: "Director", name: "Mr. Gopal Kumar", msg: "Our journey began way back in the year 2008... we only give the right way of education so that every student can make their future in digital era." },
              { role: "Chairman", name: "Mr. Parveen Verma", msg: "We offer the best training environment and flexible training schedule to the students at an affordable course fee." },
              { role: "Managing Director", name: "Mr. Parmod Verma", msg: "We can proudly say that we provide the best computer courses and training techniques at the most affordable prices." },
              { role: "HOD", name: "Miss Jaspreet Kaur", msg: "It is my moral duty to guide the students from the beginning till the end of the course. Also, escort them through any difficulty." },
              { role: "Examination Controller", name: "Mrs. Pawanpreet Kaur", msg: "Ensuring rigorous standards and seamless examination processes for all courses." }
            ].map((admin, i) => (
              <div key={i} className="p-8 rounded-xl bg-white shadow-sm border border-slate-200 text-center">
                <div className="w-20 h-20 bg-slate-100 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl text-slate-400 font-bold">
                  {admin.name[4]}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{admin.name}</h3>
                <p className="text-blue-600 text-sm font-bold mb-4 uppercase">{admin.role}</p>
                <p className="text-slate-600 text-sm italic leading-relaxed">"{admin.msg}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Student Testimonials</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-slate-50 border border-slate-100">
              <p className="text-slate-700 italic mb-6 leading-relaxed">"DCC teacher's guidance is very awesome. They try to solve every question with love and dedication. The environment is very friendly and full of love and discipline."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-700">S</div>
                <div>
                  <p className="text-slate-900 font-bold">Student</p>
                  <p className="text-slate-500 text-sm">DCC Campus</p>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-xl bg-slate-50 border border-slate-100">
              <p className="text-slate-700 italic mb-6 leading-relaxed">"Teaching staff in dcc is very nice and cooperative..trips and functions are also arranged here. Fee structure is also genuine as compared to other institutes."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-700">A</div>
                <div>
                  <p className="text-slate-900 font-bold">Alumni</p>
                  <p className="text-slate-500 text-sm">DCC Campus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verify Certificate */}
      <section id="verify" className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Verify Your Certificate Online</h2>
          <p className="text-blue-100 mb-8">We provide you the gateway to verify your certificate online. Enter your certification code.</p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input type="text" placeholder="e.g., DDC/2K2/456789" className="flex-1 px-5 py-3.5 rounded bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            <button type="button" className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded font-bold transition-colors shadow-lg">
              Verify
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">?? Head Office</h3>
              <p className="text-sm leading-relaxed">
                Office Number 3, Opp. Gurdwara Sahib, <br/>
                Near Govt Primary School, <br/>
                Bhamian Road, Ludhiana
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">?? Campus 2</h3>
              <p className="text-sm leading-relaxed">
                Near Mehandi Palace, <br/>
                Opp. St. Marry Convent School, <br/>
                Tajpur Road, Ludhiana
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">?? Branch Office</h3>
              <p className="text-sm leading-relaxed">
                Office Number 10, <br/>
                Sukhmani Tower, <br/>
                Kochar Market, Ludhiana
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-sm">
            <p>&copy; 2026 Dawn Computer Campus. An ISO 9001:2015 Certified Organization. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
