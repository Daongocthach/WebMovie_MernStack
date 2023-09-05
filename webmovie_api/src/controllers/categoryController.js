const CategoryModel = require('../models/categories')

const categoryController = {
    getAllCategory: async (req, res) => {
        try {
            const categories = await CategoryModel.find()
            if (!categories) return res.status(400).json('No data')
            else {
                res.status(200).json(categories)
            }
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getCategoryById: async (req, res) => {
        try {
            const category = await CategoryModel.findById(req.params.id)
            res.status(200).json(category)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    addCategory: async (req, res) => {
        try {
            const newCategory = await new CategoryModel({
                name: req.body.name,
                description: req.body.description
            })
            const Category = await newCategory.save()
            res.status(200).json(Category)

        } catch (err) {
            res.status(500).json(err);
        }
    },

    deleteCategory: async (req, res) => {
        try {
            const category = await CategoryModel.findByIdAndRemove(req.params.id)
            res.status(200).json('Delete success')
        } catch (error) {
            res.status(400).json(error)
        }
    },

    updateCategory: async (req, res) => {
        var id = req.params.id
        const { name, description } = req.body

        try {
            const Category = await CategoryModel.findByIdAndUpdate(id, { name, description }, { new: true })
            if (!Category) { 
                res.status(404).json({ message: 'Category not found' })
            }
            return res.status(200).json('Update success')
        } catch (error) {
            res.status(400).json(error)
        }
    }

}
module.exports = categoryController