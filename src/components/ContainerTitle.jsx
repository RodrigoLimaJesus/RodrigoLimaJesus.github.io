import React from 'react';

export default function ContainerTitle({ title }) {
  return (
    <h2 className="text-cyan-300 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
      {title}
    </h2>
  );
}
