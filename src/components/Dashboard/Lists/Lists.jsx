import React from "react";
import useLists from "../../hooks/useLists";

const Lists = () => {
  const [allList, setAllList] = useLists();
  return (
    <div>
      <table className="table table-bordered table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Note</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {allList.map((list, index) => (
            <tr key={list._id}>
              <th scope="row">{index + 1}</th>
              <td>
                <a href={list.link} target="_blank" rel="noreferrer">
                  <img src={list.iconUrl} alt="" />
                  <span>{list.tittle}</span>
                </a>
              </td>
              <td>{list.note}</td>
              <td>{list.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lists;
