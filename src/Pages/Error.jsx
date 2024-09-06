import React from 'react'

const Error = () => {
  return (
    <>
      <div className='text-center m-7'>
        <h1 className='text-[70px]'>ERROR 404</h1>
        <h3 className='text-[40px]'>Page Not Found :(</h3>
        <div className='m-3'>
          <p className='text-gray-600'>Sorry, the page you are looking for does not exist.</p>
          <p className='text-gray-600'>Try going back to the <a href="/" className='text-blue-500 font-semibold'>Home Page</a></p>
        </div>
      </div>
    </>
  );
}

export default Error