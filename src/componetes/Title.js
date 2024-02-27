import React from 'react';
import style from './Title.module.css'

const Title = ({title, sobre}) => {
  return (<h1 className={` display-2 fw-bold  ${style.title}` }> < span className={style.sobre}>{ sobre }</span> <br/> { title }</h1>
  );
};

export default Title;