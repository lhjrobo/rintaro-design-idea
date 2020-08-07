const heejun0101 = require("../../image/works/Heejun/09-01-01.png");
const heejun0102 = require("../../image/works/Heejun/09-01-02.png");
const heejun0301 = require("../../image/works/Heejun/09-03-01.png");
const heejun0401 = require("../../image/works/Heejun/09-04-01.png");
const heejun0402 = require("../../image/works/Heejun/09-04-02.png");
const heejun0501 = require("../../image/works/Heejun/09-05-01.png");
const heejun0502 = require("../../image/works/Heejun/09-05-02.png");
const heejun0601 = require("../../image/works/Heejun/09-06-01.png");
const heejun0701 = require("../../image/works/Heejun/09-07-01.png");
const heejun0702 = require("../../image/works/Heejun/09-07-02.png");
const heejun0703 = require("../../image/works/Heejun/09-07-03.png");
const overViewCaptionJP = `チタンは、軽くて、強くて、錆びない、とても優れた金属です。意外かもしれませんが資源も豊富で、工場の配管など、産業分野では広く利用されています。日用品であまり目にしないのは、精練・加工が難しく、コストが掛かってしまうから。もしチタンをアルミのように安く使えるようになれば、世界中の日用品の多くはチタン製になるかもしれません。この作品では、配管用のチタンパイプの端材を材料に、グラフェンの転移機構を参考にしたアルゴリズムと3Dプリンタによるジョイント設計によって、美しく、作りやすいチタン製品を実現しました。`;
const overViewCaptionEN = `This is the project to design aesthetic furniture using titanium. Titanium is a strong, lightweight and non-corrosive material, and it is often considered to be expensive. However, unlike rare earth, titanium ore is not rare on our planet. What makes this material very expensive is actually its cost of processing. Our approach is to design with cheap titanium pipe, which is the leftover =require( the manufacturing process of titanium heat exchanger. By using the algorithmic design method and 3D printed joints, we achieved low-cost, yet sophisticated design.`;
const overViewCreditJP = `制作：イ ヒジュン\n
ディレクション：山中俊治\n
協力：東京大学 生産技術研究所 岡部研究室`;
const overViewCreditEN = `Designer: Heejun Lee\n
Director: Shunji Yamanaka\n
Collaborator: Okabe Lab,\n
Institute of Industrial Science,\n
the University of Tokyo`;

const workCaptionTitle1JP = `チタンパイプ`;
const workCaptionTitle1EN = `Titanium pipe`;
const workCaptionMessage1JP = `大型熱交換器などに使用される純チタンパイプです。軽く丈夫な素材ですが、生産費用が高いことが欠点です。本作品では、産業現場で捨てられるチタンパイプの端材を用いて、美しい家具を制作します。`;
const workCaptionMessage1EN = `Titanium pipe, manufactured for high-temperature fluid transportation. Though it is lightweight and durable, its manufacturing cost is expensive. In this project, we reduced our project's building cost, by gathering cheap scrap titanium pipes =require( factories, rather than purchasing a new one.`;

const workCaptionTitle2JP = `発想: 不規則な形`;
const workCaptionTitle2EN = `Idea: Amorphous form`;
const workCaptionMessage2JP = `不規則な形状は有機的な美しさを持つことがあります。グラフェンの転位機構に注目しアルゴリズムとして実装することで、不規則形状の自動生成を行いました。`;
const workCaptionMessage2EN = `Sometimes, irregular geometry would possess the beauty of organic form. With the benefit of advanced computer technology, designing these forms became easier than before. In this project, we have generated such form automatically, by mimicking the Stone-Wales defect mechanism of graphene.`;

const workCaptionTitle3JP = ``;
const workCaptionTitle3EN = `Stone-Wales defect`;
const workCaptionMessage3JP = `Stone-Wales欠陥はπ結合をもつ炭素原子の格子で、結合の順番が入れ替わり生成されます。このメカニズムを模倣すると、不規則な泡状の模様を等しい長さの線分で構成することができます。`;
const workCaptionMessage3EN = `Stone-Wales defect occurs in the lattice of carbon atoms with the π-bond network, by interchanging its bonding topology. By mimicking this mechanism, we were able to achieve an amorphous bubble-like form, with sole equilateral lines.`;

