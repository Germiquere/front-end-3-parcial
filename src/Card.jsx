//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({ auto }) {
  const { color, marca } = auto;
  return (
    <div>
      <h2>TU AUTO FAVORITO</h2>
      <h3>Marca: {marca}</h3>
      <h3>Color: {color}</h3>
    </div>
  );
}

export default Card;
