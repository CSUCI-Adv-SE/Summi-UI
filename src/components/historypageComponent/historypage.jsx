import React, { useState, useEffect } from "react"
import Header from "../generalComponent/header";
import Sidebar from "../generalComponent/sidebar";
import { Container, Table } from 'react-bootstrap';
import "./table.css"
import { config } from "../../constants.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './styles.css';

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get('https://example.com/data');
    setData(response.data);
  };

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
