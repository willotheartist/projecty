//·app/wizard/page.tsx
import WizardClient from "./wizard-client";
import "./wizard.css";

export const dynamic = "force-dynamic";

export default function WizardPage() {
  return <WizardClient />;
}
