import { error } from "node:console";

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
): void {
  setTimeout(() => {
    // ur actual api call
    const user = users.find((currentUser) => currentUser.id === userId);
    if (!user) {
      callback(new Error(`user with id ${userId} was not found`));
      return;
    }

    callback(null, user);
  }, 500);
}

// findUserWithCallback(30, (error, user) => {
//   if (error) {
//     console.log("callback error", error.message);
//     return;
//   }

//   console.log("callback result", user?.id, user?.name, user?.role);
// });

function fetchUserWithPromise(userId: number): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((currentUser) => currentUser.id === userId);

      if (!user) {
        reject(new Error(`user with ${userId} data was not found`));
        return;
      }

      resolve(user);
    }, 1000);
  });
}

// fetchUserWithPromise(20)
//   .then((user) => {
//     console.log("Promise result", user?.id, user?.name, user?.role);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

function findUserWithPromise(userId: number): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {}, 1000);
  });
}

async function findUserWithAsyncAwait(userId: number): Promise<void> {
  try {
    const user = await findUserWithPromise(userId);
  } catch (error) {}
}
