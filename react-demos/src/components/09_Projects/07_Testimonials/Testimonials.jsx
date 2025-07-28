import React from 'react'
// Import the CSS for styling this component
import "./Testimonials.css";
// Import the useState and useEffect hooks from React
import { useState, useEffect } from 'react';

// Define the Testimonials component
const Testimonials = () => {
    // useState sets up a piece of state called currentIndex.
    // It keeps track of which testimonial to show (starts at index 0, the first item).
    const [currentIndex, setCurrentIndex] = useState(0);

    // Array of testimonial objects. Each object has a quote and an author.
    const testimonial = [
        {
            quote: "This is the best product I've ever used!",
            author: "Jane Doe",
        },
        {
            quote: "I highly recommend this product to everyone!",
            author: "John Smith",
        },
        {
            quote: "This product has completely changed my life!",
            author: "Bob Johnson",
        },
    ]

    // Handler function to go to the previous testimonial in the array.
    // (currentIndex + testimonial.length - 1) ensures no negative numbers.
    // % testimonial.length wraps around if at the start.
    const handlePrev = () => {
        setCurrentIndex((currentIndex + testimonial.length - 1) % testimonial.length)
    };

    // Handler function to go to the next testimonial.
    // (currentIndex + 1) increments; % testimonial.length wraps to 0 at end.
    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % testimonial.length);
    };

    // The return below is the JSX (UI) that will be displayed on the page.
    return (
        <div className='testimonials'>
            {/* Display the current testimonial's quote */}
            <div className="testimonials-quote">
                {testimonial[currentIndex].quote}
            </div>
            {/* Display the current testimonial's author */}
            <div className="testimonials-author">
                - {testimonial[currentIndex].author}
            </div>
            {/* Navigation buttons to go Prev/Next */}
            <div className="testimonials-nav">
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

// Export the component so it can be used in other files
export default Testimonials
