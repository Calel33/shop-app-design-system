import type { ContactInfoProps } from "../../types/business.types";

const ContactInfo = ({ title, details }: ContactInfoProps) => {
  return (
    <section aria-labelledby="contact-info-heading" className="space-y-4">
      <h2 id="contact-info-heading" className="text-lg font-semibold text-slate-900">
        {title}
      </h2>
      <ul className="space-y-3 text-sm text-slate-600">
        {details.map((detail) => {
          const content = (
            <span className="flex items-start gap-3">
              <detail.icon className="mt-0.5 h-5 w-5 text-emerald-600" aria-hidden="true" />
              <span className="leading-snug">{detail.value}</span>
            </span>
          );

          return (
            <li key={detail.id}>
              {detail.href ? (
                <a
                  href={detail.href}
                  className="inline-flex w-full items-start gap-3 rounded-xl px-2 py-1 transition hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                  {content}
                </a>
              ) : (
                content
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ContactInfo;
