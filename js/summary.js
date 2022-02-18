const head = document.getElementsByTagName('h1');

for(const h1 of head){
    h1.style.textAlign = 'center';
    h1.style.color = 'green';
    h1.style.fontSize = '50px';
}

const list = document.getElementsByTagName('li');

for(const li of list){
    li.style.display = 'flex';
    li.style.justifyContent = 'center';
    li.style.border = '1px solid black';
    li.style.padding = '5px';
    li.style.margin = '10px 50px';
}



const blogs = document.getElementsByTagName('p');

for(const blog of blogs){
    // console.log(bolg);
    blog.style.backgroundColor = 'black';
    blog.style.color = 'white';
    blog.style.margin = '20px 50px'
    blog.style.padding = '30px';
    blog.style.textAlign = 'justify';
}

const temp = document.getElementById('new');

temp.innerHTML = `
    <h3>Lorem ipsum dolor sit amet consectetur.</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ex porro dolorem obcaecati fugiat quae ad in praesentium amet minus facilis provident, tenetur minima perferendis omnis. Adipisci, laborum! Et, tempore?</p>
`


// element add 

const friends = document.getElementById('addremove');
const tenth = friends.children[8];

friends.removeChild(tenth);

// element remove 

const friend = document.createElement('li');

friend.innerText = 'friend-11';
addremove.appendChild(friend);