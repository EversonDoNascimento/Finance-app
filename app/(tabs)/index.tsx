import PrimaryButton from "@/components/PrimaryButton";
import TransactionModal from "@/components/TransactionModal";
import { useTransactions } from "@/contexts/transactionsContext";
import { globalStyles } from "@/styles/global";
import { TransactionType } from "@/types/TransactionType";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, StatusBar, Text, View } from "react-native";

export default function Index() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { saveTransaction } = useTransactions();

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
      <Text style={globalStyles.sectionTitle}>Transações recentes</Text>

      <Link push href={"/transactions"}>
        <Text>Ver transações</Text>
      </Link>
    </View>
  );
}
