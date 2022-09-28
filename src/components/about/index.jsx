import React from 'react';
import Container from '../wrappers/Container';
import Title from '../wrappers/Title';

export default function About() {
  return (
    <Container>
      <Title>Sobre mim</Title>

      <p className="my-4 md:text-lg">
      Sou brasileiro natural de Manaus/Am, apaixonado por programação e pelos desafios que ela oferece, atualmente estudo engenharia da computação na Universidade Federal do Amazonas e sou estagiário de NPI no Instituto de Pesquisas Eldorado. Como experiência certificada tenho o curso de desenvolvimento web na Trybe, uma escola que vai além do ensino tradicional e incentiva muito o desenvolvimento das soft skills, com assuntos em fundamentos do desenvolvimento web, desenvolvimentos front-end e back-end, e ciência da computação.
      </p>
    </Container>
  );
}
