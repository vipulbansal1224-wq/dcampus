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
              <Link href="/birthdays" className="hover:text-[#ff6b00] transition-colors">Birthday's</Link>
              <Link href="/student-of-the-week" className="hover:text-[#ff6b00] transition-colors">Student of the Week</Link>
              <Link href="/newsroom" className="hover:text-[#ff6b00] transition-colors">Newsroom</Link>
              <Link href="/todays-special" className="hover:text-[#ff6b00] transition-colors">Today's Special</Link>
              <Link href="/contact" className="hover:text-[#ff6b00] transition-colors">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-[#182B45] text-slate-300 py-12 mt-auto">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Head Office</h3>
              <p className="text-sm">Office Number 3, Opp. Gurdwara Sahib,<br/>Near Govt Primary School, Bhamian Road, Ludhiana</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Campus 2</h3>
              <p className="text-sm">Near Mehandi Palace, Opp. St. Marry Convent School,<br/>Tajpur Road, Ludhiana</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Branch Office</h3>
              <p className="text-sm">Office Number 10, Sukhmani Tower,<br/>Kochar Market, Ludhiana</p>
            </div>
          </div>
          <div className="text-center text-sm border-t border-slate-700 pt-6">
            <p>Copyright © 2026 Dawn Computer Campus</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
