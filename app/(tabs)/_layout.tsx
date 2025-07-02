import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#2C5F30" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: "Transações",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="money" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
