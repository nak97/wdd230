const url = './data/members.json';
const nameOne = document.querySelector('#company-one');
const nameTwo = document.querySelector('#company-two');
const nameThree = document.quertySelector('#company-three');

 
async function getMembersData() {
  const response = await fetch(url);
  const data = await response.json();
  // console.table(data.members);
  displayMembers(data.members);

name.textContent = ""


}
 
getMembersData();