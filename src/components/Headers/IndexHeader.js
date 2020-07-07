/*eslint-disable*/
import React from "react";

// reactstrap components
import {Button, Container, FormGroup, Input} from "reactstrap";

// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="orange">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/booksOpen.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/logoThoja.png")}
            ></img>
            <h1 className="h1-seo">Brand Name.</h1>
            <h3>Find what to read next</h3>


              <Button size="lg">
                Explore
              </Button>





          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
