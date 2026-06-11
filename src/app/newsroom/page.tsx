import Image from "next/image";

export default function NewsroomPage() {
  const articles = [
    "/A.jpg",
    "/B.jpg",
    "/C.jpg",
    "/D.jpg",
    "/E.jpg",
    "/F.jpg",
    "/G.jpg"
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Banner */}
      <div className="w-full h-64 md:h-96 relative">
        <Image src="/allone_11zon.jpg" alt="Newsroom" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white tracking-wider">NEWSROOM</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        
        <div className="bg-white p-8 md:p-12 shadow rounded-lg">
          <h2 className="text-3xl font-bold text-[#182B45] mb-12 text-center border-b pb-4">Our Published Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((src, index) => (
              <div key={index} className="relative h-[400px] rounded-lg overflow-hidden border border-slate-200 shadow-sm group hover:shadow-xl transition-all">
                <Image 
                  src={src} 
                  alt={`Published Article ${index + 1}`} 
                  fill 
                  className="object-cover md:object-contain group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
