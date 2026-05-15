export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          Personal Finance Tool
        </span>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Stop Wasting Money on Subscriptions You Don&apos;t Use
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload your bank statement and get an instant <span className="text-[#58a6ff] font-semibold">Subscription Health Score</span> — with AI-powered insights on what to cancel.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-lg"
        >
          Get Started — $5/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">Cancel anytime. Secure file processing. No data stored.</p>
      </section>

      {/* How it works */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-10">How It Works</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { step: "1", title: "Upload Statement", desc: "Securely upload your CSV or PDF bank statement." },
            { step: "2", title: "AI Analysis", desc: "Our AI identifies recurring charges and categorizes subscriptions." },
            { step: "3", title: "Get Your Score", desc: "Receive a health score and personalized recommendations." }
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-center">
              <div className="w-10 h-10 rounded-full bg-[#58a6ff]/10 text-[#58a6ff] font-bold text-lg flex items-center justify-center mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-[#8b949e] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$5</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited statement uploads",
              "AI subscription detection",
              "Monthly health score report",
              "Cancellation recommendations",
              "Secure & private processing"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start Saving Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Is my bank statement data safe?",
              a: "Yes. Files are processed in memory and never stored on our servers. All transfers are encrypted via HTTPS."
            },
            {
              q: "What file formats are supported?",
              a: "We support CSV and PDF bank statements from most major banks. Our AI handles various formats automatically."
            },
            {
              q: "How is the health score calculated?",
              a: "The score weighs subscription cost against estimated usage frequency, redundancy, and category overlap — giving you a 0–100 score with specific actions."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} Subscription Health Score. All rights reserved.
      </footer>
    </main>
  );
}
