const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    id_product: { type: String , required:true, unique:true},
    nombre: { type: String , required:true},
    stock: { type: String, required:true},
    precio: { type: Number, required:true},
    categoria: { type: String},
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);