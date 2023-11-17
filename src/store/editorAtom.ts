import { atom } from "jotai";

interface IEditorState {
  code?: string;
}

const initialValue: IEditorState = {
  code: "",
};

export const editorAtom = atom<IEditorState>(initialValue);
