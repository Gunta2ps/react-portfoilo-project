import React from 'react'
import styles from './skills.module.css'
import {FaJs, FaReact,FaHtml5,FaCss3Alt,FaPython,FaDatabase,FaGitAlt,FaNodeJs} from 'react-icons/fa6'

function skills() {
  return (
    <div className={styles.skills_con}>
      <h3 className={styles.skills_title}>My Skill Set</h3>
      <ul className={styles.skills_list}>
        <li>
        <FaJs />
        </li>
        <li>
          <FaReact />
        </li>
        <li>
          <FaHtml5 />
        </li>
        <li>
          <FaCss3Alt />
        </li>
        <li>
          <FaPython />
        </li>
        <li>
          <FaDatabase />
        </li>
        <li>
          <FaGitAlt />
        </li>
        <li>
          <FaNodeJs />
        </li>
      </ul>
    </div>
  )
}

export default skills
