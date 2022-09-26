const About = () => {
    return (<div>
        <section className="header">
          <h4 className="about_us">About Us</h4>
        </section>
        <section>
          <div className="Acontainer">
            <div className="item1">
              <div className="row">
                <div className="col-1">
                  <div className="rating">
                    <i className="fa fa-graduation-cap fa-2x" />
                  </div>
                </div>
                <div className="col-2">
                  <div>
                    <h4>Campus Life</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequatur ducimus beatae. Ipsum, expedita quia.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item2">
              <div className="row">
                <div className="col-1">
                  <div className="rating">
                    <i className="fa fa-address-card fa-2x" />
                  </div>
                </div>
                <div className="col-2">
                  <div>
                    <h4>Admission</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequatur ducimus beatae. Ipsum, expedita quia.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item3">
              <div className="row">
                <div className="col-1">
                  <div className="rating">
                    <i className="fa fa-calendar fa-2x" />
                  </div>
                </div>
                <div className="col-2">
                  <div>
                    <h4>News and Events</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequatur ducimus beatae. Ipsum, expedita quia.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br /><br /><br />
        <section className="sec2">
          <div className="container2">
            <div className="item-3">
              <div className="row">
                <div className="col21">
                  <h2 className="p1">OUR HISTORY</h2><br />
                  <p className="p1">Department of Information and Communication Technology (ICT) commenced in 2015. The department offers Bachelor of Information &amp; Communication Technology (ICT) program which is designed to produce graduates with solid foundation in information technology skills and knowledge with a wide range of application. It focuses on the systems development aspects of employment in the information technology profession.Department of Information and Communication Technology (ICT) commenced in 2015. The department offers Bachelor of Information &amp; Communication Technology (ICT) program which is designed to produce graduates with solid foundation in information technology skills and knowledge with a wide range of application. </p><br />
                  <div className="p1">
                    <button type="button" className="learn_more">Learn More</button></div>
                </div>
                <div className="col22">
                  <img src="/img/image/pic.jpg" alt="pix" className="image" />
                </div>
              </div>
            </div>
            <div className="item-4">
              <div className="row">
                <div className="col21">
                  <img src="/img/image/pic1.jpg" alt="pix" className="image" />
                </div>
                <div className="col22">
                  <h2 className="p2">Vision and Goals</h2><br />
                  <p className="p2">To gain extensive experience in developing information and communication technology to address the needs of modern organizations.</p><br />
                  <div className="p2">
                    <button type="button" className="learn_more">Learn More</button></div>
                </div>
              </div>
            </div>
          </div></section>
        <br /><br />
        <div className="section-title">
          <h2>Gallery</h2>
        </div>
        <section className="bd">
          <div className="slide-container">
            <span className="slider-span" id="slider-span1" />
            <span className="slider-span" id="slider-span2" />
            <span className="slider-span" id="slider-span3" />
            <span className="slider-span" id="slider-span4" />
            <div className="image-slider">
              <div className="slides-div" id="slide-1">
                <img src="/img/image/1.jpg" alt="" className="imgsl" id="img1" />
                <a href="#slider-span1" className="buttonsl" id="button-1" />
              </div>
              <div className="slides-div" id="slide-2">
                <img src="/img/image/2.jpg" alt="" className="imgsl" id="img2" />
                <a href="#slider-span2" className="buttonsl" id="button-2" />
              </div>
              <div className="slides-div" id="slide-3">
                <img src="/img/image/3.jpg" alt="" className="imgsl" id="img3" />
                <a href="#slider-span3" className="buttonsl" id="button-3" />
              </div>
              <div className="slides-div" id="slide-4">
                <img src="/img/image/4.jpg" alt="" className="imgsl" id="img4" />
                <a href="#slider-span4" className="buttonsl" id="button-4" />
              </div>
            </div>
          </div>
        </section>
      </div>)
}

export default About