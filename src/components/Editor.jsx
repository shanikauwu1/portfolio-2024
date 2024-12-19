import React from "react";
import "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // or any other theme

const Editor = () => {
  return (
    <div className="code-editor-container">
      <div className="code-editor">
        <pre className="language-javascript">
          <code className="language-javascript">
            {`<h1>Hello World</h1>
            <p>I'm Shanika</p>
            <h2> Web developer</h2>
            `}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Editor;
