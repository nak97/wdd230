const url = './data/members.json';
const cardLax = document.querySelector('#spotlight');
 
async function getMembersData() {
  const response = await fetch(url);
  const data = await response.json();
  // console.table(data.members);
  displayMembers(data.members);
var nameOne = data.members[0];

}
 



 