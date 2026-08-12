const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true
        },

        title: {
            type: String,
            required: true
        },

        author: {
            type: String,
            required: true
        },

        year: {
            type: Number,
            required: true
        },

        genre: {
            type: String,
            required: true
        },

        summary: {
            type: String,
            required: true
        },

        price: {
            type: mongoose.Schema.Types.Decimal128,
            required: true,
            get: value => value ? value.toString() : value
        }
    },
    {
        toJSON: {
            getters: true,
            virtuals: false,
            transform: function (doc, ret) {
                delete ret.__v;
                return ret;
            }
        },

        toObject: {
            getters: true,
            virtuals: false
        }

        
    }
);

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;