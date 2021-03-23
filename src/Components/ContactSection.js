import React from 'react';

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className='section contact-sect'>
      <div className='section-title'>
        <h2>Contacto</h2>
      </div>
      <div className='section-center'>
        <form action='' className='contact-form'>
          <div className='single-control'>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Su Email' />
          </div>
          <div className='single-control'>
            <label htmlFor='phone'>Telefono</label>
            <input type='text' placeholder='Su Telefono' />
          </div>
          <textarea
            name='mensaje'
            rows='10'
            className='textarea-control'
            placeholder='Consultas...'
          ></textarea>
          <button type='submit' className='btn-form' onClick={handleSubmit}>
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
