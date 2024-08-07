import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceFilter = ({ minPrice, maxPrice, onPriceChange }) => {
    const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

    useEffect(() => {
        onPriceChange(priceRange[0], priceRange[1]);
    }, [priceRange, onPriceChange]);

    return (
        <div className="price-filter">
            <Slider
                range
                min={minPrice}
                max={maxPrice}
                value={priceRange}
                onChange={value => setPriceRange(value)}
                allowCross={false}
            />
            <div className="price-values">
                <span>${priceRange[0]}</span> - <span>${priceRange[1]}</span>
            </div>
        </div>
    );
};

export default PriceFilter;
