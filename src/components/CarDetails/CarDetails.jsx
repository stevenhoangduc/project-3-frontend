import { useNavigate, useParams } from "react-router";
import "./CarDetails.css";
import CarForm from "../CarForm/CarForm";
import { useState, useEffect} from "react";
import CarComments from "../CarComments/CarComments";
import * as carService from "../../services/carService"


export default function CarDetail(props) {
  const { carId } = useParams();
  console.log(props)
  const navigate = useNavigate();
  const [isEditing, setEditing] = useState(false);

  const [selectedCar, setSelectedCar ] = useState (null)
  
  useEffect(() => {
    async function fetchCarDetails() {
      try {
        const data = await carService.getCar(carId);
        setSelectedCar(data);
      } catch (err) {
        console.error("Error fetching car details:", err);
      }
    }
    fetchCarDetails();
  }, [carId, props.handleAddComment, props.handleDeleteComment]);

  // async function handleLike(props) {
  //   try {
  //     await carService.likeCar(carId);
  //     setSelectedCar((prevCar) => ({ ...prevCar, likes: prevCar.likes + 1 }));
  //   } catch (err) {
  //     console.error("Error liking post:", err);
  //   }
  // }

  //  async function handleAddComment(formData) {
  //    console.log(formData)
  //     try {
  //       const newComment = await carService.addComment(carId, formData);
  //       const updatedCarsArray = props.cars.map
  //       setSelectedCar((prevCar) => ({
  //         ...prevCar,
  //         comments: [...prevCar.comments, newComment],
  //       }));
       
  //     } catch (err) {
  //       console.error("Error adding comment:", err);
  //     }
  //   }
  
  //   async function handleDeleteComment(commentId) {
  //     try {
  //       await carService.deleteComment(carId, commentId);
  //       setSelectedCar((prevCar) => ({
  //         ...prevCar,
  //         comments: prevCar.comments.filter((comment) => comment._id !== commentId),
  //       }));
  //     } catch (err) {
  //       console.error("Error deleting comment:", err);
  //     }
  //   }

  // function handleDelete() {
  //   props.deleteCar(selectedCar._id);
  //   navigate("/");
  // }

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
      <button onClick={handleEdit}>Edit Car</button>
      {/* <button onClick={handleDelete}>Delete</button> */}
      <br />

      <CarComments car={selectedCar} handleLike={props.handleLike} handleAddComment={props.handleAddComment} handleDeleteComment={props.handleDeleteComment}/>
      
      
    </section>
  );
}
