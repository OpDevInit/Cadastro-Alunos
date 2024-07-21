
var students = [
    {
        id: 1,
        nome: "Pedro Antonio",
        email: "pedro123@gmail.com",
        telefone: "(11) 93729-9937",
        curso: "Kotlin",
        turno: "Tarde"

    },
    

]
loadStudents();

function loadStudents() {
    for (let prod of students) {
        addNewRow(prod);
    }
}

//Save a product

function save(){
    /*
    var prod = {
        id: students.length + 1,
        name: document.getElementById("inputName").value,
        email: document.getElementById("inputEmail").value,
        phone:document.getElementById("inputPhone").value,
        course: document.getElementById("selectCategory").value,
        promotion: document.getElementById("checkBoxPromotion").checked,
        new:document.getElementById("checkBoxNewProduct").checked,
    };


    addNewRow(stud);
    students.push(stud)
    */
}

function addNewRow(students){
    var table = document.getElementById("studentsTable");

    var newRow = table.insertRow();

    var idNode = document.createTextNode(students.id);
    newRow.insertCell().appendChild(idNode);

    var nomeNode =  document.createTextNode(students.nome);
    newRow.insertCell().appendChild(nomeNode);

    var emailNode= document.createTextNode(students.email);
    newRow.insertCell().appendChild(emailNode);

    var telNode = document.createTextNode(students.telefone)
    newRow.insertCell().appendChild(telNode);

    var cursoNode = document.createTextNode(students.curso);
    newRow.insertCell().appendChild(cursoNode);

    var turnoNode = document.createTextNode(students.turno)
    newRow.insertCell().appendChild(turnoNode);

}