const defaultZoom = 14,
  offsetVal = '90%',
  flyTime = 2;

const redIcon = L.icon.pulse({
  iconSize: [10, 10],
  color: 'rgba(244, 67, 54, 1)',
});

const greyIcon = L.icon({
  iconUrl: '../img/grey-dot.svg',
  iconSize: [15, 15],
});

const blueIcon = L.icon.pulse({
  iconSize: [10, 10],
  color: 'rgba(33,150,243,1)',
  animate: true,
});

const assaultIcon = L.icon({
  iconUrl: '../img/exposion-2.png',
  iconSize: [20, 20],
});

const harunHouse = [3.168667, 101.710305],
  redHarunHouseMarker = L.marker(harunHouse, {
    icon: redIcon,
  }).bindTooltip("<b>6:20 PM May 13</b><br>Harun Idris' House", {
    permanent: true,
  }).openTooltip(),
  greyHarunHouseMarker = L.marker(harunHouse, {
    icon: greyIcon,
  }).bindTooltip("<b>6:20 PM May 13</b><br>Harun Idris' House", {
    permanent: true,
  }).openTooltip();

const alhambra = [3.188071, 101.7049],
  redAlhambraMarker = L.marker(alhambra, {
    icon: redIcon,
  }).bindTooltip('<b>6:00 PM May 13</b><br>Alhambra Theatre', {
    permanent: true,
    direction: 'bottom'
  }).openTooltip();

const greyAlhambraMarker = L.marker(alhambra, {
  icon: greyIcon,
}).bindTooltip('<b>6:00 PM May 13</b><br>Alhambra Theatre', {
  permanent: true,
}).openTooltip();

const jlnRajaAbdullah = [3.161497, 101.702558], // Jalan Raja Abdullah / Jalan Hale
  redJlnRajaAbdullahMarker = L.marker(jlnRajaAbdullah, {
    icon: redIcon,
  }),
  greyJlnRajaAbdullahMarker = L.marker(jlnRajaAbdullah, {
    icon: greyIcon,
  });

const jlnTAR = [3.1638267290006854, 101.6981703042984], // Jalan Tuanku Abdul Rahman / Batu Road
  redJlnTARMarker = L.marker(jlnTAR, {
    icon: redIcon,
  }).bindTooltip('<b>7:15 PM May 13</b><br>Jalan Tuanku Abdul Rahman', {
    permanent: true,
  }).openTooltip(),
  greyJlnTARMarker = L.marker(jlnTAR, {
    icon: greyIcon,
  }).bindTooltip('<b>7:15 PM May 13</b><br>Jalan Tuanku Abdul Rahman', {
    permanent: true,
  }).openTooltip(),
  blueJlnTARMarker = L.marker(jlnTAR, {
    icon: blueIcon,
  });

const jlnRajaLaut = [3.166995, 101.696349],
  redJlnRajaLautMarker = L.marker(jlnRajaLaut, {
    icon: redIcon,
  }).bindTooltip('<b>7:00 PM May 13</b><br>Jalan Raja Laut', {
    permanent: true,
  }).openTooltip(),
  greyJlnRajaLautMarker = L.marker(jlnRajaLaut, {
    icon: greyIcon,
  }).bindTooltip('<b>7:00 PM May 13</b><br>Jalan Raja Laut', {
    permanent: true,
  }).openTooltip(),
  blueJlnRajaLautMarker = L.marker(jlnRajaLaut, {
    icon: blueIcon,
  });

const jlnChowKit = [3.166339, 101.697531],
  redJlnChowKitMarker = L.marker(jlnChowKit, {
    icon: redIcon,
  }),
  greyJlnChowKitMarker = L.marker(jlnChowKit, {
    icon: greyIcon,
  }),
  blueJlnChowKitMarker = L.marker(jlnChowKit, {
    icon: blueIcon,
  });

