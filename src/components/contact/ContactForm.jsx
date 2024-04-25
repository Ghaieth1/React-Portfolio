import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Button from '../reusable/Button';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vérifiez si le formulaire est valide avant de soumettre
    if (name && email && subject && message) {
      // Réinitialisation des champs du formulaire après soumission
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');

      // Affichez un message de succès après 1 seconde
      setTimeout(() => {
        Swal.fire({
          title: 'Successful!',
          text: 'Your message has been sent',
          icon: 'success',
        });
      }, 300);
    } else {
      // Affichez un message d'erreur si le formulaire n'est pas valide
      Swal.fire({
        title: 'Error!',
        text: 'Please fill all the fields',
        icon: 'error',
      });
    }
  };

  return (
    <div className='w-full lg:w-1/2'>
      <div className='leading-loose'>
        <form
          onSubmit={handleSubmit}
          className='max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left'
        >
          <p className='font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8'>
            Contact Form
          </p>
          <div className='mb-4'>
            <label
              className='block text-lg text-primary-dark dark:text-primary-light mb-1'
              htmlFor='name'
            >
              Full Name
            </label>
            <input
              className='w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md'
              type='text'
              id='name'
              name='name'
              placeholder='Your Name'
              aria-label='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-lg text-primary-dark dark:text-primary-light mb-1'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md'
              type='email'
              id='email'
              name='email'
              placeholder='Your Email'
              aria-label='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label
              className='block text-lg text-primary-dark dark:text-primary-light mb-1'
              htmlFor='subject'
            >
              Subject
            </label>
            <input
              className='w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md'
              type='text'
              id='subject'
              name='subject'
              placeholder='Subject'
              aria-label='Subject'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className='mb-6'>
            <label
              className='block text-lg text-primary-dark dark:text-primary-light mb-1'
              htmlFor='message'
            >
              Message
            </label>
            <textarea
              className='w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md'
              id='message'
              name='message'
              cols='14'
              rows='6'
              aria-label='Message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Your Message'
            ></textarea>
          </div>
          <div className='font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500'>
            <Button type='submit' aria-label='Send Message'>
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
