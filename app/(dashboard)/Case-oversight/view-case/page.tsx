import { Download as DownloadIcon } from "lucide-react";

const SectionTitle = ({ title }: { title: string }) => (
  <h2 className="text-base font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-3 mt-6">
    {title}
  </h2>
);

const InfoRow = ({
  label,
  value,
}: {
  label: string;
  value: string | React.ReactNode;
}) => (
  <div className="flex flex-col text-sm">
    <span className="text-gray-500">{label}</span>
    <span className="text-gray-900 font-medium">{value}</span>
  </div>
);

const FileTag = ({ label, type }: { label: string; type: string }) => (
  <span className="inline-flex items-center text-xs gap-1 px-2 py-1 rounded-full border border-purple-300 text-purple-700 bg-purple-50">
    <span className="uppercase font-semibold">{type}</span>
    {label}
    <DownloadIcon className="w-3 h-3" />
  </span>
);

export default function CaseDetails() {
  return (
    <main className="max-w-6xl mx-auto p-6 text-gray-900 text-sm">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-xs text-gray-500">CASE ID</p>
          <div className="inline-block bg-gray-100 px-3 py-1 rounded font-medium">
            0431–ABS
          </div>
        </div>
        <span className="text-xs font-medium px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">
          PENDING
        </span>
      </div>

      {/* Case category */}
      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        <InfoRow label="Case category" value="Felony" />
        <InfoRow
          label="Description"
          value="A felony case involves a serious criminal offense that is more severe than a misdemeanor. Felonies are typically punishable by more than one year in prison, and in some jurisdictions, can carry penalties such as life imprisonment or even death."
        />
      </div>

      <div className="grid sm:grid-cols-3 gap-6 mb-6">
        <InfoRow label="Agency" value="Nigerian Police Force" />
        <InfoRow label="Jurisdiction" value="Benue State" />
        <InfoRow label="Type" value="B Division" />
      </div>

      {/* Offender information */}
      <SectionTitle title="Offender information" />
      <div className="grid sm:grid-cols-3 gap-6">
        <InfoRow label="First name" value="Alfred" />
        <InfoRow label="Last name" value="Alfred" />
        <InfoRow label="Other name" value={<em>NIL</em>} />
        <InfoRow label="Nick name" value={<em>NIL</em>} />
        <InfoRow label="Date of Birth" value="01/01/1990" />
        <InfoRow label="Age" value="34" />
        <InfoRow label="Weight" value="0.00 kg" />
        <InfoRow label="Height" value="6ft" />
        <InfoRow label="Eye colour" value="Dark" />
        <InfoRow label="Skin colour" value={<em>Dark</em>} />
        <InfoRow label="Scars" value={<em>NIL</em>} />
        <InfoRow label="Address" value="High Level, MKD" />
        <InfoRow label="Phone" value="+2348012345678" />
        <InfoRow label="Tattoos" value={<em>NIL</em>} />
        <InfoRow label="NIN" value="0123456789" />
      </div>

      {/* Evidence */}
      <div className="mt-6">
        <p className="text-sm font-medium mb-2">Evidence (pdf, jpg, ...)</p>
        <div className="flex gap-3 flex-wrap">
          <FileTag label="Exhibit A" type="pdf" />
          <FileTag label="Exhibit B" type="pdf" />
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm font-medium mb-2">Photos</p>
        <div className="flex gap-3 flex-wrap">
          <FileTag label="Front view" type="jpg" />
          <FileTag label="Left side" type="jpg" />
          <FileTag label="Right side" type="jpg" />
          <FileTag label="Back view" type="jpg" />
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm font-medium mb-2">Biometric captured</p>
        <FileTag label="Fingerprints" type="jpg" />
      </div>

      {/* Additional sections would continue here */}
    </main>
  );
}
