import { TransactionProvider } from "@/contexts/transactionsContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <TransactionProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="transactions/[id]"
          options={{ headerTitle: "Detalhes" }}
        />
      </Stack>
    </TransactionProvider>
  );
}
