export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 min-h-[70vh]">
      <h1 className="text-4xl font-bold text-[#182B45] mb-12 text-center">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-8 shadow rounded-lg border-t-4 border-[#ff6b00]">
          <h2 className="text-2xl font-bold text-[#182B45] mb-6">Get in Touch</h2>
          <div className="space-y-6 text-slate-700">
            <p className="flex items-start gap-4">
              <span className="text-2xl">📍</span>
              <span><strong>Head Office:</strong> Office Number 3, Opp. Gurdwara Sahib, Near Govt Primary School, Bhamian Road, Ludhiana</span>
            </p>
            <p className="flex items-start gap-4">
              <span className="text-2xl">📍</span>
              <span><strong>Campus 2:</strong> Near Mehandi Palace, Opp. St. Marry Convent School, Tajpur Road, Ludhiana</span>
            </p>
            <p className="flex items-start gap-4">
              <span className="text-2xl">📍</span>
              <span><strong>B.O. Office:</strong> Number 10, Sukhmani Tower, Kochar Market, Ludhiana</span>
            </p>
            <p className="flex items-center gap-4">
              <span className="text-2xl">📞</span>
              <span><strong>Phone:</strong> 6283715438</span>
            </p>
            <p className="flex items-center gap-4">
              <span className="text-2xl">✉️</span>
              <span><strong>Email:</strong> rahul.ketan.rk@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="bg-slate-50 p-8 shadow-inner rounded-lg flex flex-col justify-center items-center text-center">
          <h3 className="text-xl font-bold text-slate-600 mb-4">Send us a Message</h3>
          <p className="text-slate-500 mb-6">For any inquiries, admissions, or questions regarding our courses, feel free to contact our support team at the numbers provided.</p>
          <a href="tel:6283715438" className="bg-[#182B45] text-white px-8 py-3 rounded font-bold hover:bg-[#0f1b2b] transition-colors">Call Now</a>
        </div>
      </div>
    </div>
  );
}
