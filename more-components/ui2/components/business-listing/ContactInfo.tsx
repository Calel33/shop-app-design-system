import { Globe, Mail, MapPin, Phone } from "lucide-react";

import InfoCard from "./InfoCard";

import type { ContactInfoProps } from "../types/business-listing.types";

const ContactInfo = ({ title, icon, contact }: ContactInfoProps) => {
  return (
    <InfoCard title={title} icon={icon}>
      <ul className="divide-y divide-slate-100">
        <li className="flex items-start gap-3 pb-4">
          <span className="mt-1 text-blue-600">
            <MapPin className="h-4 w-4" aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-medium text-slate-700">Address</p>
            <p>{contact.address}</p>
          </div>
        </li>
        {contact.phone ? (
          <li className="flex items-start gap-3 py-4">
            <span className="mt-1 text-blue-600">
              <Phone className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-medium text-slate-700">Phone</p>
              <a
                href={`tel:${contact.phone}`}
                className="text-blue-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                {contact.phone}
              </a>
            </div>
          </li>
        ) : null}
        {contact.website ? (
          <li className="flex items-start gap-3 py-4">
            <span className="mt-1 text-blue-600">
              <Globe className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-medium text-slate-700">Website</p>
              <a
                href={contact.website}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                {contact.website.replace(/^https?:\/\//, "")}
              </a>
            </div>
          </li>
        ) : null}
        {contact.email ? (
          <li className="flex items-start gap-3 pt-4">
            <span className="mt-1 text-blue-600">
              <Mail className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-medium text-slate-700">Email</p>
              <a
                href={`mailto:${contact.email}`}
                className="text-blue-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                {contact.email}
              </a>
            </div>
          </li>
        ) : null}
      </ul>
      {contact.directionsUrl ? (
        <a
          href={contact.directionsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          <MapPin className="h-4 w-4" aria-hidden="true" />
          Get Directions
        </a>
      ) : null}
    </InfoCard>
  );
};

export default ContactInfo;
