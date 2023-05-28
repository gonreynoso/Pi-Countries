
import { Landing, Home, Form, Detail, About, Activities, NotFoundPage } from "./Views";
import { Navigate, Route, Routes, } from "react-router-dom";

function App() {

  return (
    <div>

      <Routes>

        <Route exact path="/" element={<Landing />} />

        <Route path="/home" element={<Home />} />

        <Route path="/detail/:id" element={<Detail />} />

        <Route path="/about" element={<About />} />

        <Route path="/form" element={<Form />} />

        <Route path="/activities" element={<Activities />} />

        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace/>} />


      </Routes>
    </div>
  );
}

export default App;
