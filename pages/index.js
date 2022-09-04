import Layout from '../components/Layout'
import Banner from '../components/Hero/Banner'
import Logos from '../components/logos/Logos'
import Slide from '../components/Slides/Slides'
import { sampleReq } from '../utils/fetcher'

const Home = ({data}) => {
    
    return(
        <>
            <Layout description="Website of ICT" title="ICT">             
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