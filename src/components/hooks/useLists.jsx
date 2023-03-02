import React, { useEffect, useState } from "react";

const useLists = () => {
  const [allList, setAllList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/todos")
      .then((res) => res.json())
      .then((data) => setAllList(data));
  }, []);
  return [allList, setAllList];
};

export default useLists;
