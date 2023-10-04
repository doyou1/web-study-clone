import "@/styles/summary.css";
import "@/styles/platform.css";
import key from "@/assets/summary/key.svg";
export default function SummaryButton({ title, btnText, lowerText, textBox }) {
  return (
    <div>
      {" "}
      <div className="summary-main-container">
        <div className="summary-sub-container">
          {/* text-box start */}
          <div className="text-box">
            <h2 className="text-box-h2">{title}</h2>
            <p className="text-box-p">{textBox}</p>
          </div>
        </div>
        {/* content-container start */}
        <div className="content-main-container">
          <main className="content-main-platform">
            {/* platform-rightbox layout */}
            <div className="platform-rightbox">
              <div className="platform-rightbox-svg-collection"></div>
              <div className="platform-rightbox-webbox">
                {/* rightnav */}
                <div className="platform-rightbox-webbox-nav">
                  <div className="example-nav-content">
                    <div className="example-nav">
                      <img className="code-logo" src={key} alt="code logo" />
                      <span>example.com</span>
                    </div>
                  </div>
                </div>
                {/* right main collection */}
                <div className="platform-rightbox-webbox-collection">
                  <div className="platform-rightbox-webbox-textbox">
                    <div></div>
                    <div className="second-rightbox-webbox"></div>
                    <div className="third-rightbox-webbox">
                      <h4>Stay true to the web</h4>
                      <p>
                        People expect web app pages to load fast. On the server,
                        React lets you start streaming HTML while you’re still
                        fetching data, progressively filling in the remaining
                        content before any JavaScript code loads. On the client,
                        React can use standard web APIs to keep your UI
                        responsive even in the middle of rendering.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* platform-leftbox layout */}
            <div className="platform-leftbox"></div>
          </main>

          {/* 하단 텍스트  */}
          <div className="lower-text-box">
            <p className="lower-box-p">{lowerText}</p>
            {/* utils/string.firstSummaryBtn.btntext  */}
            {btnText}
          </div>
        </div>
      </div>
    </div>
  );
}
