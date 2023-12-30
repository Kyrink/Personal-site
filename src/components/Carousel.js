import React, { useState, useEffect, useRef } from 'react';

const carouselItems = [
    { imgSrc: "/image/img1.jpg", author: "Kyrin Kalonji", title: "MUSE ", topic: "FUCK PLEASE WORK!!!!!", description: "Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu" },
    { imgSrc: "/image/img2.jpg", author: "Kyrin Kalonji", title: "reno", topic: "I HATE MY LIFE", description: "I dont wanna go to work today but someone has to pay the bills" },
    { imgSrc: "image/img3.jpg", author: "Kyrin Kalonji", title: "D-BATE", topic: "FUCK THIS SHIT", description: "This project will be the death of me fr" },
    { imgSrc: "/image/img4.jpg", author: "Kyrin Kalonji", title: "HUSKY BITES", topic: "I QUIT", description: "i love to eat chicked and rice when im hungry" },
];

function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState('');

    const getOrderedCarouselItems = () => {
        // Move the active item to the start of the array
        const before = carouselItems.slice(0, activeIndex);
        const after = carouselItems.slice(activeIndex + 1);
        return [carouselItems[activeIndex], ...before, ...after];
    };

    // Use this function to render items in the correct order
    const orderedCarouselItems = getOrderedCarouselItems();


    const getOrderedThumbnailItems = () => {
        let nextIndex = (activeIndex + 1) % carouselItems.length; // Get the next index, wrapping around if at the end
        let before = carouselItems.slice(0, nextIndex); // Items before the next one
        let after = carouselItems.slice(nextIndex + 1); // Items after the next one

        return [carouselItems[nextIndex], ...after, ...before]; // Reorder: next item first, then items after, then items before
    };
    const orderedThumbnailItems = getOrderedThumbnailItems();

    const goToNext = () => {
        setDirection('next');
        setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    };

    const goToPrev = () => {
        setDirection('prev');
        setActiveIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDirection('');
        }, 500); // should match the longest animation duration

        // Automatic navigation: Move to the next item every 7 seconds
        // const autoMove = setTimeout(goToNext, 7000);

        // return () => {
        //     clearTimeout(timeout);
        //     clearTimeout(autoMove); // Cleanup the timeout
        // };
    }, [activeIndex, direction]);

    return (
        <div className={`carousel ${direction}`}>
            <div className="list">
                {orderedCarouselItems.map((item, index) => (
                    <div key={item.imgSrc} className={`item ${index === 0 ? 'active' : ''}`}>
                        <img src={item.imgSrc} alt={`Slide ${index}`} />
                        <div className="content">
                            <div className="author">{item.author}</div>
                            <div className="title">{item.title}</div>
                            <div className="topic">{item.topic}</div>
                            <div className="des">{item.description}</div>
                            <div className="buttons">
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="thumbnail">
                {orderedThumbnailItems.map((item, index) => (
                    <div key={item.imgSrc} className={`item ${index === 0 ? 'active' : ''}`} onClick={() => setActiveIndex((activeIndex + index) % carouselItems.length)}>
                        <img src={item.imgSrc} alt={`Thumbnail ${index + 1}`} />
                        <div className="content">
                            <div className="title">{item.title}</div>
                            <div className="description">{item.description}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="arrows">
                <button onClick={goToPrev}>{"<"}</button>
                <button onClick={goToNext}>{">"}</button>
            </div>
            <div className="time" style={{ width: `${(activeIndex + 1) * (100 / carouselItems.length)}%` }}></div>
        </div>
    );
}

export default Carousel;