// import { useState, useEffect } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar"; // Navbar component
// import Footer from "../components/Footer"; // Footer component
// import * as carService from "../services/carService"; // Service handling API requests

// const CarDetails = ({ user }) => {
//   const { carId } = useParams(); // Get carId from URL
//   const navigate = useNavigate();
//   const [car, setCar] = useState(null);
//   const [commentText, setCommentText] = useState("");

//   useEffect(() => {
//     async function fetchCarDetails() {
//       try {
//         const data = await carService.getCar(carId);
//         setCar(data);
//       } catch (err) {
//         console.error("Error fetching car details:", err);
//       }
//     }
//     fetchCarDetails();
//   }, [carId]);

//   async function handleLike() {
//     try {
//       await carService.likeCar(carId);
//       setCar((prevCar) => ({ ...prevCar, likes: prevCar.likes + 1 }));
//     } catch (err) {
//       console.error("Error liking post:", err);
//     }
//   }

//   async function handleAddComment(e) {
//     e.preventDefault();
//     try {
//       const newComment = await carService.addComment(carId, commentText);
//       setCar((prevCar) => ({
//         ...prevCar,
//         comments: [...prevCar.comments, newComment],
//       }));
//       setCommentText("");
//     } catch (err) {
//       console.error("Error adding comment:", err);
//     }
//   }

//   async function handleDeleteComment(commentId) {
//     try {
//       await carService.deleteComment(carId, commentId);
//       setCar((prevCar) => ({
//         ...prevCar,
//         comments: prevCar.comments.filter((comment) => comment._id !== commentId),
//       }));
//     } catch (err) {
//       console.error("Error deleting comment:", err);
//     }
//   }

//   async function handleDeletePost() {
//     try {
//       await carService.deleteCar(carId);
//       navigate("/cars");
//     } catch (err) {
//       console.error("Error deleting post:", err);
//     }
//   }

//   if (!car) return <h1>Loading...</h1>;

//   return (
//     <div>
//       <Navbar />
//       <main className="car-details-container">
//         <div className="post">
//           <img src={car.image} width="300px" alt="Car" />
//           <h1>{car.addText}</h1>
//         </div>

//         {/* Likes Section */}
//         <div className="like">
//           <p>Likes: {car.likes || 0}</p>
//           <button onClick={handleLike}>Like this post</button>
//         </div>

//         {/* Comment Form */}
//         <div className="comment-form">
//           <form onSubmit={handleAddComment}>
//             <input
//               type="text"
//               value={commentText}
//               onChange={(e) => setCommentText(e.target.value)}
//               placeholder="Add a comment"
//               required
//             />
//             <button type="submit">Add Comment</button>
//           </form>
//         </div>

//         {/* Comments Section */}
//         {car.comments.length > 0 ? (
//           car.comments.map((comment) => (
//             <div key={comment._id}>
//               <p>{comment.text}</p>
//               <span>
//                 <Link to={`/users/${comment.user._id}/cars`}>
//                   <strong>{comment.user.username}</strong>
//                 </Link>{" "}
//                 posted on {new Date(car.createdAt).toLocaleDateString()}
//               </span>
//               {user && user._id === comment.user._id && (
//                 <button onClick={() => handleDeleteComment(comment._id)}>Delete Comment</button>
//               )}
//             </div>
//           ))
//         ) : (
//           <p>No comments yet.</p>
//         )}

//         {/* Edit/Delete Buttons (Only if the post belongs to the user) */}
//         {user && user._id === car.user._id && (
//           <div>
//             <Link to={`/users/${user._id}/cars/${carId}/edit`}>Edit</Link>
//             <button onClick={handleDeletePost}>Delete this post</button>
//           </div>
//         )}
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default CarDetails;
