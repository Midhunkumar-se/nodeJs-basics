import fs from "node:fs";
import path from "node:path";

const DEMO_FOLDER_PATH = path.join(process.cwd(), "file-system", "fs-demo");
const SYNC_FILE_PATH = path.join(DEMO_FOLDER_PATH, "sync-note.txt");

type FileResult = {
  style: string;
  fileName: string;
  content: string;
  sizeBytes: number;
};

// fs - file system
// create folders
// write files
// check file information
// delete files

// sync apis: fs.readfilesync
// callback apis
// promise apis

// small startup scripts
// build scripts
// local demos

// not good or even bad practice
// http req handler
// high traffic apis
// background jobs

function ensureDemoFolderExist(): void {
  if (!fs.existsSync(DEMO_FOLDER_PATH)) {
    fs.mkdirSync(DEMO_FOLDER_PATH, { recursive: true });
  }
}

function runSyncexample(): FileResult {
  fs.writeFileSync(SYNC_FILE_PATH, "created using sync fs", "utf-8"); // this create the non existing files

  fs.appendFileSync(SYNC_FILE_PATH, "Appended using sync fs", "utf-8");

  const content = fs.readFileSync(SYNC_FILE_PATH, "utf-8");

  const stats = fs.statSync(SYNC_FILE_PATH);

  return {
    style: "sync",
    content,
    fileName: path.basename(SYNC_FILE_PATH),
    sizeBytes: stats.size,
  };
}

async function main(): Promise<void> {
  try {
    //   ensureDemoFolderExist
  } catch (error) {
    const message = error instanceof Error ? error.message : "unkonwn Error";
    console.error("file system error", message);
  }
}

main();
