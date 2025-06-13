type Props = {
  title: string;
  description: string[];
  note: string;
  price?: number;
};

function ServiceCard({ title, description, note, price }: Props) {
  return (
    <div className="bg-[#162c54] p-6 rounded-xl">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <ul className="list-disc pl-5 text-sm text-gray-300 mb-2">
        {description.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
      <p className="text-sm italic text-gray-400 mb-2">{note}</p>
      <p className="font-medium text-white">{price}</p>
    </div>
  );
}

export default ServiceCard;