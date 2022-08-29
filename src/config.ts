require('dotenv').config();

export const config = {
  images: {
    dwarf: process.env.VUE_APP_IMAGE_URL_DWARF,
    elf: process.env.VUE_APP_IMAGE_URL_ELF,
    firbolg: process.env.VUE_APP_IMAGE_URL_FIRBOLG,
    halfElf: process.env.VUE_APP_IMAGE_URL_HALF_ELF,
    halfling: process.env.VUE_APP_IMAGE_URL_HALFLING,
    halfOrc: process.env.VUE_APP_IMAGE_URL_HALF_ORC,
    human: process.env.VUE_APP_IMAGE_URL_HUMAN,
  },
};
