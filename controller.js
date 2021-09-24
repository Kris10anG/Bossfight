function playerAttack (attackpoints) {
    if (model.player.superSmash.health > 0) {
        model.boss.superSmash.health -= attackpoints;
        bossAttack();
    }
    if (model.player.superSmash.health < 0) model.player.superSmash.health = 0;
    console.log(attackpoints, model.boss.superSmash.health);
    show();
}

function bossAttack() {
    if (model.boss.superSmash.health > 0) {
        let randomBossAttackIndex = Math.floor(Math.random() *
            model.boss.superSmash.attacks.attackNames.length);

        model.attackMovePower = model.boss.superSmash.attacks.power[randomBossAttackIndex];
        model.attack = model.boss.superSmash.attacks.attackNames[randomBossAttackIndex];

        model.player.superSmash.health -= model.attackMovePower;
        // if (model.attack === "")
    }

    if (model.boss.superSmash.health < 0) model.boss.superSmash.health = 0;
}