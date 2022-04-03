import React, { useEffect, useState } from 'react';
import { PeoplePreview } from './PeoplePreview';

export const PeopleList = ({ peoples, onHandleRemovePerson, onHandleEditPerson, setEditMode }) => {
  return (
    <div className='card-container'>
      {peoples.map((people) => (
        <PeoplePreview
          people={people}
          onHandleRemovePerson={onHandleRemovePerson}
          onHandleEditPerson={onHandleEditPerson}
          setEditMode={setEditMode}
          key={people.id}
        />
      ))}
    </div>
  );
};
