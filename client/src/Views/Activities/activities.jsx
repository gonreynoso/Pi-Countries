import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "../../redux/actions";
import { useEffect } from "react";
import axios from "axios";
import style from "../Activities/activities.module.css";

export default function Activities() {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);


  //? Aca borramos por ID
  const handleDelete = (id) => {
    axios.delete(`/activities/${id}`);
    window.location.reload();
  };

  //? Aca borramos todas las actividades
  const handleClick = () => {
    axios.delete("/activities/all");
    window.location.reload();
  };

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div className="background">
      <div className={style.topnav}>
        <a href="/home">
          Inicio
        </a>
      </div>
      <h1 className={style.h1}>Actividades</h1>
      <div className={style.container}>
        {activities ? (
          activities.map((activity) => {
            return (
              <>
                <div className={style.card} key={activity.id}>
                  <button className={style.close}
                    onClick={() => handleDelete(activity.id)}
                  >
                    X
                  </button>
                  <h1>Nombre: {activity.name}</h1>
                  <h2>Temporada: {activity.season}</h2>
                  <h3>Duración: {activity.duration}</h3>
                  <h3>Dificultad: {activity.difficulty}</h3>
                </div>
              </>
            );
          })
        ) : (
          <h1>No Activities found</h1>
        )}
      </div>
      <div className={style.buttonContainer}>
        <button onClick={handleClick} className={style.button}>
          Borrar todas las actividades
        </button>
      </div>
    </div>
  );
}