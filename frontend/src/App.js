import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [user, setUser] = useState(null);

  const [usersList, setUsersList] = useState();

  const { name, email, phone } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreateUser = async (e) => {
    e.preventDefault(); // Prevent form submission

    try {
      // Make an API call to create a user
      const response = await axios.post(
        "http://localhost:5000/api/createList",
        {
          name,
          email,
          phone,
          userId: "65eab5694ccba0df50f5b1e8",
        }
      );
      fetchUsers();
      console.log(response.data, "response");
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUsers = async () => {
    try {
      // Make an API call to get a list of users
      const response = await axios.get("http://localhost:5000/api/getList");

      setUsersList(response);
      console.log(response?.data, "userList");
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      // Make an API call to delete the user with the given id
      await axios.delete(`http://localhost:5000/api/deleteList/${id}`);

      // Once the deletion is successful, update the usersList state
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/upadteList/${id}`, {
        name: "Krishna Kumar",
        email: "krishna@gmail.com",
        phone: "9093029403",
        userId: "65eab5694ccba0df50f5b1e8",
      });
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Make an API call to fetch user data
        const response = await axios.get("http://localhost:5000/api/getUsers");

        // Update the state with the fetched user data
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  console.log(user, "useruser");

  return (
    <div className="App">
      <form onSubmit={handleCreateUser}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Create User</button>
      </form>

      <div>
        {usersList?.data.map((item, index) => (
          <>
            <p>
              {" "}
              {item?.name}
              <button onClick={() => handleDelete(item?._id)}>
                delete
              </button>{" "}
              <button onClick={() => handleEdit(item?._id)}>edit</button>
            </p>
            <p> {item?.email} </p>
            <p> {item?.phone} </p>
          </>
        ))}
      </div>

      <Signup />
      <Login />
    </div>
  );
}

export default App;
