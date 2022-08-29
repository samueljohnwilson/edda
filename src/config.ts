require('dotenv').config();
// @ts-expect-error
import * as path from 'path'

// @ts-expect-error
console.log(path.resolve(process.cwd(), '.env'));
console.log(process.env);

export const config = {
  images: {
    dwarf: process.env.VUE_APP_IMAGE_URL_DWARF,
  },
};
