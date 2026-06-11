import Image from "next/image";

export default function StudentOfTheWeek() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 min-h-[70vh]">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-100">
        <div className="bg-[#182B45] text-white p-8 text-center">
          <span className="text-5xl block mb-4">🏆</span>
          <h1 className="text-4xl font-bold">Student of the Week</h1>
        </div>
        <div className="p-12 text-center flex flex-col items-center">
          <div className="w-64 h-64 relative rounded-lg overflow-hidden border-4 border-[#ff6b00] shadow-md mb-8">
            <Image src="/Mr-Vaibhav.jpeg" alt="Mr. Vaibhav" fill className="object-cover" />
          </div>
          <h2 className="text-4xl font-bold text-[#182B45] mb-4">Mr. Vaibhav</h2>
          <div className="text-4xl text-yellow-400 mb-6 flex justify-center items-center gap-2">
            ★★★★★ <span className="text-xl text-slate-500 font-medium">5/5</span>
          </div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">Congratulations for being selected as the Student of the Week for your outstanding performance and dedication!</p>
        </div>
      </div>
    </div>
  );
}
