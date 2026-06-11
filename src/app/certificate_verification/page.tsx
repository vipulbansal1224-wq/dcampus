export default function CertificateVerification() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 min-h-[70vh]">
      <div className="bg-white shadow-lg rounded-xl p-8 md:p-12 border-t-4 border-[#182B45]">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#182B45] mb-2">DCC Certificate Verification</h1>
          <p className="text-slate-500">Verify the authenticity of your Dawn Computer Campus certificate online.</p>
        </div>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Registration / Certificate Number</label>
            <input type="text" placeholder="e.g. DCC-2026-XXXX" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6b00]" />
          </div>
          <button type="button" className="w-full bg-[#ff6b00] text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-colors">
            Verify Certificate
          </button>
        </form>
        
        <div className="mt-8 p-4 bg-slate-50 rounded text-sm text-slate-600 text-center">
          <p>If you face any issues verifying your certificate, please contact our head office.</p>
        </div>
      </div>
    </div>
  );
}
