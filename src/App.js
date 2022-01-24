import "./App.css";
import useFetch from "./useFetch";

function App() {
  const { data: user, loading, error, refetch } = useFetch(
    "https://randomuser.me/api"
  );

  if (loading) return <h1> LOADING...</h1>;

  if (error) console.log(error);

  return (
    <div className="App">
      <h1>
        {user?.results[0].name.title}  {user?.results[0].name.first}  {user?.results[0].name.last}  
      </h1>

      <button onClick={refetch}> Refetch</button>
    </div>
  );
}

export default App;
