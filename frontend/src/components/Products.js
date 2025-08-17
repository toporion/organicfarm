import React, { useRef } from 'react';
import productImg1 from '../assets/product-1.png';
import productImg2 from '../assets/product-2.png';
import productImg3 from '../assets/product-1.png';
import productImg4 from '../assets/product-2.png';
import corner1 from '../assets/bg-product-12.png';
import corner2 from '../assets/bg-product-2.png';

const Products = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    const products = [
        { id: 1, name: 'Fresh Carrots', price: '$5.99', img: productImg1 },
        { id: 2, name: 'Organic Tomatoes', price: '$3.99', img: productImg2 },
        { id: 3, name: 'Green Lettuce', price: '$2.99', img: productImg3 },
        { id: 4, name: 'Fresh Apples', price: '$4.99', img: productImg4 },
    ];

    return (
        <div className="relative py-16">
            {/* Corner Images */}
            <img src={corner1} alt="Corner 1" className="absolute top-0 left-0 w-32 h-32 object-contain" />
            <img src={corner2} alt="Corner 2" className="absolute bottom-0 right-0 w-32 h-32 object-contain" />

            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-green-700 text-center mb-12">Our Fresh & Organic Products</h2>

                {/* Scroll Buttons */}
                <div className="flex justify-between items-center mb-4">
                    <button
                        onClick={() => scroll('left')}
                        className="bg-white text-green-700 px-4 py-2 rounded-full shadow hover:bg-green-100 transition"
                    >
                        &#8592;
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="bg-white text-green-700 px-4 py-2 rounded-full shadow hover:bg-green-100 transition"
                    >
                        &#8594;
                    </button>
                </div>

                {/* Product Cards */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide py-4"
                >
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="min-w-[250px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105"
                        >
                            <img src={product.img} alt={product.name} className="w-40 h-40 object-contain mb-4" />
                            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                            <p className="text-green-700 font-bold mb-4">{product.price}</p>
                            <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-4 py-2 rounded-lg">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
