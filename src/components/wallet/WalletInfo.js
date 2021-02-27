import useMetamask from "../../hooks/useMetamask";
import Error from "../common/Error";

function WalletInfo() {
  const [error, walletInfo] = useMetamask();
  return error ? (
    <Error message={error}></Error>
  ) : (
    <div className="flex flex-col">
      <h3 className="text-2xl">Hello,{walletInfo?.account}</h3>
      <h4 className="text-lg">Available balance: {walletInfo?.balance}</h4>
    </div>
  );
}

export default WalletInfo;
