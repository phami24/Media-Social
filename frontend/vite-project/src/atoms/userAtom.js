import { atom } from "recoil";

const userAtom = atom({
  key: "userAtom",
  default: JSON.stringify(localStorage.getItem("user")),
});

export default userAtom;
