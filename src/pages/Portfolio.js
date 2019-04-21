import React, { Component } from "react";
import "./styles/Portfolio.css";
import DashboardProjects from "../components/Dashboard-Projects";
import Loading from "../components/Loading";

class Portfolio extends Component {
  state = {
    repos: [],
    forks: []
  };

  componentDidMount() {
    fetch("https://api.github.com/users/DiegoBernal17/repos")
      .then(response => response.json())
      .then(data => {
        const repos = [],
          forks = [];
        data.forEach(repo => {
          if (repo.fork) {
            forks.push(repo);
          } else {
            repos.push(repo);
          }
        });
        forks.reverse();
        this.orderRepos(repos);
        this.setState({ repos, forks });
      });
  }

  orderRepos = repos => {
    repos.sort(function(a, b) {
      if (a.id < b.id) {
        return 1;
      }
      if (a.id > b.id) {
        return -1;
      }
      return 0;
    });
  };

  render() {
    if (this.state.repos.length === 0) {
      return <Loading />;
    }

    return (
      <div className="container">
        <h3 className="mt-4 mb-0">Projects ⬎</h3>
        <small className="text-muted font-weight-light">Current projects</small>
        <DashboardProjects projects={this.state.repos} />

        <h3 className="mt-4 mb-0">Forks ⬎</h3>
        <small className="text-muted font-weight-light">
          External projects
        </small>
        <DashboardProjects projects={this.state.forks} />
      </div>
    );
  }
}

export default Portfolio;
