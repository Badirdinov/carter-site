import React from 'react'
import styles from '../styles/contact.module.scss'

const Contacts = () => {
  return (
    <div className="max-w-[1820px] my-0 mx-auto">
      <div className={styles.contact}>
        <div className={styles.contact__item}>
          <h3>
            Напиши нам
          </h3>
          <div className={styles.inputs}>
            <form action="" method="">
              <label htmlFor="first">Ваше имя</label>
              <input type="text" id="first" name="first" placeholder='Lorem Ipsum is simply dummy text of the printing and typesetting' />
              <input type="text" id="last" name="last" placeholder='Gmail / telegram' />
              <input type="text" id="last" name="last" placeholder='Ваше сообшение' />
              <button type="submit">Отправить</button>
            </form>
          </div>
        </div>
        <div className={styles.text}>
          <h3>
            Contacts
          </h3>
        </div>
        <div className={styles.contact__links}>

        </div>
      </div>
    </div>
  )
}

export default Contacts