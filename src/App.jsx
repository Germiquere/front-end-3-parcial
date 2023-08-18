import { useState } from "react";
import Card from "./Card";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const initialForm = {
    color: "",
    marca: "",
  };
  const [formState, setFormState] = useState(initialForm);
  const [autos, setAutos] = useState([]);
  const [errorMsj, setErrorMsj] = useState(false);
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const onResetForm = () => {
    setFormState(initialForm);
  };
  const validarColor = (color) => {
    const colorTrim = color.trim();
    if (colorTrim.length < 3) {
      return false;
    } else {
      return true;
    }
  };
  const validarMarca = (marca) => {
    const marcaTrim = marca.trim();
    if (marcaTrim.length < 6) {
      return false;
    } else {
      return true;
    }
  };

  const addAutos = () => {
    setAutos((prev) => [...prev, formState]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validaciones =
      validarColor(formState.color) && validarMarca(formState.marca);
    if (validaciones) {
      addAutos();
      onResetForm();
      setErrorMsj(false);
    } else {
      setErrorMsj(true);
    }
  };
  return (
    <div>
      <h1>Ingresa el color y marca de tu auto favorito</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="color"
          value={formState.color}
          onChange={onInputChange}
          placeholder="Verde,Azul..."
        />
        <input
          type="text"
          name="marca"
          value={formState.marca}
          onChange={onInputChange}
          placeholder="Chevrolet,Lamborghini...."
        />
        {errorMsj && <p>Por favor chequea que la información sea correcta</p>}
        <button type="submit">CREAR</button>
        {autos.map((auto, index) => (
          <Card key={index} auto={auto} />
        ))}
      </form>
    </div>
  );
}

export default App;
