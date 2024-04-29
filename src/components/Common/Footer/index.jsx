const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div>
          <div className="footer-logo">
            <a href="/">
              <img src="images/logo.png" alt="" />
            </a>
            <div className="col-md-4 mt-2 social">
              <a href="https://x.com/mhg" rel="noreferrer" target="_blank">
                <img src="images/twitter.png" className="twitter1" alt="" />
              </a>

              <a href="https://t.me/mhg" rel="noreferrer" target="_blank">
                <img src="images/telegram.png" alt="" />
              </a>

              <a href="https://t.me/mhg" rel="noreferrer" target="_blank">
                <img src="images/discord.png" alt=""/>
              </a>
            </div>
          </div>
        </div>
        <div className="foot-last text-center">
          {" "}
          Copyright © 2024 MHG. All Rights Reserved{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
