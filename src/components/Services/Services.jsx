import React from 'react'
import Styles from './Services.module.css'
import {FaCode,FaPaintbrush,FaDesktop} from 'react-icons/fa6'

function Services() {
  return (
    <div className={Styles.services_con}>
      <h3 className={Styles.services_title}>My Services</h3>
      <div className={Styles.services_list}>
        <div className={Styles.services_item}>
            <FaCode/>
            <h4>Web Development</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor reprehenderit deserunt voluptatem doloremque rerum porro, eos tenetur. Deleniti qui nobis, ducimus quidem ullam aut, sit accusamus fuga unde porro dignissimos.
            </p>
        </div>
        <div className={Styles.services_item}>
            <FaPaintbrush/>
            <h4>Web Design</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor reprehenderit deserunt voluptatem doloremque rerum porro, eos tenetur. Deleniti qui nobis, ducimus quidem ullam aut, sit accusamus fuga unde porro dignissimos.
            </p>
        </div>
        <div className={Styles.services_item}>
            <FaDesktop/>
            <h4>Front-end Consulting</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor reprehenderit deserunt voluptatem doloremque rerum porro, eos tenetur. Deleniti qui nobis, ducimus quidem ullam aut, sit accusamus fuga unde porro dignissimos.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Services
