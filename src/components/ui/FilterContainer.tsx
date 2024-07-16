import React, { useState } from 'react';
import { useGetProductsQuery, useGetProductsWithoutFilterQuery } from '@/redux/api/features/products/productApi';
import PriceFilter from './PriceFilter';
import { TProduct } from '@/types/productTypes';
import { useDispatch } from 'react-redux';
import { getCategoryData, getPriceData } from '@/redux/api/features/filterData/filterDataSlice';
import SearchAndSortingContainer from './SearchAndSortingContainer';


const FilterContainer = ({ search, setSort, sort, setSearch, priceRange, setPriceRange, category, setCategory }) => {


    console.log(priceRange, category, search, sort)

    // const query = {
    //     searchTerm: search,
    //     sort: sort,
    //     price:
    // };
    // Fetch products from API
    const { data: products, error, isLoading } = useGetProductsWithoutFilterQuery(undefined);

    console.log(products, "products")

    // Extract unique categories from products data
    const uniqueCategories = [...new Set(products?.data.map((item: TProduct) => item.category))];


    // Handle price range change
    const handlePriceChange = (range: number[]) => {
        setPriceRange(range);
    };


    return (
        <div className="mt-20">
            <div>
                <SearchAndSortingContainer
                    search={search}
                    setSort={setSort}
                    sort={sort}
                    setSearch={setSearch}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    category={category}
                    setCategory={setCategory}
                />
            </div>
            <div className="px-[40px] py-4">
                <h3 className="text-xl font-semibold p-2">PRODUCT CATEGORIES</h3>
                <hr />
                <div>
                    {uniqueCategories.map((category, index) => (
                        <p
                            key={index}
                            className="text-base hover:text-[#21b3f1] cursor-pointer font-light p-5"
                            onClick={() => setCategory(category)}
                        >
                            {category}
                        </p>
                    ))}
                </div>
            </div>
            <div className="px-[40px] py-4">
                <h3 className="text-xl font-semibold p-2">FILTER BY PRICE</h3>
                <hr />
                <div className="py-1 pt-12">
                    <PriceFilter
                        minPrice={0}
                        maxPrice={1000}
                        onPriceChange={handlePriceChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default FilterContainer;
