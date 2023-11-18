const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
    { name: "sai", age: 27, profession: "admin" }
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    data.forEach((elem) => {
        if(elem.profession == 'developer'){
            console.log(`${elem.name} is a developer`);
        }
    })
  }
  
  // 2. Add Data
  function addData() {
    let n = prompt("Enter Name");
    let a = prompt("Enter Age");
    let p = prompt("Enter Profession");
    data.push({name:n, age:parseInt(a), profession: p});
    console.log(...data);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    data.forEach((elem, i) => {
      if(elem.profession == 'admin'){
        data.splice(i,1);
      }
    })
    console.log(...data);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let arr = [
    { name: "Rahul", age: 23, profession: "SDE" },
    { name: "Ananya", age: 20, profession: "developer" },
  ];

  data.push(...arr);
  console.log(...data);
  }
  
  // 5. Average Age
  function averageAge() {
    let sum = 0;
    data.forEach((elem) => {
      sum += elem.age;
    })
    let avg = sum/data.length;
    console.log(`Average age of all people is ${avg}`);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    let count = 0;
    data.forEach((elem) => {
      if(elem.age > 25){
        count++;
        console.log(`${elem.name}'s age is above 25`);
      }
    })
    if(count == 0){
      console.log(`No one age is above 25`);
    }
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let ans=uniqueProfession();
    console.log(ans);
  }
  function uniqueProfession() {
    const professions = data.map(item => item.profession);
    const unique = professions.sort().filter((profession, index, array) => {
      return index === 0 || profession !== array[index - 1];
    });
  
    return unique;
  }
  
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a,b) => a.age - b.age);
    console.log(...data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    data.forEach((elem) => {
      if(elem.name == 'john'){
        elem.profession = 'manager';
      }
    })
    console.log(...data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let ans=getCountOfProfessions();
    console.log(ans);
  }
  function getCountOfProfessions() {
    const professionCount = {};
  
    data.forEach(item => {
      const { profession } = item;
      if (professionCount[profession]) {
        professionCount[profession] += 1;
      } else {
        professionCount[profession] = 1;
      }
    });
  
    return professionCount;
  }