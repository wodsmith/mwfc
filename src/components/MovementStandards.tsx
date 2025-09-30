interface MovementStandard {
  movement: string;
  description: string;
  points?: string[];
}

interface MovementStandardsProps {
  standards: MovementStandard[];
}

export default function MovementStandards({
  standards,
}: MovementStandardsProps) {
  return (
    <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-lg p-8">
      <h2 className="text-3xl font-bebas text-sunrise-gold mb-6">
        MOVEMENT STANDARDS
      </h2>
      <div className="space-y-8">
        {standards.map((standard) => (
          <div
            key={standard.movement}
            className="border-l-4 border-sunrise-gold pl-6 py-2"
          >
            <h3 className="text-2xl font-bebas text-white mb-3">
              {standard.movement}
            </h3>
            <p className="text-stone-300 text-lg mb-3">
              {standard.description}
            </p>
            {standard.points && standard.points.length > 0 && (
              <ul className="space-y-2">
                {standard.points.map((point, index) => (
                  <li
                    key={`${standard.movement}-${index}`}
                    className="flex items-start text-stone-400"
                  >
                    <span className="text-sunrise-gold mr-3 mt-1">▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