const jlnRajaAlang = [3.163787, 101.702083], //Jalan Perkins
  redJlnRajaAlangMarker = L.marker(jlnRajaAlang, {
    icon: redIcon,
  }).bindTooltip('<b>12:15 AM May 14</b><br>Jalan Raja Alang', {
    permanent: true,
    direction: 'bottom'
  }).openTooltip(),
  greyJlnRajaAlangMarker = L.marker(jlnRajaAlang, {
    icon: greyIcon,
  }).bindTooltip('<b>12:15 AM May 14</b><br>Jalan Raja Alang', {
    permanent: true,
    direction: 'bottom'
  }).openTooltip();

const chowKitRoundabout = [3.167409, 101.698469],
  redChowKitRoundaboutMarker = L.marker(chowKitRoundabout, {
    icon: redIcon,
  }).bindTooltip('<b>7:00 PM May 13</b><br>Chow Kit Roundabout', {
    permanent: true,
    direction: 'top',
  }).openTooltip(),
  greyChowKitRoundaboutMarker = L.marker(chowKitRoundabout, {
    icon: greyIcon,
  }).bindTooltip('Chow Kit Roundabout', {
    permanent: true,
    direction: 'top',
  }).openTooltip();

const jlnSultanAzlanShah = [3.16886, 101.696547], // Jalan Ipoh
  redJlnSultanAzlanShahMarker = L.marker(jlnSultanAzlanShah, {
    icon: redIcon,
  }),
  greyJlnSultanAzlanShahMarker = L.marker(jlnSultanAzlanShah, {
    icon: greyIcon,
  });
blueJlnSultanAzlanShahMarker = L.marker(jlnSultanAzlanShah, {
  icon: blueIcon,
});

const jlnRajaMudaAbdulAziz = [3.168, 101.710008],
  redJlnRajaMudaAbdulAzizMarker = L.marker(jlnRajaMudaAbdulAziz, {
    icon: redIcon,
  }).bindTooltip('<b>6:20 PM May 13</b><br>Jalan Raja Muda Abdul Aziz', {
    permanent: true,
  }).openTooltip(),
  greyJlnRajaMudaAbdulAzizMarker = L.marker(jlnRajaMudaAbdulAziz, {
    icon: greyIcon,
  }).bindTooltip('<b>6:20 PM May 13</b><br>Jalan Raja Muda Abdul Aziz', {
    permanent: true,
  }).openTooltip();

const cheras = [3.085832, 101.7573947],
  redCherasMarker = L.marker(cheras, {
    icon: redIcon,
  }),
  greyCherasMarker = L.marker(cheras, {
    icon: greyIcon,
  });

const bangsar = [3.13083, 101.66944],
  redBangsarMarker = L.marker(bangsar, {
    icon: redIcon,
  }),
  greyBangsarMarker = L.marker(bangsar, {
    icon: greyIcon,
  });

const jlnDangWangi = [3.156897, 101.696437], // Jalan Campbell
  redJlnDangWangiMarker = L.marker(jlnDangWangi, {
    icon: redIcon,
  }),
  greyJlnDangWangiMarker = L.marker(jlnDangWangi, {
    icon: greyIcon,
  });

const bktBintang = [3.1471068, 101.7086011],
  redBktBintangMarker = L.marker(bktBintang, {
    icon: redIcon,
  }),
  greyBktBintangMarker = L.marker(bktBintang, {
    icon: greyIcon,
  });

const kpgBaru = [3.1649491, 101.7068594],
  redKpgBaruMarker = L.marker(kpgBaru, {
    icon: redIcon,
  }),
  greyKpgBaruMarker = L.marker(kpgBaru, {
    icon: greyIcon,
  }),
  blueKpgBaruMarker = L.marker(kpgBaru, {
    icon: blueIcon,
  });

