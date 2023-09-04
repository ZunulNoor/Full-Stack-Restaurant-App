const { Schema, model } = require('mongoose')

const MenuSchema = new Schema(
    {
        itemName: {
            type: String,
            required: true,
            unique: true
        },
        thumbnail: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        created: {
            type: Date,
            default: Date.now
        }
    }
)

const Menu = model('menu', MenuSchema)
module.exports = Menu