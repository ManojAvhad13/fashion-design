import React from "react";

const Portfolio = () => {
    const portfolioItems = [
        { title: "Custom Wedding Dress", image: "/images/portfolio1.jpg", description: "Elegant and timeless design for a wedding." },
        { title: "Modern Suit", image: "/images/portfolio2.jpg", description: "A sleek suit for a corporate client." },
        { title: "Evening Gown", image: "/images/portfolio3.jpg", description: "A stunning evening gown for a special occasion." },
        // Add more portfolio items as needed
    ];

    return (
        <section className="portfolio py-16 bg-gray-50">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-8">Our Portfolio</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => (
                        <div key={index} className="portfolio-item bg-white shadow-md rounded-lg overflow-hidden">
                            <img src={item.image} alt={item.title} className="w-full h-64 object-cover mb-4" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
