import {
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Task } from "../../components/Task";
import { styles } from "./styles";

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]); // typa pq é um array, mais de um na lista
  const [taskText, setTaskText] = useState("");

  const [doneTask, setDoneTask] = useState<number>(0);
  const taskCount = tasks.length;

  function handleTaskDone(item: string) {
    setDoneTask((prevState) => prevState + 1);
  }

  function handleTaskNotDone(item: string) {
    const t = setDoneTask((prevState) => prevState - 1);
  }

  async function handleTaskAdd() {
    try {
      if (tasks.includes(taskText)) {
        return Alert.alert(
          "Essa tarefa já Existe!",
          "Registre tarefas diferentes!"
        );
      }

      const dataKey = `@tolist:transactions_user:tasks`;
      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [...currentData, taskText];

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

      setTaskText(""); //NÂO ENTENDI PQ LIMPAR O ESTADO

      await loadTransactions();
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Não foi possivel salvar");
    }
  }

  async function handleDelete(task: string) {
    try {
      const dataKey = `@tolist:transactions_user:tasks`;
      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [...currentData, task];

      const result = dataFormatted.filter((assignment) => assignment !== task);

      await AsyncStorage.setItem(dataKey, JSON.stringify(result));

      await loadTransactions();
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Não foi deletar tarefa");
    }
  }

  async function handleTaskRemove(task: string) {
    Alert.alert("Remover", `Você quer remover essa Tafera? ${task}`, [
      {
        text: "Sim",
        onPress: () => {
          handleDelete(task);
          handleTaskNotDone(task);
          loadTransactions();
        }, // após o filter é só ladeira abaixo
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  async function loadTransactions() {
    const dataKey = `@tolist:transactions_user:tasks`;
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    setTasks(transactions);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../../../assets/logo.png")}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={"#808080"}
            onChangeText={setTaskText}
            value={taskText}
          />
          <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
            <Text style={styles.buttonText}> + </Text>
          </TouchableOpacity>
        </View>

        {/* <TaskInfo number={9}/> */}
        <View style={styles.taskInfo}>
          <View style={styles.createdWrap}>
            <Text style={styles.created}>Criadas</Text>
            <View style={styles.info}>
              <Text style={styles.innerInfo}>{taskCount}</Text>
            </View>
          </View>

          <View style={styles.doneWrap}>
            <Text style={styles.done}>Concluídas</Text>
            <View style={styles.info}>
              <Text style={styles.innerInfo}>{doneTask}</Text>
            </View>
          </View>
        </View>

        <View style={styles.line}></View>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Task
              key={item}
              task={item}
              onRemove={() => handleTaskRemove(item)}
              onDone={() => handleTaskDone(item)}
              onNotDone={() => handleTaskNotDone(item)}
            />
          )}
          ListEmptyComponent={() => (
            <View style={styles.noTask}>
              <Image
                style={styles.logo}
                source={require("../../../assets/notaskadded.png")}
              />
              <Text style={styles.noTaskTextBold}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.noTaskText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </>
  );
}
function useFocusEffect(arg0: any) {
  throw new Error("Function not implemented.");
}
