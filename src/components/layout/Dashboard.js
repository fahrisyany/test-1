import React, { Component } from "react";
import Table from "./Table";
import SideBar from "./SideBar";
import { connect } from "react-redux";
import { loadProfile } from "../../components/sagas/actions/profileActions";

class Dashboard extends Component {
  handleLoadProfile = () => {
    this.props.loadProfile();
  };
  render() {
    const { profile } = this.props;

    return (
      <div className="dashboard">
        <div>
          <button onClick={this.handleLoadProfile.bind(this)}>Load Data</button>
          <Table profile={profile} />
        </div>
        <SideBar profile={profile} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { loadProfile }
)(Dashboard);

// val.trx_count  / (a + Number(trx_amount) * 100),
