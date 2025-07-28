import React from "react";

const PrivacyPolicyContent = () => (
  <>
    <section>
      <h3 className="text-lg font-semibold mb-2">1. Information We Collect</h3>
      <p>We collect information you provide directly to us including:</p>
      <ul className="list-disc list-inside ml-2">
        <li>Name and contact details</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Message content</li>
        <li>Cookies and usage data</li>
      </ul>
    </section>

    <section>
      <h3 className="text-lg font-semibold mb-2">2. How We Use Your Information</h3>
      <p>We use the information we collect to:</p>
      <ul className="list-disc list-inside ml-2">
        <li>Respond to your requests</li>
        <li>Provide support and services</li>
        <li>Improve our website</li>
        <li>Communicate with you about updates</li>
      </ul>
    </section>

    <section>
      <h3 className="text-lg font-semibold mb-2">3. Data Protection</h3>
      <p>We implement appropriate technical and organisational measures to protect your personal data, including:</p>
      <ul className="list-disc list-inside ml-2">
        <li>Encrypted transmissions</li>
        <li>Restricted access to stored information</li>
        <li>Regular security reviews</li>
      </ul>
    </section>

    <section>
      <h3 className="text-lg font-semibold mb-2">4. Your Rights</h3>
      <p>You may request to:</p>
      <ul className="list-disc list-inside ml-2">
        <li>Access or update your data</li>
        <li>Delete your personal information</li>
        <li>Opt out of marketing communications</li>
      </ul>
    </section>

    <section>
      <h3 className="text-lg font-semibold mb-2">5. Contact Us</h3>
      <p>If you have questions about this policy, contact us at <a href="mailto:info@occevents.co.uk" className="underline">info@occevents.co.uk</a>.</p>
    </section>
  </>
);

export default PrivacyPolicyContent;
