import { reactive, computed } from 'vue';

export const store = reactive({
  todos: [],
  history: [],
  future: [],

  addTodo(newTodo) {
    this.commit(); // Commit before change
    this.todos.push(newTodo);
  },

  deleteTodo(index) {
    this.commit(); // Commit before change
    this.todos.splice(index, 1);
  },

  updateStatus(index, status) {
    this.commit(); // Commit before change
    if (index >= 0 && index < this.todos.length) {
      this.todos[index].status = status;
    }
  },

  commit() {
    this.history.push(this.todos.map(todo => ({ ...todo })));
    this.future.length = 0; // Clear redo stack after new action
  },

  undo() {
    if (this.history.length > 0) {
      const lastState = this.history.pop();
      this.future.push(this.todos.map(todo => ({ ...todo }))); // save current state to future for redo
      this.todos.splice(0, this.todos.length, ...lastState);
    }
  },

  redo() {
    if (this.future.length > 0) {
      const nextState = this.future.pop();
      this.history.push(this.todos.map(todo => ({ ...todo }))); // save current state for potential undo
      this.todos.splice(0, this.todos.length, ...nextState);
    }
  },
});
export const completionRate = computed(() => {
    const totalTasks = store.todos.length;
    const completedTasks = store.todos.filter(todo => todo.status === "Completed").length;
    return totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
});