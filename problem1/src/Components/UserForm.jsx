import React, { useState } from 'react';

const UserForm = () => {
  const [name, setName] = useState('');
  const emailInputRef = React.createRef();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', emailInputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />
        {name.length < 3 && (
          <p style={{ color: 'red' }}>Name must be at least 3 characters long</p>
        )}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          ref={emailInputRef}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
