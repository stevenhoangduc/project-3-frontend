import "./Carlist.css";
import { Link } from "react-router";

export default function CarList(props) {
  const carLis = props.car.map((car) => {
    return (
      <li key={car._id} onClick={() => props.setCar(car)}>
        {car.brand}: {car.model}: {car.year}
      </li>
    );
  });

  return (
    <section>
      <h1>Car List</h1>
      {carLis.length !== 0 ? <ul>{carLis}</ul> : <h2>No Cars yet!</h2>}
    </section>
  );
}
