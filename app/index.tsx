import { globalStyles } from "@/styles/global";
import { Image, Text, View } from "react-native";
const transactions = [
  { id: "1", description: "Supermercado", amount: -50.75 },
  { id: "2", description: "Salário", amount: 2500.0 },
  { id: "3", description: "Restaurante", amount: -120.4 },
  { id: "4", description: "Aluguel", amount: -800.0 },
];

export default function Index() {
  return (
    <View style={globalStyles.container}>
      <Image
        style={globalStyles.logo}
        source={require("@/assets/images/logo.png")}
      />
      <Text style={globalStyles.greeting}>Olá, usuário!</Text>

      <Text style={globalStyles.balanceLabel}>Saldo Atual</Text>
      <Text style={globalStyles.balance}>R$ 1.529,85</Text>
      <View style={globalStyles.buttonsContainer}>
        <View style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>Adicionar Receita</Text>
        </View>
        <View style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>Adicionar Despesa</Text>
        </View>
      </View>
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
