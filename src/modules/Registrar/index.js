const RegistrarArtifacts = require("../../build/contracts/Registrar.json");

const Web3 = require("web3");
const BN = Web3.utils.BN;
const ZeroClientProvider = require("web3-provider-engine/zero.js");

class Registrar {
  constructor(options) {
    this.Registrar = null;

    this.pollingInterval = null;
    this.account = null;
    this.unlocked = false;
    this.balanceWei = 0;
    this.balance = 0;
    this.address = "REPLACE_WITH_CONTRACT_ADDRESS";
    this.genesisBlock = 0;
    this.loading = false;
    this.options = {
      readonlyRpcURL: "https://mainnet.infura.io",
      autoInit: true,
      getPastEvents: false,
      watchFutureEvents: false,
      connectionRetries: 3,
    };
    Object.assign(this.options, options);
    if (this.options.autoInit) this.initWeb3();
  }

  // hello world : )
  helloWorld() {
    console.log("hello world!");
  }

  /*
   * Connect
   */

  initWeb3() {
    return new Promise((resolve, reject) => {
      let web3Provider = false;

      // check for metamask
      if (global.web3) {
        web3Provider = global.web3.currentProvider;
        // attempt to try again if no web3Provider
      } else if (this.options.connectionRetries > 0) {
        this.options.connectionRetries -= 1;
        setTimeout(() => {
          this.initWeb3()
            .then(resolve)
            .catch(error => {
              reject(new Error(error));
            });
        }, 1000);
        // revert to a read only version using infura endpoint
      } else {
        this.readOnly = true;
        web3Provider = ZeroClientProvider({
          getAccounts: function () {},
          rpcUrl: this.options.readonlyRpcURL,
        });
      }

      if (web3Provider) {
        global.web3 = new Web3(web3Provider);
        this.startChecking();

        if (this.options.getPastEvents) this.getPastEvents();
        if (this.options.watchFutureEvents) this.watchFutureEvents();
      }
    });
  }

  /*
   * Check every second for switching network or switching wallet
   */

  startChecking() {
    if (this.pollingInterval) clearInterval(this.pollingInterval);
    this.getGenesisBlock()
      .then(() => {
        this.pollingInterval = setInterval(this.check.bind(this), 1000);
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  check() {
    this.checkNetwork()
      .then(this.checkAccount.bind(this))
      .catch(error => {
        console.error(error);
        throw new Error(error);
      });
  }

  checkNetwork() {
    return global.web3.eth.net.getId((err, netId) => {
      if (err) console.error(err);
      if (!err && this.network !== netId) {
        this.network = netId;
        return this.deployContract();
      }
    });
  }

  deployContract() {
    if (!this.address || this.address === "REPLACE_WITH_CONTRACT_ADDRESS")
      return new Error("Please provide a contract address");
    this.Registrar = new global.web3.eth.Contract(RegistrarArtifacts.abi, this.address);
  }

  checkAccount() {
    return global.web3.eth.getAccounts((error, accounts) => {
      if (error) throw new Error(error);
      if (accounts.length && this.account !== accounts[0]) {
        this.unlocked = true;
        this.account = accounts[0];
      } else if (!accounts.length) {
        this.unlocked = false;
        this.account = null;
      }
    });
  }

  /*
   * Not Yet Implemented vvvv
   */

  getGenesisBlock() {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }

  getPastEvents() {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }

  watchFutureEvents() {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }

  /*
   *
   * Constant Functions
   *
   */

  interfaceAddr(addr, _interfaceLabel) {
    return this.Registrar.methods
      .interfaceAddr(addr, _interfaceLabel)
      .call()
      .then(resp => {
        return resp;
      })
      .catch(err => {
        console.error(err);
      });
  }
  getManager() {
    return this.Registrar.methods
      .getManager()
      .call()
      .then(resp => {
        return resp;
      })
      .catch(err => {
        console.error(err);
      });
  }

  /*
   *
   * Transaction Functions
   *
   */

  /*
   *
   * Events
   *
   */
}

module.exports = Registrar;
