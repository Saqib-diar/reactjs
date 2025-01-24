import { useState } from 'react';
import './App.css'

function App() {

  // Sample customer data
  const [customers, setCustomers] = useState([
    {
      name: "John Doe",
      company: "TechCorp",
      phone: "123-456-7890",
      email: "john@example.com",
      country: "USA",
      status: "Active",
    },
    {
      name: "Jane Smith",
      company: "Innovate Inc.",
      phone: "987-654-3210",
      email: "jane@example.com",
      country: "UK",
      status: "Inactive",
    },
    {
      name: "Sam Wilson",
      company: "FutureWorks",
      phone: "456-789-1234",
      email: "sam@example.com",
      country: "Canada",
      status: "Active",
    },
  ]);

  // Filter states
  const [filters, setFilters] = useState({
    name: "",
    company: "",
    status: "",
  });

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Filtered customers based on filters
  const filteredCustomers = customers.filter((customer) => {
    return (
      (filters.name === "" ||
        customer.name.toLowerCase().includes(filters.name.toLowerCase())) &&
      (filters.company === "" ||
        customer.company
          .toLowerCase()
          .includes(filters.company.toLowerCase())) &&
      (filters.status === "" || customer.status === filters.status)
    );
  });

  return (
    <>
      <div className='container'>
        <div className='left-side'>
          <h2>Dashboard</h2>
          <div>
            <ul>
              <li>Dashboard</li>
              <li>Products</li>
              <li>Customers</li>
              <li>Income</li>
              <li>Promote</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
        <div className='right-side'>
          <div className='navbar-1'>
            <h3 className='text'>Hello Evano</h3>
            <input type="text" placeholder='search' />
          </div>


          <div className='client-data'>
            <div>
              <img src="" alt="" />
              <p>total Customers</p>
              <h2>5,324</h2>
              <p>this month</p>
            </div>
            <div>
              <img src="" alt="" />
              <p>total Customers</p>
              <h2>5,324</h2>
              <p>this month</p>
            </div>
            <div>
              <img src="" alt="" />
              <p>total Customers</p>
              <h2>5,324</h2>
              <p>this month</p>
            </div>
          </div>


          <div className='table-section'>
            <h3>All Customers</h3>
            <div className="filters">
              <input
                type="text"
                placeholder="Filter by Name"
                name="name"
                value={filters.name}
                onChange={handleFilterChange}
              />
              <input
                type="text"
                placeholder="Filter by Company"
                name="company"
                value={filters.company}
                onChange={handleFilterChange}
              />
              <select
                name="status"
                value={filters.status}
                onChange={handleFilterChange}
              >
                <option value="">All Statuses</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map((customer, index) => (
                  <tr key={index}>
                    <td>{customer.name}</td>
                    <td>{customer.company}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.email}</td>
                    <td>{customer.country}</td>
                    <td>{customer.status}</td>
                  </tr>
                ))}
                {filteredCustomers.length === 0 && (
                  <tr>
                    <td colSpan="6">No customers found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
