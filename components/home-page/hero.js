import Image from "next/image";
import classes from "./hero.module.css";
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image alt="me" width={300} height={300} src="/images/site/me.jpg" />
      </div>
      <h1>Hi, I'm Krystsina</h1>
      <p>A blog about web development</p>
    </section>
  );
}

export default Hero;
