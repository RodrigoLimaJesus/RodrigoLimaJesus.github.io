import React from 'react';

export default function Container({ children }) {
  return (
    <div className="w-[90vw] mx-[auto] my-8 p-[4vw] flex flex-col bg-container-dark border-2 border-white rounded-2xl">
      {children}
    </div>
  );
}
