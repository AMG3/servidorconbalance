import { fileURLToPath } from "url";
import { dirname } from "path";
import bcrypt from "bcrypt";
import yargs from "yargs";

export const createHash = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(10));

export const isValidPassword = (encryptedPassword, password) =>
  bcrypt.compareSync(password, encryptedPassword);

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

const options = {
  default: {
    port: 8080,
    mode: "FORK",
  },
  alias: {
    p: "port",
    m: "mode",
  },
};

export const yargObj = yargs(process.argv.slice(2))
  .default(options.default)
  .alias(options.alias).argv;

// export = { yargObj };
