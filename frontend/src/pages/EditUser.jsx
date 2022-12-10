import React, { createRef } from "react";

export default function EditUser({ name, setName }) {
  console.log("Rendering: EditUser");
  const newName = createRef("");

  const handleSubmit = () => {
    if (newName.current.value.length === 0) {
      newName.current.placeholder = "You didn't type in the name!";
      return newName.current.focus()
    }
    setName(newName.current.value);
    console.log(`Updating name: ${newName.current.value}`);
  };
  return (
    <div className="shadow-md md:m-6 p-4 rounded-md">
      <div className="my-6">
        <h1 className="text-center text-2xl text-gray-600">
          Update your email
        </h1>
      </div>
      <div className="form-control flex flex-col gap- my-12">
        <label className="input-group">
          <span className="bg-gray-100 text-gray-600">Name</span>
          <input
            type="text"
            ref={newName}
            placeholder={name}
            autoComplete="username"
            className="input input-bordered w-full border-gray-100"
          />
        </label>
      </div>
      <div>
        <button
          onClick={handleSubmit}
          className="btn btn-square w-full bg-gray-100 text-gray-600 hover:bg-gray-300 border-none"
        >
          Update name
        </button>
      </div>
    </div>
  );
}
