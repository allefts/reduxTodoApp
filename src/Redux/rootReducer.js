function todoReducer(state = { todos: [] }, action) {
  switch (action.type) {
    case "todo/addTodo":
      return { todos: [...state.todos, action.payload.content] };
    case "todo/delTodo":
      return {
        todos: state.todos.filter((e) => {
          return e !== action.payload;
        }),
      };
    case "todo/completeTodo":
      return;
    default:
      return state;
  }
}

export default todoReducer;
