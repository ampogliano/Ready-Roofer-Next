
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
                    <div className="col-9">
                        <div className="container">
                            <div className="row float-right pt-4 mt-4">
                                map
                            </div>
                            <div className="float-right pt-4 mt-4">
                                phone
                            </div>
                            <div className=" float-right pt-4 mt-4">
                                email
                            </div>
                        </div>

                    </div>
        {/* left column ends, right column begins */}
                    <div className="col-3 p-4">
                        <div className="row-fluid p-2">
                            <div className="p-2 owner-photo">
                                Photo Goes Here
                            </div>
                        </div>
                        <div className="row d-block mr-1 mt-4 p-2 owner-text">
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
                        height: 30vw;
                        width: 100%;
                        background-color:#ff9933;
                        opacity: .8;
                        float: right;
                        margin-top: -30vw;

                    }
                    .clipbox {
                        clip-path: polygon(
                            25% 100%, /* left bottom*/ 
                            75% 0%, /*left top*/
                            100% 0%, /* right top */
                            100% 100% /* right bottom */
                        );
                    }
                    .owner-text {
                        font-size: 1vw;
                        border-style: solid;
                        border-width: .2vw;
                        
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
