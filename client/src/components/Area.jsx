import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Area = () => {
    const navigate = useNavigate();
  const [areas, setAreas] = useState([]);
  const [selectedAreaId, setSelectedAreaId] = useState(null);

  // Dummy data; replace this with actual API call later
  useEffect(() => {
    const dummyAreas = [
      { id: 1, name: "Uttara", address: "Uttara Sector 3", phone: "01711111111" },
      { id: 2, name: "Banani", address: "Banani Road 11", phone: "01822222222" },
      { id: 3, name: "Mirpur", address: "Mirpur 10", phone: "01933333333" },
      { id: 4, name: "Gulshan", address: "Gulshan 1", phone: "01644444444" },
      { id: 5, name: "Dhanmondi", address: "Dhanmondi 2", phone: "01755555555" },
    ];
    setAreas(dummyAreas);
  }, []);

  // Show departments for selected area
  if (selectedAreaId !== null) {
    // const selectedArea = areas.find((area) => area.id === selectedAreaId);

    return navigate(`/home/areas/${selectedAreaId}/departments`);
    // return (
    //   <div style={styles.departmentContainer}>
    //     <h2 style={styles.heading}>Departments of {selectedArea.name}</h2>
    //     <Department areaId={selectedArea.id} /> {/* Send props if needed */}
    //   </div>
    // );
  }

  // Show all area cards
  return (
    <div style={styles.cardContainer}>
      {areas.map((area) => (
        <div
          key={area.id}
          style={styles.card}
          onClick={() => setSelectedAreaId(area.id)}
        >
          <h2 style={styles.areaName}>{area.name}</h2>
          <p style={styles.address}>Address: {area.address}</p>
          <p style={styles.phone}>Phone: {area.phone}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    padding: "20px",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    width: "250px",
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.2s ease",
  },
  areaName: {
    fontSize: "1.5em",
    marginBottom: "8px",
    color: "#333",
  },
  address: {
    fontSize: "1em",
    margin: "4px 0",
    color: "#666",
  },
  phone: {
    fontSize: "1em",
    margin: "4px 0",
    color: "#666",
  },
  departmentContainer: {
    padding: "20px",
  },
  heading: {
    marginBottom: "16px",
    color: "#444",
  },
};

export default Area;
