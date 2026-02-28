export default function TermsAndConditions() {
  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">SMS Terms and Conditions</h1>
      <p className="text-sm text-gray-500 mb-6">Last updated: February 28, 2026</p>
      
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Program Name</h2>
        <p>Ken Vogel Personal Notifications</p>

        <h2 className="text-xl font-semibold">Description</h2>
        <p>
          This SMS service provides personal notifications, alerts, and verification codes 
          for experimental and development purposes. Messages are sent on an as-needed basis.
        </p>

        <h2 className="text-xl font-semibold">Message Frequency</h2>
        <p>
          Message frequency varies. This is a low-volume service with typically fewer than 
          10 messages per month.
        </p>

        <h2 className="text-xl font-semibold">Message and Data Rates</h2>
        <p>
          Message and data rates may apply. Check with your carrier for details.
        </p>

        <h2 className="text-xl font-semibold">Opt-Out Instructions</h2>
        <p>
          To stop receiving messages, reply <strong>STOP</strong> to any message. 
          You will receive a confirmation message and no further messages will be sent.
        </p>

        <h2 className="text-xl font-semibold">Help</h2>
        <p>
          For assistance, reply <strong>HELP</strong> to any message or contact 
          taryn.b.vogel@gmail.com.
        </p>

        <h2 className="text-xl font-semibold">Support Contact</h2>
        <p>
          Email: taryn.b.vogel@gmail.com
        </p>

        <h2 className="text-xl font-semibold">Carrier Liability</h2>
        <p>
          Carriers are not liable for delayed or undelivered messages.
        </p>
      </section>
    </main>
  );
}
