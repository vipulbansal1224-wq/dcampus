export default function StudentOfTheWeek() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-24 min-h-[70vh]">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
        <div className="bg-[#182B45] text-white p-8 text-center">
          <span className="text-5xl block mb-4">🏆</span>
          <h1 className="text-4xl font-bold">Student of the Week</h1>
        </div>
        <div className="p-12 text-center">
          <div className="w-48 h-48 bg-slate-100 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-[#ff6b00]">
            <span className="text-slate-400">Photo</span>
          </div>
          <h2 className="text-3xl font-bold text-[#182B45] mb-2">Announcing Soon</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">We recognize outstanding performance and dedication every week. Check back soon to see our latest shining star!</p>
        </div>
      </div>
    </div>
  );
}
