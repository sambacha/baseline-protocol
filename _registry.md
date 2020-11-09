- [Registry Contracts](#registry-contracts)
  - [`Registrar`](#-registrar-)
  - [`onlyManager()`](#-onlymanager---)
  - [`constructor(address ERC1820RegistryAddress)` (public)](#-constructor-address-erc1820registryaddress----public-)
  - [`setInterfaceImplementation(string _interfaceLabel, address _implementation)` (internal)](#-setinterfaceimplementation-string--interfacelabel--address--implementation----internal-)
  - [`interfaceAddr(address addr, string _interfaceLabel) → address` (external)](#-interfaceaddr-address-addr--string--interfacelabel----address---external-)
  - [`assignManagement(address _newManager)` (internal)](#-assignmanagement-address--newmanager----internal-)
  - [`getManager() → address` (public)](#-getmanager-----address---public-)
- [`OrgRegistry`](#-orgregistry-)
  - [`constructor(address _erc1820)` (public)](#-constructor-address--erc1820----public-)
  - [`setInterfaces() → bool` (public)](#-setinterfaces-----bool---public-)
  - [`getInterfaces() → bytes4` (external)](#-getinterfaces-----bytes4---external-)
  - [`canImplementInterfaceForAddress(bytes32 interfaceHash, address addr) → bytes32` (external)](#-canimplementinterfaceforaddress-bytes32-interfacehash--address-addr----bytes32---external-)
  - [`assignManager(address _newManager)` (external)](#-assignmanager-address--newmanager----external-)
  - [`registerOrg(address _address, bytes32 _name, bytes _messagingEndpoint, bytes _whisperKey, bytes _zkpPublicKey, bytes _metadata) → bool` (external)](#-registerorg-address--address--bytes32--name--bytes--messagingendpoint--bytes--whisperkey--bytes--zkppublickey--bytes--metadata----bool---external-)
  - [`updateOrg(address _address, bytes32 _name, bytes _messagingEndpoint, bytes _whisperKey, bytes _zkpPublicKey, bytes _metadata) → bool` (external)](#-updateorg-address--address--bytes32--name--bytes--messagingendpoint--bytes--whisperkey--bytes--zkppublickey--bytes--metadata----bool---external-)
  - [`registerInterfaces(bytes32 _groupName, address _tokenAddress, address _shieldAddress, address _verifierAddress) → bool` (external)](#-registerinterfaces-bytes32--groupname--address--tokenaddress--address--shieldaddress--address--verifieraddress----bool---external-)
  - [`getOrgCount() → uint256` (external)](#-getorgcount-----uint256---external-)
  - [`getOrg(address _address) → address, bytes32, bytes, bytes, bytes, bytes` (external)](#-getorg-address--address----address--bytes32--bytes--bytes--bytes--bytes---external-)
  - [`getInterfaceAddresses() → bytes32[], address[], address[], address[]` (external)](#-getinterfaceaddresses-----bytes32----address----address----address-----external-)
  - [`RegisterOrg(bytes32 _name, address _address, bytes _messagingEndpoint, bytes _whisperKey, bytes _zkpPublicKey, bytes _metadata)`](#-registerorg-bytes32--name--address--address--bytes--messagingendpoint--bytes--whisperkey--bytes--zkppublickey--bytes--metadata--)
  - [`UpdateOrg(bytes32 _name, address _address, bytes _messagingEndpoint, bytes _whisperKey, bytes _zkpPublicKey, bytes _metadata)`](#-updateorg-bytes32--name--address--address--bytes--messagingendpoint--bytes--whisperkey--bytes--zkppublickey--bytes--metadata--)
- [`IOrgRegistry`](#-iorgregistry-)
  - [`registerOrg(address, bytes32, bytes, bytes, bytes, bytes) → bool` (external)](#-registerorg-address--bytes32--bytes--bytes--bytes--bytes----bool---external-)
  - [`updateOrg(address, bytes32, bytes, bytes, bytes, bytes) → bool` (external)](#-updateorg-address--bytes32--bytes--bytes--bytes--bytes----bool---external-)
  - [`getOrgCount() → uint256` (external)](#-getorgcount-----uint256---external--1)
  - [`getOrg(address) → address, bytes32, bytes, bytes, bytes, bytes` (external)](#-getorg-address----address--bytes32--bytes--bytes--bytes--bytes---external-)
- [`ERC165Compatible`](#-erc165compatible-)
  - [`setInterfaces() → bool` (public)](#-setinterfaces-----bool---public--1)
- [`ERC1820Registry`](#-erc1820registry-)
  - [`getInterfaceImplementer(address _addr, bytes32 _interfaceHash) → address` (external)](#-getinterfaceimplementer-address--addr--bytes32--interfacehash----address---external-)
  - [`setInterfaceImplementer(address _addr, bytes32 _interfaceHash, address _implementer)` (external)](#-setinterfaceimplementer-address--addr--bytes32--interfacehash--address--implementer----external-)
  - [`setManager(address _addr, address _newManager)` (external)](#-setmanager-address--addr--address--newmanager----external-)
  - [`getManager(address _addr) → address` (public)](#-getmanager-address--addr----address---public-)
  - [`interfaceHash(string _interfaceName) → bytes32` (external)](#-interfacehash-string--interfacename----bytes32---external-)
  - [`updateERC165Cache(address _contract, bytes4 _interfaceId)` (external)](#-updateerc165cache-address--contract--bytes4--interfaceid----external-)
  - [`implementsERC165Interface(address _contract, bytes4 _interfaceId) → bool` (public)](#-implementserc165interface-address--contract--bytes4--interfaceid----bool---public-)
  - [`implementsERC165InterfaceNoCache(address _contract, bytes4 _interfaceId) → bool` (public)](#-implementserc165interfacenocache-address--contract--bytes4--interfaceid----bool---public-)
  - [`isERC165Interface(bytes32 _interfaceHash) → bool` (internal)](#-iserc165interface-bytes32--interfacehash----bool---internal-)
  - [`noThrowCall(address _contract, bytes4 _interfaceId) → uint256 success, uint256 result` (internal)](#-nothrowcall-address--contract--bytes4--interfaceid----uint256-success--uint256-result---internal-)
  - [`InterfaceImplementerSet(address addr, bytes32 interfaceHash, address implementer)`](#-interfaceimplementerset-address-addr--bytes32-interfacehash--address-implementer--)
  - [`ManagerChanged(address addr, address newManager)`](#-managerchanged-address-addr--address-newmanager--)