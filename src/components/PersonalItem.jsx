import React from 'react';

const PersonalItem = ({ data, handleDeletePersonal, handleEditPersonal }) => {
  return (
    <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
      <th
        scope='row'
        className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
      >
        {data.name}
      </th>
      <td className='px-6 py-4'>{data.email}</td>
      <td className='px-6 py-4'>{data.address}</td>
      <td className='px-6 py-4'>{data.city}</td>
      <td className='px-6 py-4'>{data.countries}</td>
      <td className='px-6 py-4'>
        <button
          type='button'
          className='text-blue-700 font-medium text-sm mr-5'
          onClick={() => handleEditPersonal(data.id)}
        >
          Edit
        </button>
        <button
          type='button'
          className='text-red-700 font-medium text-sm'
          onClick={() => handleDeletePersonal(data.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default PersonalItem;
