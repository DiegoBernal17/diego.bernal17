import React, { Component } from "react";
import DashboardLearning from "../components/Dashboard-Learning";
import { config } from "../firebase/config";
import * as firebase from "firebase";
import Loading from "../components/Loading";

firebase.initializeApp(config);

const database = firebase.database();
const coursesRef = database.ref("courses");
const careersRef = database.ref("careers");

export default class Education extends Component {
  state = {
    courses_in_progress: [],
    courses_finised: [],
    careers: []
  };

  componentDidMount() {
    coursesRef.on("value", snapshot => {
      const in_progress = [];
      this.setState({
        courses_finised: snapshot.val().filter(course => {
          if (course.progress === 100) return true;
          else in_progress.push(course);
          return false;
        }),
        courses_in_progress: in_progress
      });
    });
    careersRef.on("value", snapshot => {
      this.setState({ careers: snapshot.val() });
    });
  }

  render() {
    if (
      this.state.careers.length === 0 ||
      this.state.courses_finised.length === 0
    ) {
      return <Loading />;
    }

    return (
      <div className="container">
        {this.state.courses_in_progress.length !== 0 && (
          <React.Fragment>
            <h3 className="mt-4 mb-0">Courses ⬎</h3>
            <small className="text-muted font-weight-light">
              Courses in progress
            </small>
            <DashboardLearning courses={this.state.courses_in_progress} />
          </React.Fragment>
        )}
        <h3 className="mt-4 mb-0">Courses ⬎</h3>
        <small className="text-muted font-weight-light">Finished courses</small>
        <DashboardLearning courses={this.state.courses_finised} />
        <h3 className="mt-4 mb-0">Careers ⬎</h3>
        <DashboardLearning courses={this.state.careers} golden={true} />
      </div>
    );
  }
}
