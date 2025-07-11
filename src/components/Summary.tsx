import { type Entry } from '../types/types';

interface Props {
  entries: Entry[];
}

export default function Summary({ entries }: Props) {
  const ingresos = entries.filter((e) => e.type === 'income').reduce((acc, e) => acc + e.amount, 0);
  const egresos = entries.filter((e) => e.type === 'expense').reduce((acc, e) => acc + e.amount, 0);
  const total = ingresos - egresos;

  return (
    <div className="bg-gray-100 p-4 mt-6 rounded shadow-inner">
      <h2 className="text-xl font-bold mb-2">Resumen del día</h2>
      <p className="text-green-600">Total ingresos: ${ingresos.toFixed(2)}</p>
      <p className="text-red-600">Total egresos: ${egresos.toFixed(2)}</p>
      <p className="text-black font-bold mt-2">Total final: ${total.toFixed(2)}</p>
    </div>
  );
}
