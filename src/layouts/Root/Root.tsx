import { Outlet } from "react-router-dom";
import { Header } from "../Header";

import styles from "./Root.module.css";
import { useAtomValue } from "jotai";
import { editorAtom } from "../../store/editorAtom";
import { useMutation } from "react-query";
import { compileCode } from "../../api/services/compiler-service";

export const Root = () => {
  const { code } = useAtomValue(editorAtom);
  const { mutate } = useMutation((code: string) => compileCode(code));

  return (
    <main className={styles.Main}>
      <Header
        onCompile={() => {
          code && mutate(code);
        }}
      />
      <section className={styles.Section}>
        <Outlet />
      </section>
    </main>
  );
};
