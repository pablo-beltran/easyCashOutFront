import { useState, useEffect } from 'react';
import EntryForm from './EntryForm';
import EntryList from './EntryList';
import Summary from './Summary';
import { type Entry } from '../types/types';

const CashOut = () => {
  const [entries, setEntries] = useState<Entry[]>(() => {
      const stored = localStorage.getItem('entries');
      return stored ? JSON.parse(stored) : [];
    });
  
    useEffect(() => {
      localStorage.setItem('entries', JSON.stringify(entries));
    }, [entries]);
  
    const handleAdd = (entry: Entry) => {
      setEntries([entry, ...entries]);
    };
  
    const handleDelete = (id: string) => {
      setEntries(entries.filter((e) => e.id !== id));
    };
  
    return (
      <div className="max-w-xl mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Corte de Caja</h1>
        <EntryForm onAdd={handleAdd} />
        <EntryList entries={entries} onDelete={handleDelete} />
        <Summary entries={entries} />
      </div>
    );
}

export default CashOut