
class TerritoryOwner extends React.Component {

    state = {
        owner: {}
    }

    render(){
       console.log('Territory props', this.props)
       const owner = this.props.owner.users
       const geo = this.props.geo
        return (
            <div className="frame clipbox">
                <div className="row text-white">
                    <div className="col-5"></div>

                    <div className="col-1">
                        <div className="row pl-4 pt-4 mt-2 mr-4">
                            <div className="row pt-4 pb-4 mt-1 mb-4">
                                map
                            </div>
                        </div>
                        <div className="row">
                            <div className="row pt-4 mt-4">
                                phone
                            </div>
                        </div>
                        <div className="row py-4">
                            <div className="row pt-1 mt-1">
                                email
                            </div>
                        </div>
                    </div>
        {/* left column ends, right column begins */}
                    <div className="col-3 pr-3">
                        <div className="row-fluid p-2">
                            <div className="p-2 owner-photo">
                                Photo Goes Here
                            </div>
                        </div>
                        <div className="row d-block font-weight-bold mr-2 mb-2 p-2 owner-text">
                            <div className="row mx-auto">
                               {owner.owner_first_name} {owner.owner_last_name}
                            </div>
                            <div className="row mx-auto">
                                Independent Territory Owner
                            </div>
                            <div className="row mx-auto">
                                Serving: {geo.location.city}, {geo.location.region}
                            </div>
                            {owner.address ?
                            <div> 
                                <div>
                                    Office: {owner.address} 
                                </div>
                                <div className="row ml-3 pl-4">
                                    {owner.general_location}
                                </div>
                            </div>
                                : 
                                <div></div>
                            }
                            {owner.phone_number ? 
                                <div>
                                    Phone: {owner.phone_number}
                                </div>
                                : 
                                <div>blah</div>
                            }
                            
                        </div>

                    </div>
                </div>
                <style jsx>{`
                    .frame {
                        height: 25vw;
                        width: 100%;
                        background-color:#ff9933;
                        opacity: .85;
                        float: right;
                        margin-top: -30vw;

                    }
                    .clipbox {
                        clip-path: polygon(
                            30% 100%, /* left bottom*/ 
                            75% 0%, /*left top*/
                            100% 0%, /* right top */
                            100% 100% /* right bottom */
                        );
                    }
                    .owner-text {
                        font-size: 1.2vw;
                        border-style: solid;
                        border-width: .2vw;
                        // text-shadow: 1px 1px 2px #000000;
                        
                    }
                    .owner-photo{
                        height: 12vw;
                        border-style: solid;
                        border-width: .2vw;
                        
                    }



                `}</style>
            </div>
         )
    }
}
export default TerritoryOwner
