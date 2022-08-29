require('dotenv').config();

export const config = {
  images: {
    dwarf: process.env.VUE_APP_IMAGE_URL_DWARF,
  },
};
