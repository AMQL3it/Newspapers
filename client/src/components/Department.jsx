import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Department = () => {
  const { id } = useParams();
  const [departments, setDepartments] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    vat_rate: 0,
    tax_rate: 0,
  });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch departments with async/await
  const fetchDepartments = async (page = 1, limit = 5) => {
    try {
      const response = await fetch(
        `/api/departments?page=${page}&limit=${limit}`
      );
      const data = await response.json();
      setDepartments(data.departments); // Assuming your API returns a `departments` array
      setTotalPages(data.totalPages);  // Assuming your API returns total pages count
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  };

//   useEffect(() => {
//     fetchDepartments(currentPage); // Fetch data for the current page
//   }, [currentPage]);

    useEffect(() => {
        const dummy = [
        { id: 1, name: "Finance", vat_rate: 5, tax_rate: 10 },
        { id: 2, name: "HR", vat_rate: 7.5, tax_rate: 12 },
        { id: 3, name: "Logistics", vat_rate: 4, tax_rate: 8 },
        ];
    setDepartments(dummy);
  }, []);
  const handleEdit = (dept) => {
    setEditingId(dept.id);
    setEditData({
      name: dept.name,
      vat_rate: dept.vat_rate,
      tax_rate: dept.tax_rate,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSave = (id) => {
    setDepartments((prev) =>
      prev.map((d) => (d.id === id ? { ...d, ...editData } : d))
    );
    setEditingId(null);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      try {
        await fetch(`/api/departments/${id}`, {
          method: "DELETE",
        });
        setDepartments((prev) => prev.filter((d) => d.id !== id));
      } catch (error) {
        console.error("Error deleting department:", error);
      }
    }
  };

  // Pagination handler
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Departments of Area {id}</h2>
      <table className="department-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>VAT Rate (%)</th>
            <th>Tax Rate (%)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((dept) => (
            <tr key={dept.id}>
              <td>{dept.id}</td>
              <td>
                {editingId === dept.id ? (
                  <input
                    name="name"
                    value={editData.name}
                    onChange={handleChange}
                  />
                ) : (
                  dept.name
                )}
              </td>
              <td>
                {editingId === dept.id ? (
                  <input
                    type="number"
                    name="vat_rate"
                    value={editData.vat_rate}
                    onChange={handleChange}
                  />
                ) : (
                  dept.vat_rate
                )}
              </td>
              <td>
                {editingId === dept.id ? (
                  <input
                    type="number"
                    name="tax_rate"
                    value={editData.tax_rate}
                    onChange={handleChange}
                  />
                ) : (
                  dept.tax_rate
                )}
              </td>
              <td>
                {editingId === dept.id ? (
                  <i
                    className="fa fa-save"
                    style={styles.icon}
                    title="Save"
                    onClick={() => handleSave(dept.id)}
                  ></i>
                ) : (
                  <i
                    className="fa fa-edit"
                    style={styles.icon}
                    title="Edit"
                    onClick={() => handleEdit(dept)}
                  ></i>
                )}
                <i
                  className="fa fa-trash"
                  style={{ ...styles.icon, color: "crimson" }}
                  title="Delete"
                  onClick={() => handleDelete(dept.id)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div style={styles.pagination}>
        <button onClick={() => handlePageChange(currentPage - 1)}>&laquo; Prev</button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={() => handlePageChange(currentPage + 1)}>Next &raquo;</button>
      </div>

      {/* 👇 Inline CSS here */}
      <style>{`
        .department-table {
          width: 100%;
          border-collapse: collapse;
          box-shadow: 0 0 5px rgba(0,0,0,0.1);
        }
        .department-table th, .department-table td {
          padding: 10px;
          text-align: center;
          border: 1px solid #ddd;
        }
        .department-table tbody tr:nth-child(even) {
          background-color: #f9f9f9;
        }
        .department-table tbody tr:nth-child(odd) {
          background-color: #ffffff;
        }
        .department-table tbody tr:hover {
          background-color: #eef2ff;
        }
        .pagination {
          margin-top: 20px;
          text-align: center;
        }
        .pagination button {
          margin: 0 10px;
          padding: 5px 10px;
          background-color: #007bff;
          color: white;
          border: none;
          cursor: pointer;
        }
        .pagination button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
  icon: {
    margin: "0 8px",
    cursor: "pointer",
    color: "#333",
    fontSize: "1.2em",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
};

export default Department;
