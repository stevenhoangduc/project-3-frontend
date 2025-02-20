import { useNavigate, useParams } from "react-router"
import { Navigate } from "react-router"


export default function CarDetail(props){

    
    const { carId } = useParams()
    const navigate = useNavigate()

    const selectedCar = props.cars.find((car) => {
        return car._id === carId
    })  

    function handleDelete(){
        props.deleteCar(selectedCar._id)
        navigate('/')
      

    return (
        <section>
            <h2>{selectedCar.name}</h2>
            <span>Brand: {selectedCar.brand}</span>
            <br />
            <span>Model: {selectedCar.model}</span>
            <br />
            <pan>Year: {selectedCar.year}</pan>
            <button onClick={handleDelete}>Delete</button>
            <br />
        </section>
    )
}}