import React, { useState } from "react";
import DisplayServices from "./DisplayServices";

const AddServices = () => {
  
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: check if all fields are filled
    if (!formData.name || !formData.description || !formData.price) {
      alert("Please fill all the fields.");
      return;
    }

    // Add or update service based on the editing mode
    if (isEditing) {
      const updatedServices = services.map((service, index) =>
        index === currentServiceIndex ? formData : service
      );
      setServices(updatedServices);
      setIsEditing(false);
    } else {
      setServices([...services, formData]);
    }

    // Reset form and formData state
    setFormData({ name: "", description: "", price: "" });
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle delete service
  const handleDelete = (index) => {
    const updatedServices = services.filter((_, i) => i !== index);
    setServices(updatedServices);
  };

  // Handle edit service
  const handleEdit = (index) => {
    setFormData(services[index]);
    setIsEditing(true);
    setCurrentServiceIndex(index);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} class="input-group">
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Service Name"
          onChange={handleChange}
          class="form-control"
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          placeholder="Service Description"
          onChange={handleChange}
          class="form-control"
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          placeholder="Service Price"
          onChange={handleChange}
          className="form-control"
        />
        <span class="input-group-text">
          <button type="submit" className="btn btn-success">
            {isEditing ? "Update Service" : "Add Service"}
          </button>{" "}
        </span>
      </form>
      <DisplayServices
        services={services}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default AddServices;
