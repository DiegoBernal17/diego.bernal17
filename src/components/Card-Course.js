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
                alt="badge"
              />
            </td>
            <td>
              <h6 className="card-title ml-3 mb-0 d-inline d-block">
                {props.title}
              </h6>
            </td>
          </tr>
          <tr>
            <td />
            <td>
              {props.diploma_link ? (
                <a
                  href={`https://platzi.com/@diego-p-bernal${
                    props.diploma_link
                  }`}
                  className="ml-3"
                >
                  View certificate
                </a>
              ) : (
                props.progress !== 100 && (
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${props.progress + (props.progress * 30) / 70}%`
                      }}
                      aria-valuenow={props.progress}
                      aria-valuemin="0"
                      aria-valuemax="70"
                    />
                  </div>
                )
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default CardCourse;
