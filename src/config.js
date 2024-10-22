const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env;

export default {
  style: 'mapbox://styles/mongabay/cm1s0wzb800lf01pl8qsugoue',
  accessToken: REACT_APP_MAPBOX_ACCESS_TOKEN,
  showMarkers: false,
  theme: 'mongabay',
  intro: {
    title: 'Narco airstrips',
    subtitle:
      'Using the Earth Index, an AI algorithm, Mongabay detected 76 clandestine landing strips hidden in the Peruvian Amazon.',
    date: 'Oct. 24 2024',
    social: [
      {
        name: 'twitter',
        src: 'twitter.svg',
        href: 'https://x.com/MongabayLatam',
      },
      {
        name: 'facebook',
        src: 'facebook.svg',
        href: 'https://www.facebook.com/MongabayLatam/',
      },
    ],
  },
  logos: [
    {
      name: 'mongabay',
      src: 'mongabaylogo.png',
      width: '140',
      href: 'https://news.mongabay.com',
    },
    {
      name: 'vizzuality',
      src: 'vizzualitylogo.png',
      width: '100',
      href: 'https://vizzuality.com',
    },
  ],
  alignment: 'left',
  footer: 'Cartography by Willie Shubert for Mongabay.',
  chapters: [
    {
      id: 'first chapter',
      alignment: 'left',
      hidden: false,
      title: 'Airstrips detected',
      description:
        'Using the Earth Index, an AI algorithm, Mongabay detected 76 clandestine landing strips hidden in the Peruvian Amazon.',
      legend: [
        {
          title: 'Landing strips',
          icon: 'plane',
        },
      ],
      sources:
        "National Police of Peru's Anti-Narcotics Unit (Dirandro), Earth Genome, OpenStreetMap, and Ucayali Regional Government.",
      location: {
        center: [-74.19873, -9.59581],
        zoom: 5.3,
        pitch: 23.12,
        bearing: 8,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'peruvian-amazon-20241002t1750-dlalbv copy',
          opacity: 0.5,
        },
        {
          layer: 'airstrips-10224-dozgmq',
          opacity: 1,
        },
        {
          layer: 'concesiones-forestales-10-432-dulhn7 copy 2',
          opacity: 0,
        },
        {
          layer: 'concesiones-forestales-10-432-dulhn7 copy 1',
          opacity: 0,
        },
        {
          layer: 'coca-crops-density-20241002t1-55l40t',
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: 'peruvian-amazon-20241002t1750-dlalbv copy',
          opacity: 0,
        },
      ],
    },
    {
      id: 'second-chapter',
      alignment: 'right',
      hidden: false,
      title: 'Narco airstrips',
      images: [
        {
          src: 'Pist069_PleiadesNeo2022-07-27.jpg',
          position: 'top',
          title: 'Airstrip 69',
          author: 'SPOT IMAGE',
        },
      ],
      description:
        'Journalistic verification of each airstrip involved cross referencing results from Earth Index with government data, open source information and local sources. This investigation confirms that 67 of the 76 drug runways are distributed between Ucayali (45), Huánuco (17) and Pasco (5), and today serve drug trafficking.',
      legend: [
        {
          title: 'Coca crop density in 2023',
          icon: 'coca',
        },
      ],
      sources: "Peru's National Commission for Development and Life without Drugs (DEVIDA)",
      location: {
        center: [-74.549, -9.575],
        zoom: 8,
        pitch: 35.12,
        bearing: 49.6,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'coca-crops-density-20241002t1-55l40t',
          opacity: 1,
        },
        {
          layer: 'airstrips-10224-dozgmq',
          opacity: 1,
        },
        {
          layer: 'territorios-indigenas-0lu5ni copy',
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: 'coca-crops-density-20241002t1-55l40t',
          opacity: 0,
        },
      ],
    },
    {
      id: 'third-chapter',
      alignment: 'fully',
      hidden: false,
      title: 'Beseiging Indigenous territories',
      description:
          'Crucially, 30 of the 67 narco airstrips were detected within Indigenous territories and 26 more are located near them.',
      legend: [
        {
          title: 'Indigenous territories',
          color: '#de6363',
          pattern: 'LINEPATTERN',
        },
      ],
      sources: 'Global Forest Watch and Instituto del Bien Común (IBC)',
      location: {
        center: [-74.549, -9.575],
        zoom: 8,
        pitch: 35.12,
        bearing: 49.6,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'territorios-indigenas-0lu5ni copy',
          opacity: 1,
        },
        {
          layer: 'concesiones-forestales-10-432-dulhn7 copy 2',
          opacity: 0,
        },
        {
          layer: 'concesiones-forestales-10-432-dulhn7 copy 1',
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: 'territorios-indigenas-0lu5ni copy',
          opacity: 0.75,
        },
      ],
    },
    {
      id: 'fourth-chapter',
      alignment: 'fully',
      hidden: false,
      title: 'Atalaya Province',
      images: [
        {
          src: 'Pist018_SPOT2020-08-01.jpg',
          position: 'top',
          title: 'Airstrip 18',
          author: 'SPOT Image',
        },
      ],
      description:
        'Illegal airstrips have taken over entire landscapes in this corner of the Amazon Rainforest. In the province of Atalaya, which is part of the Ucayali region, we detected 32 airstrips.',
      legend: [
        {
          title: 'Tree Cover Loss',
          color: '#ccefb8',
        },
      ],
      sources: 'Global Forest Watch',
      location: {
        center: [-73.413, -10.724],
        zoom: 9.83,
        pitch: 35.12,
        bearing: 49.6,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'deforestationthreeregions-dcthbg',
          opacity: 1,
        },
        {
          layer: 'coca-crops-density-20241002t1-55l40t',
          opacity: 0.5,
        },
      ],
      onChapterExit: [],
    },
    {
      id: 'fifth-chapter',
      alignment: 'fully',
      hidden: false,
      title: 'Deadly flights',
      description:
        'In these three regions, at least 15 Indigenous leaders have been murdered since the pandemic began in 2020. The area is also the origin of the largest number of flights to ship cocaine, according to sources from the Anti-Drug Directorate of the National Police of Peru.',
      location: {
        center: [-74.549, -9.575],
        zoom: 8,
        pitch: 35.12,
        bearing: 49.6,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'deforestationthreeregions-dcthbg',
          opacity: 1,
        },
        {
          layer: 'coca-crops-density-20241002t1-55l40t',
          opacity: .5,
        },
      ],
      onChapterExit: [
        {
          layer: 'coca-crops-density-20241002t1-55l40t',
          opacity: 0,
        },
      ],
    },
    {
      id: 'sixth-chapter',
      alignment: 'left',
      hidden: false,
      title: 'Surrounded by illegality',
      images: [
        {
          src: 'OverviewPist058-059-065-082-084_SPOT2022-07-30.jpg',
          position: 'top',
          title: 'Multiple landing strips',
          author: 'SPOT IMAGE',
        },
      ],
      description:
        'Following up on the satellite imagery analysis, Mongabay Latam journalists reached two communities, located between the regions of Huánuco and Pasco with 15 clandestine landing strips in their territories.',
      location: {
        center: [-74.927, -9.79],
        zoom: 11.06,
        pitch: 16,
        bearing: 49.6,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'deforestationthreeregions-dcthbg',
          opacity: 1,
        },
        {
          layer: 'territorios-indigenas-0lu5ni copy',
          opacity: 1,
        },
      ],
      onChapterExit: [],
    },
    {
      id: 'seventh-chapter',
      alignment: 'right',
      hidden: false,
      title: 'Indigenous reserves under pressure',
      images: [
        {
          src: 'Pist014_SPOT2022-07-05.jpg',
          position: 'top',
          title: 'Airstrip 14',
          author: 'SPOT Image',
        },
      ],
      description:
        'We identified at least 2 illegal airstrips in Kakataibo North and South Indigenous Reserve. In addition, six illegal airfields are affecting at least four reserves specificially designated for Indigenous peoples living in isolation and initial contact (PIACI). Although these territories should be off limits by law, they are not being protected in practice.',
      location: {
        center: [-75.3976425, -9.367474578],
        zoom: 11.06,
        pitch: 16,
        bearing: 49.6,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'deforestationthreeregions-dcthbg',
          opacity: 1,
        },
        {
          layer: 'territorios-indigenas-0lu5ni copy',
          opacity: 1,
        },
        {
          layer: 'concesiones-forestales-10-432-dulhn7 copy 2',
          opacity: 0,
        }
      ],
      onChapterExit: [
        {
          layer: 'territorios-indigenas-0lu5ni copy',
          opacity: 0,
        },
      ],
    },
    {
      id: 'eighth-chapter',
      alignment: 'fully',
      hidden: false,
      title: 'Forestry concessions',
      images: [
        {
          src: 'DSC_0723-1.jpg',
          position: 'top',
          title: 'Timber transiting by river',
          author: 'Santiago Romaní',
        },
      ],
      description:
        'Narco airstrips are present in nine forestry concessions, which are zoned for sustainable forest use. The Earth Index identified ten airstrips within these kinds of concessions.',
      legend: [
        {
          title: 'Forestry concessions',
          color: '#66f7ff',
        },
      ],
      sources: "Peru's National Forest and Wildlife Service (Serfor)",
      location: {
        center: [-74.549, -9.575],
        zoom: 8,
        pitch: 35.12,
        bearing: 49.6,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'deforestationthreeregions-dcthbg',
          opacity: 0,
        },
        {
          layer: 'coca-crops-density-20241002t1-55l40t',
          opacity: 0,
        },
        {
          layer: 'concesiones-forestales-10-432-dulhn7 copy 2',
          opacity: 0.75,
        },
        {
          layer: 'concesiones-forestales-10-432-dulhn7 copy 1',
          opacity: 0.75,
        },
        {
          layer: 'territorios-indigenas-0lu5ni copy',
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: 'ninth-chapter',
      alignment: 'right',
      hidden: false,
      title: 'Mendoza Forestry',
      images: [
        {
          src: 'Pist024-SPOT2023-10-02v2.jpg',
          position: 'top',
          title: 'Airstrip 24',
          author: 'SPOT',
        },
      ],
      description:
        'One of the forestry concessions with clandestine airstrips is managed by the company Forestal Mendoza, whose legal representative is Francisco de Asís Mendoza de Souza, the current provincial mayor of Atalaya. He is under investigation for usurpation, embezzlement and money laundering. The Earth Index detected two illegal airstrips within the concession: one opened in June 2018 and the other in June 2020.',
      location: {
        center: [-73.4800647201553, -9.46968987568065],
        zoom: 11.06,
        pitch: 35.12,
        bearing: 16,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'deforestationthreeregions-dcthbg',
          opacity: 0,
        },
        {
          layer: 'coca-crops-density-20241002t1-55l40t',
          opacity: 0.75,
        },
        {
          layer: 'concesiones-forestales-10-432-dulhn7 copy 2',
          opacity: 0.75,
        },
        {
          layer: 'concesiones-forestales-10-432-dulhn7 copy 1',
          opacity: 0.75,
        },
        {
          layer: 'territorios-indigenas-0lu5ni copy',
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: 'tenth-identifier',
      alignment: 'fully',
      hidden: false,
      title: 'Rivers and roads',
      images: [
        {
          src: 'Pist021_PleiadesNeo2022-09-27.jpg',
          position: 'top',
          title: 'Airstrip 21',
          author: 'SPOT Image',
        },
      ],
      description:
        'A key investigative finding is that 52 of the 67 narco airstrips located in Ucayali, Huánuco and Pasco — where the most Indigenous leaders have been murdered — are one kilometer from rivers and roads, suggesting these locations are strategic points for transfering drug shipments.',
      location: {
        center: [-74.549, -9.575],
        zoom: 8,
        pitch: 35.12,
        bearing: 49.6,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'coca-crops-density-20241002t1-55l40t',
          opacity: 1,
        },
        {
          layer: 'airstrips-10224-dozgmq',
          opacity: 1,
        },
        {
          layer: 'concesiones-forestales-10-432-dulhn7 copy 2',
          opacity: 0.75,
        },
        {
          layer: 'concesiones-forestales-10-432-dulhn7 copy 1',
          opacity: 0.75,
        },
        {
          layer: 'territorios-indigenas-0lu5ni copy',
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: 'coca-crops-density-20241002t1-55l40t',
          opacity: 0,
        },
      ],
    },
  ],
};
