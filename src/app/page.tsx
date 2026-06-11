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
              <span className="font-bold text-xl tracking-tight">DC Campus</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
              <Link href="#" className="hover:text-white transition-colors">Home</Link>
              <Link href="#courses" className="hover:text-white transition-colors">Courses</Link>
              <Link href="#verify" className="hover:text-white transition-colors">Verify Certificate</Link>
              <Link href="#contact" className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-all">Contact Us</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Admissions Open 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-tight">
            Empowering Your Future with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Premium Tech Education</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            DC Campus is Punjab's leading computer training institute, offering industry-ready courses in DCA, BCA, Tally, and Professional Design.
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

      {/* Courses Section */}
      <section id="courses" className="py-24 bg-slate-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Top Courses</h2>
            <p className="text-slate-400">Master the skills needed for today's digital economy.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "DCA", desc: "Diploma in Computer Applications (120 Hrs)", color: "from-blue-500 to-cyan-500" },
              { title: "BCA", desc: "Bachelor of Computer Applications Foundation", color: "from-indigo-500 to-purple-500" },
              { title: "Tally Prime", desc: "Professional Accounting & GST (150 Hrs)", color: "from-emerald-500 to-teal-500" },
              { title: "Photoshop", desc: "Graphic Design & Editing - 3 Month Cert", color: "from-rose-500 to-orange-500" }
            ].map((course, i) => (
              <div key={i} className="group p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-white/20 transition-colors">
                <div className="bg-slate-950 p-6 rounded-xl h-full">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${course.color} mb-6 flex items-center justify-center text-xl font-bold`}>
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

      {/* Verify Certificate */}
      <section id="verify" className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-10 rounded-3xl bg-slate-900 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full" />
            <h2 className="text-3xl font-bold mb-4 relative z-10">Verify Your Certificate</h2>
            <p className="text-slate-400 mb-8 relative z-10">Enter your certification code (e.g., DDC/2K2/456789) to verify its authenticity.</p>
            
            <form className="relative z-10 flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input type="text" placeholder="Enter Certificate Code" className="flex-1 px-5 py-4 rounded-xl bg-slate-950 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors" />
              <button type="button" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-colors">
                Verify
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/5 text-center text-slate-500 text-sm">
        <p>&copy; 2026 DC Campus Education. All rights reserved.</p>
      </footer>
    </main>
  );
}
