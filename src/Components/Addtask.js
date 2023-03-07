import React from "react";

function Addtask() {
  return (
    <div>
      <section className="addTask">
        <form>
          <input
            type="text"
            name="task"
            autoComplete="off"
            placeholder="addtask"
            maxLength="25"
          />
          <button>Add</button>
        </form>
      </section>
    </div>
  );
}

export default Addtask;
