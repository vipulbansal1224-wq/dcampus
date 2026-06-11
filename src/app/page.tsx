import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800 font-sans">
      
      {/* Top Header Contact Bar */}
      <div className="w-full bg-[#182B45] text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span>?? 621543</span>
            <span className="hidden sm:inline">?? info@dccampus.com</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="https://www.facebook.com/rahul.ketan?mibextid=ZbWKwL" className="hover:text-blue-300">Facebook</Link>
            <Link href="https://www.instagram.com/dcc_gopal/" className="hover:text-pink-300">Instagram</Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-24">
          <div className="flex items-center gap-3">
            <Image src="/logo-scaled-102x77.jpg" alt="DCC Logo" width={102} height={77} className="object-contain" />
          </div>
          <div className="hidden lg:flex items-center gap-6 text-[15px] font-semibold text-slate-700">
            <Link href="#" className="text-[#ff6b00]">Home</Link>
            <Link href="#" className="hover:text-[#ff6b00] transition-colors">Courses</Link>
            <Link href="#" className="hover:text-[#ff6b00] transition-colors">Certificate Verification</Link>
            <Link href="#" className="hover:text-[#ff6b00] transition-colors">Events</Link>
            <Link href="#" className="hover:text-[#ff6b00] transition-colors">Birthday's</Link>
            <Link href="#" className="hover:text-[#ff6b00] transition-colors">Student of the Week</Link>
            <Link href="#" className="hover:text-[#ff6b00] transition-colors">Newsroom</Link>
            <Link href="#" className="hover:text-[#ff6b00] transition-colors">Today's Special</Link>
            <Link href="#" className="hover:text-[#ff6b00] transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-[500px] bg-slate-100 flex items-center justify-center overflow-hidden">
        <Image src="/comp-1-1024x768.jpeg" alt="Banner" fill className="object-cover opacity-20" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-[#182B45] mb-4">Welcome To Dawn Computer Campus</h1>
          <Image src="/divider-icon-2-300x86.png" alt="Divider" width={300} height={86} className="mx-auto mb-6" />
          <p className="text-lg text-slate-700 max-w-2xl mx-auto font-medium">
            An ISO 9001:2015 Certified Organization & Registered under Ministry of MSME, Govt. of India.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#182B45] mb-6">Dawn Computer Campus</h2>
          <p className="text-slate-600 leading-relaxed max-w-4xl mx-auto">
            Dawn Computer Campus or DCC, is a concept which is purely based upon a quality generation approach "DAWN" which refers to a period of early morning which represent a new beginning and a fresh approach to everyday life. We are here to change the orthodox trend of computer education. After analyzing various aspects of this field and properly understanding the expectations associated with computer education, we are here to serve the community. The approach of DAWN is based upon quality generation not on quantity... our motto is to "make you learn, so that help you to earn".
          </p>
        </div>
      </section>

      {/* Facilities / Features */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#182B45] mb-2">Our Facilities</h2>
            <Image src="/divider-icon-2-300x86.png" alt="Divider" width={200} height={57} className="mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { img: "/c-1.png", text: "We provide you the gateway to verify your certificate online." },
              { img: "/c-2.png", text: "We have 7+ Specialist Faculties for your respective courses." },
              { img: "/c-3.png", text: "We always monitor all your activity through CCTV 24 x 7." },
              { img: "/c-4.png", text: "We provide classes according to students abilities and performance." }
            ].map((f, i) => (
              <div key={i} className="text-center p-6 bg-white shadow-sm border border-slate-100">
                <Image src={f.img} alt="Icon" width={64} height={64} className="mx-auto mb-4" />
                <p className="text-slate-600 font-medium">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Administration */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#182B45] mb-2">Administration</h2>
            <Image src="/divider-icon-2-300x86.png" alt="Divider" width={200} height={57} className="mx-auto" />
          </div>
          
          <div className="space-y-16">
            {/* Director */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-64 shrink-0">
                <Image src="/Gopal-Ji-Director.jpeg" alt="Gopal Ji" width={256} height={256} className="rounded-lg shadow-md" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#ff6b00] mb-2">Mr. Gopal Kumar - Director</h3>
                <p className="text-slate-600 leading-relaxed italic">
                  "By the Grace of GOD & my Supporters, I have come a long way in computer education field. Our journey began way back in the year 2008, from then and till now As a Director I didn't want to invest our precious time in advertising, I always try to improve our teaching techniques to educate every student efficiently. I am very proud to say that here we never give false hope to students, we only give the right way of education so that every student can make their future in digital era."
                </p>
              </div>
            </div>

            {/* Chairman */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 bg-slate-50 p-8 rounded-lg">
              <div className="w-56 shrink-0">
                <Image src="/Parveen-Verma-director-230x300.jpeg" alt="Parveen Verma" width={230} height={300} className="rounded-lg shadow-md" />
              </div>
              <div className="text-right">
                <h3 className="text-xl font-bold text-[#ff6b00] mb-2">Mr. Parveen Verma - Chairman</h3>
                <p className="text-slate-600 leading-relaxed italic">
                  "I am very much grateful to the fellow teachers and support staffs of Ideal on this way of journey. Being a leading institute for computer classes at our side, we offer the best training environment and flexible training schedule to the students at an affordable course fee. Our course fee is so pocket-friendly that anyone can afford it."
                </p>
              </div>
            </div>

            {/* MD & HOD */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col items-center text-center">
                <Image src="/Parmod-verma-Director.jpeg" alt="Parmod Verma" width={200} height={200} className="rounded-full shadow-md mb-4" />
                <h3 className="text-lg font-bold text-[#ff6b00]">Mr. Parmod Verma</h3>
                <p className="text-[#182B45] font-semibold mb-2">Managing Director</p>
                <p className="text-slate-600 italic text-sm">"We can proudly say that we provide the best computer courses and training techniques at our side at the most affordable prices and make the future of students bright."</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image src="/Miss-Jaspreet-Kaur-Instructor-cum-HOD.jpeg" alt="Jaspreet Kaur" width={200} height={200} className="rounded-full shadow-md mb-4" />
                <h3 className="text-lg font-bold text-[#ff6b00]">Miss Jaspreet Kaur</h3>
                <p className="text-[#182B45] font-semibold mb-2">Instructor Cum HOD</p>
                <p className="text-slate-600 italic text-sm">"Our Computer Centre not only imparts training to students but guide them to step into a world of technology... It is my moral duty to guide the students from the beginning till the end."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#182B45] mb-2">Student Testimonials</h2>
            <Image src="/divider-icon-2-300x86.png" alt="Divider" width={200} height={57} className="mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: "/ankita.jpeg", name: "Ankita", text: "DCC teacher's guidance is very awesome. They try to solve every question with love and dedication. The environment of DCC is very friendly." },
              { img: "/yamini.jpeg", name: "Yamini", text: "Teaching staff in dcc is very nice and cooperative..trips and functions are also arranged here. Fee structure is also genuine." },
              { img: "/palak.jpeg", name: "Palak", text: "I am thoroughly enjoying doing the course at DCC Computer Centre! Because his method of teaching is very good and he explains very well." },
              { img: "/mansi.jpeg", name: "Mansi", text: "I'm very lucky to have a teacher like you. You guys are on the ladder of success. I liked the way you teach Students." }
            ].map((t, i) => (
              <div key={i} className="bg-white p-6 shadow border border-slate-100 text-center flex flex-col items-center">
                <Image src={t.img} alt={t.name} width={100} height={100} className="rounded-full border-4 border-slate-100 shadow-sm mb-4" />
                <p className="text-slate-600 italic text-sm mb-4 flex-1">"{t.text}"</p>
                <h4 className="font-bold text-[#182B45]">- {t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#182B45] mb-2">Our Gallery</h2>
            <Image src="/divider-icon-2-300x86.png" alt="Divider" width={200} height={57} className="mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["/comp-1-1024x768.jpeg", "/comp-2-1024x768.jpeg", "/comp-3-1024x768.jpeg", "/comp-4-1024x768.jpeg"].map((src, i) => (
              <div key={i} className="relative h-48 rounded overflow-hidden shadow-sm">
                <Image src={src} alt="Gallery" fill className="object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#182B45] text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Head Office</h3>
            <p className="text-sm">Office Number 3, Opp. Gurdwara Sahib,<br/>Near Govt Primary School, Bhamian Road, Ludhiana</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Campus 2</h3>
            <p className="text-sm">Near Mehandi Palace, Opp. St. Marry Convent School,<br/>Tajpur Road, Ludhiana</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Branch Office</h3>
            <p className="text-sm">Office Number 10, Sukhmani Tower,<br/>Kochar Market, Ludhiana</p>
          </div>
        </div>
        <div className="text-center text-sm border-t border-slate-700 pt-6">
          <p>Copyright © 2026 Dawn Computer Campus</p>
        </div>
      </footer>
    </main>
  );
}

