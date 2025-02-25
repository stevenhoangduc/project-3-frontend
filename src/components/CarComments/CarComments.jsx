
// THIS PAGE HANDLES likes and comments


import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import * as carService from "../../services/carService";

const CarComments = ({car, handleLike, handleAddComment, handleDeleteComment}) => {
    
  
 
  const [comment, setComment] = useState("");

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
//       setSelectedCar((prevCar) => ({
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
//       setSelectedCar((prevCar) => ({
//         ...prevCar,
//         comments: prevCar.comments.filter((comment) => comment._id !== commentId),
//       }));
//     } catch (err) {
//       console.error("Error deleting comment:", err);
//     }
//   }

//   if (!car) return <h1>Loading...</h1>;
function handleSubmit(e) {
    e.preventDefault()
    handleAddComment(car._id, comment)
}
  return (
    <div>
      

      <div>
        <form onSubmit={ handleSubmit}>
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment"
            required
          />
          <button type="submit">Add Comment</button>
        </form>
      </div>

      {car.comments.length > 0 ? (
        car.comments.map((comment) => (
          <div key={comment._id}>
            <p>{comment.comment}</p>
            <strong>{comment.user}</strong>
            {/* {user && user._id === comment.user._id && ( */}
              <button onClick={() => handleDeleteComment(car._id, comment._id)}>Delete Comment</button>
            {/* )} */}
          </div>
        ))
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
};

export default CarComments;
