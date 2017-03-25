/**
 * Created by lepape on 24/03/17.
 */

const BluebirdPromise = require('bluebird');


var instance = null;

class SpiderMan {
  constructor() {
    this.chevauchement = false;
    this.chevauchPoney();
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  chevauchPoney(a) {
    return new BluebirdPromise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.9) {
          this.chevauchement=true;
          console.log("SpiderMan a fatigué un poney...");
          resolve();
        } else {
          //console.log("ICI OK");
          reject();
        }
      })
    });
  }
}

module.exports = {SpiderMan};