const Stan = require("node-nats-streaming");

module.exports = class Publisher {
  constructor(client) {
    this.client = client;
  }
  publish(data) {
    return new Promise((resolve, reject) => {
      this.client.publish(this.subject, JSON.stringify(data), (err) => {
        if (err) {
          console.log(err);
          reject(err);
        }
        console.log("Event Published to Subject", this.subject);
        resolve();
      });
    });
  }
};
