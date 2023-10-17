import React, { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    // create a new AbortController instance, use this as cleanup
    // when fetching data. i.e so if the user no longer needs the data
    // we dont randomly render it when we get new data.
    const controller = new AbortController();
    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => setUsers(res.data))
      .catch((err) => {
        /*below we need to add this so the CanceledError (from our)
        cleanup doesnt get shown.*/
        if (err instanceof CanceledError) return;
        console.log(err);
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);
  return (
    <>
      {isLoading && <div className="spinner--border"></div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
