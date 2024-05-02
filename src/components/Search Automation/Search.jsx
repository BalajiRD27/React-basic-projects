import React, { useEffect, useState } from "react";

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [searchParam, setSearchParam] = useState();
  const [filteredUsers, setFilteredUsers] = useState();
  const [dropDown,setDropDown]=useState(false)

  function handleChange(event){
     const query= event.target.value.toLowerCase();
     setSearchParam(query)
     if(query.length>1){
       const filteredList= users && users.length ? users.filter(user=>user.toLowerCase().indexOf(query)> -1 ): []
       setFilteredUsers(filteredList)
       setDropDown(true)
     }
     else{
        setDropDown(false)
     }
  }

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      if (data && data.users && data.users.length) {
        setUsers(
          data.users.map(
            (userItem) => userItem.firstName
          )
        );
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setError(error);
    }
  };



  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users,filteredUsers)
  return (
    <div style={{ padding: "1.5rem", textAlign: "center" }}>
      <input
        style={{ padding: "1.1rem", outline: "none" }}
        type="text"
        name="search-users"
        placeholder="Search the users here.. "
        onChange={handleChange}
      />
      { filteredUsers && filteredUsers.length > 0 ?
      <ul style={{marginTop:'20px',display:'flex',flexDirection:'column',gap:'10px',padding:'1.5rem',justifyContent:'flex-start',backgroundColor:'grey'}}>
        {
            dropDown ? filteredUsers.map(user=> <li style={{fontWeight:'800'}} key={user.id}>{user}</li>) : null
        }
      </ul> : null
}
    </div>
  );
};

export default Search;