const kpgPandan = [3.1343088, 101.7191394],
  redKpgPandanMarker = L.marker(kpgPandan, {
    icon: redIcon,
  }).bindTooltip('<b>7:00 PM May 13</b><br>Kampung Pandan', {
    permanent: true,
    direction: 'bottom',
  }).openTooltip(),
  greyKpgPandanMarker = L.marker(kpgPandan, {
    icon: greyIcon,
  }).bindTooltip('<b>7:00 PM May 13</b><br>Kampung Pandan', {
    permanent: true,
    direction: 'bottom',
  }).openTooltip();

const kpgDatukKeramat = [3.168953, 101.72597],
  redKpgDatukKeramatMarker = L.marker(kpgDatukKeramat, {
    icon: redIcon,
  }).bindTooltip('<b>7:30 PM May 13</b><br>Kampung Datuk Keramat', {
    permanent: true,
    direction: 'top',
  }).openTooltip(),
  greyKpgDatukKeramatMarker = L.marker(kpgDatukKeramat, {
    icon: greyIcon,
  }).bindTooltip('<b>7:30 PM May 13</b><br>Kampung Datuk Keramat', {
    permanent: true,
    direction: 'top',
  }).openTooltip();

const federalHighway = [3.114839, 101.667632],
  redFederalHighwayMarker = L.marker(federalHighway, {
    icon: redIcon
  }).bindTooltip('<b>7:15 PM May 13</b><br>Federal Highway', {
    permanent: true,
    direction: 'bottom'
  }).openTooltip(),
  greyFederalHighwayMarker = L.marker(federalHighway, {
    icon: greyIcon
  }).bindTooltip('<b>7:15 PM May 13</b><br>Federal Highway', {
    permanent: true,
    direction: 'bottom'
  }).openTooltip();

const kpgKerinchi = [3.11416, 101.664272],
  redKpgKerinchiMarker = L.marker(kpgKerinchi, {
    icon: redIcon,
  }).bindTooltip('<b>7:15 PM May 13</b><br>Kampung Kerinchi', {
    permanent: true,
    direction: 'bottom',
  }).openTooltip(),
  greyKpgKerinchiMarker = L.marker(kpgKerinchi, {
    icon: greyIcon,
  }).bindTooltip('<b>7:15 PM May 13</b><br>Kampung Kerinchi', {
    permanent: true,
    direction: 'bottom',
  }).openTooltip();

const abdullahHukum = [3.118008, 101.673981],
  redAbdullahHukumMarker = L.marker(abdullahHukum, {
    icon: redIcon,
  }).bindTooltip('<b>7:15 PM May 13</b><br>Abdullah Hukum', {
    permanent: true,
    direction: 'top',
  }).openTooltip(),
  greyAbdullahHukumMarker = L.marker(abdullahHukum, {
    icon: greyIcon,
  }).bindTooltip('<b>7:15 PM May 13</b><br>Abdullah Hukum', {
    permanent: true,
    direction: 'top',
  }).openTooltip();

const hkl = [3.171653, 101.701843],
  redHklMarker = L.marker(hkl, {
    icon: redIcon,
  }).bindTooltip('<b>10:30 PM May 13</b><br>General Hospital', {
    permanent: true
  }).openTooltip(),
  greyHklMarker = L.marker(hkl, {
    icon: greyIcon,
  }).bindTooltip('<b>10:30 PM May 13</b><br>General Hospital', {
    permanent: true
  }).openTooltip();

const rexCinema = [3.144263, 101.698558],
  redRexCinemaMarker = L.marker(rexCinema, {
    icon: redIcon,
  }).bindTooltip('<b>8:23 PM May 13</b><br>Rex Cinema', {
    permanent: true,
  }).openTooltip(),
  greyRexCinemaMarker = L.marker(rexCinema, {
    icon: greyIcon,
  }).bindTooltip('<b>8:23 PM May 13</b><br>Rex Cinema', {
    permanent: true,
  }).openTooltip();

