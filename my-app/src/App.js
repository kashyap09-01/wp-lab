import React, { useState } from 'react';

function App() {
  // States for form elements
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [checked, setChecked] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Event handlers for inputs
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleGenderChange = (e) => setGender(e.target.value);
  const handleAgeChange = (e) => setAge(e.target.value);
  const handleRollNumberChange = (e) => setRollNumber(e.target.value);
  const handleCheckboxChange = (e) => setChecked(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div style={styles.app}>
      <h1 style={styles.header}>React Form Example</h1>

      {/* Form Element */}
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Name Field */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
            style={styles.input}
          />
        </div>

        {/* Email Field */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            style={styles.input}
          />
        </div>

        {/* Gender Field */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Gender:</label>
          <select
            value={gender}
            onChange={handleGenderChange}
            style={styles.input}
          >
            <option value="">--Select Gender--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Age Field */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Age:</label>
          <input
            type="number"
            value={age}
            onChange={handleAgeChange}
            placeholder="Enter your age"
            style={styles.input}
          />
        </div>

        {/* Roll Number Field */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Roll Number:</label>
          <input
            type="text"
            value={rollNumber}
            onChange={handleRollNumberChange}
            placeholder="Enter your roll number"
            style={styles.input}
          />
        </div>

        {/* Terms and Conditions Checkbox */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Accept Terms and Conditions:</label>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheckboxChange}
            style={styles.checkbox}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>

      {/* Display Greeting and Form Data After Submit */}
      {formSubmitted && (
        <div style={styles.result}>
          <h3>Hello, {name}!</h3>
          <p>Thank you for submitting the form. Here is your information:</p>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Gender: {gender}</p>
          <p>Age: {age}</p>
          <p>Roll Number: {rollNumber}</p>
          <p>Accepted Terms: {checked ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
    margin: '50px',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    color: '#333',
  },
  form: {
    maxWidth: '400px',
    margin: '0 auto',
  },
  formGroup: {
    margin: '10px 0',
  },
  label: {
    fontWeight: 'bold',
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  checkbox: {
    marginTop: '10px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    cursor: 'pointer',
    width: '100%',
    borderRadius: '4px',
    marginTop: '10px',
  },
  result: {
    marginTop: '20px',
    backgroundColor: '#f4f4f4',
    padding: '15px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
};

export default App;
