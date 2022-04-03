import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { peopleService } from '../service/people.service';

export const PersonDetails = () => {
  const { personId } = useParams();

  const [person, setPerson] = useState(null);
  const getById = (personId) => {
    return peopleService.getById(personId).then((person) => {
      return person;
    });
  };

  useEffect(() => {
    getById(personId).then((person) => {
      setPerson(person);
    });
  }, []);

  return (
    <div className='person-details'>
      <div>{person?.id}</div>
      <img src={person?.picture.large}></img>
    </div>
  );
};
