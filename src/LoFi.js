import React, { Component } from "react";

const anime_art = [
  {
    i:
      "https://66.media.tumblr.com/d46e8b697a60f10697e74d6d39b9f87b/8ce71a3daca603f9-df/s500x750/0ed9ccaff8d346a3b7b057614ab5088785c3d918.gifv",
    c: "https://cherrythunder.tumblr.com/post/186416423768/c-h-e-e-r-s",
  },

  {
    i:
      "https://66.media.tumblr.com/78f09bedddd14cec03d38ddb457a4a85/tumblr_pjw3agT18z1xdjegyo1_500.gifv",
    c: "https://anime-gifs-and-more.tumblr.com/post/181200880567",
  },
  {
    i:
      "https://66.media.tumblr.com/767c73f9039384bf33e6be82f74957a5/7ac4fb9d120087e0-81/s500x750/5bd769ef41f1fa397a956f8cd5a57052503ffe59.gifv",
    c:
      "https://animestheticc.tumblr.com/post/611334074941014016/ailee-i-will-go-to-you-like-the-first-snow",
  },
  {
    i:
      "https://66.media.tumblr.com/ab965551c2d9893e9722dbd4704c8863/f34c2cb2d0dca310-e5/s500x750/10b329d6a1f8b7d5e2dfe17b4e85136414732925.gifv",
    c:
      "https://animestheticc.tumblr.com/post/611333422512783360/lambc-love-like-that",
  },
  {
    i:
      "https://66.media.tumblr.com/2a4c3773e0ce1e52997a9d693a72b3af/55e23dd4e4d073e1-01/s500x750/ed092c270638df1db0238d7d63b2661cdcef783a.gifv",
    c:
      "https://animestheticc.tumblr.com/post/190986073373/better-days-will-come",
  },
  {
    i:
      "https://66.media.tumblr.com/35cd8d3a5a350997ef3f7a71350efa9e/1ed772b41ffa92e6-2b/s500x750/48bae543cc99d3b468d7b52ec73687c7a4c32df4.gifv",
    c: "https://animestheticc.tumblr.com/post/190986032953/bts-spring-day",
  },
  {
    i:
      "https://66.media.tumblr.com/e5dd557a842c8046a9a62701a3988feb/tumblr_pq3zxgJNMD1svixs9_500.gifv",
    c: "https://animestheticc.tumblr.com/post/184249642343",
  },
  {
    i:
      "https://66.media.tumblr.com/2f5fd7301b801d0ecdf595424564fe24/tumblr_pq3zvw2qLy1svixs9_540.gifv",
    c: "https://animestheticc.tumblr.com/post/184249626583",
  },
  {
    i:
      "https://66.media.tumblr.com/8dff4151ae8ed5a091f5164051f7f8a8/tumblr_ppjvxn9kEY1xgvmwto1_500.gifv",
    c:
      "https://animestheticc.tumblr.com/post/183990401803/some-people-have-been-asking-me-which-animes-are",
  },
  {
    i:
      "https://66.media.tumblr.com/c325c6ae80df83cfef331a5d2a2b973e/tumblr_pp77tcbQ521xgvmwto1_500.gifv",
    c: "https://animestheticc.tumblr.com/post/183826256843",
  },
  {
    i:
      "https://66.media.tumblr.com/1a10881cab1fd9672fe5336bea178d22/tumblr_pp77qyo7Qc1xgvmwto1_540.gifv",
    c: "https://animestheticc.tumblr.com/post/183826230888",
  },
  {
    i:
      "https://66.media.tumblr.com/11ddc036b83e6a3c211a8ab297839d11/tumblr_pogyahtehp1svixs9_400.gifv",
    c: "https://animestheticc.tumblr.com/post/183497735208",
  },
  {
    i:
      "https://66.media.tumblr.com/71d0c24b72efcc5c9c7f82ecc06cfacd/tumblr_pogy21J2yr1svixs9_500.gifv",
    c: "https://animestheticc.tumblr.com/post/183497642663",
  },
  {
    i:
      "https://66.media.tumblr.com/27b5d784aeea4538a3881e0d567397aa/tumblr_pmq65qG2N31svixs9_540.gifv",
    c: "https://animestheticc.tumblr.com/post/182714378543",
  },
  {
    i:
      "https://66.media.tumblr.com/3eebeef1efe633370b15666e712eaca8/tumblr_pmq631H5Gk1svixs9_400.gifv",
    c: "https://animestheticc.tumblr.com/post/182714342103",
  },
  {
    i:
      "https://66.media.tumblr.com/7f147ed6bf3aa1cf4e3bcd76fc7e2789/tumblr_pluub1DvnP1svixs9_500.gifv",
    c:
      "https://animestheticc.tumblr.com/post/182278273658/we-reached-1k-thank-you-all-d",
  },
  {
    i:
      "https://66.media.tumblr.com/5cb971162e1139563534a7161d3c8383/tumblr_pl85bbDlQo1svixs9_540.gifv",
    c: "https://animestheticc.tumblr.com/post/181951499808",
  },
  {
    i:
      "https://66.media.tumblr.com/75fea254a7d0cfee43cfc5ddc506637a/tumblr_pl859hr4Tm1svixs9_500.gifv",
    c: "https://animestheticc.tumblr.com/post/181951480738",
  },
  {
    i:
      "https://66.media.tumblr.com/e221fa83d74c6cce2349d2aff5b4e32d/tumblr_pkx0g7aKla1svixs9_540.gifv",
    c: "https://animestheticc.tumblr.com/post/181773029168",
  },
  {
    i:
      "https://66.media.tumblr.com/cd1ecaa6fd88c428df48de616b6315e8/tumblr_pkvfqkgL9z1svixs9_540.gifv",
    c: "https://animestheticc.tumblr.com/post/181745363963",
  },
  {
    i:
      "https://66.media.tumblr.com/e055a6ce8b657bcd6863c393576ca9bf/tumblr_pkvabrwS6P1svixs9_540.gifv",
    c: "https://animestheticc.tumblr.com/post/181742665383",
  },
  {
    i:
      "https://66.media.tumblr.com/6faca5a9e75a1b5d5467b6c88db0a42c/tumblr_pkv9t8ud3t1svixs9_500.gifv",
    c: "https://animestheticc.tumblr.com/post/181742403823",
  },
  {
    i:
      "https://66.media.tumblr.com/f535426d017de5919384504129501d6b/tumblr_pkv9k1zvGC1svixs9_400.gifv",
    c: "https://animestheticc.tumblr.com/post/181742274533",
  },
  {
    i:
      "https://66.media.tumblr.com/ebd79938fca45971e570f896578caf26/tumblr_pj4acpvf6K1svixs9_500.gifv",
    c: "https://animestheticc.tumblr.com/post/180720793663/lost",
  },
  {
    i:
      "https://66.media.tumblr.com/e0549f8e2e8e8523aee7eac097783079/tumblr_pj1b0ztocY1svixs9_500.gifv",
    c: "https://animestheticc.tumblr.com/post/180669218628",
  },
  {
    i:
      "https://66.media.tumblr.com/50e120237b8328d076f241e5f53b56fa/tumblr_pj1b0x7ub71svixs9_500.gifv",
    c: "https://animestheticc.tumblr.com/post/180669217933",
  },
  {
    i:
      "https://66.media.tumblr.com/e8cb21e580b7ed5dc61441ec307e680e/tumblr_piwa2nItrF1svixs9_500.gifv",
    c: "https://animestheticc.tumblr.com/post/180580229073/chill",
  },
  {
    i:
      "https://66.media.tumblr.com/cc8b8ae6ada183493474b0d67ed26920/tumblr_pir22i89NN1svixs9_500.gifv",
    c: "https://animestheticc.tumblr.com/post/180479071783",
  },
  {
    i:
      "https://66.media.tumblr.com/068d3e8a0e46cd0d4b1747dfcd53b10c/tumblr_pir0ghPObX1svixs9_500.gifv",
    c:
      "https://animestheticc.tumblr.com/post/180478428648/a-moment-of-peace-after-the-storm",
  },
  {
    i:
      "https://66.media.tumblr.com/91cdb895c5e13924f22e76ff455910d8/tumblr_pir09pkvhr1svixs9_400.gifv",
    c: "https://animestheticc.tumblr.com/post/180478352623",
  },
  {
    i:
      "https://66.media.tumblr.com/6c0d3ebac7ebb9db73426c2c9f2c0d86/tumblr_pxwlsoeQYn1qze3hdo1_500.gifv",
    c:
      "https://1041uuu.tumblr.com/post/187746664813/httpswwwpatreoncomposts29858406",
  },
  {
    i:
      "https://66.media.tumblr.com/7e2640054d506699873234becee9ab9c/tumblr_pkffwiVXOu1qze3hdo1_500.gifv",
    c:
      "https://1041uuu.tumblr.com/post/181475956138/httpswwwpatreoncomposts23590318",
  },
  {
    i:
      "https://66.media.tumblr.com/2b5f96777491c306267b4cab21575b4d/tumblr_phcq9rpfKz1qze3hdo1_r2_500.gifv",
    c:
      "https://1041uuu.tumblr.com/post/179547470348/httpswwwpatreoncomposts22364716",
  },
  {
    i:
      "https://66.media.tumblr.com/b5e7c0f07af337148f5f994dc117853a/tumblr_p69334HRQC1qze3hdo1_500.gifv",
    c: "https://1041uuu.tumblr.com/post/172307746313",
  },
  {
    i:
      "https://66.media.tumblr.com/f6395bca7a86e8efa6807271b64fb7f4/tumblr_p4jpsnKZQu1qze3hdo1_500.gifv",
    c: "https://1041uuu.tumblr.com/post/171158850808",
  },
  {
    i:
      "https://66.media.tumblr.com/2b0ec5e7d4763b0cc6aaba6982be379c/tumblr_inline_p46bi1Mmeq1qzc0ri_500.gifv",
    c: "https://1041uuu.tumblr.com/post/170894127483/i-want-patrons",
  },

  {
    i:
      "https://66.media.tumblr.com/29a447337c79e7a67728313bebac3bee/tumblr_oxyrpvrfPG1qze3hdo1_r3_500.gifv",
    c: "https://1041uuu.tumblr.com/post/166497251793",
  },

  {
    i:
      "https://66.media.tumblr.com/f7cd096f108d83c988169096361972fc/tumblr_otjfqziQrH1qze3hdo1_500.gifv",
    c: "https://1041uuu.tumblr.com/post/163321662673",
  },
  {
    i:
      "https://66.media.tumblr.com/09c6d90170076846bdb19de05e08a8ca/tumblr_ol3lldvM801qze3hdo1_r1_500.gifv",
    c: "https://1041uuu.tumblr.com/post/157011271468",
  },
  {
    i:
      "https://66.media.tumblr.com/88b031b3a3404c77f2defd8aac92ec5c/tumblr_oirozpY81B1qze3hdo1_r2_500.gifv",
    c: "https://1041uuu.tumblr.com/post/154956181283",
  },
  {
    i:
      "https://66.media.tumblr.com/0781175ba91a46ed548e40b37c65368b/tumblr_oij4ithMKC1qze3hdo1_r3_500.gifv",
    c: "https://1041uuu.tumblr.com/post/154758756743/remake-of",
  },
  {
    i:
      "https://66.media.tumblr.com/dba8930c075bf505728df757c37b4216/tumblr_oh8awjk7lA1qze3hdo1_r1_500.gifv",
    c: "https://1041uuu.tumblr.com/post/153666878438",
  },
  {
    i:
      "https://66.media.tumblr.com/d977bfbc4fafa218fa06fd0f3db5abee/tumblr_nqantu68Dw1qze3hdo1_r1_500.gifv",
    c: "https://1041uuu.tumblr.com/post/122075241013",
  },
  {
    i:
      "https://66.media.tumblr.com/4c1313fb62311980f738c18fe9d27dac/tumblr_noa6mdd3yb1qze3hdo1_r2_500.gifv",
    c: "https://1041uuu.tumblr.com/post/118852290693",
  },
  {
    i:      "https://66.media.tumblr.com/734ba6db5941cd39f175f61ccf33b980/tumblr_nmvrs6ubl71qze3hdo1_r1_500.gifv",
    c: "https://1041uuu.tumblr.com/post/116527625403",
  },
  {
    i:
      "https://66.media.tumblr.com/2dbf142a4a69b350fa220a103f18f88a/tumblr_nmjpfvJD4i1qze3hdo1_r1_500.gifv",
    c: "https://1041uuu.tumblr.com/post/115944996778",
  },
  {
    i: "https://66.media.tumblr.com/4e0e28821627a1e566134edef9b0b20b/tumblr_nm6j1ghB7C1qze3hdo1_500.gifv",
    c: "https://1041uuu.tumblr.com/post/115292439073",
  },
  {
    i: "https://66.media.tumblr.com/197d88298e555b162eb38b9e2215db9c/tumblr_ni9qrsClUg1qze3hdo1_r2_500.gifv",
    c: "https://1041uuu.tumblr.com/post/108250643238",
  },
  {
    i: "https://66.media.tumblr.com/e85d3e398ccf035c0d5dd74a34d57eb9/tumblr_ngbasnF0bG1qze3hdo1_r3_500.gifv",
    c: "https://1041uuu.tumblr.com/post/104751238713",
  },
  {
    i: "https://66.media.tumblr.com/24ae2b225023363178e5fab544a9605d/tumblr_ne79hs8lGB1qze3hdo1_r3_500.gifv",
    c: "https://1041uuu.tumblr.com/post/101245936753",
  },
  {
    i: "https://66.media.tumblr.com/063481f87ba3058c8bb235148df090b9/tumblr_nb8zykBVPC1qze3hdo1_r1_500.gifv",
    c: "https://1041uuu.tumblr.com/post/96406991338",
  },
  {
    i: "https://66.media.tumblr.com/16dee2fb087bcacd529b9c455f145ca8/tumblr_n9zgffvOOr1qze3hdo2_r1_500.gifv",
    c: "https://1041uuu.tumblr.com/post/94148401998",
  },
  {
    i: "https://66.media.tumblr.com/b9c9c7616822fbd79c7eb73ada4c452a/tumblr_n9s45zl9Jc1qze3hdo1_500.gifv",
    c: "https://1041uuu.tumblr.com/post/93769319223",
  },
  {
    i: "https://66.media.tumblr.com/74f3a108bc59636cc3e48cbd005216d8/tumblr_n9m262J4Lq1qze3hdo1_r2_500.gifv",
    c: "https://1041uuu.tumblr.com/post/93470067508",
  },
  {
    i: "https://66.media.tumblr.com/bfb488cc19c0307b2ada509d5babbd51/tumblr_n7zukidWwU1qze3hdo1_r2_500.gifv",
    c: "https://1041uuu.tumblr.com/post/90371393978",
  },
  {
    i: "https://66.media.tumblr.com/4dc89cf1c41000f8a7b02cf5fda562b9/tumblr_n77oaqwhn61qze3hdo1_r1_500.gifv",
    c: "https://1041uuu.tumblr.com/post/88852549583",
  },
  {
    i: "https://66.media.tumblr.com/5eb2fa5ac6fe04d7ab2c2b29b1248d96/tumblr_pdp5nzejfz1xchla7o1_500.gifv",
    c: "https://dailydoseofanimescenery.tumblr.com/post/186341464098",
  },
  {
    i: "https://66.media.tumblr.com/1328df7cbd176b3df00be991f2522c4a/tumblr_pdlbdz3VxN1xdudjio1_400.gifv",
    c: "https://dailydoseofanimescenery.tumblr.com/post/186341462833",
  },
  {
    i: "https://66.media.tumblr.com/eb29452c62ed3fa35c5df8e0f10be5ad/tumblr_pk85gtk5WS1rhk4rn_400.gifv",
    c: "https://dailydoseofanimescenery.tumblr.com/post/186341461923",
  },
  {
    i: "https://66.media.tumblr.com/37128b97512ef1981a71c9d11672e238/tumblr_pk87f8HZf01rhk4rn_400.gifv",
    c: "https://dailydoseofanimescenery.tumblr.com/post/186341460633",
  },
  {
    i: "https://66.media.tumblr.com/42ed593000919430672150107348f25b/tumblr_pk872boT2p1rhk4rn_500.gifv",
    c: "https://dailydoseofanimescenery.tumblr.com/post/186341459368",
  },
  {
    i: "https://66.media.tumblr.com/597b4753fca02dd83eb935a599afad2a/tumblr_pd6kmx615e1xchla7o1_500.gifv",
    c: "https://dailydoseofanimescenery.tumblr.com/post/186341455903",
  },
  {
    i: "https://66.media.tumblr.com/0d690193406320e3b9ea6f44c28e6983/tumblr_pk87bebQxN1rhk4rn_400.gifv",
    c: "https://dailydoseofanimescenery.tumblr.com/post/186341452038",
  },
  {
    i: "https://66.media.tumblr.com/a2043e15ed2304d74553101363f5d00e/tumblr_pdeprvk4dK1xchla7o1_540.gifv",
    c: "https://dailydoseofanimescenery.tumblr.com/post/182998490588",
  },
  {
    i: "https://66.media.tumblr.com/eea55e722480788cdec39896663ee436/tumblr_pdbj08LS5Q1xchla7o1_540.gifv",
    c: "https://dailydoseofanimescenery.tumblr.com/post/182998489423",
  },
  {
    i: "https://66.media.tumblr.com/4a960a405495da1ff190f6ef8042f134/tumblr_pk8767vq3o1rhk4rn_540.gifv",
    c: "https://dailydoseofanimescenery.tumblr.com/post/181366592788",
  },
  {
    i: "https://66.media.tumblr.com/44fa73d3912fe28d152482473213312f/tumblr_pel1vnMAcp1rhk4rn_500.gifv",
    c: "https://dailydoseofanimescenery.tumblr.com/post/177764856378",
  },
  {
    i: "https://66.media.tumblr.com/5e8a44f4116a5720072d180e10d043df/tumblr_pdnfckagpR1xchla7o1_500.gifv",
    c: "https://dailydoseofanimescenery.tumblr.com/post/177123015268",
  },
  {
    i: "https://66.media.tumblr.com/7695c021e937ad9312162f3638112ecf/tumblr_pdfubukKP71xchla7o1_540.gifv",
    c: "https://dailydoseofanimescenery.tumblr.com/post/176979081733",
  },
  {
    i: "https://66.media.tumblr.com/524f031a756d7aa0617cfc423fe2fdf3/tumblr_pddya5SiJV1xchla7o1_500.gifv",
    c: "https://dailydoseofanimescenery.tumblr.com/post/176941534928",
  },
  {
    i: "https://66.media.tumblr.com/49b9a4a2ee86eacc141b0bc7ab4be9ac/tumblr_pda7fbHM2P1xchla7o1_540.gifv",
    c: "https://dailydoseofanimescenery.tumblr.com/post/176867703883",
  },
  {
    i: "https://66.media.tumblr.com/861d6dfb79332a158192ac8b49e246d2/tumblr_pdp6hoJWxW1xci0ono1_500.gifv",
    c: "https://lofianimevibe.tumblr.com/post/181131140815",
  }, {
    i: "https://66.media.tumblr.com/14b4e716ff24f1e156f6ff34969f44a5/tumblr_pjvnsqkf3d1va5hq2_540.gifv",
    c: "https://lofi-wave.tumblr.com/post/614482848490127360",
  }
];

export default class LoFi extends Component {
  constructor() {
    super();
    this.state = {
      art_index: Math.floor(Math.random() * anime_art.length),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        art_index: Math.floor(Math.random() * anime_art.length),
      });
    }, 15000);
  }

  render() {
    return (
      <div>
        <a
          href={`${anime_art[this.state.art_index].c}`}
          target="_blank"
          className="wrapper"
          style={{
            background: `url(${
              anime_art[this.state.art_index].i
            }) center center / cover no-repeat fixed`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",

            width: "100%",
            height: "100%",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -100,
          }}
        ></a>
        <iframe
          className="player"
          width="20%"
          height="450"
          scrolling="no"
          frameborder="no"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/601710774&color=%239c5cba&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
      </div>
    );
  }
}
