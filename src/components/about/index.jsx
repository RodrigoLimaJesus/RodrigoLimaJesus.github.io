import React from 'react';
import Container from '../wrappers/Container';
import Title from '../wrappers/Title';

export default function About() {
  return (
    <Container>
      <Title>Sobre mim</Title>

      <p className="my-4">
        Sou brasileiro natural de Manaus/Am, apaixonado por programação e pelos desafios
        que ela oferece, atualmente estudo engenharia da computação na Universidade
        Federal do Amazonas e desenvolvimento web na Trybe, uma escola que vai além do
        ensino tradicional e incentiva muito o desenvolvimento das soft skills. Na trybe
        já me encontro no módulo de ciência da computação, tendo visto até então os
        fundamentos do desenvolvimento web e a base para o desenvolvimento front-end e
        back-end.
      </p>
    </Container>
  );
}
