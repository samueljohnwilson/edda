require('dotenv').config();

export const config = {
  images: {
    lands: {
      bjordlund: String(process.env.VUE_APP_IMAGE_URL_BJORDLUND),
      garrad: String(process.env.VUE_APP_IMAGE_URL_GARRAD),
      ithra: String(process.env.VUE_APP_IMAGE_URL_ITHRA),
      neywyll: String(process.env.VUE_APP_IMAGE_URL_NEYWYLL),
      ulwyll: String(process.env.VUE_APP_IMAGE_URL_ULWYLL),
      unterlund: String(process.env.VUE_APP_IMAGE_URL_UNTERLUND),
    },
    races: {
      dwarf: String(process.env.VUE_APP_IMAGE_URL_DWARF),
      elf: String(process.env.VUE_APP_IMAGE_URL_ELF),
      firbolg: String(process.env.VUE_APP_IMAGE_URL_FIRBOLG),
      halfElf: String(process.env.VUE_APP_IMAGE_URL_HALF_ELF),
      halfling: String(process.env.VUE_APP_IMAGE_URL_HALFLING),
      halfOrc: String(process.env.VUE_APP_IMAGE_URL_HALF_ORC),
      human: String(process.env.VUE_APP_IMAGE_URL_HUMAN),
    },
  },
};
