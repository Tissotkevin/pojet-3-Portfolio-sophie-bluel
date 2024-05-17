const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	e.preventDefault();
	try {
	const response = await fetch('http://' + window.location.hostname + ':5678/api/users/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({email, password}),
});
	if (response.ok) {
		const data = await response.json();
		sessionStorage.setItem('accessToken', data.token);
		window.location.href = './index.html';
	} else {
		const connexion = document.querySelector('div');
		const error = document.createElement('p');
		error.innerText = `"Erreur dans l’identifiant ou le mot de passe"`;
		error.style.textAlign = 'center';
		error.style.color = 'red';
		error.style.marginBottom = '15px';
		connexion.insertBefore(error, connexion.lastElementChild);
	}
}
catch (error) {
	console.log(error)
}
});