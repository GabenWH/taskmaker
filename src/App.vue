<template>
  <v-app>
    <!-- App Bar component at the top of the page -->
    <AppBar />
    <!-- Todo List component where the tasks will be displayed and managed -->
    <TodoList />
    
    <CrossOut :is-crossed-out="crossedOut">ds;lafkjasd;lfj</CrossOut>
  </v-app>
</template>

<script>
// Import the components from their files
import CrossOut from './components/CrossOut.vue'
import AppBar from './components/AppBar.vue';
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    CrossOut,
    AppBar,   // Register AppBar component
    TodoList  // Register TodoList component
  },
  data() {
    return {
    sampleText: 'This is sample Text',
    crossedOut: true
    }
  }
};
</script>

<style>
/* Global styles can go here */
</style>