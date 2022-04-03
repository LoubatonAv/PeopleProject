import axios from 'axios';
import { storageService } from './storage.service.js';
import { utilService } from './util.service.js';

const STORAGE_KEY = 'peopleDB';

export const peopleService = {
  loadPeople,
  remove,
  save,
  getById,
  setPeople,
};

function getById(personId) {
  return storageService.get(STORAGE_KEY, personId);
}

async function getPeople() {
  const res = await axios.get('https://randomuser.me/api/?results=20');

  const people = res.data.results;
  const peopleWithId = people.map((person) => {
    return { ...person, id: utilService.makeId(), isSelected: false };
  });

  _savePeopleToStorage(peopleWithId);

  return peopleWithId;
}

async function loadPeople() {
  try {
    let people = await _loadPeoplesFromStorage();

    if (!people) {
      getPeople();
    }
    return people;
  } catch (err) {
    console.log('Cannot get weather', err);
  }
}

function remove(personId) {
  return storageService.removeFromStorage(STORAGE_KEY, personId);
}

function save(person) {
  if (person.id) {
    return storageService.put(STORAGE_KEY, person);
  }
}

function setPeople(people) {
  let newArray = _savePeopleToStorage(people);
  return newArray;
}

function _savePeopleToStorage(recipeData) {
  storageService.saveToStorage(STORAGE_KEY, recipeData);
}

function _loadPeoplesFromStorage() {
  return storageService.loadFromStorage(STORAGE_KEY);
}

// function _createRecipes() {
//   let people = _loadPeoplesFromStorage();
//   if (!people || !people.length) {
//     people = getPeople();
//   }
//   _savePeopleToStorage(people);
// }

// _createPeople();
