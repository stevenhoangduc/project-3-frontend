// import { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import Navbar from "../components/Navbar"; // Import Navbar component
// import Footer from "../components/Footer"; // Import Footer component
// import * as carService from "../services/carService"; // Service handling API requests

// const UserCars = () => {
//   const { userId } = useParams(); // Get userId from the URL
//   const [owner, setOwner] = useState(null);
//   const [cars, setCars] = useState([]);

//   useEffect(() => {
//     async function fetchUserCars() {
//       try {
//         const data = await carService.getUserCars(userId); // Fetch user's cars
//         setOwner(data.owner);
//         setCars(data.cars);
//       } catch (err) {
//         console.error("Error fetching user's cars:", err);
//       }
//     }
//     fetchUserCars();
//   }, [userId]);

//   return (
//     <div>
//       <Navbar />
//       <main className="profile">
//         {owner ? <h1>{owner.username}'s Cars</h1> : <h1>Loading...</h1>}

//         {cars.length > 0 ? (
//           cars.map((car) => (
//             <div key={car._id} className="post">
//               <Link to={`/users/${car.user._id}/cars/${car._id}`}>
//                 <img src={car.image} width="300px" alt="Car" />
//                 <h1>{car.addText}</h1>
//               </Link>
//             </div>
//           ))
//         ) : (
//           <p>No cars yet.</p>
//         )}
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default UserCars;
