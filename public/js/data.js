const timetable = {
  weekday: [
    { time: 622, via: ['旭町', '金沢駅'] },
    { time: 627, via: ['旭町', '西金沢'] },
    { time: 633, via: ['如来寺前', '野々市車庫'] },
    { time: 638, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 643, via: ['旭町', '金沢駅'] },
    { time: 648, via: ['如来寺前', '鶴寿園'] },
    { time: 653, via: ['旭町', '西金沢'] },
    { time: 658, via: ['如来寺前', '野々市車庫'] },
    { time: 663, via: ['旭町', '金沢駅'] },
    { time: 687, via: ['旭町', '西金沢'] },
    { time: 703, via: ['旭町', '金沢駅'] },
    { time: 713, via: ['如来寺前', '野々市車庫'] },
    { time: 715, via: ['旭町', '西金沢'] },
    { time: 738, via: ['旭町', '金沢駅'] },
    { time: 748, via: ['旭町', '西金沢'] },
    { time: 755, via: ['如来寺前', '四十万'] },
    { time: 758, via: ['旭町', '金沢駅'] },
    { time: 768, via: ['如来寺前', '野々市車庫'] },
    { time: 778, via: ['旭町', '金沢駅'] },
    { time: 793, via: ['旭町', '金沢駅'] },
    { time: 807, via: ['旭町', '西金沢'] },
    { time: 813, via: ['如来寺前', '野々市車庫'] },
    { time: 833, via: ['旭町', '金沢駅'] },
    { time: 850, via: ['鈴見町', '星稜高校', '東金沢'] },
    { time: 856, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 867, via: ['旭町', '西金沢'] },
    { time: 881, via: ['旭町', '金沢駅'] },
    { time: 886, via: ['旭町', '金沢駅'] },
    { time: 893, via: ['旭町', '西金沢'] },
    { time: 895, via: ['如来寺前', '野々市車庫'] },
    { time: 898, via: ['如来寺前', '鶴寿園'] },
    { time: 903, via: ['旭町', '金沢駅'] },
    { time: 925, via: ['旭町', '西金沢'] },
    { time: 927, via: ['如来寺前', '野々市車庫'] },
    { time: 935, via: ['旭町', '西金沢'] },
    { time: 941, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 953, via: ['旭町', '西金沢'] },
    { time: 973, via: ['旭町', '田井町'] },
    { time: 978, via: ['鈴見町', '星稜高校', '東金沢'] },
    { time: 980, via: ['旭町', '西金沢'] },
    { time: 982, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 988, via: ['旭町', '金沢駅'] },
    { time: 991, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 995, via: ['如来寺前', '野々市車庫'] },
    { time: 998, via: ['旭町', '西金沢'] },
    { time: 1001, via: ['旭町', '金沢駅'] },
    { time: 1018, via: ['鈴見町', '金沢駅'] },
    { time: 1028, via: ['鈴見町', '星稜高校', '東金沢'] },
    { time: 1033, via: ['旭町', '西金沢'] },
    { time: 1043, via: ['如来寺前', '野々市車庫'] },
    { time: 1056, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 1060, via: ['旭町', '西金沢'] },
    { time: 1063, via: ['旭町', '金沢駅'] },
    { time: 1086, via: ['富本町', '金沢駅'] },
    { time: 1090, via: ['旭町', '西金沢'] },
    { time: 1093, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 1103, via: ['旭町', '金沢駅'] },
    { time: 1105, via: ['如来寺前', '野々市車庫'] },
    { time: 1115, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 1122, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 1124, via: ['鈴見町', '星稜高校', '東金沢'] },
    { time: 1127, via: ['富本町', '金沢駅'] },
    { time: 1129, via: ['如来寺前', '野々市車庫'] },
    { time: 1138, via: ['旭町', '西金沢'] },
    { time: 1161, via: ['旭町', '西金沢'] },
    { time: 1173, via: ['如来寺前', '野々市車庫'] },
    { time: 1183, via: ['旭町', '金沢駅'] },
    { time: 1192, via: ['旭町', '西金沢'] },
    { time: 1198, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 1212, via: ['旭町', '金沢駅'] },
    { time: 1223, via: ['旭町', '西金沢'] },
    { time: 1263, via: ['旭町', '金沢駅'] },
    { time: 1273, via: ['旭町', '西金沢'] },
    { time: 1302, via: ['旭町', '香林坊'] },
    { time: 1303, via: ['旭町', '金沢駅'] },
    { time: 1325, via: ['旭町', '金沢駅'] },
    { time: 1363, via: ['旭町', '香林坊'] }
  ],
  sat: [
    { time: 632, via: ['旭町', '西金沢'] },
    { time: 638, via: ['如来寺前', '野々市車庫'] },
    { time: 643, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 686, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 697, via: ['旭町', '西金沢'] },
    { time: 711, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 762, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 768, via: ['如来寺前', '野々市車庫'] },
    { time: 807, via: ['旭町', '西金沢'] },
    { time: 821, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 867, via: ['旭町', '西金沢'] },
    { time: 875, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 923, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 932, via: ['旭町', '西金沢'] },
    { time: 975, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 987, via: ['旭町', '西金沢'] },
    { time: 1023, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 1033, via: ['旭町', '金沢駅'] },
    { time: 1052, via: ['旭町', '西金沢'] },
    { time: 1068, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 1107, via: ['旭町', '西金沢'] },
    { time: 1111, via: ['旭町', '金沢駅'] },
    { time: 1121, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 1183, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 1227, via: ['旭町', '西金沢'] },
    { time: 1238, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 1303, via: ['旭町', '金沢駅'] }
  ],
  sun: [
    { time: 632, via: ['旭町', '西金沢'] },
    { time: 643, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 686, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 697, via: ['旭町', '西金沢'] },
    { time: 711, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 762, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 807, via: ['旭町', '西金沢'] },
    { time: 821, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 867, via: ['旭町', '西金沢'] },
    { time: 875, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 923, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 932, via: ['旭町', '西金沢'] },
    { time: 975, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 987, via: ['旭町', '西金沢'] },
    { time: 1023, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 1052, via: ['旭町', '西金沢'] },
    { time: 1068, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 1107, via: ['旭町', '西金沢'] },
    { time: 1121, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 1183, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 1227, via: ['旭町', '西金沢'] },
    { time: 1238, via: ['鈴見台二丁目', '金沢駅'] }
  ],
  vacation: [
    { time: 0, via: ['鈴見町', '星稜高校', '東金沢'] },
    { time: 622, via: ['旭町', '金沢駅'] },
    { time: 627, via: ['旭町', '西金沢'] },
    { time: 638, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 643, via: ['旭町', '金沢駅'] },
    { time: 648, via: ['如来寺前', '鶴寿園'] },
    { time: 653, via: ['旭町', '西金沢'] },
    { time: 663, via: ['旭町', '金沢駅'] },
    { time: 687, via: ['旭町', '西金沢'] },
    { time: 703, via: ['旭町', '金沢駅'] },
    { time: 713, via: ['如来寺前', '野々市車庫'] },
    { time: 715, via: ['旭町', '西金沢'] },
    { time: 738, via: ['旭町', '金沢駅'] },
    { time: 748, via: ['旭町', '西金沢'] },
    { time: 755, via: ['如来寺前', '四十万'] },
    { time: 758, via: ['旭町', '金沢駅'] },
    { time: 793, via: ['旭町', '金沢駅'] },
    { time: 807, via: ['旭町', '西金沢'] },
    { time: 813, via: ['如来寺前', '野々市車庫'] },
    { time: 833, via: ['旭町', '金沢駅'] },
    { time: 850, via: ['鈴見町', '星稜高校', '東金沢'] },
    { time: 856, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 867, via: ['旭町', '西金沢'] },
    { time: 893, via: ['旭町', '西金沢'] },
    { time: 895, via: ['如来寺前', '野々市車庫'] },
    { time: 898, via: ['如来寺前', '鶴寿園'] },
    { time: 903, via: ['旭町', '金沢駅'] },
    { time: 925, via: ['旭町', '西金沢'] },
    { time: 927, via: ['如来寺前', '野々市車庫'] },
    { time: 935, via: ['旭町', '西金沢'] },
    { time: 941, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 953, via: ['旭町', '西金沢'] },
    { time: 978, via: ['鈴見町', '星稜高校', '東金沢'] },
    { time: 980, via: ['旭町', '西金沢'] },
    { time: 982, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 991, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 998, via: ['旭町', '西金沢'] },
    { time: 1001, via: ['旭町', '金沢駅'] },
    { time: 1018, via: ['鈴見町', '金沢駅'] },
    { time: 1028, via: ['鈴見町', '星稜高校', '東金沢'] },
    { time: 1033, via: ['旭町', '西金沢'] },
    { time: 1043, via: ['如来寺前', '野々市車庫'] },
    { time: 1056, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 1060, via: ['旭町', '西金沢'] },
    { time: 1063, via: ['旭町', '金沢駅'] },
    { time: 1086, via: ['富本町', '金沢駅'] },
    { time: 1090, via: ['旭町', '西金沢'] },
    { time: 1093, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 1103, via: ['旭町', '金沢駅'] },
    { time: 1115, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 1122, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 1124, via: ['鈴見町', '星稜高校', '東金沢'] },
    { time: 1127, via: ['富本町', '金沢駅'] },
    { time: 1129, via: ['如来寺前', '野々市車庫'] },
    { time: 1138, via: ['旭町', '西金沢'] },
    { time: 1161, via: ['旭町', '西金沢'] },
    { time: 1183, via: ['旭町', '金沢駅'] },
    { time: 1192, via: ['旭町', '西金沢'] },
    { time: 1198, via: ['鈴見台二丁目', '金沢駅'] },
    { time: 1212, via: ['旭町', '金沢駅'] },
    { time: 1223, via: ['旭町', '西金沢'] },
    { time: 1263, via: ['旭町', '金沢駅'] },
    { time: 1273, via: ['旭町', '西金沢'] },
    { time: 1302, via: ['旭町', '香林坊'] },
    { time: 1303, via: ['旭町', '金沢駅'] },
    { time: 1325, via: ['旭町', '金沢駅'] },
    { time: 1363, via: ['旭町', '香林坊'] }
  ]
}
const english={ '金沢駅': 'Kanazawa Sta.',
  '西金沢': 'West Kanazawa Sta.',
  '東金沢': 'East Kanazawa Sta.',
  '旭町': 'Asahi-machi',
  '若松': 'Wakamatsu',
  '野々市車庫': 'Nonoichi-Shako',
  '如来寺前': 'Nyorai-ji',
  '鶴寿園': 'Kakujuen',
  '鈴見町': 'Suzumi-machi',
  '田井町': 'Tayi-machi',
  '香林坊': 'Korinbo',
  '富本町': 'Tomimoto-cho',
  '四十万': 'Shijima',
  '鈴見台二丁目' : 'Suzumidai(2)',
  '星稜高校': 'Seiryo HighSchool' }
