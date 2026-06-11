import Image from "next/image";

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <div className="w-full h-64 md:h-96 relative">
        <Image src="/DSC_0188_12_11zon-1.jpg" alt="Events" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white tracking-wider">EVENTS</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white p-8 md:p-12 shadow rounded-lg">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#ff6b00] mb-4">Cultural Activities</h2>
              <p className="text-slate-700 leading-relaxed text-lg">
                Cultural activities are sports or activities which contribute to or enhance the historical or social development, appreciation of members of the public. It is training and refinement of the intellect, interest, tastes and skills of a person. At Dawn Computer Campus, we believe in the holistic development of our students by regularly organizing such events.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
