
const OrgRegistryArtifacts = require('../../build/contracts/OrgRegistry.json')

const Web3 = require('web3')
const BN = Web3.utils.BN
const ZeroClientProvider = require('web3-provider-engine/zero.js')

class OrgRegistry {
  constructor (options) {

    this.OrgRegistry = null

    this.pollingInterval = null
    this.account = null
    this.unlocked = false
    this.balanceWei = 0
    this.balance = 0
    this.address = 'REPLACE_WITH_CONTRACT_ADDRESS'
    this.genesisBlock = 0
    this.loading = false
    this.options = {
      readonlyRpcURL: 'https://mainnet.infura.io',
      autoInit: true,
      getPastEvents: false,
      watchFutureEvents: false,
      connectionRetries: 3
    }
    Object.assign(this.options, options)
    if (this.options.autoInit) this.initWeb3()
  }

  // hello world : )
  helloWorld () {
    console.log('hello world!')
  }

  /*
   * Connect
   */

  initWeb3 () {
    return new Promise((resolve, reject) => {

      let web3Provider = false

      // check for metamask
      if (global.web3) {
        web3Provider = global.web3.currentProvider
        // attempt to try again if no web3Provider
      } else if (this.options.connectionRetries > 0){
        this.options.connectionRetries -= 1
        setTimeout(() => {
          this.initWeb3().then(resolve).catch((error) => {
            reject(new Error(error))
          })
        }, 1000)
        // revert to a read only version using infura endpoint
      } else {
        this.readOnly = true
        web3Provider = ZeroClientProvider({
          getAccounts: function(){},
          rpcUrl: this.options.readonlyRpcURL
        })
      }

      if (web3Provider) {
        global.web3 = new Web3(web3Provider)
        this.startChecking()

        if (this.options.getPastEvents) this.getPastEvents()
        if (this.options.watchFutureEvents) this.watchFutureEvents()
      }
    })

  }

  /*
   * Check every second for switching network or switching wallet
   */

  startChecking () {
    if (this.pollingInterval) clearInterval(this.pollingInterval)
    this.getGenesisBlock()
    .then(() => {
      this.pollingInterval = setInterval(this.check.bind(this), 1000)
    })
    .catch((err) => {
      throw new Error(err)
    })
  }

  check () {
    this.checkNetwork()
    .then(this.checkAccount.bind(this))
    .catch((error) => {
      console.error(error)
      throw new Error(error)
    })
  }

  checkNetwork () {
    return global.web3.eth.net.getId((err, netId) => {
      if (err) console.error(err)
      if (!err && this.network !== netId) {
        this.network = netId
        return this.deployContract()
      }
    })
  }

  deployContract () {
    if (!this.address || this.address === 'REPLACE_WITH_CONTRACT_ADDRESS') return new Error('Please provide a contract address')
    this.OrgRegistry = new global.web3.eth.Contract(OrgRegistryArtifacts.abi, this.address)
  }

  checkAccount () {
    return global.web3.eth.getAccounts((error, accounts) => {
      if (error) throw new Error(error)
      if (accounts.length && this.account !== accounts[0]) {
        this.unlocked = true
        this.account = accounts[0]
      } else if (!accounts.length) {
        this.unlocked = false
        this.account = null
      }
    })
  }


  /*
   * Not Yet Implemented vvvv
   */

  getGenesisBlock () {
    return new Promise((resolve, reject) => {
      resolve()
    })
  }

  getPastEvents () {
    return new Promise((resolve, reject) => {
      resolve()
    })
  }

  watchFutureEvents () {
    return new Promise((resolve, reject) => {
      resolve()
    })
  }




  /*
   *
   * Constant Functions
   *
   */

