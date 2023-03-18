const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const newTodo = document.querySelector('input[name=newTodo]').value;
  addTodo(newTodo);
});

function addTodo(newTodo) {
  //elemen li
  const li = document.createElement('li');
  li.textContent = newTodo;

  //append ke ul
  const ul = document.querySelector(ul);
  ul.appendChild(li); //belum rampung
}
