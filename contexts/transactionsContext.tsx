import { TransactionType } from "@/types/TransactionType";
import { createContext, useContext, useEffect, useState } from "react";

interface ctxTransactionType {
  transactions: TransactionType[];
  balance: number;
  isLoading: boolean;
  saveTransaction: (transaction: TransactionType) => void;
  getLastTransactions: () => TransactionType[];
}
export const ctxTransactions = createContext<ctxTransactionType | null>(null);

export const TransactionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [balance, setBalance] = useState(400);

  const getLastTransactions = (limit: number = 5) => {
    return [...transactions]
      .sort((a, b) => b.referenceDate.getTime() - a.referenceDate.getTime())
      .slice(0, limit);
  };
  const saveTransaction = (transaction: TransactionType) => {
    setIsLoading(true);
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
    setIsLoading(false);
  };

  useEffect(() => {
    setBalance(
      transactions.reduce((total, transaction) => total + transaction.amount, 0)
    );
  }, [transactions]);
  return (
    <ctxTransactions.Provider
      value={{
        getLastTransactions,
        transactions,
        isLoading,
        saveTransaction,
        balance,
      }}
    >
      {children}
    </ctxTransactions.Provider>
  );
};

export const useTransactions = () => {
  const context = useContext(ctxTransactions);
  if (context === null) {
    throw new Error(
      "useTransactions must be used within a TransactionProvider"
    );
  }
  return context;
};
