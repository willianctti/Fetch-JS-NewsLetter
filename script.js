// fetch('https://reqres.in/api/users')
// .then((res) => res.json())
// .then((data) => console.log(data))
// .catch((err) => console.log(err))

function enviarNome() {

var name = document.getElementById('name').value
var lastname = document.getElementById('lastname').value
var email = document.getElementById('email').value



fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        first_name: name,
        last_name: lastname,
        email: email,

    })
})
.then(res => res.json())
.then((data) => console.log(data))
.catch((err) => console.log(err))

}
