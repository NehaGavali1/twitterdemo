
import './App.css';
import twitter from "./icon/twitter.svg";

import account from "./icon/account1.png";
import gif from './icon/gif.png';
import flipkart from './icon/flipkart-icon.ico';
import star from './icon/star_mark.svg';
import w3scube from './icon/w3scube.png';
import './Following';
import './For_you';



function Following() {

    return (
        <div className="container border">
            <a className="navbar-brand text-start fs-3" href="#"><b>Home</b></a>
            <nav id="navbar-example2" className="navbar">
                <div className="row w-100 m-auto" >{/* row start*/}
                    <div className="col-sm text-center w-100" id={"hover"}>{/* col start*/}
                        <ul className="nav nav-underline p-1" id={"underline"}>
                            <li className="nav-item text-center" >
                                <a className="nav-link" id={"for"} href="#scrollspyHeading1"
                                   href="For_you.js">For you</a>
                            </li>
                        </ul>
                    </div>{/* col end*/}
                    <div className="col-sm text-center w-100" id={"hover"}>{/* col start*/}
                        <ul className="nav nav-underline p-1">
                            <li className="nav-item text-center" >
                                <a className="nav-link" id={"for"} href="#scrollspyHeading2" href="Following.js">
                                   Following </a>
                            </li>
                        </ul>

                    </div>{/* col end*/}
                </div>{/* row end*/}
            </nav>

            <div className="container">
                <div className="col-sm-6 w-100 border">
                    <form className="input" role="search">
                        <img src={account} className="account"/>
                        <input className="input" type="text" placeholder="what is happening!?">
                        </input>
                    </form>
                </div>
            </div>
                    <br/><br/><br/><br/>
                <div className="container">
                    <div className="col-sm-6 w-100 border">
                    <ul className="icon">
                        <i className="bi bi-card-image" id={"image"}></i>
                        <i className="bi bi-card-image" id={"image"}></i>
                        <i className="bi bi-card-image" id={"image"}></i>
                        <i className="bi bi-emoji-smile" id={"image"}></i>
                        <i className="bi bi-geo-alt" id={"image"}></i>
                        <i><button type="button" className="btn btn-info text-white  fs-6 rounded-pill " id={"button"}>Tweet</button></i>

                    </ul>

                </div>
                </div>


            <hr/>
            <div className="col text-info text-center ">show 56 Tweets</div>
            <hr/>
            <div id={"select"} >
                <div className="clearfix">
                    <img src={twitter} className="flipkart"/>
                    <div id={"inline"}><b>flipkartsupport</b>&nbsp;
                        <img src={twitter} className="gif"/>&nbsp;
                        <img src={star} className="gif"/>
                        <span className={"text_comment"}>flipkartsupport .4h</span>
                        <div className="dot">...</div>
                    </div>

                </div>

                <div className={"para"}>
                    <span className="highlight"> RT@bajpani</span>&nbsp;
                    I am facing problem from one month but no one is ready to listen in flipkart After delivering my broken washing machine returns are not being given daily date is being given no one listens</div>

                <div className="col-sm-6 w-75 m-auto shadow-lg" id="youtube">
                    <iframe  src="https://www.youtube.com/embed/MR57iRokbiQ"
                            title="YouTube video player" frameBorder="0" id={"no_select"} className="rounded-3"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>

                {/*container start*/}
                <div className="container">
                    <div className="col text-center">
                        <ul className="icon1">
                            <i className="bi bi-chat mx-2 px-2 fs-5 text-center" id={"chat"}></i>
                            <i className="bi bi-download mx-2 px-2 fs-5 text-center" id={"retweet"}></i>
                            <i className="bi bi-heart mx-2 px-2 fs-5 text-center" id={"heart"}></i>
                            <i className="bi bi-reception-4 mx-2 px-2 fs-5 text-center" id={"view"}></i>
                            <i className="bi bi-share mx-2 px-2 fs-5 text-center" id={"share"}></i>
                        </ul>
                    </div>
                </div>
            </div>
            {/*second flipkart*/}
            <div id={"select"}>
                <div className="clearfix">
                    <img src={w3scube} className="flipkart"/>
                    <div id={"inline"}><b>w3scube update</b>&nbsp;
                        <img src={w3scube} className="gif"/>&nbsp;
                        <img src={star} className="gif"/>
                        <span className={"text_comment"}>w3scube .28h</span>
                        <div className="dot">...</div>
                    </div>

                </div>
                <div className={"para"}>
                    <span className="highlight"> Marks@zuckerberg</span>&nbsp;
                    I am facing problem from one month but no one is ready to listen in flipkart After delivering my broken washing machine returns are not being given daily date is being given no one listens</div>
                <div className="col-sm-6 w-75 m-auto center shadow-lg">
                    <iframe src="https://www.youtube.com/embed/w0eeQ0Tgk7E"
                            title="twitter" frameBorder="0" id={"no_select"} class="rounded-3"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>

                {/*container start*/}
                <div className="container">
                    <div className="col text-center">
                        <ul className="icon1">
                            <i className="bi bi-chat mx-2 px-2 fs-5 text-center" id={"chat"}></i>
                            <i className="bi bi-download mx-2 px-2 fs-5 text-center" id={"retweet"}></i>
                            <i className="bi bi-heart mx-2 px-2 fs-5 text-center" id={"heart"}></i>
                            <i className="bi bi-reception-4 mx-2 px-2 fs-5 text-center" id={"view"}></i>
                            <i className="bi bi-share mx-2 px-2 fs-5 text-center" id={"share"}></i>

                        </ul>

                    </div>

                </div>
                {/*  container end*/}
            </div>
        </div>











    );
}

export default Following;
