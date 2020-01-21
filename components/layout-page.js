import Navbar from './navbar';
import Head from 'next/head'

const layout = (props) => (

    <div>
        <Head>
            <title>BTC Kur Bilgisi</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css" />

        </Head>
        <Navbar />
        <div className="container">
            {props.children}
        </div>
    </div>
)

export default layout;