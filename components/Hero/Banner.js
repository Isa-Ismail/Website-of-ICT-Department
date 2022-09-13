import { useContext } from "react"
import { Store } from "../../utils/store"
import CardComponent from "./Card"
import Typewriter from 'typewriter-effect'


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
    <div className="md:flex px-10 justify-evenly items-center w-[100%] pt-[12rem] min-h-screen">

        <div className="space-y-10">
          <h1 className="text-white">
          <Typewriter
              options={{
              cursor: '',
              delay: 40,
              deleteSpeed: 40,
              pauseFor: 5000,
              strings: ['Welcome to'],
              autoStart: true,
              loop: true,
            }}
          />
          <Typewriter
              options={{
              cursor: '',
              delay: 40,
              deleteSpeed: 40,
              pauseFor: 5000,
              strings: ['Department of'],
              autoStart: true,
              loop: true,
            }}
          />
          <Typewriter
              options={{
              cursor: '',
              delay: 40,
              deleteSpeed: 40,
              pauseFor: 5000,
              strings: ['ICT'],
              autoStart: true,
              loop: true,
            }}
          />
          </h1>
          <h2>
            Find the latest news, in-depth stories, <br /> Q&A and FAQs about our department here
          </h2>
        </div>

        <div className="flex-col justify-center px-6 py-20 space-y-10 md:block">
          <div>
              <img className="h-[20rem] w-[30rem] rounded-md" src="/img/self.jpg" alt="bup" />
          </div>
          <div className="sm:hidden md:flex space-x-10">
              <img className="h-[15rem] w-[15rem] rounded-md" src="/img/dean.png" alt="bup" />
              <img className="h-[15rem] w-[15rem] rounded-md" src="/img/champ.jpg" alt="bup" />
          </div>
        </div>

    </div>
  )
}

export default Banner