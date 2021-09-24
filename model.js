//model
const model = {
    health: 0,
    player: {
        superSmash: {
            name: "mario",
            health: 100,
            image: function() { return this.health > 0? "mario.gif" : "luigiwon.gif"},
            attacks: {
                attackNames: ["fireball", "cape", "super jump punch", "final smash"],
                power: [20, 10, 30, 50],
            }
        }
    },
    boss: {
        superSmash: {
            name: "luigi",
            health: 100,
            image: function() { return this.health > 0 ? "luigi.gif" : "mario won.gif" },
            attacks: {
                attackNames: ["fireball", "green missile", "fire jump punch", "final smash"],
                power: ["20", "40", "50", "50"],
            }
        }
    },
    attackMovePower: "",
    attack: "",
};