// OS
// CPU info
// memory
// home/temp dir

import * as os from "node:os";

function runOsDemo() {
  console.log("Platform", os.platform());
  console.log("Architecture", os.arch());
  console.log("OS Type", os.type());
  console.log("OS Release", os.release());
  console.log("Home Dir", os.homedir());
  console.log("Temp Dir", os.tmpdir());

  const cpus = os.cpus();
  console.log(cpus.length);

  if (cpus.length > 0) {
    console.log("First CPU model", cpus[0].model, cpus[0].speed, cpus[0].times);
  }

  console.log(os.totalmem(), os.freemem());
}

runOsDemo();
