import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";

type Props = {
  task: string;
  onRemove: () => void;
  onDone: () => void;
  onNotDone: () => void;
};

export function Task(props: Props) {
  return (
    <View style={styles.containerTask}>
      <BouncyCheckbox
        onPress={(isChecked: boolean) => {
          console.log(isChecked, "bob");
          if (isChecked === true) {
            props.onDone();
          }
          if (isChecked === false) {
            props.onNotDone();
          }
        }}
        text={props.task}
        textStyle={styles.containerText}
        fillColor={"#8284FA"}
        // unfillColor={'#4B0082'}
        innerIconStyle={{ borderColor: "#4EA8DE" }}
        size={16}
      />
      <TouchableOpacity onPress={props.onRemove}>
        <Image
          style={styles.removeTask}
          source={require("../../../assets/trash.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
