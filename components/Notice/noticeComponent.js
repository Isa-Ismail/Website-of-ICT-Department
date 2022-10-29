import React from 'react'

const NoticeComponent = ({ notices, batch }) => {
  let content = [];

  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let createdDate = '';
  let year = ''
  let month = ''
  let date = ''
  content = notices?.filter(notice => (batch === '') ? true : (notice.batch === batch)).map(notice => {
    createdDate = new Date(notice?.date);
    year = createdDate.getFullYear();
    month = months[createdDate.getMonth()];
    date = createdDate.getDate();
    return (
      <li key={notice.id}>
        <div className={styles.event_date}>
          <div className={styles.event_date_wrap}>
            <p>{date}</p>
            <span>{month}.{year}</span>
          </div>
        </div>
        <div className={styles.date_description}>
          <h3 >{notice.title}</h3>
          <p >
            {notice.message}
          </p>
          <hr className={styles.event_line} />
        </div>
      </li>
    )
  })
  return (
    <>

    </>
  )
}

export default NoticeComponent