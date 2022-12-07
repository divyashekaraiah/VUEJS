<template>
  <div>
    Enter the things to do:
    <input type="text" placeholder="things-to-do" class="todo-input" v-model="newtodo" @keyup.enter="addtodo" /> Press
    Enter
    <div v-for="(todo, index) in todos" :key="todo.id" class="todo-item">
      <div>{{ todo.title }}</div>


      <div class="remove.item" @click="removeToDo(index)">
        &times;
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todo-list',
  data() {
    return {
      newtodo: '',
      idforToDo: 3,
      todos: [
        {
          'id': 1,
          'title': 'default item',
          'completed': false,
        }]
    }

  },


  methods: {
    addtodo() {

      this.todos.push({
        id: this.idforToDo,
        title: this.newtodo,
        completed: false

      })
      this.newToDo = ''
      this.idForTodo++
      if (this.newToDo.trim().length == 0) {
        return
      }
    },
    removeToDo(index) {
      this.todos.splice(index, 1)
    }
  }
}





</script>
<style>
.todo-input {
  width: 30%;
  padding: 10px 18px;
  font-size: 18px;
  margin-bottom: 16px;
}

.remove.item {
  size: 4px;
  font-size: large;
  cursor: pointer;
  font-style: normal;
  font-family: 'Courier New', Courier, monospace;

}

.item-item {
  margin-bottom: 12px;
  /* display: flex; */
  align-items: center;
  justify-content: center;

}
</style>
