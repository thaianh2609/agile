import React, { useEffect, useRef, useState } from 'react';
import Avatar from '../image/avatar.png'
import Feautures1 from '../image/feau1.png'
import Feautures2 from '../image/feau2.png'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
function LoopSlider() {
    const [galleries, setGalaries] = useState([])
    function takeSlide() {
        fetch(`https://test-react.agiletech.vn/galleries`)
            .then(response => response.json())
            .then(json => {
                setGalaries(json);
            })
    }
    useEffect(takeSlide, [])

    console.log(galleries);

    return (
        <div className='loop-slider'>
            <div className='box-slide'>
                <h3>Testimonials</h3>
            </div>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={0}
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={1}
                        aria-label="Slide 2"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={2}
                        aria-label="Slide 3"
                    />
                </div>
                <div className="carousel-inner">
                    <>
                        {
                            galleries.map((value, key) =>
                                <>
                                    {
                                        key == 0 ? <>
                                            <div className="carousel-item active" key={key}>
                                                <div className='list-testi'>
                                                    <div className='avatar'>
                                                        <img src={value.imageUrl} alt="" />
                                                    </div>
                                                    <div className='testi-infor'>
                                                        <h3>John Fang </h3>
                                                        <h5>wordfaang.com</h5>
                                                        <div>
                                                            Suspendisse ultrices at diam lectus nullam.
                                                            Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </> : <>
                                            <div className="carousel-item" key={key}>
                                                <div className='list-testi'>
                                                    <div className='avatar'>
                                                        <img src={value.imageUrl} alt="" />
                                                    </div>
                                                    <div className='testi-infor'>
                                                        <h3>John Fang </h3>
                                                        <h5>wordfaang.com</h5>
                                                        <div>
                                                            Suspendisse ultrices at diam lectus nullam.
                                                            Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    }

                                </>
                            )
                        }
                    </>
                    {/* <div className="carousel-item active">
                        <div className='list-testi'>
                            <div className='avatar'>
                                <img src={Avatar} alt="" />
                            </div>
                            <div className='testi-infor'>
                                <h3>John Fang </h3>
                                <h5>wordfaang.com</h5>
                                <div>
                                    Suspendisse ultrices at diam lectus nullam.
                                    Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div> */}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default LoopSlider;