const campings = [
  {
    id: 1,
    type: "Hospital",
    name: "Hospital Alor Gajah",
    description: "Jalan Paya Datok / Simpang, 78000 Alor Gajah, Melaka",
    image:
      "https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130",
    latlng: {
      latitude: 2.3955491,
      longitude: 102.20065
    }
  },
  {
    id: 2,
    type: "Hospital",
    name: "Hospital Ampang",
    description:
      "Jalan Mewah, Lebuhraya Utara - Selatan, Pandan Indah, 68000 Ampang, Selangor",
    image:
      "https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130",
    latlng: {
      latitude: 3.1284321,
      longitude: 101.7611499
    }
  },
  {
    id: 3,
    type: "Hospital",
    name: "Hospital Balik Pulau",
    description: "Jalan Balik Pulau, 11000 Balik Pulau, Pulau Pinang",
    image:
      "https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130",
    latlng: {
      latitude: 5.3498148,
      longitude: 100.2332831
    }
  },
  {
    id: 4,
    type: "Hospital",
    name: "Hospital Baling",
    description: "Baling, 09100 Baling, Kedah",
    image:
      "https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130",
    latlng: {
      latitude: 5.6779471,
      longitude: 100.9234647
    }
  },
  {
    id: 5,
    type: "Hospital",
    name: "Hospital Banting",
    description: "Jalan Sultan Alam Shah, 42700 Banting, Selangor",
    image:
      "https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130",
    latlng: {
      latitude: 2.8033724,
      longitude: 101.4902543
    }
  },
  {
    id: 6,
    type: "Hospital",
    name: "Hospital Tuanku Fauziah, Kangar",
    description:
      "Jalan Tun Abdul Razak, Pusat Bandar Kangar, 01000 Kangar, Perlis",
    image:
      "https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130",
    latlng: {
      latitude: 6.4410692,
      longitude: 100.1891565
    }
  },
  {
    id: 7,
    type: "Hospital",
    name: "Hospital Pulau Pinang",
    description: "Jalan Residensi, 10990 George Town, Pulau Pinang",
    image:
      "https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130",
    latlng: {
      latitude: 5.3751367,
      longitude: 100.2759803
    }
  },
  {
    id: 8,
    type: "Hospital",
    name: "Hospital Seberang Jaya",
    description: "13700 Perai, Pulau Pinang",
    image:
      "https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130",
    latlng: {
      latitude: 5.3943288,
      longitude: 100.4054128
    }
  },
  {
    id: 9,
    type: "Hospital",
    name: "Hospital Pekan",
    description: "Jalan Batu Balik, Kampung Mengkasar, 26600 Pekan, Pahang",
    image:
      "https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130",
    latlng: {
      latitude: 3.5014383,
      longitude: 103.3761795
    }
  },
  {
    id: 10,
    type: "Hospital",
    name: "Hospital Sultanah Hajjah Kalsom",
    description: "Tanah Rata, 39000 Tanah Rata, Pahang",
    image:
      "https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130",
    latlng: {
      latitude: 4.4668073,
      longitude: 101.3891416
    }
  },
  {
    id: 11,
    type: "Hospital",
    name: "Hospital Sultanah Nur Zahirah",
    description: "Jalan Sultan Mahmud, 20400 Kuala Terengganu, Terengganu",
    image:
      "https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130",
    latlng: {
      latitude: 5.3251488,
      longitude: 103.1494314
    }
  },
  {
    id: 12,
    type: "Hospital",
    name: "Hospital Kemaman",
    description: "Jalan Da' Omar, Cukai, 24000 Kemaman, Terengganu",
    image:
      "https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130",
    latlng: {
      latitude: 4.2318968,
      longitude: 103.4179544
    }
  },
  {
    id: 13,
    type: "Hospital",
    name: "Hospital Besar Kuala Lumpur",
    description:
      "Institute of Paediatrics, Jalan Pahang, Wilayah Persekutuan, 50586 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",
    image:
      "https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130",
    latlng: {
      latitude: 3.1485479,
      longitude: 101.6681021
    }
  },
  {
    id: 14,
    type: "Hospital",
    name: "Hospital Putrajaya",
    description:
      "Jalan P9, Presint 7, 62250 Putrajaya, Wilayah Persekutuan Putrajaya",
    image:
      "https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130",
    latlng: {
      latitude: 2.929161,
      longitude: 101.6720383
    }
  },
  {
    id: 15,
    type: "Hospital",
    name: "Hospital WP Labuan",
    description:
      "Peti Surat 81006 Labuan, WP Labuan, 87000 Labuan, Wilayah Persekutuan Labuan",
    image:
      "https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130",
    latlng: {
      latitude: 5.3114717,
      longitude: 115.2282042
    }
  },
  {
    id: 16,
    type: "Hospital",
    name: "Hospital Kuala Kangsar",
    description:
      "1648, Jalan Sultan Idris Shah 1, Taman Mawar, 33000 Kuala Kangsar, Negeri Perak",
    image:
      "https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130",
    latlng: {
      latitude: 4.7730711,
      longitude: 100.9297794
    }
  },
  {
    id: 17,
    type: "Hospital",
    name: "Hospital Raja Permaisuri Bainun, Ipoh",
    description: "Jalan Raja Ashman Shah, 30450 Ipoh, Negeri Perak",
    image:
      "https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130",
    latlng: {
      latitude: 4.6034417,
      longitude: 101.0886272
    }
  },
  {
    id: 18,
    type: "Hospital",
    name: "Hospital Raja Perempuan Zainab II",
    description:
      "15586, Jalan Hospital, Bandar Kota Bharu, 15200 Kota Bharu, Kelantan",
    image:
      "https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130",
    latlng: {
      latitude: 6.1250056,
      longitude: 102.2438683
    }
  },
  {
    id: 19,
    type: "Hospital",
    name: "Hospital Pakar Kuala Krai",
    description: "18000 Kuala Krai, Kelantan",
    image:
      "https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130",
    latlng: {
      latitude: 5.4982176,
      longitude: 102.2207478
    }
  },
  {
    id: 20,
    type: "Hospital",
    name: "Hospital Rajah Charles Brooke Memorial",
    description:
      "Batu 13, Jalan Puncak Borneo, Kota Padawan, 93250, Kuching, Sarawak",
    image:
      "https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130",
    latlng: {
      latitude: 1.3890058,
      longitude: 110.3202691
    }
  },
  {
    id: 21,
    type: "Hospital",
    name: "Hospital Umum Sarawak",
    description: "Jalan Hospital, 93586 Kuching, Sarawak",
    image:
      "https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130",
    latlng: {
      latitude: 1.5436323,
      longitude: 110.3374198
    }
  },
  {
    id: 22,
    type: "Hospital",
    name: "Hospital Beaufort, Sabah",
    description:
      "Hospital Beaufort, Peti Surat 40, Beaufort, 89807, Beaufort, Sabah",
    image:
      "https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130",
    latlng: {
      latitude: 5.351419,
      longitude: 115.7388032
    }
  },
  {
    id: 23,
    type: "Hospital",
    name: "Hospital Kinabatangan",
    description: "W.D.T 200 Kinabatangan,, 90200 Kinabatangan, Sabah",
    image:
      "https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130",
    latlng: {
      latitude: 5.5849683,
      longitude: 117.8482292
    }
  },
  {
    id: 24,
    type: "Hospital",
    name: "Hospital Melaka",
    description: "Jalan Mufti Haji Khalil, 75400 Melaka",
    image:
      "https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130",
    latlng: {
      latitude: 2.2033515,
      longitude: 102.2477892
    }
  },
  {
    id: 25,
    type: "Hospital",
    name: "Hospital Tuanku Ampuan Najihah, Kuala Pilah",
    description:
      "KM 3, Jalan Melang, Kampung Gemelang, 72000 Kuala Pilah, Negeri Sembilan",
    image:
      "https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130",
    latlng: {
      latitude: 2.7331216,
      longitude: 102.2294153
    }
  },
  {
    id: 26,
    type: "Hospital",
    name: "Hospital Tuanku Ja'afar, Seremban",
    description: "Jalan Rasah, Bukit Rasah, 70300 Seremban, Negeri Sembilan",
    image:
      "https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130",
    latlng: {
      latitude: 2.7090607,
      longitude: 101.9413734
    }
  },
  {
    id: 27,
    type: "Hospital",
    name: "Hospital Banting",
    description: "Jalan Sultan Alam Shah, 42700 Banting, Selangor",
    image:
      "https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130",
    latlng: {
      latitude: 2.8033778,
      longitude: 101.4902543
    }
  },
  {
    id: 28,
    type: "Hospital",
    name: "Hospital Serdang",
    description: "Jalan Puchong, 43000 Kajang, Selangor",
    image:
      "https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130",
    latlng: {
      latitude: 2.9762964,
      longitude: 101.7180774
    }
  },
  {
    id: 29,
    type: "Hospital",
    name: "Hospital Tangkak",
    description: "Kampung Padang Lalang, 84900 Tangkak, Johor",
    image:
      "https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130",
    latlng: {
      latitude: 2.2712775,
      longitude: 102.545183
    }
  },
  {
    id: 30,
    type: "Hospital",
    name: "Hospital Temenggong Seri Maharaja Tun Ibrahim, Kulai",
    description: "Lebuhraya Senai, 81000 Kulai, Johor",
    image:
      "https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130",
    latlng: {
      latitude: 1.6392096,
      longitude: 103.620065
    }
  },
  {
    id: 31,
    type: "Hospital",
    name: "Hospital Sultan Abdul Halim, Sungai Petani",
    description:
      "Jalan Lencongan Timur, Bandar Amanjaya, 08000 Sungai Petani, Kedah",
    image:
      "https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130",
    latlng: {
      latitude: 5.669587,
      longitude: 100.5152259
    }
  },
  {
    id: 32,
    type: "Hospital",
    name: "Hospital Sultanah Bahiyah",
    description:
      "Km 6, Jalan Langgar, Bandar Alor Setar, 05460 Alor Setar, Kedah",
    image:
      "https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130",
    latlng: {
      latitude: 6.1488298,
      longitude: 100.4041848
    }
  }
];

export { campings };
