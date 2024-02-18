const express = require('express');
const cors = require('cors');
const students = require('./students.json');

const app = express();
app.use(cors());

app.get('/api/students', (req, res) => {
  res.json(students);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
