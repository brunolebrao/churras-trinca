export type People = {
  id: number;
  name: string;
  amount?: number;
};

type Category = 'SEMBEBIDAS' | 'COMBEBIDAS';

export type EventType = {
  id: number;
  date: string;
  name: string;
  description?: string;
  peoples: People[];
  category: Category;
  amount?: number;
  createdAt: string;
};
