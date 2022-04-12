import MenuItem from "../models/MenuItem.js";
import Category from "../models/Category.js";

const addCategory = async (req, res) => {
  const { categoryType, categoryDescription } = req.body;
  if (!categoryType || !categoryDescription) {
    return res.json({ message: "Enter all the details!" });
  }

  try {
    const newCategory = new Category({
      categoryType,
      categoryDescription,
    });
    const saveCategory = await newCategory.save();
    console.log(saveCategory);
    return res.status(200).json({
      category: newCategory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Unable to save category!" });
  }
};

const editCategory = async (req, res) => {
  const categoryId = req.params.categoryId;
  const { categoryType, categoryDescription } = req.body;
  try {
    const category = await Category.findById({ _id: categoryId });
    if (category) {
      const update = await category.update({
        categoryType,
        categoryDescription,
      });
      console.log(update);
      return res
        .status(200)
        .json({ message: "Category updated successfully!" });
    }
    return res.status(404).json({ message: "Category not found!" });
  } catch (error) {
    return res.status(500).json({ message: "Unable to edit category!" });
  }
};

const removeCategory = async (req, res) => {
  const categoryId = req.params.categoryId;
  try {
    const category = await Category.findById({ _id: categoryId });
    if (category) {
      const items = category.items;
      console.log(items);

      const deleteItems = await MenuItem.deleteMany({ _id: { $in: items } });
      console.log(deleteItems);

      const deleteCategory = await category.delete();
      console.log(deleteCategory);

      return res
        .status(200)
        .json({ message: "Category deleted successfully!" });
    }
    return res.status(404).json({ message: "Category not found!" });
  } catch (error) {
    return res.status(500).json({ message: "Unable to delete category!" });
  }
};

const addMenuItem = async (req, res) => {
  const categoryId = req.params.categoryId;
  const { name, price, description, photo, ingredients, currency } = req.body;

  if (!name || !price) {
    return res.json({ message: "Enter all details!" });
  }
  try {
    const category = await Category.findById({ _id: categoryId });
    if (category) {
      const newItem = new MenuItem({
        name,
        price,
        description,
        photo,
        ingredients,
        category: { id: categoryId, name: category.categoryType },
        currency,
      });

      const saveItem = await newItem.save();
      console.log(saveItem);

      const newItems = category.items.concat([newItem]);
      const updateCategory = await category.update({
        items: newItems,
      });
      console.log(updateCategory);

      return res.status(200).json({ message: "Item added successfully!" });
    }

    return res.json({ message: "Provide a valid category!" });
  } catch (error) {
    return res.status(500).json({ message: "Unable to add item!" });
  }
};

const editMenuItem = async (req, res) => {
  const itemId = req.params.itemId;
  const { name, price, description, photo, ingredients, currency, category } =
    req.body;

  if (!name || !price) {
    return res.json({ message: "Provide all item details!" });
  }

  try {
    const item = await MenuItem.findById({ _id: itemId });
    if (item) {
      const update = await item.update({
        name,
        price,
        description,
        photo,
        ingredients,
        category,
        currency,
      });
      console.log(update);

      return res.status(200).json({ message: "Item updated successfully" });
    }

    return res.json({ message: "Item not found!" });
  } catch (error) {
    return res.status(500).json({ message: "Unable to update item!" });
  }
};

const removeMenuItem = async (req, res) => {
  const itemId = req.params.itemId;

  try {
    const item = await MenuItem.findById({ _id: itemId });
    if (item) {
      const categoryId = item.category.id;
      if (!categoryId)
        return res.json({
          message: "Item is not associated with any category!",
        });

      const category = await Category.findById({ _id: categoryId });
      if (category) {
        const newCategoryItems = category.items.filter(ob => ob._id.toString() !== item._id.toString());
        console.log(newCategoryItems);
        const updateCategory = await category.update({
          items: newCategoryItems,
        });
        console.log('here',updateCategory);

        // const updateCategory = await category.updateOne({
        //   $pull: { items: { _id: item._id.toString() } },
        // });
        // console.log("here", updateCategory);

        const deleteItem = await item.delete();
        console.log(deleteItem);

        return res.status(200).json({ message: "Item deleted successfully!" });
      }
      return res.json({ message: "Item category does not exist!" });
    }
    return res.json({ message: "Item not found!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Unable to update item!" });
  }
};

// const removeBulkItems = async (req, res) => {
//   const itemArray = req.body;
  
//   try {
//     const deleteItems = await MenuItem.deleteMany({ _id: { $in: itemArray } });
//     return;
//   } catch (error) {
//     return;
//   }
// };

const getAllCategories = async(req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Unable to get all categories!" });
  }
};

const getAllItems = async(req, res) => {
  try {
    const items = await MenuItem.find();
    return res.status(200).json(items);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Unable to get all items!" });
  }
};

const getSingleCategory = async(req, res) => {
  const categoryId = req.params.categoryId;
  try {
    const category = await Category.findById({_id: categoryId}); 
    if(category){
      return res.status(200).json(category);
    }
    return res.json({message: 'Category does not exist!'});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Unable to get category!" });
  }
};

const getSingleItem = async(req, res) => {
  const itemId = req.params.itemId;
  try {
    const item = await MenuItem.findById({_id: itemId}); 
    if(item) {
      return res.status(200).json(item);
    }
    return res.json({message: 'Item does not exist!'});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Unable to get category!" });
  }
};

export const menuController = {
  addCategory,
  editCategory,
  removeCategory,
  addMenuItem,
  removeMenuItem,
  editMenuItem,

  getAllCategories,
  getAllItems,
  getSingleCategory,
  getSingleItem
};
