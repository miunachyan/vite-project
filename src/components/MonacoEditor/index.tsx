import Editor, { EditorProps } from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import { MutableRefObject, forwardRef } from "react";

export default forwardRef((props: EditorProps, ref: MutableRefObject<monaco.editor.IStandaloneCodeEditor> | null) => {
  const { options, ...otherProps } = props;

  const handleEditorDidMount = (editor) => {
    if (ref) {
      ref.current = editor;
    }
  };

  return (
    <Editor
      onMount={handleEditorDidMount}
      language="json"
      options={{ minimap: { enabled: false }, contextmenu: false, scrollBeyondLastLine: false, ...options }}
      {...otherProps}
    />
  );
});
