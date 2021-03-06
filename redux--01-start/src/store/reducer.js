const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "INCREMENT":
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "ADD":
      return {
        ...state,
        counter: state.counter + actions.value,
      };
    case "SUBTRACT":
      return {
        ...state,
        counter: state.counter - actions.value,
      };
    case "STORE_RESULT":
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter }),
      };
    case "DELETE_RESULT":
      //   const id = 2;
      //   const newArray = [...state.results];
      //   newArray.splice(id, 1);
      const updatedArray = state.results.filter(
        (result) => result.id !== actions.resultElId
      );
      return {
        ...state,
        results: updatedArray,
      };
    default:
      return state;
  }
};

export default reducer;
