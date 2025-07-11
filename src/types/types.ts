export type EntryTypes = 'income' | 'expense';

export interface Entry {
  id: string;
  type: EntryTypes;
  description: string;
  amount: number;
  date: Date;
}