const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
}

const counterReducer = (state = initialState, action) => {
  console.log("action ->", action)
  switch (action.type) {
    case "GOOD":
      let good = state.good + 1
      return { ...state, good }
    case "OK":
      let ok = state.ok + 1
      return { ...state, ok }
    case "BAD":
      let bad = state.bad + 1
      return { ...state, bad }
    case "ZERO":
      return { good: 0, ok: 0, bad: 0 }
    default:
      return state
  }
}

export default counterReducer
