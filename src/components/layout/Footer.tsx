import Image from 'next/image';
import { COMPANY, SERVICE_AREAS, NAV_ITEMS, BUSINESS_HOURS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-site mx-auto px-4 md:px-8">
        <div className="grid gap-10 md:grid-cols-3 mb-10">
          {/* Brand column */}
          <div>
            <Image
              src="/images/logo.png"
              alt={COMPANY.name}
              width={280}
              height={70}
              className="h-[70px] w-auto mb-4"
            />
            <h3 className="font-heading font-bold text-lg text-white mb-2">
              {COMPANY.name}
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Professional concrete power washing for Arizona homes. We bring
              your concrete back to life.
            </p>
          </div>

          {/* Quick links + Service areas */}
          <div>
            <h3 className="font-heading font-bold text-lg text-white mb-4">
              Quick Links
            </h3>
            <div className="space-y-2 mb-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-white/80 text-sm hover:text-secondary transition-colors duration-150"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <h3 className="font-heading font-bold text-lg text-white mb-3">
              Service Areas
            </h3>
            <p className="text-white/80 text-sm">
              {SERVICE_AREAS.join(' \u00B7 ')}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg text-white mb-4">
              Contact Us
            </h3>
            <div className="space-y-3 text-white/80 text-sm">
              <p>
                <span className="font-semibold text-white">Phone:</span>{' '}
                {COMPANY.phone}
              </p>
              <p>
                <span className="font-semibold text-white">Email:</span>{' '}
                {COMPANY.email}
              </p>
              <p>
                <span className="font-semibold text-white">Location:</span>{' '}
                {COMPANY.location}
              </p>
              <div className="pt-2">
                <p className="font-semibold text-white mb-1">Business Hours</p>
                <p>{BUSINESS_HOURS.weekday}</p>
                <p>{BUSINESS_HOURS.saturday}</p>
                <p>{BUSINESS_HOURS.sunday}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 pt-6 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
