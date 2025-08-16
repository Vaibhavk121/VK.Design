const features = [
  { title: "Utility-first", desc: "Compose UI with small, reusable classes." },
  { title: "Responsive", desc: "Craft layouts from mobile to desktop easily." },
  { title: "No context switch", desc: "Stay in JSX—skip separate CSS files." },
  { title: "Design tokens", desc: "Consistent spacing, colors, and sizes." },
  { title: "State variants", desc: "Hover, focus, active, and more—built in." },
  { title: "Fast builds", desc: "Vite + Tailwind for instant feedback." },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold">Everything you need</h2>
          <p className="mt-3 text-gray-600">
            A simple, scalable way to build clean interfaces without writing custom CSS.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold group-hover:text-blue-600">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.desc}</p>
              <div className="mt-4 h-1 w-0 group-hover:w-16 bg-blue-600 transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
