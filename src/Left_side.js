import './App.css';
import twitter from './icon/twitter.svg';
import house from './icon/house.png';
import search from './icon/search.svg';
import bell from './icon/bell.png';
import msg from './icon/msg.png';
import verifi from './icon/verifi.png';
import profile from './icon/profile.png';
import more from './icon/more.png';
import tweet from './icon/tweet-snip.png';
import account from './icon/account1.png';


function Left_side() {
    return (


        <div className="container" id={"left_side"}>
            <div className="row">
                <div className={"col-sm-2"}>
                    <div className="row" > {/*row start */}
                        <ul type="none">
                            <li><img src={twitter} className="App-logo"/></li>
                            <li> <img src={house} className="App-logo"/></li>
                            <li><img src={search} className="App-logo"/></li>
                            <li> <img src={bell} className="App-logo"/></li>
                            <li><img src={msg} className="App-logo"/></li>
                            <li> <img src={verifi} className="App-logo"/></li>
                            <li> <img src={profile} className="App-logo"/></li>
                            <li> <img src={more} className="App-logo"/></li>
                            <li><img src={tweet} className="tweets"/></li>
                            {/*<li> <img src={account} className="account"/></li>*/}
                        </ul>

                    </div> {/*row  end*/}

                </div> {/*col 1 end*/}

                {/*<div className="col-5"> /!*col 2 start *!/*/}
                {/*    <div></div>*/}


                {/*</div> /!*col 2 end*!/*/}
                {/*<div className="col-5 border border-primary">/!* col 3  start *!/*/}


                {/*</div>/!* col 3  end*!/*/}




            </div> {/* main row end*/}

            <div>
                <div className={"col"}> <img src={account} className="account"/></div>
            </div>
        </div>

    );
}






export default Left_side;
