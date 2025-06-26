import TransactionCard from "@/components/TransactionCard";
import { globalStyles } from "@/styles/global";
import { FlatList, Text, View } from "react-native";
const transactions = [
  { id: "1", description: "Supermercado", amount: -50.75 },
  { id: "2", description: "Salário", amount: 2500.0 },
  { id: "3", description: "Restaurante", amount: -120.4 },
  { id: "4", description: "Aluguel", amount: -800.0 },
];
const Transactions = () => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={globalStyles.sectionTitle}>Todas as transações</Text>
      <FlatList
        data={transactions}
        renderItem={({ item }) => <TransactionCard transaction={item} />}
        keyExtractor={(item) => item.id}
      ></FlatList>
      {/* {transactions.map((transaction) => (
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
      ))} */}
    </View>
  );
};

export default Transactions;
