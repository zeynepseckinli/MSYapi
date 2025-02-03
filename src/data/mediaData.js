const mediaItems = [
      { id: 1, name: "ornek isim ornek isimornek isim", src: "/foto1.png", type: "image", category: "Kutlama" },
      { id: 2, name: "ornek falan", src: "https://res.cloudinary.com/dirsnej9m/image/upload/v1735577093/dn2upkrlzkduwk7tjrm9.jpg", type: "image", category: "Etkinlik" },
      { id: 3, name: "falan isimornek isimornek isimornek isimornek isim", src: "/images/festival1.jpg", type: "image", category: "Festival" },
      { id: 4, name: "ornek isim", src: "https://res.cloudinary.com/dirsnej9m/video/upload/v1735474100/1220_ngp0ue.mp4", type: "video", category: "Konser" },
      { id: 5, name: "falan isim", src: "https://res.cloudinary.com/dirsnej9m/image/upload/v1735027997/lsziumygj5usa3p1vkcd.jpg", type: "image", category: "Mimari" },
      { id: 6, name: "falan falan", src: "https://res.cloudinary.com/dirsnej9m/image/upload/v1733822705/vnvdabwlqhddrwzrqpub.jpg", type: "image", category: "Ürün" },
      { id: 7, name: "ornek isim", src: "/images/sosyalmedya1.jpg", type: "image", category: "Sosyal Medya" },
      { id: 8, name: "falan isim", src: "https://res.cloudinary.com/dy20zavvv/video/upload/v1738232167/1220_e5ytdo.mp4", type: "video", category: "Kutlama" },





      { id: 31, name: "BLIND - SOFT ANALOG", src: "https://res.cloudinary.com/dy20zavvv/image/upload/v1738529576/09f7a59d-3dc4-4c75-820c-25c1149f51a3_rw_1920_u4jbq9.jpg", type: "image", category: "Konser" },
      { id: 32, name: "BLIND - SOFT ANALOG", src: "https://res.cloudinary.com/dy20zavvv/image/upload/v1738529517/f706acb3-1c73-4686-bf40-12da388a2245_rw_1200_cjnnxx.jpg", type: "image", category: "Konser" },
      { id: 33, name: "BLIND - SOFT ANALOG", src: "https://res.cloudinary.com/dy20zavvv/image/upload/v1738529485/845ccd72-a59e-47da-ae6a-3e64f4a600bb_rw_1920_gjxmil.jpg", type: "image", category: "Konser" },
      { id: 34, name: "BLIND - SOFT ANALOG", src: "https://res.cloudinary.com/dy20zavvv/image/upload/v1738529580/89571c8e-d18c-4017-8895-d69ec000509e_rw_1200_xu4df8.jpg", type: "image", category: "Konser" },
      { id: 35, name: "BLIND - SOFT ANALOG", src: "https://res.cloudinary.com/dy20zavvv/image/upload/v1738529578/79081b41-67a4-40a1-9ac2-ce88e6f52587_rw_1920_qwh8di.jpg", type: "image", category: "Konser" },
      { id: 36, name: "TELLİ DAVUL", src: "https://res.cloudinary.com/dy20zavvv/image/upload/v1738528860/47ffa6f2-8ddf-4fd2-af2d-04585a5b7e57_rw_1920_m7crun.jpg", type: "image", category: "Sosyal Medya" },
      { id: 37, name: "TELLİ DAVUL", src: "https://res.cloudinary.com/dy20zavvv/image/upload/v1738528971/d48a36ef-c1b2-45fb-a572-e82c33873eb5_rw_1920_kn39zu.jpg", type: "image", category: "Sosyal Medya" },
      { id: 38, name: "TELLİ DAVUL", src: "https://res.cloudinary.com/dy20zavvv/image/upload/v1738528979/ba671171-37a4-4156-8d3c-31ade0506780_rw_1920_ssl4an.jpg", type: "image", category: "Sosyal Medya" },
      { id: 39, name: "TELLİ DAVUL", src: "https://res.cloudinary.com/dy20zavvv/image/upload/v1738528745/6c66a0f0-dd67-4c51-9e02-496db0b0f1f8_zrfjg2.jpg", type: "image", category: "Sosyal Medya" },
      { id: 40, name: "TELLİ DAVUL", src: "https://res.cloudinary.com/dy20zavvv/image/upload/v1738528974/7dd78a29-be7e-4aa1-a4ff-a78b5dd70b71_rw_1920_ry2bxo.jpg", type: "image", category: "Sosyal Medya" },
      { id: 41, name: "KOÇ MERKEZ OFİSLER", src: "https://res.cloudinary.com/dy20zavvv/image/upload/v1738527768/23bb031b-7a68-4457-8796-2cb092f1fe74_rw_1920_ls5mdt.jpg", type: "image", category: "Mİmarİ" },
      { id: 42, name: "KOÇ MERKEZ OFİSLER", src: "https://res.cloudinary.com/dy20zavvv/image/upload/v1738527769/a2cf1098-114b-4a45-86fa-393718bdc5be_rw_1920_ketw7v.jpg", type: "image", category: "Mİmarİ" },
      { id: 43, name: "KOÇ MERKEZ OFİSLER", src: "https://res.cloudinary.com/dy20zavvv/image/upload/v1738527765/fed1caa0-bb85-413d-be1b-9c60610298aa_rw_1920_zig222.jpg", type: "image", category: "Mİmarİ" },
      { id: 44, name: "KOÇ MERKEZ OFİSLER", src: "https://res.cloudinary.com/dy20zavvv/image/upload/v1738527765/fc330e9c-b319-49b4-a21e-4206e39f5662_rw_1920_sfw0jo.jpg", type: "image", category: "Mİmarİ" },
      { id: 45, name: "KOÇ MERKEZ OFİSLER", src: "https://res.cloudinary.com/dy20zavvv/image/upload/v1738527763/fcbdb953-0611-492c-a53b-6afe02c9937c_rw_1920_cydxuj.jpg", type: "image", category: "Mİmarİ" },
      { id: 46, name: "TERRADARISTA", src: "https://res.cloudinary.com/dy20zavvv/image/upload/v1738527472/cd8c6846-86f4-4b59-94c5-ce2801612976_cithgk.jpg", type: "image", category: "Ürün" },
      { id: 47, name: "TERRADARISTA", src: "https://res.cloudinary.com/dy20zavvv/image/upload/v1738527468/27866589-3508-4e64-99e6-b5eebb48493f_p0nznq.jpg", type: "image", category: "Ürün" },
      { id: 48, name: "TERRADARISTA", src: "https://res.cloudinary.com/dy20zavvv/image/upload/v1738527463/c09c0d8b-9d07-44fa-b0dc-3249ec174939_loquw8.jpg", type: "image", category: "Ürün" },
      { id: 49, name: "TERRADARISTA", src: "https://res.cloudinary.com/dy20zavvv/image/upload/v1738527461/a68ef10b-1a05-41de-88ef-d663f5db99d4_dktnvz.jpg", type: "image", category: "Ürün" },
      { id: 50, name: "TERRADARISTA", src: "https://res.cloudinary.com/dy20zavvv/image/upload/v1738527449/db8dc3de-dc5d-4899-b8eb-f37b69cd24ff_rw_1920_ku6tah.jpg", type: "image", category: "Ürün" },
      { id: 51, name: "HALİÇ SANAT", src: "https://res.cloudinary.com/dy20zavvv/image/upload/v1738528105/73f44241-220b-4e3c-bf6b-e83290037e93_bycwrz.jpg", type: "image", category: "Mİmarİ" },
      { id: 52, name: "HALİÇ SANAT", src: "https://res.cloudinary.com/dy20zavvv/image/upload/v1738529299/101f57be-4527-43e7-a021-9ad2a10d5753_rw_1920_ifm8wh.jpg", type: "image", category: "Mİmarİ" },
      { id: 53, name: "HALİÇ SANAT", src: "https://res.cloudinary.com/dy20zavvv/image/upload/v1738528097/6256f780-1b2f-40e1-af17-2cad7121c4eb_yghnjo.jpg", type: "image", category: "Mİmarİ" },


    ];


  //   "Tümü",
  // "Kutlama",
  // "Etkİnlİk",
  // "Festİval",
  // "Konser",
  // "Mİmarİ",
  // "Ürün",
  // "Sosyal Medya",
  
  export default mediaItems;