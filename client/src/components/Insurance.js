import React, { useState, useEffect } from "react";
import { URL } from "../App";
import "./css/insurance.css";

import Sidebar from "./Sidebar";
import Header from "./Header";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Insurance = () => {
  const [provider, setProvider] = useState("");
  const [policyNumber, setPolicyNumber] = useState("");
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  const [insurance, setInsurance] = useState([]);
  const [editinginsurance, setEditinginsurance] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);

  const getInsurance = async () => {
    try {
      const response = await axios.get(`${URL}/insurance`, {
        headers: {
          Token: `Bearer ${token}`,
        },
      });
      setInsurance(response.data);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setError(error.message);
    }
  };

  useEffect(() => {
    const fetchInsurance = async () => {
      try {
        const response = await axios.get(`${URL}/insurance`, {
          headers: {
            Token: `Bearer ${token}`,
          },
        });
        setInsurance(response.data);
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    };

    fetchInsurance();
  }, [token]);

  const handleEdit = (insurance) => {
    setProvider(insurance.provider);
    setPolicyNumber(insurance.policyNumber);
    setEditinginsurance(insurance);
    // setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${URL}/insurance/${id}`, {
        headers: {
          Token: `Bearer ${token}`,
        },
      });
      if (response.data) {
        const newInsurance = insurance.filter((insurance) => insurance._id !== id);
        setInsurance(newInsurance);
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
      if (editinginsurance) {
        const response = await axios.put(
          `${URL}/insurance/${editinginsurance._id}`,
          {
            provider,
            policyNumber,
          },
          {
            headers: {
              Token: `Bearer ${token}`,
            },
            timeout: 2000, // set a timeout of 2 seconds
          }
        );

        if (response.status === 200) {
          toast.success("Insurance Updated Successfully!");
          // update the Insurance list
          await getInsurance(); // await the completion of getInsurance
          setProvider("");
          setPolicyNumber("");
          setEditinginsurance(null);
          console.log("Updated");
        } else {
          toast.error(response.data.message);
          console.log("Error");
        }
      } else {
        const response = await axios.post(
          `${URL}/insurance`,
          {
            provider,
            policyNumber,
          },
          {
            headers: {
              Token: `Bearer ${token}`,
            },
            timeout: 2000, // set a timeout of 2 seconds
          }
        );

        if (response.status === 201) {
          toast.success("Insurance record added successfully!");
          // update the Insurance list
          await getInsurance(); // await the completion of getInsurance
          setProvider("");
          setPolicyNumber("");
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
      <div className="Insurance main">
        <div className="Insurance__left">
          <Sidebar />
        </div>
        <div className="Insurance__right">
          <div className="Insurance__right-60">
            <h2>Insurance Records</h2>
            <table className="Insurance__table">
              <thead>
                <tr>
                  <th>Provider</th>
                  <th>Policy Number</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {insurance.map((insurance) => (
                  <tr key={insurance._id}>
                    <td>{insurance.provider}</td>
                    <td>{insurance.policyNumber}</td>
                    <td>
                      <button
                        className="edit"
                        onClick={() => handleEdit(insurance)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete"
                        onClick={() => handleDelete(insurance._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="Insurance__right-40">
            <form onSubmit={handleSubmit}>
              <div>
                <h3>
                  {editinginsurance ? "Update Insurance Record" : "Add New Insurance"}
                </h3>
                <label htmlFor="name">Provider</label>
                <input
                  type="text"
                  id="name"
                  value={provider}
                  onChange={(event) => setProvider(event.target.value)}
                />
              </div>
              <div>
                <label htmlFor="description">Policy Number</label>
                <textarea
                  id="description"
                  value={policyNumber}
                  onChange={(event) => setPolicyNumber(event.target.value)}
                ></textarea>
              </div>
              <div>
                <button type="submit">
                  {editinginsurance ? "Update Record" : "Save Record"}
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

export default Insurance;
