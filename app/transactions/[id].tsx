import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

type Query = {
  id: string;
};
const TransactionScreen = () => {
  const { id } = useLocalSearchParams<Query>();
  return (
    <View>
      <Text>ola {id}</Text>
    </View>
  );
};

export default TransactionScreen;
