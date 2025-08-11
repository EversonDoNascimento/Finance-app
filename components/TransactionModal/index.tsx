import { TransactionType } from "@/types/TransactionType";
import { FontAwesome } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import {
  Modal,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import PrimaryButton from "../PrimaryButton";
import { styles } from "./styles";

type Props = {
  onClose: () => void;
  onSave: (data: TransactionType) => void;
  visible: boolean;
  isLoading?: boolean;
  transaction?: TransactionType;
};

const TransactionModal: React.FC<Props> = ({
  onClose,
  onSave,
  visible,
  isLoading,
  transaction,
}) => {
  const [description, setDescription] = useState(
    transaction?.description ?? ""
  );
  const [amount, setAmount] = useState(transaction?.amount ?? "");

  const [date, setDate] = useState(
    new Date(transaction?.referenceDate ?? Date.now())
  );
  const [show, setShow] = useState(false);

  const onChange = (_event: any, selectedDate?: Date) => {
    if (Platform.OS === "android") {
      setShow(false);
    }

    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const showPicker = () => {
    setShow(true);
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContent}>
        <Text style={styles.title}>
          {transaction ? "Editar Receita" : "Adicionar Receita"}
        </Text>
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
          value={amount + ""}
          onChangeText={setAmount}
          keyboardType="default"
          returnKeyType="done"
        ></TextInput>
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>
            Data selecionada: {date.toLocaleDateString("pt-BR")}
          </Text>
          <Pressable onPress={showPicker} style={styles.calendarButton}>
            <FontAwesome name="calendar" size={20} color="white" />
            <Text style={styles.calendarButtonText}>Selecionar outra data</Text>
          </Pressable>

          {show && (
            <DateTimePicker
              locale="pt-BR"
              value={date}
              mode="date"
              display="spinner"
              onChange={onChange}
            />
          )}
        </View>
        <View style={styles.buttonsContainer}>
          <PrimaryButton
            isLoading={isLoading}
            title="Salvar transação"
            onPress={() => {
              onSave({
                id: Date.now().toString(),
                description: description,
                amount: Number(amount),
                referenceDate: date,
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
