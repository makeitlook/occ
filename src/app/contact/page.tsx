import Web3ContactForm from "@/components/ContactForm/ContactForm";
import PageLayout from "@/components/Layouts/PageLayout";
import {
  EnvelopeIcon,
  PhoneIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <section id="contact">
      <PageLayout>
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 space-y-12">
          <div className="relative ">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Get in touch
              </h2>
              <p className="mt-6 text-lg/8 text-gray-600">
                Proin volutpat consequat porttitor cras nullam gravida at. Orci
                molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
                Arcu sed malesuada et magna.
              </p>
              <dl className="mt-10 space-y-4 text-base/7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingOffice2Icon
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                    />
                  </dt>
                  <dd>
                    123 Event Avenue
                    <br />
                    London, UK
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                    />
                  </dt>
                  <dd>
                    <a
                      href="tel:+44 1234 567890"
                      className="hover:text-gray-900"
                    >
                      +44 1234 567890
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                    />
                  </dt>
                  <dd>
                    <a
                      href="mailto:info@occevents.co.uk"
                      className="hover:text-gray-900"
                    >
                      info@occevents.co.uk
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-neutral-dimmed p-4 rounded-md">
            {/* <Web3ContactForm /> */}
          </div>
        </div>
      </PageLayout>
    </section>
  );
}
