module.exports = class Listener {
  constructor(client) {
    this.client = client;
    this.ackWait = 5 * 1000;
  }

  subscriptionOptions() {
    return this.client
      .subscriptionOptions()
      .setDeliverAllAvailable()
      .setManualAckMode(true)
      .setAckWait(this.ackWait)
      .setDurableName(this.queGroupName);
  }
  listen() {
    const subscription = this.client.subscribe(
      this.subject,
      this.queGroupName,
      this.subscriptionOptions()
    );

    subscription.on("message", (msg) => {
      console.log(`Message received: ${this.subject} / ${this.queGroupName}`);

      const parsedData = this.parseMessage(msg);
      this.onMessage(parsedData, msg);
    });
  }
  parseMessage(msg) {
    const data = msg.getData();
    return typeof data === "string"
      ? JSON.parse(data)
      : JSON.parse(data.toString("utf8"));
  }
};
