var selectedRow = null
var sexo
var hobby

function validacao() {
    if (validate()) {
        var dadosFormulario = lerDados();
        if (selectedRow == null)
            inserirDados(dadosFormulario);
        else
            atualizarRegistro(dadosFormulario);
        resetarFormulario();
    }
}

function lerDados() {
    debugger;
    var dadosFormulario = {};
    dadosFormulario["nome"] = document.getElementById("nome").value;
    dadosFormulario["data"] = document.getElementById("data").value;
   // dadosFormulario["sexo"] = document.getElementById("sexo").value;
    debugger;
    var opcoesSexo = document.getElementsByName("sexo");

    for(i=0; i<opcoesSexo.length; i++){
        if(opcoesSexo[i].checked){
            var sexo = opcoesSexo[i].value;
            dadosFormulario["sexo"] = sexo;
        }
    }
   // dadosFormulario["hobby"] = document.getElementById("hobby").value;
    var habilidade = document.getElementsByName("hobby");
    var hobby = "";

    for(i=0; i<habilidade.length; i++){
        if(habilidade[i].checked) {
            hobby += habilidade[i].value+",";
            dadosFormulario["hobby"] = hobby;
        }
    }
    dadosFormulario["estado"] = document.getElementById("estado").value;
    dadosFormulario["msg"] = document.getElementById("msg").value;
    return dadosFormulario;
}

function inserirDados(dado) {
    debugger;
    var table = document.getElementById("tabela").getElementsByTagName('tbody')[0];
    var novaLinha = table.insertRow(table.length);
    
    cell1 = novaLinha.insertCell(0);
    cell1.innerHTML = dado.nome;
    cell2 = novaLinha.insertCell(1);
    cell2.innerHTML = dado.data;
    cell3 = novaLinha.insertCell(2);
    cell3.innerHTML = dado.sexo;
    cell4 = novaLinha.insertCell(3);
    cell4.innerHTML = dado.hobby;
    cell5 = novaLinha.insertCell(4);
    cell5.innerHTML = dado.estado;
    cell6 = novaLinha.insertCell(5);
    cell6.innerHTML = dado.msg;
    cell6 = novaLinha.insertCell(6);
    cell6.innerHTML = `<a onClick="Editar(this)">Editar</a>
                       <a onClick="deletar(this)">Delete</a>`;
}

function resetarFormulario() {
    debugger;
    document.getElementById("formularioDados").reset();
    document.getElementById("nome").value = "";
    document.getElementById("data").value = "";
    document.getElementById("estado").value = "";
    document.getElementById("msg").value = "";
    selectedRow = null;
}

function Editar(td) {
    debugger;
    selectedRow = td.parentElement.parentElement;

    document.getElementById("nome").value = selectedRow.cells[0].innerHTML;
    document.getElementById("data").value = selectedRow.cells[1].innerHTML;
    //document.getElementsByName("sexo").value = selectedRow.cells[2].innerHTML;
    var sexo  = selectedRow.cells[2].innerText;
        if(sexo == "Masculino")
        {
            document.getElementById("sexoMasculino").checked = true;
        }
        else  if(sexo == "Feminino")
            {
            document.getElementById("sexoFeminino").checked = true;
        }

    var hobby = selectedRow.cells[3].innerText;
        var lista = hobby.split(",");
        for(var i=0; i<lista.length; i++){
            
            var hobbyAtual = lista[i];

            if(hobbyAtual == "Futebol")
            {
                document.getElementById("Futebol").checked = true;
            }
            else if(hobbyAtual == "Pescar" || hobbyAtual == " Pescar")
            {
                document.getElementById("Pescar").checked = true;
            }
            else if(hobbyAtual == "Ler" || hobbyAtual == " Ler")
            {
                document.getElementById("Ler").checked = true;
            }
            else if(hobbyAtual == "Academia" || hobbyAtual == " Academia")
            {
                document.getElementById("Academia").checked = true;
            }
            else if(hobbyAtual == "Natação" || hobbyAtual == "Natação")
            {
                document.getElementById("Natação").checked = true;
            }
            else if(hobbyAtual == "Ciclismo" || hobbyAtual == "Ciclismo")
            {
                document.getElementById("Ciclismo").checked = true;
            }   
        }
    document.getElementById("estado").value = selectedRow.cells[4].innerHTML;
    document.getElementById("msg").value = selectedRow.cells[5].innerHTML;
}
function atualizarRegistro(dadosFormulario) {
    selectedRow.cells[0].innerHTML = dadosFormulario.nome;
    selectedRow.cells[1].innerHTML = dadosFormulario.data;
    selectedRow.cells[2].innerHTML = dadosFormulario.sexo;
    selectedRow.cells[3].innerHTML = dadosFormulario.hobby;
    selectedRow.cells[4].innerHTML = dadosFormulario.estado;
    selectedRow.cells[5].innerHTML = dadosFormulario.msg;
}

function deletar(td) {
    if (confirm('Tem certeza que deseja deletar este registro ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("tabela").deleteRow(row.rowIndex);
        resetarFormulario();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("nome").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError"))
            document.getElementById("fullNameValidationError");
    }
    return isValid;
}