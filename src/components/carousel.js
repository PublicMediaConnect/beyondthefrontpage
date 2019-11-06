import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from
    "mdbreact";
import image4 from "../images/bfp_slide_steps.jpg"
import image2 from "../images/bfp_slide_students.jpg"
import image3 from "../images/bfp_slide_collaboration.jpg"
import image5 from "../images/bfp_slide_film.jpg"
import image6 from "../images/bfp_slide_group.jpg"

const CarouselPage = () => {
    return (
        <MDBCarousel activeItem={1} length={5} className="z-depth-1 w-100">
            <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                    <MDBView>
                        <img className="d-block w-100" src={image4} alt="First slide" />
                        <MDBMask overlay="stylish-light" />
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                    <MDBView>
                        <img className="d-block w-100" src={image2} alt="Second slide" />
                        <MDBMask overlay="stylish-light" />
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                    <MDBView>
                        <img className="d-block w-100" src={image3} alt="Beyond the Front Page Slide 3" />
                        <MDBMask overlay="stylish-light" />
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="4">
                    <MDBView>
                        <img className="d-block w-100" src={image5} alt="Beyond the Front Page Slide 4" />
                        <MDBMask overlay="stylish-light" />
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="5">
                    <MDBView>
                        <img className="d-block w-100" src={image6} alt="Beyond the Front Page Slide 6" />
                        <MDBMask overlay="stylish-light" />
                    </MDBView>
                </MDBCarouselItem>
            </MDBCarouselInner>
        </MDBCarousel>
    );
}

export default CarouselPage;
