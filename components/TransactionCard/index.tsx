import { globalStyles } from "@/styles/global";
import { TransactionType } from "@/types/TransactionType";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

const TransactionCard = ({ transaction }: { transaction: TransactionType }) => {
  return (
    <Link
      href={{
        pathname: "/transactions/[id]",
        params: { id: transaction.id },
      }}
      asChild
    >
      <Pressable>
        <View style={globalStyles.transactionItem}>
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
      </Pressable>
    </Link>
  );
};

export default TransactionCard;
