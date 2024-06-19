import React from 'react';

interface Category {
  name: string;
}
const Category: React.FC<Category> = ({ name }) => {
  return (
    <li>
      <a href="#">{name}</a>
    </li>
  );
};

export default Category;
