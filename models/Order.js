const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
    id_usuario: { type: String , required:true, unique:true},
    productos: [
        {
            id_producto:{ type: String,},
            cantidad: { type: Number, default: 1,},
        },
    ],
    amount: { type: Number, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);