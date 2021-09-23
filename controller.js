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
    if (model.boss.superSmash.health <0) {
        let randomBossAttackIndex = math.floor(math.random() *
            model.boss.superSmash.attacks.attackNames.length);

        model.attackMovePower = model.boss.superSmash.attacks.power[randomBossAttackIndex];
        // model.attack = model.boss.superSmash.attacks.attackNames[randomBossAttackIndex];

        // if (model.attack === "")
    }

    if (model.boss.superSmash.health < 0) model.boss.superSmash.health = 0;
}