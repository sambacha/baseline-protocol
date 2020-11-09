## `Registrar`

Contract that acts as a client for interacting with the ERC1820Registry

### `onlyManager()`

Throws if called by any account other than the owner.

### `constructor(address ERC1820RegistryAddress)` (public)

Constructor that takes an argument of the ERC1820RegistryAddress

Upon actual deployment of a static registry contract, this argument can be removed

### `setInterfaceImplementation(string _interfaceLabel, address _implementation)` (internal)

Since this is an internal method any contract inheriting this contract would be
leveraged as the sender for the interface registry

This enables setting the interface implementation

### `interfaceAddr(address addr, string _interfaceLabel) → address` (external)

This enables getting the address of the implementer

### `assignManagement(address _newManager)` (internal)

Since this is an internal method any contract inheriting this contract would be
leveraged to call this function directly

This enables assigning or changing manager

### `getManager() → address` (public)

This allows you to get this contract manager address

## `OrgRegistry`

Contract for maintaining organization registry
Contract inherits from Ownable and ERC165Compatible
Ownable contains ownership criteria of the organization registry
ERC165Compatible contains interface compatibility checks

### `constructor(address _erc1820)` (public)

constructor function that takes the address of a pre-deployed ERC1820
registry. Ideally, this contract is a publicly known address:
0x1820a4B7618BdE71Dce8cdc73aAB6C95905faD24. Inherently, the constructor
sets the interfaces and registers the current contract with the global registry

### `setInterfaces() → bool` (public)

This is an implementation of setting interfaces for the organization
registry contract

the character '^' corresponds to bit wise xor of individual interface id's
which are the parsed 4 bytes of the function signature of each of the functions
in the org registry contract

### `getInterfaces() → bytes4` (external)

This function is a helper function to be able to get the
set interface id by the setInterfaces()

### `canImplementInterfaceForAddress(bytes32 interfaceHash, address addr) → bytes32` (external)

Indicates whether the contract implements the interface 'interfaceHash' for the address 'addr' or not.

Below implementation is necessary to be able to have the ability to register with ERC1820

### `assignManager(address _newManager)` (external)

Since this is an inherited method from Registrar, it allows for a new manager to be set
for this contract instance

### `registerOrg(address _address, bytes32 _name, bytes _messagingEndpoint, bytes _whisperKey, bytes _zkpPublicKey, bytes _metadata) → bool` (external)

Function to register an organization

Function to register an organization

### `updateOrg(address _address, bytes32 _name, bytes _messagingEndpoint, bytes _whisperKey, bytes _zkpPublicKey, bytes _metadata) → bool` (external)

Function to update an organization

Function to update an organization

### `registerInterfaces(bytes32 _groupName, address _tokenAddress, address _shieldAddress, address _verifierAddress) → bool` (external)

Function to register the names of the interfaces associated with the OrgRegistry

Function to register an organization's interfaces for easy lookup

### `getOrgCount() → uint256` (external)

Function to get the count of number of organizations to help with extraction

### `getOrg(address _address) → address, bytes32, bytes, bytes, bytes, bytes` (external)

Function to get a single organization's details

### `getInterfaceAddresses() → bytes32[], address[], address[], address[]` (external)

Function to get organization's interface details

### `RegisterOrg(bytes32 _name, address _address, bytes _messagingEndpoint, bytes _whisperKey, bytes _zkpPublicKey, bytes _metadata)`

### `UpdateOrg(bytes32 _name, address _address, bytes _messagingEndpoint, bytes _whisperKey, bytes _zkpPublicKey, bytes _metadata)`

## `IOrgRegistry`

### `registerOrg(address, bytes32, bytes, bytes, bytes, bytes) → bool` (external)

### `updateOrg(address, bytes32, bytes, bytes, bytes, bytes) → bool` (external)

### `getOrgCount() → uint256` (external)

### `getOrg(address) → address, bytes32, bytes, bytes, bytes, bytes` (external)

## `ERC165Compatible`

### `setInterfaces() → bool` (public)

## `ERC1820Registry`

This contract is the official implementation of the ERC1820 Registry.
For more details, see https://eips.ethereum.org/EIPS/eip-1820

### `getInterfaceImplementer(address _addr, bytes32 _interfaceHash) → address` (external)

Query if an address implements an interface and through which contract.

### `setInterfaceImplementer(address _addr, bytes32 _interfaceHash, address _implementer)` (external)

Sets the contract which implements a specific interface for an address.
Only the manager defined for that address can set it.
(Each address is the manager for itself until it sets a new manager.)

### `setManager(address _addr, address _newManager)` (external)

Sets '\_newManager' as manager for '\_addr'.
The new manager will be able to call 'setInterfaceImplementer' for '\_addr'.

### `getManager(address _addr) → address` (public)

Get the manager of an address.

### `interfaceHash(string _interfaceName) → bytes32` (external)

Compute the keccak256 hash of an interface given its name.

### `updateERC165Cache(address _contract, bytes4 _interfaceId)` (external)

Updates the cache with whether the contract implements an ERC165 interface or not.

### `implementsERC165Interface(address _contract, bytes4 _interfaceId) → bool` (public)

### `implementsERC165InterfaceNoCache(address _contract, bytes4 _interfaceId) → bool` (public)

Checks whether a contract implements an ERC165 interface or not without using nor updating the cache.

### `isERC165Interface(bytes32 _interfaceHash) → bool` (internal)

Checks whether the hash is a ERC165 interface (ending with 28 zeroes) or not.

