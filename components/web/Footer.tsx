import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className=" container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        
        {/* Column 1: Logo & Contact */}
        <div className="space-y-4">
          <Link href="/" className="text-2xl font-black flex items-center gap-2">
            <span className="bg-[#FF6900] p-1 rounded-md text-white">PH</span>
            <span>Phone<span className="text-[#FF6900]">Hut</span></span>
          </Link>
          <p className="text-gray-400 text-sm">
            Your premier destination for the latest mobile technology and honest user reviews.
          </p>
          <div className="pt-2">
            <p className="text-xs uppercase tracking-widest text-gray-500">Email Us</p>
            <a href="mailto:support@phonehut.com" className="text-[#FF6900] hover:underline font-medium">
              support@phonehut.com
            </a>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h3 className="text-lg font-bold mb-6">Menu</h3>
          <ul className="space-y-4 text-gray-400">
            <li><Link href="/about" className="hover:text-[#FF6900] transition-colors">About Us</Link></li>
            <li><Link href="/all-phones" className="hover:text-[#FF6900] transition-colors">All Phones</Link></li>
            <li><Link href="/contact" className="hover:text-[#FF6900] transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div>
          <h3 className="text-lg font-bold mb-6">Legal</h3>
          <ul className="space-y-4 text-gray-400">
            <li><Link href="/privacy-policy" className="hover:text-[#FF6900] transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions" className="hover:text-[#FF6900] transition-colors">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Column 4: Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-6">Follow Us</h3>
          <div className="flex gap-4">
            <Link 
              href="https://facebook.com" 
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF6900] transition-all"
            >
              <Facebook size={20} />
            </Link>
            <Link 
              href="https://instagram.com" 
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF6900] transition-all"
            >
              <Instagram size={20} />
            </Link>
            <Link 
              href="https://x.com" 
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF6900] transition-all"
            >
              {/* X Icon (formerly Twitter) */}
              <Twitter size={20} />
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            Stay updated with the latest tech news.
          </p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>© {currentYear} PhoneHut. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;