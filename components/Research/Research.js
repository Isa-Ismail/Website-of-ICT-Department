import { Button } from '@mui/material'
import Image from 'next/image'
import research from '../../public/img/research.png'

const Research = () => {
  return (
    <div className="research">
      <div className="flex justify-evenly items-center flex-wrap p-20">
        <div>

          <div className="md:w-[600px] space-y-10">
            <h1 className="text-white text-[3rem]">Our Research Community</h1>
            <p className="text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <Button className="p-4" color="success" variant='outlined'>Learn More</Button>
          </div>

        </div>
        <div>
          <Image className="rounded-md" src={research} />
        </div>
      </div>
    </div>
  )
}

export default Research