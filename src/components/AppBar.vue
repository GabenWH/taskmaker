<template>
    <v-app-bar app color="primary" dark>
    <div class="flex-container">
      <!-- Toolbar content -->
      <v-toolbar-title>My Todo List</v-toolbar-title>
      <v-progress-linear
      :key="completionRate"
      v-model="completionRate"
      :buffer-value="bufferValue"
      color="success"
      height="10"
        ></v-progress-linear>
    </div>
    </v-app-bar>
    
  </template>
  
  <script>
import { completionRate } from '../state';

  export default {
    name: 'AppBar',
    data () {
        return {
            bufferValue: 20,
        }
    },
    setup(){
        return {completionRate};
    }
  };
  </script>

  <style scoped>
  .flex-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  
  .title {
    flex-shrink: 1;
  }
  
  .progress-bar {
    flex-grow: 1;
    flex-basis: 50%;
  }
  </style>