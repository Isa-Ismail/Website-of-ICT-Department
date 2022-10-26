import React from 'react'
import styles from '../../styles/Chart.module.css'
import CountUp from 'react-countup';
const Chart = () => {
  return (
    <div className={styles.detailed_chart}>
      <div className="container">
        <div className="px-[10rem] space-y-[2rem] flex items-center justify-center gap-x-52">
          <div className="col-xs-12 col-sm-6 col-md-3 chart_bottom bg-[#9E7676] rounded-full p-16">
            <div className={styles.chart_img}>
              <img
                src="/img/chart-icon_1.png"
                alt="chart_icon"
              />
            </div>
            <div className={styles.chart_text}>
              <p><span className="counter">
                <CountUp end={39} />
              </span> Teachers</p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 chart_bottom chart_top bg-[#9E7676] rounded-full p-16">
            <div className={styles.chart_img}>
              <img
                src="/img/chart-icon_2.png"
                className="img-fluid"
                alt="chart_icon"
              />
            </div>
            <div className={styles.chart_text}>
              <p><span className="counter">
                <CountUp end={2600} />
              </span> Students</p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 chart_top bg-[#9E7676] rounded-full p-16">
            <div className={styles.chart_img}>
              <img
                src="/img/chart-icon_3.png"
                className="img-fluid"
                alt="chart_icon"
              />
            </div>
            <div className={styles.chart_text}>
              <p><span className="counter"> <CountUp end={56} /></span> Courses</p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 chart_top bg-[#9E7676] rounded-full p-16 px-[5rem]">
            <div className={styles.chart_img}>
              <img
                src="/img/chart-icon_4.png"
                className="img-fluid"
                alt="chart_icon"
              />
            </div>
            <div className={styles.chart_text}>
              <p><span className="counter"> <CountUp end={13} /></span> Years Exp.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chart