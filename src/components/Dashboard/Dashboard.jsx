import React from "react";
import AddTodo from "./AddTodo/AddTodo";
import Chart from "./Chart/Chart";
import Lists from "./Lists/Lists";

const Dashboard = () => {
  return (
    <>
      <Chart />
      <Lists />
      <AddTodo />
    </>
  );
};

export default Dashboard;
