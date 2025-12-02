import InfoCard from "./InfoCard";

import type { CredentialsDisplayProps } from "../types/business-listing.types";

const CredentialsDisplay = ({ title, icon, credentials }: CredentialsDisplayProps) => {
  return (
    <InfoCard title={title} icon={icon}>
      <ul className="space-y-3">
        {credentials.map((credential) => {
          const Icon = credential.icon;
          return (
            <li
              key={credential.id}
              className="flex items-start gap-3 rounded-xl bg-slate-50 p-4"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-800">{credential.title}</p>
                <p className="text-sm text-slate-600">{credential.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </InfoCard>
  );
};

export default CredentialsDisplay;
