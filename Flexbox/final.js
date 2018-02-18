$(document).ready(function(){
    $(".hover").hover(function(){
        $(this).css("font-size", "50px");
    }, function() {
        $(this).css("font-size", "15px");
    });
});
let repos;
loadRepo('https://api.github.com/users/The-Iron-Gummy/repos', loadRepoCallback);
function loadRepo(url, callback){
    const gitHubRequest = new XMLHttpRequest();
    gitHubRequest.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200){
        repos = JSON.parse(this.responseText);
        callback(this);
    }
};
gitHubRequest.open("GET", url, true)
gitHubRequest.send();
}

function loadRepoCallback(gitHubRequest){
    let container = document.querySelector('.container');
    let output = [];
    for (let i = 0; i < repos.length; i++){
        let repo = repos[i];
        output.push(`<li class="block">
                            <h3><a href=${repo.html_url}>${repo.name}</a></h3>
                            <p>${repo.description}<span>${repo.language}</span></p>
                        </li>`);
        }
        container.innerHTML = output.join('')
        console.log("output");
    }