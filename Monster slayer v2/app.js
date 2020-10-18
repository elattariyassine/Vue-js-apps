const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      heal: 5,
      isGameOn: false,
      logs: [],
    };
  },
  methods: {
    attack() {
      const monsterDamageTaken = this.calculateAttackDamage(10, 15);
      const playerHealthTaken = this.calculateAttackDamage(10, 15);
      this.monsterHealth -= monsterDamageTaken;
      this.playerHealth -= playerHealthTaken;
      this.logDamage(monsterDamageTaken, playerHealthTaken);
      this.checkIfSomeOneLost();
    },
    calculateAttackDamage(min, max) {
      return Math.floor(min + Math.random() * (max - min));
    },
    specialAttack() {
      const monsterDamageTaken = this.calculateAttackDamage(10, 15);
      this.monsterHealth -= monsterDamageTaken;
      this.logDamage(monsterDamageTaken);
      this.checkIfSomeOneLost();
    },
    playerHeal() {
      this.playerHealth += this.heal;
      this.logs.push({
        id: Math.random() * 1000,
        heal: true,
        message: `You Healed ${this.heal}%`,
      });
      this.playerHealth >= 100 ? (this.playerHealth = 100) : "";
    },
    startGame() {
      this.resetGame();
    },
    surrender() {
      this.resetAndKeepStats();
    },
    checkIfSomeOneLost() {
      //&& this.monsterHealth < this.playerHealth
      if (this.monsterHealth <= 0) {
        this.resetAndKeepStats();
        return alert("You won");
      }
      if (this.playerHealth <= 0) {
        this.resetAndKeepStats();
        return alert("You lost");
      }
    },
    logDamage(monsterDamageTaken, playerHealthTaken) {
      if (playerHealthTaken !== undefined) {
        this.logs.push({
          id: Math.random() * 1000,
          isPlayer: true,
          message: `You did ${monsterDamageTaken}% damage`,
        });
        this.logs.push({
          id: Math.random() * 1000,
          isPlayer: false,
          message: `Monster hits ${playerHealthTaken}% damage`,
        });
      } else {
        this.logs.push({
          id: Math.random() * 1000,
          isPlayer: true,
          isSpecialAttack: true,
          message: `You dealts ${monsterDamageTaken}% damage`,
        });
      }
    },
    styleLog(log) {
      return {
        "log--player": log.isPlayer,
        "log--damage": !log.isPlayer,
        "log--special": log.isSpecialAttack,
        "log--heal": log.heal,
      };
    },
    resetGame() {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.isGameOn = true;
      this.logs = [];
    },
    resetAndKeepStats() {
      this.isGameOn = false;
    },
  },
  computed: {
    generateMonsterHealthStyle() {
      return { width: this.monsterHealth + "%" };
    },
    generatePlayerHealthStyle() {
      return { width: this.playerHealth + "%" };
    },
  },
});

app.mount("#game");
