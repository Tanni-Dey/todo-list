import React, { useRef } from "react";
import useLists from "../../hooks/useLists";

const Lists = () => {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [allList, setAllList] = useLists();

  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };
  const drop = (e) => {
    const copyListItems = [...allList];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setAllList(copyListItems);
  };

  const handleDelete = (id) => {
    const isConfirm = window.confirm("Are you want delete this book?");
    if (isConfirm) {
      fetch(`http://localhost:5000/todo/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            setAllList(allList.filter((list) => list._id !== id));
          }
        });
    }
  };
  return (
    <div>
      <table className="table table-dark">
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
            <tr
              className="mb-3"
              key={list._id}
              draggable
              onDragStart={(e) => dragStart(e, index)}
              onDragEnter={(e) => dragEnter(e, index)}
              onDragEnd={drop}
            >
              <th scope="row">{index + 1}</th>
              <td>
                <a href={list.link} target="_blank" rel="noreferrer">
                  <img src={list.iconUrl} alt="" />
                  <span>{list.tittle}</span>
                </a>
              </td>
              <td>{list.note}</td>
              <td>
                {list.date}
                <button
                  onClick={() => handleDelete(list._id)}
                  className="btn btn-danger ms-5"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lists;
