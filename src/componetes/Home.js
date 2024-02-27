import React from 'react';
import fotoPerfil from '../image/fotoPerfil.png'
import Title from "./Title";

const Home = () => {
  return (
    <main  className={`container`}>
        <div className={`row mt-5 mb-5`}>

          <div data-anima='left' className={` col-xl-6 d-flex justify-content-center justify-content-xl-end`}>
            <div>
              <img style={{}} className={`d-block `} src={fotoPerfil} alt="Foto de Perfil"/>
            </div>
          </div>

          <div data-animaright='rigth' className={`col-xl-6 mt-4 mt-xl-0`}>
            <Title sobre={'Sobre'} title={'Desenvolvedor'}></Title>
            <div className={`col-xl-8`}>
              <p className={`lead fs-2 mt-4`}>Desenvolvedor Web
                apaixonado por criar experiências de usuário incríveis e
                interativas.</p>
            </div>
          </div>

        </div>
    </main>
  );
};

export default Home;