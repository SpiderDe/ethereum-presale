import { useEffect } from "react";
import "./App.css";
import {
  DiscordIcon,
  TelegramIcon,
  TwitterIcon,
  ContactEmailIcon,
  ContactUserIcon,
  ContactMessageIcon,
  FaqArrow,
} from "./svgicon";

function App() {
  useEffect(() => {
    setTimeout(function () {
      console.log("video play");
      // const video = documen
      document.querySelector("video").play();
    }, 1000);
  }, []);

  const playBackground = () => {
    console.log("click background");
    // const video = document.getElementById("myVideo");
    // video.play();
    document.querySelector("video").play();
  };
  return (
    <div className="w-full h-full bg-[#0244a566] overflow-auto overflow-x-hidden px-[10px] lg:px-[15%]">
      <video
        autoPlay
        loop
        className="w-screen h-screen absolute top-0 left-0 max-md:hidden object-cover"
        playsInline
        preload="auto"
        id="myVideo"
      >
        <track default="" kind="captions" src />
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>
      {/* <audio autoPlay loop preload="auto">
        <source src="/sounds/background.mp3" type="audio/mpeg" />
      </audio> */}
      <div className="relative flex justify-between items-center p-4 z-40">
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
          {/* <a href="#tokenomics">
            <label className="transition-all ease-in-out duration-300 hover:text-blue-800">
              Tokenomics
            </label>
          </a> */}
          <a href="#contact">
            <label className="transition-all ease-in-out duration-300 hover:text-blue-800">
              Contact
            </label>
          </a>
        </div>
        <button className="p-1 px-5 border-blue-500 border-[1px] rounded-2xl transition-all ease-in-out duration-300 text-white hover:text-blue-800">
          Connect Wallet
        </button>
      </div>

      <div
        className="relative flex flex-wrap justify-around py-[100px] gap-[20px]"
        id="home"
        onClick={playBackground}
      >
        <div className="flex justify-center">
          <img
            className="rotating hover:scale-110 transition-all ease-in-out duration-500"
            src="/images/logo.png"
            width="500px"
          ></img>
        </div>
        <div className="flex flex-col justify-center gap-[20px]">
          <label className="uppercase">introducing</label>
          <img
            className="transition-all ease-in-out duration-300 hover:scale-110 pulsate"
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

      <div className="relative text-center">
        One of cryptos most significant cultural icons and the mascot of BASE
        chain
      </div>

      <div className="relative border-[1px] border-white my-[80px]"></div>

      <div
        className="card relative flex flex-wrap gap-4 p-8 justify-center items-center"
        id="about"
      >
        <div className="flex-1 flex flex-col gap-8 min-w-[400px]">
          <div className="text-[3rem] text-center uppercase">About Us</div>
          <p className="font-normal text-gray-300">
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
        <div className="flex items-center justify-center">
          <img
            className="rounded-3xl"
            src="/images/about.jpeg"
            width="600px"
          ></img>
        </div>
      </div>

      <div
        className="card relative flex flex-wrap gap-4 p-8 my-[40px] justify-center"
        id="about"
      >
        <div className="flex items-center">
          <img
            className="pulsate rounded-3xl"
            src="/images/1.png"
            width="600px"
          ></img>
        </div>

        <div
          className="flex-1 flex flex-col gap-8 min-w-[400px]"
          id="how-to-buy"
        >
          <div className="text-[3rem] text-center uppercase">How to buy</div>
          <div className="flex flex-col gap-[20px]">
            <div className="border-[1px] border-white rounded-xl p-4 hover:scale-105 transition-all ease-in-out duration-300">
              <label>1. Setting up a Cryptocurrency Wallet</label>
              <p className="font-normal text-[1rem] text-gray-300">
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
              <p className="font-normal text-[1rem] text-gray-300">
                Once your wallet is set up, you'll need to acquire Ethereum
                (ETH) to exchange for MHG tokens. You can purchase Ethereum from
                a cryptocurrency exchange such as Coinbase, Binance, or Kraken.
                After purchasing ETH, withdraw it to your wallet address. Copy
                your wallet's Ethereum address and paste it into the withdrawal
                section of the exchange, then confirm the transaction.
              </p>
            </div>
            <div className="border-[1px] border-white rounded-xl p-4 hover:scale-105 transition-all ease-in-out duration-300">
              <div className="flex items-center gap-4">
                3. Converting Ethereum to{" "}
                <img src="/images/logo.png" width="40px"></img>
              </div>
              <p className="font-normal text-[1rem] text-gray-300">
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
              <p className="font-normal text-[1rem] text-gray-300">
                Always double-check the wallet addresses before making any
                transactions. Ensure that you're sending funds to the correct
                address to avoid loss of funds due to human error or phishing
                attacks.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative card flex flex-col gap-4 p-8 my-[40px]"
        id="roadmap"
      >
        <div className="text-[3rem] text-center uppercase">Our RoadMap</div>
        <div className="flex flex-wrap gap-[80px] p-[40px] justify-center">
          <div className="w-[400px] flex flex-col gap-4">
            <label className="text-[2rem] font-medium">May 2024</label>
            <p className="font-normal text-gray-300">
              A concept of MHG is discussed with Team Members. Finding a Perfect
              Solution to the Current Real World Issues.
            </p>
          </div>

          <div className="w-[400px] flex flex-col gap-4">
            <label className="text-[2rem] font-medium">August 2024</label>
            <p className="font-normal text-gray-300">
              Our ICO launched Late August.
            </p>
          </div>

          <div className="w-[400px] flex flex-col gap-4">
            <label className="text-[2rem] font-medium">October 2024</label>
            <p className="font-normal text-gray-300">
              We will be marketing in major news outlets such as Yahoo and other
              big news companies. 100+ KOLs and Influencer Marketing will be
              just small one part on our big marketing journey.
            </p>
          </div>

          <div className="w-[400px] flex flex-col gap-4">
            <label className="text-[2rem] font-medium">December 2024</label>
            <p className="font-normal text-gray-300">
              MHG will launch on Uniswap and then migrate to our own exchange
              platform MHGSwap.
            </p>
          </div>
        </div>
      </div>

      {/* <div
        className="card relative flex flex-wrap gap-4 p-8 my-[40px]"
        id="tokenomics"
      >
        <img
          className="rounded-3xl hover:scale-105 transition-all ease-in-out duration-300"
          src="/images/tokenomics.png"
          width="100%"
        ></img>
      </div> */}

      <div className="relative card flex flex-wrap gap-4 my-[40px]" id="faq">
        <div className="relative w-full px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
          <div className="mx-auto px-5">
            <div className="flex flex-col items-center">
              <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
                Frequently asked questions
              </h2>
            </div>
            <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
              <div className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span> How does the billing work?</span>
                    <span className="transition group-open:rotate-180">
                      <FaqArrow />
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 font-normal text-gray-300">
                    Springerdata offers a variety of billing options, including
                    monthly and annual subscription plans, as well as
                    pay-as-you-go pricing for certain services. Payment is
                    typically made through a credit card or other secure online
                    payment method.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span> Can I get a refund for my subscription?</span>
                    <span className="transition group-open:rotate-180">
                      <FaqArrow />
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 font-normal text-gray-300">
                    We offer a 30-day money-back guarantee for most of its
                    subscription plans. If you are not satisfied with your
                    subscription within the first 30 days, you can request a
                    full refund. Refunds for subscriptions that have been active
                    for longer than 30 days may be considered on a case-by-case
                    basis.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span> How do I cancel my subscription?</span>
                    <span className="transition group-open:rotate-180">
                      <FaqArrow />
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 font-normal text-gray-300">
                    To cancel your subscription, you can log in to your account
                    and navigate to the subscription management page. From
                    there, you should be able to cancel your subscription and
                    stop future billing.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span> Is there a free trial?</span>
                    <span className="transition group-open:rotate-180">
                      <FaqArrow />
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 font-normal text-gray-300">
                    We offer a free trial of our software for a limited time.
                    During the trial period, you will have access to a limited
                    set of features and functionality, but you will not be
                    charged.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span> How do I contact support?</span>
                    <span className="transition group-open:rotate-180">
                      <FaqArrow />
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 font-normal text-gray-300">
                    If you need help with our platform or have any other
                    questions, you can contact the company's support team by
                    submitting a support request through the website or by
                    emailing support@ourwebsite.com.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span> Do you offer any discounts or promotions?</span>
                    <span className="transition group-open:rotate-180">
                      <FaqArrow />
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 font-normal text-gray-300">
                    We may offer discounts or promotions from time to time. To
                    stay up-to-date on the latest deals and special offers, you
                    can sign up for the company's newsletter or follow it on
                    social media.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="card relative gap-4 flex flex-col p-8 my-[40px]"
        id="contact"
      >
        <div className="text-[3rem] text-center uppercase">Contact</div>
        <div className="picture-container my-4">
          <img
            src="/images/comunity-1.jpeg"
            alt="Picture 1"
            className="picture"
          />
          <img
            src="/images/comunity-2.jpeg"
            alt="Picture 2"
            className="picture"
          />
          <img
            src="/images/comunity-3.jpeg"
            alt="Picture 3"
            className="picture"
          />
          <img src="/images/about.jpeg" alt="Picture 4" className="picture" />
        </div>
        <div className="flex flex-wrap">
          <div className="flex flex-col gap-4 my-[40px] min-w-[200px] flex-1">
            <label className="text-[2rem]">quick links</label>
            <a href="#home">
              <label className="font-thin hover:text-blue-800">home</label>
            </a>
            <a href="#about">
              <label className="font-thin hover:text-blue-800">about</label>
            </a>
            <a href="#how-to-buy">
              <label className="font-thin hover:text-blue-800">
                how to buy
              </label>
            </a>
            <a href="#roadmap">
              <label className="font-thin hover:text-blue-800">roadmap</label>
            </a>
          </div>

          <div className="flex flex-col gap-4 my-[40px] min-w-[200px] flex-1">
            <label className="text-[2rem]">social media</label>
            <button className="uppercase flex gap-3 items-center justify-center p-1 px-5 border-green-500 w-[150px] border-[1px] rounded-2xl transition-all ease-in-out duration-300">
              <label className="uppercase font-thin hover:text-blue-800">
                Telegram
              </label>
              <TelegramIcon />
            </button>
            <button className="uppercase flex gap-3 items-center justify-center p-1 px-5 border-green-500 w-[150px] border-[1px] rounded-2xl transition-all ease-in-out duration-300">
              <label className="uppercase font-thin hover:text-blue-800">
                Twitter
              </label>
              <TwitterIcon />
            </button>
            <button className="uppercase flex gap-3 items-center justify-center p-1 px-5 border-green-500 w-[150px] border-[1px] rounded-2xl transition-all ease-in-out duration-300">
              <label className="uppercase font-thin hover:text-blue-800">
                discord
              </label>
              <DiscordIcon />
            </button>
          </div>

          <div className="flex flex-col gap-4 my-[40px] min-w-[400px] flex-1">
            <label className="text-[2rem]">
              if you have question, feel free to contact us
            </label>
            <div className="flex flex-col gap-4 font-thin">
              <div className="flex gap-4">
                <div className="flex flex-1 gap-2 items-center border-b-2 border-green-500">
                  <ContactUserIcon />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="outline-none bg-transparent flex-1 w-[50px]"
                  ></input>
                </div>
                <div className="flex flex-1 gap-2 items-center border-b-2 border-green-500">
                  <ContactEmailIcon />
                  <input
                    type="text"
                    placeholder="Email"
                    className="outline-none bg-transparent flex-1 w-[50px]"
                  ></input>
                </div>
              </div>

              <div className="flex items-center gap-2 border-b-2 border-green-500">
                <ContactMessageIcon />
                <input
                  type="text"
                  placeholder="Type Your Message"
                  className="outline-none bg-transparent flex-1 w-[100px]"
                ></input>
              </div>
              <button className="bg-green-500 rounded-full p-1">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-[1px] border-white my-[10px]"></div>
      <div className="relative text-center my-[20px] p-[20px]">
        Copyright © 2024. All rights reserved.
      </div>
    </div>
  );
}

export default App;
