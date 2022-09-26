import styles from '../../styles/NoticeHome.module.css'
import Slider from "react-slick"

const Slides = () => {

  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div className="programs">



      <div className="styles.flex justify-center py-10">
        <section className={styles.event}>
          <div className="flex gap-5 justify-center">
            <div className="space-x-4 flex flex-wrap gap-6">
              <div>
                <h2 className="text-[#0B3954] text-[2rem]">Upcoming Events</h2>
                <div className={styles.event_img}>
                  <span className={styles.event_img_date}>06-Nov-17</span>
                  <img
                    src="img/ict.png"
                    alt="event-img"
                    className='object-contain'
                  />
                  <div className={styles.event_img_title}>
                    <h3 className="text-[#0B3954] text-[3rem]">Event Heading</h3>
                    <p className="text-[#0B3954]">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.<br /> Lorem Ipsum has been the ...
                    </p>
                  </div>
                </div>
              </div>


              <div>
                <h2 className="text-[#0B3954] text-[2rem] mt-0">Important Dates</h2>


                <div>
                  <Slider className="w-[40rem] flex justify-evenly"  {...settings}>
                    <div className="flex gap-5 justify-center">
                      <div className="col-span-12">


                        <div className={styles.event_date}>
                          <div className={styles.event_date_wrap}>
                            <p className="text-[#0B3954]">06</p>
                            <span className="text-[#0B3954]">Nov.17</span>
                          </div>
                        </div>
                        <div className={styles.date_description}>
                          <h3 className="text-[#0B3954] text-[1.5rem]">Eestibulum sodales metus.</h3>
                          <p className="text-[#0B3954]">
                            When an unknown printer took a galley of type and
                            scrambled it to make a type specimen book ...
                          </p>
                          <hr className={styles.event_line} />
                        </div>


                        <div className={styles.event_date}>
                          <div className={styles.event_date_wrap}>
                            <p>10</p>
                            <span>Nov.17</span>
                          </div>
                        </div>
                        <div className={styles.date_description}>
                          <h3 className="text-[#0B3954] text-[1.5rem]">Integer faucibus nulla a ligula.</h3>
                          <p className="text-[#0B3954]">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever...
                          </p>
                        </div>
                      </div>
                    </div>


                    <div className="flex gap-5 justify-center">
                      <div className="col-span-12">
                        <div className={styles.event_date}>
                          <div className={styles.event_date_wrap}>
                            <p>06</p>
                            <span>Nov.17</span>
                          </div>
                        </div>
                        <div className={styles.date_description}>
                          <h3 className="text-[#0B3954] text-[1.5rem]">Eestibulum sodales metus.</h3>
                          <p className="text-[#0B3954]">
                            When an unknown printer took a galley of type and
                            scrambled it to make a type specimen book ...
                          </p>
                          <hr className={styles.event_line} />
                        </div>
                        <div className={styles.event_date}>
                          <div className={styles.event_date_wrap}>
                            <p>10</p>
                            <span>Nov.17</span>
                          </div>
                        </div>
                        <div className={styles.date_description}>
                          <h3 className="text-[#0B3954] text-[1.5rem]">Integer faucibus nulla a ligula.</h3>
                          <p className="text-[#0B3954]">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever...
                          </p>
                        </div>
                      </div>
                    </div>


                    <div className="flex gap-5 justify-center">
                      <div className="col-span-12">
                        <div className={styles.event_date}>
                          <div className={styles.event_date_wrap}>
                            <p>06</p>
                            <span>Nov.17</span>
                          </div>
                        </div>
                        <div className={styles.date_description}>
                          <h3 className="text-[#0B3954] text-[1.5rem]">Eestibulum sodales metus.</h3>
                          <p className="text-[#0B3954]">
                            When an unknown printer took a galley of type and
                            scrambled it to make a type specimen book ...
                          </p>
                          <hr className={styles.event_line} />
                        </div>
                        <div className={styles.event_date}>
                          <div className={styles.event_date_wrap}>
                            <p>10</p>
                            <span>Nov.17</span>
                          </div>
                        </div>
                        <div className={styles.date_description}>
                          <h3 className="text-[#0B3954] text-[1.5rem]">Integer faucibus nulla a ligula.</h3>
                          <p className="text-[#0B3954]">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever...
                          </p>
                        </div>
                      </div>
                    </div>
                  </Slider>

                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>

  );
}

export default Slides