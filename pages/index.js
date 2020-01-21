import Layout from '../components/layout-page';
import fetch from 'isomorphic-unfetch'
import Kurlar from '../components/Kurlar'

const Icerik = (props) => (
    <Layout>
        <div>
            <h1>BTC Kur Web uygulamasına hoşgeldiniz!</h1>
            {console.log(props.bpi)}
            
            <Kurlar bpi={props.bpi} />
        </div>

    </Layout>


);

Icerik.getInitialProps = async function() {
    const response = await fetch 
    ("https://api.coindesk.com/v1/bpi/currentprice.json");
    const data = await response.json();
    return {
        bpi : data.bpi
    }
}

export default Icerik;