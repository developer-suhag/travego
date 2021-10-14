//  progress part start 
 const getProgress = () => {
    fetch("../../jsonFile/progressData.json").then(res=> res.json()).then(data=> uploadProgress(data))
}

const uploadProgress = data => {
    const progressItems = document.querySelector(".progress");
    data.forEach(item => {
    const canditorsDiv = document.createElement('div');
    canditorsDiv.classList.add("canditors");
    canditorsDiv.innerHTML = `
    <div class="practical">
        <div class="progress-info">
            <div class="progress-name">${item.name}</div>
            <div class="percentage-num">${item.progressParcentage}%</div>
        </div>
        <div class="progress-bar">
            <div class="percentagem" data-done="80" style="width: ${item.progressParcentage}%;"></div>
        </div>
    </div>
    `;
    progressItems.appendChild(canditorsDiv)
});
}
getProgress()
//  style="width: ${item.progressParcentage}%;"

// const progress = document.querySelector(".percentagem")
// setTimeout(() => {
//     progress.style.opacity = 1;
//     progress.style.width=progress.getAttribute('data-done')+"%";
// }, 500);
// const upload = () => {
//     const progressBar = document.querySelector('.percentagem');
//     progressBar.setAttribute("id" , "play-animation")
// }
// upload();

// progress part end 

// team member part start 
const getTeamMembers = () => {
    fetch("../../jsonFile/teamData.json").then(res=> res.json()).then(data=> uploadTeams(data))
}
const uploadTeams = teams => {
    const teamsItems = document.querySelector("#teams");
    teams.forEach(team => {
        console.log(team)
    const canditorsDiv = document.createElement('div');
    canditorsDiv.classList.add("lg:w-1/3");
    canditorsDiv.innerHTML = `
        <div class="bg-white shadow-lg m-4 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img class="team-img h-3/5 w-full object-cover object-center" src=${team.img} alt="blog">
            <div class="p-6 text-center">
                <h3 class="team-name">${team.name}</h3>
                <h4 class="team-job">${team.job}</h4>
            </div>
        </div>
    `;
    teamsItems.appendChild(canditorsDiv)
});
}
getTeamMembers()
// team member part end

