import React from "react";
import "./styles/Card-Course.css";

const CardCourse = props => (
  <div className="card m-2 px-0" style={{ width: "20rem" }}>
    <div className="card-body">
      <table>
        <tbody>
          <tr>
            <td>
              <img
                src={props.golden ? props.golden_badge : props.badge}
                className="img-card-platzi rounded-circle"
                alt=""
              />
            </td>
            <td>
              <h6 className="card-title ml-3 mb-0 d-inline d-block">
                {props.title}
              </h6>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default CardCourse;
