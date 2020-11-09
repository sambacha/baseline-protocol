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
