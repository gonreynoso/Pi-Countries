import { useState, useEffect } from "react";
import { getCountries } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import style from "./form.module.css";
import validate from "./validate";

export default function Form() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  const [activity, setActivity] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    country: [],
  });
  console.log(activity);

  const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
  });

  const validate = (activity) => {


    // name //
    if (!activity.name) {
     setErrors({ ...errors, name: "Campo incompleto" });
   } else if (!isNaN(activity.name)) {
     setErrors({ ...errors, name: "La actividad no puede incluir números" });
   } else {
     setErrors({ ...errors, name: "" });
   }
    // duration //
    if (!activity.duration)
      setErrors({ ...errors, duration: "Campo incompleto" });
    else {
      setErrors({ ...errors, duration: "" });
    }
   
    // difficulty //
    if (activity.difficulty === "")
      setErrors({ ...errors, difficulty: "Campo incompleto" });
    else {
      setErrors({ ...errors, difficulty: "" });
    }
   
    //season //
    if (
      !(
        activity.season === "Spring" ||
        activity.season === "Summer" ||
        activity.season === "Autumn" ||
        activity.season === "Winter"
      )
    )
      setErrors({ ...errors, season: "Campo incompleto" });
    else {
      setErrors({ ...errors, season: "" });
    }
   };


  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setActivity({ ...activity, [property]: value });

    //? Validamos los datos ingresados
    validate({ ...activity, [property]: value }, errors, setErrors);
    
  };
   

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  //? Para mostrar los paises selecionados
  const handleSelect = (event) => {
    if (event.target.value !== "countries") {
      setActivity({
        ...activity,
        country: [...activity.country, event.target.value],
      });
    }
  };

  const submitHandler = async (event) => {
    // eslint-disable-next-line
    {/*Usamos el prevent Default para evitar que recargue la pagina con Submit*/ }
    event.preventDefault();
    try {
      // eslint-disable-next-line
      {/*POST a /activities para guardar en DB*/ }
      await axios.post("/activities", activity)
      alert("Actividad creada exitosamente");
    } catch (error) {
      alert("Hubo un error al crear la actividad");
      console.error(error);
    }
    //? refrescamos window
    window.location.reload();
  };
// eslint-disable-next-line
  const sortedCountries = countries.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (

    <div className={style.background}>
      <div className={style.topnav}>
        <a className={style.active} href="/home">
          Inicio
        </a>
      </div>  
      <div className={style.div}>
        <h1 className={style.h1}>Creá tu actividad</h1>
        <form onSubmit={submitHandler} className={style.formContainer}>
          <div className={style.div}>
            <label>Nombre de la actividad: </label>
            <input
              type="text"
              value={activity.name}
              onChange={changeHandler}
              name="name"
              className={style.input}
            />
            {errors.name && <span>{errors.name}</span>}
          </div>
          <div className={style.div}>
            <label>Dificultad: </label>
            <select
              id="country"
              name="difficulty"
              onChange={changeHandler}
              className={style.select}
            >
              <option value="">--Select Difficulty--</option>
              <option value="1">⭐ ☆ ☆ ☆ ☆</option>
              <option value="2">⭐⭐ ☆ ☆ ☆</option>
              <option value="3">⭐⭐⭐ ☆ ☆</option>
              <option value="4">⭐⭐⭐⭐ ☆</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
            </select>
          </div>
          <div className={style.div}>
            <label>Duración (hs): </label>
            <input
              className={style.input}
              type="number"
              value={activity.duration}
              onChange={changeHandler}
              name="duration"
              min={1}
              max={5}
            />
          </div>
          <div className={style.div}>
            <label>Temporadas: </label>
            <select
              id="country"
              name="season"
              onChange={changeHandler}
              className={style.select}
            >
              <option value="">--Select Season--</option>
              <option value="Summer">Summer</option>
              <option value="Autumn">Autumn</option>
              <option value="Winter">Winter</option>
              <option value="Spring">Spring</option>
            </select>
          </div>
          <div className={style.div}>
            <label>Paises: </label>
            <select
              name="country"
              onChange={handleSelect}
              className={style.select}
            >
              <option value="">--Elegir países--</option>
              {countries.map((country) => (
                <option id="country" key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div className={style.div}>
            <label>Países seleccionados:</label>
            <ul>
              {activity.country.map((selectedCountry, index) => (
                <li key={index}>{selectedCountry}</li>
              ))}
            </ul>
          </div>
          <div className={style.div}>
            <input type="submit" value="submit" className={style.submit} />
          </div>
        </form>
      </div>
    </div>
  );
}
