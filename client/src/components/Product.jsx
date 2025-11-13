import React, { useState } from "react";

const Product = () => {
  const [newspaperList, setNewspaperList] = useState([
    { id: 1, name: "Daily Star", unitPrice: 20, sellPrice: 25 },
    { id: 2, name: "Prothom Alo", unitPrice: 18, sellPrice: 22 },
  ]);

  const [magazineList, setMagazineList] = useState([
    { id: 1, name: "Time Magazine", unitPrice: 50, sellPrice: 60 },
    { id: 2, name: "National Geographic", unitPrice: 45, sellPrice: 55 },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [formType, setFormType] = useState(""); // newspaper or magazine
  const [formData, setFormData] = useState({ name: "", unitPrice: "", sellPrice: "" });

  const handleAdd = (type) => {
    setFormType(type);
    setFormData({ name: "", unitPrice: "", sellPrice: "" });
    setShowModal(true);
  };

  const handleSave = () => {
    if (!formData.name || !formData.unitPrice || !formData.sellPrice) return alert("All fields required!");

    const newItem = {
      id: Date.now(),
      name: formData.name,
      unitPrice: parseFloat(formData.unitPrice),
      sellPrice: parseFloat(formData.sellPrice),
    };

    if (formType === "newspaper") setNewspaperList([...newspaperList, newItem]);
    if (formType === "magazine") setMagazineList([...magazineList, newItem]);

    setShowModal(false);
  };

  const handleEdit = (type, id) => {
    const list = type === "newspaper" ? newspaperList : magazineList;
    const item = list.find((i) => i.id === id);
    setFormType(type);
    setFormData(item);
    setShowModal(true);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      {/* LEFT SIDE — NEWSPAPER */}
      <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-md p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Newspaper List
          </h2>
          <button
            onClick={() => handleAdd("newspaper")}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
          >
            + Add Newspaper
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 dark:border-gray-700 text-sm">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700 text-left text-gray-700 dark:text-gray-300">
                <th className="py-2 px-3 border-b dark:border-gray-600">Name</th>
                <th className="py-2 px-3 border-b dark:border-gray-600">Unit Price</th>
                <th className="py-2 px-3 border-b dark:border-gray-600">Sell Price</th>
                <th className="py-2 px-3 border-b dark:border-gray-600 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {newspaperList.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  <td className="py-2 px-3 text-gray-800 dark:text-gray-200">{item.name}</td>
                  <td className="py-2 px-3 text-gray-800 dark:text-gray-200">
                    ৳{item.unitPrice}
                  </td>
                  <td className="py-2 px-3 text-gray-800 dark:text-gray-200">
                    ৳{item.sellPrice}
                  </td>
                  <td className="py-2 px-3 text-center">
                    <button
                      onClick={() => handleEdit("newspaper", item.id)}
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

      {/* RIGHT SIDE — MAGAZINE */}
      <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-md p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Magazine List
          </h2>
          <button
            onClick={() => handleAdd("magazine")}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
          >
            + Add Magazine
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 dark:border-gray-700 text-sm">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700 text-left text-gray-700 dark:text-gray-300">
                <th className="py-2 px-3 border-b dark:border-gray-600">Name</th>
                <th className="py-2 px-3 border-b dark:border-gray-600">Unit Price</th>
                <th className="py-2 px-3 border-b dark:border-gray-600">Sell Price</th>
                <th className="py-2 px-3 border-b dark:border-gray-600 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {magazineList.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  <td className="py-2 px-3 text-gray-800 dark:text-gray-200">{item.name}</td>
                  <td className="py-2 px-3 text-gray-800 dark:text-gray-200">
                    ৳{item.unitPrice}
                  </td>
                  <td className="py-2 px-3 text-gray-800 dark:text-gray-200">
                    ৳{item.sellPrice}
                  </td>
                  <td className="py-2 px-3 text-center">
                    <button
                      onClick={() => handleEdit("magazine", item.id)}
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
              {formData.id ? "Edit" : "Add"}{" "}
              {formType === "newspaper" ? "Newspaper" : "Magazine"}
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
                type="number"
                placeholder="Unit Price"
                value={formData.unitPrice}
                onChange={(e) => setFormData({ ...formData, unitPrice: e.target.value })}
                className="border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
              />
              <input
                type="number"
                placeholder="Sell Price"
                value={formData.sellPrice}
                onChange={(e) => setFormData({ ...formData, sellPrice: e.target.value })}
                className="border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
              />
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

export default Product;
