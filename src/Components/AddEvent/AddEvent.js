import React from "react";

const addEvent = (props) => {
  return (
    <div className="form">
      <form className="form" onSubmit={props.eventCallback}>
        <label>
          Name:
          <input type="text" name="name" value={props.data.name} />
        </label>

        <label>
          Event Title:
          <input type="text" title="title" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default addEvent;
