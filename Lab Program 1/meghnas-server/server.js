const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.post('/order', (req, res) => {
  const order = req.body;
  console.log('Received Order:', order);
  res.json({ message: 'Order received successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
