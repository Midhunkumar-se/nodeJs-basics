type User = {
  id: number;
  name: string;
  role: "user" | "super-admin";
};

const users: User[] = [
  {
    id: 1,
    name: "jon",
    role: "user",
  },
  {
    id: 2,
    name: "Peter",
    role: "user",
  },
  {
    id: 3,
    name: "Steve",
    role: "user",
  },
];

// callback is a function - this function ur passing to a diff function
// callback(error, result) -> *** imp concepts -> classic node js call back pattern

function findUserWithCallback(
  userId: number,
  callback: (error: Error | null, user?: User) => void,
) {}
