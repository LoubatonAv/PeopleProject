import { peopleService } from '../../service/people.service.js';

export function loadPeople() {
  return (dispatch, getState) => {
    peopleService.loadPeople().then((people) => {
      const action = { type: 'SET_PEOPLE', peoples: people };
      dispatch(action);
    });
  };
}

export function setNewArr(newArr) {
  return (dispatch, getState) => {
    peopleService.setPeople(newArr);
    const action = { type: 'SET_NEW_PEOPLE', peoples: newArr };
    dispatch(action);
  };
}

export function removePerson(personId) {
  return (dispatch) => {
    peopleService.remove(personId).then(() => {
      const action = { type: 'REMOVE_PERSON', personId };
      dispatch(action);
    });
  };
}

export function updatePerson(person) {
  return (dispatch) => {
    peopleService
      .save(person)
      .then((savedPerson) => {
        const action = { type: 'UPDATE_PERSON', person: savedPerson };
        dispatch(action);
      })
      .catch((err) => {});
  };
}
