import React, { useState } from 'react';
import PersonalForm from '../../components/PersonalForm';
import PersonalList from '../../components/PersonalList';
import PersonalPagination from '../../components/PersonalPagination';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Personal = () => {
  const [personals, setPersonals] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      address: '',
      city: '',
    },
  });

  const onSubmit = (data) => {
    addPersonal(data);
    reset();
  };

  function notifyAdd() {
    toast.success('Added successfully', {
      position: 'top-right',
    });
  }

  function notifyDelete() {
    toast.success('Delete successfully', {
      position: 'top-right',
    });
  }

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
    notifyAdd();
  }

  function handleEditPersonal(id) {
    const clonePersonals = JSON.parse(JSON.stringify(personals));
    const findItem = clonePersonals.find((item) => item.id === id);
    setValue('name', findItem.name);
    setValue('email', findItem.email);
    setValue('address', findItem.address);
    setValue('city', findItem.city);
    setValue('countries', findItem.countries);
    setPersonals((prevState) => prevState.filter((item) => item.id !== id));
  }

  function handleDeletePersonal(id) {
    setPersonals((prevState) => prevState.filter((item) => item.id !== id));
    notifyDelete();
  }

  return (
    <>
      <div className='personal w-9/12 mx-auto p-5 bg-slate-100 rounded-md'>
        <h2>Responsive Form</h2>
        <p className='mb-[25px]'>Form is mobile responsive. Give it a try.</p>

        <div className='personal-detail flex justify-between p-6 bg-white shadow-md rounded-md mb-6'>
          <div>
            <h3>Personal Detail</h3>
            <p>Please fill out all the fields</p>
          </div>

          <PersonalForm
            register={register}
            handleSubmit={handleSubmit(onSubmit)}
            errors={errors}
            reset={reset}
            addPersonal={addPersonal}
          />
        </div>

        <PersonalList
          datas={personals}
          handleDeletePersonal={handleDeletePersonal}
          handleEditPersonal={handleEditPersonal}
        />

        <PersonalPagination datas={personals} />
      </div>
      <ToastContainer />
    </>
  );
};

export default Personal;
