import React from 'react'
import Layout from '../components/Layout'
import Fetch from "isomorphic-unfetch"
import Home from '../components/Home'
import TerritoryOwner from '../components/TerritoryOwner'

const IndexPage = (props) => {
    React.useEffect(() => {
        // window is accessible here.
        console.log("window.location", window.location)
        const myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
        console.log("window.ip", myPeerConnection)


      });
  return (
    <>
      <div className="layout">
        <Layout>
          <div className="a">
            <Home />
          </div>
          <div className="">
            <TerritoryOwner
                bpi = {props.bpi}
                geo = {props.geo} 
                owner = {props.owner} 
                />
          </div>
        </Layout>
        <style jsx>{`

        `}
        </style>
      </div>

    </>
  )
}

 const getUserZip = async () => {
    const YOUR_API_KEY = 'at_NUjE2dWPdQvSehzZJt4ZYtXZRKAp1'
    // const res = await fetch(`https://geo.ipify.org/api/v1?apiKey=${YOUR_API_KEY}`)
    // const geo = await res.json()
    const geo = {
        ip: '71.196.138.81',
        location: {
          country: 'US',
          region: 'Colorado',
          city: 'Longmont',
          lat: 40.16721,
          lng: -105.10193,
          postalCode: '80501',
          timezone: '-07:00',
          geonameId: 5579276
        },
        as: {
          asn: 7922,
          name: 'Comcast',
          route: '71.192.0.0/12',
          domain: 'https://corporate.comcast.com/',
          type: 'Cable/DSL/ISP'
        },
        isp: 'Comcast Cable Communications, LLC'
      }
    console.log('geo!! ', geo)
    return geo
}

IndexPage.getInitialProps = async function(getUserzip) {
    const geo = await getUserZip()
    const res = await fetch('https://foundationrunner9.com/api/territories/owner/1')
    const owner = await res.json()
    console.log('where is the data from getInitialProps() inside Index', owner)
  
    return {
      geo: geo,
      owner: owner
    }
}



export default IndexPage
