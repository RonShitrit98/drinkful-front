import { httpService } from "./http-service";

export const userService = {
  signup,
  login,
  loadUser,
  findUserById,
  logout,
  getEmptyUser,
};

async function signup(user) {
  return httpService.post("auth/signup", user);
}

async function login(creds) {
  return httpService.post("auth/login", creds, true);
}

async function findUserById(id) {
  // const users = await storageService.query(USER_KEY);
  // const user = users.find((user) => user._id === id);
  // return user;
}

async function loadUser() {
  return httpService.get("auth");
}

async function logout() {
  console.log("logging out");
  return httpService.post("auth/logout");
}

function getEmptyUser() {
  return {
    email: "",
    username: "",
    name: "",
    password: "",
    imgUrl: "",
    packs: [],
    isActivated: false,
    type: "regular",
  };
}
