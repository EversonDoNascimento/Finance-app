import PrimaryButton from "@/components/PrimaryButton";
import TransactionModal from "@/components/TransactionModal";
import { globalStyles } from "@/styles/global";
import { TransactionType } from "@/types/TransactionType";
import { useState } from "react";
import { Image, StatusBar, Text, View } from "react-native";
const transactions = [
  { id: "1", description: "Supermercado", amount: -50.75 },
  { id: "2", description: "Salário", amount: 2500.0 },
  { id: "3", description: "Restaurante", amount: -120.4 },
  { id: "4", description: "Aluguel", amount: -800.0 },
];

export default function Index() {
  const [isShowModal, setIsShowModal] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const handleTransaction = async (data: TransactionType) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
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
      <Text style={globalStyles.balance}>R$ 1.529,85</Text>
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
      <Text style={globalStyles.sectionTitle}>Transações Recentes</Text>
      {transactions.map((transaction) => (
        <View style={globalStyles.transactionItem} key={transaction.id}>
          <Text style={globalStyles.transactionText}>
            {transaction.description}
          </Text>
          <Text
            style={[
              globalStyles.transactionAmount,
              transaction.amount < 0
                ? globalStyles.expense
                : globalStyles.income,
            ]}
          >
            R$ {transaction.amount.toFixed(2)}
          </Text>
        </View>
      ))}
    </View>
  );
}
