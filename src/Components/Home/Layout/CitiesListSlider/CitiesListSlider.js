import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css'; // Import Owl Carousel CSS

const CitiesListSlider = () => {
    const options = {
        items: 5,
        loop: true,
        nav: true,
        autoplay: true,
        center: true,
        margin: 20,
        dots: true,
    };

    return (
        <div className='row'>
            <div className='col-12'>
                <OwlCarousel className="owl-theme choose-city" {...options}>
                    <div className="item text-center">
                        <a href='#'>
                            <img style={{ maxHeight: "101px", objectFit: "contain" }} className='img-fluid mb-3' src='https://www.beeducated.pk/Images/City/lahore.png' />
                            <h4>Lahore</h4>
                            <p className='text-center'>258 Ground</p>
                        </a>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    );
}

export default CitiesListSlider;