### `noThrowCall(address _contract, bytes4 _interfaceId) → uint256 success, uint256 result` (internal)

Make a call on a contract without throwing if the function does not exist.

### `InterfaceImplementerSet(address addr, bytes32 interfaceHash, address implementer)`

Indicates a contract is the 'implementer' of 'interfaceHash' for 'addr'.

### `ManagerChanged(address addr, address newManager)`

Indicates 'newManager' is the address of the new manager for 'addr'.

## Sūrya's Description Report

### Files Description Table

| File Name                           | SHA-1 Hash                               |
| ----------------------------------- | ---------------------------------------- |
| contracts/registry/IOrgRegistry.sol | 0514e15aa16c4c92f61c3cdc3f17d93e3ee56377 |
| contracts/registry/OrgRegistry.sol  | e0bb2ddd83c0d3373d6b58d50ec756a833ac88d0 |
| contracts/registry/Registrar.sol    | 6507a72d2283a5e2cc04bc99ea90ef1f878fe9b7 |

### Contracts Description Table

|     Contract     |              Type               |                       Bases                        |                |                            |
| :--------------: | :-----------------------------: | :------------------------------------------------: | :------------: | :------------------------: |
|        └         |        **Function Name**        |                   **Visibility**                   | **Mutability** |       **Modifiers**        |
|                  |                                 |                                                    |                |                            |
| **IOrgRegistry** |            Interface            |                                                    |                |                            |
|        └         |           registerOrg           |                    External ❗️                    |       🛑       |           NO❗️            |
|        └         |            updateOrg            |                    External ❗️                    |       🛑       |           NO❗️            |
|        └         |           getOrgCount           |                    External ❗️                    |                |           NO❗️            |
|        └         |             getOrg              |                    External ❗️                    |                |           NO❗️            |
|                  |                                 |                                                    |                |                            |
| **OrgRegistry**  |         Implementation          | Ownable, ERC165Compatible, Registrar, IOrgRegistry |                |                            |
|        └         |          <Constructor>          |                     Public ❗️                     |       🛑       | ERC165Compatible Registrar |
|        └         |          setInterfaces          |                     Public ❗️                     |       🛑       |         onlyOwner          |
|        └         |          getInterfaces          |                    External ❗️                    |                |           NO❗️            |
|        └         | canImplementInterfaceForAddress |                    External ❗️                    |                |           NO❗️            |
|        └         |          assignManager          |                    External ❗️                    |       🛑       |         onlyOwner          |
|        └         |           registerOrg           |                    External ❗️                    |       🛑       |         onlyOwner          |
|        └         |            updateOrg            |                    External ❗️                    |       🛑       |           NO❗️            |
|        └         |       registerInterfaces        |                    External ❗️                    |       🛑       |         onlyOwner          |
|        └         |           getOrgCount           |                    External ❗️                    |                |           NO❗️            |
|        └         |             getOrg              |                    External ❗️                    |                |           NO❗️            |
|        └         |      getInterfaceAddresses      |                    External ❗️                    |                |           NO❗️            |
|                  |                                 |                                                    |                |                            |
|  **Registrar**   |         Implementation          |                                                    |                |                            |
|        └         |          <Constructor>          |                     Public ❗️                     |       🛑       |           NO❗️            |
|        └         |   setInterfaceImplementation    |                    Internal 🔒                     |       🛑       |                            |
|        └         |          interfaceAddr          |                    External ❗️                    |                |           NO❗️            |
|        └         |        assignManagement         |                    Internal 🔒                     |       🛑       |                            |
|        └         |           getManager            |                     Public ❗️                     |                |           NO❗️            |

### Legend

| Symbol | Meaning                   |
| :----: | ------------------------- |
|   🛑   | Function can modify state |
|   💵   | Function is payable       |

## Sūrya's Description Report

### Files Description Table

| File Name                       | SHA-1 Hash                               |
| ------------------------------- | ---------------------------------------- |
| contracts/privacy/IShield.sol   | c4b6e694bbdd4317e6fdc1e595e467cb10e5e1dd |
| contracts/privacy/IVerifier.sol | ba4926ea2f01fde5d11362808fc1e573e69e31e3 |
| contracts/privacy/Shield.sol    | 14415a0a47a10c0865993bdc3c8a350c683dc69f |

### Contracts Description Table

|   Contract    |       Type        |           Bases           |                |                  |
| :-----------: | :---------------: | :-----------------------: | :------------: | :--------------: |
|       └       | **Function Name** |      **Visibility**       | **Mutability** |  **Modifiers**   |
|               |                   |                           |                |                  |
|  **IShield**  |     Interface     |                           |                |                  |
|       └       |    getVerifier    |       External ❗️        |                |      NO❗️       |
|       └       |   verifyAndPush   |       External ❗️        |       🛑       |      NO❗️       |
|               |                   |                           |                |                  |
| **IVerifier** |     Interface     |                           |                |                  |
|       └       |      verify       |       External ❗️        |       🛑       |      NO❗️       |
|               |                   |                           |                |                  |
|  **Shield**   |  Implementation   | IShield, MerkleTreeSHA256 |                |                  |
|       └       |   <Constructor>   |        Public ❗️         |       🛑       | MerkleTreeSHA256 |
|       └       |    getVerifier    |       External ❗️        |                |      NO❗️       |
|       └       |   verifyAndPush   |       External ❗️        |       🛑       |      NO❗️       |

### Legend

| Symbol | Meaning                   |
| :----: | ------------------------- |
|   🛑   | Function can modify state |
|   💵   | Function is payable       |
