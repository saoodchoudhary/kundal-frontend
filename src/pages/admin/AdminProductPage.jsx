// YourComponent.js
import React, { useEffect, useState } from 'react';

const AdminProductPage = () => {
  const [product, setProduct] = useState([]);
  const [productId, setProductId] = useState([]); //product id 
  const [showAlertBox, setShowAlertBox] = useState(false); // alert box show and hide
  const [item, setItem] = useState({}); // alert box show and hide


  // Fetch product data
  useEffect(() => {
    // Fetch products from an API endpoint
    fetch(`${process.env.REACT_APP_API_URL}/product`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleDeleteClick = (val) => {
    setProductId(val._id)
    setItem(val)
    setShowAlertBox(true)
  };

  const handleConfirmDelete = () => {
    // Perform delete operation using productId or perform the delete action directly
    // Example fetch DELETE request to delete product

    fetch(`${process.env.REACT_APP_API_URL}/product/delete/${productId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          setProduct(product.filter(product => product._id !== productId));
          setShowAlertBox(false)
        } else {
          throw new Error('Failed to delete');
        }
      })
      .catch(error => console.error('Error deleting product:', error));

  };

  const handleCancelDelete = () => {
    // Additional logic if needed upon cancellation
    setShowAlertBox(false)
  };

  return (
    <div>
      {/* Your product display code */}
      <div className=" p-4">
        <h2 className="text-2xl font-semibold mb-4">Product Management</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {product.map(product => (
            <div key={product._id} className=" bg-white rounded-lg shadow-md p-4">
              <div className='flex justify-between'>
              <div>
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                <p>Product id: {product.productId}</p>
                <p>Price: {product.price}</p>
                <p>Stock: {product.stock}</p>
              </div>
              <div>
                <img
                  src={`${process.env.REACT_APP_API_URL}/Images/${product.image}`}
                  className='h-[100px] w-[100px]'
                  alt='' />
              </div>
        </div>
              <div className="mt-4 flex justify-between items-center">
                <button
                  onClick={() => handleDeleteClick(product)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
                >
                  Update
                </button>
                
                <button
                  onClick={() => handleDeleteClick(product)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
                >
                  Delete
                </button>
                {/* Add Edit button or other actions */}
              </div>
            </div>
          ))}


        </div>
      </div>

      {/* Delete confirmation modal */}
      {showAlertBox && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">

          <div className="bg-white rounded-lg p-8">
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p>Are you sure you want to delete this product?</p>
            <div className="flex justify-end mt-4 gap-2">
              <button onClick={handleCancelDelete} className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md">
                Cancel
              </button>
              <button onClick={handleConfirmDelete} className="bg-red-500 hover:bg-red-600 px-4 py-2 text-white rounded-md">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProductPage;
