import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-slate-950">
      <body className="min-h-screen bg-slate-950 text-white">
        <WhatsAppFloat />

        <Navbar />

        {/* Important: give main its own background */}
        <main className="pt-24 pb-24 bg-slate-950">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
