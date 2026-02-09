
import Footer from "@/components/web/Footer";
import "../globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div >
        {children}
        <Footer/>
      </div>
    </div>
  );
}
