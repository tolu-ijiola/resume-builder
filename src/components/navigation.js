import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Navigation = (props) => {

  console.log(props.completed);
  return (
    <div className="navigation">

        <h2>My Progress</h2>
        <br />
        <div style={{ width: 150, height: 150 }}>
        <CircularProgressbar
          value={(props.completed - 1) * 25}
          text={`${(props.completed - 1) * 25}%`}
          styles={buildStyles({
            textColor: "brown",
            pathColor: "orange",
          })}
        />
        </div>
        <br />
        <br />
        <div>
        <p>Fill all required details</p>
        {props.completed !== 5 ? <div className="step-items">
          <div>
            {props.completed === 1 ? <p className="step-number">1</p> : <p className="step-dark-number">1</p>}
            <p>information</p>
          </div>
          <div>
            {props.completed === 2 ?  <p className="step-number">2</p> : <p className="step-dark-number">2</p>}
            <p>My skills</p>
          </div>
          <div>
            {props.completed === 3 ?  <p className="step-number">3</p> : <p className="step-dark-number">3</p>}
            <p>Experience</p>
          </div>
          <div>
            {props.completed === 4 ? <p className="step-number">4</p> : <p className="step-dark-number">4</p>}
            <p>Education</p>
          </div>
      </div> : <div>
      <i class="fa-solid fa-check"></i>
      <p>All done</p>
      </div>}
      </div>
    </div>
  );
};

export default Navigation;
