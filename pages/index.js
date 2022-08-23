import Layout from '../components/Layout'
import Banner from '../components/Hero/Banner'
import Logos from '../components/logos/Logos'
import Slide from '../components/Slides/Slides'
import { sampleReq } from '../utils/fetcher'

const Home = ({data}) => {
    console.log({data})
    
    return(
        <>
            <Layout description="Disaster Resistance Platform" title="DivoAid">             
                <Banner pass = {data}/>   
                <Logos />
                <Slide />
            </Layout>
        </>
    )
}

export const getStaticProps = async () => {
    
    return {
        props: {
            data: await sampleReq(),
        }
    }
}

export default Home