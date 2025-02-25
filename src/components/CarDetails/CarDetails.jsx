import { useNavigate, useParams } from "react-router";
import "./CarDetails.css";
import CarForm from "../CarForm/CarForm";
import { useState } from "react";

export default function CarDetail(props) {
  const { carId } = useParams();
  const navigate = useNavigate();
  const [isEditing, setEditing] = useState(false);

  const selectedCar = props.cars.find((car) => {
    console.log(car)
    return car._id === carId;
  });

  function handleDelete() {
    props.deleteCar(selectedCar._id);
    navigate("/");
  }

  function handleEdit() {
    // props.editCar(selectedCar._id);
    setEditing(true);
  }

  function submitEditedForm(formData) {
    props.editCar(formData)
    setEditing(false);
  }

  return isEditing ? (
    <CarForm submitEditedForm={submitEditedForm} buttonLabel='Edit car' car={selectedCar} />
  ) : (
    <section>
      <h2>{selectedCar.name}</h2>

      <span>Make: {selectedCar.brand}</span>

      <br />

      <span>Model: {selectedCar.model}</span>

      <br />

      <span>Year: {selectedCar.year}</span>

      <br />

      <img src={selectedCar.imageUrl}></img>

      <br />
      <button onClick={handleEdit}>Edit Car</button>
      <button onClick={handleDelete}>Delete</button>
      <br />
    </section>
  );
}
