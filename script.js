let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.filter((emp) => emp.profession === "developer").forEach((emp) =>
    console.log(emp)
  );
}
function PrintDeveloperbyForEach() {
  for(let emp of arr){
    if(emp.profession === "developer"){
      console.log(emp);
    }
  }
}
function addData() {
  arr.push({id: 4, name: "susan", age: "20", profession: "intern"});
  console.log(arr);
}

function removeAdmin() {
  arr = arr.filter((emp) => emp.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  let newArr = [
    { id: 4, name: "susan", age: "20", profession: "intern" },
    { id: 5, name: "bob", age: "21", profession: "designer" },
    { id: 6, name: "alice", age: "22", profession: "writer" },
  ];
  arr = arr.concat(newArr);
  console.log(arr);
}