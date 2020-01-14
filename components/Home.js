import TerritoryOwner from './TerritoryOwner.js'

const Home = () => {
    const background = require(`./images/roofer1-background.png`)
    return(
        <div>

            <div className="">
                <img className="background" src={background} />
            </div>


            
            <style jsx>{`

                .background {
                    width:100%;
                }

            `}</style>
        </div>
    )
}


export default Home