import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadPeople, removePerson, setNewArr } from '../cmps/store/people.action.js';
import { Pagination } from '../cmps/Pagination';
import { PeopleList } from '../cmps/PeopleList';

export const RecipePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const peoples = useSelector((state) => state?.peopleModule?.peoples);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPeople());
  }, []);

  const onHandleRemovePerson = (id) => {
    dispatch(removePerson(id));
  };

  // Get current posts

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = peoples.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const deletePeopleById = () => {
    let newArr = [];
    peoples.forEach((person) => {
      if (person.isSelected) newArr.push(person.id);
    });
    const newArray = peoples.filter((value) => !newArr.includes(value.id));
    dispatch(setNewArr(newArray));
  };

  return (
    <>
      <div className='main-layout'>
        <button onClick={deletePeopleById}>Delete</button>
        <PeopleList peoples={currentPost} onHandleRemovePerson={onHandleRemovePerson} />

        <Pagination postsPerPage={postsPerPage} totalPosts={peoples.length} paginate={paginate} />
      </div>
    </>
  );
};
