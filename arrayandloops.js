var fruits, item;


fruits = ['lemon', 'papya', 'pear', 'peach'];
let element_list = document.getElementById('list');
fruits.forEach((item) => {
  let new_li = document.createElement('li');
  new_li.innerText = item;

  element_list.appendChild(new_li);
});
