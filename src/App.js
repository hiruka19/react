// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';
// import axios from 'axios';

// function App() { //component

//   const [count, setCount] = useState(0);
//   const [users, setUsers] = useState(null);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");


//   function getUsers() {
//     axios.get("http://localhost:8080/users")
//       .then(function (response) {
//         setUsers(response.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
//   function handleUsername(event) {
//     setUsername(event.target.value);
//   }
//   function handlePassword(event) {
//     setPassword(event.target.value);
//   }

//   function handleEmail(event) {
//     setEmail(event.target.value);
//   }

//   function createUser(event) {
//     event.preventDefault();

//     const data = {
//       username: username,
//       password: password,
//       email: email,

//     }
//     axios.post("http://localhost:8080/users", data)
//       .then(function (response) {
//         getUsers();
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       })
//   }


// function increase() {
//   setCount(count + 1);
//   console.log(count);
// }
// function decrease() {
//   setCount(count - 1);
//   console.log(count);
// }
// return (
//   <div className="App">

//     <ListItem itemName="java" />
//     <ListItem itemName="c++" />
//     <ListItem itemName="springboot" />

//     <h1>Counter : {count}</h1>

//     <button type="button" onClick={increase}>Increase</button>
//     <button type="button" onClick={decrease}>Decrease</button>
//     <button type="button" onClick={getUsers}>Get Users</button>

//       {users && users.map((row) => (
//         <div key={row.id}>
//           {row.username} - {row.email} -{row.id}
//         </div>
//       ))
//       }

//       <h2>CREATE USER</h2>

//       <form onSubmit={createUser}>

//         <div>
//           <label>Username</label>
//           <input type="text" onChange={handleUsername} required></input>
//         </div>

//         <div>
//           <label>password</label>
//           <input type="password" onChange={handlePassword} required></input>
//         </div>

//         <div>
//           <label>Email</label>
//           <input type="email" onChange={handleEmail} required></input>
//         </div>

//         <button type="submit">Create User</button>

//       </form>

//     </div>
//   );
// }

// function ListItem({ itemName }) {
//   return (
//     <div>
//       Hiruka
//       <Hiruka />
//       {itemName}
//     </div>
//   )
// }

// function Hiruka() {
//   return (
//     <div>
//       red
//     </div>
//   )
// }
// export default App;

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [edit, setEdit] = useState(null);

  function getUsers() {
    axios.get("http://localhost:8080/users")
      .then(function (response) {
        setUsers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function handleUsername(event) {
    setUsername(event.target.value);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
  }
  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function createUser(event) {
    event.preventDefault();

    const data = {
      username: username,
      password: password,
      email: email,
    };

    axios.post("http://localhost:8080/users", data) // Changed endpoint to '/user'
      .then(function (response) {
        getUsers();
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function updateUser(event) {
    event.preventDefault();

    const data = {
      username: username,
      password: password,
      email: email,
    }
    axios.put("http://localhost:8080/users/" + edit, data)
      .then(function (response) {
        getUsers();
        setEdit(null);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <h1>Counter : {count}</h1>
      <button type="button" onClick={increase}>Increase</button>
      <button type="button" onClick={decrease}>Decrease</button>
      <button type="button" onClick={getUsers}>Get Users</button>

      {users && users.map((row) => (
        <div key={row.id}>
          {row.username} - {row.email} - {row.id}

          <button type="button" onClick={() => {
            setEdit(row.id);
            setUsername(row.username);
            setEmail(row.email);
          }}>Edit</button>

          <button type="button" onClick={() => {
            axios.delete("http://localhost:8080/users/" + row.id)
              .then(function () {
              })
              .catch(function (error) {
                console.log(error);
              });

          }}>Delete</button>
        </div>
      ))
      }

      {!edit &&

        <div>

          <h2>CREATE USER</h2>
          <form onSubmit={createUser}>
            <div>
              <label>Username</label>
              <input type="text" onChange={handleUsername} required />
            </div>

            <div>
              <label>Password</label>
              <input type="password" onChange={handlePassword} required />
            </div>

            <div>
              <label>Email</label>
              <input type="email" onChange={handleEmail} required />
            </div>

            <button type="submit">Create User</button>
          </form>
        </div>
      }
      {edit &&


        // 1.define a state called edit, and ser users id when edit button is clicked
        // 2.conditionally render edit form when edit state is nit null
        // 3.add acancel button to edit form, and when it is clicked, ser edit state to null
        <div>

          <h2>EDIT USER</h2>

          <form onSubmit={updateUser}>
            <div>
              <label>Username</label>
              <input type="text" onChange={handleUsername} value={username} required />
            </div>

            <div>
              <label>Password</label>
              <input type="password" onChange={handlePassword} required />
            </div>

            <div>
              <label>Email</label>
              <input type="email" onChange={handleEmail} value={email} required />
            </div>

            <button type="submit">Update User</button>
            <button type="button" onClick={() => {
              setEdit(null);
            }}>Cancel</button>
          </form>



        </div >
      }
    </div>
  );

}

export default App;
