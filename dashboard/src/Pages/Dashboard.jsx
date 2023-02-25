import React from 'react'
import Chart from '../components/Chart';
import Featured from '../components/Featured';
import Widget from '../components/Widget';
import "./dashboard.css"

const Dashboard = () => {
  return (
    <>
      <div className="widgets">
        <Widget type="user" />
        <Widget type="order" />
        <Widget type="earning" />
        <Widget type="balance" />
      </div>
      <div className="charts">
        <Featured />
        <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
      </div>
    </>
  );
}

export default Dashboard