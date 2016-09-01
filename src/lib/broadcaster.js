const tabs = require("sdk/tabs");

class Broadcaster {
  constructor(newTabURL) {
    this.url = newTabURL;
    this.tabs = new Set();
    tabs.on("ready", tab => {
      if (tab.url === this.url) {
        this.tabs.add(tab);
      } else {
        this.tabs.delete(tab);
      }
    });
    tabs.on("close", tab => this.tabs.delete(tab));
  }



}
