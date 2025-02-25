
import { useState } from 'react'
import './CarForm.css'


import { useNavigate } from 'react-router'

const initialState = {
    brand: '',
    year: 0,
    model: '',
    image: ''
}

export default function CarForm(props) {

    const [formData, setFormData] = useState(props.car ? props.car : initialState)

    const navigate = useNavigate()

    function handleChange(e) {
        console.log(e.target.value)

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
        props.car ? props.submitEditedForm(formData) : props.createCar(formData)
        setFormData(initialState)

        
    }

    return (
        <form className='car-form' onSubmit={handleSubmit}>

            <label htmlFor="image">Image:</label>
            <input type="text" name='image' id='image' value={formData.image} onChange={handleChange} />

            <label htmlFor="brand">Make:</label>
            <input type="text" name='brand' id='brand' value={formData.brand} onChange={handleChange} />

            <label htmlFor="model">Model:</label>
            <input type="text" name='model' id='model' value={formData.model} onChange={handleChange} />

            <label htmlFor="year">Year:</label>
            <input type="text" name='year' id='year' value={formData.year} onChange={handleChange} />



            <button type='submit'>{props.buttonLabel}</button>
        </form>
    )
}
