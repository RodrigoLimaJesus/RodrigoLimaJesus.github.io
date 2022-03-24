import React from 'react';

export default function Container({ children }) {
  return (
    <div className="w-11/12 mx-auto my-8 p-[4vw] flex flex-col bg-app-container-dark border-2 border-white rounded-2xl sm:w-5/6 lg:w-9/12">
      {children}
    </div>
  );
}
