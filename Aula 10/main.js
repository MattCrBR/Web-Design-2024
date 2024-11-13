let url = "https://67348a32a042ab85d11a97cc.mockapi.io/animal";
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.querySelector("#titulo").innerHTML = data[0].name
    }
    )
    .catch(error=> {
        console.log("Erro: " +error);
    });