const capitolTheartre = [3.167117, 101.696753],
  redCapitolTheartreMarker = L.marker(capitolTheartre, {
    icon: redIcon,
  }).bindTooltip('<b>8:23 PM May 13</b><br>Capitol Theatre', {
    permanent: true,
    direction: 'bottom'
  }).openTooltip(),
  greyCapitolTheartreMarker = L.marker(capitolTheartre, {
    icon: greyIcon,
  }).bindTooltip('<b>8:23 PM May 13</b><br>Capitol Theatre', {
    permanent: true,
    direction: 'bottom'
  }).openTooltip();

const federalCinema = [3.167583, 101.696722],
  redFederalCinemaMarker = L.marker(federalCinema, {
    icon: redIcon,
  }).bindTooltip('<b>8:23 PM May 13</b><br>Federal Cinema', {
    permanent: true,
    direction: 'top'
  }).openTooltip(),
  greyFederalCinemaMarker = L.marker(federalCinema, {
    icon: greyIcon,
  }).bindTooltip('<b>8:23 PM May 13</b><br>Federal Cinema', {
    permanent: true,
    direction: 'top'
  }).openTooltip();

const umnoHQ = [3.158099, 101.695263],
  redUmnoHQMarker = L.marker(umnoHQ, {
    icon: redIcon,
  }).bindTooltip('<b>8:00 PM May 13</b><br>Umno headquarters', {
    permanent: true,
  }).openTooltip(),
  greyUmnoHQMarker = L.marker(umnoHQ, {
    icon: greyIcon,
  }).bindTooltip('<b>8:00 PM May 13</b><br>Umno headquarters', {
    permanent: true,
  }).openTooltip();

const mainRiotSite = [3.165066698195148, 101.69831782579422],
  mainRiotSiteMarker = L.marker(mainRiotSite, {
    icon: assaultIcon,
  }).bindTooltip('Main riot site', {
    permanent: true,
    direction: 'left'
  }).openTooltip();

const kl = [3.154657, 101.712885],
  redKLMarker = L.marker(kl, {
    icon: redIcon,
  }),
  greyKLMarker = L.marker(kl, {
    icon: greyIcon,
  });

const ipkKL = [3.142505, 101.707011],
  redipkKLMarker = L.marker(ipkKL, {
    icon: redIcon,
  }).bindTooltip('<b>9:00 PM May 13</b><br>Selangor Police Headquerters', {
    permanent: true,
    direction: 'right'
  }).openTooltip(),
  greyipkKLMarker = L.marker(ipkKL, {
    icon: greyIcon
  }).bindTooltip('<b>9:00 PM May 13</b><br>Selangor Police Headquerters', {
    permanent: true,
    direction: 'right'
  }).openTooltip();

const jinjang = [3.210990, 101.642303],
  redJinjiangMarker = L.marker(jinjang, {
    icon: redIcon
  });

const brickfields = [3.129159, 101.684199],
  redBrickfieldsMarker = L.marker(brickfields, {
    icon: redIcon
  });

const jlnCheras = [3.106825, 101.730935],
  redJlnCherasMarker = L.marker(jlnCheras, {
    icon: redIcon
  });

const lembahPantai = [3.189743, 101.723522],
  redLembahPantaiMarker = L.marker(lembahPantai, {
    icon: redIcon
  });

const airPanas = [3.192908, 101.719384],
  redAirPanasMarker = L.marker(airPanas, {
    icon: redIcon
  });

const klangGates = [3.215788, 101.739672],
  redKlangGatesMarker = L.marker(klangGates, {
    icon: redIcon
  });

const sentul = [3.206673, 101.682128],
  redSentulMarker = L.marker(sentul, {
    icon: redIcon
  });

const oldKlangRoad = [3.092590, 101.675134],
  redOldKlangRoadMarker = L.marker(oldKlangRoad, {
    icon: redIcon
  });

const sgKlang = [3.160121, 101.704858],
  redSgKlangMarker = L.marker(sgKlang, {
    icon: redIcon
  }).bindTooltip('<b>12:15 AM May 14</b><br>Klang River', {
    permanent: true,
    direction: 'right'
  }).openTooltip(),
  greySgKlangMarker = L.marker(sgKlang, {
    icon: greyIcon
  }).bindTooltip('<b>12:15 AM May 14</b><br>Klang River', {
    permanent: true
  }).openTooltip();

