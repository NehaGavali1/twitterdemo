import './App.css';
import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import {IconButton, Tooltip} from "@mui/material";
import Icon from '@mui/material/Icon';
// import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import account from "./icon/account1.png";
import meow from "./icon/meow.jpg";
import combine_monk from "./icon/combin_monk.jpg";
import star from "./icon/star_mark.svg";
import ratan from "./icon/ratan-tata.png";
import tyler from "./icon/tyler_swift.png";
import yogi from "./icon/yogi.png";

export function Right_side() {
    return (
        <div className={"container"} id={"right_side"}>
            <div className="row">

      <div className={"col-sm-4 position-static"}>
          <div className={"col-sm-4 position-sticky"}>
       <form className="input" id="input_border" role="search">
        <span><i className="bi bi-search"></i></span>
        <input className="input" type="text" placeholder="search twitter">
        </input>
       </form>
          </div>
      </div>
                <div className={"col-sm-4 position-static"}>
                    <img src={combine_monk} id={"meow"}/>
                </div>

                <div className="col-sm-4 fs-4 border position-sticky" id="text">
                    <b>you might like</b>
                    {/*section start*/}
                    <div className={"row"}><div className={"col-sm-2"}> <img src={ratan} id="ratan"/></div>
                        <div className={"col  text-dark fs-6"}>
                        <span className={"ratan_text"}><b>Ratan N. Tata</b><img src={star} className={"gif"}/>
                        <span className="text-dark text-opacity-50"> <b>@RNTata2000</b></span></span>
                        </div>
                        <div className={"col-sm-4"}>
                            <button type="button" className="btn btn-dark px-3 rounded-pill">Follow</button>
                        </div>

                    </div>
                    {/*section end*/}
{/*section start*/}
                    <div className={"row"}><div className={"col-sm-2"}> <img src={tyler} id="tyler"/></div>
                        <div className={"col  text-dark fs-6"}>
                        <span className={"ratan_text"}><b>Tylor Swift</b><img src={star} className={"gif"}/>
                        <span className="text-dark text-opacity-50"> <b>@TylorSwift13</b></span></span>
                        </div>
                        <div className={"col-sm-4"}>
                            <button type="button" className="btn btn-dark px-3 rounded-pill">Follow</button>
                        </div>

                    </div>
                    {/*section end*/}

                    {/*section start*/}
                    <div className={"row"}>

                        <div className={"col-sm-2"}> <img src={yogi} id="yogi"/></div>
                        <div className={"col-sm text-dark fs-6"}>
                            <span className="ratan_text"><b>YogiAdiyanath</b><img src={star} className={"gif"}/>
                       <span className="text-dark text-opacity-50 "><b>@myogiadityana</b></span></span>
                        </div>
                        <div className={"col-sm-4"}>
                            <button type="button" className="btn btn-dark px-3 rounded-pill">Follow</button>
                        </div>

                    </div>
                    {/*section end*/}
                </div>


                {/*what is happeming section*/}
                <div className="col-sm-4 fs-4 border position-relative" id="text">
                    <b>what is happening</b>
                    {/*section start*/}
                    <div className={"row"}>
                        <div className={"col-sm  text-dark fs-6"}>
                        <span className={"ratan_text"}>Business and finance<br/>
                        <span className="text-dark"> <b>#Business</b><br/></span>
                          <span className="text-dark text-opacity-50">21.1k Tweets</span></span>
                        </div>
                        <div className={"col-sm-4"} id="dots">
                           ...
                        </div>

                    </div>
                    {/*section end*/}
                    {/*section start*/}
                    <div className={"row"}>
                        <div className={"col-sm  text-dark fs-6"}>
                        <span className={"ratan_text"}>Trending in India<br/>
                        <span className="text-dark"> <b>#Diwali2024</b><br/></span>
                          <span className="text-dark text-opacity-50">12.2k Tweets</span></span>
                        </div>
                        <div className={"col-sm-4"} id="dots">
                            ...
                        </div>

                    </div>
                    {/*section end*/}

                    {/*section start*/}
                    <div className={"row"}>
                        <div className={"col-sm  text-dark fs-6"}>
                        <span className={"ratan_text"}>Entertainment.Trending<br/>
                        <span className="text-dark"> <b>#Tamanna Bahatia</b><br/></span>
                          <span className="text-dark text-opacity-50">7,028 Tweets</span></span>
                        </div>
                        <div className={"col-sm-4"} id="dots">
                           ...
                        </div>

                    </div>
                    {/*section end*/}

                    {/*section start*/}
                    <div className={"row"}>
                        <div className={"col-sm  text-dark fs-6"}>
                        <span className={"ratan_text"}>Trending in India
                        <span className="text-dark"> <b><br/>#Pan card</b><br/></span>
                          <span className="text-dark text-opacity-50">80k Tweets</span></span>
                        </div>
                        <div className={"col-sm-4"} id="dots">
                            ...
                        </div>

                    </div>
                    {/*section end*/}

                    {/*section start*/}
                    <div className={"row"}>
                        <div className={"col-sm  text-dark fs-6"}>
                        <span className={"ratan_text"}>Event LIVE
                        <span className="text-dark"> <b><br/>#Essence FEST</b><br/></span>
                          <span className="text-dark text-opacity-50">1.1k Tweets</span></span>
                        </div>
                        <div className={"col-sm-4"} id="dots">
                            ...
                        </div>

                    </div>
                    {/*section end*/}

                    {/*section start*/}
                    <div className={"row"}>
                        <div className={"col-sm  text-dark fs-6"}>
                        <span className={"ratan_text"}>Trending in India
                        <span className="text-dark"> <b><br/>#Gujarat Rain</b><br/></span>
                          <span className="text-dark text-opacity-50">8,427k Tweets</span></span>
                        </div>
                        <div className={"col-sm-4"} id="dots">
                            ...
                        </div>

                    </div>
                    {/*section end*/}

                    {/*section start*/}
                    <div className={"row"}>
                        <div className={"col-sm  text-dark fs-6"}>
                        <span className={"ratan_text"}>Trending in India
                        <span className="text-dark"> <b><br/>#ICAI</b><br/></span>
                          <span className="text-dark text-opacity-50">24k Tweets</span></span>
                        </div>
                        <div className={"col-sm-4"} id="dots">
                            ...
                        </div>

                    </div>
                    <div className={"row-sm-4 fs-6  text-info"} id={"show_more"}>
                        Show more

                    </div>
                    {/*section end*/}
                </div>
{/*what is happening section end*/}


        </div>
            <div className={"row-sm-4 fs-6"}>
                Terms of Service
                Privacy Policy
                Cookie Policy
                Accessibility
                Ads info
                More
                © 2023 X Corp.
                <br/><br/>
            </div>
        </div>
    );
}

export default Right_side;
