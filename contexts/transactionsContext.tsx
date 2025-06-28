import { TransactionType } from "@/types/TransactionType";
import { createContext, useContext, useState } from "react";

interface ctxTransactionType {
  transactions: TransactionType[];
  isLoading: boolean;
  saveTransaction: (transaction: TransactionType) => void;
}
export const ctxTransactions = createContext<ctxTransactionType | null>(null);

export const TransactionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const saveTransaction = (transaction: TransactionType) => {
    setIsLoading(true);
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
    setIsLoading(false);
  };
  return (
    <ctxTransactions.Provider
      value={{ transactions, isLoading, saveTransaction }}
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
