import { HeejunAsset, HeejunOverview } from "./works/Heejun";

const Fumin = require("../image/thumb/Fu-min_small.png");
const Hazuki = require("../image/thumb/Hazuki_small.png");
const Heejun = require("../image/thumb/Heejun_small.png");
const Kana = require("../image/thumb/Kana_small.png");
const Oga = require("../image/thumb/Oga_small.png");
const Oto = require("../image/thumb/Oto_small.png");
const Shinogu = require("../image/thumb/Shinogu_small.png");
const Takuro = require("../image/thumb/Takuro_small.png");
const Uena = require("../image/thumb/Uena_small.png");

const thumbs = new Map();

thumbs.set("Heejun", {
  src: Heejun,
  author: "Heejun",
  titleJP: "チタンの家具",
  titleEN: "Titanium Furniture",
  link: "/works/heejun",
  overview: HeejunOverview,
  contents: HeejunAsset,
});
thumbs.set("Oga", {
  src: Oga,
  author: "Oga",
  titleJP: "",
  titleEN: "Scalable hand",
  link: "/works/oga",
  overview: HeejunOverview,
  contents: HeejunAsset,
});
thumbs.set("Shinogu", {
  src: Shinogu,
  author: "Shinogu",
  titleJP: "流点",
  titleEN: "Ruten",
  link: "/works/shinogu",
  overview: HeejunOverview,
  contents: HeejunAsset,
});
thumbs.set("Hazuki", {
  src: Hazuki,
  author: "Hazuki",
  titleJP: "",
  titleEN:
    "Reduce Unconscious Gender Bias through Workshop with Co-Speculative Design",
  link: "/works/hazuki",
  overview: HeejunOverview,
  contents: HeejunAsset,
});
thumbs.set("Uena", {
  src: Uena,
  author: "Uena",
  titleJP: "ゆらゆら",
  titleEN: "solid swing",
  link: "/works/uena",
  overview: HeejunOverview,
  contents: HeejunAsset,
});
thumbs.set("Kana", {
  src: Kana,
  author: "Kana",
  titleJP: "OTT: OTTOTTO",
  titleEN: "Oops Robot",
  link: "/works/kana",
  overview: HeejunOverview,
  contents: HeejunAsset,
});
thumbs.set("Fumin", {
  src: Fumin,
  author: "Fumin",
  titleJP: "ヴァイオリン用顎・肩当て",
  titleEN: "Chin & Shoulder Rest",
  link: "/works/fumin",
  overview: HeejunOverview,
  contents: HeejunAsset,
});
thumbs.set("Takuro", {
  src: Takuro,
  author: "Takuro",
  titleJP: "",
  titleEN: "Rami S",
  link: "/works/takuro",
  overview: HeejunOverview,
  contents: HeejunAsset,
});
thumbs.set("Oto", {
  src: Oto,
  author: "Oto",
  titleJP: "道具の暇",
  titleEN: "Tool's Leisure Time",
  link: "/works/oto",
  overview: HeejunOverview,
  contents: HeejunAsset,
});

/*{
  Heejun: {
    src: Heejun,
    author: "Heejun",
    titleJP: "チタンの家具",
    titleEN: "Titanium Furniture",
    link: "/works/heejun",
    overview: HeejunOverview,
    contents: HeejunAsset,
  },
  Oga: {
    src: Oga,
    author: "Oga",
    titleJP: "",
    titleEN: "Scalable hand",
    link: "/works/oga",
    overview: HeejunOverview,
    contents: HeejunAsset,
  },
  Shinogu: {
    src: Shinogu,
    author: "Shinogu",
    titleJP: "流点",
    titleEN: "Ruten",
    link: "/works/shinogu",
    overview: HeejunOverview,
    contents: HeejunAsset,
  },
  Hazuki: {
    src: Hazuki,
    author: "Hazuki",
    titleJP: "",
    titleEN:
      "Reduce Unconscious Gender Bias through Workshop with Co-Speculative Design",
    link: "/works/hazuki",
    overview: HeejunOverview,
    contents: HeejunAsset,
  },
  Uena: {
    src: Uena,
    author: "Uena",
    titleJP: "ゆらゆら",
    titleEN: "solid swing",
    link: "/works/uena",
    overview: HeejunOverview,
    contents: HeejunAsset,
  },
  Kana: {
    src: Kana,
    author: "Kana",
    titleJP: "OTT: OTTOTTO",
    titleEN: "Oops Robot",
    link: "/works/kana",
    overview: HeejunOverview,
    contents: HeejunAsset,
  },
  Fumin: {
    src: Fumin,
    author: "Fumin",
    titleJP: "ヴァイオリン用顎・肩当て",
    titleEN: "Chin & Shoulder Rest",
    link: "/works/fumin",
    overview: HeejunOverview,
    contents: HeejunAsset,
  },
  Takuro: {
    src: Takuro,
    author: "Takuro",
    titleJP: "",
    titleEN: "Rami S",
    link: "/works/takuro",
    overview: HeejunOverview,
    contents: HeejunAsset,
  },
  Oto: {
    src: Oto,
    author: "Oto",
    titleJP: "道具の暇",
    titleEN: "Tool's Leisure Time",
    link: "/works/oto",
    overview: HeejunOverview,
    contents: HeejunAsset,
  },
};*/
export default thumbs;
