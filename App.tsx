import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import TodoList from './src/todolista';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TodoList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight ?? 0,
  },
});