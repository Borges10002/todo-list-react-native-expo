import { View, Text } from "react-native";
import { styles } from "./styles";

type Props = {
  number: number;
};

export function TaskInfo(props: Props) {
  return (
    <View style={styles.taskInfo}>
      <View style={styles.createdWrap}>
        <Text style={styles.created}>Criadas</Text>
        <View style={styles.info}>
          <Text style={styles.innerInfo}>{props.number}</Text>
        </View>
      </View>

      <View style={styles.doneWrap}>
        <Text style={styles.done}>Concluídas</Text>
        <View style={styles.info}>
          <Text style={styles.innerInfo}>{props.number}</Text>
        </View>
      </View>
    </View>
  );
}
