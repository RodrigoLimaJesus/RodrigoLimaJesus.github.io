import React from 'react';

import MyImage from '../images/eu.jpeg';
import ProgrammigGif from '../images/programming.gif';

import Container from './Container';

export default function Apresentation() {
  return (
    <Container>
      <div className="md:flex md:flex-row">
        <img
          src={ProgrammigGif}
          alt="Gif de pessoa programando"
          className="w-10/12 m-auto rounded-xl sm:hidden"
        />
        <img
          src={MyImage}
          alt="Minha imagem de perfil"
          className="hidden w-2/5 m-auto border-2 border-white rounded-lg sm:block md:mr-5 md:w-1/3 lg:w-1/4"
        />
        <p className="font-bold my-5 text-justify h-fit sm:text-lg xl:self-center xl:text-2xl">
          Sou brasileiro natural de Manaus/Am, atualmente estudo engenharia da
          computação na Universidade Federal do Amazonas e desenvolvimento web
          na{' '}
          <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer">
            Trybe
          </a>
          , uma escola que vai além do ensino tradicional e incentiva muito o
          desenvolvimento das soft skills. Sou formado pela mesma como
          desenvolvedor front-end Jr e agora me aprofundo nos conhecimentos do
          back-end para dar início à carreira full-stack.
        </p>
      </div>
    </Container>
  );
}
