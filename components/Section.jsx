export default function Section({ id, title, children, subtitle }) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        {subtitle && <p className="mt-2 text-slate-300">{subtitle}</p>}
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
