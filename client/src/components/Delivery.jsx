import React, { useEffect, useState } from "react";

const Delivery = () => {
  const [date, setDate] = useState("");
  const [customers, setCustomers] = useState([]);
  const [selectedNewspapers, setSelectedNewspapers] = useState([]);
  const [selectedMagazines, setSelectedMagazines] = useState([]);
  const [selectAllNP, setSelectAllNP] = useState(false);
  const [selectAllMG, setSelectAllMG] = useState(false);

  // Example customer data (later connect with API)
  useEffect(() => {
    const dummyData = [
      {
        id: 1,
        room_no: "101",
        newspapers: ["Prothom Alo", "Daily Star"],
        magazines: ["Bichitra", "Unmad"],
      },
      {
        id: 2,
        room_no: "102",
        newspapers: ["Inqilab"],
        magazines: [],
      },
      {
        id: 3,
        room_no: "103",
        newspapers: ["Ittefaq", "Jugantor"],
        magazines: ["Boom", "Canvas"],
      },
    ];
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCustomers(dummyData);
  }, []);

  // ✅ Handle Newspaper Select All
  const handleSelectAllNewspapers = () => {
    if (selectAllNP) {
      setSelectedNewspapers([]);
      setSelectAllNP(false);
    } else {
      const allNP = [];
      customers.forEach((c) =>
        c.newspapers.forEach((np) => allNP.push(`${c.id}|${np}`))
      );
      setSelectedNewspapers(allNP);
      setSelectAllNP(true);
    }
  };

  // ✅ Handle Magazine Select All
  const handleSelectAllMagazines = () => {
    if (selectAllMG) {
      setSelectedMagazines([]);
      setSelectAllMG(false);
    } else {
      const allMG = [];
      customers.forEach((c) =>
        c.magazines.forEach((mg) => allMG.push(`${c.id}|${mg}`))
      );
      setSelectedMagazines(allMG);
      setSelectAllMG(true);
    }
  };

  // Handle individual checkbox toggle
  const handleCheckboxChange = (list, setList, id, item) => {
    const key = `${id}|${item}`;
    setList((prev) =>
      prev.includes(key) ? prev.filter((x) => x !== key) : [...prev, key]
    );
  };

  // ✅ Submit Delivery Data
  const handleSubmit = () => {
    const data = {
      date,
      newspapers: selectedNewspapers,
      magazines: selectedMagazines,
    };
    console.log("Delivery data:", data);
    alert("✅ Delivery report saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-5xl mx-auto bg-gray-800 rounded-xl shadow-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-green-400">
            📦 Delivery Report
          </h1>
        </div>

        {/* Date Picker */}
        <div className="flex items-center gap-3 mb-6">
          <label htmlFor="date" className="font-semibold">
            Select Date:
          </label>
          <input
            type="date"
            id="date"
            className="bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* ✅ Two Select All Toggles */}
        <div className="flex justify-end gap-6 mb-4 text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="accent-green-500 w-4 h-4"
              checked={selectAllNP}
              onChange={handleSelectAllNewspapers}
            />
            <span className="font-medium text-green-300">
              {selectAllNP ? "Unselect All Newspapers" : "Select All Newspapers"}
            </span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="accent-blue-500 w-4 h-4"
              checked={selectAllMG}
              onChange={handleSelectAllMagazines}
            />
            <span className="font-medium text-blue-300">
              {selectAllMG ? "Unselect All Magazines" : "Select All Magazines"}
            </span>
          </label>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-gray-700 rounded-md overflow-hidden">
            <thead className="bg-gray-700 text-gray-200">
              <tr>
                <th className="py-3 px-4 text-left">Room</th>
                <th className="py-3 px-4 text-left">Newspaper</th>
                <th className="py-3 px-4 text-left">Magazine</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr
                  key={customer.id}
                  className="border-t border-gray-700 hover:bg-gray-800 transition-colors"
                >
                  <td className="py-3 px-4 font-semibold text-green-400">
                    {customer.room_no}
                  </td>
                  <td className="py-3 px-4">
                    {customer.newspapers.map((np) => {
                      const key = `${customer.id}|${np}`;
                      return (
                        <label key={key} className="flex items-center gap-2 mb-1">
                          <input
                            type="checkbox"
                            className="accent-green-500 w-4 h-4"
                            checked={selectedNewspapers.includes(key)}
                            onChange={() =>
                              handleCheckboxChange(
                                selectedNewspapers,
                                setSelectedNewspapers,
                                customer.id,
                                np
                              )
                            }
                          />
                          <span>{np}</span>
                        </label>
                      );
                    })}
                  </td>
                  <td className="py-3 px-4">
                    {customer.magazines.length > 0 ? (
                      customer.magazines.map((mg) => {
                        const key = `${customer.id}|${mg}`;
                        return (
                          <label key={key} className="flex items-center gap-2 mb-1">
                            <input
                              type="checkbox"
                              className="accent-blue-500 w-4 h-4"
                              checked={selectedMagazines.includes(key)}
                              onChange={() =>
                                handleCheckboxChange(
                                  selectedMagazines,
                                  setSelectedMagazines,
                                  customer.id,
                                  mg
                                )
                              }
                            />
                            <span>{mg}</span>
                          </label>
                        );
                      })
                    ) : (
                      <span className="text-gray-400 italic">No magazine</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-right">
          <button
            onClick={handleSubmit}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg transition-all"
          >
            Save Delivery
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
