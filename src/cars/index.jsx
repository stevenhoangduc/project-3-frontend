// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar"; // Assuming you have a Navbar component
// import Footer from "../components/Footer"; // Assuming you have a Footer component
// import * as carService from "../services/carService"; // Assuming carService handles API calls

// const CarList = ({ user }) => {
//   const [cars, setCars] = useState([]);

//   useEffect(() => {
//     async function fetchCars() {
//       try {
//         const data = await carService.getAllCars(); // Fetch cars from backend
//         setCars(data);
//       } catch (err) {
//         console.error("Error fetching cars:", err);
//       }
//     }
//     fetchCars();
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <main className="car-list-container">
//         <h1>All Cars</h1>

//         {user && (
//           <Link to={`/users/${user._id}/cars/new`} className="create-post-btn">
//             Create a New Post
//           </Link>
//         )}

//         <ul className="car-list">
//           {cars.length > 0 ? (
//             cars.map((car) => (
//               <div key={car._id} className="post">
//                 <Link to={`/users/${car.user._id}/cars/${car._id}`}>
//                   <img src={car.image} width="300px" alt="Car" />
//                   <h1>{car.addText}</h1>
//                 </Link>
//                 <div>
//                   <span>
//                     <Link to={`/users/${car.user._id}/cars`}>
//                       <strong>{car.user.username}</strong>
//                     </Link>{" "}
//                     posted on {new Date(car.createdAt).toLocaleDateString()}
//                   </span>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No cars yet.</p>
//           )}
//         </ul>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default CarList;
