const mongoose = require("mongoose")

const CartSchema = new mongoose.Schema({
    id_usuario: { type: String , required:true, unique:true},
    productos: [
        {
            id_producto:{ type: String,},
            cantidad: { type: Number, default: 1,},
        },
    ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);