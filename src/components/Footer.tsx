import Link from "next/link";
import CaresmartLogo from "./CaresmartLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <CaresmartLogo size="small" textColor="white" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              We provide Traditional and Enhanced Case Management to Medicaid members enrolled in the CCSP and EDWP programs across Georgia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#5AB8E2] transition">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#5AB8E2] transition">About</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#5AB8E2] transition">Services</Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-[#5AB8E2] transition">Careers</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#5AB8E2] transition">Contact</Link>
              </li>
              <li>
                <Link
                  href="https://georgia.gov/apply-elderly-and-disabled-waiver-program"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#5AB8E2] transition"
                >
                  EDWP Program ↗
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours of Operation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Hours of Operation</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Monday – Friday</li>
              <li>9:00 AM – 5:00 PM</li>
              <li className="pt-1 text-gray-400">Closed on weekends</li>
              <li className="text-gray-400">& official holidays</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <span className="block text-gray-400 text-xs uppercase tracking-wide mb-0.5">Email</span>
                <a href="mailto:info@caresmartllc.net" className="hover:text-[#5AB8E2] transition">
                  info@caresmartllc.net
                </a>
              </li>
              <li>
                <span className="block text-gray-400 text-xs uppercase tracking-wide mb-0.5">Phone</span>
                <a href="tel:6782788335" className="hover:text-[#5AB8E2] transition">
                  (678) 278-8335
                </a>
              </li>
              <li>
                <span className="block text-gray-400 text-xs uppercase tracking-wide mb-0.5">Address</span>
                2310 Parklake Dr, Ste 550<br />
                Atlanta, GA 30345
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} Caresmart LLC. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-[#5AB8E2] transition">Privacy Policy</Link>
              <Link href="#" className="hover:text-[#5AB8E2] transition">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
