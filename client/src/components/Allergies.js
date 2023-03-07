import React, { useState, useEffect } from "react";
import { URL } from "../App";
import "./css/allergies.css";

import Sidebar from "./Sidebar";
import Header from "./Header";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Allergies = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  const [allergies, setAllergies] = useState([]);
  const [editingAllergy, setEditingAllergy] = useState(null);
  // const [isEditing, setIsEditing] = useState(false);

  const getAllergies = async () => {
    try {
      const response = await axios.get(`${URL}/allergies`, {
        headers: {
          Token: `Bearer ${token}`,
        },
      });
      setAllergies(response.data);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setError(error.message);
    }
  };

  useEffect(() => {
    const fetchAllergies = async () => {
      try {
        const response = await axios.get(`${URL}/allergies`, {
          headers: {
            Token: `Bearer ${token}`,
          },
        });
        setAllergies(response.data);
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    };

    fetchAllergies();
  }, [token]);

  const handleEdit = (allergy) => {
    setName(allergy.name);
    setDescription(allergy.description);
    setEditingAllergy(allergy);
    // setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${URL}/allergies/${id}`, {
        headers: {
          Token: `Bearer ${token}`,
        },
      });
      if (response.data) {
        const newAllergies = allergies.filter((allergy) => allergy._id !== id);
        setAllergies(newAllergies);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setError(error.message);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (editingAllergy) {
        const response = await axios.patch(
          `${URL}/allergies/${editingAllergy._id}`,
          {
            name,
            description,
          },
          {
            headers: {
              Token: `Bearer ${token}`,
            },
            timeout: 2000, // set a timeout of 2 seconds
          }
        );

        if (response.status === 200) {
          toast.success("Allergy Updated Successfully!");
          // update the allergies list
          await getAllergies(); // await the completion of getAllergies
          setName("");
          setDescription("");
          setEditingAllergy(null);
          console.log("Updated");
        } else {
          toast.error(response.data.message);
          console.log("Error");
        }
      } else {
        const response = await axios.post(
          `${URL}/allergies`,
          {
            name,
            description,
          },
          {
            headers: {
              Token: `Bearer ${token}`,
            },
            timeout: 2000, // set a timeout of 2 seconds
          }
        );

        if (response.status === 201) {
          toast.success(response.data.msg);
          // update the allergies list
          await getAllergies(); // await the completion of getAllergies
          setName("");
          setDescription("");
          console.log("Added");
        } else {
          toast.error(response.data.message);
          console.log("Error");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setError(error.message);
    }
  };

  return (
    <>
      <Header />
      <div className="allergies main">
        <div className="allergies__left">
          <Sidebar />
        </div>
        <div className="allergies__right">
          <div className="allergies__right-60">
            <h2>Allergies</h2>
            <table className="allergies__table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allergies.map((allergy) => (
                  <tr key={allergy._id}>
                    <td>{allergy.name}</td>
                    <td>{allergy.description}</td>
                    <td>
                      <button
                        className="edit"
                        onClick={() => handleEdit(allergy)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete"
                        onClick={() => handleDelete(allergy._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="allergies__right-40">
            <form onSubmit={handleSubmit}>
              <div>
                <h3>
                  {editingAllergy ? "Update Allergy Record" : "Add New Allergy"}
                </h3>
                <label htmlFor="name">Name of Allergy</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div>
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                ></textarea>
              </div>
              <div>
                <button type="submit">
                  {editingAllergy ? "Update Record" : "Save Record"}
                </button>
              </div>
            </form>
            {error && <p className="error">{error}</p>}
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Allergies;
