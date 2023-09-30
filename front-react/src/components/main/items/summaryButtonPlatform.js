import "@/styles/summary.css";

export default function SummaryButton({
  title,
  subHead,
  btnText,
  lowerText,
  textBox,
  codeEditor,
}) {
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
          <div className="content-sub-container">
            <div className="content-in-container">
              <div className="content-box">
                <div className="content-leftbox">
                  <div className="content-leftbox-nav">
                    <h3 className="content-leftbox-nav-h3">{subHead}</h3>
                  </div>
                  <div dif="ltr" className="content-leftbox-main">
                    <div className="sp-wrapper">
                      <div className="sp-stack">
                        <div className="sp-code-editor">
                          {/* <CodeEditor /> */}
                          {codeEditor}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 콘텐츠 오른쪽 박스 구성 */}
                <div className="content-rightbox">
                  <div className="content-main-rightbox"></div>
                </div>
              </div>
            </div>
          </div>
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
