import './Carlist.css'
import { Link } from 'react-router'

export default function CarList(props){

    const carLis = props.pets.map((car) => {
        return (
        <li key={car._id} >
            <Link to={`/cars/${car._id}`}>{car.brand}</Link>
        </li>
        )
    })

    return (
        <section className={'car-list'}>
            <h1>Car List</h1>
            {carLis.length !== 0 ? (
                <ul>
                    {carLis}
                    <CarList setSelectedCar={setSelectedCar} cars={cars} handleFormOpen={handleFormOpen} buttonTextForForm={buttonTextForForm} />
                </ul>
            ) : (
                <h2>No Cars yet!</h2>
            )}
        </section>
    )
}
