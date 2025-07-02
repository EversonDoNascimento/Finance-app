import PrimaryButton from "@/components/PrimaryButton";
import TransactionCard from "@/components/TransactionCard";
import TransactionModal from "@/components/TransactionModal";
import { useTransactions } from "@/contexts/transactionsContext";
import { globalStyles } from "@/styles/global";
import { TransactionType } from "@/types/TransactionType";
import { useState } from "react";
import { Image, ScrollView, StatusBar, Text, View } from "react-native";

export default function Index() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { saveTransaction, balance, getLastTransactions } = useTransactions();

  const handleTransaction = async (data: TransactionType) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    saveTransaction(data);
    setIsLoading(false);
    setIsShowModal(false);
  };
  return (
    <View style={globalStyles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2C5F30"></StatusBar>
      <Image
        style={globalStyles.logo}
        source={require("@/assets/images/logo.png")}
      />
      <Text style={globalStyles.greeting}>Olá, usuário!</Text>

      <Text style={globalStyles.balanceLabel}>Saldo Atual</Text>
      <Text style={globalStyles.balance}>R$ {balance.toFixed(2)}</Text>
      <View style={globalStyles.buttonsContainer}>
        <PrimaryButton
          title="Adicionar Transação"
          onPress={() => setIsShowModal(true)}
        ></PrimaryButton>
      </View>
      <TransactionModal
        onClose={() => setIsShowModal(false)}
        visible={isShowModal}
        onSave={handleTransaction}
        isLoading={isLoading}
      ></TransactionModal>
      <Text style={globalStyles.sectionTitle}>Transações recentes</Text>
      <ScrollView>
        {getLastTransactions().map((transaction) => (
          <TransactionCard
            key={transaction.id}
            transaction={transaction}
          ></TransactionCard>
        ))}
      </ScrollView>
    </View>
  );
}