  getManager () {
    return this.OrgRegistry.methods.getManager().call()
    .then((resp) => {
      return resp
    }).catch((err) => {
      console.error(err)
    })
  }
  interfaceAddr (addr, _interfaceLabel) {
    return this.OrgRegistry.methods.interfaceAddr(addr, _interfaceLabel).call()
    .then((resp) => {
      return resp
    }).catch((err) => {
      console.error(err)
    })
  }
  orgs () {
    return this.OrgRegistry.methods.orgs(new BN(, 10)).call()
    .then((resp) => {
      return resp
    }).catch((err) => {
      console.error(err)
    })
  }
  owner () {
    return this.OrgRegistry.methods.owner().call()
    .then((resp) => {
      return resp
    }).catch((err) => {
      console.error(err)
    })
  }
  supportsInterface (interfaceId) {
    return this.OrgRegistry.methods.supportsInterface(interfaceId).call()
    .then((resp) => {
      return resp
    }).catch((err) => {
      console.error(err)
    })
  }
  canImplementInterfaceForAddress (interfaceHash, addr) {
    return this.OrgRegistry.methods.canImplementInterfaceForAddress(interfaceHash, addr).call()
    .then((resp) => {
      return resp
    }).catch((err) => {
      console.error(err)
    })
  }
  getOrgCount () {
    return this.OrgRegistry.methods.getOrgCount().call()
    .then((resp) => {
      return resp
    }).catch((err) => {
      console.error(err)
    })
  }
  getOrg (_address) {
    return this.OrgRegistry.methods.getOrg(_address).call()
    .then((resp) => {
      return resp
    }).catch((err) => {
      console.error(err)
    })
  }
  getInterfaceAddresses () {
    return this.OrgRegistry.methods.getInterfaceAddresses().call()
    .then((resp) => {
      return resp
    }).catch((err) => {
      console.error(err)
    })
  }

  /*
   *
   * Transaction Functions
   *
   */

  renounceOwnership () {
    if (!this.account) return Promise.reject(new Error('Unlock Account'))
    return this.OrgRegistry.methods.renounceOwnership().send({from: this.account})
    .on('transactionHash', (hash) => {
      console.log(hash)
      this.loading = true
    })
    .then((resp) => {
      this.loading = false
      return resp
    }).catch((err) => {
      this.loading = false
      console.error(err)
    })
  }
  transferOwnership (newOwner) {
    if (!this.account) return Promise.reject(new Error('Unlock Account'))
    return this.OrgRegistry.methods.transferOwnership(newOwner).send({from: this.account})
    .on('transactionHash', (hash) => {
      console.log(hash)
      this.loading = true
    })
    .then((resp) => {
      this.loading = false
      return resp
    }).catch((err) => {
      this.loading = false
      console.error(err)
    })
  }
  setInterfaces () {
    if (!this.account) return Promise.reject(new Error('Unlock Account'))
    return this.OrgRegistry.methods.setInterfaces().send({from: this.account})
    .on('transactionHash', (hash) => {
      console.log(hash)
      this.loading = true
    })
    .then((resp) => {
      this.loading = false
      return resp
    }).catch((err) => {
      this.loading = false
      console.error(err)
    })
  }
  assignManager (_newManager) {
    if (!this.account) return Promise.reject(new Error('Unlock Account'))
    return this.OrgRegistry.methods.assignManager(_newManager).send({from: this.account})
    .on('transactionHash', (hash) => {
      console.log(hash)
      this.loading = true
    })
    .then((resp) => {
      this.loading = false
      return resp
    }).catch((err) => {
      this.loading = false
      console.error(err)
    })
  }
  registerOrg (_address, _name, _messagingEndpoint, _whisperKey, _zkpPublicKey, _metadata) {
    if (!this.account) return Promise.reject(new Error('Unlock Account'))
    return this.OrgRegistry.methods.registerOrg(_address, _name, _messagingEndpoint, _whisperKey, _zkpPublicKey, _metadata).send({from: this.account})
    .on('transactionHash', (hash) => {
      console.log(hash)
      this.loading = true
    })
    .then((resp) => {
      this.loading = false
      return resp
    }).catch((err) => {
      this.loading = false
      console.error(err)
    })
  }
  updateOrg (_address, _name, _messagingEndpoint, _whisperKey, _zkpPublicKey, _metadata) {
    if (!this.account) return Promise.reject(new Error('Unlock Account'))
    return this.OrgRegistry.methods.updateOrg(_address, _name, _messagingEndpoint, _whisperKey, _zkpPublicKey, _metadata).send({from: this.account})
    .on('transactionHash', (hash) => {
      console.log(hash)
      this.loading = true
    })
    .then((resp) => {
      this.loading = false
      return resp
    }).catch((err) => {
      this.loading = false
      console.error(err)
    })
  }
  registerInterfaces (_groupName, _tokenAddress, _shieldAddress, _verifierAddress) {
    if (!this.account) return Promise.reject(new Error('Unlock Account'))
    return this.OrgRegistry.methods.registerInterfaces(_groupName, _tokenAddress, _shieldAddress, _verifierAddress).send({from: this.account})
    .on('transactionHash', (hash) => {
      console.log(hash)
      this.loading = true
    })
    .then((resp) => {
      this.loading = false
      return resp
    }).catch((err) => {
      this.loading = false
      console.error(err)
    })
  }

  /*
   *
   * Events
   *
   */




}

module.exports = OrgRegistry
