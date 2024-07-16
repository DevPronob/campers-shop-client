import React from 'react';
import ProductCard from './ui/ProductCard';
import { useGetProductsWithoutFilterQuery } from '@/redux/api/features/products/productApi';
import { TProduct } from '@/types/productTypes';

const FeaturedProductSection: React.FC = () => {
  const { data, error, isLoading } = useGetProductsWithoutFilterQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products</div>;
  }

  return (
    <div className="px-4">
      <h3 className='text-2xl md:text-3xl font-bold text-center py-5'>Featured Products</h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {
          data?.data.filter((product: TProduct) => product.isFeatured).map((product: TProduct) => (
            <ProductCard key={product._id} product={product} />
          ))
        }
      </div>
      <div className='my-5 flex items-center justify-center'>
        {/* <button type="button"
                    className="py-2 w-[185px] px-4 bg-[#21b3f1] border border-[#21b3f1] text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-[#21b3f1] focus:ring-offset-2 focus:ring-offset-indigo-200 hover:bg-[#21b3f1] hover:text-white rounded-lg">
                    More Products
                </button> */}
      </div>
    </div>
  );
}

export default FeaturedProductSection;
