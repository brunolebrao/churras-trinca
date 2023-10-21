import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react';

import { api } from 'services/api';

export interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionContextProps {
  children: React.ReactNode;
}

interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
  getEvent: () => Promise<void>;
}

const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionsProvider({ children }: TransactionContextProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // useEffect(() => {
  //   api
  //     .get('transactions')
  //     .then((response) => setTransactions(response.data.transactions))
  // }, [])

  const getEvent = useCallback(async () => {
    api
      .get('transactions')
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  const createTransaction = useCallback(
    async (transactionInput: TransactionInput) => {
      const response = await api.post('transactions', {
        ...transactionInput,
        createdAt: new Date()
      });

      const { transaction } = response.data;

      setTransactions([...transactions, transaction]);
    },
    [transactions]
  );

  const contextValue = useMemo(
    () => ({ transactions, createTransaction, getEvent }),
    [transactions, createTransaction, getEvent]
  );

  return (
    <TransactionsContext.Provider value={{ ...contextValue }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
