export const sampleReq = async () => {
    const res = await fetch('https://reqres.in/api/users?page=2')
    const data = await res.json()
    console.log(data)
    return data.data
}