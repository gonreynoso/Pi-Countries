import style from "./about.module.css";

export default function About() {
  return (
    <div className={style.background}>
      <div className={style.topnav}>
        <a className={style.active} href="/home">
          Inicio
        </a>
      </div>  
        <div className={style.titulo}>
          <h1>Proyecto Countries</h1>
          <h2>Gonzalo Reynoso</h2>
        </div>
        <div className={style.parrafo}>
          <p>
            Este es un proyecto dictado por Henry para evaluar nuestros conocimientos aprendidos a lo largo de la cursada usando las herramientas como Js, React, Sequelize, Redux, PostGres.
          </p>
        </div>
      </div>
  )
}
