import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Buynow from "./Buynow";

export default function Index() {
  return (
    <>
      <Header />
      <div className="site-wraper">
        <section className="hero-sec" id="home">
          <div className="container">
            <div className="hero-sec-text">
              <div className="hero-sec-text-in">
                <h1 className="text-red-400" style={{ marginBottom: "40px" }}>
                  Join the Jungle of Future Finance.
                </h1>
                <p>
                  XToken is the pinnacle of decentralized finance, offering
                  unparalleled stability and security in an ever-evolving
                  digital landscape. With its innovative architecture and
                  unwavering commitment to transparency, XToken is poised to
                  revolutionize the way we engage with cryptocurrencies.
                </p>
              </div>
              <div style={{ display: "flex", gap: "80px" }}>
                <label
                  style={{
                    border: "1px solid var(--primary)",
                    padding: "5px",
                    borderRadius: "20px",
                    width: "100px",
                  }}
                >
                  Learn More
                </label>
                <label
                  style={{
                    backgroundColor: "var(--primary)",
                    border: "1px solid transparent",
                    padding: "5px",
                    borderRadius: "20px",
                    width: "100px",
                  }}
                >
                  Buy Now
                </label>
              </div>
            </div>
          </div>
        </section>
        {/* <Buynow /> */}
        <section id="about-us" className="why-section section-padding pb-0">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="heading-text">
                  <h4>About MHG</h4>
                  <p>
                    Money Hungry Gorillas (MHG) is a cryptocurrency token
                    designed to provide users with a unique and innovative
                    financial experience. As its name suggests, MHG embodies a
                    spirit of financial ambition and strength, aiming to empower
                    users to pursue their financial goals with confidence. MHG
                    stands out in the crowded cryptocurrency landscape with its
                    focus on transparency, security, and community-driven
                    development. By leveraging blockchain technology, MHG
                    ensures that all transactions are transparent and immutable,
                    providing users with full visibility into the movement of
                    their assets. Ethereum is one of the most secure blockchain
                    networks, with a robust consensus mechanism (proof of work
                    transitioning to proof of stake) and a large network of
                    miners and validators ensuring the integrity of
                    transactions.
                  </p>
                </div>
              </div>
              <div className="col-md-6 ms-auto">
                <figure className="mb-0">
                  <img src="images/about.png" width="100%" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className="pre-box">
          <div className="container">
            <div className="pre-box-in">
              <div className="heading-text text-center w-75 m-auto">
                <h4>
                  Presale Live Now! <br /> Participate Early in MHG’s Presale
                </h4>
                <span className="divider"></span>
                <p>
                  The presale for MHG is now live, offering you the exclusive
                  opportunity to get involved before the official launch. This
                  public first-come, first-served (FCFS) presale is designed to
                  be open to everyone, ensuring a fair chance for all. Our goal
                  is to support our early supporters by providing them with
                  priority access before the official launch.
                </p>
                <h2>Secure Your MHG Tokens Now</h2>
                <div className="text-center">
                  <a href="#home" className="btn btn-red">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-section section-padding" id="why-sec">
          <div className="container">
            <div className="heading-text text-center w-100 mx-auto d-flex justify-content-center">
              <h4>How to buy MHG ?</h4>
            </div>
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="heading-text">
                  <figcaption>
                    <h3>Setting up a Cryptocurrency Wallet</h3>
                    <p>
                      Choose a reputable cryptocurrency wallet that supports
                      Ethereum-based tokens like MHG. Popular options include
                      MetaMask, Trust Wallet, and MyEtherWallet. Visit the
                      official website or download the wallet app from a trusted
                      source. Follow the instructions to create a new wallet,
                      which typically involves setting a strong password and
                      securely storing your recovery phrase.
                    </p>
                  </figcaption>
                </div>
                <div className="heading-text">
                  <figcaption>
                    <h3>Adding Ethereum to Your Wallet</h3>
                    <p>
                      Once your wallet is set up, you'll need to acquire
                      Ethereum (ETH) to exchange for MHG tokens. You can
                      purchase Ethereum from a cryptocurrency exchange such as
                      Coinbase, Binance, or Kraken. After purchasing ETH,
                      withdraw it to your wallet address. Copy your wallet's
                      Ethereum address and paste it into the withdrawal section
                      of the exchange, then confirm the transaction.
                    </p>
                  </figcaption>
                </div>
                <div className="heading-text">
                  <figcaption>
                    <h3>Converting Ethereum to Money Hungry Gorillas Tokens</h3>
                    <p>
                      Click the 'Connect Wallet' button to connect your wallet
                      to the page and enter the amount of Ether you want to pay
                      in the purchase widget. Then, the amount of tokens you
                      will receive will be displayed, and you can proceed with
                      the purchase by clicking the purchase button. If your
                      purchase is successful, you will receive tokens in your
                      wallet.
                    </p>
                  </figcaption>
                </div>
                <div className="heading-text">
                  <figcaption>
                    <h3>Safety Tips</h3>
                    <p>
                      Always double-check the wallet addresses before making any
                      transactions. Ensure that you're sending funds to the
                      correct address to avoid loss of funds due to human error
                      or phishing attacks.
                    </p>
                  </figcaption>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="roadmap-sec section-padding" id="road-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <img src="images/roadmap.png" width="100%" alt="" />
              </div>
              <div className="col-md-7">
                <div className="heading-text mb-4">
                  <h4>📅 ROADMAP</h4>
                </div>
                <ul>
                  <li>
                    <div className="phase-box">
                      <span>PHASE 1</span>
                    </div>
                    <div className="phase-details">
                      <h4>Presale</h4>
                      <div>
                        <span>Website Landing Page</span>
                        <span>Public Presale </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="phase-box">
                      <span>PHASE 2</span>
                    </div>
                    <div className="phase-details">
                      <h4>Launch on Solana</h4>
                      <div>
                        <span>Build Community</span>
                        <span>Dexscreener and Birdeye Update</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="phase-box">
                      <span>PHASE 3</span>
                    </div>
                    <div className="phase-details">
                      <h4>Trending on X</h4>
                      <div>
                        <span>CG & CMC Listing</span>
                        <span>Staking Dapp Audit</span>
                        <span>NFT Presale</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="phase-box">
                      <span>PHASE 4</span>
                    </div>
                    <div className="phase-details">
                      <h4>Exchange Listings Galore</h4>
                      <div>
                        <span>First Set of Exchange Listings</span>
                        <span>Moontok Listing</span>
                        <span>Adding Additional Liquidity</span>
                        <span>More Exchange Listings</span>
                        <span>Marketing Push</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="phase-box">
                      <span>PHASE 5</span>
                    </div>
                    <div className="phase-details">
                      <h4>Meme-orable Milestones</h4>
                      <div>
                        <span>Promo Wear</span>
                        <span>Tier 1 Listings</span>
                        <span>Staking D'app Full Release</span>
                        <span>NFT Drop</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="about-section section-padding" id="faq-sec">
          <div className="container">
            <div className="heading-text text-center w-100 mx-auto d-flex justify-content-center">
              <h4>FAQs</h4>
            </div>
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="heading-text">
                  <figcaption>
                    <h3>What is a token presale?</h3>
                    <p>
                      A token presale is an initial offering of a cryptocurrency
                      token to a limited number of investors before the public
                      sale. It allows early supporters to purchase tokens at a
                      discounted price or with additional bonuses before the
                      official launch of the project.
                    </p>
                  </figcaption>
                </div>
                <div className="heading-text">
                  <figcaption>
                    <h3>How does a token presale work?</h3>
                    <p>
                      During a token presale, the project team typically sets a
                      minimum investment amount and offers tokens at a
                      discounted price to early investors. Investors contribute
                      funds (usually in cryptocurrency like Ethereum or Bitcoin)
                      to the project in exchange for tokens. These funds are
                      often used to fund the development and marketing of the
                      project before its public launch.
                    </p>
                  </figcaption>
                </div>
                <div className="heading-text">
                  <figcaption>
                    <h3>Who can participate in a token presale?</h3>
                    <p>
                      Participation in a token presale is usually restricted to
                      accredited investors or individuals who meet certain
                      eligibility criteria set by the project team. This can
                      include requirements such as minimum investment amounts or
                      geographic restrictions. KYC (Know Your Customer) and AML
                      (Anti-Money Laundering) checks may also be required.
                    </p>
                  </figcaption>
                </div>
                <div className="heading-text">
                  <figcaption>
                    <h3>
                      What are the benefits of participating in a token presale?
                    </h3>
                    <p>
                      Participating in a token presale allows investors to
                      access tokens at a discounted price or with additional
                      bonuses, providing the opportunity for potentially higher
                      returns on investment. Additionally, early investors may
                      have the chance to engage with the project team, provide
                      feedback, and contribute to the project's development.
                    </p>
                  </figcaption>
                </div>
                <div className="heading-text">
                  <figcaption>
                    <h3>What are the risks associated with token presales?</h3>
                    <p>
                      While token presales offer the potential for early access
                      to tokens at a lower price, they also come with certain
                      risks. These can include project failure, regulatory
                      uncertainty, lack of liquidity, and the potential for
                      fraudulent projects. It's important for investors to
                      conduct thorough research, assess the project's viability,
                      and consider the risks before participating in a token
                      presale.
                    </p>
                  </figcaption>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="roshi-crypto section-padding" id="contact-sec">
          <div className="container">
            <div className="roshi-crypto-in">
              <h2>MHG Community Hub</h2>
              <p>
                Join our Telegram and X communities to connect with fellow MHG
                enthusiasts. Share your thoughts, engage in discussions, and
                stay updated on the latest news and events.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
