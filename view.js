function show() {
    let app = document.getElementById("app");

    let attacks = "";
    for (let i = 0; i < model.player.superSmash.attacks.attackNames.length; i++) {
        attacks +=`
        <button onclick="attack(${model.player.superSmash.attacks.power[i]})">
            ${model.player.superSmash.attacks.attackNames[i]}
        </button>`;
    }

    let html = `
        <h1>pokemon battle</h1>
        <div id="player">
        <img src="${model.player.superSmash.image()}" <br>
        ${model.player.superSmash.name} <br>
        ${model.player.superSmash.health} <br>
        ${attacks}
        </div>
        <div id="boss">
        <img src="${model.boss.superSmash.image()}"> <br>
           name: ${model.boss.superSmash.name} <br>
           hp: ${model.boss.superSmash.health} <br>
           ${model.attackMovePower  == ""
           ? ""
           :`${model.boss.superSmash.name} used ${model.attack}!<br> it attacked with ${model.attackMovePower} damage!`}
        </div>     
    `;
    app.innerHTML = html;
}