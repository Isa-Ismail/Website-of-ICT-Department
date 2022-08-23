import { useContext } from "react"
import { Store } from "../../utils/store"

const Banner = ({pass}) => {
  //const api = fetch('http://localhost:8000/api/blogs').then(res=>res.json()).then(data=> console.log(data))
  console.log(pass)
  const {state, dispatch} = useContext(Store)

  const clickHandler = async () => {
    //fetch('https://reqres.in/api/users?page=2').then(res => res.json()).then((data)=> {console.log(data);setFood(data.data[0])})
    dispatch({type:'SAMPLE', payload: pass})
    console.log(state)
  }

  return (
    <div className="flex-col w-[100%] py-[18rem] h-screen">

        <div className="pb-6">
          <h1 className="text-center text-[3rem] text-white">Department of ICT, BUP</h1>
        </div>

        <div>
          <p className="text-center text-white">
            Find the latest news, in-depth stories, Q&A and FAQs about our department here.
          </p>
        </div>

        <div className="flex justify-center px-6 py-20 space-x-10">
          <button onClick={clickHandler} className="px-5 py-2 bg-green-700 rounded-md hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."><p className="text-white sm:text-[.9rem]">Get Aid</p></button>
          <button className="px-5 py-2 bg-green-700 rounded-md hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."><p className="text-white sm:text-[.9rem]">Donate</p></button>
          <button className="px-5 py-2 bg-green-700 rounded-md hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."><p className="text-white sm:text-[.9rem]">Get Involved</p></button>
        </div>

    </div>
  )
}

export default Banner