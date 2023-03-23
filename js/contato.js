const urlUF = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
const cidade = document.getElementById("cidade")
const uf = document.getElementById("uf")

uf.addEventListener('change', async function(){
    const urlCidades = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+uf.value+'/municipios'
    const request = await fetch(urlCidades)
    const response = await request.json()
    console.log(response.length)

    let options = ''
    response.forEach(function(cidades){
        options += '<option>'+cidades.nome+'</option>'
    })
    cidade.innerHTML = options
})

window.addEventListener("load", async ()=>{
    const request = await fetch(urlUF);
    const response = await request.json()


    const options = document.createElement("optgroup")
    response.forEach(function(uf){
        options.innerHTML += '<option>'+uf.sigla+'</option>'
    })

    uf.append(options)
})


//função para o formulário

function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}