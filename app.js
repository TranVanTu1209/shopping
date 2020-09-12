const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const Product = require('./models/Product');

connectDB();

const app = express();

app.use(cors());
app.use(express.json({ extended: false }));

// api routes
app.post('/api/v1/products', async (req, res) => {
  const { title, image, description, availableSizes, price } = req.body;
  if (!title || !image || availableSizes.length === 0 || !price)
  {
    return res.status(400).json({ msg: 'Please fill out all field' });
  }
  try
  {
    const newProduct = new Product({
      title, image, description, availableSizes, price
    });
    await newProduct.save();
    return res.json(newProduct);
  } catch (error)
  {
    return res.status(500).json({ msg: 'Server error' });
  }
});

app.get('/api/v1/products', async (req, res) => {
  try
  {
    const products = await Product.find({});
    return res.json(products);
  } catch (error)
  {
    return res.status(500).json({ msg: 'Server error' });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));