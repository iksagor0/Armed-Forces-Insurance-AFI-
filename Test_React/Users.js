function Users(text) {
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  return text ? text : "Users";
}

/*
{users, setShowUser}

        
*/
