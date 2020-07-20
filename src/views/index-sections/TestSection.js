import React from "react";

import Container from "reactstrap/es/Container";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Book from "./Book";

class TestSection extends React.Component{
    constructor() {
        super();
        this.state= {
             movies : [
                {
                    id: 1,
                    image: require("assets/img/SAMcover.jpg"),
                    imageBg: require("assets/img/SAMcover.jpg"),
                    title: '1983'
                },
                {
                    id: 2,
                    image: require("assets/img/SAMcover.jpg"),
                    imageBg: require("assets/img/SAMcover.jpg"),
                    title: 'Russian doll'
                },
                {
                    id: 3,
                    image: require("assets/img/SAMcover.jpg"),
                    imageBg: require("assets/img/avatar.jpg"),
                    title: 'The rain',
                },
                {
                    id: 4,
                    image: require("assets/img/SAMcover.jpg"),
                    imageBg: require("assets/img/SAMcover.jpg"),
                    title: 'Sex education'
                },
                {
                    id: 5,
                    image: require("assets/img/SAMcover.jpg"),
                    imageBg: require("assets/img/SAMcover.jpg"),
                    title: 'Elite'
                },
                {
                    id: 6,
                    image: require("assets/img/SAMcover.jpg"),
                    imageBg: require("assets/img/SAMcover.jpg"),
                    title: 'Black mirror'
                }
            ]
        }
    }


    render() {
        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
                slidesToSlide: 3 // optional, default to 1.
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
                slidesToSlide: 2 // optional, default to 1.
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1 // optional, default to 1.
            }
        };
        let height ="300"
        return(
            <>
    <Container>
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 6,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                        }
                    }}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >
                    <Book src={require("assets/img/SAMcover.jpg")} key = {"10"}  author={"me"} />
                    <Book src={require("assets/img/profile.jpg")} key = {"10"}  author={"me"} />
                    <Book src={require("assets/img/ryan.jpg")} key = {"10"}  author={"meeeeeeeeeee"} />
                    <Book src={require("assets/img/SAMcover.jpg")} key = {"10"}  author={"me"} />
                    <Book src={require("assets/img/SAMcover.jpg")} key = {"10"}  author={"me"} />
                    <Book src={require("assets/img/SAMcover.jpg")} key = {"10"}  author={"me"} />
                    <Book src={require("assets/img/SAMcover.jpg")} key = {"10"}  author={"me"} />


                </Carousel>;

    </Container>

            </>
        )
    }



}
export default TestSection