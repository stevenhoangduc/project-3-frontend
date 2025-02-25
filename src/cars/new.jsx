// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar"; // Import Navbar
// import Footer from "../components/Footer"; // Import Footer
// import * as carService from "../services/carService"; // Service handling API requests

// const NewCar = ({ user }) => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     image: "",
//     addText: "",
//   });

//   function handleChange(e) {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     try {
//       await carService.createCar(user._id, formData); // API call to create a car post
//       navigate("/cars"); // Redirect after successful creation
//     } catch (err) {
//       console.error("Error creating car post:", err);
//     }
//   }

//   return (
//     <div>
//       <Navbar />
//       <main className="new-car-container">
//         <h1>Add a New Post</h1>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="image">Image:</label>
//           <input
//             type="text"
//             name="image"
//             id="image"
//             value={formData.image}
//             onChange={handleChange}
//             required
//           />

//           <label htmlFor="addText">Add Text:</label>
//           <input
//             type="text"
//             name="addText"
//             id="addText"
//             value={formData.addText}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit">Create Post</button>
//         </form>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default NewCar;
