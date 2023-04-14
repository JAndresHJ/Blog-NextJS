import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/me&beny.jpeg'
          alt='An image showing Andrés'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Andrés</h1>
      <p>
        I&apos;m a software engineer with over 5+ years of experience, I
        specialize in front-end development and have a deep understanding of
        full-stack technologies, most imporantly pet lover as you can see.
      </p>
    </section>
  );
};

export default Hero;
