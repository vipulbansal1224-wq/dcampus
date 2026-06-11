import Image from "next/image";

export default function NewsroomPage() {
  return (
    <div className="min-h-screen">
      <div className="w-full h-64 md:h-96 relative">
        <Image src="/allone_11zon.jpg" alt="Newsroom" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white tracking-wider">NEWSROOM</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#182B45] mb-4">Our Published Articles</h2>
          <p className="text-slate-500">Stay updated with the latest happenings at Dawn Computer Campus</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for news items */}
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-slate-100 flex items-center justify-center text-slate-400">
                <span>News Image</span>
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-[#ff6b00] uppercase tracking-wider">Latest News</span>
                <h3 className="text-xl font-bold text-[#182B45] mt-2 mb-3">Campus Update 2026</h3>
                <p className="text-slate-600 text-sm mb-4">New batches are starting soon. Contact the head office for more details and admission process.</p>
                <button className="text-[#ff6b00] font-semibold text-sm hover:underline">Read More →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
