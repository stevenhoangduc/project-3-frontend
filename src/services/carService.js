

const BASE_URL =  `${import.meta.env.VITE_BACK_END_SERVER_URL}/cars`



async function create(formData){
   

    try {
        const response = await fetch(BASE_URL, {
            // specify http method
            method: 'POST',
            // specify headers to tell the express server
            // we are sending json
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json'
            },
            // body is the data we are sending to the server
            // wrap it in json
            body: JSON.stringify(formData)
        })

        const data = await response.json()
        return data

    } catch(err){
        console.log(err)
    }

}


const index = async () => {
    try {
      // Change the fetch request so that it includes the Authorization header

      // EXAMPLE OF MAKING A REQUEST AFTER YOU ARE LOGGED IN, 
      // ALL LOGGED REQUEST MUST HAVE THE AUTHORIZATION HEADER
      const res = await fetch(BASE_URL, {
        headers: { 
            Authorization: `Bearer ${localStorage.getItem('token')}` 
        },
      });
  
      const data = await res.json();
  
      if (data.err) {
        throw new Error(data.err);
      }
  
      return data
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  };


async function deleteCar(id){
    try {
        const response = await fetch(BASE_URL + `/${id}`, {
            method: 'DELETE',
            headers: { 
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        })
        
        const data = await response.json()
        return data
    } catch(err){
        console.log(err)
    }
}


async function edit(car){
    console.log(car)
    try {
        const response = await fetch(`${BASE_URL}/${car._id}`, {
            method: 'PUT',
            headers: { 
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type" : "application/json" 
            },
            body: JSON.stringify(car)

        })

        const data = await response.json()
        return data
    } catch(err) {
        console.log(err)
    }
}



export { create, index, deleteCar, edit }
