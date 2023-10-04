export const imgPath = (kodeCuaca: string, idx: number) => {
  const cerahAM = 'https://i.ibb.co/9nW55J9/cerah-am.png';
  const cerahPM = 'https://i.ibb.co/1Mw6T2N/cerah-pm.png';
  const cerahBerawanAM = 'https://i.ibb.co/9VVYNQv/cerahberawan-am.png';
  const cerahberawanPM = 'https://i.ibb.co/2KyzhfJ/cerahberawan-pm.png';
  const berawan = 'https://i.ibb.co/DQ1jhd4/berawan.png';
  const berawanTebal = 'https://i.ibb.co/HnN0Tq3/berawan-tebal.png';
  const asap = 'https://i.ibb.co/mCXMjgG/asap.png';
  const kabutAM = 'https://i.ibb.co/7V2TyfS/kabut-am.png';
  const kabutPM = 'https://i.ibb.co/vPk5bjh/kabut-pm.png';
  const hujanRingan = 'https://i.ibb.co/s2ZYgm1/hujan-ringan.png';
  const hujanSedang = 'https://i.ibb.co/XJjDH65/hujan-sedang.png';
  const hujanLebat = 'https://i.ibb.co/bmgjspB/hujan-lebat.png';
  const hujanLokalAM = 'https://i.ibb.co/jL3jRy7/hujanlokal-am.png';
  const hujanLokalPM = 'https://i.ibb.co/DwQXvwZ/hujanlokal-pm.png';
  const hujanPetir = 'https://i.ibb.co/FgRVqN1/hujan-petir.png';

  switch (kodeCuaca) {
    case '0':
      if (idx <= 1) return cerahAM;
      return cerahPM;
    case '1':
      if (idx <= 1) return cerahBerawanAM;
      return cerahberawanPM;
    case '2':
      if (idx <= 1) return cerahBerawanAM;
      return cerahberawanPM;
    case '3':
      return berawan;
    case '4':
      return berawanTebal;
    case '5':
      return asap;
    case '10':
      return asap;
    case '45':
      if (idx <= 1) return kabutAM;
      return kabutPM;
    case '60':
      return hujanRingan;
    case '61':
      return hujanSedang;
    case '63':
      return hujanLebat;
    case '80':
      if (idx <= 1) return hujanLokalAM;
      return hujanLokalPM;
    case '95':
      return hujanPetir;
    case '97':
      return hujanPetir;
    default:
      return cerahAM;
  }
};

export const getProvURL = (id: number) => {
  switch (id) {
    case 11:
      return '/aceh';
    case 12:
      return '/sumatera-utara';
    case 13:
      return '/sumatera-barat';
    case 14:
      return '/riau';
    case 15:
      return '/jambi';
    case 16:
      return '/sumatera-selatan';
    case 17:
      return '/bengkulu';
    case 18:
      return '/lampung';
    case 19:
      return '/bangka-belitung';
    case 21:
      return '/kepulauan-riau';
    case 31:
      return '/jakarta';
    case 32:
      return '/jawa-barat';
    case 33:
      return '/jawa-tengah';
    case 34:
      return '/yogyakarta';
    case 35:
      return '/jawa-timur';
    case 36:
      return '/banten';
    case 51:
      return '/bali';
    case 52:
      return '/nusa-tenggara-barat';
    case 53:
      return '/nusa-tenggara-timur';
    case 61:
      return '/kalimantan-barat';
    case 62:
      return '/kalimantan-tengah';
    case 63:
      return '/kalimantan-selatan';
    case 64:
      return '/kalimantan-timur';
    case 65:
      return '/kalimantan-utara';
    case 71:
      return '/sulawesi-utara';
    case 72:
      return '/sulawesi-tengah';
    case 73:
      return '/sulawesi-selatan';
    case 74:
      return '/sulawesi-tenggara';
    case 75:
      return '/gorontalo';
    case 76:
      return '/sulawesi-barat';
    case 81:
      return '/maluku';
    case 82:
      return '/maluku-utara';
    case 91:
      return '/papua-barat';
    case 94:
      return '/papua';
    default:
      return '/aceh';
  }
};
