import React from "react";

const DisplayServices = ({ services, handleDelete, handleEdit }) => {
  return (
    <div>
      <table class="table ">
        <thead>
          <tr className="text-center ">
            <th scope="col">S.no</th>
            <th scope="col">Service Name</th>
            <th scope="col">Service Description</th>
            <th scope="col">Price</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {services.length === 0 ? (
            <p>No services available</p>
          ) : (
            services.map((service, index) => (
              <tr className="service-item text-center" key={index}>
                <td>{index}</td>
                <td>{service.name}</td>
                <td>{service.description}</td>
                <td>{service.price}</td>
                <button
                  className="btn btn-primary "
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayServices;
