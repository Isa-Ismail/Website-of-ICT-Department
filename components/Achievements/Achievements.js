import Image from "next/image"
import sir from "../../public/img/sir.png"
import volley from "../../public/img/volley.png"
import faizur from "../../public//img/faizur.png"
import { Button } from "@mui/material"
const Contact = () => {
  return (
    <div className="md:flex md:justify-evenly bg-white p-10 items-center">
        <div className="space-x-4 space-y-4 flex flex-wrap">
          <div className="md:w-[600px] space-y-4">
            <h1 className="text-[#0B3954] text-[3rem]">Our achievements</h1>
            <p className="text-[#0B3954]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
              It has survived not only five centuries,
              but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
            <Button className="p-4" variant="outlined" color="success">Learn More</Button>
          </div>
          <div className="flex flex-col">
            <div>
              <Image src={sir} height={300} width={300} />
            </div>
            <div>
              <Image className="rounded-lg" src={volley} height={200} width={300} />
            </div>
          </div>
          <div>
            <Image className="rounded-lg" src={faizur} height={500} width={350} />
          </div>
        </div>
    </div>
  )
}

export default Contact