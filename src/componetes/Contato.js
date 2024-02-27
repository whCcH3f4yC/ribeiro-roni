import React from 'react';
import contato from '../image/contato.png'
import location from '../image/location.svg'
import telegram from '../image/telegram.svg'
import email from '../image/email.svg'
import person from '../image/person.svg'

const Contato = () => {
  const listaContato = [
    {
      icon: location,
      title: "Localização",
      describe: "Avenida Interlagos, São Paulo-SP",
    },
    {
      icon: telegram,
      title: "Telegram",
      describe: "@ribeiro.roni",
    },
    {
      icon: email,
      title: "Email",
      describe: "ribeiro.roni@aol.com",
    },

    {
      icon: person,
      title: "Contate-nos",
      describe: "Solicite um orçamento agora!",
    },
  ];
  return (
    <section className={`container`}>
      <div className={`row`}>
        <h2 className={`display-3 text-center mb-5`} style={{color: "var(--title)"}}>Vamos Conversar?</h2>
        <div data-anima='left' className={`col-xl-6 d-flex justify-content-center justify-content-xl-end`}>
          <div>
            <img src={contato} alt="Foto de contato"/>
          </div>
        </div>

        <div className={`col-xl-6 `}>
          <div className={`row justify-content-xl-start justify-content-center text-center mb-5 pb-5`}>
            {listaContato.map((data) => (
              <div data-animaright='rigth' className={`card p-4 pb-4 pt-5 text-white mb-xl-3 mt-xl-0 mt-3`}
                   style={{maxWidth: "17rem", backgroundColor: "var(--card-background)"}}>
                <div className={`card-header p-3`}>
                  <img style={{height: "50px", padding: "6px"}} src={data.icon} alt="..."/>
                </div>
                <div className={`card-body`}>
                  <h5 className={`card-title`}>{data.title}</h5>
                  <p className={`card-text`}>{data.describe}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;