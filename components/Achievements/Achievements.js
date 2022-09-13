import Image from "next/image"
import sir from "../../public/img/sir.png"
import volley from "../../public/img/volley.png"
import tech from "../../public/img/tech.png"
import faizur from "../../public//img/faizur.png"
const Contact = () => {
  return (
    <div className="md:flex md:justify-evenly bg-white p-10 items-center">
        <div className="space-x-10 md:flex">
          <div className="md:w-[600px] space-y-10">
            <h1 className="text-[#0B3954]">Our achievements</h1>
            <p className="text-[#0B3954]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
              It has survived not only five centuries,
              but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
            <button className="bg-[#0B3954] rounded-lg p-5 text-white">Learn More</button>
          </div>
          <div className="flex flex-col">
            <div>
              <Image src={sir} height={300} width={350} />
            </div>
            <div>
              <Image className="rounded-lg" src={volley} height={300} width={350} />
            </div>
          </div>
          <div>
            <Image className="rounded-lg" src={faizur} height={600} width={500} />
          </div>
        </div>
    </div>
  )
}

export default Contact