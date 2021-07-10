const addOneItem = (state, todoItem) => {
  const todoObj = { completed: false, item: todoItem }
  localStorage.setItem(todoItem, JSON.stringify(todoObj))
  state.todoItems.push(todoObj)
}
const removeOneItem = (state, payload) => {
  const { todoItem, index } = payload
  localStorage.removeItem(todoItem.item)
  state.todoItems.splice(index, 1)
}
const toggleOneItem = (state, payload) => {
  const { todoItem, index } = payload
  state.todoItems[index].completed = !state.todoItems[index].completed
  localStorage.removeItem(todoItem.item)
  localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
}
const clearAllItems = state => {
  localStorage.clear()
  state.todoItems = []
}

export {
  addOneItem,
  removeOneItem,
  toggleOneItem,
  clearAllItems
}