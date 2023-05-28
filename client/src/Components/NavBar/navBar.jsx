import style from "./navBar.module.css";
import { useDispatch } from "react-redux";
import { getCountryByName } from "../../redux/actions";
import { useState } from "react";

export default function NavBar() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (search.length) {
      dispatch(getCountryByName(search));
    }
  };

  return (
    <div className={style.topnav}>
      <a href="/home">
        Inicio
      </a>
      <a href="/about">Acerca de</a>
      <a href="/form">Crear actividad</a>
      {/* <a href="/activities">Actividades</a> */}
      <div className={style.searchContainer}>
        <form>
          <input
            type="text"
            placeholder="Buscar países"
            name="search"
            value={search}
            autoComplete="on"
            onChange={handleSearch}
          />
          <button className={style.button} type="submit" onClick={handleSubmit}>
            Buscar
          </button>
        </form>
      </div>
    </div>
  );
}
