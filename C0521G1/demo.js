function showAlert() {
	console.log('call function showAlert');
}

function hello(value) {
	alert('chao-xin:' + value);
}

function showAge() {
	let age = document.getElementById('age22').value;
	alert(age);
}

function getValueByTag() {
	console.log('go-here');
	let documentByTag = document.getElementsByTagName('input')[1];
	console.log(documentByTag);

	let name = document.getElementsByTagName('input')[1].value;
	console.log(name);
}

function getCurrentDate () {
	console.log(new Date());
}

function changeText() {
	document.getElementById('showNewText').innerText = new Date();
}

