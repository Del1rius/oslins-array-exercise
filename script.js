// let array1 = document.getElementById("input")
let array = [];

function add () {
    let valueBe = document.getElementById("input").value
    array.push(valueBe)
    valueBe = document.getElementById("dis").innerHTML = array;
};

function addPerson(){
    let myName = document.getElementById("name").value
    let mySurname = document.getElementById("surname").value
    let myAge = document.getElementById("age").value
    let newPerson = [myName, mySurname, myAge]
    people.push(newPerson) 
};

let people = [
  {
    name: "Timothy",
    surname: "Barry",
    age: 20,
  },
  {
    name: "Sidwell",
    surname: "Batyi",
    age: 18,
  },
  {

    name: "Lyle",
    surname: "Brown",
    age: 23,
  },
  {

    name: "Xola",
    surname: "Bangaza",
    age: 18,
  },
  {

    name: "Olwethu",
    surname: "Bhiya",
    age: 18,
  },
  {

    name: "Zulaigah",
    surname: "Benjamin",
    age: 20,
  },
  {

    name: "Marcel",
    surname: "Brown",
    age: 19,
  },
  {

    name: "Ridhaa",
    surname: "Gabier",
    age: 22,
  }
];


let myPeople = document.getElementById("objectsPeople");
people.forEach((per) => {
  myPeople.innerHTML += `
  <table class="table table-dark text-white text-center m-0 p-0 border-white">
        <tr class="" style="width: 33%">
            <td class="fs-4 text-center border-2" style="width: 33%">${per.name}</td>
            <td class="fs-4 text-center border-2" style="width: 33%">${per.surname}</td>
            <td class="fs-4 text-center border-2" style="width: 33%">${per.age}</td>
        </tr>
    </table>
    `;
});

    

