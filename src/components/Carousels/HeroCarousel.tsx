import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

function HeroCarousel() {
    return (
        <div className="my-4">
            <Swiper
                cssMode={true}
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide className=''>
                    <div className='h-fit py-4 bg-center bg-cover bg-bg-hero flex flex-col md:flex-row items-center justify-center text-white'>
                        <div className="max-w-4xl pt-[52px] pb-20 max-h-full gap-10 mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                            <div className="text-left">
                                <p className="text-2xl md:text-3xl">Adventures Unlocking Here</p>
                                <h2 className="text-4xl md:text-5xl font-bold leading-[50px] md:leading-tight">
                                    Lightweight Foldable Backpack Foldable Ultralight Outdoor Travel Backpack
                                </h2>
                                <button
                                    type="button"
                                    className="py-2.5 px-5 mt-3 text-sm font-medium text-white focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                    Shop Now
                                </button>
                            </div>
                            <div className="mt-6 md:mt-0 md:ml-6">
                                <img
                                    className="rounded-lg w-[300px] md:max-w-md md:max-h-96"
                                    src="https://i.ibb.co/nPRFYZk/bagsss.png"
                                    alt="Description of the image"
                                />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-fit bg-center bg-cover bg-bg-hero flex flex-col md:flex-row items-center justify-center text-white'>
                        <div className="max-w-4xl pb-20 max-h-full gap-10 mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                            <div className="text-left">
                                <p className="text-2xl md:text-3xl">Adventures Unlocking Here</p>
                                <h2 className="text-4xl md:text-5xl font-bold leading-[50px] md:leading-tight">
                                    Naturehike P-Series Upgrade UPF 50+ Tent Waterproof Tents
                                </h2>
                                <button
                                    type="button"
                                    className="py-2.5 px-5 mt-3 text-sm font-medium text-white focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                    Shop Now
                                </button>
                            </div>
                            <div className="mt-6 md:mt-0 md:ml-6">
                                <img
                                    className="rounded-lg w-full md:max-w-md md:max-h-96"
                                    src="https://i.ibb.co/vQJgppB/d2ae8851fe6baaa0194a5be4f4a2016b-jpg-750x750-jpg-removebg-preview.png"
                                    alt="Description of the image"
                                />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Add more SwiperSlides as needed */}
            </Swiper>
        </div>
    );
}

export default HeroCarousel;
