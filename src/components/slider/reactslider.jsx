import React, { Component } from "react";
import "./slider.css";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const sliderClick = (slider) => {
    window.location.href = '/product-detail/11';
}
const slides = [
    {
        image: 'https://i.pinimg.com/originals/7d/5b/eb/7d5beb56cc5d9f74498394bf23827cc9.jpg',
        title: 'Cat Litter Box',
        price: '345.000',
        clickEvent: sliderClick
    },
    {
        image: 'https://i.pinimg.com/originals/02/a0/35/02a035df6b5eb304a8274006363c7fdb.jpg',
        title: 'Munchkin Cat',
        price: '20.000.000', clickEvent: sliderClick
    },
    {
        image: 'https://zoipet.com/wp-content/uploads/2020/03/meo-scottish.jpg',
        title: 'Scottish Fold',
        price: '50.000.000', clickEvent: sliderClick
    },
    {
        image: 'https://thichthucung.com/wp-content/uploads/meo-birman.jpg',
        title: 'Birman Cat',
        price: '15.000.000', clickEvent: sliderClick
    },
    {
        image: 'https://gougoupet.vn/wp-content/uploads/2021/04/167538130_1874864436016201_3956351996785601296_n.jpg',
        title: 'Pate MeowCat',
        price: '15.000', clickEvent: sliderClick
    },
    {
        image: 'https://kpethouse.com/wp-content/uploads/2021/03/v%C3%B5ng-gi%C6%B0%E1%BB%9Dng-ch%C3%B3-m%C3%A8o.jpg',
        title: 'Hammock Bed',
        price: '70.000 - 120.000', clickEvent: sliderClick
    },
    {
        image: 'https://th.bing.com/th/id/OIP.3kZLnge_5i0DYVryC5P72AHaHa?w=1200&h=1200&rs=1&pid=ImgDetMain',
        title: 'Scratching Board',
        price: '150.000', clickEvent: sliderClick
    },
    {
        image: 'https://i.pinimg.com/originals/33/17/4a/33174ab7aaad304bd8fca69c54485fd1.png',
        title: 'Cat Hat',
        price: '70.000', clickEvent: sliderClick
    },
];

class reactslider extends Component {
    // const [sliderPosition, setSliderPosition] = useState(0);
    constructor() {
        super();
        this.scroll = this.scroll.bind(this);
    }

    scroll(direction) {
        let far = document.querySelector('#slider').clientWidth / 2 * direction;
        let pos = document.querySelector('#slider').scrollLeft + far;

        document.querySelector('#slider').scroll({
            left: pos,
            behavior: 'smooth'
        });
    }

    // const slideLeft = () => {
    //     var slider = document.getElementById("slider");
    //     slider.scrollLeft = slider.scrollLeft + 500;
    // }


    // const slideRight = () => {
    //     var slider = document.getElementById("slider");
    //     slider.scrollLeft = slider.scrollLeft - 500;
    // }
    render() {
        return (
            <div className="slider-container">
                {/* <h1 className="name">BEST SELLERS</h1> */}
                <div id="main-slider-container">
                    <MdChevronLeft size={40} className="slider-icon left" onClick={() => this.scroll(-1)} />
                    <div id="slider">
                        {
                            slides.map((slide, index) => {
                                return (
                                    <div className="slider-card" key={index} onClick={() => sliderClick(`/product-detail/11`)} >
                                        <div className="slider-card-img" style={{ backgroundImage: `url(${slide.image})`, backgroundSize: "cover" }} ></div>
                                        <p className="slider-card-title">{slide.title}</p>
                                        <p className="slider-card-price">{slide.price}</p>
                                    </div>

                                )

                            })
                        }

                    </div>
                    <MdChevronRight size={40} className="slider-icon right" onClick={() => this.scroll(1)} />
                </div>
            </div>
        )
    }
}

export default reactslider;