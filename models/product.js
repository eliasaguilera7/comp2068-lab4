const mongoose = require('mongoose');

// You need to create a new schema and assign it the following
// constant
//const ProductSchema;

const ProductSchema = new mongoose.Schema(
    {
        name:{
           type: String,
           require: true //T his must exist
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },


        status: {
            type: String,
            enum: ['DRAFT','PUBLISHED'],
            default: 'DRAFT'
        }
    },{  timestamps: true,
    });


    // Query Helpers
    ProductSchema.query.drafts = function () {
        return this.where({
            status:'DRAFT'
        })
    };

    ProductSchema.query.published = function () {
        return this.where({
            status:'PUBLISHED'
        })
    };




module.exports = mongoose.model('Product', ProductSchema);