import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500/20">DC</div>
              <span className="font-bold text-xl tracking-tight hidden sm:block">Dawn Computer Campus</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
              <Link href="#" className="hover:text-white transition-colors">Home</Link>
              <Link href="#courses" className="hover:text-white transition-colors">Courses</Link>
              <Link href="#verify" className="hover:text-white transition-colors">Verification</Link>
              <Link href="#events" className="hover:text-white transition-colors">Events</Link>
              <Link href="#news" className="hover:text-white transition-colors">Newsroom</Link>
              <Link href="#contact" className="px-5 py-2.5 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/20 rounded-lg text-blue-400 transition-all">Contact Us</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 mb-8">
            <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-widest">
              ISO 9001:2015 Certified
            </span>
            <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest">
              Ministry of MSME Registered
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-tight">
            Welcome To <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Dawn Computer Campus</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            DAWN represents a new beginning and a fresh approach. We are here to change the orthodox trend of computer education. Make you learn, so that help you to earn!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#courses" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/25">
              Explore Courses
            </Link>
            <Link href="#verify" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-semibold transition-all">
              Verify Certificate
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-24 bg-slate-900 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose DCC?</h2>
            <p className="text-slate-400">Our facilities are well maintained and modern.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "7+ Specialist Faculties", desc: "Expert instructors for every specialized course." },
              { title: "24x7 CCTV Monitoring", desc: "Secure environment continuously monitored for your safety." },
              { title: "Personalized Classes", desc: "We provide classes according to student's abilities and performance." }
            ].map((f, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all">
                <h3 className="text-xl font-bold mb-3 text-blue-400">{f.title}</h3>
                <p className="text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Career Development Courses</h2>
            <p className="text-slate-400">Flexible training schedules at an affordable pocket-friendly course fee.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "DCA", desc: "Diploma in Computer Applications", color: "from-blue-500 to-cyan-500" },
              { title: "BCA", desc: "Bachelor of Computer Applications Foundation", color: "from-indigo-500 to-purple-500" },
              { title: "Tally Prime", desc: "Professional Accounting & GST", color: "from-emerald-500 to-teal-500" },
              { title: "Photoshop", desc: "Graphic Design & Editing", color: "from-rose-500 to-orange-500" }
            ].map((course, i) => (
              <div key={i} className="group p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-white/20 transition-colors">
                <div className="bg-slate-950 p-6 rounded-xl h-full">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br  mb-6 flex items-center justify-center text-xl font-bold">
                    {course.title[0]}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{course.title}</h3>
                  <p className="text-slate-400 text-sm">{course.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Administration */}
      <section className="py-24 bg-slate-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Administration</h2>
            <p className="text-slate-400">The pillars behind Dawn Computer Campus.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { role: "Director", name: "Mr. Gopal Kumar", msg: "Our journey began in 2008. We never give false hope, we give the right way of education." },
              { role: "Chairman", name: "Mr. Parveen Verma", msg: "We offer the best training environment and flexible schedules at affordable fees." },
              { role: "Managing Director", name: "Mr. Parmod Verma", msg: "We proudly provide the best computer courses to make the future of students bright." },
              { role: "HOD", name: "Miss Jaspreet Kaur", msg: "It is my moral duty to guide the students from the beginning till the end of the course." },
              { role: "Examination Controller", name: "Mrs. Pawanpreet Kaur", msg: "Ensuring rigorous standards and seamless examination processes for all courses." }
            ].map((admin, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-950 border border-white/5">
                <h3 className="text-xl font-bold text-white mb-1">{admin.name}</h3>
                <p className="text-blue-400 text-sm font-semibold mb-4 uppercase tracking-wider">{admin.role}</p>
                <p className="text-slate-400 italic">"{admin.msg}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Testimonials</h2>
            <p className="text-slate-400">What our students say about us.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/20">
              <p className="text-slate-300 italic mb-6">"DCC teacher's guidance is very awesome. They try to solve every question with love and dedication. The environment is very friendly and full of love and discipline."</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center font-bold text-blue-400">S</div>
                <div>
                  <p className="text-white font-bold">Student</p>
                  <p className="text-slate-500 text-xs">DCA Batch</p>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-transparent border border-indigo-500/20">
              <p className="text-slate-300 italic mb-6">"Teaching staff in dcc is very nice and cooperative..trips and functions are also arranged here. Fee structure is also genuine as compared to other institutes."</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center font-bold text-indigo-400">A</div>
                <div>
                  <p className="text-white font-bold">Alumni</p>
                  <p className="text-slate-500 text-xs">Tally Batch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verify Certificate */}
      <section id="verify" className="py-24 bg-slate-900 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-10 rounded-3xl bg-slate-950 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full" />
            <h2 className="text-3xl font-bold mb-4 relative z-10">Online Certificate Verification</h2>
            <p className="text-slate-400 mb-8 relative z-10">Enter your certification code (e.g., DDC/2K2/456789) to verify its authenticity instantly.</p>
            
            <form className="relative z-10 flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input type="text" placeholder="Enter Certificate Code" className="flex-1 px-5 py-4 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors" />
              <button type="button" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-colors">
                Verify
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-16 bg-slate-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Head Office</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Office Number 3, Opp. Gurdwara Sahib, <br/>
                Near Govt Primary School, Bhamian Road, Ludhiana
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Campus 2</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Near Mehandi Palace, Opp. St. Marry Convent School, <br/>
                Tajpur Road, Ludhiana
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Branch Office</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Office Number 10, Sukhmani Tower, <br/>
                Kochar Market, Ludhiana
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-slate-500 text-sm">
            <p>&copy; 2026 Dawn Computer Campus. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="https://www.facebook.com/rahul.ketan?mibextid=ZbWKwL" className="hover:text-blue-400 transition-colors">Facebook</Link>
              <Link href="https://www.instagram.com/dcc_gopal/" className="hover:text-blue-400 transition-colors">Instagram</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
