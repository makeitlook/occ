import SectionHeader from "@/components/SectionHeader/SectionHeader";

export default function PrivateDining() {
  return (
    <div className="min-h-screen">
      <section className="relative py-24 lg:py-36 bg-gradient-to-br from-neutral-dimmed via-main-background to-neutral overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            badge="Private Dining"
            title="Restaurant-Quality"
            subtitle="In Your Home"
            description="Enjoy bespoke menus and attentive service tailored to intimate gatherings."
            alignment="center"
            maxWidth="3xl"
          />
        </div>
      </section>

      <section className="py-24 bg-card-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-semibold text-text-primary">Coming Soon</h2>
            <p className="text-text-secondary">
              Details about our private dining services will be available soon.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
