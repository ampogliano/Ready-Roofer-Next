import Fetch from "isomorphic-unfetch"
import Layout from "../components/Layout"
import Prices from "../components/Prices"



const TutorialIndex = (props) => (
    <Layout>
    {console.log('Index props:: ', props)}
        <div className="py-4">
            <h1 className="py-4">
                Hello, Next.js!!!!!
            </h1>
            <p>Check Current Bitcoin Rate.</p>
            <Prices bpi = {props.bpi} />
        </div>
    </Layout>
)

TutorialIndex.getInitialProps = async function() {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();
    console.log('here is the data from getInitialProps() inside Index', data)
  
    return {
      bpi: data.bpi
    }
}

export default TutorialIndex