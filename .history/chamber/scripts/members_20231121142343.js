const url = './data/members.json';
const cards = document.querySelector('#cards');
 
async function getMembersData() {
  const response = await fetch(url);
  const data = await response.json();
  // console.table(data.members);
  displayMembers(data.members);
}
 
getMembersData();

const displayMembers = (members) => {
  members.forEach((members) => {
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let address = document.createElement('p');
    let number = document.createElement('p');
    let web = document.createElement('p');
    let image = document.createElement('img');
    let member = document.createElement('p');

    name.textContent = members.name;
    address.textContent = members.address;
    number.textContent = members.phone;
    web.textContent = members.website;
    image.setAttribute('src',members.image)
    image.setAttribute('alt','portrait of  ');
    image.setAttribute('loading', "lazy");
    image.setAttribute('width', '340');
    image.setAttribute('height', '440');
    member.textContent = members.membership;

    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(number);
    card.appendChild(web);
    card.appendChild(image);
    card.appendChild(member);
    cards.appendChild(card);
  });
}
 