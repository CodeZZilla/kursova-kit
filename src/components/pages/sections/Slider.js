import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Carousel, Image} from 'react-bootstrap';


class Slider extends React.Component {
    render() {
        return(
            <div className="slider">
                <Carousel variant="dark">
                    <Carousel.Item>
                        <Image
                            className="d-block mx-auto w-50"
                            src="images/1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2>Кращі бугалтери: хто вони? PART – 1 </h2>
                            <p>7 листопада відзначається День бугалтера ЗСУ...</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block mx-auto w-50"
                            src="images/2.jpg"
                            alt="First slide"
                        />

                        <Carousel.Caption>
                            <h2>День бугалтера</h2>
                            <p>Керівництво факультетів привітали бугалтерів з їхнім професійним святом.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block mx-auto w-50"
                            src="images/3.jpg"
                            alt="First slide"
                        />

                        <Carousel.Caption>
                            <h2>Гості до бугалторів </h2>
                            <p>11 листопада на факультеті №2 ВІТІ відбулася зустріч з полковником Потєхіним</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Slider;