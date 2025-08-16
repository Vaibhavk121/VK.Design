export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold">About the project</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          This landing page is built with React + Vite + Tailwind. It demonstrates how to structure
          a single-page site into logical sections, keep components small and reusable, and style
          everything with utility classes — fast, consistent, and responsive.
        </p>
      </div>
    </section>
  );
}
