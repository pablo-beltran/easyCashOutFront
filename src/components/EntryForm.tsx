import { useState } from 'react';
import { type EntryTypes, type Entry } from '../types/types';

interface Props {
  onAdd: (entry: Entry) => void;
}

export default function EntryForm({ onAdd }: Props) {
  const [type, setType] = useState<EntryTypes>('income');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description || amount <= 0) return;

    const newEntry: Entry = {
      id: crypto.randomUUID(),
      type,
      description,
      amount,
      date: new Date()
    };

    onAdd(newEntry);
    setDescription('');
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md space-y-4">
      <div className="flex space-x-4">
        <label className="flex items-center space-x-1">
          <input type="radio" value="income" checked={type === 'income'} onChange={() => setType('income')} />
          <span>Ingreso</span>
        </label>
        <label className="flex items-center space-x-1">
          <input type="radio" value="expense" checked={type === 'expense'} onChange={() => setType('expense')} />
          <span>Egreso</span>
        </label>
      </div>
      <input
        className="w-full border px-3 py-2 rounded"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        className="w-full border px-3 py-2 rounded"
        type="number"
        placeholder="Monto"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full" type="submit">
        Agregar
      </button>
    </form>
  );
}