export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Form submitted (demo). Hook your backend here.");
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold">Ready to get started?</h2>
          <p className="mt-3 text-gray-600">
            Drop a message and we’ll get back within 24 hours. This form is a demo—plug in your API
            or email service to make it live.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border p-6 shadow-sm bg-white"
        >
          <label className="block text-sm font-medium">Name</label>
          <input
            className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Your name"
            required
          />

          <label className="block text-sm font-medium mt-4">Email</label>
          <input
            type="email"
            className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="you@example.com"
            required
          />

          <label className="block text-sm font-medium mt-4">Message</label>
          <textarea
            rows="4"
            className="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="How can we help?"
            required
          />

          <button
            type="submit"
            className="mt-5 inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700 w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
