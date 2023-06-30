import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Right_side from "./Right_side";
import Left_side from "./Left_side";
import Main from "./Main";
import Following from "./Following";
import For_you from "./For_you";
import following from "./Following";
import for_you from "./For_you";



function App() {
    // function run(){
    //     window.open(for_you)
    // }
    // function runs(){
    //     window.open(following)
    // }
  return (
      <div className="container-fluid">
          <div className="row">
              <div className="col-sm-2">
              <Left_side></Left_side>

              </div> {/*col 1 end*/}

              <div className="col-sm-6"> {/*col 2 start */}


             {/*<div> <For_you></For_you></div>*/}
              <div><Following></Following></div>



              </div> {/*col 2 end*/}
              <div className="col-sm-4">{/* col 3  start */}

             <Right_side></Right_side>
              </div>{/* col 3  end*/}




          </div> {/* main row end*/}


      </div>



  );
}

export default App;