const workCaptionTitle4JP = `ジョイントの制作`;
const workCaptionTitle4EN = `Manufacturing joints`;
const workCaptionMessage4JP = `アルゴリズムにより生成されたパターンを、Grasshopper™というデザイン支援ツールに流し込み、ジョイントの形状データを自動生成しました。このジョイントを3Dプリンタを用いることで造形します。`;
const workCaptionMessage4EN = `By using Grasshopper™, the computer-aided design application, we were able to generate 3D geometry of joints automatically, based on the generated pattern. Next, we have additively manufactured them with the 3D printer.`;

const workCaptionTitle5JP = `等辺図形の利点`;
const workCaptionTitle5EN = `Benefits of equilateral form`;
const workCaptionMessage5JP = `本作品の天板は、すべて同じ長さのチタンパイプで構成されています。チタンパイプの長さを一様に変更すれば、全く同じジョイントを用いて、異なる大きさの天板を組み立てることができます。`;
const workCaptionMessage5EN = `The top board of the table is made up of equilateral pipes. By doing so, we can easily scale its size with another equilateral pipe and the exact same set of joints.`;

const workCaptionTitle6JP = `張力構造`;
const workCaptionTitle6EN = `Tensegrity structure`;
const workCaptionMessage6JP = `一般的に長いものは引っ張る力に対して強い性質があり、構造を工夫すると、細いワイヤーでも頑丈にすることができます。このように浮遊するように見える構造が成り立っているのも、張力構造の強さによるものです。`;
const workCaptionMessage6EN = `In general, a long and thin object is strongest against the tensile force along its length, rather than bending or compressing forces. By designing the structure to distribute its load as tensile stress, we can build a rigid structure even with thin wires. The "floating" structure of this prototype is also due to the benefit of it.`;

const workCaptionTitle7JP = `チタンのテーブル`;
const workCaptionTitle7EN = `Titanium table`;
const workCaptionMessage7JP = `これらのアイデアを組み合わせて、テーブルを制作しました。不規則なパターンで構成されている天板と、浮遊するような張力構造のフォルムにご注目ください。`;
const workCaptionMessage7EN = `By integrating these ideas, this table was built. Please enjoy the organic construction of the upper board and floating-like outfit of the tensegrity structure.`;
const HeejunOverview = {
  overViewCaptionJP: overViewCaptionJP,
  overViewCaptionEN: overViewCaptionEN,
  overViewCreditJP: overViewCreditJP,
  overViewCreditEN: overViewCreditEN,
};
const HeejunAsset = [
  {
    img: [heejun0101, heejun0102],
    titleJP: workCaptionTitle1JP,
    titleEN: workCaptionTitle1EN,
    MessageJP: workCaptionMessage1JP,
    MessageEN: workCaptionMessage1EN,
  },
  {
    img: [],
    titleJP: workCaptionTitle2JP,
    titleEN: workCaptionTitle2EN,
    MessageJP: workCaptionMessage2JP,
    MessageEN: workCaptionMessage2EN,
  },
  {
    img: [heejun0301],
    titleJP: workCaptionTitle3JP,
    titleEN: workCaptionTitle3EN,
    MessageJP: workCaptionMessage3JP,
    MessageEN: workCaptionMessage3EN,
  },
  {
    img: [heejun0401, heejun0402],
    titleJP: workCaptionTitle4JP,
    titleEN: workCaptionTitle4EN,
    MessageJP: workCaptionMessage4JP,
    MessageEN: workCaptionMessage4EN,
  },
  {
    img: [heejun0501, heejun0502],
    titleJP: workCaptionTitle5JP,
    titleEN: workCaptionTitle5EN,
    MessageJP: workCaptionMessage5JP,
    MessageEN: workCaptionMessage5EN,
  },
  {
    img: [heejun0601],
    titleJP: workCaptionTitle6JP,
    titleEN: workCaptionTitle6EN,
    MessageJP: workCaptionMessage6JP,
    MessageEN: workCaptionMessage6EN,
  },
  {
    img: [heejun0701, heejun0702, heejun0703],
    titleJP: workCaptionTitle7JP,
    titleEN: workCaptionTitle7EN,
    MessageJP: workCaptionMessage7JP,
    MessageEN: workCaptionMessage7EN,
  },
];

export { HeejunAsset, HeejunOverview };
