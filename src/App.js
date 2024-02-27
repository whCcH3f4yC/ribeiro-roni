import React from 'react';
import Home from "./componetes/Home";
import Projetos from "./componetes/Projetos";
import Comentario from "./componetes/Comentario";
import Contato from "./componetes/Contato";
import Footer from "./componetes/Footer";
import Header from "./componetes/Header";
import{animaLeft,animaRight} from "./componetes/Efeitos"

const App = () => {

React.useEffect(()=>{
  animaLeft()
  animaRight()
},[])

  return (
    <div>
      <Header />
      <Home />
      <Projetos />
      <Comentario />
      <Contato />
      <Footer />
    </div>
  );
};

export default App;