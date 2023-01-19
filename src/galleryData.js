import PokePartyPrev from "./galleryData/pokePartyPrev.png";
import illustrationPrev from "./galleryData/illustPrev.png";
import wiiuaaPrev from "./galleryData/wiiuaaPrev.png";
import vectorPrev from "./galleryData/vectorPrev.png";
import tractivePrev from "./galleryData/tractivePrev.png";
import pbPrev from "./galleryData/PBprev.jpg";
import pokePartyDisplay from "./galleryData/pokePartyDisplay.png";
import pokeParty2 from "./galleryData/pokeParty2.png";
import pokeParty3 from "./galleryData/pokeParty3.png";
import illust1 from "./galleryData/illust1.jpg";
import illust2 from "./galleryData/illust2.jpg";
import illust3 from "./galleryData/illust3.jpg";
import illust4 from "./galleryData/illust4.jpg";
import wiiuaaDisplay from "./galleryData/wiiuaaDisplay.png";
import vector1 from "./galleryData/vector1.png";
import vector2 from "./galleryData/vector2.png";
import vector3 from "./galleryData/vector3.png";
import vector4 from "./galleryData/vector4.jpeg";
import tractive1 from "./galleryData/tractive1Phone.png";
import tractive2 from "./galleryData/tractive2Phone.png";
import tractive3 from "./galleryData/tractive3Phone.png";
import tractive4 from "./galleryData/tractive4Phone.png";
import pb1 from "./galleryData/PB_refs1.png";
import pb2 from "./galleryData/PB_refs2.png";
import pb3 from "./galleryData/PB_refs3.png";
import pb4 from "./galleryData/PB_refs4.png";
import pbPdf from "./galleryData/PB_pdf.pdf";
export const GalleryData = [
  {
    id: 1,
    name: "PokeParty",
    preview: PokePartyPrev,
    description:
      "This project was created as a way for me to practice Javascript and React. Grabbing data from a Pokemon API, this site has the user build their own Pokemon Party through randomizing Pokemon selection.",
    display: [pokePartyDisplay, pokeParty2, pokeParty3],
    url: "https://hollyefig.github.io/pokeParty/",
    github: "https://github.com/hollyefig/pokeParty",
  },

  {
    id: 2,
    name: "Pep Boys Branding",
    preview: pbPrev,
    description: `Email and Web designs done for Pep Boys. Each piece was designed using Adobe Creative Suite, then coded together with HTML, CSS and responsive CSS media queries. Emails were also tested using Litmus Testing to ensure they displayed correctly across all platforms.`,
    display: [pb1, pb2, pb3, pb4],
    url: pbPdf,
    github: false,
  },

  {
    id: 3,
    name: "Illustration",
    preview: illustrationPrev,
    description:
      "Digital illustrations that I've done in my free time. I mostly enjoy creating art for my favorite video games or Dungeons & Dragons Campaigns. All done using the Procreate App for iPad and Apple Pencil.",
    display: [illust1, illust2, illust3, illust4],
    url: false,
    github: false,
  },

  {
    id: 4,
    name: "Tractive App",
    preview: [tractivePrev],
    description:
      "A mockup for a client. Tractive is a tracker app for parents to use on their phone which can track a child's active and inactive time. The child gets rewarded time for video game activity if they input the appropriate physical activity, and monitor when a child has overdone their time on gaming.",
    display: [tractive1, tractive2, tractive3, tractive4],
    url: false,
    github: false,
  },

  {
    id: 5,
    name: "Vector Art",
    preview: vectorPrev,
    description:
      "An ongoing series of illustrated posters featuring some of my favorite media. Pictures are initially sketched out on paper, then brought into Adobe Illustrator for color.",
    display: [vector1, vector2, vector3, vector4],
    url: false,
    github: false,
  },

  {
    id: 6,
    name: "Art Guide",
    preview: wiiuaaPrev,
    description:
      "Art Academy is a downloadable app for the Nintendo WiiU gaming console. The app is a sketchpad and coloring tool for users to create art on. However, it provides no instructions on how to use, which has lead many users to confusion on where to start. This website provides some basic step by steps on how to utilize the tools, build up layers, and properly export their artwork online.",
    display: [wiiuaaDisplay],
    url: "https://hollyfig.com/_old/artacademytutorial/index.html",
    github: false,
  },
];
