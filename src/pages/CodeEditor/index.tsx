import { Tabs } from 'antd';

export default function CodeEditor() {
  const code = `## Title

\`\`\`jsx
function Demo() {
  return <div>demo</div>
}
\`\`\`

\`\`\`bash
# Not dependent on uiw.
npm install @codemirror/lang-markdown --save
npm install @codemirror/language-data --save
\`\`\`

[weisit ulr](https://uiwjs.github.io/react-codemirror/)

\`\`\`go
package main
import "fmt"
func main() {
  fmt.Println("Hello, 世界")
}
\`\`\`
`;

  const items = [
    {
      key: '1',
      label: 'CodeMirror',
      // children: (
      //   // <ReactCodeMirror value={code} extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]} />
      // ),
    },
  ];

  return <Tabs />;
}
