<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo"/>
    <span class="addContainer" @click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고!
        <i class="fas fa-times closeModalBtn" @click="showModal = false"></i>
      </h3>
      <div slot="body">아무것도 입력하지 않으셨습니다.</div>
    </Modal>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Modal from "./common/Modal.vue"

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false
    }
  },
  methods: {
    ...mapMutations(['addOneItem']),
    addTodo() {
      if(this.newTodoItem != "") {
        this.addOneItem(this.newTodoItem)
        this.clearInput()
      } else {
        this.showModal = !this.showModal
      }
    },
    clearInput() {
      this.newTodoItem = ""
    }
  },
  components: {
    Modal,
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
.closeModalBtn {
  color: #42b983;
}
</style>