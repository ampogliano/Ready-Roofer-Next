const Footer = (props) => {
    return(
        <div>
            <div className="background">
                <div className="frame clipbox">
                    
                </div>
            </div>


            
            <style jsx>{`
                .background {
                    width:100%;
                    background-color:#ff9933;
                    opacity: .85;
                    border-style: solid;
                    border-color: white;
                    border-width: .1rem;
                }
                .frame {
                    height: 15vw;
                    width: 100%;
                    background-color:black;
                }
                .clipbox {
                    clip-path: polygon(
                        0% 100%, /* left bottom*/ 
                        30% 0%, /*left top*/
                        100% 0%, /* right top */
                        100% 100% /* right bottom */
                    );
                }
            `}</style>
        </div>
    )
}


export default Footer