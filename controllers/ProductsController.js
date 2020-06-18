const viewPath = ('products');
const Product = require('../models/product');

exports.show = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render(`${viewPath}/show`, {
  pageTitle: product.name, 
  product: product
})};

exports.new = (req, res) => {
  res.render(`${viewPath}/new`, {
    pageTitle: 'New Product'
  });
};

exports.create = async (req, res) => {

  try{const product = await Product.create(req.body)
    res.redirect(`/products/${product.id}`);
    console.log(req);
  } catch (err) {
     res.send(err);
  }
  
};



exports.edit = (req, res) =>{
  res.send('Its edited')
};

exports.update = (req, res) =>{
  res.send('Is updated')
}  

exports.delete = (req, res) =>{
  res.send('id deleted!')
};
