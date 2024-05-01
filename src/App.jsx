import { useState } from "react";
import "./App.css";
import { DiscordIcon, TelegramIcon, TwitterIcon } from "./svgicon";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-full bg-[#0244a566] overflow-auto overflow-x-hidden px-[15%]">
      <div className="flex justify-between items-center p-4">
        <img src="/images/label.png" width="140px"></img>
        <div className="flex gap-8">
          <a href="#home">
            <label className="transition-all ease-in-out duration-300 hover:text-blue-800">
              Home
            </label>
          </a>
          <a href="#about">
            <label className="transition-all ease-in-out duration-300 hover:text-blue-800">
              About
            </label>
          </a>
          <a href="#how-to-buy">
            <label className="transition-all ease-in-out duration-300 hover:text-blue-800">
              How to buy
            </label>
          </a>
          <a href="#roadmap">
            <label className="transition-all ease-in-out duration-300 hover:text-blue-800">
              Roadmap
            </label>
          </a>
          <a href="#faq">
            <label className="transition-all ease-in-out duration-300 hover:text-blue-800">
              FAQ
            </label>
          </a>
          <a href="#contact">
            <label className="transition-all ease-in-out duration-300 hover:text-blue-800">
              Contact
            </label>
          </a>
        </div>
        <button className="p-1 px-5 border-blue-500 border-[1px] rounded-2xl transition-all ease-in-out duration-300 text-white">
          Connect Wallet
        </button>
      </div>

      <div
        className="flex flex-wrap justify-around py-[100px] gap-[20px]"
        id="home"
      >
        <div className="flex justify-center">
          <img
            className="hover:scale-110 transition-all ease-in-out duration-500"
            src="/images/logo.png"
            width="500px"
          ></img>
        </div>
        <div className="flex flex-col justify-center gap-[20px]">
          <label className="uppercase">introducing</label>
          <img
            className="transition-all ease-in-out duration-300 hover:scale-110"
            src="/images/label.png"
            width="400px"
          ></img>
          <label className="uppercase text-[2rem]">
            Join the Jungle of Future Finance
          </label>
          <img
            className="transition-all ease-in-out duration-300 hover:scale-110"
            src="/images/buybutton.png"
            width="140px"
          ></img>
        </div>
      </div>

      <div className="text-center">
        One of cryptos most significant cultural icons and the mascot of BASE
        chain
      </div>

      <div className="border-[1px] border-white my-[80px]"></div>

      <div className="card flex flex-wrap gap-4 p-8" id="about">
        <div className="flex-1 flex flex-col gap-8">
          <div className="text-[3rem] text-center uppercase">About Us</div>
          <p className="font-medium">
            Money Hungry Gorillas (MHG) is a cryptocurrency token designed to
            provide users with a unique and innovative financial experience. As
            its name suggests, MHG embodies a spirit of financial ambition and
            strength, aiming to empower users to pursue their financial goals
            with confidence. MHG stands out in the crowded cryptocurrency
            landscape with its focus on transparency, security, and
            community-driven development. By leveraging blockchain technology,
            MHG ensures that all transactions are transparent and immutable,
            providing users with full visibility into the movement of their
            assets. Ethereum is one of the most secure blockchain networks, with
            a robust consensus mechanism (proof of work transitioning to proof
            of stake) and a large network of miners and validators ensuring the
            integrity of transactions.
          </p>
        </div>
        <div className="flex items-end">
          <img
            className="rounded-3xl"
            src="/images/about.jpeg"
            width="600px"
          ></img>
        </div>
      </div>

      <div className="border-[1px] border-white my-[80px]"></div>

      <div className="card flex flex-wrap gap-4 p-8 my-[40px]" id="about">
        <div className="flex items-center">
          <img className="pulsate rounded-3xl" src="/images/1.png" width="600px"></img>
        </div>

        <div className="flex-1 flex flex-col gap-8" id="how-to-buy">
          <div className="text-[3rem] text-center uppercase">How to buy</div>
          <div className="flex flex-col gap-[20px]">
            <div className="border-[1px] border-white rounded-xl p-4 hover:scale-105 transition-all ease-in-out duration-300">
              <label>1. Setting up a Cryptocurrency Wallet</label>
              <p className="font-light text-[1rem]">
                Choose a reputable cryptocurrency wallet that supports
                Ethereum-based tokens like MHG. Popular options include
                MetaMask, Trust Wallet, and MyEtherWallet. Visit the official
                website or download the wallet app from a trusted source. Follow
                the instructions to create a new wallet, which typically
                involves setting a strong password and securely storing your
                recovery phrase.
              </p>
            </div>
            <div className="border-[1px] border-white rounded-xl p-4 hover:scale-105 transition-all ease-in-out duration-300">
              <label>2. Adding Ethereum to Your Wallet</label>
              <p className="font-light text-[1rem]">
                Once your wallet is set up, you'll need to acquire Ethereum
                (ETH) to exchange for MHG tokens. You can purchase Ethereum from
                a cryptocurrency exchange such as Coinbase, Binance, or Kraken.
                After purchasing ETH, withdraw it to your wallet address. Copy
                your wallet's Ethereum address and paste it into the withdrawal
                section of the exchange, then confirm the transaction.
              </p>
            </div>
            <div className="border-[1px] border-white rounded-xl p-4 hover:scale-105 transition-all ease-in-out duration-300">
              <div className="flex items-center gap-4">3. Converting Ethereum to <img src="/images/logo.png" width="40px"></img></div>
              <p className="font-light text-[1rem]">
                Click the 'Connect Wallet' button to connect your wallet to the
                page and enter the amount of Ether you want to pay in the
                purchase widget. Then, the amount of tokens you will receive
                will be displayed, and you can proceed with the purchase by
                clicking the purchase button. If your purchase is successful,
                you will receive tokens in your wallet.
              </p>
            </div>
            <div className="border-[1px] border-white rounded-xl p-4 hover:scale-105 transition-all ease-in-out duration-300">
              <label>4. Safety Tips</label>
              <p className="font-light text-[1rem]">
              Always double-check the wallet addresses before making any
                      transactions. Ensure that you're sending funds to the
                      correct address to avoid loss of funds due to human error
                      or phishing attacks.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-[1px] border-white my-[80px]"></div>

      <div className="flex justify-evenly my-[40px]">
        <button className="uppercase flex gap-3 items-center p-1 px-5 border-blue-500 border-[1px] rounded-2xl transition-all ease-in-out duration-300">
          <label className="uppercase">Telegram</label>
          <TelegramIcon />
        </button>
        <button className="uppercase flex gap-3 items-center p-1 px-5 border-blue-500 border-[1px] rounded-2xl transition-all ease-in-out duration-300">
          <label className="uppercase">Twitter</label>
          <TwitterIcon />
        </button>
        <button className="uppercase flex gap-3 items-center p-1 px-5 border-blue-500 border-[1px] rounded-2xl transition-all ease-in-out duration-300">
          <label className="uppercase">discord</label>
          <DiscordIcon />
        </button>
      </div>

      <div className="border-[1px] border-white my-[80px]"></div>

      <div className="text-center my-[40px]">
        Copyright © 2024. All rights reserved.
      </div>
    </div>
  );
}

export default App;
