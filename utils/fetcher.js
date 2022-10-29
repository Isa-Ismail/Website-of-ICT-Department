export const sampleReq = async () => {
    const res = await fetch('https://ict-6.vercel.app/api/auth')
    const data = await res.json()
    return data
}

export const signup = async (username, email, password, phone, country, city, designation) => {
    
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
        city,
        designation
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

export const postPub = async (title, author, url, journal, published, userId, researchType) => {
    const res = await fetch ('https://ict-6.vercel.app/api/publications',{
    
    //Define method
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({
        title, author, published, journal, url, userId, researchType
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

export const postNotice = async (title, message, regards, batch, date, userId) => {
    const res = await fetch ('https://ict-6.vercel.app/api/notice',{
    
    //Define method
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({
        title, message, regards, batch, date, userId
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