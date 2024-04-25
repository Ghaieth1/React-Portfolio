import uniqid from 'uniqid';
import React from 'react';
import { skills } from '../../data/skillsData';
import '../../css/main.css';

const Skills = () => {
  if (!skills.length) return null;

  return (
    <section className='section skills' id='skills'>
      <div className='text-center'>
        <p className='font-general-medium text-2xl sm:text-4xl mt-20 mb-10 text-ternary-dark dark:text-ternary-light'>
          Skills
        </p>
      </div>

      <ul className='skills__list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10 rounded-xl shadow-lg  mb-16 sm:mb-0 bg-secondary-light dark:bg-ternary-dark '>
        {skills.map((skill) => (
          <li
            key={uniqid()}
            className='skills__list-item  mb-8 mt-8 text-ternary-dark dark:text-ternary-light'
          >
            {skill.icon ? <img src={skill.icon} alt={skill.name} /> : null}
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
