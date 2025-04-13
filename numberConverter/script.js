const users = [
    { name: "John Doe", age: 25, location: "New York", email: "john@example.com" },
    { name: "Jane Smith", age: 32, location: "Los Angeles", email: "jane@example.com" },
    { name: "Sam Green", age: 27, location: "Chicago", email: "sam@example.com" }
  ];


users.forEach(({name,age,location,email})=>{
    console.log(`Name: ${name}, Age: ${age}, location: ${location}, Email: ${email}`)
})
