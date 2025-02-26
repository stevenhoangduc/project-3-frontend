
// THIS PAGE HANDLES likes and comments


import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import * as carService from "../../services/carService";
import "./CarComments.css";


const CarComments = ({car, handleLike, handleAddComment, handleDeleteComment}) => {
    
  const [comment, setComment] = useState("");


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
            placeholder="comment"
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
