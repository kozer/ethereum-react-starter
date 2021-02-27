import { useEffect, useState } from "react";
import Web3 from "web3";

const HUMANIZE_BALANCE_FACTOR = 1e18;

const useMetamask = () => {
  const GANACHE_PORT = 5777;
  const [walletInfo, setWalletInfo] = useState("");
  const [web3, setWeb3] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const run = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
        } catch (e) {
          setError("Please login with your metamask wallet");
        }
        const netId = await web3.eth.net.getId();
        if (netId !== GANACHE_PORT) {
          setError("You are not using ganache network");
        }
        const accounts = await web3.eth.getAccounts();
        if (accounts[0]) {
          const balance = (await web3.eth.getBalance(accounts[0])) || 0;
          setWalletInfo({
            account: accounts[0],
            balance: balance / HUMANIZE_BALANCE_FACTOR,
          });
          setWeb3(web3);
        } else {
          setError("Please login with your metamask wallet.");
        }
      } else {
        setError("Please install a metamask");
      }
    };
    run();
  }, []);

  return [error, walletInfo, web3];
};

export default useMetamask;
