function ServiceCard({ title, description, note, price }) {
  return (
    <div className="card bg-[var(--color-bg-alt)] border border-base-300 transition-transform hover:scale-[1.02] duration-300">
      <div className="card-body">
        <h3 className="card-title text-lg sm:text-xl font-semibold">{title}</h3>
        <ul className="list-disc pl-5 space-y-2 text-base-content">
          {description.map((item, idx) => (
            <li key={idx} className="text-sm leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
        {note && (
          <p className="text-sm italic mt-4 bg-mutedText">{note}</p>
        )}
        <div className="mt-4">
          {/* <p className="text-lg font-bold">{price}</p> */}
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;