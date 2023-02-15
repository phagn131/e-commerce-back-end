const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get ('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const categoryData = await Category.findAll();

});

router.get ('/:id', async (req, res) => {
  const categoryName = await categoryData.findByPk(req.params.id);
  // find one category by its `id` value
  // be sure to include its associated Products
  return res.json(categoryData);
});

router.post ('/', async (req, res) => {
  // create a new category
  const categoryData = await Category.create(req.body);

  return res.json(categoryData);
});

router.put ('/:id', async (req, res) => {
  const categoryData = await Category.update(
    {
      id: req.body.id,
    },
    {
      where: {
        category_id: req.params.category_id,
      },
    }
  );

  return res.json(categoryData);
});

router.delete ('/:id', async (req, res) => {
  const categoryData = await Book.destroy({
    where: {
      book_id: req.params.book_id,
    },
  });

  return res.json(categoryData);
});

module.exports = router;
