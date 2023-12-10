import React, { useEffect, useState } from 'react';
import axios from 'axios'
const AddProductAdminComp = () => {
    const [categories, setCategories] = useState([])
    const [product, setProduct] = useState({
        productName: '',
        description: '',
        fragrance: '',
        ingredients: '',
        price: "",
        priceInput: '',
        discountPrice: '',
        stock: '',
        category: '',
        brand: '',
        weight: '',
        unit: 'ml',
        inputUnit: '',
        tag: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setProduct({ ...product, [name]: files[0] });
        } else {
            setProduct({ ...product, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
if(product.unit === "other")
{
    product.unit = product.inputUnit;
}
if(product.price === "paid")
{
    product.price = product.priceInput;
}
        const formData = new FormData();
        formData.append('file', product.image); // Append the image file
        formData.append('category', product.category);
        formData.append('title', product.productName);
        formData.append('description', product.description);
        formData.append('fragrance', product.fragrance);
        formData.append('ingredients', product.ingredients);
        formData.append('price', product.price);
        formData.append('discountPrice', product.discountPrice);
        formData.append('stock', product.stock);
        formData.append('weight', product.weight);
        formData.append('unit', product.unit );
        formData.append('brand', product.brand);
        formData.append('tag', product.tag);

        axios.post(`${process.env.REACT_APP_API_URL}/uploadImage`, formData)
            .then(res => {
                setProduct({ productName: '',
                description: '',
                ingredients: '',
                fragrance: '',
                price: "",
                priceInput: '',
                discountPrice: '',
                stock: '',
                category: '',
                brand: '',
                weight: '',
                unit: 'ml',
                inputUnit: '',
                tag: '',
                image: null,})
            }
                )
            .catch(err => console.log(err))


    };
 

    useEffect(() => {
        const fetchDate = async () => {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/getAllCategory`)
                .catch((err) => {
                    console.log(err)
                })
            const data = await res.json()
            setCategories(data)
            

        }
        fetchDate();
    }, [])
    return (
        <div className=" mx-auto my-8">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-2xl mb-4 font-bold">Add Product</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                        Product Image*
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="image"
                        type="file"
                        name="image"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName">
                        Product Name*
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="productName"
                        type="text"
                        placeholder="Product Name"
                        name="productName"
                        value={product.productName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description*
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        rows={10}
                        placeholder="Product Description"
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fragrance">
                        Fragrance*
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="fragrance"
                        rows={10}
                        placeholder="Product fragrance"
                        name="fragrance"
                        value={product.fragrance}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
                        Ingredients*
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="ingredients"
                        rows={10}
                        placeholder="Product ingredients"
                        name="ingredients"
                        value={product.ingredients}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                        Categories*
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer"
                        id="category"
                        name="category"
                        value={product.category}
                        onChange={handleChange}
                        required
                    >

                        <option value="">Select Categories</option>
                        {categories.map((item, _)=>{
                            return(
                                <option key={item._id} value={item.name}>{item.name}</option>
                            )
                        })}
                    </select>
                </div>



                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price-option">
                        Price Option*
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer"
                        id="price-option"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Price</option>
                        <option value="free">Free</option>
                        <option value="paid">Paid</option>
                    </select>

                    {product.price === "paid" && (<>
                    
<div className='flex justify-between gap-2'>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                                Price*
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="price"
                                type="number"
                                placeholder="Price"
                                name="priceInput" // Change the name to differentiate from select field
                                value={product.priceInput}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="discountPrice">
                                Discount Price
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="discountPrice"
                                type="number"
                                placeholder="Discount Price"
                                name="discountPrice" // Change the name to differentiate from select field
                                value={product.discountPrice}
                                onChange={handleChange}
                            />
                        </div>
                        </div>
                    </>
                    )}
                </div>
<div className='flex justify-between gap-2'>

<div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weight">
                    Weight*
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="weight"
                        type="text"
                        placeholder="Weight"
                        name="weight"
                        value={product.weight}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="unit">
                        Unit*
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer"
                        id="unit"
                        name="unit"
                        value={product.unit}
                        onChange={handleChange}
                        required
                    >
                        <option value="ml">ml</option>
                        <option value="grams">grams</option>
                        <option value="liter">liter</option>
                        <option value="kg">kg</option>
                        <option value="other">other</option>
                    </select>

                    {product.unit === "other" && (<>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="inputUnit">
                                other unit*
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="inputUnit"
                                type="text"
                                placeholder="eg:- liter"
                                name="inputUnit" // Change the name to differentiate from select field
                                value={product.inputUnit}
                                onChange={handleChange}
                            />
                        </div>
                        
                    </>
                    )}
                </div>
</div>
                
               




      


                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
                        Quantity/Stocks*
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="quantity"
                        type="text"
                        placeholder="Stock"
                        name="stock"
                        value={product.stock}
                        onChange={handleChange}
                        required
                    />
                </div>



                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brand">
                        Brand*
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="brand"
                        type="text"
                        placeholder="Brand Name"
                        name="brand"
                        value={product.brand}
                        onChange={handleChange}
                    />
                </div>


                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tag">
                    Tags/Labels:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="tag"
                        type="text"
                        placeholder="Anti Dandruff, Moisturizing, etc."
                        name="tag"
                        value={product.tag}
                        onChange={handleChange}
                    />
                </div>


                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProductAdminComp
