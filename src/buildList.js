const { version } = require("../package.json");

const mainnet = require("./tokens/mainnet.json");
const ropsten = require("./tokens/ropsten.json");
const rinkeby = require("./tokens/rinkeby.json");
const goerli = require("./tokens/goerli.json");
const kovan = require("./tokens/kovan.json");
const fantom = require("./tokens/fantom.json");
const fantomTestnet = require("./tokens/fantom-testnet.json");
const matic = require("./tokens/matic.json");
const maticTestnet = require("./tokens/matic-testnet.json");
const xdai = require("./tokens/xdai.json");
const bkc = require("./tokens/bkc.json");
const bsc = require("./tokens/bsc.json");
const moonbase = require("./tokens/moonbase.json");
const avalanche = require("./tokens/avalanche.json");
const fuji = require("./tokens/fuji.json");
const heco = require("./tokens/heco.json");
const hecoTestnet = require("./tokens/heco-testnet.json");
const harmony = require("./tokens/harmony.json");
const harmonyTestnet = require("./tokens/harmony-testnet.json");
const okex = require("./tokens/okex.json");
const okexTestnet = require("./tokens/okex-testnet.json");
const arbitrum = require("./tokens/arbitrum.json");
module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "DFY Menu",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI:
      "https://raw.githubusercontent.com/dfy-asia/default-token-list/main/src/images/dfy-256.png",
    keywords: ["dfy", "default"],
    tokens: [
      ...bkc,
      ...bsc,
    ]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};
