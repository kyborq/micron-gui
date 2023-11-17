import api from "../api";

export const compileCode = async (code: string) => {
  try {
    const result = await api.post("/compile", {
      code,
    });
    return result;
  } catch (e) {
    console.log("Error");
    throw "Error";
  }
};
