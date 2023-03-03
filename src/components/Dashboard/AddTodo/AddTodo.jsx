import React from "react";

const AddTodo = () => {
  const today = new Date();

  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  const currentDate = `${day}/${month}/${year}`;

  const handleAdd = (e) => {
    e.preventDefault();
    const name = e.target.todo_name.value;
    const siteLink = e.target.site_link.value;
    const iconLink = e.target.icon_link.value;
    const note = e.target.note.value;
    const date = e.target.date.value;

    const data = {
      tittle: name,
      link: siteLink,
      iconUrl: iconLink,
      note: note,
      date: date,
    };
    console.log(data);

    fetch("http://localhost:5000/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((addTodo) => console.log(addTodo));
  };
  return (
    <div>
      <h3 className="mb-5">Adding New Todo</h3>
      <form onSubmit={handleAdd}>
        <div className="row">
          <div className="col-md-4">
            <div class="mb-3 text-start">
              <label for="tittle" class="form-label">
                Name
              </label>
              <input
                name="todo_name"
                type="text"
                class="form-control"
                id="tittle"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div class="mb-3 text-start">
              <label for="link" class="form-label">
                Website Link
              </label>
              <input
                type="text"
                name="site_link"
                class="form-control"
                id="link"
              />
            </div>
          </div>

          <div className="col-md-4">
            <div class="mb-3 text-start">
              <label for="icon" class="form-label">
                Icon Link
              </label>
              <input
                type="text"
                name="icon_link"
                class="form-control"
                id="icon"
              />
            </div>
          </div>

          <div className="col-md-4">
            <div class="mb-3 text-start">
              <label for="des" class="form-label">
                Description
              </label>
              <input type="text" name="note" class="form-control" id="des" />
            </div>
          </div>

          <div className="col-md-4">
            <div class="mb-3 text-start">
              <label for="date" class="form-label">
                Date
              </label>
              <input
                type="text"
                name="date"
                class="form-control"
                value={currentDate}
                disabled
                id="date"
              />
            </div>
          </div>
        </div>

        <button type="submit" class="btn btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
