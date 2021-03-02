var listContainer = document.querySelector('#conatiner #lista');


var inputElement = document.querySelector('#conatiner #input');
var buttonElement = document.getElementsByTagName('button');

var nomes = JSON.parse(localStorage.getItem('names_list')) ||[];

function list() {

    listContainer.innerHTML = '';
    
    for (nome of nomes) {
        var listElement = document.createElement('li');
        var listItem = document.createTextNode(nome);

        var deleteElement = document.createElement('a');
        deleteElement.setAttribute('href', '#');
        deleteElement.setAttribute('onclick', 'deleteName(' + pos + ')')

        var pos = nomes.indexOf(nome);
        var deleteText = document.createTextNode(' ' + 'Feito');
        deleteElement.appendChild(deleteText);

        listElement.appendChild(listItem);
        listElement.appendChild(deleteElement);
        listContainer.appendChild(listElement);

        console.log(deleteElement)
    }
}

list();

function addName() {
    var newName = inputElement.value;
    nomes.push(newName);
    inputElement.value = '';

    list();
    storage();
}

inputElement.onchange = addName;

function deleteName(pos) {
    nomes.splice(0, 1);
    list();
    storage();
}

function storage(){
    localStorage.setItem('names_list', JSON.stringify(nomes))
}

