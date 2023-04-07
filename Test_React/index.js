const App = ({ text }) => {
  const [users, setUsers] = React.useState([]);
  const [showUser, setShowUser] = React.useState(null);
  const [todo, setTodo] = React.useState();

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));

    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, []);

  // console.log(Users(todo));

  return (
    <>
      <h1>{Users(todo?.title)}</h1>
      <div className="react">
        <h1>{text}</h1>
        {!showUser ? (
          users.map((user) => (
            <div key={user?.id} onClick={() => setShowUser(user)}>
              {user?.name}
            </div>
          ))
        ) : (
          <div onClick={() => setShowUser(null)}>
            <b>{showUser?.name}</b>
            <span>{showUser?.email}</span>
          </div>
        )}
      </div>
    </>
  );
};

const reactContainer = document.querySelector(".react-root");
ReactDOM.render(<App text="Hello AFI" />, reactContainer);

// ==================
// function Users({ users }) {
//   return ({users.map((user) => (
//       <div>{user?.name}</div>
//     ))
//   });
// }
