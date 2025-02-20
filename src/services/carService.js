

const BASE_URL =  `${import.meta.env.VITE_BACK_END_SERVER_URL}/cars`


async function create(formData){

    try {
        const response = await fetch(BASE_URL, {
            // specify http method
            method: 'POST',
            // specify headers to tell the express server
            // we are sending json
            headers: {
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

export { create }