type Props = {
  items: string[];
};

export function ImpactStrip({ items }: Props) {
  return (
    <section id="impact" className="impact-strip" aria-label="Impact highlights">
      {items.map((item) => (
        <div key={item} className="impact-strip__item">
          {item}
        </div>
      ))}
    </section>
  );
}
