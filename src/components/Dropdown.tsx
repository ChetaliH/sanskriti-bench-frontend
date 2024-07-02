import React, { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Sidebar.css';

interface Option {
  title: string;
  path: string;
}

interface DropdownProps {
  options: Option[];
  
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const path = event.target.value;
    navigate(path);
  };

  return (
    <div className="dropdown-container">
      <select onChange={handleChange} className="dropdown" defaultValue="">
        <option value="" disabled>Menu</option>
        {options.map((option, index) => (
          <option key={index} value={option.path}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
