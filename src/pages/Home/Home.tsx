import HeroCarousel from '@/components/Carousels/HeroCarousel'
import Navbar from '@/components/Navbar/Navbar'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useGetProductsQuery } from '@/redux/api/features/products/productApi'
import BestSellingProductsSection from '@/components/BestSellingProductsSection'
import CategorySection from '@/components/CategorySection'
import FeaturedProductSection from '@/components/FeaturedProductSection'
import TestomonialSection from '@/components/TestomonialSection/TestomonialSection'
import FaqSection from '@/components/FaqSection'

function Home() {
    const { data, error, isLoading } = useGetProductsQuery(undefined)
    console.log(data)
    return (
        <div>

            <HeroCarousel />
            <BestSellingProductsSection />
            <CategorySection />
            <FeaturedProductSection />
            <TestomonialSection />
            <FaqSection />
        </div>
    )
}

export default Home