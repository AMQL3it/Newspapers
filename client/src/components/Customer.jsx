import React, { useState } from "react";

const Customer = () => {
  // Sample Data
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "John Doe",
      room_no: "A101",
      designation_id: 1,
      branch_id: 1,
      department_id: 2,
      is_active: "active",
    },
    {
      id: 2,
      name: "Jane Smith",
      room_no: "B202",
      designation_id: 2,
      branch_id: 1,
      department_id: 1,
      is_active: "inactive",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    room_no: "",
    designation_id: "",
    branch_id: "",
    department_id: "",
    is_active: "active",
  });

  const handleAdd = () => {
    setFormData({
      id: null,
      name: "",
      room_no: "",
      designation_id: "",
      branch_id: "",
      department_id: "",
      is_active: "active",
    });
    setShowModal(true);
  };

  const handleEdit = (id) => {
    const customer = customers.find((c) => c.id === id);
    setFormData(customer);
    setShowModal(true);
  };

  const handleSave = () => {
    if (!formData.name || !formData.room_no) {
      alert("Name & Room No required!");
      return;
    }

    if (formData.id) {
      // Update existing
      setCustomers((prev) =>
        prev.map((c) => (c.id === formData.id ? formData : c))
      );
    } else {
      // Add new
      setCustomers([
        ...customers,
        { ...formData, id: Date.now() },
      ]);
    }

    setShowModal(false);
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5">
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Customer List
          </h2>
          <button
            onClick={handleAdd}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
          >
            + Add Customer
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 dark:border-gray-700 text-sm">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                <th className="py-2 px-3 border-b dark:border-gray-600 text-left">Name</th>
                <th className="py-2 px-3 border-b dark:border-gray-600 text-left">Room No</th>
                <th className="py-2 px-3 border-b dark:border-gray-600 text-left">Designation</th>
                <th className="py-2 px-3 border-b dark:border-gray-600 text-left">Department</th>
                <th className="py-2 px-3 border-b dark:border-gray-600 text-left">Branch</th>
                <th className="py-2 px-3 border-b dark:border-gray-600 text-center">Status</th>
                <th className="py-2 px-3 border-b dark:border-gray-600 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr
                  key={c.id}
                  className="hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  <td className="py-2 px-3 text-gray-800 dark:text-gray-200">{c.name}</td>
                  <td className="py-2 px-3 text-gray-800 dark:text-gray-200">{c.room_no}</td>
                  <td className="py-2 px-3 text-gray-800 dark:text-gray-200">
                    #{c.designation_id}
                  </td>
                  <td className="py-2 px-3 text-gray-800 dark:text-gray-200">
                    #{c.department_id}
                  </td>
                  <td className="py-2 px-3 text-gray-800 dark:text-gray-200">
                    #{c.branch_id}
                  </td>
                  <td className="py-2 px-3 text-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        c.is_active === "active"
                          ? "bg-green-100 text-green-800 dark:bg-green-700 dark:text-white"
                          : "bg-red-100 text-red-800 dark:bg-red-700 dark:text-white"
                      }`}
                    >
                      {c.is_active}
                    </span>
                  </td>
                  <td className="py-2 px-3 text-center">
                    <button
                      onClick={() => handleEdit(c.id)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md transition"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 w-96">
            <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              {formData.id ? "Edit Customer" : "Add Customer"}
            </h2>

            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
              />

              <input
                type="text"
                placeholder="Room No"
                value={formData.room_no}
                onChange={(e) => setFormData({ ...formData, room_no: e.target.value })}
                className="border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
              />

              <input
                type="number"
                placeholder="Designation ID"
                value={formData.designation_id}
                onChange={(e) =>
                  setFormData({ ...formData, designation_id: e.target.value })
                }
                className="border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
              />

              <input
                type="number"
                placeholder="Department ID"
                value={formData.department_id}
                onChange={(e) =>
                  setFormData({ ...formData, department_id: e.target.value })
                }
                className="border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
              />

              <input
                type="number"
                placeholder="Branch ID"
                value={formData.branch_id}
                onChange={(e) =>
                  setFormData({ ...formData, branch_id: e.target.value })
                }
                className="border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
              />

              <select
                value={formData.is_active}
                onChange={(e) =>
                  setFormData({ ...formData, is_active: e.target.value })
                }
                className="border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customer;
