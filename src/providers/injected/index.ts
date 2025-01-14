import { IProviderInfo } from '../../helpers';
// @ts-ignore
import CipherLogo from '../logos/cipher.svg';
// @ts-ignore
import Coin98WalletLogo from '../logos/coin98wallet.jpg';
// @ts-ignore
import CoinbaseLogo from '../logos/coinbase.svg';
// @ts-ignore
import DapperLogo from '../logos/dapper.png';
// @ts-ignore
import FrameLogo from '../logos/frame.svg';
// @ts-ignore
import GoPocketLogo from '../logos/gopocket.png';
// @ts-ignore
import imTokenLogo from '../logos/imtoken.svg';
// @ts-ignore
import LiqualityLogo from '../logos/liquality.png';
// @ts-ignore
import MathWalletLogo from '../logos/mathwallet.png';
// @ts-ignore
import MetaMaskLogo from '../logos/metamask.svg';
// @ts-ignore
import NiftyWalletLogo from '../logos/niftyWallet.png';
// @ts-ignore
import OkxWalletLogo from '../logos/okxWallet.svg';
// @ts-ignore
import OntoWalletLogo from '../logos/ontowallet.jpg';
// @ts-ignore
import OperaLogo from '../logos/opera.svg';
// @ts-ignore
import SafeLogo from '../logos/safe.svg';
// @ts-ignore
import StatusLogo from '../logos/status.svg';
// @ts-ignore
import TokenaryLogo from '../logos/tokenary.png';
// @ts-ignore
import TokenPocketLogo from '../logos/tokenpocket.png';
// @ts-ignore
import TrustLogo from '../logos/trust.svg';
// @ts-ignore
import Web3DefaultLogo from '../logos/web3-default.svg';

export const FALLBACK: IProviderInfo = {
  id: "injected",
  name: "Web3",
  logo: Web3DefaultLogo,
  type: "injected",
  check: "isWeb3"
};

export const METAMASK: IProviderInfo = {
  id: "injected",
  name: "MetaMask",
  logo: MetaMaskLogo,
  type: "injected",
  check: "isMetaMask"
};

export const SAFE: IProviderInfo = {
  id: "injected",
  name: "Safe",
  logo: SafeLogo,
  type: "injected",
  check: "isSafe"
};

export const NIFTY: IProviderInfo = {
  id: "injected",
  name: "Nifty",
  logo: NiftyWalletLogo,
  type: "injected",
  check: "isNiftyWallet"
};

export const DAPPER: IProviderInfo = {
  id: "injected",
  name: "Dapper",
  logo: DapperLogo,
  type: "injected",
  check: "isDapper"
};

export const OPERA: IProviderInfo = {
  id: "injected",
  name: "Opera",
  logo: OperaLogo,
  type: "injected",
  check: "isOpera"
};

export const TRUST: IProviderInfo = {
  id: "injected",
  name: "Trust",
  logo: TrustLogo,
  type: "injected",
  check: "isTrust"
};

export const COINBASE: IProviderInfo = {
  id: "injected",
  name: "Coinbase",
  logo: CoinbaseLogo,
  type: "injected",
  check: "isToshi"
};

export const CIPHER: IProviderInfo = {
  id: "injected",
  name: "Cipher",
  logo: CipherLogo,
  type: "injected",
  check: "isCipher"
};

export const IMTOKEN: IProviderInfo = {
  id: "injected",
  name: "imToken",
  logo: imTokenLogo,
  type: "injected",
  check: "isImToken"
};

export const STATUS: IProviderInfo = {
  id: "injected",
  name: "Status",
  logo: StatusLogo,
  type: "injected",
  check: "isStatus"
};

export const TOKENARY: IProviderInfo = {
  id: "injected",
  name: "Tokenary",
  logo: TokenaryLogo,
  type: "injected",
  check: "isTokenary"
};

export const FRAMEINJECTED: IProviderInfo = {
  id: "injected",
  name: "Frame",
  logo: FrameLogo,
  type: "injected",
  check: "isFrame"
};

export const LIQUALITY: IProviderInfo = {
  id: "injected",
  name: "Liquality",
  logo: LiqualityLogo,
  type: "injected",
  check: "isLiquality"
};

export const MATHWALLET: IProviderInfo = {
  id: "injected",
  name: "Math Wallet",
  logo: MathWalletLogo,
  type: "injected",
  check: "isMathWallet"
};

export const TOKENPOCKET: IProviderInfo = {
  id: "injected",
  name: "TokenPocket",
  logo: TokenPocketLogo,
  type: "injected",
  check: "isTokenPocket"
};

export const ONTOWALLET: IProviderInfo = {
  id: "injected",
  name: "ONTO Wallet",
  logo: OntoWalletLogo,
  type: "injected",
  check: "isOntoWallet"
};

export const COIN98WALLET: IProviderInfo = {
  id: "injected",
  name: "Coin98 Wallet",
  logo: Coin98WalletLogo,
  type: "injected",
  check: "isCoin98Wallet"
};

export const GOPOCKET: IProviderInfo = {
  id: "injected",
  name: "Go Pocket",
  logo: GoPocketLogo,
  type: "injected",
  check: "isGoPocket"
};

export const OKXWALLET: IProviderInfo = {
  id: "injected",
  name: "OKX Wallet",
  logo: OkxWalletLogo,
  type: "injected",
  check: "isOkxWallet"
};
