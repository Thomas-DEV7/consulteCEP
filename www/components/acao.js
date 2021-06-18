window.onload = function(){

  const buscar = document.querySelector("#buscar");

  const cep = document.querySelector("#cep");

  const opcoes = {
    method:'GET',
    mode:'cors',
    cache:'default'
  }

  buscar.addEventListener("click", function(){
    fetch(`https://viacep.com.br/ws/${ cep.value }/json`, opcoes)
    .then(response => {response.json()
    .then(data => {
      document.querySelector("#rua").value = data['logradouro'];
      document.querySelector("#bairro").value = data['bairro'];
      document.querySelector("#estado").value = data['uf'];
      document.querySelector("#cidade").value = data['localidade'];
    })
    })
  });
}