import { useEffect } from "react";

function App() {
  useEffect(() => {
    async function getData(){
      const response = await fetch("http://localhost:8080/");
      const data = await response.json();
      console.log(data);
    }
    getData();
},[]);
  
  
  return <h1>Hi from Nigeria</h1>
}

export default App;
