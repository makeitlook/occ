import Link from "next/link";
import PageLayout from "@/components/Layouts/PageLayout";

export default function Services() {
  return (
    <PageLayout title="Services">
      <ul className="space-y-4 list-disc pl-6">
        <li>
          <Link href="/services/event-catering" className="text-elements-primary-main underline">
            Event Catering
          </Link>
        </li>
        <li>
          <Link href="/services/private-dining" className="text-elements-primary-main underline">
            Private Dining
          </Link>
        </li>
        <li>
          <Link href="/services/partnered-venues" className="text-elements-primary-main underline">
            Partnered Venues
          </Link>
        </li>
        <li>
          <Link href="/services/bespoke-catering" className="text-elements-primary-main underline">
            Bespoke Catering
          </Link>
        </li>
      </ul>
    </PageLayout>
  );
}
