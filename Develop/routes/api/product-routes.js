const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async(req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  const productData = await Product.findAll( {
    include: [{ model: Category }, 
      { model: Tag, through: ProductTag, as: 'tags_on_product' }]
  });
  return res.json(productData);

});

// get one product
router.get('/:id', async(req, res) => {
  const productData = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, 
        { model: Tag, through: ProductTag, as: 'tags_on_product' }]
    
  });
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  return res.json(productData);
});


// update product
router.put('/:id', async (req, res) => {
  // update product data
  const productData = await
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    return res.json(productData)
  
  
    .then((product) => {
      // find all associated tags from ProductTag
      return ProductTag.findAll({ where: { product_id: req.params.id } });
    })
    .then((productTags) => {
      // get list of current tag_ids
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      // create filtered list of new tag_ids
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });
      // figure out which ones to remove
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      // run both actions
      return Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', async (req, res) => {
  // delete one product by its `id` value
  const productData = await Product.destroy({
    where: {
      id: req.params.id,
    },
  });

  return res.json(productData);

});

module.exports = router;
