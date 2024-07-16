import { useGetCategoryQuery } from '@/redux/api/features/category/categoryApi';
import React from 'react';
import CategoryCard from './ui/CategoryCard';
import { TCategory } from '@/types/CategoryTypes';

const CategorySection: React.FC = () => {
    const { data, error, isLoading } = useGetCategoryQuery(undefined);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading categories</div>;
    }

    return (
        <div className="px-4">
            <div className='text-center px-4 md:px-[52px] py-5'>
                <h2 className='text-2xl md:text-3xl font-bold py-5'>Categories</h2>
                <p className='text-sm md:text-base'>
                    Explore the epitome of adventure with our premier collections tailored for outdoor enthusiasts. Unleash your wanderlust with our meticulously curated assortment, ranging from high-performance hiking apparel to cutting-edge skiwear, and from high quality camping equipment to rugged hiking shoes and backpacks.
                    Designed to withstand the elements while providing unparalleled comfort and functionality, our best-selling collections ensure you're ready to conquer any terrain with confidence. Elevate your outdoor experience with gear meticulously crafted for every expedition, promising durability, innovation, and style.
                </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                {data?.data.map((item: TCategory) => (
                    <CategoryCard key={item._id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default CategorySection;
