#!/bin/bash
echo "==> Generating Documetnation..."
touch REGISTRY.md
touch PRIVACY.md

cat docs/privacy/IShield.md docs/privacy/IVerifier.md docs/privacy/Shield.md docs/privacy/lib/MerkleTreeSHA256.md docs/privacy/lib/VerifierNoop.md > PRIVACY.md || exit 1

cat docs/registry/Registrar.md docs/registry/OrgRegistry.md docs/registry/IOrgRegistry.md docs/registry/lib/ERC165Compatible.md docs/registry/lib/ERC1820Registry.md > REGISTRY.md || exit 1

touch FULL_PAGE.md
cat REGISTRY.md PRIVACY.md > FULL_PAGE.md
mv REGISTRY.md docs/
mv PRIVACY.md docs/
mv FULL_PAGE.md docs/
echo "==> Documentation complete"
