// src/App.jsx
import { useState, useEffect } from 'react'
import { useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router'
import NavBar from './components/NavBar/NavBar';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import Dashboard from './components/Dashboard/Dashboard';
import Landing from './components/Landing/Landing';
import CarForm from './components/CarForm/CarForm';

import CarDetails from './components/CarDetails/CarDetails';
import * as carService from './services/carService'


import { UserContext } from './contexts/UserContext';

function App() {
  const [cars, setCars] = useState([])
  const navigate = useNavigate()
  

  const { user } = useContext(UserContext)

  // navigate is a function that we can pass
  // a route path to

  useEffect(() => {

    // define and then call the function immediatly
    async function fetchCars() {
      try {

        const data = await carService.index()
        // check your work before you do anything else!
        console.log(data, ' <- data')
        // every time you update state, go to your 
        // dev tools and look at it!
        setCars(data)
      } catch (err) {
        console.log(err)
      }
    }

    // calling the function
    fetchCars()

  }, []);// empty array says run the use effect, 
  // when the components loads onto the dom

  // use case: We want all of the cars when the page loads

  // async function handleLike(props) {
  //   try {
  //     await carService.likeCar(carId);
  //     setSelectedCar((prevCar) => ({ ...prevCar, likes: prevCar.likes + 1 }));
  //   } catch (err) {
  //     console.error("Error liking post:", err);
  //   }
  // }

   async function handleAddComment(carId, formData) {
     console.log(formData)
      try {
        const newComment = await carService.addComment(carId, formData);
        const updatedCarsArray = cars.map(c => c._id == newComment._id ? newComment : c)
        setCars(updatedCarsArray)
      } catch (err) {
        console.error("Error adding comment:", err);
      }
    }
  
    async function handleDeleteComment(carId, commentId) {
      try {
        const car=await carService.deleteComment(carId, commentId);
        console.log(car)
        const filteredCarsArray = cars.filter((c) => {
          return c._id !== carId
        })
        
        setCars(filteredCarsArray)
        
       
      } catch (err) {
        console.error("Error deleting comment:", err);
      }
    }

 

  async function createCar(dataFromTheForm) {
    // lift the dataFromTheForm
    // pass this function to the form component
    // and call it when the user submits the form
    try {
      const newCar = await carService.create(dataFromTheForm)
      console.log(newCar, ' <- this is our newCar')
      setCars([...cars, newCar])
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  async function deleteCar(carIdFromCarDetails) {
    try {
      const response = await carService.deleteCar(carIdFromCarDetails)

      // one way to handle an error from the response
      if (response.err) {
        // this forces the err to go to the catch block, the arugment to new Error 
        // will be the value of err in the catch block
        throw new Error(response.err)
      }

      // update our state! filter creates a new array
      const filteredCarsArray = cars.filter((car) => {
        return car._id !== carIdFromCarDetails
      })
      // update state with the filtered array
      setCars(filteredCarsArray) // remove from the car array
    } catch (err) {
      console.log(err)
    }
  }

  async function editCar(car) {
    try {
        const response = await carService.edit(car)
        const updatedCarsArray = cars.map(c => c._id === response._id ? response : c)
        setCars(updatedCarsArray)
        console.log(response)
    } catch(err) {
      console.log(err)
    }
  }



  return (
    <div className='App'>
      <NavBar />
      <Routes>
       
        


        <Route path='/' element={user ? <Dashboard cars={cars}/> : <Landing /> } />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/sign-in' element={<SignInForm />}/>
        <Route path='/cars/:carId' element={<CarDetails deleteCar={deleteCar} cars={cars} editCar={editCar} handleAddComment={handleAddComment} handleDeleteComment={handleDeleteComment} /> } />
        <Route path='/cars/new' element={<CarForm createCar={createCar} buttonLabel='Create car' />} />
        <Route path="*" element={<h1>Nothing Here!</h1>} />
      </Routes>
    </div>
  )
}

export default App
