import PageLayout from "@/components/Layouts/PageLayout";

export default function Terms() {
  return (
    <PageLayout title="Terms & Conditions">
      <section>
        <h3 className="text-lg font-semibold mb-2">1. Use of this Website</h3>
        <p>All content is provided for general information about OCC Events &amp; Catering. We may update it without notice.</p>
      </section>
      <section>
        <h3 className="text-lg font-semibold mb-2">2. Bookings</h3>
        <p>Any catering booking is subject to written confirmation and our separate event agreements.</p>
      </section>
      <section>
        <h3 className="text-lg font-semibold mb-2">3. Liability</h3>
        <p>We aim for accuracy but do not accept liability for loss arising from reliance on this site.</p>
      </section>
      <section>
        <h3 className="text-lg font-semibold mb-2">4. Governing Law</h3>
        <p>These terms are governed by the laws of England and Wales.</p>
      </section>
    </PageLayout>
  );
}
