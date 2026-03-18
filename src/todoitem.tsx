import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Todo {
  id: string;
  text: string;
  done: boolean;
}

interface Props {
  todo: Todo;
  onToggle: () => void;
}

const TodoItem = ({ todo, onToggle }: Props) => (
  <TouchableOpacity style={styles.container} onPress={onToggle} activeOpacity={1}>
    <Text style={[styles.text, todo.done && styles.done]}>
      {todo.text}
    </Text>
    <View style={[styles.circulo, todo.done && styles.circuloCheck]} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  text: { fontSize: 18, flex: 1 },
  done: { textDecorationLine: 'line-through', color: '#aaa' },
  circulo: {
    width: 28,
    height: 28,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#ccc',
  },
  circuloCheck: {
    backgroundColor: '#9cf39f',
    borderColor: '#9cf39f',
  },
});

export default TodoItem;