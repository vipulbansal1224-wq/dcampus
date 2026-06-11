import Image from "next/image";

export default function EventsPage() {
  const galleryImages = [
    "/DSC_0271_12_11zon.jpg",
    "/DSC_0190_13_11zon.jpg",
    "/DSC_0254_15_11zon.jpg",
    "/DSC_0256_9_11zon.jpg",
    "/DSC_0258_11_11zon.jpg",
    "/DSC_0244_4_11zon-scaled.jpg",
    "/DSC_0235_14_11zon.jpg",
    "/DSC_0257_10_11zon.jpg",
    "/DSC_0255_16_11zon.jpg",
    "/DSC_2047_5_11zon-scaled.jpg",
    "/DSC_0272_13_11zon.jpg",
    "/DSC_1987_4_11zon-scaled.jpg"
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Banner */}
      <div className="w-full h-64 md:h-96 relative">
        <Image src="/DSC_0188_12_11zon-1.jpg" alt="Events" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white tracking-wider">EVENTS</h1>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        
        {/* Cultural Activities */}
        <div className="bg-white p-8 md:p-12 shadow rounded-lg border-t-4 border-[#ff6b00]">
          <h2 className="text-3xl font-bold text-[#182B45] mb-6">Cultural Activities</h2>
          <p className="text-slate-700 leading-relaxed text-lg">
            Cultural activities are sports or activities which contribute to or enhance the historical or social development, appreciation of members of the public. It is training and refinement of the intellect, interest, tastes and skills of a person. At Dawn Computer Campus, we believe in the holistic development of our students by regularly organizing such events.
          </p>
        </div>

        {/* Event Gallery */}
        <div className="bg-white p-8 md:p-12 shadow rounded-lg">
          <h2 className="text-3xl font-bold text-[#182B45] mb-8 text-center">Event Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((src, index) => (
              <div key={index} className="relative h-48 md:h-64 rounded-lg overflow-hidden group shadow-sm hover:shadow-md transition-all">
                <Image 
                  src={src} 
                  alt={`Event Image ${index + 1}`} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Vision, Mission, Commitments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Vision */}
          <div className="bg-white border border-slate-200 shadow-sm rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
            <div className="h-48 relative bg-slate-100">
              <Image src="/vision.jpg" alt="Vision" fill className="object-cover" />
            </div>
            <div className="p-6 flex flex-col flex-grow text-center">
              <h3 className="text-2xl font-bold text-[#182B45] mb-4 uppercase">Vision</h3>
              <p className="text-slate-600 text-sm italic border-l-4 border-[#ff6b00] pl-4 text-left">
                "Everyone here has the sense that right now is one of those moments when we are informing the Future" <br/><br/>
                <span className="font-bold">- Sir Steve Jobs.</span> <br/><br/>
                Inspired by these words from Sir Steve Jobs, we think this is the right time to be digitized, we are now in a Digital World & our Future will be surrounded by digits. To live in this digital world we have to gain knowledge in Computer.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-white border border-slate-200 shadow-sm rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
            <div className="h-48 relative bg-slate-100">
              <Image src="/mission.jpg" alt="Mission" fill className="object-cover" />
            </div>
            <div className="p-6 flex flex-col flex-grow text-center">
              <h3 className="text-2xl font-bold text-[#182B45] mb-4 uppercase">Mission</h3>
              <p className="text-slate-600 text-sm">
                We want to provide the Best Education and Learning Experience to our students so that a student can give a major step towards future.
              </p>
            </div>
          </div>

          {/* Commitments */}
          <div className="bg-white border border-slate-200 shadow-sm rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
            <div className="h-48 relative bg-slate-100">
              <Image src="/comit.jpg" alt="Commitment" fill className="object-cover" />
            </div>
            <div className="p-6 flex flex-col flex-grow text-center">
              <h3 className="text-2xl font-bold text-[#182B45] mb-4 uppercase">Commitments</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm text-left">
                <li>DCC is Providing Computer Education since 2008.</li>
                <li>Students are trained here by the experienced teachers.</li>
                <li>Course fees are affordable to anyone.</li>
                <li>Course fee is taken in monthly installment.</li>
                <li>We take regular examination in school or college related computer courses.</li>
                <li>Extra Classes are available for weak students.</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Why Join DCC */}
        <div className="bg-white p-8 md:p-12 shadow rounded-lg">
          <h2 className="text-3xl font-bold text-[#182B45] mb-8 text-center">Why to Join DCC ?</h2>
          <p className="mb-6 font-semibold text-slate-700 text-center">A.: Now, it's a valuable and worthy question that why anyone should join DCC, so the answer is as following:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-600">
            <div className="flex gap-4 items-start bg-slate-50 p-4 rounded border border-slate-100">
              <span className="text-[#ff6b00] text-2xl">✓</span>
              <p>We are here to upgrade the education level and education pattern.</p>
            </div>
            <div className="flex gap-4 items-start bg-slate-50 p-4 rounded border border-slate-100">
              <span className="text-[#ff6b00] text-2xl">✓</span>
              <p>Make the students capable on actual platform of grabbing practical knowledge along with assignment work.</p>
            </div>
            <div className="flex gap-4 items-start bg-slate-50 p-4 rounded border border-slate-100">
              <span className="text-[#ff6b00] text-2xl">✓</span>
              <p>ISO 9001:2015 certification, so that student can put considerable value to their CV on ground of Technical and additional qualification.</p>
            </div>
            <div className="flex gap-4 items-start bg-slate-50 p-4 rounded border border-slate-100">
              <span className="text-[#ff6b00] text-2xl">✓</span>
              <p>Information of every student will be displayed on our website and certificates and Diploma will be valid in Public and Private Section.</p>
            </div>
            <div className="flex gap-4 items-start bg-slate-50 p-4 rounded border border-slate-100">
              <span className="text-[#ff6b00] text-2xl">✓</span>
              <p>Not only computer education will be imported but also general awareness, regular seminars, exposure to practical working condition, educational trips.</p>
            </div>
            <div className="flex gap-4 items-start bg-slate-50 p-4 rounded border border-slate-100">
              <span className="text-[#ff6b00] text-2xl">✓</span>
              <p>Those who wants to go abroad, we are here to give them genuine guidance and path to their desired destination.</p>
            </div>
            <div className="flex gap-4 items-start bg-slate-50 p-4 rounded border border-slate-100 md:col-span-2">
              <span className="text-[#ff6b00] text-2xl">✓</span>
              <p>The top most requirements now a days is 'Job' and we assure you that we will provide you a suitable job, as per students personal skills, capability, that too without any full month or half month charges.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
