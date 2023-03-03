import React from "react";
import AddTodo from "./AddTodo/AddTodo";
import Lists from "./Lists/Lists";

const Dashboard = () => {
  return (
    <>
      <Lists />
      <AddTodo />
    </>
  );
};

export default Dashboard;
