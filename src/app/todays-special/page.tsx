import ImageSlider from "@/components/ImageSlider";

export default function TodaysSpecial() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Single Banner Slider */}
      <ImageSlider images={['/special-banner.jpg']} />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="bg-[#182B45] text-white p-6 text-center">
            <h1 className="text-3xl font-bold">Today's Special</h1>
          </div>
          <div className="p-12 space-y-12 text-center">
            <div>
              <h2 className="text-2xl font-bold text-[#ff6b00] mb-4">Thought of the Day</h2>
              <p className="text-xl text-slate-700 italic border-l-4 border-[#ff6b00] pl-6 py-2 bg-slate-50">
                "Everyone here has the sense that right now is one of those moments when we are informing the Future."<br/>
                <span className="block mt-4 text-sm font-bold text-slate-500">- Sir Steve Jobs</span>
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#ff6b00] mb-4">Word of the Day</h2>
              <div className="inline-block bg-[#182B45] text-white px-8 py-4 rounded-lg text-2xl font-bold tracking-widest">
                DAWN
              </div>
              <p className="mt-4 text-slate-600 max-w-lg mx-auto">A period of early morning which represents a new beginning and a fresh approach to everyday life.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
