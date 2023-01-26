//https://api.github.com/users/

const APICALL = 'https://api.github.com/users/';
const affichage = document.querySelector('.affichage');
const form = document.querySelector('.form-github-recherche');
const inpRecherche = document.querySelector('.inp-recherche');

async function dataGitHub(utilisateur) {

    const reponse = await fetch(`${APICALL}${utilisateur}`)
    const data = await reponse.json();

    creationCarte(data);

}

dataGitHub('jonathanrazakalalaina');

function creationCarte(user) {

    const carteHTML = `
    
    <div class="carte">
        <img src="${user.avatar_url}" alt="icone avatar" class="avatar">
        <h2>${user.name}</h2>
        <ul class="cont-infos">
            <li class="followers">Followers : ${user.followers}</li>
            <li class="etoiles">Repos : ${user.public_repos}</li>
            <li class="">Lien du profil: <a href="${user.html_url}" target='_blank'>${user.html_url}</a></li>
            <li class="bio">Bio : ${user.bio}</li>
        </ul>
    </div>

    `;
    affichage.innerHTML = carteHTML;

}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(inpRecherche.value.length > 0) {

        dataGitHub(inpRecherche.value);
        inpRecherche.value = '';

    }
})







