import React from 'react';

interface Brand {
  name: string;
}
const Brand: React.FC<Brand> = ({ name }) => {
  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id={name} />
      <label className="form-check-label capitalize" htmlFor={name}>
        {name}
      </label>
    </div>
  );
};

export default Brand;
