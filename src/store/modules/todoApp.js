const storage = {
  fetch() {
    const arr = []
    if(localStorage.length > 0) {
      for(let i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i).indexOf('webpack-dev-server') < 0) {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
      }
    }
    return arr
  }
}

const state = {
    todoItems: storage.fetch()
}

const getters = {
  storedTodoItems: state => state.todoItems
}

const mutations = {
  addOneItem: (state, todoItem) => {
    const todoObj = { completed: false, item: todoItem }
    localStorage.setItem(todoItem, JSON.stringify(todoObj))
    state.todoItems.push(todoObj)
  },
  removeOneItem: (state, payload) => {
    const { todoItem, index } = payload
    localStorage.removeItem(todoItem.item)
    state.todoItems.splice(index, 1)
  },
  toggleOneItem: (state, payload) => {
    const { todoItem, index } = payload
    state.todoItems[index].completed = !state.todoItems[index].completed
    localStorage.removeItem(todoItem.item)
    localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
  },
  clearAllItems: state => {
    localStorage.clear()
    state.todoItems = []
  }
}

export default {
  state,
  getters,
  mutations
}