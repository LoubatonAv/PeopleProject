const initialState = {
  peoples: [],
};

export function peopleReducer(state = initialState, action) {
  let newState = state;
  switch (action.type) {
    case 'SET_PEOPLE':
      newState = { ...state, peoples: [...action.peoples] };
      break;
    case 'SET_NEW_PEOPLE':
      newState = { ...state, peoples: [...action.peoples] };
      break;
    case 'REMOVE_PERSON':
      newState = { ...state, peoples: state.peoples.filter((person) => person.id !== action.personId) };
      break;

    case 'UPDATE_PERSON':
      newState = {
        ...state,
        peoples: state.peoples.map((currPerson) => {
          return currPerson.id === action.person.id ? action.person : currPerson;
        }),
      };
      break;
  }

  // default:
  return newState;
}
