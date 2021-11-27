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
                            <h2>ЗСУ провели стрільби з гармат "Рапіра"</h2>
                            <p>Це тренування стало елементом СКШН "Об’єднані зусилля – 2021"</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block mx-auto w-50"
                            src="images/2.jpg"
                            alt="First slide"
                        />

                        <Carousel.Caption>
                            <h2>С-300 ЗСУ задіяли у масштабних тренуваннях</h2>
                            <p>Керівництво відбивали авіаналіт та знищення крилатих ракет (відео)</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block mx-auto w-50"
                            src="images/3.jpg"
                            alt="First slide"
                        />

                        <Carousel.Caption>
                            <h2>"Гетьман Сагайдачний" не в строю</h2>
                            <p>11 листопада в Одесі пройшла репетиція параду ВМС </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Slider;