export default function BirthdaysPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 min-h-[70vh]">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-100">
        <div className="bg-gradient-to-r from-[#ff6b00] to-orange-400 p-8 text-center text-white">
          <span className="text-5xl block mb-4">🎂</span>
          <h1 className="text-4xl font-bold">Today's Birthday</h1>
        </div>
        <div className="p-12 text-center">
          <h2 className="text-3xl font-bold text-[#182B45] mb-4">Gopal Kumar G</h2>
          <p className="text-slate-600 text-lg">Wishing you a very Happy Birthday from the entire Dawn Computer Campus family!</p>
        </div>
      </div>
    </div>
  );
}
