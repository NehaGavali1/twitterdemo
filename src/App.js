import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Right_side from "./Right_side";
import Left_side from "./Left_side";
import Main from "./Main";


function App() {
  return (
      <div className={"container"}>
          <div className="row">
              <div className={"col-4"}>
<div className={"row"}>
    <ul>
        <i className="bi bi-twitter" id={"twitter"}></i>
        <i className="bi bi-house-heart" id={"house"}></i>
    </ul>
</div>

              </div>
              <div className={"col-4"}>


              </div>
              <div className={"col-4"}>


              </div>




          </div>


      </div>


  );
}

export default App;
