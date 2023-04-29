import Layout from '../components/Layout'
import Banner from '../components/Hero/Banner'
import Achievements from '../components/Achievements/Achievements'
import Programs from '../components/Programs/Programs'
import { sampleReq } from '../utils/fetcher'
import Research from '../components/Research/Research'
import { Store } from '../utils/store'
import { useContext, useEffect } from 'react'
import NoticeHome from './../components/Notice/NoticeHome'
import Chart from '../components/Chart/Chart'
import Header from '../components/Header'

const Home = ({ data }) => {

    const { state, dispatch } = useContext(Store)
    useEffect(() => {
        dispatch({ type: 'LOAD', payload: data })
    }, [])

    return (
        <>
            <Layout description="Website of ICT" title="ICT">
                <NoticeHome />
                <Chart />
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
