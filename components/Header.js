import { style } from '@mui/system';
import Styles from './../styles/Button.module.css'

export default () => {
  const images = ['img/ict.png']
  const btn = "border-2 py-[0.8rem] px-[1.6rem] hover:bg-white hover:text-gray-700"

  return (
    <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active relative float-left w-full">
          <img
            src={images[0]}
            className="block w-full h-[40rem] object-cover"
            alt="..."
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <div className="slider_content">
              <h1 className="text-[3.6rem]">We foster wisdom</h1>
              <h4>
                Proactively utilize open-source users for process-centric
                total linkage.<br />
                Energistically reinvent web-enabled initiatives with premium
                <br />processes. Proactively drive.
              </h4>
              <div className="flex gap-2 justify-center my-4">
                <a href="#" className={btn}>SEE Programs</a>
                <a href="#" className={btn}>Learn more</a>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
            className="block w-full h-[40rem] object-cover"
            alt="..."
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <div className="slider_content">
              <h1 className="text-[3.6rem]">We foster wisdom</h1>
              <h4>
                Proactively utilize open-source users for process-centric
                total linkage.<br />
                Energistically reinvent web-enabled initiatives with premium
                <br />processes. Proactively drive.
              </h4>
              <div className="flex gap-2 justify-center my-4">
                <a href="#" className={btn}>SEE Programs</a>
                <a href="#" className={btn}>Learn more</a>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
            className="block w-full h-[40rem] object-cover"
            alt="..."
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <div className="slider_content">
              <h1 className="text-[3.6rem]">We foster wisdom</h1>
              <h4>
                Proactively utilize open-source users for process-centric
                total linkage.<br />
                Energistically reinvent web-enabled initiatives with premium
                <br />processes. Proactively drive.
              </h4>
              <div className="flex gap-2 justify-center my-4">
                <a href="#" className={`${Styles.btn} ${Styles.btn_border} `} >SEE Programs</a>
                <a href="#" className={`${Styles.btn} ${Styles.btn_border} `} >Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};


