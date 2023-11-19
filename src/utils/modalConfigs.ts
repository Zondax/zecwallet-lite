import {ErrorModalData} from "../components/ErrorModal";
import {WalletType} from "./utils";

export const getModalConfigByWalletType = (walletType: WalletType, fnToExecute?: () => void): ErrorModalData => {
  const data = new ErrorModalData()

  if( walletType === "ledger"){
    data.shouldCloseOnOverlayClick = false
    data.shouldCloseOnEsc = false
    data.showCloseBtn = false
  }

  data.fnToExecute = fnToExecute

  return data
}
