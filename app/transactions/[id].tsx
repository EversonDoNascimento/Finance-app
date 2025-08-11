import PrimaryButton from "@/components/PrimaryButton";
import TransactionModal from "@/components/TransactionModal";
import { useTransactions } from "@/contexts/transactionsContext";
import { globalStyles } from "@/styles/global";
import { TransactionType } from "@/types/TransactionType";
import { Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";

type Query = {
  id: string;
};
const TransactionScreen = () => {
  const { id } = useLocalSearchParams<Query>();
  const { findTransactionById } = useTransactions();
  const [isShowModal, setIsShowModal] = useState(false);
  const transaction = findTransactionById(id);
  const [isLoading, setIsLoading] = useState(false);
  const { saveTransaction } = useTransactions();
  if (!transaction) {
    return <Text>Transação nao encontrada</Text>;
  }
  const handleTransaction = async (data: TransactionType) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    saveTransaction(data);
    setIsLoading(false);
    setIsShowModal(false);
  };
  return (
    <View style={{ flex: 1, padding: 20, gap: 8 }}>
      <Stack.Screen options={{ headerTitle: `Transação ${id}` }} />
      <Text style={globalStyles.sectionTitle}>{transaction?.description}</Text>
      <Text style={globalStyles.transactionAmount}>
        R$ {transaction?.amount.toFixed(2)}
      </Text>
      <Text>{transaction?.referenceDate.toLocaleDateString("pt-BR")}</Text>
      <View style={globalStyles.buttonsContainer}>
        <PrimaryButton
          title="Editar Transação"
          onPress={() => setIsShowModal(true)}
        ></PrimaryButton>
      </View>
      <TransactionModal
        transaction={transaction}
        onClose={() => setIsShowModal(false)}
        visible={isShowModal}
        onSave={handleTransaction}
        isLoading={isLoading}
      ></TransactionModal>
    </View>
  );
};

export default TransactionScreen;
