# @baseline-protocol/contracts

Baseline core contracts package.

## Installation

`npm install @baseline-protocol/contracts`


## Organization Registry

Each organization registered within the OrgRegistry first generates a secp256k1 keypair and uses the Ethereum public address representation as "primary key" for future resolution. This key SHOULD NOT sign transactions. A best practice is to use an HD wallet to rotate keys, preventing any account from signing more than a single transaction.

Note that an organization may not update its address.

```solidity
struct Org {
    address orgAddress;
    bytes32 name;
    bytes messagingEndpoint;
    bytes whisperKey;
    bytes zkpPublicKey;
    bytes metadata;
}

struct OrgInterfaces {
    bytes32 groupName;
    address tokenAddress;
    address shieldAddress;
    address verifierAddress;
}

mapping (address => Org) orgMap;
mapping (uint => OrgInterfaces) orgInterfaceMap;
uint orgInterfaceCount;

Org[] public orgs;
mapping(address => address) managerMap;

event RegisterOrg(
    bytes32 _name,
    address _address,
    bytes _messagingEndpoint,
    bytes _whisperKey,
    bytes _zkpPublicKey,
    bytes _metadata
);

event UpdateOrg(
    bytes32 _name,
    address _address,
    bytes _messagingEndpoint,
    bytes _whisperKey,
    bytes _zkpPublicKey,
    bytes _metadata
);
```

## Shield

Unlike the Radish34 Reference Implementation, the contracts package does not include a "shield" contract. Rather, it is up to each workgroup to determine a suitable shielding mechanism to ensure privacy. For example, the IBaselineRPC implementation within the Nethermind client used in the BRI-1 Reference Implementation ships with shield contract binaries (i.e., including the MerkleTreeSHA contract).


## Types

> truffle types

```
types
└── truffle-contracts
    ├── ERC165.d.ts
    ├── ERC165Compatible.d.ts
    ├── ERC1820ImplementerInterface.d.ts
    ├── ERC1820Registry.d.ts
    ├── IERC165.d.ts
    ├── IOrgRegistry.d.ts
    ├── IShield.d.ts
    ├── IVerifier.d.ts
    ├── MerkleTreeSHA256.d.ts
    ├── OrgRegistry.d.ts
    ├── Ownable.d.ts
    ├── Registrar.d.ts
    ├── Shield.d.ts
    ├── VerifierNoop.d.ts
    ├── index.d.ts
    └── types.d.ts
```



## Examples

```
src/
├── abi.js
└── modules
    ├── MerkleTreeSHA256
    │   └── index.js
    ├── OrgRegistry
    │   └── index.js
    └── Registrar
        └── index.js
```

```javascript
const build/contracts/OrgRegistry.json = require('./dapp-module/OrgRegistry/index.js')
let OrgRegistry = new build/contracts/OrgRegistry.json()
OrgRegistry.orginiszation()
```


#### MerkleTreeSHA256

```javascript
const MerkleTreeSHA256.json = require('./dapp-module/MerkleTreeSHA256/index.js')
let MerkleTreeSHA256 = new build/contracts/MerkleTreeSHA256.json()
MerkleTreeSHA256.merkle()
```

#### Registrar

To use  Registrar just import it into your project:

```javascript
const build/contracts/Registrar.json = require('./dapp-module/Registrar/index.js')
let Registrar = new build/contracts/Registrar.json()
Registrar.register()
```

## License 

CC-0

