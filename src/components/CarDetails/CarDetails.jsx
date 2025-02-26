

import { useNavigate, useParams } from "react-router";
import "./CarDetails.css";
import CarForm from "../CarForm/CarForm";
import {useState, useEffect} from "react";
import CarComments from "../CarComments/CarComments";
import * as carService from "../../services/carService"



export default function CarDetail(props) {
  const { carId } = useParams();
  console.log(props)
  const navigate = useNavigate();
  const [isEditing, setEditing] = useState(false);

  const [selectedCar, setSelectedCar ] = useState (null)
  const [isLiked, setIsLiked ] = useState (null)
  
  useEffect(() => {
    async function fetchCarDetails() {
      try {
        const data = await carService.getCar(carId);
        setSelectedCar(data);
        setIsLiked(data.likes.includes(props.user?._id))
      } catch (err) {
        console.error("Error fetching car details:", err);
      }
    }
    fetchCarDetails();
  }, [carId, props.handleAddComment, props.handleDeleteComment]);
      // originally this functions only runs once

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

  
    if (!selectedCar) return <h1>Loading...</h1>;

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

      <img src={selectedCar.image}></img>

      <br />

      <span>{isLiked ?  "❤️" : ""}</span>

      <br />

      <button onClick={() => {
        props.handleLike(selectedCar)
        setIsLiked(!isLiked)
      }}>{isLiked ? "unLike": "Like"}</button>
      {/* likes button clicks */}

      <br />

      <button onClick={handleEdit}>Edit Car</button>
      <button onClick={handleDelete}>Delete</button>
      <br />

     

      <CarComments car={selectedCar}  handleAddComment={props.handleAddComment} handleDeleteComment={props.handleDeleteComment}/>
      
      
    </section>
  );
}






