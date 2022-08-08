const noteReducer = (state = [], action) => {
  switch (action.type) {
    case "NEW_NOTE":
      return state.concat(action.data)
    case "TOGGLE_IMPORTANCE": {
      const id = action.data.id
      const noteToChange = state.find((n) => n.id === id)
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      }

      //  me return semua notes kecuali notes yang di cari kembalikan changednote
      return state.map((note) => (note.id !== id ? note : changedNote))
    }
    default:
      return state
  }
}

const generateId = () => {
  const head = Date.now()
  const tail = Number((Math.random() * 1000000).toFixed(0))
  return `${head}${tail}`
}

export const createNote = (content) => {
  return {
    type: "NEW_NOTE",
    data: {
      content,
      important: Math.round(Math.random()),
      id: generateId(),
    },
  }
}

export const toggleImportanceOf = (id) => {
  return {
    type: "TOGGLE_IMPORTANCE",
    data: { id },
  }
}

export default noteReducer
