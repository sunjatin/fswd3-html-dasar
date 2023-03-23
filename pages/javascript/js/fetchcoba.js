let data = {
  name: 'Genta',
  city: 'Bongas',
  hobi: ['Nafas', 'Tidur'],
};

let fetchOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
};

fetch('https://crudcrud.com/api/aff52cc0d3ea4ed29c22dd859ecb5539/mahasiswa', fetchOptions)
  .then((response) => response.json())
  .then((data) => console.log(data));
