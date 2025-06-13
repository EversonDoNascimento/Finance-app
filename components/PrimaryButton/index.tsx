import { ActivityIndicator, Pressable, Text } from "react-native";
import { styles } from "./styles";

type Props = {
  onPress: () => void;
  isLoading?: boolean;
  title: string;
};
const PrimaryButton: React.FC<Props> = ({ onPress, title, isLoading }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="#FFF" style={{ width: 100 }} />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </Pressable>
  );
};

export default PrimaryButton;
