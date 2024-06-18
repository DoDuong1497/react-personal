import React, { useState } from 'react';
import PersonalForm from './components/PersonalForm';
import PersonalList from './components/PersonalList';
import PersonalPagination from './components/PersonalPagination';

const Personal = () => {
  const [personals, setPersonals] = useState([]);

  function addPersonal({ name, email, address, city, countries }) {
    const newPersonal = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      email,
      address,
      city,
      countries,
    };

    setPersonals((prevState) => [...prevState, newPersonal]);
  }

  function handleDeletePersonal(id) {
    setPersonals((prevState) => prevState.filter((item) => item.id !== id));
  }

  return (
    <div className='personal w-9/12 mx-auto p-5 bg-slate-100 rounded-md'>
      <h2>Responsive Form</h2>
      <p className='mb-[25px]'>Form is mobile responsive. Give it a try.</p>

      <div className='personal-detail flex justify-between p-6 bg-white shadow-md rounded-md mb-6'>
        <div>
          <h3>Personal Detail</h3>
          <p>Please fill out all the fields</p>
        </div>

        <PersonalForm addPersonal={addPersonal} />
      </div>

      <PersonalList
        datas={personals}
        handleDeletePersonal={handleDeletePersonal}
      />

      <PersonalPagination datas={personals} />
    </div>
  );
};

export default Personal;
