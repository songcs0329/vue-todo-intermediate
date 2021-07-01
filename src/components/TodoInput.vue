<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo"/>
    <span class="addContainer" @click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: ""
    }
  },
  methods: {
    addTodo() {
      if(this.newTodoItem != "") {
        this.$emit('addTodoItem', this.newTodoItem);
        this.clearInput();
      }
    },
    clearInput() {
      this.newTodoItem = "";
    }
  },
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  background-color: #fff;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  display: block;
  width: 3rem;
  background: linear-gradient(to right, #6478fb, #8763fb);
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: #fff;
  vertical-align: middle;
}
</style>