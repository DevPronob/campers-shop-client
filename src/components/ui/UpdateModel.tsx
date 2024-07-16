import React, { useState, useEffect } from 'react';
import { useGetSingleProductsQuery, useUpdateProductsMutation } from '@/redux/api/features/products/productApi';
import axios from 'axios';

function UpdateModel({ productId }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState();
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState();
    const [rating, setRatings] = useState();
    const [description, setDescription] = useState('');
    const { data: product, error, isLoading } = useGetSingleProductsQuery(productId);
    const [updateProducts] = useUpdateProductsMutation();
    console.log(productId, "producttt")

    const [selectedImages, setSelectedImages] = useState([]);
    console.log(productId, "productIIIIII")

    useEffect(() => {
        if (product) {
            setName(product?.data?.name);
            setPrice(product?.data?.price);
            setCategory(product?.data?.category);
            setStock(product?.data?.stock);
            setRatings(product?.data?.ratings);
            setDescription(product?.data?.description);
        }
    }, [product]);

    const handleImageChange = (event) => {
        const files = event.target.files;
        const imageArray = Array.from(files);
        setSelectedImages(imageArray);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Upload images
            const imageUrls = await Promise.all(
                selectedImages.map(async (image) => {
                    const formData = new FormData();
                    formData.append('image', image);
                    const response = await axios.post('https://api.imgbb.com/1/upload?key=3865938eefff3a14cd02acc91c1d32e1', formData);
                    return response.data.data.url;
                })
            );

            // Prepare updated product data
            const updatedProduct = {
                name,
                price,
                category,
                stock,
                rating,
                description,
            };
            if (imageUrls.length > 0) {
                updatedProduct.imageUrls = imageUrls;
            }
            // Update product
            const response = await updateProducts({
                id: productId,
                ...updatedProduct,
            });

            console.log('Product updated:', response);
            document.getElementById('my_modal_4').close();
        } catch (error) {
            console.error("There was an error updating the product:", error);
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            {/* <button className="btn bg-[#21b3f1] text-white" onClick={() => document.getElementById('my_modal_4').showModal()}>Update Product</button> */}
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box">
                    <h2 className="text-center text-xl font-semibold py-2">Update Product</h2>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 mt-10">
                        <div>
                            <label className='text-[14px] font-semibold my-3'>Name</label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Product Name"
                                className="input w-full input-bordered my-3"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label className='text-[14px] font-semibold my-3'>Price</label>
                            <input
                                name="price"
                                type="text"
                                placeholder="Product Price"
                                className="input w-full input-bordered my-3"
                                value={price}
                                onChange={(e) => setPrice(Number(e.target.value))}
                                required
                            />
                        </div>
                        <div>
                            <label className='text-[14px] font-semibold my-3'>Category</label>
                            <input
                                name="category"
                                type="text"
                                placeholder="Product Category"
                                className="input w-full input-bordered my-3"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label className='text-[14px] font-semibold my-3'>Stock</label>
                            <input
                                name="stock"
                                type="text"
                                placeholder="Product Stock"
                                className="input w-full input-bordered my-3"
                                value={stock}
                                onChange={(e) => setStock(Number(e.target.value))}
                                required
                            />
                        </div>
                        <div>
                            <label className='text-[14px] font-semibold my-3'>Description</label>
                            <input
                                name="description"
                                type="text"
                                placeholder="Product Description"
                                className="input w-full input-bordered my-3"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />

                        </div>

                        <div className="flex items-center justify-center w-full">

                            <input
                                type="file"
                                id="images"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                name="images"
                                accept="image/*"
                                multiple
                                onChange={handleImageChange}
                            />
                        </div>

                        <br />
                        <input className="btn bg-[#21b3f1] text-white w-full" type="submit" value="Submit" />
                        <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_4').close()}>✕</button>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default UpdateModel;
