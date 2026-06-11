import Image from "next/image";

export default function BirthdaysPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-24 min-h-[70vh]">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-100">
        <div className="bg-gradient-to-r from-[#ff6b00] to-orange-400 p-8 text-center text-white">
          <span className="text-5xl block mb-4">🎂</span>
          <h1 className="text-4xl font-bold">Today's Birthday</h1>
        </div>
        
        <div className="p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Birthday GIF */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-64 h-64">
                <Image src="/99495-happy-birthday.gif" alt="Happy Birthday GIF" fill className="object-contain" unoptimized />
              </div>
            </div>
            
            {/* Photo & Details */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-[#182B45] shadow-lg mb-6">
                <Image src="/Gopal-Ji-Director.jpeg" alt="Gopal Kumar G" fill className="object-cover" />
              </div>
              <h2 className="text-4xl font-bold text-[#182B45] mb-2">Gopal Kumar G</h2>
              <p className="text-slate-600 text-lg">Wishing you a very Happy Birthday from the entire Dawn Computer Campus family!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
