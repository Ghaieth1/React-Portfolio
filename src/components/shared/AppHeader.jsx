import { useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';

import { motion } from 'framer-motion';

const AppHeader = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [activeTheme, setTheme] = useThemeSwitcher();

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id='nav'
      className='sm:container sm:mx-auto'
    >
      <div className='z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6'>
        {/* Header menu links and small screen hamburger menu */}

        <div className='flex justify-between items-center px-4 sm:px-0'>
          <div className='font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'></div>

          <Link
            to='/'
            className='text-xl  text-indigo font-bold link '
            aria-label='Home'
          >
            GH.
          </Link>
          <div
            onClick={() => setTheme(activeTheme)}
            aria-label='Theme Switcher'
            className='block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer'
          >
            {activeTheme === 'dark' ? (
              <FiMoon className='text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl' />
            ) : (
              <FiSun className='text-gray-200 hover:text-gray-50 text-xl' />
            )}
          </div>
        </div>

        {/* Header links small screen */}
        <div
          className={
            showMenu
              ? 'block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'
              : 'hidden'
          }
        >
          <Link
            to='/projects'
            className='block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2'
            aria-label='Projects'
          >
            Projects
          </Link>

          <Link
            to='/contact'
            className='block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark'
            aria-label='Contact'
          >
            Contact
          </Link>
        </div>

        {/* Header links large screen */}
        {/* font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none */}
        {/* Header right section buttons */}
        <div className='hidden sm:flex justify-between items-center flex-col md:flex-row'>
          <div className='hidden md:flex'>
            <Link
              to='/projects'
              className='link-2 font-general-medium block text-left text-lg text-primary-dark dark:text-primary-light hover: dark:hover:text-secondary-light px-5   sm:mx-4 mb-2 sm:py-2'
              aria-label='Projects'
            >
              Projects
            </Link>

            <Link
              to='/contact'
              className='text-md font-general-medium  bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-3 duration-300'
              aria-label='Contact'
            >
              Contact me
            </Link>
          </div>

          {/* Theme switcher large screen */}
          <div
            onClick={() => setTheme(activeTheme)}
            aria-label='Theme Switcher'
            className='ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer'
          >
            {activeTheme === 'dark' ? (
              <FiMoon className='text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl' />
            ) : (
              <FiSun className='text-gray-200 hover:text-gray-50 text-xl' />
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default AppHeader;
