const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        Name: {
            type: String,
            required: [true, "Please enter the product name"],
        },

        Quantity: {
            type: Number,
            required: true,
            default: 0,
        },

        Price: {
            type: Number,
            required: true,
            default: 0,
        },

        Image: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);


const Product = mongoose.model("Product",ProductSchema);

module.exports=Product;