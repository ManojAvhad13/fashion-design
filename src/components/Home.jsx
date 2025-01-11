import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home bg-gray-50 text-gray-800">
            {/* Hero Section */}
            {/* <section className="hero bg-cover bg-center h-screen flex items-center justify-center text-white"
                style={{ backgroundImage: "url('src/assets/fashin1.jpg')" }}>
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Custom Tailoring Redefined</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Experience the art of bespoke fashion with our tailored services.
                    </p>
                    <Link to="/gallery" className="btn-primary">
                        Explore Our Designs
                    </Link>
                </div>
            </section> */}

            <section
                className="hero bg-cover bg-center h-80 flex items-center justify-center text-white relative px-4"
                style={{
                    backgroundImage: "url('src/assets/fashin1.jpg')",  // Background image path
                }}
            >
                {/* Blurred overlay */}
                <div className="absolute inset-0 bg-black opacity-30"></div>

                {/* Text Content */}
                <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 animate__animated animate__fadeIn">Shambhu Fashion Design <br /> Aari Work Classes</h1>
                    <p className="text-lg md:text-xl mb-6 animate__animated animate__fadeIn animate__delay-1s">
                        Shambhu Fashion Design offers expert Aari Work classes to enhance your embroidery skills with intricate, traditional designs.
                    </p>
                    <Link
                        to="/gallery"
                        className="btn-primary py-3 px-6 bg-blue-600 hover:bg-blue-700 rounded-full transition duration-300 transform hover:scale-105"
                    >
                        Explore Our Designs
                    </Link>
                </div>
            </section>



            {/* Services Section */}
            <section className="services py-16 px-4">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="service-item p-6 bg-white shadow-md rounded">
                            <h3 className="text-xl font-semibold mb-4">Fancy Blouse Design</h3>
                            <p>We create bespoke designs that fit you perfectly and reflect your personal style.</p>
                        </div>
                        <div className="service-item p-6 bg-white shadow-md rounded">
                            <h3 className="text-xl font-semibold mb-4">Bridal Blouse Design</h3>
                            <p>Join our exclusive fashion classes to learn the art of tailoring and design.</p>
                        </div>
                        <div className="service-item p-6 bg-white shadow-md rounded">
                            <h3 className="text-xl font-semibold mb-4">Aari Work Classes</h3>
                            <p>Explore our portfolio to see the masterpieces we've created for our clients.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="cta bg-gray-800 text-white py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Book Your Custom Tailoring Today</h2>
                    <p className="mb-6">Let us craft a design that’s uniquely yours.</p>
                    <Link to="/booking" className="btn-secondary">
                        Book Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
