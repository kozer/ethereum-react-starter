import { useEffect, useState } from "react";
import Web3 from "web3";

const useWallet = () => {
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
          setError("Please login with your web3 wallet");
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
            balance: web3.utils.fromWei(balance),
          });
          setWeb3(web3);
        } else {
          setError("Please login with your web3 wallet.");
        }
      } else {
        setError("Please install a web3 wallet");
      }
    };
    run();
  }, []);

  return [error, walletInfo, web3];
};

export default useWallet;
