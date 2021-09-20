let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];

// ## Task 1

// - In `exercise-2.js` write a program that will take the `hogwarts` array as input and display the names of the people who belong to the Gryffindor house.
// - Use array destructuring to extract the values you need out of the array.

// ### Expected result

// ```
// Harry Potter
// Ron Weasley
// Hermione Granger
// Minerva McGonagall
// Albus Dumbledore
// ```

function displayGryffindorHouseMembers (array) {
  const gryffindorHouseMembersArrayOfObjects = array.filter((person) => person.house === "Gryffindor");
  const gryffindorHouseMembers = gryffindorHouseMembersArrayOfObjects.map((obj) => `${obj.firstName} ${obj.lastName}`);
  return gryffindorHouseMembers;
}

const [member1, member2, member3, member4, member5] = displayGryffindorHouseMembers(hogwarts);

console.log(member1, '<--------- Gryffindor House member1'); // Harry Potter
console.log(member2, "<--------- Gryffindor House member2"); // Ron Weasley
console.log(member3, "<--------- Gryffindor House member3"); 
console.log(member4, "<--------- Gryffindor House member4"); 
console.log(member5, "<--------- Gryffindor House member5"); 


// ## Task 2

// - In `exercise-2.js` write a program that will take the `hogwarts` array as input and display the names of teachers who have pets.
// - Use array destructuring to extract the values you need out of the array.

// ### Expected result

// ```
// Albus Dumbledore
// ```

function displayTeachersWhoHavePet (array) {
  const teachersWhoHavePetArrOfObj = array.filter((person) => {
    return person.occupation === "Teacher" && person.pet !== null;
  });
  const teachersWhoHavePet = teachersWhoHavePetArrOfObj.map((obj) => `${obj.firstName} ${obj.lastName}`);
  return teachersWhoHavePet;
}

const [teacherWhoHavePet] = displayTeachersWhoHavePet(hogwarts);
console.log(teacherWhoHavePet, '<------- teacherWhoHavePet');