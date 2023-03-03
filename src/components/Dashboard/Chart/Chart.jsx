import React, { useRef } from "react";
import * as d3 from "d3";
import useLists from "../../hooks/useLists";

const Chart = () => {
  const [allList, setAllList] = useLists();
  const data = [40, 50, 30];
  const d3Container = useRef();

  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", 70)
    .attr("height", 30);
  svg
    .selectAll("rect")
    .data(allList.length)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 70)
    .attr("y", 0)
    .attr("width", 65)
    .attr("height", (d, i) => d)
    .attr("fill", "green");

  /* The useEffect Hook is for running side effects outside of React,


  return (
    <svg className="d3-component" width={400} height={200} ref={d3Container} />
  );*/

  return <div ref={d3Container}></div>;
};

export default Chart;
