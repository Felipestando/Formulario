var dados, index;

function validacao() {
	if(document.formularioDados.nome.value == ""){
		alert("Por Favor, preencha o campo nome.");
		document.formularioDados.nome.focus();
		return false;
	}
    
}

function cadPessoa(nome, data, sexo, hobby, estado, msg){
	dados = document.getElementById("formulario")
	var qtdLinhas = dados.rows.length;
	var linha = dados.insertRow(qtdLinhas);
	var linhaParam;

debugger;

	//validando os hobby
	var skillLength = document.formularioDados.hobby.length;
	var hobby = "";

	for(i=0; i<skillLength; i++){
		var skillChecked = document.formularioDados.hobby[i].checked;
		if(skillChecked) {

			hobby += document.formularioDados.hobby[i].value+", ";
		}
	}
	// validando o sexo
	var sexo = document.formularioDados.sexo;

	for(i=0; i<sexo.length; i++){
		if(sexo[i].checked){
			sexo[i].checked = true;
			sexo = document.formularioDados.sexo[i].value;
		}
	}
	//inserindo as colunas
	var cellNome = linha.insertCell(0);
	var cellData = linha.insertCell(1);
	var cellSexo = linha.insertCell(2);
	var cellHobby = linha.insertCell(3);
	var cellEstado = linha.insertCell(4);
	var cellMsg = linha.insertCell(5);

	//inserindo dados na tabela
	cellNome.innerHTML = nome;
	cellData.innerHTML = data;
	cellSexo.innerHTML = sexo;
	cellHobby.innerHTML = hobby;
	cellEstado.innerHTML = estado;
	cellMsg.innerHTML = msg;

    document.getElementById("formularioDados").reset();
	preencherAlteracao();

}

     
function alterDados(nome, data, sexo, hobby, estado, msg){
	//alterando os dados da tabela
	var skillLength = document.formularioDados.hobby.length;
	var hobby = "";
	for(i=0; i<skillLength; i++){
		var skillChecked = document.formularioDados.hobby[i].checked;
		if(skillChecked) {

			hobby += document.formularioDados.hobby[i].value+", ";
		}
	}

	dados.rows[index].cells[0].innerHTML = nome;
	dados.rows[index].cells[1].innerHTML = data;
	dados.rows[index].cells[2].innerHTML = sexo;
	dados.rows[index].cells[3].innerText = hobby;
	dados.rows[index].cells[4].innerHTML = estado;
	dados.rows[index].cells[5].innerHTML = msg;

}

function preencherAlteracao() {
	for(i = 0; i < dados.rows.length; i++){

		dados.rows[i].onclick = function()
		{
			
		document.getElementById("formularioDados").reset();
		index = this.rowIndex;
		document.getElementById("nome").value = dados.rows[index].cells[0].innerText;
		document.getElementById("data").value = dados.rows[index].cells[1].innerText;
		document.getElementById("estado").value = dados.rows[index].cells[4].innerText;
		document.getElementById("msg").value = dados.rows[index].cells[5].innerText;

		var sexo  = dados.rows[index].cells[2].innerText;
		if(sexo == "Masculino")
		{
			document.getElementById("sexoMasculino").checked = true;
		}
		else  if(sexo == "Feminino")
			{
			document.getElementById("sexoFeminino").checked = true;
		}
		debugger;
		var hobby = dados.rows[index].cells[3].innerText;
		var lista = hobby.split(",");
		for(var i=0; i<lista.length; i++){
			
			var hobbyAtual = lista[i];

			if(hobbyAtual == "Futebol")
			{
				document.getElementById("Futebol").checked = true;
		    }
		    else if(hobbyAtual == " Pescar")
			{
				document.getElementById("Pescar").checked = true;
		    }
		    else if(hobbyAtual == " Ler")
			{
				document.getElementById("Ler").checked = true;
		    }
		    else if(hobbyAtual == " Academia")
			{
				document.getElementById(" Acadmeia").checked = true;
		    }
		    else if(hobbyAtual == " Natação")
			{
				document.getElementById("Natação").checked = true;
		    }
		    else if(hobbyAtual == " Ciclismo")
			{
				document.getElementById("Ciclismo").checked = true;
		    }	
		}
		
	}

  }
  document.getElementById("formularioDados").reset();
}

function deletar(){

	for(var i=0; i<dados.rows.length; i++)
	{
		if (index == i){
			dados.deleteRow(index);
			return;
	}
}
document.getElementById("formularioDados").reset();
}



