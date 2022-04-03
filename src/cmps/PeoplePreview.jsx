import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { Modal } from './Modal';
import { Link } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import { useSelector, useDispatch } from 'react-redux';
import { updatePerson } from '../cmps/store/people.action.js';
import { setNewArr } from '../cmps/store/people.action.js';

export const PeoplePreview = ({ people, onHandleRemovePerson, onHandleEditPerson }) => {
  const [isModal, setIsModal] = useState(false);
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const peoples = useSelector((state) => state?.peopleModule?.peoples);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    people.isSelected = event.target.checked;
  };

  const onHandleRemove = (id) => {
    onHandleRemovePerson(id);
  };

  const handleEditPerson = (person) => {
    setIsModal(true);
    onHandleEditPerson(person);
  };

  return (
    <div className='card'>
      <div className='card-details'>
        <Link to={`/person/${people.id}`}>
          <h3>
            {people.name.title} {people.name.first} {people.name.last}
          </h3>
        </Link>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
          value={people.id}
        />
        <img src={people.picture.large}></img>
        <p>{people.email}</p>
        <div>
          Location :{people.location.country}, {people.location.city},{people.location.street.name}
        </div>
        <span>ID : {people.id}</span>
      </div>
      <div className='card-buttons'>
        <button onClick={() => onHandleRemove(people.id)}>Delete</button>
        <button onClick={() => handleEditPerson(people)}>Edit</button>
      </div>
      {isModal ? <Modal people={people} setIsModal={setIsModal} /> : <div></div>}
    </div>
  );
};

// https://day.js.org/docs/en/display/format
