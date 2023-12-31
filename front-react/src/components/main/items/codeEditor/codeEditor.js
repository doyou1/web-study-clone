import "@/styles/codeEditor.css";
// CodeEditerVideo
const CodeEditorVideo = ({ setIsHover }) => {
  const handleMouseOver = (value) => {
    setIsHover((prev) => {
      switch (value) {
        case "divOpen":
          return {
            ...prev,
            firstSummary: {
              ...prev.firstSummary,
              divOpen: true,
            },
          };
        case "thumbnail":
          return {
            ...prev,
            firstSummary: {
              ...prev.firstSummary,
              thumbnail: true,
            },
          };
        case "aOpen":
          return {
            ...prev,
            firstSummary: {
              ...prev.firstSummary,
              aOpen: true,
            },
          };
        case "h3":
          return {
            ...prev,
            firstSummary: {
              ...prev.firstSummary,
              h3: true,
            },
          };
        case "p":
          return {
            ...prev,
            firstSummary: {
              ...prev.firstSummary,
              p: true,
            },
          };
        case "aClose":
          return {
            ...prev,
            firstSummary: {
              ...prev.firstSummary,
              aClose: true,
            },
          };
        case "likeButton":
          return {
            ...prev,
            firstSummary: {
              ...prev.firstSummary,
              likeButton: true,
            },
          };
        case "divClose":
          return {
            ...prev,
            firstSummary: {
              ...prev.firstSummary,
              divClose: true,
            },
          };
        default:
          return {
            ...prev,
          };
      }
    });
  };

  const handleMouseOut = (value) => {
    setIsHover((prev) => {
      switch (value) {
        case "divOpen":
          return {
            ...prev,
            firstSummary: {
              ...prev.firstSummary,
              divOpen: false,
            },
          };
        case "thumbnail":
          return {
            ...prev,
            firstSummary: {
              ...prev.firstSummary,
              thumbnail: false,
            },
          };
        case "aOpen":
          return {
            ...prev,
            firstSummary: {
              ...prev.firstSummary,
              aOpen: false,
            },
          };
        case "h3":
          return {
            ...prev,
            firstSummary: {
              ...prev.firstSummary,
              h3: false,
            },
          };
        case "p":
          return {
            ...prev,
            firstSummary: {
              ...prev.firstSummary,
              p: false,
            },
          };
        case "aClose":
          return {
            ...prev,
            firstSummary: {
              ...prev.firstSummary,
              aClose: false,
            },
          };
        case "likeButton":
          return {
            ...prev,
            firstSummary: {
              ...prev.firstSummary,
              likeButton: false,
            },
          };
        case "divClose":
          return {
            ...prev,
            firstSummary: {
              ...prev.firstSummary,
              divClose: false,
            },
          };
        default:
          return {
            ...prev,
          };
      }
    });
  };

  return (
    <pre className="pre">
      <code className="code-editer">
        {/* one */}
        <div className="cm-line">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword ">
            function{" "}
          </span>
          <span className="sp-syntax-definition dark:sp-syntax-definition">
            Video{" "}
          </span>
          <span className="sp-syntax-punctuation">{"({"} </span>
          <span className="sp-syntax-property dark:sp-syntax-keyword">
            video{" "}
          </span>
          <span className="sp-syntax-punctuation">{"}) {"}</span>
          <br></br>
        </div>
        {/* two */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            &nbsp; return{" "}
          </span>
          <span className="sp-syntax-plain">(</span>
          <br></br>
        </div>
        {/* three divOpen */}
        <div
          className={"cm-line hover:bg-[#ffffdd] hover:dark:bg-opacity-10"}
          onMouseOver={() => handleMouseOver("divOpen")}
          onMouseOut={() => handleMouseOut("divOpen")}
        >
          <span className="sp-syntax-punctuation">
            {" "}
            &nbsp; &nbsp;&nbsp;{"<"}
          </span>
          <span className="sp-syntax-tag dark:sp-syntax-tag" data-value="div">
            {"div"}
          </span>
          <span className="sp-syntax-punctuation">{">"}</span>
          <br></br>
        </div>
        {/* four thumbnail */}
        <div
          className={"cm-line hover:bg-[#ffffdd] hover:dark:bg-opacity-10"}
          onMouseOver={() => handleMouseOver("thumbnail")}
          onMouseOut={() => handleMouseOut("thumbnail")}
        >
          <span className="sp-syntax-punctuation">
            &nbsp; &nbsp; &nbsp; {"<"}
          </span>
          <span className="sp-syntax-definition dark:sp-syntax-definition">
            Thumbnail{" "}
          </span>
          <span className="sp-syntax-property dark:sp-syntax-keyword">
            video
          </span>
          <span className="sp-syntax-punctuation">{"={video}"}</span>
          <span className="sp-syntax-punctuation">
            {" />                     "}
          </span>
          <br></br>
        </div>
        {/* five aOpen */}
        <div
          className={"cm-line hover:bg-[#ffffdd] hover:dark:bg-opacity-10"}
          onMouseOver={() => handleMouseOver("aOpen")}
          onMouseOut={() => handleMouseOut("aOpen")}
        >
          <span className="sp-syntax-plain">&nbsp; &nbsp; &nbsp; {"<"}</span>
          <span className="sp-syntax-tag dark:sp-syntax-tag">a</span>
          <span className="sp-syntax-property dark:sp-syntax-keyword">
            {" "}
            href
          </span>
          <span className="sp-syntax-plain">{"={video."}</span>
          <span className="sp-syntax-property dark:sp-syntax-keyword">url</span>
          <span className="sp-syntax-plain">{"}>"}</span>
          <br></br>
        </div>
        {/* six h3 */}
        <div
          className={"cm-line hover:bg-[#ffffdd] hover:dark:bg-opacity-10"}
          onMouseOver={() => handleMouseOver("h3")}
          onMouseOut={() => handleMouseOut("h3")}
        >
          <span className="sp-syntax-plain">
            &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;{"<"}
          </span>
          <span className="sp-syntax-tag dark:sp-syntax-tag">h3</span>
          <span className="sp-syntax-plain">{">"}</span>
          <span className="sp-syntax-plain">{"{video."}</span>
          <span className="sp-syntax-property dark:sp-syntax-keyword">
            title
          </span>
          <span className="sp-syntax-plain">{"}</"}</span>
          <span className="sp-syntax-tag dark:sp-syntax-tag">h3</span>
          <span className="sp-syntax-plain">{">"}</span>
          <br></br>
        </div>
        {/* seven p */}
        <div
          className={"cm-line hover:bg-[#ffffdd] hover:dark:bg-opacity-10"}
          onMouseOver={() => handleMouseOver("p")}
          onMouseOut={() => handleMouseOut("p")}
        >
          <span className="sp-syntax-plain">
            &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;{"<"}
          </span>
          <span className="sp-syntax-tag dark:sp-syntax-tag">p</span>
          <span className="sp-syntax-plain">{">"}</span>
          <span className="sp-syntax-plain">{"{video."}</span>
          <span className="sp-syntax-property dark:sp-syntax-keyword">
            description
          </span>
          <span className="sp-syntax-plain">{"}</"}</span>
          <span className="sp-syntax-tag dark:sp-syntax-tag">p</span>
          <span className="sp-syntax-plain">{">"}</span>
          <br></br>
        </div>
        {/* eight aClose */}
        <div
          className={"cm-line hover:bg-[#ffffdd] hover:dark:bg-opacity-10"}
          onMouseOver={() => handleMouseOver("aClose")}
          onMouseOut={() => handleMouseOut("aClose")}
        >
          &nbsp;&nbsp; &nbsp; &nbsp;
          <span className="sp-syntax-punctuation">{"</"}</span>
          <span className="sp-syntax-tag dark:sp-syntax-tag">a</span>
          <span className="sp-syntax-punctuation">{">"}</span>
          <br></br>
        </div>
        {/* nine likeButton */}
        <div
          className={"cm-line hover:bg-[#ffffdd] hover:dark:bg-opacity-10"}
          onMouseOver={() => handleMouseOver("likeButton")}
          onMouseOut={() => handleMouseOut("likeButton")}
        >
          &nbsp;
          <span className="sp-syntax-punctuation"> &nbsp; &nbsp; &lt;</span>
          <span className="sp-syntax-definition dark:sp-syntax-definition">
            LikeButton
          </span>
          <span className="sp-syntax-property dark:sp-syntax-keyword">
            {" "}
            video
          </span>
          <span className="sp-syntax-punctuation">{"={video} />"}</span>
          <br></br>
        </div>
        {/* ten divClose */}
        <div
          className={"cm-line hover:bg-[#ffffdd] hover:dark:bg-opacity-10"}
          onMouseOver={() => handleMouseOver("divClose")}
          onMouseOut={() => handleMouseOut("divClose")}
        >
          <span className="sp-syntax-punctuation">
            {" "}
            &nbsp; &nbsp;&nbsp;{"</"}
          </span>
          <span className="sp-syntax-tag dark:sp-syntax-tag" data-value="div">
            {"div"}
          </span>
          <span className="sp-syntax-punctuation">{">"}</span>
          <br></br>
        </div>
        {/* eleven */}
        <div className="cm-line ">
          <span className="sp-syntax-punctuation">&nbsp; {");"}</span>

          <br></br>
        </div>
        {/* twelve*/}
        <div className="cm-line twelve">
          <span className="sp-syntax-punctuation">{"}"}</span>
          <br></br>
        </div>
      </code>
    </pre>
  );
};

// codeEditorVideoList
const CodeEditorVideoList = ({ setIsHover }) => {
  const handleMouseOver = (value) => {
    setIsHover((prev) => {
      switch (value) {
        case "sectionOpen":
          return {
            ...prev,
            secondSummary: {
              ...prev.secondSummary,
              sectionOpen: true,
            },
          };
        case "h2":
          return {
            ...prev,
            secondSummary: {
              ...prev.secondSummary,
              h2: true,
            },
          };
        case "video":
          return {
            ...prev,
            secondSummary: {
              ...prev.secondSummary,
              video: true,
            },
          };
        case "sectionClose":
          return {
            ...prev,
            secondSummary: {
              ...prev.secondSummary,
              sectionClose: true,
            },
          };
        default:
          return {
            ...prev,
          };
      }
    });
  };

  const handleMouseOut = (value) => {
    setIsHover((prev) => {
      switch (value) {
        case "sectionOpen":
          return {
            ...prev,
            secondSummary: {
              ...prev.secondSummary,
              sectionOpen: false,
            },
          };
        case "h2":
          return {
            ...prev,
            secondSummary: {
              ...prev.secondSummary,
              h2: false,
            },
          };
        case "video":
          return {
            ...prev,
            secondSummary: {
              ...prev.secondSummary,
              video: false,
            },
          };
        case "sectionClose":
          return {
            ...prev,
            secondSummary: {
              ...prev.secondSummary,
              sectionClose: false,
            },
          };
        default:
          return {
            ...prev,
          };
      }
    });
  };

  return (
    <pre className="pre">
      <code className="code-editer">
        {/* one */}
        <div className="cm-line">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            function{" "}
          </span>
          <span className="sp-syntax-definition dark:sp-syntax-definition">
            VideoList{" "}
          </span>
          <span className="sp-syntax-punctuation">{"({"} </span>
          <span className="sp-syntax-property dark:sp-syntax-property">
            videos
          </span>
          <span className="sp-syntax-punctuation">, </span>
          <span className="sp-syntax-property dark:sp-syntax-property">
            emptyHeading{" "}
          </span>
          <span className="sp-syntax-punctuation">{"}) {"}</span>
          <br></br>
        </div>
        {/* two */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            &nbsp; const{" "}
          </span>
          <span className="sp-syntax-plain">count</span> =
          <span className="sp-syntax-plain"> videos</span>.
          <span className="sp-syntax-property dark:sp-syntax-property">
            length
          </span>
          <span className="sp-syntax-punctuation">;</span>
          <br></br>
        </div>
        {/* three */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            &nbsp; let{" "}
          </span>
          <span className="sp-syntax-plain">heading</span> =
          <span className="sp-syntax-plain"> emptyHeading</span>
          <span className="sp-syntax-punctuation">;</span>
          <br></br>
        </div>
        {/* four */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            &nbsp; if
          </span>
          <span className="sp-syntax-punctuation"> (</span>
          <span className="sp-syntax-plain">count {">"} </span>
          <span className="sp-syntax-static dark:sp-syntax-static">0</span>
          <span className="sp-syntax-punctuation">)</span>
          <span className="sp-syntax-punctuation">{" {"}</span>
          <br></br>
        </div>
        {/* five */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            &nbsp; &nbsp; const
          </span>
          <span className="sp-syntax-plain"> noun</span> =
          <span className="sp-syntax-plain"> count</span> &gt;
          <span className="sp-syntax-static dark:sp-syntax-static"> 1</span> ?
          <span className="sp-syntax-string dark:sp-syntax-string">
            {" "}
            'Videos'
          </span>{" "}
          :
          <span className="sp-syntax-string dark:sp-syntax-string">
            {" "}
            'Video'
          </span>
          <span className="sp-syntax-punctuation">;</span>
          <br></br>
        </div>
        {/* six */}
        <div className="cm-line ">
          <span className="sp-syntax-plain">&nbsp; &nbsp; heading</span> =
          <span className="sp-syntax-plain"> count</span> +
          <span className="sp-syntax-string dark:sp-syntax-string"> ' '</span> +
          <span className="sp-syntax-plain"> noun</span>
          <span className="sp-syntax-punctuation">; </span>
          <br></br>
        </div>
        {/* seven */}
        <div className="cm-line ">
          <span className="sp-syntax-punctuation">&nbsp;{" }"}</span>
          <br></br>
        </div>
        {/* eight */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            &nbsp; return
          </span>
          <span className="sp-syntax-punctuation"> (</span>
          <br></br>
        </div>
        {/* nine sectionOpen */}
        <div
          className={"cm-line hover:bg-[#ffffdd] hover:dark:bg-opacity-10"}
          onMouseOver={() => handleMouseOver("sectionOpen")}
          onMouseOut={() => handleMouseOut("sectionOpen")}
        >
          <span className="sp-syntax-punctuation">&nbsp; &nbsp; &lt;</span>
          <span className="sp-syntax-tag dark:sp-syntax-tag">section</span>
          <span className="sp-syntax-punctuation">&gt;</span>
          <br></br>
        </div>
        {/* ten h2 */}
        <div
          className={"cm-line hover:bg-[#ffffdd] hover:dark:bg-opacity-10"}
          onMouseOver={() => handleMouseOver("h2")}
          onMouseOut={() => handleMouseOut("h2")}
        >
          <span className="sp-syntax-punctuation">
            &nbsp; &nbsp; &nbsp; &lt;
          </span>
          <span className="sp-syntax-tag dark:sp-syntax-tag">h2</span>
          <span className="sp-syntax-punctuation">&gt;</span>
          <span className="sp-syntax-punctuation">{"{"}</span>
          <span className="sp-syntax-plain">heading</span>
          <span className="sp-syntax-punctuation">{"}"}</span>
          <span className="sp-syntax-punctuation">&lt;/</span>
          <span className="sp-syntax-tag dark:sp-syntax-tag">h2</span>
          <span className="sp-syntax-punctuation">&gt;</span>
          <br></br>
        </div>
        {/* eleven */}
        <div className="cm-line">
          <span className="sp-syntax-punctuation">
            &nbsp; &nbsp; &nbsp; {"{"}
          </span>
          <span className="sp-syntax-plain">videos</span>.
          <span className="sp-syntax-property dark:sp-syntax-property">
            map
          </span>
          <span className="sp-syntax-punctuation">(</span>
          <span className="sp-syntax-plain">video</span>
          <span className="sp-syntax-punctuation"> =&gt;</span>
          <br></br>
        </div>
        {/* twelve video */}
        <div
          className={"cm-line hover:bg-[#ffffdd] hover:dark:bg-opacity-10"}
          onMouseOver={() => handleMouseOver("video")}
          onMouseOut={() => handleMouseOut("video")}
        >
          <span className="sp-syntax-punctuation">
            &nbsp; &nbsp; &nbsp; &nbsp; &lt;
          </span>
          <span className="sp-syntax-definition dark:sp-syntax-definition">
            Video
          </span>
          <span className="sp-syntax-property dark:sp-syntax-property">
            {" "}
            key
          </span>
          =<span className="sp-syntax-punctuation">{"{"}</span>
          <span className="sp-syntax-plain">video</span>.
          <span className="sp-syntax-property dark:sp-syntax-property">id</span>
          <span className="sp-syntax-punctuation">{"}"}</span>
          <span className="sp-syntax-property dark:sp-syntax-property">
            {" "}
            video
          </span>
          =<span className="sp-syntax-punctuation">{"{"}</span>
          <span className="sp-syntax-plain">video</span>
          <span className="sp-syntax-punctuation">{"}"}</span>
          <span className="sp-syntax-punctuation"> /&gt;</span>
          <br></br>
        </div>
        {/* Thirteen */}
        <div className="cm-line ">
          <span className="sp-syntax-punctuation">
            &nbsp; &nbsp; &nbsp;&nbsp;)
          </span>
          <span className="sp-syntax-punctuation">{"}"}</span>
          <br></br>
        </div>
        {/* fourteen sectionClose */}
        <div
          className={"cm-line hover:bg-[#ffffdd] hover:dark:bg-opacity-10"}
          onMouseOver={() => handleMouseOver("sectionClose")}
          onMouseOut={() => handleMouseOut("sectionClose")}
        >
          <span className="sp-syntax-punctuation"> &nbsp; &nbsp;&lt;/</span>
          <span className="sp-syntax-tag dark:sp-syntax-tag">section</span>
          <span className="sp-syntax-punctuation">&gt;</span>
          <br></br>
        </div>
        {/* fifteen */}
        <div className="cm-line ">
          <span className="sp-syntax-punctuation">&nbsp;&nbsp;)</span>
          <span className="sp-syntax-punctuation">;</span>
          <br></br>
        </div>
        {/* sixteen */}
        <div className="cm-line ">
          <span className="sp-syntax-punctuation">{"}"}</span>
        </div>
      </code>
    </pre>
  );
};

// codeEditorSearchableVideoList
const CodeEditorSearchableVideoList = ({ setIsHover }) => {
  const handleMouseOver = (value) => {
    setIsHover((prev) => {
      switch (value) {
        case "wrapOpen":
          return {
            ...prev,
            firstSummaryBtn: {
              ...prev.firstSummaryBtn,
              wrapOpen: true,
            },
          };
        case "searchInput":
          return {
            ...prev,
            firstSummaryBtn: {
              ...prev.firstSummaryBtn,
              searchInput: true,
            },
          };
        case "videoList":
          return {
            ...prev,
            firstSummaryBtn: {
              ...prev.firstSummaryBtn,
              videoList: true,
            },
          };
        case "wrapClose":
          return {
            ...prev,
            firstSummaryBtn: {
              ...prev.firstSummaryBtn,
              wrapClose: true,
            },
          };
        default:
          return {
            ...prev,
          };
      }
    });
  };

  const handleMouseOut = (value) => {
    setIsHover((prev) => {
      switch (value) {
        case "wrapOpen":
          return {
            ...prev,
            firstSummaryBtn: {
              ...prev.firstSummaryBtn,
              wrapOpen: false,
            },
          };
        case "searchInput":
          return {
            ...prev,
            firstSummaryBtn: {
              ...prev.firstSummaryBtn,
              searchInput: false,
            },
          };
        case "videoList":
          return {
            ...prev,
            firstSummaryBtn: {
              ...prev.firstSummaryBtn,
              videoList: false,
            },
          };
        case "wrapClose":
          return {
            ...prev,
            firstSummaryBtn: {
              ...prev.firstSummaryBtn,
              wrapClose: false,
            },
          };
        default:
          return {
            ...prev,
          };
      }
    });
  };

  return (
    <pre className="pre">
      <code className="code-editer">
        {/* one */}
        <div className="cm-line">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            import{" "}
          </span>
          <span className="sp-syntax-punctuation">{"{ useState }"} </span>
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">from</span>
          <span className="sp-syntax-string dark:sp-syntax-string">
            {" 'react'"}
          </span>
          <span className="sp-syntax-plain">{";"}</span>
          <br></br>
        </div>
        <br></br>
        {/* two */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            function&nbsp;
          </span>
          <span className="sp-syntax-definition dark:sp-syntax-definition">
           SearchableVideoList
          </span>
          <span className="sp-syntax-plain">{"({"}</span>
          <span className="sp-syntax-property dark:sp-syntax-property">
            videos
          </span>
          <span className="sp-syntax-punctuation">{"}) {"}</span>
          <br></br>
        </div>
        {/* three */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            &nbsp; const
          </span>
          <span className="sp-syntax-plain">
            {"[searchText, setSearchText] = "}
          </span>
          <span className="sp-syntax-definition dark:sp-syntax-definition">
            useState
          </span>
          <span className="sp-syntax-plain">(</span>
          <span className="sp-syntax-string dark:sp-syntax-string">''</span>
          <span className="sp-syntax-plain">);</span>
          <br></br>
        </div>
        {/* four */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            &nbsp; const
          </span>
          <span className="sp-syntax-punctuation"> foundVideos = </span>
          <span className="sp-syntax-definition dark:sp-syntax-definition">
            filterVideos
          </span>
          <span className="sp-syntax-plain">(videos, searchText);</span>

          <br></br>
        </div>
        {/* five */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            &nbsp; return
          </span>
          <span className="sp-syntax-plain"> (</span>
          <br></br>
        </div>
        {/* six wrapOpen */}
        <div
          className={"cm-line hover:bg-[#ffffdd] hover:dark:bg-opacity-10"}
          onMouseOver={() => handleMouseOver("wrapOpen")}
          onMouseOut={() => handleMouseOut("wrapOpen")}
        >
          <span className="sp-syntax-plain">&nbsp; &nbsp; {"<>"}</span>
          <br></br>
        </div>

        {/* seven searchInput */}
        <div
          className={"cm-line hover:bg-[#ffffdd] hover:dark:bg-opacity-10"}
          onMouseOver={() => handleMouseOver("searchInput")}
          onMouseOut={() => handleMouseOut("searchInput")}
        >
          <div className="cm-line ">
            <span className="sp-syntax-punctuation">
              &nbsp; &nbsp; &nbsp;{" <"}
            </span>
            <span className="sp-syntax-definition dark:sp-syntax-definition">
              SearchInput
            </span>
            <br></br>
          </div>
          {/* eight */}
          <div className="cm-line ">
            <span className="sp-syntax-property dark:sp-syntax-property">
              &nbsp; &nbsp; &nbsp; {"  value"}
            </span>
            <span className="sp-syntax-punctuation">{"={searchText}"}</span>
            <br></br>
          </div>
          {/* nine */}
          <div className="cm-line cm-line-nine">
            <span className="sp-syntax-property dark:sp-syntax-property">
              &nbsp; &nbsp; &nbsp; {"  onChange"}
            </span>
            <span className="sp-syntax-punctuation">{"={newText => "}</span>
            <span className="sp-syntax-definition dark:sp-syntax-definition">
              setSearchText
            </span>
            <span className="sp-syntax-plain">{"(newText)} />"}</span>
            <br></br>
          </div>
        </div>

        {/* ten videoList */}
        <div
          className={"cm-line hover:bg-[#ffffdd] hover:dark:bg-opacity-10"}
          onMouseOver={() => handleMouseOver("videoList")}
          onMouseOut={() => handleMouseOut("videoList")}
        >
          <div className="cm-line ten">
            <span className="sp-syntax-punctuation">
              &nbsp; &nbsp; &nbsp; &lt;
            </span>
            <span className="sp-syntax-definition dark:sp-syntax-definition">
              VideoList
            </span>
            <br></br>
          </div>
          {/* eleven */}
          <div className="cm-line eleven ">
            <span className="sp-syntax-property dark:sp-syntax-property">
              &nbsp; &nbsp; &nbsp; {"  videos"}
            </span>
            <span className="sp-syntax-plain">{"={foundVideos}"}</span>
            <br></br>
          </div>
          {/* twelve*/}
          <div className="cm-line twelve">
            <span className="sp-syntax-property dark:sp-syntax-property">
              &nbsp; &nbsp; &nbsp; {"  emptyHeading"}
            </span>
            <span className="sp-syntax-plain">{"={"}</span>
            <span className="sp-syntax-string dark:sp-syntax-string">
              {'`No matches for "'}
            </span>
            <span className="sp-syntax-plain">{"${searchText}"}</span>
            <span className="sp-syntax-string dark:sp-syntax-string">
              {'"`'}
            </span>
            <span className="sp-syntax-plain">{"} />"}</span>
            <br></br>
          </div>
        </div>
        {/* Thirteen */}
        <div
          className={"cm-line hover:bg-[#ffffdd] hover:dark:bg-opacity-10"}
          onMouseOver={() => handleMouseOver("wrapClose")}
          onMouseOut={() => handleMouseOut("wrapClose")}
        >
          <span className="sp-syntax-punctuation">&nbsp; &nbsp; {"</>"}</span>
          <br></br>
        </div>
        {/* fourteen */}
        <div className="cm-line fourteen">
          <span className="sp-syntax-punctuation"> &nbsp;{");"}</span>

          <br></br>
        </div>

        {/* sixteen */}
        <div className="cm-line ">
          <span className="sp-syntax-punctuation">{"}"}</span>
        </div>
      </code>
    </pre>
  );
};

// codeEditerConferencePage
const CodeEditorConferencePage = ({ setIsHover }) => {
  const handleMouseOver = (value) => {
    setIsHover((prev) => {
      switch (value) {
        case "conferenceLayoutOpen":
          return {
            ...prev,
            secondSummaryBtn: {
              ...prev.secondSummaryBtn,
              conferenceLayoutOpen: true,
            },
          };
        case "suspenseOpen":
          return {
            ...prev,
            secondSummaryBtn: {
              ...prev.secondSummaryBtn,
              suspenseOpen: true,
            },
          };
        case "talks":
          return {
            ...prev,
            secondSummaryBtn: {
              ...prev.secondSummaryBtn,
              talks: true,
            },
          };
        case "suspenseClose":
          return {
            ...prev,
            secondSummaryBtn: {
              ...prev.secondSummaryBtn,
              suspenseClose: true,
            },
          };
        case "conferenceLayoutClose":
          return {
            ...prev,
            secondSummaryBtn: {
              ...prev.secondSummaryBtn,
              conferenceLayoutClose: true,
            },
          };
        case "searchableVideoList":
          return {
            ...prev,
            secondSummaryBtn: {
              ...prev.secondSummaryBtn,
              searchableVideoList: true,
            },
          };
        default:
          return {
            ...prev,
          };
      }
    });
  };

  const handleMouseOut = (value) => {
    setIsHover((prev) => {
      switch (value) {
        case "conferenceLayoutOpen":
          return {
            ...prev,
            secondSummaryBtn: {
              ...prev.secondSummaryBtn,
              conferenceLayoutOpen: false,
            },
          };
        case "suspenseOpen":
          return {
            ...prev,
            secondSummaryBtn: {
              ...prev.secondSummaryBtn,
              suspenseOpen: false,
            },
          };
        case "talks":
          return {
            ...prev,
            secondSummaryBtn: {
              ...prev.secondSummaryBtn,
              talks: false,
            },
          };
        case "suspenseClose":
          return {
            ...prev,
            secondSummaryBtn: {
              ...prev.secondSummaryBtn,
              suspenseClose: false,
            },
          };
        case "conferenceLayoutClose":
          return {
            ...prev,
            secondSummaryBtn: {
              ...prev.secondSummaryBtn,
              conferenceLayoutClose: false,
            },
          };
        case "searchableVideoList":
          return {
            ...prev,
            secondSummaryBtn: {
              ...prev.secondSummaryBtn,
              searchableVideoList: false,
            },
          };
        default:
          return {
            ...prev,
          };
      }
    });
  };

  return (
    <pre className="pre">
      <code className="code-editer">
        {/* one */}
        <div className="cm-line">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            import
          </span>
          <span className="sp-syntax-punctuation">{" { db } "}</span>
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">from</span>
          <span className="sp-syntax-string dark:sp-syntax-string">
            {" './database.js'"}
          </span>
          <span className="sp-syntax-plain">{";"} </span>
          <br></br>
        </div>
        {/* two */}
        <div className="cm-line">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            import
          </span>
          <span className="sp-syntax-punctuation">{" { Suspense } "}</span>
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">from</span>
          <span className="sp-syntax-string dark:sp-syntax-string">
            {" 'react'"}
          </span>
          <span className="sp-syntax-plain">{";"} </span>
          <br></br>
        </div>
        <br></br>
        {/* three */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            async{" "}
          </span>
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            function
          </span>
          <span className="sp-syntax-definition dark:sp-syntax-definition">
            {" "}
            ConferencePage
          </span>
          <span className="sp-syntax-plain">{"({ "}</span>
          <span className="sp-syntax-property dark:sp-syntax-property">
            slug
          </span>
          <span className="sp-syntax-plain">{" }) {"}</span>
          <br></br>
        </div>
        {/* four */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            &nbsp; const
          </span>
          <span className="sp-syntax-punctuation"> conf =</span>
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            {" "}
            await
          </span>
          <span className="sp-syntax-plain"> db.</span>
          <span className="sp-syntax-property dark:sp-syntax-property">
            Confs
          </span>
          .
          <span className="sp-syntax-property dark:sp-syntax-property">
            find
          </span>
          <span className="sp-syntax-punctuation">{"({"}</span>
          <span className="sp-syntax-property dark:sp-syntax-property">
            {" slug "}
          </span>
          <span className="sp-syntax-punctuation">{"};"}</span>
          <br></br>
        </div>
        {/* five */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            &nbsp; return
          </span>
          <span className="sp-syntax-plain">{" ("}</span>
          <br></br>
        </div>
        {/* six conferenceLayoutOpen */}
        <div
          className={"cm-line hover:bg-[#ffffdd] hover:dark:bg-opacity-10"}
          onMouseOver={() => handleMouseOver("conferenceLayoutOpen")}
          onMouseOut={() => handleMouseOut("conferenceLayoutOpen")}
        >
          <span className="sp-syntax-plain">&nbsp; &nbsp; &lt;</span>
          <span className="sp-syntax-definition dark:sp-syntax-definition">
            ConferenceLayout{" "}
          </span>
          <span className="sp-syntax-property dark:sp-syntax-property">
            conf
          </span>
          <span className="sp-syntax-plain">{"={conf}>"}</span>
          <br></br>
        </div>
        {/* seven suspenseOpen */}
        <div
          className={"cm-line hover:bg-[#ffffdd] hover:dark:bg-opacity-10"}
          onMouseOver={() => handleMouseOver("suspenseOpen")}
          onMouseOut={() => handleMouseOut("suspenseOpen")}
        >
          <span className="sp-syntax-plain">&nbsp; &nbsp; &nbsp; &lt;</span>
          <span className="sp-syntax-definition dark:sp-syntax-definition">
            Suspense{" "}
          </span>
          <span className="sp-syntax-property dark:sp-syntax-property">
            fallback
          </span>
          <span className="sp-syntax-plain">{"={<"}</span>
          <span className="sp-syntax-definition dark:sp-syntax-definition">
            TalksLoading
          </span>
          <span className="sp-syntax-plain">{" />}>"}</span>
          <br></br>
        </div>
        {/* eight talks */}
        <div
          className={"cm-line hover:bg-[#ffffdd] hover:dark:bg-opacity-10"}
          onMouseOver={() => handleMouseOver("talks")}
          onMouseOut={() => handleMouseOut("talks")}
        >
          <span className="sp-syntax-plain">
            &nbsp; &nbsp; &nbsp; &nbsp; &lt;
          </span>
          <span className="sp-syntax-definition dark:sp-syntax-definition">
            Talks{" "}
          </span>
          <span className="sp-syntax-property dark:sp-syntax-property">
            confId
          </span>
          <span className="sp-syntax-plain">{"={conf."}</span>
          <span className="sp-syntax-property dark:sp-syntax-property">id</span>
          <span className="sp-syntax-plain">{" />}"}</span>
          <br></br>
        </div>
        {/* nine suspenseClose */}
        <div
          className={"cm-line hover:bg-[#ffffdd] hover:dark:bg-opacity-10"}
          onMouseOver={() => handleMouseOver("suspenseClose")}
          onMouseOut={() => handleMouseOut("suspenseClose")}
        >
          <span className="sp-syntax-plain">&nbsp; &nbsp; &nbsp; &lt;/</span>
          <span className="sp-syntax-definition dark:sp-syntax-definition">
            Suspense
          </span>
          <span className="sp-syntax-plain">{">"}</span>
          <br></br>
        </div>
        {/* ten conferenceLayoutClose */}
        <div
          className={"cm-line hover:bg-[#ffffdd] hover:dark:bg-opacity-10"}
          onMouseOver={() => handleMouseOver("conferenceLayoutClose")}
          onMouseOut={() => handleMouseOut("conferenceLayoutClose")}
        >
          <span className="sp-syntax-plain">&nbsp; &nbsp; &lt;/</span>
          <span className="sp-syntax-definition dark:sp-syntax-definition">
            ConferenceLayout
          </span>
          <span className="sp-syntax-plain">{">"}</span>
          <br></br>
        </div>
        {/* eleven */}
        <div className="cm-line ">
          <span className="sp-syntax-punctuation">&nbsp; {");"}</span>
          <br></br>
        </div>
        {/* twelve*/}
        <div className="cm-line ">
          <span className="sp-syntax-punctuation">{"}"}</span>
          <br></br>
        </div>
        <br></br>
        {/* Thirteen */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            async{" "}
          </span>
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            function
          </span>
          <span className="sp-syntax-definition dark:sp-syntax-definition">
            {" "}
            Talks
          </span>
          <span className="sp-syntax-plain">{"({ "}</span>
          <span className="sp-syntax-property dark:sp-syntax-property">
            slug
          </span>
          <span className="sp-syntax-plain">{" }) {"}</span>
          <br></br>
        </div>
        {/* fourteen */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            &nbsp; const
          </span>
          <span className="sp-syntax-punctuation"> talks =</span>
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            {" "}
            await
          </span>
          <span className="sp-syntax-plain"> db.</span>
          <span className="sp-syntax-property dark:sp-syntax-property">
            Talks
          </span>
          .
          <span className="sp-syntax-property dark:sp-syntax-property">
            findAll
          </span>
          <span className="sp-syntax-punctuation">{"({"}</span>
          <span className="sp-syntax-property dark:sp-syntax-property">
            {" slug "}
          </span>
          <span className="sp-syntax-punctuation">{"});"}</span>
          <br></br>
        </div>
        {/* fifteen */}
        <div className="cm-line ">
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            &nbsp; const
          </span>
          <span className="sp-syntax-punctuation"> videos =</span>
          <span className="sp-syntax-plain"> talks.</span>
          <span className="sp-syntax-property dark:sp-syntax-property">
            map
          </span>
          <span className="sp-syntax-plain">{"(talk => talk."}</span>
          <span className="sp-syntax-property dark:sp-syntax-property">
            video
          </span>
          <span className="sp-syntax-punctuation">{");"}</span>
          <br></br>
        </div>
        {/* sixteen searchableVideoList */}
        <div
          className={"cm-line hover:bg-[#ffffdd] hover:dark:bg-opacity-10"}
          onMouseOver={() => handleMouseOver("searchableVideoList")}
          onMouseOut={() => handleMouseOut("searchableVideoList")}
        >
          <span className="sp-syntax-keyword dark:sp-syntax-keyword">
            &nbsp; return
          </span>
          <span className="sp-syntax-punctuation"> &lt;</span>
          <span className="sp-syntax-definition dark:sp-syntax-definition">
            {"SearchableVideoList "}
          </span>
          <span className="sp-syntax-property dark:sp-syntax-property">
            videos
          </span>
          <span className="sp-syntax-plain">{"={videos} />;"}</span>
          <br></br>
        </div>
        {/* sixteen */}
        <div className="cm-line ">
          <span className="sp-syntax-plain">{"}"}</span>

          <br></br>
        </div>
      </code>
    </pre>
  );
};

export {
  CodeEditorVideo,
  CodeEditorVideoList,
  CodeEditorSearchableVideoList,
  CodeEditorConferencePage,
};
