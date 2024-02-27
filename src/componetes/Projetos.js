import React from 'react';
import Subtitle from "./Subtitle";
import caravan from '../image/caravan.png'
import animaisSelvagem from '../image/animaisSelvagem.png'
import imagemDoDia from '../image/imagemDoDia.png'

const Projetos = () => {
  const listaProjetos = [
    {
      image: caravan,
      title: 'Caravan',
      describe: 'Mais do que uma agência de viagens. Somos uma comunidade apaixonada por transformar sonhos em' +
        ' aventuras memoráveis. ',
      link: 'https://caravanofdreams.netlify.app',
      github: 'https://github.com/whCcH3f4yC/Caravan'
    },
    {
      image: animaisSelvagem,
      title: 'Animais Selvagem',
      describe: 'As imagens vencedoras dos concursos nacionais e internacionais de fotografia da vida selvagem do' +
        ' ano mostram a beleza e a diversidade da natureza.',
      link:  'https://animaisselvagens.netlify.app',
      github: 'https://github.com/whCcH3f4yC/wildlife',
    },
    {
      image: imagemDoDia,
      title: 'Imagem do Dia',
      describe: 'Descubra qual foto extraordinária foi capturada pela NASA no dia do seu aniversário e mergulhe na' +
        ' história do universo!',
      link: 'https://apodastronomypictureoftheday.netlify.app/',
      github: 'https://github.com/whCcH3f4yC/astronomy-picture-of-the-day'
    }
  ]


  return (
    <section className={`container`}>
      <div className={`row d-flex justify-content-center mb-5 pb-xl-5 `}>
        
        <div data-animaright='rigth' className={`text-xl-end text-center `}>
          <Subtitle subtitle={'Lançamentos Recentes'}></Subtitle>
        </div>

        <p data-anima='left' className={`fs-3 text-center mb-5`}>"Eu sei o preço do sucesso: dedicação, trabalho duro e uma incessante devoção às coisas que você quer ver acontecer."</p>

        {listaProjetos.map((data) => (
          <div className="card m-2 text-white " style={{width: "20rem", backgroundColor:"var(--card-background)"}}>
            <img src={data.image} className={`card-img-top`} alt="..."/>
            <div className={` card-body `}>
                <h5 className={` card-title `}>{data.title}</h5>
              <p className={`card-text`}>{data.describe}</p>

                <a href={data.link} className={`btn m-2`} style={{backgroundColor: 'var(--title)'}}>Website</a>
                <a href={data.github} className={`btn m-2`} style={{backgroundColor: 'var(--title)'}}>GitHub</a>

            </div>

          </div>
        ))}


      </div>
    </section>
  );
};

export default Projetos;