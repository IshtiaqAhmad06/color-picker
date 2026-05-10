import React, { useEffect, useState } from "react";
import "./External.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Fetch Users
  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();

      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Debouncing
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // Filter Users
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div className="container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search Facebook..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="users">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div className="card" key={user.id}>
              <img
                src={`https://i.pravatar.cc/150?img=${user.id}`}
                alt={user.name}
              />

              <div>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <span>{user.address.city}</span>
              </div>
            </div>
          ))
        ) : (
          <h2>No User Found</h2>
        )}
      </div>
    </div>
  );
};

export default App;