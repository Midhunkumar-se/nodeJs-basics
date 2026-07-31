// build and read file paths

import path from "node:path";

// const filePath = projectRoot + "/uploads" + filename

path.join; // : uses the correct separator for the correct os
// /users/mk/project/file.txt

// c:\users\mk\project\file.txt

//process.cwd:  the folder from where the node js process was started

const projectRoot = process.cwd();

console.log(projectRoot);

// /uploads/users/43/profile.photo.png

const userID = "43";
const originalName = "profie.photo.png";

// imp -> path.join -> create a path string
// it will not create the folder
// it does not check file exist or not
const upoadFilePath = path.join(
  projectRoot,
  "uploads",
  "users",
  "userId",
  originalName,
);

console.log(upoadFilePath);

// final part of a path
const filename = path.basename(upoadFilePath);
const fileExt = path.extname(upoadFilePath);
const parentFoder = path.dirname(upoadFilePath);

console.log(filename, fileExt, parentFoder);
