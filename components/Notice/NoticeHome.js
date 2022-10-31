import styles from '../../styles/NoticeHome.module.css'
import Slider from "react-slick"
import { useEffect, useState } from 'react'

const NoticeHome = () => {

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

  const [notices, setNotices] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://ict-6.vercel.app/api/notice/')
        const data = await response.json();
        setNotices(data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, [])

  let noticeItems = [{

    id: 1,
    title: 'notice1',
    userId: 'farhad1234',
    regards: 'Professor',
    department: 'ICT',
    batch: 'first',
    message: "lorem Ipsam dolor "
  },
  {
    id: 2,
    title: 'notice2',
    userId: 'farhad1234',
    regards: 'Professor',
    department: 'ICT',
    batch: 'MS',
    message: "lorem Ipsam dolor "
  },
  {
    id: 3,
    title: 'notice3',
    userId: 'farhad1234',
    regards: 'Professor',
    department: 'ICT',
    batch: 'third',
    message: "lorem Ipsam dolor "
  },
  {
    id: 4,
    title: 'notce4',
    userId: 'farhad1234',
    regards: 'Professor',
    department: 'ICT',
    batch: 'second',
    message: "lorem Ipsam dolor "
  }
    ,
  {
    id: 5,
    title: 'notce5',
    userId: 'farhad1234',
    regards: 'Professor',
    department: 'ICT',
    batch: 'MS',
    message: "lorem Ipsam dolor "
  }]


  let totalNoiceBoard = Math.ceil(noticeItems.length / 3);
  let content = [];

  for (let i = 0; i < totalNoiceBoard; i++) {
    let singleNotices = [];
    for (let j = i * 3; j < (i + 1) * 3 && j < noticeItems.length; j++) {
      singleNotices.push(
        <>
          {/* single notice starts */}
          <div key={noticeItems[j].id}>
            <div className={styles.event_date}>
              <div className={styles.event_date_wrap}>
                <p>06</p>
                <span>Nov.17</span>
              </div>
            </div>
            <div className={styles.date_description}>
              <h3 className="text-[#0B3954] text-[1.5rem]">{noticeItems[j].title}</h3>
              <p className="text-[#0B3954]">
                When an unknown printer took a galley of type and
                scrambled it to make a type specimen book ...
              </p>
              <hr className={styles.event_line} />
            </div>
          </div>
          {/* single noticeItemse ends */}
        </>);
    }

    content.push(
      <>
        {/* notices starts here */}
        <div className="flex gap-5 justify-center">
          <div className="col-span-12">
            {singleNotices}
          </div>
        </div>
        {/* notices ends here */}
      </>
    )
  }






  return (
    <div className="programs">



      <div className="styles.flex justify-center">
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
                    {content.length ? content : (
                      <div className="w-auto p-6 border-solid border-2 border-[#0B3954] text-[#0B3954] text-xl">
                        <div>No Notice Here</div>
                      </div>
                    )}
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

export default NoticeHome