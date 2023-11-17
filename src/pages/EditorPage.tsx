import { Editor } from "@monaco-editor/react";
import { Content } from "../layouts/Content";
import { Side } from "../layouts/Side";
import { Bubble } from "../components/Bubble";
import { useAtom } from "jotai";
import { editorAtom } from "../store/editorAtom";

export const EditorPage = () => {
  const [editor, setEditor] = useAtom(editorAtom);

  return (
    <>
      <Content title="Программа">
        <Editor
          defaultLanguage="javascript"
          value={editor.code}
          onChange={(code) => {
            setEditor({ code });
          }}
          options={{
            folding: false,
            lineDecorationsWidth: 16,
            lineNumbersMinChars: 0,
            wordBasedSuggestions: false,
            quickSuggestions: false,
            suggestOnTriggerCharacters: false,
            minimap: {
              enabled: false,
            },
            tabCompletion: "off",
            scrollbar: {
              useShadows: false,
              verticalScrollbarSize: 8,
            },
            wordWrap: "on",
          }}
        />
      </Content>
      <Side title="Компилятор">
        <Bubble />
      </Side>
    </>
  );
};
