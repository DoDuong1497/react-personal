import clsx from 'clsx';
import React from 'react';

const PersonalForm = ({ register, handleSubmit, errors }) => {
  return (
    <>
      <form className='w-7/12' onSubmit={handleSubmit}>
        <div>
          <div className='mb-5'>
            <label
              htmlFor='name'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Full Name
            </label>
            <input
              type='text'
              id='name'
              className={clsx(
                'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5',
                errors?.name
                  ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                  : 'focus:ring-blue-500 focus:border-blue-500'
              )}
              placeholder='Nguyen Van A'
              {...register('name', {
                required: {
                  value: true,
                  message: 'This field is required',
                },
                minLength: {
                  value: 6,
                  message: 'Do not enter less than 6 characters',
                },
              })}
            />
            <p className='mt-2 text-xs font-semibold text-red-600 dark:text-red-500'>
              {errors?.name && <>{errors?.name?.message}</>}
            </p>
          </div>

          <div className='mb-5'>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Email Address
            </label>
            <input
              type='text'
              id='email'
              className={clsx(
                'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5',
                errors.email
                  ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                  : 'focus:ring-blue-500 focus:border-blue-500'
              )}
              placeholder='name@gmail.com'
              {...register('email', {
                required: {
                  value: true,
                  message: 'This field is required',
                },
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message: 'Email invalidate. Ex: example@gmail.com',
                },
                minLength: {
                  value: 6,
                  message: 'Do not enter less than 6 characters',
                },
              })}
            />
            {errors?.email && (
              <p className='mt-2 text-xs font-semibold text-red-600 dark:text-red-500'>
                {errors?.email?.message}
              </p>
            )}
          </div>

          <div className='grid md:grid-cols-2 md:gap-6'>
            <div className='mb-5'>
              <label
                htmlFor='address'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Address/Street
              </label>
              <input
                type='text'
                id='address'
                className={clsx(
                  'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5',
                  errors?.address
                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                    : 'focus:ring-blue-500 focus:border-blue-500'
                )}
                placeholder='Tran Ba Giao'
                {...register('address', {
                  required: {
                    value: true,
                    message: 'This field is required',
                  },
                  minLength: {
                    value: 6,
                    message: 'Do not enter less than 6 characters',
                  },
                })}
              />
              {errors?.address && (
                <p className='mt-2 text-xs font-semibold text-red-600 dark:text-red-500'>
                  {errors?.address?.message}
                </p>
              )}
            </div>

            <div className='mb-5'>
              <label
                htmlFor='city'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                City
              </label>
              <input
                type='text'
                id='city'
                className={clsx(
                  'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5',
                  errors?.city
                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                    : 'focus:ring-blue-500 focus:border-blue-500'
                )}
                placeholder='Ho Chi Minh'
                {...register('city', {
                  required: {
                    value: true,
                    message: 'This field is required',
                  },
                  minLength: {
                    value: 6,
                    message: 'Do not enter less than 6 characters',
                  },
                })}
              />
              {errors?.city && (
                <p className='mt-2 text-xs font-semibold text-red-600 dark:text-red-500'>
                  {errors?.city?.message}
                </p>
              )}
            </div>
          </div>

          <div className='mb-5'>
            <label
              htmlFor='countries'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Country
            </label>
            <select
              id='countries'
              className={clsx(
                'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5',
                errors?.countries
                  ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                  : 'focus:ring-blue-500 focus:border-blue-500'
              )}
              {...register('countries', {
                required: {
                  value: true,
                  message: 'This field is required',
                },
              })}
            >
              <option value=''>Select my country</option>
              <option value='United States'>United States</option>
              <option value='Canada'>Canada</option>
              <option value='France'>France</option>
              <option value='Germany'>Germany</option>
              <option value='Viet Nam'>Viet Nam</option>
            </select>
            {errors?.countries && (
              <p className='mt-2 text-xs font-semibold text-red-600 dark:text-red-500'>
                {errors?.countries?.message}
              </p>
            )}
          </div>

          <div className='flex justify-end'>
            <button
              type='submit'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PersonalForm;
