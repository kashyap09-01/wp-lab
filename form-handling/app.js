const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse incoming form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like HTML)
app.use(express.static(path.join(__dirname, 'public')));

// GET request to serve the exam registration form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// POST request to handle form submission
app.post('/register', (req, res) => {
  const { name, email, phone, examType, subject, examDate, rollNumber, address, terms } = req.body;
  
  // Validate if the required fields are filled
  if (!name || !email || !phone || !examType || !subject || !examDate || !rollNumber || !address || !terms) {
    return res.send('Please fill in all the fields and accept the terms.');
  }
  
  // Respond with a confirmation message
  res.send(`
    <h1>Registration Successful!</h1>
    <p>Thank you, ${name}. You have successfully registered for the exam.</p>
    <p>Your registration details:</p>
    <ul>
      <li>Name: ${name}</li>
      <li>Email: ${email}</li>
      <li>Phone: ${phone}</li>
      <li>Exam Type: ${examType}</li>
      <li>Subject: ${subject}</li>
      <li>Exam Date: ${examDate}</li>
      <li>Roll Number: ${rollNumber}</li>
      <li>Address: ${address}</li>
      <li>Terms Accepted: ${terms}</li>
    </ul>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
