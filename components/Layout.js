import Head from "next/head"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children, title, description }) => {
    return (
        <div>

            <Head>
                <title>{title ? `${title}` : `custom title`}</title>
                {description && <meta name="description" content={description}></meta>}
                <link rel="icon" href="/img/bup.png" />
            </Head>

            <Navbar />

            <main className="min-h-screen">
                {children}
            </main>

            <Footer />


        </div>
    )
}

export default Layout