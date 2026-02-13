import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white min-h-screen">
        <WhatsAppFloat />

        <Navbar />
        <main className="pt-24 pb-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
