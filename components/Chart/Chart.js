import React from 'react'
import styles from '../../styles/Chart.module.css'
import CountUp from 'react-countup';
const Chart = () => {
  return (
    <div class={styles.detailed_chart}>
      <div class="container">
        <div class="px-[10rem] space-y-[2rem] flex items-center justify-center gap-x-52">
          <div class="col-xs-12 col-sm-6 col-md-3 chart_bottom">
            <div class={styles.chart_img}>
              <img
                src="/img/chart-icon_1.png"
                alt="chart_icon"
              />
            </div>
            <div class={styles.chart_text}>
              <p><span class="counter">
                <CountUp end={39} />
              </span> Teachers</p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-3 chart_bottom chart_top">
            <div class={styles.chart_img}>
              <img
                src="/img/chart-icon_2.png"
                class="img-fluid"
                alt="chart_icon"
              />
            </div>
            <div class={styles.chart_text}>
              <p><span class="counter">
                <CountUp end={2600} />
              </span> Students</p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-3 chart_top">
            <div class={styles.chart_img}>
              <img
                src="/img/chart-icon_3.png"
                class="img-fluid"
                alt="chart_icon"
              />
            </div>
            <div class={styles.chart_text}>
              <p><span class="counter"> <CountUp end={56} /></span> Courses</p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-3">
            <div class={styles.chart_img}>
              <img
                src="/img/chart-icon_4.png"
                class="img-fluid"
                alt="chart_icon"
              />
            </div>
            <div class={styles.chart_text}>
              <p><span class="counter"> <CountUp end={13} /></span> Years Exp.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chart