const sgBunus = [3.159298, 101.699624],
  redsgBunusMarker = L.marker(sgBunus, {
    icon: redIcon
  }).bindTooltip('<b>12:15 AM May 14</b><br>Bunus River', {
    permanent: true,
    direction: 'left'
  }).openTooltip(),
  greysgBunusMarker = L.marker(sgBunus, {
    icon: greyIcon
  }).bindTooltip('<b>12:15 AM May 14</b><br>Bunus River', {
    permanent: true
  }).openTooltip();

const markers1 = new L.featureGroup([
  redJlnTARMarker.unbindTooltip(),
  redJlnChowKitMarker,
  redJlnSultanAzlanShahMarker,
  redCherasMarker,
  redBangsarMarker,
  redJlnDangWangiMarker,
  redBktBintangMarker
]);

const markers2 = new L.featureGroup([
  redAlhambraMarker,
  redHarunHouseMarker
]);

const markers4 = new L.featureGroup([
  redHarunHouseMarker,
  redJlnRajaMudaAbdulAzizMarker
]);

const markers7 = new L.featureGroup([
  greyHarunHouseMarker,
  greyJlnRajaMudaAbdulAzizMarker,
  redChowKitRoundaboutMarker,
  blueJlnTARMarker,
  blueJlnChowKitMarker,
  blueKpgBaruMarker,
  blueJlnRajaLautMarker
]);

const fruMarkers = new L.featureGroup([
  redChowKitRoundaboutMarker.unbindTooltip(),
  blueJlnTARMarker,
  blueJlnChowKitMarker,
  blueKpgBaruMarker,
  blueJlnRajaLautMarker
]);

const redCinemaMarkers = new L.featureGroup([
  redCapitolTheartreMarker,
  redFederalCinemaMarker,
  redRexCinemaMarker
]);

const greyCinemaMarkers = new L.featureGroup([
  greyCapitolTheartreMarker,
  greyFederalCinemaMarker,
  greyRexCinemaMarker
]);

const assaultMarkers = L.geoJSON(assaultGEOJson, {
  pointToLayer: (geoJsonPoint, latlng) => {
    return L.marker(latlng, {
      icon: assaultIcon,
    });
  },
});

const tarMarkers = L.geoJSON(tarGEOJson, {
  pointToLayer: (geoJsonPoint, latlng) => {
    return L.marker(latlng, {
      icon: assaultIcon,
    });
  },
});

const markers9 = new L.featureGroup([
  tarMarkers,
  redFederalHighwayMarker
]);

const markers10 = new L.featureGroup([
  tarMarkers,
  redKpgKerinchiMarker,
  redAbdullahHukumMarker,
  redKpgPandanMarker,
  redKpgDatukKeramatMarker
]);

const markers15 = new L.featureGroup([
  redJlnRajaAlangMarker,
  redsgBunusMarker,
  redSgKlangMarker
])

const markers17 = new L.featureGroup([
  redKpgBaruMarker,
  redJinjiangMarker,
  redBrickfieldsMarker,
  redJlnCherasMarker,
  redLembahPantaiMarker,
  redAirPanasMarker,
  redKlangGatesMarker,
  redJlnSultanAzlanShahMarker,
  redJlnChowKitMarker,
  redSentulMarker,
  redOldKlangRoadMarker
])

let map;

