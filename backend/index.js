const mongoose = require('mongoose');

const uri = 'mongodb+srv://dubeyanubhav12345:anubhav123@cluster0.j16vqjj.mongodb.net/?retryWrites=true&w=majority/headfonedb';
mongoose.connect(uri);

const productSchema = new mongoose.Schema({
    product_id: String,
    name: String,
    description: String,
    price: Number,
    category: String,
    brand: String,
    image_url: String,
    stock_quantity: Number,
    created_at: String,
    product_link: String
});

const Products = new mongoose.model("Product", productSchema);

const main = async () => {
    try {
        const data = await Products.find({ price: { $gt: 100 } });
        console.log("Retrieved data:", data);
    } catch (error) {
        console.error("Error:", error);
    } finally {
        mongoose.connection.close();
        console.log("Connection closed");
    }
}

main();
