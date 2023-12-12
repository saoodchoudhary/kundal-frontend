import React, { useEffect, useState } from 'react';
import Loading from '../Loading';
import { useNavigate, useParams } from 'react-router-dom';

const AdminUpdateProductComp = () => {
   const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
     const {id} = useParams()
    const [product, setProduct] = useState({
        title: '',
        description: '',
        fragrance: '',
        ingredients: '',
        stock: '',
    });

    const handleChange = (e) => {
        const { name, value,  } = e.target;
       
        setProduct({ ...product, [name]: value });
       
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)

        const formData = {
            id:id,
            title:product.title,
            description:product.description,
            fragrance:product.fragrance,
            ingredients:product.ingredients,
            stock:product.stock,
        }
     
 console.log(formData)
 try {
    setIsLoading(true);
    const response = await fetch(`${process.env.REACT_APP_API_URL}/update/product`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error('Failed to update product');
    }

    setIsLoading(false);
    navigate('/admin/product');
  } catch (error) {
    setIsLoading(false);
    console.error(error);
    // Handle the error as needed, show a message to the user, etc.
  }

    };
 

    useEffect(() => {

        
        const fetchProduct = async () => {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/product/${id}`)
                .catch((err) => {
                    console.log(err)
                })
            const data = await res.json()
            console.log(data)
            setIsLoading(false)
            setProduct(data)

        }
        fetchProduct();
    }, [isLoading, id])


    if(isLoading){
        return<Loading/>
      }
    return (
        <div className=" mx-auto my-8">
            <form onSubmit={handleSubmit} method='Post' className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-2xl mb-4 font-bold">Update Product</h2>


                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Product Name*
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        type="text"
                        placeholder="Product Name"
                        name="title"
                        value={product.title}
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


                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Update Product
                    </button>
                </div>
            </form>
        </div>
    );
};


export default AdminUpdateProductComp
