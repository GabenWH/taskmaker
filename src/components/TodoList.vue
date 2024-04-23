<template>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" offset-sm="3">
          <v-card>
            <v-card-title>Manage Your Tasks</v-card-title>
            <v-card-text>
              <v-text-field
                label="What needs to be done?"
                v-model="newTaskText"
                outlined
                clearable
                @keyup.enter="addNewTodo"
              ></v-text-field>
              <v-select
                v-model="newTaskStatus"
                :items="statuses"
                label="Status"
                outlined
                clearable
              ></v-select>
              <v-btn color="primary" @click="addNewTodo">Add Task</v-btn>
              <v-btn color="secondary" @click="undoTodo">Undo</v-btn>
              <v-btn color="secondary" @click="redoTodo">Redo</v-btn>
              <v-list>
                <v-list-item
                  v-for="(todo, index) in todos"
                  :key="index"
                >
                  <v-list-item-content>
                    <v-list-item-title><CrossOut :is-crossed-out="todo.status==='Completed'">{{ todo.text }}</CrossOut></v-list-item-title>
                    <v-list-item-subtitle>{{ todo.status }}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-menu offset-y>
                      <template v-slot:activator="{ props }">
                        <v-btn icon v-bind="props">
                          <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                      </template>
                      <v-list>
                        <v-list-item
                          v-for="status in statuses"
                          :key="status"
                          @click="updateStatus(index, status)"
                        >
                          <v-list-item-title>{{ status }}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                    <v-btn icon @click="deleteTodo(index)">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { store } from '../state';
  import CrossOut from './CrossOut.vue';
  
  export default {
    data() {
      return {
        newTaskText: '',
        newTaskStatus: '',
        statuses: ['Unstarted', 'In Progress', 'Completed']
      };
    },
    computed: {
      todos() {
        return store.todos;
      }
    },
    components:{
      CrossOut
    },
    methods: {
      undoTodo() {
        store.undo({

        });
      },
      redoTodo(){
        store.redo({

        });
      },
      addNewTodo() {
        store.addTodo({
          text: this.newTaskText,
          status: this.newTaskStatus || 'Unstarted'
        });
        this.newTaskText = '';
        this.newTaskStatus = '';
      },
      deleteTodo(index) {
        store.deleteTodo(index);
      },
      updateStatus(index, status) {
        store.updateStatus(index, status);
      }
    }
  };
  </script>