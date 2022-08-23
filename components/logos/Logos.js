import { Grid } from "@mui/material"
import Image from "next/image"
const Contact = () => {
  return (
    <div className="bg-white px-[10rem] py-20 space-y-16">

      <h1>Things to do during a disaster</h1>

      <Grid container spacing={4} className="md:px-[10rem]">
        <Grid item md={3}>
          <Image className="rounded-md" src="/floodLanding.jpg" width={450} height={450} />
        </Grid>
        <Grid item md={3}>
          <Image className="rounded-md" src="/floodLanding.jpg" width={450} height={450} />
        </Grid>
        <Grid item md={3}>
          <Image className="rounded-md" src="/floodLanding.jpg" width={450} height={450} />
        </Grid>
        <Grid item md={3}>
          <Image className="rounded-md" src="/floodLanding.jpg" width={450} height={450} />
        </Grid>
        <Grid item md={3}>
          <Image className="rounded-md" src="/floodLanding.jpg" width={450} height={450} />
        </Grid>
        <Grid item md={3}>
          <Image className="rounded-md" src="/floodLanding.jpg" width={450} height={450} />
        </Grid>
        <Grid item md={3}>
          <Image className="rounded-md" src="/floodLanding.jpg" width={450} height={450} />
        </Grid>
        <Grid item md={3}>
          <Image className="rounded-md" src="/floodLanding.jpg" width={450} height={450} />
        </Grid>
      </Grid>

      <h1>Ongoing Disasters</h1>

    </div>
  )
}

export default Contact