var dados, index;

function cadPessoa(nome, data, sexo, hobby, estado, msg){
	dados = document.getElementById("formulario")
	var qtdLinhas = dados.rows.length;
	var linha = dados.insertRow(qtdLinhas);
	var linhaParam;

	//validando os hobby
	var skillLength = document.formdados.hobby.length;
	var hobby = "";

	for(i=0; i<skillLength; i++){
		var skillChecked = document.formdados.hobby[i].checked;
		if(skillChecked) {

			hobby += document.formdados.hobby[i].value+", ";
		}
	}
	// validando o sexo
	var sexo = document.formdados.sexo;

	for(i=0; i<sexo.length; i++){
		if(sexo[i].checked){
			sexo[i].checked = true;
			sexo = document.formdados.sexo[i].value;
		}
	}
	//inserindo os dados nas linhas
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

	preencherAlteração();

}

function alterDados(nome, data, sexo, hobby, estado, msg){
	//alterando os dados da tabela
	dados.rows[index].cells[1].innerHTML = nome;
	dados.rows[index].cells[2].innerHTML = data;
	dados.rows[index].cells[3].innerHTML = sexo;
	dados.rows[index].cells[4].innerHTML = hobby;
	dados.rows[index].cells[5].innerHTML = estado;
	dados.rows[index].cells[6].innerHTML = msg;
}

function preencherAlteração() {
	for(i = 0; i < dados.rows.length; i++){

		dados.rows[i].onclick = function()
		{
			debugger;
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

		var hobby = dados.rows[index].cells[3].innerText;
		if(hobby == "Futebol,")
		{
			document.getElementById("Futebol").checked = true;
		}
		else  if(hobby == "Pescar")
			{
			document.getElementById("Pescar").checked = true;
		}
		else  if(hobby == "Ler")
			{
			document.getElementById("Ler").checked = true;
		}
		else  if(hobby == "Academia")
			{
			document.getElementById("Acadmeia").checked = true;
		}
		else  if(hobby == "Natação")
			{
			document.getElementById("Natação").checked = true;
		}
		else  if(hobby == "Ciclismo")
			{
			document.getElementById("Ciclismo").checked = true;
		}

		}
	}

}

function deletar(){

	for(var i=0; i<dados.rows.length; i++)
	{
		if (index == i){
			dados.deleteRow(index);
			return;
		}
	}
}