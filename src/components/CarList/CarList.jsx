import './Carlist.css'
import { Link } from 'react-router'




export default function CarList(props) {
    const carLis = props.car.map((car) => {
      //returning a list of tracks using the track iD and the .map method
      return (
        <li key={car._id} onClick={() => props.setCar(car)}>
          {car.brand}: {car.model}: {car.year}
        </li>
      );
    });
  
    return (
      <section>
        <h1>Car List</h1>
        {carLis.length !== 0 ? ( //If the tracklist has something in the Array...
          <ul>{carLis}</ul>
        ) : (
          <h2>No Cars yet!</h2> // ^ Log the tracks if there isn't any tracks to log, respond with message listed.
        )}
      </section>
    );
  }

// export default function CarList(props){

//     const carLis = props.cars.map((car) => {
//         return (
//         <li key={car._id} onClick={() => props.setSelectedCar(car)} >
//             <Link to={`/cars/${car._id}`}>{car.brand}</Link>
//         </li>
//         )
//     })

//     return (
//         <section className={'car-list'}>
//             <h1>Car List</h1>
//             {carLis.length !== 0 ? (
//                 <ul>
//                     {carLis}
//                 </ul>
//             ) : (
//                 <h2>No Cars yet!</h2>
//             )}
//         </section>
//     )
// }
