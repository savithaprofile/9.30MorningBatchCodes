const App = () => {

  const data = [
    { id: 1, name: "John", age: 28, city: "New York" },
    { id: 2, name: "Alice", age: 24, city: "Los Angeles" },
    { id: 3, name: "Bob", age: 30, city: "Chicago" },
    { id: 4, name: "Eve", age: 234, city: "Miami" },
    { id: 5, name: "Charlie", age: 29, city: "San Francisco" },
  ]
  return (
    <div>
      {
        data.map((person) => {
          return (
            <div style={{ border: "2px solid black", margin: "10px", padding: "10px" }}>
              <h1>hello {person.name} </h1>
              <h2>Your age is {person.age}</h2>
              <h3>You live in {person.city}</h3>
            </div>

          )  
        })
        }
    </div>
  )
}
export default App