## ZecWallet Lite

Zecwallet-Lite is z-Addr first, Sapling compatible lightwallet client for Zcash. It has full support for all Zcash features:

- Send + Receive fully shielded transactions
- Supports transparent addresses and transactions
- Full support for incoming and outgoing memos
- Fully encrypt your private keys, using viewkeys to sync the blockchain

## Privacy

- While all the keys and transaction detection happens on the client, the server can learn what blocks contain your shielded transactions.
- The server also learns other metadata about you like your ip address etc...
- Also remember that t-addresses don't provide any privacy protection.

### Note Management

Zecwallet-Lite does automatic note and utxo management, which means it doesn't allow you to manually select which address to send outgoing transactions from. It follows these principles:

- Defaults to sending shielded transactions, even if you're sending to a transparent address
- Sapling funds need at least 5 confirmations before they can be spent
- Can select funds from multiple shielded addresses in the same transaction
- Will automatically shield your transparent funds at the first opportunity
  - When sending an outgoing transaction to a shielded address, Zecwallet-Lite can decide to use the transaction to additionally shield your transparent funds (i.e., send your transparent funds to your own shielded address in the same transaction)

## Compiling from source

Zecwallet Lite is written in Electron/Javascript and can be build from source. It will also automatically compile the Rust SDK needed to run Zecwallet Lite.

### Pre-Requisites

You need to have the following software installed before you can build Zecwallet

- [NodeJS v14](https://nodejs.org)
  - Using [NVM](https://github.com/nvm-sh/nvm)
- [Rust v1.40+](https://www.rust-lang.org/tools/install)
  - Using [RustUp](https://rustup.rs)
- [Yarn Package Manager](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
- Other deps:
  - cmake
  - libudev
  - pkg-config

#### Install NodeJS using NVM

```bash
# Install NVM (use latest version on https://github.com/nvm-sh/nvm)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

# Restart terminal first, and continue

# Install NodeJS 14
nvm install 14
```

#### Install Yarn

```bash
npm install --global yarn
```

#### Install Rust using RustUp

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

#### Install remaining deps

```bash
# Install from apt
sudo apt install -y cmake libudev-dev pkg-config

# Add missing env var
# Taken from https://unix.stackexchange.com/questions/715215/unable-to-find-libudev-pc
echo 'export PKG_CONFIG_PATH="/usr/lib/x86_64-linux-gnu/pkgconfig/"' >> $HOME/.bashrc

# Restart terminal
```

### Build

```bash
# Clone repo
git clone https://github.com/Zondax/zecwallet-lite.git
cd zecwallet-lite

# Use NodeJS 14
nvm use 14

# Install nodejs deps
yarn install

# Build app
yarn build
```

### Start

To start in locally, run

```bash
yarn start

# In case you are on linux, you may need to use
yarn start -- --no-sandobx
```

_PS: Zecwallet-Lite is NOT an official wallet, and is not affiliated with the Electric Coin Company in any way._
