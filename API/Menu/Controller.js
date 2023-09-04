const { connect } = require('mongoose')
require('dotenv').config()
const Menu = require('./Model')

const getMenu = async (req, res) => {

    try {
        await connect(process.env.MONGO_URI)
        const menu = await Menu.find()
        res.json({ menu })
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const postMenu = async (req, res) => {
    const { itemName, thumbnail, price, category } = req.body

    if (!itemName || !thumbnail || !price || !category) {
        res.status(400).json({ message: 'Invalid Payload' })
    }

    else {
        try {
            await connect(process.env.MONGO_URI)
            const checkExisting = await Menu.exists({ itemName })
            if (checkExisting) {
                res.status(403).json({ message: "Item Already Exists" })
            }
            else {
                await Menu.create({ itemName, thumbnail, price, category })
                const menu = await Menu.find()
                res.status(201).json({
                    message: "Item Created Successfully",
                    menu
                })
            }

        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

}

const MenubyCategory = async (req, res) => {
    const { category } = req.params
    if (!category) {
        res.status(403).json({ message: "Please Give Category Name" })
    }
    else {
        await connect(process.env.MONGO_URI)
        const menu = await Menu.find({ category })
        res.json({ menu })
    }
}

const MenubyId = async (req, res) => {
    const { _id } = req.params
    if (!_id) {
        res.status(403).json({ message: "Please Give Product id" })
    }
    else {
        await connect(process.env.MONGO_URI)
        const menu = await Menu.findOne({ _id })
        res.json({ menu })
    }
}

module.exports = { getMenu, postMenu, MenubyCategory, MenubyId }