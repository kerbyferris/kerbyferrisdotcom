enum Categories {
  None = "",
  Music = "music",
  Building = "building",
  Electronics = "electronics",
  Code = "code",
}

enum Projects {
  None = "",
  Bathhouse = "bathhouse",
  BabyPigFeederV1 = "babypigfeederv1",
  BabyPigFeederV2 = "babypigfeederv2",
  ThreeDPrinting = "ThreeDPrinting",
  BoxTruck = "BoxTruck",
}

export type MediaType = {
  src: string;
  homePage: boolean;
  categories: Categories[];
  projects?: Projects[];
  poster?: string;
  playsInline?: true;
  loop?: boolean;
  externalLink?: string;
};

const Media: MediaType[] = [
  {
    src: "https://www.dropbox.com/scl/fi/ubycyk8l5nidkalq5vxrf/meetingTheUniverseHalfway.mp4?rlkey=oktyok6qss2f4nyggqpvy9hgm&dl=0&raw=1",
    poster: "/img/meetinguniverse.png",
    categories: [Categories.Music],
    homePage: true,
  },
  {
    src: "/img/boxtruckkitcheninbarnfacingcamera.png",
    homePage: true,
    categories: [Categories.Building],
  },
  {
    src: "https://www.dropbox.com/scl/fi/gyd6xmr92iaappxpd3bdx/3dprint_croped.gif?rlkey=uyscir1nuqdbocujxinoob9gq&dl=0&raw=1",
    homePage: true,
    categories: [Categories.Building],
  },
  {
    src: "/img/boxtruckdoorinstallday.png",
    homePage: true,
    categories: [Categories.Building],
    projects: [Projects.BoxTruck],
  },
  {
    src: "/img/bathhousecomplete.png",
    homePage: true,
    categories: [Categories.Building],
    projects: [Projects.Bathhouse],
  },
  {
    src: "/img/babypigfeedermk2deconstructed.png",
    homePage: true,
    categories: [Categories.Electronics],
  },
  {
    src: "https://www.dropbox.com/scl/fi/6mx9mvgqkmmvrnevmlxou/modularOnTheSpotLA.mp4?rlkey=1jpwbki08jp8nc43r7depsey1&dl=0&raw=1",
    poster: "/img/playinglivemodularonthespot.png",
    homePage: true,
    categories: [Categories.Music],
  },
  {
    src: "/img/boxtruckfinished.png",
    homePage: true,
    categories: [Categories.Building],
  },
  {
    src: "/img/chickenwater.png",
    homePage: true,
    categories: [Categories.Electronics],
  },
  {
    src: "https://www.dropbox.com/scl/fi/zons5n7dm0swwqubstxp6/anotherScienceIsPossible.mp4?rlkey=5fe22o4ls6e82x4x4cjo329fh&dl=0&raw=1",
    poster: "/img/anotherscience.png",
    homePage: true,
    categories: [Categories.Music],
  },
  {
    src: "/img/boxtrucksolarpanels.png",
    homePage: true,
    categories: [Categories.Building],
  },
  {
    src: "/img/playinglivelovers.png",
    homePage: true,
    categories: [Categories.Music],
  },
  {
    src: "/img/boxtruckcabside.png",
    homePage: true,
    categories: [Categories.Building],
  },
  {
    src: "/img/bathhouseroof.png",
    homePage: true,
    categories: [Categories.Building],
    projects: [Projects.Bathhouse],
  },
  {
    src: "/img/amcwithjar.png",
    homePage: true,
    categories: [Categories.Electronics],
    externalLink: "https://github.com/kerbyferris/citizen-musician",
  },
  {
    src: "/img/codelibretto.png",
    homePage: true,
    categories: [Categories.Code],
  },
  {
    src: "/img/babypigfeederv1.png",
    homePage: true,
    categories: [Categories.Electronics],
    projects: [Projects.BabyPigFeederV1],
  },
  {
    src: "/img/tinyhousefixingwindowoutside03.png",
    homePage: true,
    categories: [Categories.Building],
  },
  {
    src: "https://www.dropbox.com/scl/fi/tq0boh9dakh99sqwvhov7/betweenPastAndFuture.mp4?rlkey=29vqaiu47e05pnc444z3r5u6r&dl=0&raw=1",
    poster: "/img/betweenpastandfuture.png",
    homePage: true,
    categories: [Categories.Music],
  },
  {
    src: "/img/tinyhousev1.5witplants.png",
    homePage: true,
    categories: [Categories.Building],
  },
  {
    src: "/img/babypigfeederpower.png",
    homePage: true,
    categories: [Categories.Electronics],
    projects: [Projects.BabyPigFeederV1],
  },
  {
    src: "/img/boxtruck8020frame.png",
    homePage: true,
    categories: [Categories.Building],
  },
  {
    src: "/img/woodpilezdistance.png",
    homePage: true,
    categories: [Categories.Building],
  },
  {
    src: "/img/boxtrucksolarcomplete.png",
    homePage: true,
    categories: [Categories.Building, Categories.Electronics],
  },
  {
    src: "/img/playinglivemicrokorg.png",
    homePage: true,
    categories: [Categories.Music],
  },
  {
    src: "/img/outdoortable.png",
    homePage: true,
    categories: [Categories.Building],
  },
  {
    src: "/img/diyeurorackpowerbefacobreadboard.png",
    homePage: true,
    categories: [Categories.Electronics],
  },
  {
    src: "/img/boxtruckv1lookingoutattiny.png",
    homePage: true,
    categories: [Categories.Building],
  },
  {
    src: "/img/soundpedro.png",
    homePage: true,
    categories: [Categories.Music],
    externalLink: "https://www.youtube.com/watch?v=HekKN9nn4Q0&t=767s",
  },
  {
    src: "/img/stoveandplant.png",
    homePage: true,
    categories: [Categories.Building],
  },
  {
    src: "/img/playinglivesandwichplace.png",
    homePage: true,
    categories: [Categories.Music],
  },
  {
    src: "/img/shedinprogress02.png",
    homePage: true,
    categories: [Categories.Building],
  },
  {
    src: "/img/boxtrucksolarshutoffs.png",
    homePage: true,
    categories: [Categories.Building],
  },
  {
    src: "/img/woodshedinprogress.png",
    homePage: true,
    categories: [Categories.Building],
  },
  {
    src: "/img/solarmodularcasenobackground.png",
    homePage: true,
    categories: [Categories.Music, Categories.Electronics],
  },
  {
    src: "/img/tinyhouseairbnbkitchen.png",
    homePage: true,
    categories: [Categories.Building],
  },
  {
    src: "/img/tinyhouseairbnblookingatfrontdoor.png",
    homePage: false,
    categories: [Categories.Building],
  },
  // {
  //   src: "/img/tinyhousefizzwatchingfire.png",
  //   homePage: false,
  //   categories: [Categories.Building],
  // },
  {
    src: "/img/tinyhousefromdistance.png",
    homePage: false,
    categories: [Categories.Building],
  },
  // AMC
  {
    src: "/img/amcwithmpc.png",
    homePage: false,
    categories: [Categories.Electronics],
    externalLink: "https://github.com/kerbyferris/citizen-musician",
  },
  {
    src: "/img/3dprinterstill.png",
    homePage: false,
    categories: [Categories.Building, Categories.Electronics],
  },
  // {
  //   src: "/img/bathhouseinthewoods.png",
  //   homePage: false,
  //   categories: [Categories.Building],
  //   projects: [Projects.Bathhouse],
  // },
  {
    src: "/img/bathhouselibrary.png",
    homePage: false,
    categories: [Categories.Building],
    projects: [Projects.Bathhouse],
  },
  {
    src: "/img/bathhousenoroofyet.png",
    homePage: false,
    categories: [Categories.Building],
    projects: [Projects.Bathhouse],
  },
  //3D Printing
  {
    src: "/img/3dprintingkrankencart.png",
    homePage: false,
    categories: [Categories.Building],
    projects: [Projects.ThreeDPrinting],
  },
  // Box Truck
  // Baby Pig Feeder MKI
  {
    src: "/img/babypigfeedermk2lidoff.png",
    homePage: false,
    categories: [Categories.Electronics],
    projects: [Projects.BabyPigFeederV1],
  },
  {
    src: "/img/babypigfeederplasticfront.png",
    homePage: false,
    categories: [Categories.Electronics],
    projects: [Projects.BabyPigFeederV1],
  },
  {
    src: "/img/bathhouselookingin.png",
    homePage: false,
    projects: [Projects.Bathhouse],
    categories: [Categories.Building],
  },
  // Baby Pig Feeder MKII
  {
    src: "/img/babypigfeedermk2deconstructed02.png",
    homePage: false,
    categories: [Categories.Electronics],
    projects: [Projects.BabyPigFeederV2],
  },
  {
    src: "/img/babypigfeedermk2panel.png",
    homePage: false,
    categories: [Categories.Electronics],
    projects: [Projects.BabyPigFeederV2],
  },
  {
    src: "/img/babypigfeedermk2panelwith3dprinted.png",
    homePage: false,
    categories: [Categories.Electronics],
    projects: [Projects.BabyPigFeederV2],
  },
  {
    src: "/img/babypigfeederv2.png",
    homePage: false,
    categories: [Categories.Electronics],
    projects: [Projects.BabyPigFeederV2],
  },
  {
    src: "/img/bluetoothRXbreadboard.png",
    homePage: false,
    categories: [Categories.Electronics],
  },
  {
    src: "/img/boxtruckACpanel.png",
    homePage: false,
    categories: [Categories.Building],
  },
  {
    src: "/img/boxtruckbathroomv1.png",
    homePage: false,
    categories: [Categories.Building],
  },
  {
    src: "/img/boxtruckbatteries.png",
    homePage: false,
    categories: [Categories.Building],
  },
  {
    src: "/img/boxtruckcampingday.png",
    homePage: false,
    categories: [Categories.Building],
  },
  // {
  //   src: "/img/boxtruckceiling.png",
  //   homePage: false,
  //   categories: [Categories.Building],
  // },
  {
    src: "/img/boxtruckcodingatthegorge.png",
    homePage: false,
    categories: [Categories.Building],
  },
  {
    src: "/img/boxtruckcounterinprogress.png",
    homePage: false,
    categories: [Categories.Building],
  },
  // {
  //   src: "/img/boxtruckdoorinstallationatnight.png",
  //   homePage: false,
  //   categories: [Categories.Building],
  // },
  {
    src: "/img/boxtruckdrawers.png",
    homePage: false,
    categories: [Categories.Building],
  },
  // {
  //   src: "/img/boxtruckfromoutsideinprogress.png",
  //   homePage: false,
  //   categories: [Categories.Building],
  // },
  {
    src: "/img/boxtruckgorgedistance.png",
    homePage: false,
    categories: [Categories.Building],
  },
  {
    src: "/img/boxtruckinsulation.png",
    homePage: false,
    categories: [Categories.Building],
  },
  {
    src: "/img/boxtruckinteriorinprogress.png",
    homePage: false,
    categories: [Categories.Building],
  },
  {
    src: "/img/boxtruckkitchenframeintruck.png",
    homePage: false,
    categories: [Categories.Building],
  },
  {
    src: "/img/boxtruckoriginalstateinside.png",
    homePage: false,
    categories: [Categories.Building],
  },
  {
    src: "/img/boxtruckpancakesday.png",
    homePage: false,
    categories: [Categories.Building],
  },
  // {
  //   src: "/img/boxtruckpicturewindow.png",
  //   homePage: false,
  //   categories: [Categories.Building],
  //   projects: [Projects.Bathhouse],
  // },
  {
    src: "/img/boxtrucksolarmaterials.png",
    homePage: false,
    categories: [Categories.Building],
  },
  {
    src: "/img/boxtrucksolarshutdoff.png",
    homePage: false,
    categories: [Categories.Building],
  },
  {
    src: "/img/boxtrucktyvek01.png",
    homePage: false,
    categories: [Categories.Building],
    projects: [Projects.Bathhouse],
  },
  {
    src: "/img/boxtruckv1inside.png",
    homePage: false,
    categories: [Categories.Building],
  },
  {
    src: "/img/boxtruckv1outside.png",
    homePage: false,
    categories: [Categories.Building],
  },
  {
    src: "/img/diyeurorackpowerbreadboard.png",
    homePage: false,
    categories: [Categories.Electronics],
  },
  {
    src: "/img/diyeurorackpowerDCbreadboard.png",
    homePage: false,
    categories: [Categories.Electronics],
  },
  {
    src: "/img/diyeurorackpoweropen.png",
    homePage: false,
    categories: [Categories.Electronics],
  },
  {
    src: "/img/finishedshed.png",
    homePage: false,
    categories: [Categories.Building],
  },
  {
    src: "/img/playinglivefantasminablackandwhite.png",
    homePage: false,
    categories: [Categories.Music],
  },
  // {
  //   src: "/img/playinglivefantasminavocals.png",
  //   homePage: false,
  //   categories: [Categories.Music],
  // },
  // {
  //   src: "/img/playinglivemodularonthespot-1.png",
  //   homePage: false,
  //   categories: [Categories.Music],
  // },
  // {
  //   src: "/img/playinglivemodularonthespot.png",
  //   homePage: false,
  //   categories: [Categories.Music],
  // },
  {
    src: "/img/sheddistance.png",
    homePage: false,
    categories: [Categories.Building],
  },
  {
    src: "/img/shedinprogress03.png",
    homePage: false,
    categories: [Categories.Building],
  },
  {
    src: "/img/solarmodularcasezoomedin.png",
    homePage: false,
    categories: [Categories.Music, Categories.Electronics],
  },
  // {
  //   src: "/img/solarmodularcat.png",
  //   homePage: false,
  //   categories: [Categories.Music, Categories.Electronics],
  // },
  {
    src: "/img/tinyhouseairbnbkitchenonly.png",
    homePage: false,
    categories: [Categories.Building],
  },
  {
    src: "/img/tinyhouseandbathhouse.png",
    homePage: false,
    categories: [Categories.Building],
    projects: [Projects.Bathhouse],
  },
  // {
  //   src: "/img/tinyhouseempty.png",
  //   homePage: false,
  //   categories: [Categories.Building],
  // },
  {
    src: "/img/tinyhousefixingwindowindoors.png",
    homePage: false,
    categories: [Categories.Building],
  },
  {
    src: "/img/tinyhousefixingwindow.png",
    homePage: false,
    categories: [Categories.Building],
  },
  {
    src: "/img/tinyhouseguyintree.png",
    homePage: false,
    categories: [Categories.Building],
  },
  // {
  //   src: "/img/tinyhouseinsidev1.png",
  //   homePage: false,
  //   categories: [Categories.Building],
  // },
  {
    src: "/img/tinyhouseinthesnow.png",
    homePage: false,
    categories: [Categories.Building],
  },
  // {
  //   src: "/img/tinyhouserainbow.png",
  //   homePage: false,
  //   categories: [Categories.Building],
  // },
  // {
  //   src: "/img/tinyhousesidinginprogress.png",
  //   homePage: false,
  //   categories: [Categories.Building],
  // },
  {
    src: "/img/tinyhousesunset.png",
    homePage: false,
    categories: [Categories.Building],
  },
  // {
  //   src: "/img/tinyhousev1sided.png",
  //   homePage: false,
  //   categories: [Categories.Building],
  // },
  // {
  //   src: "/img/tinyhousev1workingonsink.png",
  //   homePage: false,
  //   categories: [Categories.Building],
  // },
  // {
  //   src: "/img/tinyhousewindowfinishedcelebration.png",
  //   homePage: false,
  //   categories: [Categories.Building],
  // },
  {
    src: "/img/woodpile.png",
    homePage: false,
    categories: [Categories.Building],
  },
  {
    src: "/img/woodpilesideprofile.png",
    homePage: false,
    categories: [Categories.Building],
  },
  {
    src: "/img/osccover.png",
    homePage: false,
    categories: [Categories.Building],
  },
  {
    src: "/img/babypigfeedermk2panel2.png",
    homePage: false,
    categories: [Categories.Electronics],
  },
  {
    src: "https://www.dropbox.com/scl/fi/nx7sukngiajj8tonrngmv/youJoy.mp4?rlkey=h1ru0yeoigtvw83ho0h1hh68g&dl=0&raw=1#t=00:02:32",
    poster: "/img/youjoywithcode.png",
    loop: false,
    homePage: false,
    categories: [Categories.Music, Categories.Electronics, Categories.Code],
  },
  {
    src: "/img/chakrates.png",
    homePage: false,
    categories: [Categories.Code],
    externalLink: "https://kerbyferris.github.io/chakrates/",
  },
  {
    src: "/img/bodycall.png",
    homePage: false,
    categories: [Categories.Code],
    externalLink: "https://github.com/kerbyferris/body-call",
  },
  {
    src: "/img/amcwithcode.png",
    homePage: false,
    categories: [Categories.Code, Categories.Electronics],
    externalLink: "https://github.com/kerbyferris/citizen-musician",
  },
];

export { Media, Categories, Projects };
