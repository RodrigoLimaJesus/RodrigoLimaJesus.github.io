import React from 'react';

export default function Input(props) {
  const {
    label,
    id,
    placeholder,
    value,
    onChange,
    detailId,
    options,
  } = props;

  return (
    <label htmlFor={ id }>
      { label }
      <input
        type="text"
        id={ id }
        placeholder={ placeholder }
        onChange={ onChange }
        list={ detailId }
        value={ value }
      />
      <datalist id={ detailId }>
        {options.map(currency => (
          <option key={ currency } value={ currency }>{currency}</option>
        ))}
      </datalist>
    </label>
  );
}
