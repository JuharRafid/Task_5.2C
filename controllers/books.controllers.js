const bookService = require('../services/books.services');


const getAllBooks = async (req, res, next) => {

    try {

        const booklists = await bookService.getAllBooks();

        res.status(200).json({
            statusCode: 200,
            data: booklists,
            message: "Books retrieved successfully"
        });

    } catch (error) {

        next(error);

    }

};


const getBookById = async (req, res, next) => {

    try {

        const id = req.params.id;

        const book = await bookService.getBookById(id);

        if (!book) {

            return res.status(404).json({
                statusCode: 404,
                data: null,
                message: "Book not found"
            });

        }

        res.status(200).json({
            statusCode: 200,
            data: book,
            message: "Book retrieved successfully"
        });

    } catch (error) {

        next(error);

    }

};


module.exports = {
    getAllBooks,
    getBookById
};