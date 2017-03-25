const EventNuit= require('events');
const {Deadpool} = require('./Deadpool');
const {SpiderMan} = require('./SpiderMan');

var jour = true;
//const Journuit= new Journuit();
class Poney {
  constructor(nom) {
    this.nom = nom;
    this.energy = 0;
    this.isUnicorn = false;
    this.deadpool = new Deadpool();
    this.spiderMan= new SpiderMan();
    this.initInterval();
    this.JourNuit();
    const jour = true;
  }

  JourNuit() {
    const Myevent= new Myevent();
    
    Myevent.on

  }


  initInterval() {
    if (jour) {

      this.intervalEnergy = setInterval(() => {
        this.energy += 15;
        this.deadpool.DeadPoolenergie();
        this.deadpool.energieDP -= 5;
        console.log("L'énergie de DeadPoll est de : " + this.deadpool.energieDP);
        this.Spider();
          if (this.energy > 50) {
            if (Math.random() > (1.5-(this.energy/100))) {
              setTimeout(() => this.transformToUnicorn() );
            }
        }
        if(this.deadpool.energieDP<0)
          clearInterval(this.intervalEnergy);
      }, 1100);
    } else {
      this.intervalEnergy = setInterval(() => {
        this.energy += 10;
        if (this.energy > 100) {
          this.transformToUnicorn();
          console.log("pa");
        }
      }, 500);
    }
  }

  transformToUnicorn() {
    this.deadpool.transformPoney()
      .then(() => this.isUnicorn = true)
      .catch(() => this.isUnicorn = false)
      .finally(() => this.energy = 0);
  }

  Spider() {
    this.spiderMan.chevauchPoney()
      .then(()=>this.energy -= 5)
      .catch(()=>this.energy)
      .finally(() => this.spiderMan.chevauchement = false);
  }
}

module.exports = {Poney};

const p1 = new Poney("Pepito");
console.log(p1);

