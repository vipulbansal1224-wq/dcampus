import Image from "next/image";
import Link from "next/link";
import ImageSlider from "@/components/ImageSlider";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* 1. Hero Slider */}
      <ImageSlider />

      {/* 2. Welcome Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#182B45] mb-6">Welcome To Dawn Computer Campus</h1>
          <h2 className="text-xl text-[#ff6b00] font-semibold mb-8">An ISO 9001:2015 Certified Organization &amp; Registered under Ministry of MSME, Govt. of India.</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Dawn Computer Campus or DCC, is a concept which is purely based upon a quality generation approach "DAWN" which refers to a period of early morning which represent a new beginning and a fresh approach.
          </p>
        </div>
      </section>

      {/* 3. Our Facilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#182B45] mb-16">Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            <div className="text-center p-6 bg-slate-50 rounded-2xl hover:shadow-lg transition-all border border-slate-100">
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <Image src="/c-1.png" alt="Career" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold text-[#182B45] mb-3">Career Development Courses</h3>
              <p className="text-slate-600">Find your Career Development Course Here</p>
            </div>

            <div className="text-center p-6 bg-slate-50 rounded-2xl hover:shadow-lg transition-all border border-slate-100">
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <Image src="/c-2.png" alt="Verification" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold text-[#182B45] mb-3">Online Certificate Verification</h3>
              <p className="text-slate-600">We provide you the gateway to verify your certificate online.</p>
            </div>

            <div className="text-center p-6 bg-slate-50 rounded-2xl hover:shadow-lg transition-all border border-slate-100">
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <Image src="/c-3.png" alt="Faculty" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold text-[#182B45] mb-3">Specialist Faculty</h3>
              <p className="text-slate-600">We have 7+ Specialist Faculties for your respective courses.</p>
            </div>

            <div className="text-center p-6 bg-slate-50 rounded-2xl hover:shadow-lg transition-all border border-slate-100">
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <Image src="/c-4.png" alt="Ratio" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold text-[#182B45] mb-3">1:1 Computer Ratio for students</h3>
              <p className="text-slate-600">We provide you the atmosphere to learn quickly.</p>
            </div>

            <div className="text-center p-6 bg-slate-50 rounded-2xl hover:shadow-lg transition-all border border-slate-100">
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <Image src="/c-5.png" alt="CCTV" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold text-[#182B45] mb-3">24x7 CCTV Monitoring</h3>
              <p className="text-slate-600">We always monitor all your activity through CCTV 24 x 7.</p>
            </div>

            <div className="text-center p-6 bg-slate-50 rounded-2xl hover:shadow-lg transition-all border border-slate-100">
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <Image src="/c-2.png" alt="Smart Class" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold text-[#182B45] mb-3">Smart Class with Smart Devices</h3>
              <p className="text-slate-600">We provide classes according to students abilities and performance.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Administration */}
      <section className="py-20 bg-[#182B45] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#ff6b00]">Administration</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm text-center flex flex-col items-center">
              <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-[#ff6b00] mb-6 shadow-xl">
                <Image src="/Gopal-Ji-Director.jpeg" alt="Mr. Gopal Kumar" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Mr. Gopal Kumar</h3>
              <p className="text-[#ff6b00] font-semibold mb-6">-- Director --</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                By the Grace of GOD &amp; my Supporters, I have come a long way in computer education field. Our journey began way back in the year 2008, from then and till now As a Director I didn't want to invest...
              </p>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm text-center flex flex-col items-center">
              <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-[#ff6b00] mb-6 shadow-xl">
                <Image src="/Parveen-Verma-director.jpeg" alt="Mr. Parveen Verma" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Mr. Parveen Verma</h3>
              <p className="text-[#ff6b00] font-semibold mb-6">-- Chairman --</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                I am very much grateful to the fellow teachers and support staffs of Ideal on this way of journey. Being a leading institute for computer classes at our side, we offer the best training environment...
              </p>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm text-center flex flex-col items-center">
              <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-[#ff6b00] mb-6 shadow-xl">
                <Image src="/Parmod-verma-Director.jpeg" alt="Mr. Parmod Verma" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Mr. Parmod Verma</h3>
              <p className="text-[#ff6b00] font-semibold mb-6">-- Managing Director --</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                We can proudly say that we provide the best computer courses and training techniques at our side at the most affordable prices and make the future of students bright.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Animated Stats */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center justify-center group">
              <div className="w-20 h-20 relative mb-4 group-hover:-translate-y-2 transition-transform">
                <Image src="/Capture8.png" alt="Course" fill className="object-contain" />
              </div>
              <p className="text-3xl font-bold text-[#ff6b00] mb-2">25+</p>
              <h3 className="text-lg font-bold text-[#182B45] uppercase">Course</h3>
            </div>
            <div className="flex flex-col items-center justify-center group">
              <div className="w-20 h-20 relative mb-4 group-hover:-translate-y-2 transition-transform">
                <Image src="/Capture10.png" alt="Faculties" fill className="object-contain" />
              </div>
              <p className="text-3xl font-bold text-[#ff6b00] mb-2">10+</p>
              <h3 className="text-lg font-bold text-[#182B45] uppercase">Faculties</h3>
            </div>
            <div className="flex flex-col items-center justify-center group">
              <div className="w-20 h-20 relative mb-4 group-hover:-translate-y-2 transition-transform">
                <Image src="/Capture12.png" alt="Students" fill className="object-contain" />
              </div>
              <p className="text-3xl font-bold text-[#ff6b00] mb-2">1500+</p>
              <h3 className="text-lg font-bold text-[#182B45] uppercase">Students</h3>
            </div>
            <div className="flex flex-col items-center justify-center group">
              <div className="w-20 h-20 relative mb-4 group-hover:-translate-y-2 transition-transform">
                <Image src="/Capture13.png" alt="Branches" fill className="object-contain" />
              </div>
              <p className="text-3xl font-bold text-[#ff6b00] mb-2">3</p>
              <h3 className="text-lg font-bold text-[#182B45] uppercase">Branches</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#182B45] mb-16">Teacher's &amp; Staff Views</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: "Miss-Jaspreet-Kaur-Instructor-cum-HOD.jpeg", name: "Miss Jaspreet", desc: "Towards the end of my active period as a DCC teacher, the computer made its entrance. Being the curious teacher I thought myself to be, always open to change, it should have suited me perfectly." },
              { img: "Miss-Bhavana-Instrctor.jpeg", name: "Miss Bhavana", desc: "During the past ten years, the discrepancy between these teachers' knowledge of computers on the one hand and the development of computer technology on the other has increased rather than decreased." },
              { img: "testimonial1.jpeg", name: "Staff Member", desc: "Our Computer Centre not only imparts training to students but guide them to step into a world of technology and its numerous benefits. Being an office administrator it is my moral duty to guide the students." },
              { img: "ankita.jpeg", name: "Ankita (Student)", desc: "The facilities at the campus are well maintained and modern, and there is a great sense of community among the students and faculty. The faculty in the campus have a great passion." },
              { img: "palak.jpeg", name: "Palak (Student)", desc: "I'm very lucky to have a teacher like you. You guys are on the ladder of success. I liked the way you teach Students. I have seen everything like:- Discipline, love, friendship." },
              { img: "mansi.jpeg", name: "Mansi (Student)", desc: "Teaching staff in dcc is very nice and cooperative..trips and functions are also arranged here...Here there is no pressure of studies on the child, as the teachers are strict as well as friendly." }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow relative">
                <div className="text-4xl text-[#ff6b00] opacity-20 absolute top-4 left-4">"</div>
                <div className="w-24 h-24 relative rounded-full overflow-hidden border-2 border-[#182B45] mb-6">
                  <Image src={`/${t.img}`} alt={t.name} fill className="object-cover" />
                </div>
                <p className="text-slate-600 text-sm italic mb-6 leading-relaxed flex-grow">"{t.desc}"</p>
                <h4 className="font-bold text-[#182B45] border-t-2 border-[#ff6b00] pt-4 w-1/2 mx-auto">{t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
