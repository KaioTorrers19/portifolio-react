import React, { useEffect } from 'react';
import { animated, useSpring } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import './css/About.css';
import php from '../img/php.png';
import javascript from '../img/javascript.png';
import react from '../img/atoms.png';
import html from '../img/html.png';
import css from '../img/css.png';

const About = () => {
  const [textRef, textInView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const textFadeIn = useSpring({
    opacity: textInView ? 1 : 0,
    config: { duration: 1000 },
  });

  const [htmlRef, htmlInView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const htmlFadeIn = useSpring({
    opacity: htmlInView ? 1 : 0,
    config: { duration: 1000 },
    delay: 100, // Atraso de 200ms para a animação do HTML
  });

  const [cssRef, cssInView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const cssFadeIn = useSpring({
    opacity: cssInView ? 1 : 0,
    config: { duration: 1000 },
    delay: 200, // Atraso de 400ms para a animação do CSS
  });

  const [jsRef, jsInView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const jsFadeIn = useSpring({
    opacity: jsInView ? 1 : 0,
    config: { duration: 1000 },
    delay: 300, // Atraso de 600ms para a animação do JavaScript
  });

  const [reactRef, reactInView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const reactFadeIn = useSpring({
    opacity: reactInView ? 1 : 0,
    config: { duration: 1000 },
    delay: 400, // Atraso de 800ms para a animação do React
  });

  const [phpRef, phpInView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const phpFadeIn = useSpring({
    opacity: phpInView ? 1 : 0,
    config: { duration: 1000 },
    delay: 500, // Atraso de 1000ms para a animação do PHP
  });

  useEffect(() => {
    if (textInView) {
      // Adicione uma classe ao elemento de texto quando estiver visível para o usuário
      const textElement = document.querySelector('.fade-in-text');
      textElement.classList.add('show');
    }
  }, [textInView]);

  return (
    <div className='body'>
      <h1 className='blink'>Sobre mim</h1>
      <animated.p ref={textRef} style={textFadeIn} className='fade-in fade-in-text'>
      Tenho paixão pela área de tecnologia e estou constantemente buscando aprender e aprimorar minhas habilidades.
        Minha experiência se concentra principalmente em desenvolvimento web, com foco em linguagens como JavaScript.
        Ao longo do tempo, adquiri um conhecimento sólido em JavaScript e me sinto confortável programando nessa linguagem.
        Além disso, tenho experiência prática com o framework React, que me permite criar interfaces de usuário interativas e responsivas.
        Também estou familiarizado com o gerenciamento de bancos de dados usando o phpMyAdmin.
        Essa ferramenta me permite manipular e gerenciar dados em bancos de dados MySQL de forma eficiente.
        Atualmente, estou buscando oportunidades para aplicar meus conhecimentos e habilidades em projetos desafiadores.
        Tenho uma abordagem analítica e gosto de resolver problemas complexos por meio da programação.
        Sou apaixonado por criar soluções eficientes e escaláveis que atendam às necessidades dos usuários.
        Além do desenvolvimento de software, também valorizo o trabalho em equipe e a colaboração.
        Acredito que a troca de conhecimento e ideias é fundamental para o crescimento profissional e pessoal.
        Em meu site, você poderá encontrar alguns dos meus projetos e explorar meu trabalho.
        Fique à vontade para entrar em contato comigo caso queira discutir oportunidades de colaboração ou qualquer outra informação relacionada.
        Estou animado com as possibilidades que a tecnologia oferece e estou sempre em busca de novos desafios e aprendizados.
       
      </animated.p>
      <div className='images'>
        <animated.img ref={htmlRef} src={html} alt='html logo' style={htmlFadeIn} className='fade-in' />
        <animated.img ref={cssRef} src={css} alt='css logo' style={cssFadeIn} className='fade-in' />
        <animated.img ref={jsRef} src={javascript} alt='javascript logo' style={jsFadeIn} className='fade-in' />
        <animated.img ref={reactRef} src={react} alt='react logo' style={reactFadeIn} className='fade-in' />
        <animated.img ref={phpRef} src={php} alt='php logo' style={phpFadeIn} className='fade-in' />
      </div>
    </div>
  );
};

export default About;
