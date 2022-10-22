export const sampleReq = async () => {
    const res = await fetch('https://ict-6.vercel.app/api/auth')
    const data = await res.json()
    return data
}

export const signup = async (username, email, password, phone, country, city) => {
    
    const res = await fetch ('https://ict-6.vercel.app/api/auth/register',{
    
    //Define method
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({
        username, 
        email, 
        password,
        phone, 
        country, 
        city
    }),
     
    // Adding headers to the request
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    })

    const data = await res.json()

    console.log(data)

    return data

}

export const signin = async (email, password) => {
    const res = await fetch ('https://ict-6.vercel.app/api/auth/login',{
    
    //Define method
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({
        email, 
        password,
    }),
     
    // Adding headers to the request
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    })

    const data = await res.json()

    console.log(data)

    return data
}

export const postPub = async (title, author, published, journal, url) => {
    const res = await fetch ('https://ict-6.vercel.app/api/publications',{
    
    //Define method
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({
        title, author, published, journal, url
    }),
     
    // Adding headers to the request
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    })

    const data = await res.json()

    console.log(data)

    return data
}

export const postNotice = async (title, message, regards, batch, date) => {
    const res = await fetch ('https://ict-6.vercel.app/api/notice',{
    
    //Define method
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({
        title, message, regards, batch, date
    }),
     
    // Adding headers to the request
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    })

    const data = await res.json()

    console.log(data)

    return data
}