
var students = [
    {
        id: 1,
        name: "Pedro Antonio",
        email: "pedro123@gmail.com",
        phone: "(11) 93729-9937",
        course: 2,
        turn1: true,
        turn2: false,
        turn3: false

    },
    {
        id: 2,
        name: "Ricardo",
        email: "Ricardo123@gmail.com",
        phone: "(11) 93729-9937",
        course: 3,
        turn1: false,
        turn2: true,
        turn3: false

    }



]

var courses = [
    { id: 1, name: "Java" },
    { id: 2, name: "Kotlin" },
    { id: 3, name: "SpringBoot" },
];

loadStudents();

function loadStudents() {
    for (let stud of students) {
        addNewRow(stud);
    }
}

//Save a product

function save() {
    var stud = {
        id: students.length + 1,
        name: document.getElementById("inputName").value,
        email: document.getElementById("inputEmail").value,
        phone: document.getElementById("inputPhone").value,
        course: document.getElementById("selectCourse").value,
        turn1: document.getElementById("turn1").checked,
        turn2: document.getElementById("turn2").checked,
        turn3: document.getElementById("turn3").checked,



    };

    console.log("saves");

    addNewRow(stud);
    students.push(stud)

    document.getElementById("formStudent").reset();
}

function addNewRow(stud) {
    var table = document.getElementById("studentsTable");

    var newRow = table.insertRow();

    var idNode = document.createTextNode(stud.id);
    newRow.insertCell().appendChild(idNode);

    var nomeNode = document.createTextNode(stud.name);
    newRow.insertCell().appendChild(nomeNode);

    var emailNode = document.createTextNode(stud.email);
    var cell = newRow.insertCell();
    cell.className = 'd-none d-sm-table-cell'
    cell.appendChild(emailNode);

    var telNode = document.createTextNode(stud.phone)
    cell = newRow.insertCell();
    cell.className='d-none d-sm-table-cell'
    cell.appendChild(telNode);

    var cursoNode = document.createTextNode(courses[stud.course - 1].name);
    cell = newRow.insertCell();
    cell.className='d-none d-sm-table-cell'
    cell.appendChild(cursoNode);

    var options = "";

    if (stud.turn1) {
        options = 'Manhã';
    } if (stud.turn2) {
        options = 'Tarde';
    } if (stud.turn3) {
        options = 'Noite';
    }
    cell = newRow.insertCell();
    cell.className = 'd-none d-sm-table-cell'
    cell.innerHTML = options;
}