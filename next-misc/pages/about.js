import Head from 'next/head'
import Footer from '@/layout/Footer'
function About() {
    return(
        <>
        <Head>
            <title>About Codevolution</title>
            <meta name='description' content='Free tutorials on web development'/>
        </Head>
        <h1 className="content">About</h1>
    </>
    )
}

export default About

About.getLayout = function PageLayout(page){
    return (
        <>
            {page}
            <Footer/>
        </>
    )
}
