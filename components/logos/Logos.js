import { Grid } from "@mui/material"
import Image from "next/image"
const Contact = () => {
  return (
    <div className="bg-white px-[10rem] py-20 space-y-16">

      <h1>Our Events</h1>

      <Grid container spacing={4} className="md:px-[10rem]">
        <Grid item md={3}>
          <Image className="rounded-md" src="/img/bup.png" width={450} height={450} />
        </Grid>
        <Grid item md={3}>
          <Image className="rounded-md" src="/img/bup.png" width={450} height={450} />
        </Grid>
        <Grid item md={3}>
          <Image className="rounded-md" src="/img/bup.png" width={450} height={450} />
        </Grid>
        <Grid item md={3}>
          <Image className="rounded-md" src="/img/bup.png" width={450} height={450} />
        </Grid>
        <Grid item md={3}>
          <Image className="rounded-md" src="/img/bup.png" width={450} height={450} />
        </Grid>
        <Grid item md={3}>
          <Image className="rounded-md" src="/img/bup.png" width={450} height={450} />
        </Grid>
        <Grid item md={3}>
          <Image className="rounded-md" src="/img/bup.png" width={450} height={450} />
        </Grid>
        <Grid item md={3}>
          <Image className="rounded-md" src="/img/bup.png" width={450} height={450} />
        </Grid>
      </Grid>

    </div>
  )
}

export default Contact