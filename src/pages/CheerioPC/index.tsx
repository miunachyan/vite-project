import MonacoEditor from "@/components/MonacoEditor";
import { Button, Card } from "antd";
import * as monaco from "monaco-editor";
import { useRef } from "react";

export default function CheerioPC() {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>(null);

  const start = async () => {};

  return (
    <Card
      extra={<Button onClick={() => start()}>start</Button>}
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
      bodyStyle={{ flex: 1 }}
    >
      <MonacoEditor theme="vs-dark" ref={editorRef} />
    </Card>
  );
}
