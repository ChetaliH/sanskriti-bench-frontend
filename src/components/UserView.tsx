// UserView.tsx
import '../UserView.css';
import Sidebar from './Sidebar';
import React, { useState } from 'react';
import ScrollableTable from './Table';
import DropdownNew from './DropdownNew';

function UserView() {
  const [selectedOption, setSelectedOption] = useState('contribute');
  const classes = ['page', 'motion'];
  const headers = ['Question', 'Answer', 'Created_At'];
  const data = [['nil', 'nil', 'nil']];
  const options = [
    { title: 'Contribute', path: 'contribute' },
    { title: 'Your Contributions', path: 'your-contributions' },
  ];

  const handleDropdownChange = (path: string) => {
    setSelectedOption(path);
  };

  return (
    <div>
      <header className="header"></header>
      <Sidebar />
      <div className={classes.join(' ')}>
        <h2>Sanskriti Bench App</h2>
        <h4>Welcome contributor</h4>
        <div>
          <button className="buttonView">Logout</button>
        </div>
        <div className="boxView">
          <p>Your every contribution counts. Once you hit submit, your contribution will go under review. Please make sure you follow the guidelines. If you cross a certain threshold of valid contributions, you will be eligible for incentives.</p>
          <p>Before hitting the submit button, make sure you have no mistakes, once you hit submit, the process can not be undone. So please take your time</p>
        </div>
        <div>
          <p>Please select</p>
        </div>
        <div>
          <DropdownNew options={options} onChange={handleDropdownChange} />
        </div>
        {selectedOption === 'contribute' && (
          <div className="boxView">
            <p>Question</p>
            <textarea className="textAreaView"></textarea>
            <p>Answer</p>
            <textarea className="textAreaViewAns"></textarea>
            <div>
              <button className="buttonView">Submit</button>
            </div>
          </div>
        )}
        {selectedOption === 'your-contributions' && (
          <div className="selectorView">
            <h3>We appreciate your contributions</h3>
            <p>Once you cross 200 contributions, you will be eligible for incentive from our side. Thanks again for contributing</p>
            <div className="boxView">
              <div className="boxViewSelector">
                <p>Total contributions</p>
                <p>Total in Maithili</p>
                <p>Total in all languages</p>
              </div>
              <div className="numbers">
                <p>0</p><p>0</p><p>1</p>
              </div>
              <ScrollableTable headers={headers} data={data} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserView;
