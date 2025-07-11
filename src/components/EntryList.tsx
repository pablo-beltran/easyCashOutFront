import { type Entry } from '../types/types';

interface Props {
  entries: Entry[];
  onDelete: (id: string) => void;
}

export default function EntryList({ entries, onDelete }: Props) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-2">Movimientos</h2>
      <ul className="space-y-2">
        {entries.map((entry) => (
          <li
            key={entry.id}
            className={`flex justify-between items-center p-2 rounded border ${
              entry.type === 'income' ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50'
            }`}
          >
            <span>{entry.description}</span>
            <span>${entry.amount.toFixed(2)}</span>
            <button onClick={() => onDelete(entry.id)} className="text-sm text-red-500 hover:underline">
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