setTimeout(() => {

  map = L.map('map', {
    zoomControl: false,
    keyboard: false,
    scrollWheelZoom: false,
    tap: false,
    touchZoom: false,
    dragging: false,
    boxZoom: false,
    doubleClickZoom: false,
  }).fitBounds(markers1.getBounds(), {
    padding: [100, 100]
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy <a href="https://www.malaysiakini.com" target="_top">Malaysiakini</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    minZoom: defaultZoom - 3,
    maxZoom: 20,
  }).addTo(map);

  markers1.addTo(map);


  // functions for transition
  const transition1 = () => {
    map.flyToBounds(markers1.getBounds(), {
      padding: [100, 100],
      duration: flyTime
    });
    redAlhambraMarker.remove();
    redHarunHouseMarker.remove();
    markers1.addTo(map);
  };

  const transition2 = () => {
    map.flyTo(alhambra, defaultZoom, {
      duration: flyTime
    });
    markers1.remove();
    greyAlhambraMarker.remove();
    redHarunHouseMarker.remove();
    redAlhambraMarker.addTo(map);
    redAlhambraMarker.openPopup();
  };

  const transition3 = () => {
    redAlhambraMarker.remove();
    greyHarunHouseMarker.remove();
    greyJlnRajaMudaAbdulAzizMarker.remove();
    redJlnRajaMudaAbdulAzizMarker.remove();
    map.flyTo(harunHouse, defaultZoom, {
      duration: flyTime
    });
    greyAlhambraMarker.addTo(map);
    redHarunHouseMarker.addTo(map);
  };

  const transition4 = () => {
    map.flyToBounds(markers4.getBounds(), {
      padding: [100, 100],
      duration: flyTime
    });
    greyAlhambraMarker.remove();
    greyJlnRajaMudaAbdulAzizMarker.remove();
    redHarunHouseMarker.remove();
    assaultMarkers.remove();
    redJlnRajaMudaAbdulAzizMarker.unbindTooltip();
    redJlnRajaMudaAbdulAzizMarker
      .bindTooltip('<b>6:20 PM May 13</b></br>Jalan Raja Muda Abdul Aziz', {
        permanent: true,
      })
      .openTooltip();
    greyHarunHouseMarker.addTo(map);
    redJlnRajaMudaAbdulAzizMarker.addTo(map);
  };

  const transition5 = () => {
    map.flyToBounds(markers4.getBounds(), {
      padding: [100, 100],
    });
    greyJlnRajaMudaAbdulAzizMarker.remove();
    assaultMarkers.remove();
    redJlnRajaMudaAbdulAzizMarker.unbindTooltip();
    redJlnRajaMudaAbdulAzizMarker
      .bindTooltip('<b>6:40 PM May 13</b></br>Jalan Raja Muda Abdul Aziz', {
        permanent: true,
      })
      .openTooltip();
    redJlnRajaMudaAbdulAzizMarker.addTo(map);
  };

  const transition6 = () => {
    redJlnRajaMudaAbdulAzizMarker.remove();
    markers7.remove();
    greyHarunHouseMarker.unbindTooltip();
    greyJlnRajaMudaAbdulAzizMarker.unbindTooltip();
    assaultMarkers.addTo(map);
    greyJlnRajaMudaAbdulAzizMarker.addTo(map);
    greyHarunHouseMarker.addTo(map);
    map.flyToBounds(markers7.getBounds(), {
      padding: [20, 20],
      duration: flyTime
    });
  };

  const transition7 = () => {
    tarMarkers.remove();
    map.flyToBounds(markers7.getBounds());
    assaultMarkers.addTo(map);
    markers7.addTo(map);
  };

  const transition8 = () => {
    redKpgKerinchiMarker.remove();
    redAbdullahHukumMarker.remove();
    assaultMarkers.remove();
    mainRiotSiteMarker.remove();
    map.flyToBounds(markers7.getBounds());
    markers7.addTo(map);
    tarMarkers.addTo(map);
  };

  const transition9 = () => {
    redKpgDatukKeramatMarker.remove();
    redKpgPandanMarker.remove();
    greyFederalHighwayMarker.remove();
    markers7.remove();
    tarMarkers.remove();
    assaultMarkers.remove();
    map.flyToBounds(markers9, {
      padding: [100, 100],
      duration: flyTime
    });
    redFederalHighwayMarker.addTo(map);
    mainRiotSiteMarker.addTo(map);
  };

  const transition10 = () => {
    redFederalHighwayMarker.remove();
    assaultMarkers.remove();
    redUmnoHQMarker.remove();
    redFederalCinemaMarker.remove();
    redKpgPandanMarker.bindTooltip('<b>7:00 PM May 13</b><br>Kampung Pandan', {
      permanent: true,
      direction: 'bottom'
    });
    redKpgDatukKeramatMarker.bindTooltip('<b>7:30 PM May 13</b><br>Kampung Datuk Keramat', {
      permanent: true,
      direction: 'top'
    });
    map.flyToBounds(markers10, {
      padding: [100, 100],
      duration: flyTime
    });
    redKpgPandanMarker.addTo(map);
    redKpgDatukKeramatMarker.addTo(map);
    mainRiotSiteMarker.addTo(map);
  };

  const transition11 = () => {
    greyUmnoHQMarker.remove();
    mainRiotSiteMarker.remove();
    redKpgPandanMarker.remove();
    redKpgDatukKeramatMarker.remove();
    redKpgKerinchiMarker.remove();
    redAbdullahHukumMarker.remove();
    redCinemaMarkers.remove();
    map.flyToBounds(redCinemaMarkers.getBounds(), {
      padding: [100, 100],
      duration: flyTime
    });
    redUmnoHQMarker.addTo(map);
  }

  const transition12 = () => {
    redUmnoHQMarker.remove();
    redHklMarker.remove();
    greyCinemaMarkers.remove();
    redipkKLMarker.remove();
    greyUmnoHQMarker.addTo(map);
    redCinemaMarkers.addTo(map);
    map.flyToBounds(redCinemaMarkers.getBounds(), {
      padding: [100, 100],
    });
  }

  const transition13 = () => {
    redCinemaMarkers.remove();
    redHklMarker.remove();
    greyipkKLMarker.remove();
    greyCinemaMarkers.remove()
    greyUmnoHQMarker.remove()
    redipkKLMarker.addTo(map);
    map.flyTo(ipkKL, defaultZoom, {
      duration: flyTime
    });
  }

  const transition14 = () => {
    redCinemaMarkers.remove();
    redipkKLMarker.remove();
    greyHklMarker.remove();
    redJlnRajaAlangMarker.remove();
    markers15.remove();
    map.flyTo(hkl, defaultZoom + 2, {
      duration: flyTime
    });
    greyipkKLMarker.addTo(map);
    redHklMarker.bindTooltip('<b>10:30 PM May 13</b><br>General Hospital', {
        permanent: true
      }).openTooltip()
      .addTo(map);
  }

  const transition15 = () => {
    greyCinemaMarkers.remove();
    greyipkKLMarker.remove();
    greyUmnoHQMarker.remove();
    greyJlnRajaAlangMarker.remove();
    redHklMarker.remove();
    map.flyToBounds(markers15, {
      padding: [100, 100],
      duration: flyTime
    });
    markers15.addTo(map);
  }

  const transition16 = () => {
    redJlnRajaAlangMarker.remove();
    greyHklMarker.remove();
    markers17.remove();
    markers15.remove();
    redHklMarker.bindTooltip('<b>5:00 AM May 14</b><br>General Hospital', {
      permanent: true
    }).openTooltip();
    map.flyTo(hkl, defaultZoom, {
      duration: flyTime
    });
    redHklMarker.addTo(map);
  }

  const transition17 = () => {
    greyJlnRajaAlangMarker.remove();
    redHklMarker.remove();
    map.flyToBounds(markers17, {
      padding: [100, 100],
      duration: flyTime
    })
    markers17.addTo(map);
  }

  // Waypoint transition
  new Waypoint({
    element: document.getElementById('map-2'),
    handler: direction => {
      if (direction === 'down') {
        console.log('trans2');
        transition2();
      } else {
        console.log('trans1');
        transition1();
      }
    },
    offset: offsetVal,
  });

  new Waypoint({
    element: document.getElementById('map-3'),
    handler: direction => {
      if (direction === 'down') {
        console.log('trans3');
        transition3();
      } else {
        console.log('trans2');
        transition2();
      }
    },
    offset: offsetVal,
  });

  new Waypoint({
    element: document.getElementById('map-4'),
    handler: direction => {
      if (direction === 'down') {
        console.log('trans4');
        transition4();
      } else {
        console.log('trans3');
        transition3();
      }
    },
    offset: offsetVal,
  });

  new Waypoint({
    element: document.getElementById('map-5'),
    handler: direction => {
      if (direction === 'down') {
        console.log('trans5');
        transition5();
      } else {
        console.log('trans4');
        transition4();
      }
    },
    offset: offsetVal,
  });

  new Waypoint({
    element: document.getElementById('map-6'),
    handler: direction => {
      if (direction === 'down') {
        console.log('trans6');
        transition6();
      } else {
        console.log('trans5');
        transition5();
      }
    },
    offset: offsetVal,
  });

  new Waypoint({
    element: document.getElementById('map-7'),
    handler: direction => {
      if (direction === 'down') {
        console.log('trans7');
        transition7();
      } else {
        console.log('trans6');
        transition6();
      }
    },
    offset: offsetVal,
  });

  new Waypoint({
    element: document.getElementById('map-8'),
    handler: direction => {
      if (direction === 'down') {
        console.log('trans8');
        transition8();
      } else {
        console.log('trans7');
        transition7();
      }
    },
    offset: offsetVal,
  });

  new Waypoint({
    element: document.getElementById('map-9'),
    handler: direction => {
      if (direction === 'down') {
        console.log('trans9');
        transition9();
      } else {
        console.log('trans8');
        transition8();
      }
    },
    offset: offsetVal,
  });

  new Waypoint({
    element: document.getElementById('map-10'),
    handler: direction => {
      if (direction === 'down') {
        console.log('trans10');
        transition10();
      } else {
        console.log('trans9');
        transition9();
      }
    },
    offset: offsetVal,
  });

  new Waypoint({
    element: document.getElementById('map-11'),
    handler: direction => {
      if (direction === 'down') {
        console.log('trans11');
        transition11();
      } else {
        console.log('trans10');
        transition10();
      }
    },
    offset: offsetVal,
  });

  new Waypoint({
    element: document.getElementById('map-12'),
    handler: direction => {
      if (direction === 'down') {
        console.log('trans12');
        transition12();
      } else {
        console.log('trans11');
        transition11();
      }
    },
    offset: offsetVal,
  });

  new Waypoint({
    element: document.getElementById('map-13'),
    handler: direction => {
      if (direction === 'down') {
        console.log('trans13');
        transition13();
      } else {
        console.log('trans12');
        transition12();
      }
    },
    offset: offsetVal,
  });

  new Waypoint({
    element: document.getElementById('map-14'),
    handler: direction => {
      if (direction === 'down') {
        console.log('trans14');
        transition14();
      } else {
        console.log('trans13');
        transition13();
      }
    },
    offset: offsetVal,
  });

  new Waypoint({
    element: document.getElementById('map-15'),
    handler: direction => {
      if (direction === 'down') {
        console.log('trans15');
        transition15();
      } else {
        console.log('trans14');
        transition14();
      }
    },
    offset: offsetVal,
  });

  new Waypoint({
    element: document.getElementById('map-16'),
    handler: direction => {
      if (direction === 'down') {
        console.log('trans16');
        transition16();
      } else {
        console.log('trans15');
        transition15();
      }
    },
    offset: offsetVal,
  });

  new Waypoint({
    element: document.getElementById('map-17'),
    handler: direction => {
      if (direction === 'down') {
        console.log('trans17');
        transition17();
      } else {
        console.log('trans16');
        transition16();
      }
    },
    offset: offsetVal,
  });

}, 1);