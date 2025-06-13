import { TransactionType } from "@/types/TransactionType";
import { useState } from "react";
import { Modal, Pressable, Text, TextInput, View } from "react-native";
import PrimaryButton from "../PrimaryButton";
import { styles } from "./styles";

type Props = {
  onClose: () => void;
  onSave: (data: TransactionType) => void;
  visible: boolean;
  isLoading?: boolean;
};

const TransactionModal: React.FC<Props> = ({
  onClose,
  onSave,
  visible,
  isLoading,
}) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContent}>
        <Text style={styles.title}>Adicionar Receita</Text>
        <Text>Descrição:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Informe uma descrição"
          value={description}
          onChangeText={setDescription}
          keyboardType="default"
          returnKeyType="next"
        ></TextInput>
        <Text>Valor:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Informe um valor"
          value={amount}
          onChangeText={setAmount}
          keyboardType="default"
          returnKeyType="done"
        ></TextInput>
        <View style={styles.buttonsContainer}>
          <PrimaryButton
            isLoading={isLoading}
            title="Salvar transação"
            onPress={() => {
              onSave({
                description: description,
                amount: Number(amount),
              });
              setAmount("");
              setDescription("");
            }}
          />
          <Pressable onPress={onClose} style={{ padding: 10 }}>
            <Text>Fechar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default TransactionModal;
