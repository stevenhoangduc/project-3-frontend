// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Navbar from "../components/Navbar"; // Import Navbar
// import Footer from "../components/Footer"; // Import Footer
// import * as carService from "../services/carService"; // Assuming API calls are handled here

// const EditCar = ({ user }) => {
//   const { carId } = useParams(); // Get carId from URL params
//   const navigate = useNavigate();

//   const [car, setCar] = useState({
//     title: "",
//     company: "",
//     image: "",
//   });

//   useEffect(() => {
//     async function fetchCar() {
//       try {
//         const fetchedCar = await carService.getCar(carId); // Fetch car data
//         setCar(fetchedCar);
//       } catch (err) {
//         console.error("Error fetching car:", err);
//       }
//     }
//     fetchCar();
//   }, [carId]);

//   async function handleSubmit(e) {
//     e.preventDefault();
//     try {
//       await carService.updateCar(user._id, carId, car); // API call to update car
//       navigate(`/cars/${carId}`); // Redirect after update
//     } catch (err) {
//       console.error("Error updating car:", err);
//     }
//   }

//   function handleChange(e) {
//     setCar({ ...car, [e.target.name]: e.target.value });
//   }

//   return (
//     <div>
//       <Navbar />
//       <main className="edit-car-container">
//         <h1>Edit {car.title} at {car.company}</h1>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="image">Image:</label>
//           <input
//             type="text"
//             name="image"
//             id="image"
//             value={car.image}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit">Update Car</button>
//         </form>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default EditCar;
