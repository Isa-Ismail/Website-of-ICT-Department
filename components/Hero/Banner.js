import { useContext } from "react"
import { Store } from "../../utils/store"
import Typewriter from 'typewriter-effect'


const Banner = () => {

  //const api = fetch('https://ict-6.vercel.app/api/auth').then(res=>res.json()).then(data=> console.log(data))

  const {state, dispatch} = useContext(Store)
  console.log(state)

  return (
    <div className="md:flex px-10 justify-evenly items-center w-[100%] pt-[8rem] min-h-screen">

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

        <div className="flex-col justify-center px-6 py-20 space-y-2 md:block">
          <div>
              <img className="h-[18rem] w-[30rem] rounded-md" src="/img/self.jpg" alt="bup" />
          </div>
          <div className="sm:hidden md:flex space-x-2">
              <img className="h-[15rem] w-[15rem] rounded-md" src="/img/dean.png" alt="bup" />
              <img className="h-[15rem] w-[15rem] rounded-md" src="/img/champ.jpg" alt="bup" />
          </div>
        </div>

    </div>
  )
}

export default Banner