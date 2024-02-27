import React from 'react';
import fotoComentario from '../image/comentario.png'




const Comentario = () => {
  return (
    <section className={`container`}>
      <div className={`row mb-5 pb-5`}>
          <h2 className={`display-3 text-center mb-5`} style={{color: "var(--title)"}}>O que os clientes dizem</h2>
        <div data-anima='left' className={`col-xl-6 d-flex justify-content-center justify-content-xl-end`}>
          <div>
            <img className={`img`} src={fotoComentario} alt="Foto do Cliente"/>
          </div>
        </div>

        <div className={`col-xl-6`}>
          <div data-animaright='rigth' className={`col-xl-8 text-xl-start text-center mt-xl-0 mt-4`}>
            <p className={`fs-4`}>
              "Verdadeiramente impressionante! A estética moderna e intuitiva, combinada com uma navegação suave e
              responsividade exemplar, reflete sua habilidade técnica e atenção aos detalhes. A estrutura organizada do
              código demonstra profissionalismo, tornando o projeto não apenas visualmente atraente, mas também
              sustentável a longo prazo."
            </p>
            <p className={`text-uppercase fs-4 opacity-50 mb-0`} >Marcia Carolina</p>
            <p >Fotografa</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comentario;