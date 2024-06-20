import React from 'react';
import PersonalItem from './PersonalItem';

const PersonalList = ({ datas, handleDeletePersonal, handleEditPersonal }) => {
  return (
    <div className='relative overflow-x-auto shadow-md rounded-lg mb-6'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3 font-bold'>
              Full Name
            </th>
            <th scope='col' className='px-6 py-3 font-bold'>
              Email Address
            </th>
            <th scope='col' className='px-6 py-3 font-bold'>
              Address
            </th>
            <th scope='col' className='px-6 py-3 font-bold'>
              City
            </th>
            <th scope='col' className='px-6 py-3 font-bold'>
              Country
            </th>
            <th scope='col' className='px-6 py-3 font-bold'>
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {datas.length > 0 ? (
            <>
              {datas.map((item) => (
                <PersonalItem
                  key={item.id}
                  data={item}
                  handleDeletePersonal={handleDeletePersonal}
                  handleEditPersonal={handleEditPersonal}
                />
              ))}
            </>
          ) : (
            <tr>
              <td className='px-6 py-4 text-center font-bold' colSpan={6}>
                No data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PersonalList;
