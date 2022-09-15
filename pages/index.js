import Layout from '../components/Layout'
import Banner from '../components/Hero/Banner'
import Achievements from '../components/Achievements/Achievements'
import Programs from '../components/Programs/Programs'
import { sampleReq } from '../utils/fetcher'
import Research from '../components/Research/Research'

const Home = ({data}) => {
    
    return(
        <>
            <Layout description="Website of ICT" title="ICT">             
                <Banner pass = {data}/>   
                <Achievements />
                <Programs />
                <Research />
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