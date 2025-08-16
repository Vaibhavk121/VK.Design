export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm font-medium text-blue-600">New • Lightning fast</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
            Build modern landing pages with <span className="text-blue-600">Tailwind</span>
          </h1>
          <p className="mt-4 text-gray-600">
            Ship beautiful UIs without leaving your JSX. Fully responsive, accessible, and fast.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg border px-5 py-3 hover:bg-gray-50"
            >
              See Features
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold">2x</div>
              <div className="text-xs text-gray-500">Faster Dev</div>
            </div>
            <div>
              <div className="text-2xl font-bold">100%</div>
              <div className="text-xs text-gray-500">Responsive</div>
            </div>
            <div>
              <div className="text-2xl font-bold">0</div>
              <div className="text-xs text-gray-500">Custom CSS</div>
            </div>
          </div>
        </div>

        <div className="group relative">
          <img
            className="w-full rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow"
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop"
            alt="Product"
          />
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
        </div>
      </div>
    </section>
  );
}
