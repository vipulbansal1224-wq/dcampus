import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dawn Computer Campus",
  description: "An ISO 9001:2015 Certified Organization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-800 font-sans">
        
        {/* Top Header Contact Bar */}
        <div className="w-full bg-[#182B45] text-white py-2 text-sm">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <span>📞 621543</span>
              <span className="hidden sm:inline">✉️ info@dccampus.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="https://www.facebook.com/rahul.ketan?mibextid=ZbWKwL" target="_blank" className="hover:text-blue-300">Facebook</Link>
              <Link href="https://www.instagram.com/dcc_gopal/" target="_blank" className="hover:text-pink-300">Instagram</Link>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-24">
            <div className="flex items-center gap-3">
              <Link href="/">
                <Image src="/logo-scaled-102x77.jpg" alt="DCC Logo" width={102} height={77} className="object-contain" />
              </Link>
            </div>
            <div className="hidden lg:flex items-center gap-6 text-[15px] font-semibold text-slate-700">
              <Link href="/" className="hover:text-[#ff6b00] transition-colors">Home</Link>
              <Link href="/courses" className="hover:text-[#ff6b00] transition-colors">Courses</Link>
              <Link href="/certificate_verification" className="hover:text-[#ff6b00] transition-colors">Certificate Verification</Link>
              <Link href="/events" className="hover:text-[#ff6b00] transition-colors">Events</Link>
              <div className="relative group">
                <Link href="/todays-special" className="hover:text-[#ff6b00] transition-colors pb-4">
                  Today's Special
                </Link>
                <div className="absolute top-full left-0 mt-0 w-56 bg-white shadow-lg border border-slate-100 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col pt-2 pb-2">
                  <Link href="/birthdays" className="px-4 py-2 hover:bg-slate-50 hover:text-[#ff6b00] transition-colors text-sm font-medium">Birthday's</Link>
                  <Link href="/student-of-the-week" className="px-4 py-2 hover:bg-slate-50 hover:text-[#ff6b00] transition-colors text-sm font-medium">Student of the Week</Link>
                </div>
              </div>
              <Link href="/newsroom" className="hover:text-[#ff6b00] transition-colors">Newsroom</Link>
              <Link href="/contact" className="hover:text-[#ff6b00] transition-colors">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-[#182B45] text-slate-300 py-16 mt-auto">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold text-white mb-6">About</h3>
              <p className="text-sm leading-relaxed mb-6">
                Dawn Computer Campus or DCC, is a concept which is purely based upon a quality generation approach "DAWN" which refers to a period of early morning which represent a new beginning and a fresh approach.
              </p>
              <div className="flex gap-4">
                <Link href="https://www.facebook.com/rahul.ketan?mibextid=ZbWKwL" target="_blank" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff6b00] transition-colors text-white">f</Link>
                <Link href="https://www.instagram.com/dcc_gopal/" target="_blank" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff6b00] transition-colors text-white">in</Link>
              </div>
            </div>

            <div className="md:col-span-1">
              <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/" className="hover:text-[#ff6b00] transition-colors">Home</Link></li>
                <li><Link href="/courses" className="hover:text-[#ff6b00] transition-colors">Courses</Link></li>
                <li><Link href="/events" className="hover:text-[#ff6b00] transition-colors">Events</Link></li>
                <li><Link href="/newsroom" className="hover:text-[#ff6b00] transition-colors">Newsroom</Link></li>
                <li><Link href="/contact" className="hover:text-[#ff6b00] transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-white mb-6">Contacts</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-bold text-[#ff6b00] mb-2">Head Office</h4>
                  <p className="leading-relaxed">Office Number 3, Opp. Gurdwara Sahib,<br/>Near Govt Primary School, Bhamian Road, Ludhiana</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#ff6b00] mb-2">Campus 2</h4>
                  <p className="leading-relaxed">Near Mehandi Palace, Opp. St. Marry Convent School,<br/>Tajpur Road, Ludhiana</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#ff6b00] mb-2">Branch Office</h4>
                  <p className="leading-relaxed">Office Number 10, Sukhmani Tower,<br/>Kochar Market, Ludhiana</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#ff6b00] mb-2">Contact Info</h4>
                  <p className="mb-1">Phone: 6283715438</p>
                  <p>Email: rahul.ketan.rk@gmail.com</p>
                </div>
              </div>
            </div>

          </div>
          <div className="text-center text-sm border-t border-slate-700 pt-8 max-w-7xl mx-auto px-4">
            <p>Copyright © 2026 Dawn Computer Campus. All Rights Reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
