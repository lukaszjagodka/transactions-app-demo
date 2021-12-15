/* eslint-disable import/prefer-default-export */

type CurrenceObj = {
  currencyName: string,
  currencySymbol?: string,
  id: string,
}

interface CurrencesObjects {
  [key: string]: CurrenceObj;
}

export const initialCurrencesObjects: CurrencesObjects = {
  ALL: {
    currencyName: 'Albanian Lek',
    currencySymbol: 'Lek',
    id: 'ALL',
  },
  XCD: {
    currencyName: 'East Caribbean Dollar',
    currencySymbol: '$',
    id: 'XCD',
  },
  EUR: {
    currencyName: 'Euro',
    currencySymbol: '€',
    id: 'EUR',
  },
  BBD: {
    currencyName: 'Barbadian Dollar',
    currencySymbol: '$',
    id: 'BBD',
  },
  BTN: {
    currencyName: 'Bhutanese Ngultrum',
    id: 'BTN',
  },
  BND: {
    currencyName: 'Brunei Dollar',
    currencySymbol: '$',
    id: 'BND',
  },
  XAF: {
    currencyName: 'Central African CFA Franc',
    id: 'XAF',
  },
  CUP: {
    currencyName: 'Cuban Peso',
    currencySymbol: '$',
    id: 'CUP',
  },
  USD: {
    currencyName: 'United States Dollar',
    currencySymbol: '$',
    id: 'USD',
  },
  FKP: {
    currencyName: 'Falkland Islands Pound',
    currencySymbol: '£',
    id: 'FKP',
  },
  GIP: {
    currencyName: 'Gibraltar Pound',
    currencySymbol: '£',
    id: 'GIP',
  },
  HUF: {
    currencyName: 'Hungarian Forint',
    currencySymbol: 'Ft',
    id: 'HUF',
  },
  IRR: {
    currencyName: 'Iranian Rial',
    currencySymbol: '﷼',
    id: 'IRR',
  },
  JMD: {
    currencyName: 'Jamaican Dollar',
    currencySymbol: 'J$',
    id: 'JMD',
  },
  AUD: {
    currencyName: 'Australian Dollar',
    currencySymbol: '$',
    id: 'AUD',
  },
  LAK: {
    currencyName: 'Lao Kip',
    currencySymbol: '₭',
    id: 'LAK',
  },
  LYD: {
    currencyName: 'Libyan Dinar',
    id: 'LYD',
  },
  MKD: {
    currencyName: 'Macedonian Denar',
    currencySymbol: 'ден',
    id: 'MKD',
  },
  XOF: {
    currencyName: 'West African CFA Franc',
    id: 'XOF',
  },
  NZD: {
    currencyName: 'New Zealand Dollar',
    currencySymbol: '$',
    id: 'NZD',
  },
  OMR: {
    currencyName: 'Omani Rial',
    currencySymbol: '﷼',
    id: 'OMR',
  },
  PGK: {
    currencyName: 'Papua New Guinean Kina',
    id: 'PGK',
  },
  RWF: {
    currencyName: 'Rwandan Franc',
    id: 'RWF',
  },
  WST: {
    currencyName: 'Samoan Tala',
    id: 'WST',
  },
  RSD: {
    currencyName: 'Serbian Dinar',
    currencySymbol: 'Дин.',
    id: 'RSD',
  },
  SEK: {
    currencyName: 'Swedish Krona',
    currencySymbol: 'kr',
    id: 'SEK',
  },
  TZS: {
    currencyName: 'Tanzanian Shilling',
    currencySymbol: 'TSh',
    id: 'TZS',
  },
  AMD: {
    currencyName: 'Armenian Dram',
    id: 'AMD',
  },
  BSD: {
    currencyName: 'Bahamian Dollar',
    currencySymbol: '$',
    id: 'BSD',
  },
  BAM: {
    currencyName: 'Bosnia And Herzegovina Konvertibilna Marka',
    currencySymbol: 'KM',
    id: 'BAM',
  },
  CVE: {
    currencyName: 'Cape Verdean Escudo',
    id: 'CVE',
  },
  CNY: {
    currencyName: 'Chinese Yuan',
    currencySymbol: '¥',
    id: 'CNY',
  },
  CRC: {
    currencyName: 'Costa Rican Colon',
    currencySymbol: '₡',
    id: 'CRC',
  },
  CZK: {
    currencyName: 'Czech Koruna',
    currencySymbol: 'Kč',
    id: 'CZK',
  },
  ERN: {
    currencyName: 'Eritrean Nakfa',
    id: 'ERN',
  },
  GEL: {
    currencyName: 'Georgian Lari',
    id: 'GEL',
  },
  HTG: {
    currencyName: 'Haitian Gourde',
    id: 'HTG',
  },
  INR: {
    currencyName: 'Indian Rupee',
    currencySymbol: '₹',
    id: 'INR',
  },
  JOD: {
    currencyName: 'Jordanian Dinar',
    id: 'JOD',
  },
  KRW: {
    currencyName: 'South Korean Won',
    currencySymbol: '₩',
    id: 'KRW',
  },
  LBP: {
    currencyName: 'Lebanese Lira',
    currencySymbol: '£',
    id: 'LBP',
  },
  MWK: {
    currencyName: 'Malawian Kwacha',
    id: 'MWK',
  },
  MRO: {
    currencyName: 'Mauritanian Ouguiya',
    id: 'MRO',
  },
  MZN: {
    currencyName: 'Mozambican Metical',
    id: 'MZN',
  },
  ANG: {
    currencyName: 'Netherlands Antillean Gulden',
    currencySymbol: 'ƒ',
    id: 'ANG',
  },
  PEN: {
    currencyName: 'Peruvian Nuevo Sol',
    currencySymbol: 'S/.',
    id: 'PEN',
  },
  QAR: {
    currencyName: 'Qatari Riyal',
    currencySymbol: '﷼',
    id: 'QAR',
  },
  STD: {
    currencyName: 'Sao Tome And Principe Dobra',
    id: 'STD',
  },
  SLL: {
    currencyName: 'Sierra Leonean Leone',
    id: 'SLL',
  },
  SOS: {
    currencyName: 'Somali Shilling',
    currencySymbol: 'S',
    id: 'SOS',
  },
  SDG: {
    currencyName: 'Sudanese Pound',
    id: 'SDG',
  },
  SYP: {
    currencyName: 'Syrian Pound',
    currencySymbol: '£',
    id: 'SYP',
  },
  AOA: {
    currencyName: 'Angolan Kwanza',
    id: 'AOA',
  },
  AWG: {
    currencyName: 'Aruban Florin',
    currencySymbol: 'ƒ',
    id: 'AWG',
  },
  BHD: {
    currencyName: 'Bahraini Dinar',
    id: 'BHD',
  },
  BZD: {
    currencyName: 'Belize Dollar',
    currencySymbol: 'BZ$',
    id: 'BZD',
  },
  BWP: {
    currencyName: 'Botswana Pula',
    currencySymbol: 'P',
    id: 'BWP',
  },
  BIF: {
    currencyName: 'Burundi Franc',
    id: 'BIF',
  },
  KYD: {
    currencyName: 'Cayman Islands Dollar',
    currencySymbol: '$',
    id: 'KYD',
  },
  COP: {
    currencyName: 'Colombian Peso',
    currencySymbol: '$',
    id: 'COP',
  },
  DKK: {
    currencyName: 'Danish Krone',
    currencySymbol: 'kr',
    id: 'DKK',
  },
  GTQ: {
    currencyName: 'Guatemalan Quetzal',
    currencySymbol: 'Q',
    id: 'GTQ',
  },
  HNL: {
    currencyName: 'Honduran Lempira',
    currencySymbol: 'L',
    id: 'HNL',
  },
  IDR: {
    currencyName: 'Indonesian Rupiah',
    currencySymbol: 'Rp',
    id: 'IDR',
  },
  ILS: {
    currencyName: 'Israeli New Sheqel',
    currencySymbol: '₪',
    id: 'ILS',
  },
  KZT: {
    currencyName: 'Kazakhstani Tenge',
    currencySymbol: 'лв',
    id: 'KZT',
  },
  KWD: {
    currencyName: 'Kuwaiti Dinar',
    id: 'KWD',
  },
  LSL: {
    currencyName: 'Lesotho Loti',
    id: 'LSL',
  },
  MYR: {
    currencyName: 'Malaysian Ringgit',
    currencySymbol: 'RM',
    id: 'MYR',
  },
  MUR: {
    currencyName: 'Mauritian Rupee',
    currencySymbol: '₨',
    id: 'MUR',
  },
  MNT: {
    currencyName: 'Mongolian Tugrik',
    currencySymbol: '₮',
    id: 'MNT',
  },
  MMK: {
    currencyName: 'Myanma Kyat',
    id: 'MMK',
  },
  NGN: {
    currencyName: 'Nigerian Naira',
    currencySymbol: '₦',
    id: 'NGN',
  },
  PAB: {
    currencyName: 'Panamanian Balboa',
    currencySymbol: 'B/.',
    id: 'PAB',
  },
  PHP: {
    currencyName: 'Philippine Peso',
    currencySymbol: '₱',
    id: 'PHP',
  },
  RON: {
    currencyName: 'Romanian Leu',
    currencySymbol: 'lei',
    id: 'RON',
  },
  SAR: {
    currencyName: 'Saudi Riyal',
    currencySymbol: '﷼',
    id: 'SAR',
  },
  SGD: {
    currencyName: 'Singapore Dollar',
    currencySymbol: '$',
    id: 'SGD',
  },
  ZAR: {
    currencyName: 'South African Rand',
    currencySymbol: 'R',
    id: 'ZAR',
  },
  SRD: {
    currencyName: 'Surinamese Dollar',
    currencySymbol: '$',
    id: 'SRD',
  },
  TWD: {
    currencyName: 'New Taiwan Dollar',
    currencySymbol: 'NT$',
    id: 'TWD',
  },
  TOP: {
    currencyName: 'Paanga',
    id: 'TOP',
  },
  VEF: {
    currencyName: 'Venezuelan Bolivar',
    id: 'VEF',
  },
  DZD: {
    currencyName: 'Algerian Dinar',
    id: 'DZD',
  },
  ARS: {
    currencyName: 'Argentine Peso',
    currencySymbol: '$',
    id: 'ARS',
  },
  AZN: {
    currencyName: 'Azerbaijani Manat',
    currencySymbol: 'ман',
    id: 'AZN',
  },
  BYR: {
    currencyName: 'Belarusian Ruble',
    currencySymbol: 'p.',
    id: 'BYR',
  },
  BOB: {
    currencyName: 'Bolivian Boliviano',
    currencySymbol: '$b',
    id: 'BOB',
  },
  BGN: {
    currencyName: 'Bulgarian Lev',
    currencySymbol: 'лв',
    id: 'BGN',
  },
  CAD: {
    currencyName: 'Canadian Dollar',
    currencySymbol: '$',
    id: 'CAD',
  },
  CLP: {
    currencyName: 'Chilean Peso',
    currencySymbol: '$',
    id: 'CLP',
  },
  CDF: {
    currencyName: 'Congolese Franc',
    id: 'CDF',
  },
  DOP: {
    currencyName: 'Dominican Peso',
    currencySymbol: 'RD$',
    id: 'DOP',
  },
  FJD: {
    currencyName: 'Fijian Dollar',
    currencySymbol: '$',
    id: 'FJD',
  },
  GMD: {
    currencyName: 'Gambian Dalasi',
    id: 'GMD',
  },
  GYD: {
    currencyName: 'Guyanese Dollar',
    currencySymbol: '$',
    id: 'GYD',
  },
  ISK: {
    currencyName: 'Icelandic Króna',
    currencySymbol: 'kr',
    id: 'ISK',
  },
  IQD: {
    currencyName: 'Iraqi Dinar',
    id: 'IQD',
  },
  JPY: {
    currencyName: 'Japanese Yen',
    currencySymbol: '¥',
    id: 'JPY',
  },
  KPW: {
    currencyName: 'North Korean Won',
    currencySymbol: '₩',
    id: 'KPW',
  },
  LVL: {
    currencyName: 'Latvian Lats',
    currencySymbol: 'Ls',
    id: 'LVL',
  },
  CHF: {
    currencyName: 'Swiss Franc',
    currencySymbol: 'Fr.',
    id: 'CHF',
  },
  MGA: {
    currencyName: 'Malagasy Ariary',
    id: 'MGA',
  },
  MDL: {
    currencyName: 'Moldovan Leu',
    id: 'MDL',
  },
  MAD: {
    currencyName: 'Moroccan Dirham',
    id: 'MAD',
  },
  NPR: {
    currencyName: 'Nepalese Rupee',
    currencySymbol: '₨',
    id: 'NPR',
  },
  NIO: {
    currencyName: 'Nicaraguan Cordoba',
    currencySymbol: 'C$',
    id: 'NIO',
  },
  PKR: {
    currencyName: 'Pakistani Rupee',
    currencySymbol: '₨',
    id: 'PKR',
  },
  PYG: {
    currencyName: 'Paraguayan Guarani',
    currencySymbol: 'Gs',
    id: 'PYG',
  },
  SHP: {
    currencyName: 'Saint Helena Pound',
    currencySymbol: '£',
    id: 'SHP',
  },
  SCR: {
    currencyName: 'Seychellois Rupee',
    currencySymbol: '₨',
    id: 'SCR',
  },
  SBD: {
    currencyName: 'Solomon Islands Dollar',
    currencySymbol: '$',
    id: 'SBD',
  },
  LKR: {
    currencyName: 'Sri Lankan Rupee',
    currencySymbol: '₨',
    id: 'LKR',
  },
  THB: {
    currencyName: 'Thai Baht',
    currencySymbol: '฿',
    id: 'THB',
  },
  TRY: {
    currencyName: 'Turkish New Lira',
    id: 'TRY',
  },
  AED: {
    currencyName: 'UAE Dirham',
    id: 'AED',
  },
  VUV: {
    currencyName: 'Vanuatu Vatu',
    id: 'VUV',
  },
  YER: {
    currencyName: 'Yemeni Rial',
    currencySymbol: '﷼',
    id: 'YER',
  },
  AFN: {
    currencyName: 'Afghan Afghani',
    currencySymbol: '؋',
    id: 'AFN',
  },
  BDT: {
    currencyName: 'Bangladeshi Taka',
    id: 'BDT',
  },
  BRL: {
    currencyName: 'Brazilian Real',
    currencySymbol: 'R$',
    id: 'BRL',
  },
  KHR: {
    currencyName: 'Cambodian Riel',
    currencySymbol: '៛',
    id: 'KHR',
  },
  KMF: {
    currencyName: 'Comorian Franc',
    id: 'KMF',
  },
  HRK: {
    currencyName: 'Croatian Kuna',
    currencySymbol: 'kn',
    id: 'HRK',
  },
  DJF: {
    currencyName: 'Djiboutian Franc',
    id: 'DJF',
  },
  EGP: {
    currencyName: 'Egyptian Pound',
    currencySymbol: '£',
    id: 'EGP',
  },
  ETB: {
    currencyName: 'Ethiopian Birr',
    id: 'ETB',
  },
  XPF: {
    currencyName: 'CFP Franc',
    id: 'XPF',
  },
  GHS: {
    currencyName: 'Ghanaian Cedi',
    id: 'GHS',
  },
  GNF: {
    currencyName: 'Guinean Franc',
    id: 'GNF',
  },
  HKD: {
    currencyName: 'Hong Kong Dollar',
    currencySymbol: '$',
    id: 'HKD',
  },
  XDR: {
    currencyName: 'Special Drawing Rights',
    id: 'XDR',
  },
  KES: {
    currencyName: 'Kenyan Shilling',
    currencySymbol: 'KSh',
    id: 'KES',
  },
  KGS: {
    currencyName: 'Kyrgyzstani Som',
    currencySymbol: 'лв',
    id: 'KGS',
  },
  LRD: {
    currencyName: 'Liberian Dollar',
    currencySymbol: '$',
    id: 'LRD',
  },
  MOP: {
    currencyName: 'Macanese Pataca',
    id: 'MOP',
  },
  MVR: {
    currencyName: 'Maldivian Rufiyaa',
    id: 'MVR',
  },
  MXN: {
    currencyName: 'Mexican Peso',
    currencySymbol: '$',
    id: 'MXN',
  },
  NAD: {
    currencyName: 'Namibian Dollar',
    currencySymbol: '$',
    id: 'NAD',
  },
  NOK: {
    currencyName: 'Norwegian Krone',
    currencySymbol: 'kr',
    id: 'NOK',
  },
  PLN: {
    currencyName: 'Polish Zloty',
    currencySymbol: 'zł',
    id: 'PLN',
  },
  RUB: {
    currencyName: 'Russian Ruble',
    currencySymbol: 'руб',
    id: 'RUB',
  },
  SZL: {
    currencyName: 'Swazi Lilangeni',
    id: 'SZL',
  },
  TJS: {
    currencyName: 'Tajikistani Somoni',
    id: 'TJS',
  },
  TTD: {
    currencyName: 'Trinidad and Tobago Dollar',
    currencySymbol: 'TT$',
    id: 'TTD',
  },
  UGX: {
    currencyName: 'Ugandan Shilling',
    currencySymbol: 'USh',
    id: 'UGX',
  },
  UYU: {
    currencyName: 'Uruguayan Peso',
    currencySymbol: '$U',
    id: 'UYU',
  },
  VND: {
    currencyName: 'Vietnamese Dong',
    currencySymbol: '₫',
    id: 'VND',
  },
  TND: {
    currencyName: 'Tunisian Dinar',
    id: 'TND',
  },
  UAH: {
    currencyName: 'Ukrainian Hryvnia',
    currencySymbol: '₴',
    id: 'UAH',
  },
  UZS: {
    currencyName: 'Uzbekistani Som',
    currencySymbol: 'лв',
    id: 'UZS',
  },
  TMT: {
    currencyName: 'Turkmenistan Manat',
    id: 'TMT',
  },
  GBP: {
    currencyName: 'British Pound',
    currencySymbol: '£',
    id: 'GBP',
  },
  ZMW: {
    currencyName: 'Zambian Kwacha',
    id: 'ZMW',
  },
  BTC: {
    currencyName: 'Bitcoin',
    currencySymbol: 'BTC',
    id: 'BTC',
  },
  BYN: {
    currencyName: 'New Belarusian Ruble',
    currencySymbol: 'p.',
    id: 'BYN',
  },
  BMD: {
    currencyName: 'Bermudan Dollar',
    id: 'BMD',
  },
  GGP: {
    currencyName: 'Guernsey Pound',
    id: 'GGP',
  },
  CLF: {
    currencyName: 'Chilean Unit Of Account',
    id: 'CLF',
  },
  CUC: {
    currencyName: 'Cuban Convertible Peso',
    id: 'CUC',
  },
  IMP: {
    currencyName: 'Manx pound',
    id: 'IMP',
  },
  JEP: {
    currencyName: 'Jersey Pound',
    id: 'JEP',
  },
  SVC: {
    currencyName: 'Salvadoran Colón',
    id: 'SVC',
  },
  ZMK: {
    currencyName: 'Old Zambian Kwacha',
    id: 'ZMK',
  },
  XAG: {
    currencyName: 'Silver (troy ounce)',
    id: 'XAG',
  },
  ZWL: {
    currencyName: 'Zimbabwean Dollar',
    id: 'ZWL',
  },
};

type currnesId = Array<string>

export const initialCurrencesId: currnesId = [
  'PLN',
  'EUR',
  'ALL',
  'XCD',
  'USD',
  'BBD',
  'BTN',
  'BND',
  'XAF',
  'CUP',
  'FKP',
  'GIP',
  'HUF',
  'IRR',
  'JMD',
  'AUD',
  'LAK',
  'LYD',
  'MKD',
  'XOF',
  'NZD',
  'OMR',
  'PGK',
  'RWF',
  'WST',
  'RSD',
  'SEK',
  'TZS',
  'AMD',
  'BSD',
  'BAM',
  'CVE',
  'CNY',
  'CRC',
  'CZK',
  // 'ERN',
  // 'GEL',
  // 'HTG',
  // 'INR',
  // 'JOD',
  // 'KRW',
  // 'LBP',
  // 'MWK',
  // 'MRO',
  // 'MZN',
  // 'ANG',
  // 'PEN',
  // 'QAR',
  // 'STD',
  // 'SLL',
  // 'SOS',
  // 'SDG',
  // 'SYP',
  // 'AOA',
  // 'AWG',
  // 'BHD',
  // 'BZD',
  // 'BWP',
  // 'BIF',
  // 'KYD',
  // 'COP',
  // 'DKK',
  // 'GTQ',
  // 'HNL',
  // 'IDR',
  // 'ILS',
  // 'KZT',
  // 'KWD',
  // 'LSL',
  // 'MYR',
  // 'MUR',
  // 'MNT',
  // 'MMK',
  // 'NGN',
  // 'PAB',
  // 'PHP',
  // 'RON',
  // 'SAR',
  // 'SGD',
  // 'ZAR',
  // 'SRD',
  // 'TWD',
  // 'TOP',
  // 'VEF',
  // 'DZD',
  // 'ARS',
  // 'AZN',
  // 'BYR',
  // 'BOB',
  // 'BGN',
  // 'CAD',
  // 'CLP',
  // 'CDF',
  // 'DOP',
  // 'FJD',
  // 'GMD',
  // 'GYD',
  // 'ISK',
  // 'IQD',
  // 'JPY',
  // 'KPW',
  // 'LVL',
  // 'CHF',
  // 'MGA',
  // 'MDL',
  // 'MAD',
  // 'NPR',
  // 'NIO',
  // 'PKR',
  // 'PYG',
  // 'SHP',
  // 'SCR',
  // 'SBD',
  // 'LKR',
  // 'THB',
  // 'TRY',
  // 'AED',
  // 'VUV',
  // 'YER',
  // 'AFN',
  // 'BDT',
  // 'BRL',
  // 'KHR',
  // 'KMF',
  // 'HRK',
  // 'DJF',
  // 'EGP',
  // 'ETB',
  // 'XPF',
  // 'GHS',
  // 'GNF',
  // 'HKD',
  // 'XDR',
  // 'KES',
  // 'KGS',
  // 'LRD',
  // 'MOP',
  // 'MVR',
  // 'MXN',
  // 'NAD',
  // 'NOK',
  // 'RUB',
  // 'SZL',
  // 'TJS',
  // 'TTD',
  // 'UGX',
  // 'UYU',
  // 'VND',
  // 'TND',
  // 'UAH',
  // 'UZS',
  // 'TMT',
  // 'GBP',
  // 'ZMW',
  // 'BTC',
  // 'BYN',
  // 'BMD',
  // 'GGP',
  // 'CLF',
  // 'CUC',
  // 'IMP',
  // 'JEP',
  // 'SVC',
  // 'ZMK',
  // 'XAG',
  // 'ZWL',
];

// https://www.live-rates.com/rates
export const initialCurrencesRates = [{
  currency: 'EUR/USD', rate: '1.13166', bid: '1.13166', ask: '1.13175', high: '1.13237', low: '1.12648', open: '1.12931', close: '1.13166', timestamp: '1639173294306',
}, {
  currency: 'GBP/USD', rate: '1.32626', bid: '1.32626', ask: '1.32644', high: '1.32747', low: '1.31867', open: '1.32234', close: '1.32626', timestamp: '1639173299754',
}, {
  currency: 'GBP/HUF', rate: '428.45', bid: '428.45', ask: '429.16', high: '428.89', low: '427.08', open: '427.59', close: '428.45', timestamp: '1639173300305',
}, {
  currency: 'EUR/JPY', rate: '128.313', bid: '128.313', ask: '128.331', high: '128.396', low: '127.803', open: '128.109', close: '128.313', timestamp: '1639173296754',
}, {
  currency: 'NZD/USD', rate: '0.6797', bid: '0.6797', ask: '0.67988', high: '0.68062', low: '0.67689', open: '0.67941', close: '0.6797', timestamp: '1639173294250',
}, {
  currency: 'USD/JPY', rate: '113.384', bid: '113.384', ask: '113.395', high: '113.787', low: '113.22', open: '113.438', close: '113.384', timestamp: '1639173294311',
}, {
  currency: 'EUR/CHF', rate: '1.04192', bid: '1.04192', ask: '1.04212', high: '1.04466', low: '1.04086', open: '1.04322', close: '1.04192', timestamp: '1639173294321',
}, {
  currency: 'USD/CHF', rate: '0.9206', bid: '0.9206', ask: '0.92076', high: '0.92527', low: '0.91983', open: '0.92373', close: '0.9206', timestamp: '1639173278162',
}, {
  currency: 'AUD/USD', rate: '0.71719', bid: '0.71719', ask: '0.7173', high: '0.7182', low: '0.71316', open: '0.7146', close: '0.71719', timestamp: '1639173294240',
}, {
  currency: 'USD/CAD', rate: '1.27239', bid: '1.27239', ask: '1.27259', high: '1.27384', low: '1.26785', open: '1.27057', close: '1.27239', timestamp: '1639173300309',
}, {
  currency: 'EUR/GBP', rate: '0.85317', bid: '0.85317', ask: '0.85334', high: '0.85522', low: '0.85251', open: '0.85392', close: '0.85317', timestamp: '1639173299308',
}, {
  currency: 'BTC/USD', rate: '48913.85', bid: '48913.85', ask: '49103.36', high: '49607.32', low: '48556.27', open: '49312.48', close: '48913.85', timestamp: '1639308383146',
}, {
  currency: 'LTCUSD', rate: '154.19', bid: '154.19', ask: '157.64', high: '157.16', low: '151.55', open: '156.33', close: '154.19', timestamp: '1639308383141',
}, {
  currency: 'ETH', rate: '4019.76', bid: '4019.76', ask: '4029.83', high: '4094.0', low: '3984.16', open: '4082.52', close: '4019.76', timestamp: '1639308383115',
}, {
  currency: 'BNBUSD', rate: '563.1', bid: '563.1', ask: '566.0', high: '566.9', low: '557.9', open: '563.4', close: '563.1', timestamp: '1639308382606',
}, {
  currency: 'XRP', rate: '0.8151', bid: '0.8151', ask: '0.8273', high: '0.8362', low: '0.8037', open: '0.8327', close: '0.8151', timestamp: '1639308383121',
}, {
  currency: 'BCHUSD', rate: '445.63', bid: '445.63', ask: '448.98', high: '459.74', low: '440.59', open: '457.38', close: '445.63', timestamp: '1639308357040',
}, {
  currency: 'EOSUSD', rate: '3.265', bid: '3.265', ask: '3.298', high: '3.494', low: '3.223', open: '3.393', close: '3.265', timestamp: '1639308376631',
}, {
  currency: 'DASHUSD', rate: '134.97', bid: '134.97', ask: '137.01', high: '139.87', low: '133.02', open: '139.42', close: '134.97', timestamp: '1639308378098',
}, {
  currency: 'XLMUSD', rate: '0.2677', bid: '0.2677', ask: '0.2704', high: '0.2745', low: '0.2655', open: '0.2732', close: '0.2677', timestamp: '1639308358033',
}, {
  currency: 'NEOUSD', rate: '27.28', bid: '27.28', ask: '27.83', high: '27.85', low: '27.03', open: '27.76', close: '27.28', timestamp: '1639308379127',
}, {
  currency: 'MIOTAUSD', rate: '1.1098', bid: '1.1098', ask: '1.1266', high: '1.1354', low: '1.0997', open: '1.1339', close: '1.1098', timestamp: '1639308376106',
}, {
  currency: 'BTGUSD', rate: '42.96', bid: '42.96', ask: '43.83', high: '44.51', low: '42.78', open: '44.38', close: '42.96', timestamp: '1639308341967',
}, {
  currency: 'BTC/JPY', rate: '5557925.0', bid: '5557925.0', ask: '5574623.0', high: '5630175.0', low: '5523632.0', open: '5595385.0', close: '5557925.0', timestamp: '1639308383126',
}, {
  currency: 'BTC/EUR', rate: '43305.3', bid: '43305.3', ask: '43435.41', high: '43924.37', low: '43031.67', open: '43656.89', close: '43305.3', timestamp: '1639308383109',
}, {
  currency: 'EUR/AUD', rate: '1.57773', bid: '1.57773', ask: '1.57802', high: '1.5826', low: '1.57172', open: '1.58015', close: '1.57773', timestamp: '1639173298757',
}, {
  currency: 'USD/CNY', rate: '6.3755', bid: '6.3755', ask: '6.3775', high: '6.3883', low: '6.3634', open: '6.3766', close: '6.3755', timestamp: '1639173207359',
}, {
  currency: 'CAD/JPY', rate: '89.095', bid: '89.095', ask: '89.118', high: '89.592', low: '88.984', open: '89.266', close: '89.095', timestamp: '1639173300331',
}, {
  currency: 'GBP/CHF', rate: '1.22104', bid: '1.22104', ask: '1.22135', high: '1.22306', low: '1.21743', open: '1.22149', close: '1.22104', timestamp: '1639173299785',
}, {
  currency: 'GBP/JPY', rate: '150.377', bid: '150.377', ask: '150.412', high: '150.502', low: '149.664', open: '150.006', close: '150.377', timestamp: '1639173299806',
}, {
  currency: 'AUD/NZD', rate: '1.05495', bid: '1.05495', ask: '1.0553', high: '1.0562', low: '1.05017', open: '1.05157', close: '1.05495', timestamp: '1639173298796',
}, {
  currency: 'AUD/CAD', rate: '0.91251', bid: '0.91251', ask: '0.91281', high: '0.91274', low: '0.90674', open: '0.90795', close: '0.91251', timestamp: '1639173300321',
}, {
  currency: 'AUD/CHF', rate: '0.66021', bid: '0.66021', ask: '0.66048', high: '0.66278', low: '0.65872', open: '0.66004', close: '0.66021', timestamp: '1639173298800',
}, {
  currency: 'AUD/JPY', rate: '81.313', bid: '81.313', ask: '81.334', high: '81.548', low: '80.821', open: '81.062', close: '81.313', timestamp: '1639173298805',
}, {
  currency: 'EUR/NZD', rate: '1.66463', bid: '1.66463', ask: '1.66507', high: '1.66673', low: '1.65942', open: '1.66183', close: '1.66463', timestamp: '1639173293244',
}, {
  currency: 'CHF/JPY', rate: '123.143', bid: '123.143', ask: '123.189', high: '123.202', low: '122.667', open: '122.786', close: '123.143', timestamp: '1639173300282',
}, {
  currency: 'EUR/CAD', rate: '1.43985', bid: '1.43985', ask: '1.44018', high: '1.4402', low: '1.43042', open: '1.43485', close: '1.43985', timestamp: '1639173300317',
}, {
  currency: 'CAD/CHF', rate: '0.72341', bid: '0.72341', ask: '0.7237', high: '0.72834', low: '0.72315', open: '0.72688', close: '0.72341', timestamp: '1639173296255',
}, {
  currency: 'NZD/JPY', rate: '77.055', bid: '77.055', ask: '77.103', high: '77.286', low: '76.825', open: '77.069', close: '77.055', timestamp: '1639173299825',
}, {
  currency: 'USD/SGD', rate: '1.3634', bid: '1.3634', ask: '1.36373', high: '1.36673', low: '1.36237', open: '1.36473', close: '1.3634', timestamp: '1639173278220',
}, {
  currency: 'NZD/CAD', rate: '0.8648', bid: '0.8648', ask: '0.86516', high: '0.86512', low: '0.86032', open: '0.86322', close: '0.8648', timestamp: '1639173300301',
}, {
  currency: 'GBP/CAD', rate: '1.68757', bid: '1.68757', ask: '1.68797', high: '1.68839', low: '1.67559', open: '1.68017', close: '1.68757', timestamp: '1639173300325',
}, {
  currency: 'GBP/AUD', rate: '1.84916', bid: '1.84916', ask: '1.84948', high: '1.85278', low: '1.84179', open: '1.85031', close: '1.84916', timestamp: '1639173299771',
}, {
  currency: 'GBP/NZD', rate: '1.951', bid: '1.951', ask: '1.95152', high: '1.9526', low: '1.94359', open: '1.94595', close: '1.951', timestamp: '1639173299281',
}, {
  currency: 'USD/HUF', rate: '323.06', bid: '323.06', ask: '323.56', high: '324.71', low: '322.69', open: '323.28', close: '323.06', timestamp: '1639173294348',
}, {
  currency: 'NZD/CHF', rate: '0.62569', bid: '0.62569', ask: '0.62602', high: '0.62871', low: '0.62463', open: '0.62754', close: '0.62569', timestamp: '1639173294345',
}, {
  currency: 'USD/DKK', rate: '6.5699', bid: '6.5699', ask: '6.5712', high: '6.6004', low: '6.5659', open: '6.5836', close: '6.5699', timestamp: '1639173293330',
}, {
  currency: 'USD/SEK', rate: '9.0505', bid: '9.0505', ask: '9.0585', high: '9.0953', low: '9.0271', open: '9.062', close: '9.0505', timestamp: '1639173280176',
}, {
  currency: 'USD/MXN', rate: '20.8766', bid: '20.8766', ask: '20.8895', high: '21.0528', low: '20.839', open: '20.9516', close: '20.8766', timestamp: '1639173299328',
}, {
  currency: 'EUR/PLN', rate: '4.617', bid: '4.617', ask: '4.6191', high: '4.6235', low: '4.6006', open: '4.6033', close: '4.617', timestamp: '1639173277770',
}, {
  currency: 'USD/TRY', rate: '13.8734', bid: '13.8734', ask: '13.8934', high: '13.9542', low: '13.7275', open: '13.7838', close: '13.8734', timestamp: '1639173245030',
}, {
  currency: 'EUR/NOK', rate: '10.1127', bid: '10.1127', ask: '10.1227', high: '10.1706', low: '10.1057', open: '10.157', close: '10.1127', timestamp: '1639173300328',
}, {
  currency: 'EUR/SEK', rate: '10.2431', bid: '10.2431', ask: '10.2511', high: '10.2532', low: '10.2172', open: '10.2368', close: '10.2431', timestamp: '1639173298791',
}, {
  currency: 'EUR/ZAR', rate: '18.061', bid: '18.061', ask: '18.0777', high: '18.1518', low: '17.9177', open: '17.9776', close: '18.061', timestamp: '1639173297831',
}, {
  currency: 'USD/PLN', rate: '4.0788', bid: '4.0788', ask: '4.0833', high: '4.0997', low: '4.0706', open: '4.0761', close: '4.0788', timestamp: '1639173278238',
}, {
  currency: 'USD/ZAR', rate: '15.9559', bid: '15.9559', ask: '15.9733', high: '16.0804', low: '15.8618', open: '15.9242', close: '15.9559', timestamp: '1639173291771',
}, {
  currency: 'EUR/TRY', rate: '15.7009', bid: '15.7009', ask: '15.7309', high: '15.7578', low: '15.4674', open: '15.5703', close: '15.7009', timestamp: '1639173300288',
}, {
  currency: 'USD/NOK', rate: '8.9378', bid: '8.9378', ask: '8.9478', high: '9.0058', low: '8.9326', open: '8.9928', close: '8.9378', timestamp: '1639173300313',
}, {
  currency: 'USD/RUB', rate: '73.2996', bid: '73.2996', ask: '73.5496', high: '73.7495', low: '73.2319', open: '73.5792', close: '73.2996', timestamp: '1639173143140',
}, {
  currency: 'EUR/HUF', rate: '365.59', bid: '365.59', ask: '366.25', high: '365.91', low: '364.92', open: '365.1', close: '365.59', timestamp: '1639173240572',
}, {
  currency: 'GBP/SEK', rate: '12.0014', bid: '12.0014', ask: '12.0166', high: '12.0124', low: '11.9524', open: '11.984', close: '12.0014', timestamp: '1639173299766',
}, {
  currency: 'CHF/HUF', rate: '350.92', bid: '350.92', ask: '351.43', high: '351.23', low: '349.36', open: '349.91', close: '350.92', timestamp: '1639173298262',
}, {
  currency: 'EUR/RUB', rate: '82.8988', bid: '82.8988', ask: '83.2988', high: '83.3396', low: '82.5581', open: '83.1155', close: '82.8988', timestamp: '1639173075833',
}, {
  currency: 'GBP/SGD', rate: '1.8079', bid: '1.8079', ask: '1.8094', high: '1.809', low: '1.8006', open: '1.8042', close: '1.8079', timestamp: '1639173296311',
}, {
  currency: 'EUR/DKK', rate: '7.4352', bid: '7.4352', ask: '7.4367', high: '7.4355', low: '7.4351', open: '7.4352', close: '7.4352', timestamp: '1639173086404',
}, {
  currency: 'USD/HKD', rate: '7.7984', bid: '7.7984', ask: '7.7992', high: '7.8002', low: '7.7966', open: '7.7966', close: '7.7984', timestamp: '1639173483594',
}, {
  currency: 'EUR/ILS', rate: '3.4875', bid: '3.4875', ask: '3.4895', high: '3.507', low: '3.4875', open: '3.5007', close: '3.4875', timestamp: '1639135739423',
}, {
  currency: 'GBP/ILS', rate: '4.0835', bid: '4.0835', ask: '4.0875', high: '4.104', low: '4.0831', open: '4.0962', close: '4.0835', timestamp: '1639135739390',
}, {
  currency: 'USD/ILS', rate: '3.0952', bid: '3.0952', ask: '3.0967', high: '3.1071', low: '3.0949', open: '3.0987', close: '3.0952', timestamp: '1639135739402',
}, {
  currency: 'USDINR-e', rate: '72.703', bid: '72.703', ask: '72.953', high: '73.041', low: '72.686', open: '72.855', close: '72.703', timestamp: '1622836801309',
}, {
  currency: 'US_30', rate: '35975.0', bid: '35975.0', ask: '35982.0', high: '35982.0', low: '35702.0', open: '35759.0', close: '35975.0', timestamp: '1639173528774',
}, {
  currency: 'US_500', rate: '4712.0', bid: '4712.0', ask: '4712.5', high: '4712.25', low: '4664.25', open: '4672.75', close: '4712.0', timestamp: '1639173520746',
}, {
  currency: 'US_2000', rate: '2209.9', bid: '2209.9', ask: '2210.5', high: '2243.8', low: '2195.9', open: '2219.5', close: '2209.9', timestamp: '1639173527296',
}, {
  currency: 'US_TECH100', rate: '16319.0', bid: '16319.0', ask: '16321.0', high: '16334.25', low: '16133.5', open: '16175.75', close: '16319.0', timestamp: '1639173536806',
}, {
  currency: 'INDIA50', rate: '17608.5', bid: '17608.5', ask: '17613.5', high: '17636.0', low: '17435.0', open: '17520.5', close: '17608.5', timestamp: '1639166330743',
}, {
  currency: 'FTSE100', rate: '7295.5', bid: '7295.5', ask: '7297.0', high: '7332.5', low: '7280.0', open: '7300.5', close: '7295.5', timestamp: '1639169933920',
}, {
  currency: 'CHINA_A50', rate: '16350.0', bid: '16350.0', ask: '16362.5', high: '16382.5', low: '16262.5', open: '16347.5', close: '16350.0', timestamp: '1639168998471',
}, {
  currency: '#GOOGLE', rate: '2958.26', bid: '2958.26', ask: '2961.96', high: '2976.82', low: '2931.8', open: '2971.45', close: '2958.26', timestamp: '1639169938267',
}, {
  currency: 'NIKKEI225', rate: '28550.0', bid: '28550.0', ask: '28560.0', high: '28635.0', low: '28320.0', open: '28470.0', close: '28550.0', timestamp: '1639169040077',
}, {
  currency: 'SPAIN35', rate: '8368.0', bid: '8368.0', ask: '8372.0', high: '8406.0', low: '8324.0', open: '8343.0', close: '8368.0', timestamp: '1639162735925',
}, {
  currency: 'CAC40', rate: '7000.0', bid: '7000.0', ask: '7002.5', high: '7023.0', low: '6956.0', open: '6972.0', close: '7000.0', timestamp: '1639169932603',
}, {
  currency: 'DAX30', rate: '15643.5', bid: '15643.5', ask: '15646.5', high: '15686.5', low: '15524.5', open: '15583.5', close: '15643.5', timestamp: '1639169936259',
}, {
  currency: '#APPLE', rate: '179.3', bid: '179.3', ask: '179.63', high: '179.31', low: '174.55', open: '175.02', close: '179.3', timestamp: '1639169940702',
}, {
  currency: 'CORN', rate: '589.5', bid: '589.5', ask: '590.25', high: '593.75', low: '586.5', open: '589.25', close: '589.5', timestamp: '1639163717233',
}, {
  currency: 'COPPER', rate: '4.4135', bid: '4.4135', ask: '4.4195', high: '4.4245', low: '4.379', open: '4.3875', close: '4.4135', timestamp: '1637633198056',
}, {
  currency: 'WHEAT', rate: '783.75', bid: '783.75', ask: '784.5', high: '787.75', low: '767.5', open: '777.25', close: '783.75', timestamp: '1639163935600',
}, {
  currency: 'GOLD', rate: '1782.75', bid: '1782.75', ask: '1783.09', high: '1789.3', low: '1770.02', open: '1776.2', close: '1782.75', timestamp: '1639173539816',
}, {
  currency: 'SILVER', rate: '22.178', bid: '22.178', ask: '22.207', high: '22.214', low: '21.817', open: '21.973', close: '22.178', timestamp: '1639173510203',
}, {
  currency: 'CrudeOIL', rate: '71.94', bid: '71.94', ask: '71.97', high: '72.32', low: '70.31', open: '70.52', close: '71.94', timestamp: '1639173535321',
}, {
  currency: 'GASOLINE', rate: '2.1403', bid: '2.1403', ask: '2.1442', high: '2.1566', low: '2.105', open: '2.1093', close: '2.1403', timestamp: '1639173530801',
}, {
  currency: 'BRENT_OIL', rate: '75.32', bid: '75.32', ask: '75.38', high: '75.68', low: '73.77', open: '74.06', close: '75.32', timestamp: '1639173535302',
}, {
  currency: 'NATURAL_GAS', rate: '3.888', bid: '3.888', ask: '3.895', high: '3.961', low: '3.759', open: '3.777', close: '3.888', timestamp: '1639173534347',
}, {
  currency: '#MICROSOFT', rate: '342.5', bid: '342.5', ask: '342.83', high: '342.64', low: '334.52', open: '334.52', close: '342.5', timestamp: '1639169940410',
}, {
  currency: '#INTEL', rate: '50.49', bid: '50.49', ask: '50.58', high: '51.02', low: '50.01', open: '50.81', close: '50.49', timestamp: '1639169881678',
}, {
  currency: '#AMAZON', rate: '3440.9', bid: '3440.9', ask: '3444.97', high: '3515.61', low: '3408.31', open: '3506.37', close: '3440.9', timestamp: '1639169938174',
}, {
  currency: '#CISCO', rate: '59.24', bid: '59.24', ask: '59.31', high: '59.3', low: '57.84', open: '57.84', close: '59.24', timestamp: '1639169916573',
}, {
  currency: '#CITIGROUP', rate: '60.65', bid: '60.65', ask: '60.74', high: '62.17', low: '60.16', open: '61.32', close: '60.65', timestamp: '1639169900278',
}, {
  currency: '#COCA-COLA', rate: '53.36', bid: '53.36', ask: '53.52', high: '53.71', low: '52.93', open: '53.22', close: '53.36', timestamp: '1639169927796',
}, {
  currency: '#JP_MORGAN', rate: '159.76', bid: '159.76', ask: '159.94', high: '161.59', low: '159.04', open: '160.76', close: '159.76', timestamp: '1639169940409',
}, {
  currency: '#MCDONALDS', rate: '264.78', bid: '264.78', ask: '265.05', high: '265.13', low: '261.88', open: '261.88', close: '264.78', timestamp: '1639169940084',
}, {
  currency: '#GE', rate: '96.91', bid: '96.91', ask: '96.96', high: '98.46', low: '96.42', open: '97.6', close: '96.91', timestamp: '1639169937397',
}, {
  currency: '#GM', rate: '63.2', bid: '63.2', ask: '63.27', high: '63.23', low: '60.05', open: '60.05', close: '63.2', timestamp: '1639169935530',
}, {
  currency: '#TESLA', rate: '1016.58', bid: '1016.58', ask: '1018.42', high: '1019.58', low: '981.62', open: '1007.19', close: '1016.58', timestamp: '1639169940513',
}, {
  currency: '#AT&T', rate: '22.83', bid: '22.83', ask: '22.88', high: '23.02', low: '22.73', open: '22.92', close: '22.83', timestamp: '1639169814457',
}, {
  currency: '#TWITTER', rate: '45.5', bid: '45.5', ask: '45.64', high: '46.44', low: '44.92', open: '46.35', close: '45.5', timestamp: '1639169932343',
}, {
  currency: '#ALIBABA', rate: '124.74', bid: '124.74', ask: '125.25', high: '124.87', low: '122.5', open: '122.81', close: '124.74', timestamp: '1639169939215',
}, {
  currency: '#GDX', rate: '30.44', bid: '30.44', ask: '30.51', high: '30.89', low: '30.27', open: '30.88', close: '30.44', timestamp: '1639169928477',
}, {
  currency: 'HEATING_OIL', rate: '2.2575', bid: '2.2575', ask: '2.2608', high: '2.2723', low: '2.2305', open: '2.2347', close: '2.2575', timestamp: '1639173530798',
}, {
  currency: 'LTC_Mini', rate: '155.59', bid: '155.59', ask: '156.37', high: '158.56', low: '152.99', open: '157.63', close: '155.59', timestamp: '1639308381116',
}, {
  currency: 'PLATINUM', rate: '936.2', bid: '936.2', ask: '938.5', high: '939.9', low: '924.5', open: '930.6', close: '936.2', timestamp: '1639173490116',
}, {
  currency: 'PALLADIUM', rate: '1752.2', bid: '1752.2', ask: '1759.35', high: '1812.7', low: '1731.7', open: '1804.7', close: '1752.2', timestamp: '1639173472586',
}, {
  currency: 'SPI200', rate: '7365.0', bid: '7365.0', ask: '7369.0', high: '7384.0', low: '7334.0', open: '7360.0', close: '7365.0', timestamp: '1639169939440',
}, {
  currency: '_BARCLAYS', rate: '183.05', bid: '183.05', ask: '183.41', high: '184.75', low: '181.85', open: '182.73', close: '183.05', timestamp: '1639150121666',
}, {
  currency: '_SIEMENS', rate: '151.031', bid: '151.031', ask: '151.229', high: '151.471', low: '149.511', open: '149.751', close: '151.031', timestamp: '1639150140250',
}, {
  currency: '_BMW.DE', rate: '89.268', bid: '89.268', ask: '89.422', high: '90.118', low: '88.838', open: '89.488', close: '89.268', timestamp: '1639150140755',
}, {
  currency: 'OMX30', rate: '2314.25', bid: '2314.25', ask: '2315.0', high: '2329.0', low: '2307.75', open: '2314.75', close: '2314.25', timestamp: '1639153434583',
}, {
  currency: 'SOYBEAN', rate: '1266.5', bid: '1266.5', ask: '1268.0', high: '1275.5', low: '1258.5', open: '1262.75', close: '1266.5', timestamp: '1639163938552',
}, {
  currency: 'DOLLAR_INDX', rate: '96.035', bid: '96.035', ask: '96.075', high: '96.41', low: '95.955', open: '96.215', close: '96.035', timestamp: '1639173534813',
}, {
  currency: 'JAPAN_BOND', rate: '152.02', bid: '152.02', ask: '152.09', high: '152.13', low: '151.86', open: '152.07', close: '152.02', timestamp: '1639159065968',
}, {
  currency: 'COTTON#2', rate: '106.19', bid: '106.19', ask: '106.27', high: '107.03', low: '105.69', open: '106.22', close: '106.19', timestamp: '1639163939573',
}, {
  currency: 'HSI', rate: '24053.0', bid: '24053.0', ask: '24066.0', high: '24216.0', low: '23906.0', open: '23998.0', close: '24053.0', timestamp: '1639162737420',
}, {
  currency: 'FTSEMIB40', rate: '26755.0', bid: '26755.0', ask: '26770.0', high: '26900.0', low: '26625.0', open: '26645.0', close: '26755.0', timestamp: '1639169931973',
}, {
  currency: 'AEX', rate: '789.95', bid: '789.95', ask: '790.4', high: '793.6', low: '785.7', open: '788.4', close: '789.95', timestamp: '1639169933637',
}, {
  currency: 'DJ_EUR50', rate: '4208.0', bid: '4208.0', ask: '4210.0', high: '4222.0', low: '4178.0', open: '4189.0', close: '4208.0', timestamp: '1639169932342',
}, {
  currency: 'EURO-BUND', rate: '173.94', bid: '173.94', ask: '173.98', high: '174.26', low: '173.77', open: '174.05', close: '173.94', timestamp: '1639169908308',
}, {
  currency: '_ACA.FR', rate: '12.185', bid: '12.185', ask: '12.211', high: '12.319', low: '12.157', open: '12.249', close: '12.185', timestamp: '1639150137774',
}, {
  currency: 'SUGAR#11', rate: '19.7', bid: '19.7', ask: '19.73', high: '19.82', low: '19.51', open: '19.63', close: '19.7', timestamp: '1639159094547',
}, {
  currency: 'COFFEE_C', rate: '232.8', bid: '232.8', ask: '233.05', high: '240.6', low: '231.85', open: '240.35', close: '232.8', timestamp: '1639160934346',
}, {
  currency: 'COCOA', rate: '2458.0', bid: '2458.0', ask: '2466.0', high: '2471.0', low: '2430.0', open: '2449.0', close: '2458.0', timestamp: '1639160913250',
}, {
  currency: 'USD/CLP', rate: '841.83', bid: '841.83', ask: '842.68', high: '853.08', low: '841.13', open: '848.33', close: '841.83', timestamp: '1639162667232',
}, {
  currency: '#EEM', rate: '50.02', bid: '50.02', ask: '50.11', high: '50.1', low: '49.86', open: '49.99', close: '50.02', timestamp: '1639169939202',
}, {
  currency: '#GS', rate: '390.76', bid: '390.76', ask: '391.19', high: '398.47', low: '388.41', open: '397.96', close: '390.76', timestamp: '1639169940965',
}, {
  currency: '#BOA', rate: '44.51', bid: '44.51', ask: '44.55', high: '44.81', low: '44.06', open: '44.65', close: '44.51', timestamp: '1639169934839',
}, {
  currency: '#BOEING', rate: '204.78', bid: '204.78', ask: '205.14', high: '208.64', low: '203.26', open: '207.83', close: '204.78', timestamp: '1639169940030',
}, {
  currency: '#MASTERCARD', rate: '349.53', bid: '349.53', ask: '350.03', high: '350.01', low: '344.38', open: '345.41', close: '349.53', timestamp: '1639169937971',
}, {
  currency: '#PFIZER', rate: '52.71', bid: '52.71', ask: '52.76', high: '52.82', low: '51.08', open: '51.11', close: '52.71', timestamp: '1639169940739',
}, {
  currency: '#NETFLIX', rate: '610.78', bid: '610.78', ask: '612.06', high: '616.96', low: '605.27', open: '616.09', close: '610.78', timestamp: '1639169939423',
}, {
  currency: '#WAL_MART', rate: '141.12', bid: '141.12', ask: '141.31', high: '141.2', low: '137.47', open: '137.79', close: '141.12', timestamp: '1639169931041',
}, {
  currency: '#XLE', rate: '57.15', bid: '57.15', ask: '57.42', high: '57.32', low: '56.09', open: '57.23', close: '57.15', timestamp: '1639169898918',
}, {
  currency: '#CHEVRON', rate: '118.38', bid: '118.38', ask: '118.51', high: '118.82', low: '116.79', open: '118.59', close: '118.38', timestamp: '1639169931584',
}, {
  currency: '#EWZ', rate: '30.54', bid: '30.54', ask: '30.75', high: '30.78', low: '30.41', open: '30.55', close: '30.54', timestamp: '1639169885347',
}, {
  currency: '#GROUPON', rate: '22.16', bid: '22.16', ask: '22.5', high: '22.67', low: '21.67', open: '22.34', close: '22.16', timestamp: '1639169939806',
}, {
  currency: '#VISA', rate: '213.2', bid: '213.2', ask: '213.43', high: '214.13', low: '210.75', open: '211.54', close: '213.2', timestamp: '1639169940884',
}, {
  currency: '#SNAPCHAT', rate: '50.7', bid: '50.7', ask: '50.79', high: '53.25', low: '50.01', open: '52.56', close: '50.7', timestamp: '1639169932458',
}, {
  currency: '#BERKSHIRE', rate: '288.05', bid: '288.05', ask: '288.39', high: '288.34', low: '284.1', open: '285.33', close: '288.05', timestamp: '1639169939854',
}, {
  currency: '#AMERICAN_E', rate: '167.05', bid: '167.05', ask: '167.24', high: '170.32', low: '165.79', open: '169.04', close: '167.05', timestamp: '1639169940209',
}, {
  currency: '#EXXONMOBIL', rate: '63.03', bid: '63.03', ask: '63.1', high: '63.22', low: '62.19', open: '63.1', close: '63.03', timestamp: '1639169920650',
}, {
  currency: '#DISNEY', rate: '152.54', bid: '152.54', ask: '152.75', high: '154.55', low: '151.34', open: '153.4', close: '152.54', timestamp: '1639169936106',
}, {
  currency: '#PG', rate: '155.41', bid: '155.41', ask: '155.58', high: '155.71', low: '153.31', open: '153.48', close: '155.41', timestamp: '1639169938079',
}, {
  currency: '#JNJ', rate: '165.34', bid: '165.34', ask: '165.55', high: '166.56', low: '164.54', open: '165.44', close: '165.34', timestamp: '1639169935189',
}, {
  currency: '#TEVA', rate: '8.31', bid: '8.31', ask: '8.34', high: '8.43', low: '8.24', open: '8.24', close: '8.31', timestamp: '1639169884060',
}, {
  currency: '#CAT', rate: '203.35', bid: '203.35', ask: '203.58', high: '205.69', low: '201.96', open: '204.9', close: '203.35', timestamp: '1639169939427',
}, {
  currency: 'SMI', rate: '12610.0', bid: '12610.0', ask: '12614.0', high: '12634.0', low: '12520.0', open: '12553.0', close: '12610.0', timestamp: '1639169923395',
}, {
  currency: '_DEUTSCHE_B', rate: '10.934', bid: '10.934', ask: '10.958', high: '11.034', low: '10.9', open: '10.95', close: '10.934', timestamp: '1639150121732',
}, {
  currency: '_DAI.DE', rate: '73.877', bid: '73.877', ask: '74.023', high: '75.207', low: '70.947', open: '73.267', close: '73.877', timestamp: '1639150128665',
}, {
  currency: '_E.ON', rate: '11.315', bid: '11.315', ask: '11.345', high: '11.359', low: '11.187', open: '11.211', close: '11.315', timestamp: '1639150139810',
}, {
  currency: '_BAYER', rate: '46.595', bid: '46.595', ask: '46.835', high: '47.035', low: '46.185', open: '46.605', close: '46.595', timestamp: '1639150135790',
}, {
  currency: '_TOTAL', rate: '44.04', bid: '44.04', ask: '44.12', high: '44.28', low: '43.715', open: '43.865', close: '44.04', timestamp: '1639150140763',
}, {
  currency: '_INTESA_SAN', rate: '2.2075', bid: '2.2075', ask: '2.211', high: '2.236', low: '2.2025', open: '2.2235', close: '2.2075', timestamp: '1639153738137',
}, {
  currency: '_VK.FR', rate: '8.496', bid: '8.496', ask: '8.514', high: '8.566', low: '8.211', open: '8.296', close: '8.496', timestamp: '1639150140257',
}, {
  currency: '_UNICREDITO', rate: '12.8767', bid: '12.8767', ask: '12.8993', high: '13.1167', low: '12.7653', open: '12.7653', close: '12.8767', timestamp: '1639153737520',
}, {
  currency: '_TELECOM_IT', rate: '0.4388', bid: '0.4388', ask: '0.4398', high: '0.4554', low: '0.4301', open: '0.4388', close: '0.4388', timestamp: '1639153738526',
}, {
  currency: '_SPM.IT', rate: '1.7763', bid: '1.7763', ask: '1.7807', high: '1.8013', low: '1.7683', open: '1.7783', close: '1.7763', timestamp: '1639153723563',
}, {
  currency: '_SAP.DE', rate: '119.605', bid: '119.605', ask: '119.775', high: '119.685', low: '117.585', open: '117.645', close: '119.605', timestamp: '1639150130184',
}, {
  currency: '_RWE.DE', rate: '34.54', bid: '34.54', ask: '34.59', high: '34.81', low: '34.41', open: '34.72', close: '34.54', timestamp: '1639150139862',
}, {
  currency: '_TESCO.UK', rate: '283.68', bid: '283.68', ask: '284.02', high: '285.08', low: '282.33', open: '282.43', close: '283.68', timestamp: '1639150086468',
}, {
  currency: '_RIO.UK', rate: '4754.68', bid: '4754.68', ask: '4762.82', high: '4826.18', low: '4752.18', open: '4752.18', close: '4754.68', timestamp: '1639150140664',
}, {
  currency: '#FACEBOOK', rate: '329.41', bid: '329.41', ask: '329.87', high: '334.71', low: '326.15', open: '332.19', close: '329.41', timestamp: '1639169940733',
}, {
  currency: 'ETHUSD', rate: '4013.53', bid: '4013.53', ask: '4036.44', high: '4086.54', low: '3976.79', open: '4078.99', close: '4013.53', timestamp: '1639308383136',
}, {
  currency: 'ETCUSD', rate: '37.015', bid: '37.015', ask: '37.396', high: '37.942', low: '36.603', open: '37.808', close: '37.015', timestamp: '1639308372577',
}, {
  currency: 'ADAUSD', rate: '1.322', bid: '1.322', ask: '1.362', high: '1.395', low: '1.3', open: '1.335', close: '1.322', timestamp: '1639308369569',
}, {
  currency: 'DOTUSD', rate: '28.166', bid: '28.166', ask: '28.602', high: '28.23', low: '27.095', open: '27.599', close: '28.166', timestamp: '1639308383131',
}, {
  currency: 'USB10YUSD-e', rate: '133.266', bid: '133.266', ask: '133.292', high: '133.282', low: '132.625', open: '132.677', close: '133.266', timestamp: '1622840354347',
}, {
  currency: 'USD/INR', rate: '75.569', bid: '75.569', ask: '75.674', high: '75.777', low: '75.508', open: '75.599', close: '75.569', timestamp: '1639155300500',
}, {
  currency: 'DOGEUSD', rate: '0.1669', bid: '0.1669', ask: '0.167', high: '0.1696', low: '0.1656', open: '0.1689', close: '0.1669', timestamp: '1639308356510',
}, {
  currency: 'USD/AED', rate: '3.67329', bid: '3.6731', ask: '3.67347', high: 'n/a', low: 'n/a', open: '3.67329', close: 'n/a', timestamp: '1639308381355',
}, {
  currency: 'USD/ANG', rate: '1.79479', bid: '1.794697', ask: '1.7948765', high: 'n/a', low: 'n/a', open: '1.79479', close: 'n/a', timestamp: '1639308381361',
}, {
  currency: 'USD/ARS', rate: '101.48718', bid: '101.4821', ask: '101.49225', high: 'n/a', low: 'n/a', open: '101.48718', close: 'n/a', timestamp: '1639308381366',
}, {
  currency: 'USD/AUD', rate: '1.39438', bid: '1.394311', ask: '1.3944504', high: 'n/a', low: 'n/a', open: '1.39438', close: 'n/a', timestamp: '1639308381371',
}, {
  currency: 'USD/BDT', rate: '85.40613', bid: '85.40186', ask: '85.4104', high: 'n/a', low: 'n/a', open: '85.40613', close: 'n/a', timestamp: '1639308381376',
}, {
  currency: 'USD/BGN', rate: '1.73043', bid: '1.730339', ask: '1.730512', high: 'n/a', low: 'n/a', open: '1.73043', close: 'n/a', timestamp: '1639308381381',
}, {
  currency: 'USD/BHD', rate: '0.37695', bid: '0.3769333', ask: '0.37697099', high: 'n/a', low: 'n/a', open: '0.37695', close: 'n/a', timestamp: '1639308381386',
}, {
  currency: 'USD/BND', rate: '1.3603', bid: '1.36023', ask: '1.360366', high: 'n/a', low: 'n/a', open: '1.3603', close: 'n/a', timestamp: '1639308381390',
}, {
  currency: 'USD/BOB', rate: '6.87653', bid: '6.876182', ask: '6.8768696', high: 'n/a', low: 'n/a', open: '6.87653', close: 'n/a', timestamp: '1639308381395',
}, {
  currency: 'USD/BRL', rate: '5.61276', bid: '5.612484', ask: '5.6130452', high: 'n/a', low: 'n/a', open: '5.61276', close: 'n/a', timestamp: '1639308381400',
}, {
  currency: 'USD/BWP', rate: '11.72308', bid: '11.72249', ask: '11.723662', high: 'n/a', low: 'n/a', open: '11.72308', close: 'n/a', timestamp: '1639308381404',
}, {
  currency: 'USD/COP', rate: '3886.89335', bid: '3886.699', ask: '3887.0877', high: 'n/a', low: 'n/a', open: '3886.89335', close: 'n/a', timestamp: '1639308381436',
}, {
  currency: 'USD/CRC', rate: '635.82499', bid: '635.7932', ask: '635.85678', high: 'n/a', low: 'n/a', open: '635.82499', close: 'n/a', timestamp: '1639308381440',
}, {
  currency: 'USD/CZK', rate: '22.39937', bid: '22.39825', ask: '22.40049', high: 'n/a', low: 'n/a', open: '22.39937', close: 'n/a', timestamp: '1639308381444',
}, {
  currency: 'USD/DOP', rate: '56.57552', bid: '56.57269', ask: '56.578347', high: 'n/a', low: 'n/a', open: '56.57552', close: 'n/a', timestamp: '1639308381451',
}, {
  currency: 'USD/DZD', rate: '138.98795', bid: '138.981', ask: '138.9949', high: 'n/a', low: 'n/a', open: '138.98795', close: 'n/a', timestamp: '1639308381455',
}, {
  currency: 'USD/EGP', rate: '15.70826', bid: '15.70747', ask: '15.709041', high: 'n/a', low: 'n/a', open: '15.70826', close: 'n/a', timestamp: '1639308381460',
}, {
  currency: 'USD/EUR', rate: '0.88369', bid: '0.883645', ask: '0.8837334', high: 'n/a', low: 'n/a', open: '0.88369', close: 'n/a', timestamp: '1639308381463',
}, {
  currency: 'USD/FJD', rate: '2.13006', bid: '2.12995', ask: '2.130163', high: 'n/a', low: 'n/a', open: '2.13006', close: 'n/a', timestamp: '1639308381467',
}, {
  currency: 'USD/GBP', rate: '0.75348', bid: '0.7534376', ask: '0.75351294', high: 'n/a', low: 'n/a', open: '0.75348', close: 'n/a', timestamp: '1639308381476',
}, {
  currency: 'USD/HNL', rate: '24.17001', bid: '24.1688', ask: '24.17122', high: 'n/a', low: 'n/a', open: '24.17001', close: 'n/a', timestamp: '1639308381496',
}, {
  currency: 'USD/HRK', rate: '6.64893', bid: '6.6486', ask: '6.64926', high: 'n/a', low: 'n/a', open: '6.64893', close: 'n/a', timestamp: '1639308381505',
}, {
  currency: 'USD/IDR', rate: '14355.7', bid: '14355', ask: '14356.4', high: 'n/a', low: 'n/a', open: '14355.7', close: 'n/a', timestamp: '1639308381522',
}, {
  currency: 'USD/JMD', rate: '153.9123', bid: '153.9046', ask: '153.91999', high: 'n/a', low: 'n/a', open: '153.9123', close: 'n/a', timestamp: '1639308381540',
}, {
  currency: 'USD/JOD', rate: '0.70905', bid: '0.709', ask: '0.7091', high: 'n/a', low: 'n/a', open: '0.70905', close: 'n/a', timestamp: '1639308381549',
}, {
  currency: 'USD/KES', rate: '112.43412', bid: '112.4285', ask: '112.43974', high: 'n/a', low: 'n/a', open: '112.43412', close: 'n/a', timestamp: '1639308381582',
}, {
  currency: 'USD/KRW', rate: '1181.05', bid: '1181', ask: '1181.1', high: 'n/a', low: 'n/a', open: '1181.05', close: 'n/a', timestamp: '1639308381585',
}, {
  currency: 'USD/KWD', rate: '0.30294', bid: '0.30292', ask: '0.30295', high: 'n/a', low: 'n/a', open: '0.30294', close: 'n/a', timestamp: '1639308381589',
}, {
  currency: 'USD/KYD', rate: '0.82991', bid: '0.8298719', ask: '0.82995489', high: 'n/a', low: 'n/a', open: '0.82991', close: 'n/a', timestamp: '1639308381592',
}, {
  currency: 'USD/KZT', rate: '434.19761', bid: '434.1759', ask: '434.21932', high: 'n/a', low: 'n/a', open: '434.19761', close: 'n/a', timestamp: '1639308381595',
}, {
  currency: 'USD/LBP', rate: '1505.9523', bid: '1505.877', ask: '1506.0276', high: 'n/a', low: 'n/a', open: '1505.9523', close: 'n/a', timestamp: '1639308381599',
}, {
  currency: 'USD/LKR', rate: '201.66449', bid: '201.6544', ask: '201.67457', high: 'n/a', low: 'n/a', open: '201.66449', close: 'n/a', timestamp: '1639308381602',
}, {
  currency: 'USD/MAD', rate: '9.22697', bid: '9.226513', ask: '9.2274357', high: 'n/a', low: 'n/a', open: '9.22697', close: 'n/a', timestamp: '1639308381606',
}, {
  currency: 'USD/MDL', rate: '17.66186', bid: '17.66098', ask: '17.662746', high: 'n/a', low: 'n/a', open: '17.66186', close: 'n/a', timestamp: '1639308381609',
}, {
  currency: 'USD/MKD', rate: '54.45698', bid: '54.45426', ask: '54.459705', high: 'n/a', low: 'n/a', open: '54.45698', close: 'n/a', timestamp: '1639308381612',
}, {
  currency: 'USD/MUR', rate: '43.652', bid: '43.65', ask: '43.654', high: 'n/a', low: 'n/a', open: '43.652', close: 'n/a', timestamp: '1639308381615',
}, {
  currency: 'USD/MVR', rate: '15.451', bid: '15.45', ask: '15.452', high: 'n/a', low: 'n/a', open: '15.451', close: 'n/a', timestamp: '1639308381619',
}, {
  currency: 'USD/MYR', rate: '4.21271', bid: '4.2125', ask: '4.21292', high: 'n/a', low: 'n/a', open: '4.21271', close: 'n/a', timestamp: '1639308381625',
}, {
  currency: 'USD/NAD', rate: '15.971', bid: '15.97', ask: '15.972', high: 'n/a', low: 'n/a', open: '15.971', close: 'n/a', timestamp: '1639308381628',
}, {
  currency: 'USD/NGN', rate: '409.9905', bid: '409.97', ask: '410.011', high: 'n/a', low: 'n/a', open: '409.9905', close: 'n/a', timestamp: '1639308381631',
}, {
  currency: 'USD/NIO', rate: '35.08438', bid: '35.08263', ask: '35.086138', high: 'n/a', low: 'n/a', open: '35.08438', close: 'n/a', timestamp: '1639308381635',
}, {
  currency: 'USD/NPR', rate: '120.75014', bid: '120.7441', ask: '120.75617', high: 'n/a', low: 'n/a', open: '120.75014', close: 'n/a', timestamp: '1639308381641',
}, {
  currency: 'USD/NZD', rate: '1.47077', bid: '1.470697', ask: '1.4708441', high: 'n/a', low: 'n/a', open: '1.47077', close: 'n/a', timestamp: '1639308381644',
}, {
  currency: 'USD/OMR', rate: '0.3834', bid: '0.3833849', ask: '0.38342324', high: 'n/a', low: 'n/a', open: '0.3834', close: 'n/a', timestamp: '1639308381647',
}, {
  currency: 'USD/PEN', rate: '4.06313', bid: '4.062925', ask: '4.0633313', high: 'n/a', low: 'n/a', open: '4.06313', close: 'n/a', timestamp: '1639308381650',
}, {
  currency: 'USD/PGK', rate: '3.54149', bid: '3.541317', ask: '3.5416711', high: 'n/a', low: 'n/a', open: '3.54149', close: 'n/a', timestamp: '1639308381653',
}, {
  currency: 'USD/PHP', rate: '50.34366', bid: '50.34114', ask: '50.346174', high: 'n/a', low: 'n/a', open: '50.34366', close: 'n/a', timestamp: '1639308381657',
}, {
  currency: 'USD/PKR', rate: '176.96675', bid: '176.9579', ask: '176.9756', high: 'n/a', low: 'n/a', open: '176.96675', close: 'n/a', timestamp: '1639308381669',
}, {
  currency: 'USD/PYG', rate: '6811.21155', bid: '6810.871', ask: '6811.5521', high: 'n/a', low: 'n/a', open: '6811.21155', close: 'n/a', timestamp: '1639308381675',
}, {
  currency: 'USD/QAR', rate: '3.6412', bid: '3.641', ask: '3.6414', high: 'n/a', low: 'n/a', open: '3.6412', close: 'n/a', timestamp: '1639308381678',
}, {
  currency: 'USD/RON', rate: '4.37432', bid: '4.3741', ask: '4.37454', high: 'n/a', low: 'n/a', open: '4.37432', close: 'n/a', timestamp: '1639308381681',
}, {
  currency: 'USD/RSD', rate: '103.8921', bid: '103.8869', ask: '103.89729', high: 'n/a', low: 'n/a', open: '103.8921', close: 'n/a', timestamp: '1639308381684',
}, {
  currency: 'USD/SAR', rate: '3.75181', bid: '3.751618', ask: '3.7519932', high: 'n/a', low: 'n/a', open: '3.75181', close: 'n/a', timestamp: '1639308381690',
}, {
  currency: 'USD/SCR', rate: '12.78565', bid: '12.785', ask: '12.7863', high: 'n/a', low: 'n/a', open: '12.78565', close: 'n/a', timestamp: '1639308381694',
}, {
  currency: 'USD/SLL', rate: '11232.55', bid: '11232', ask: '11233.1', high: 'n/a', low: 'n/a', open: '11232.55', close: 'n/a', timestamp: '1639308381703',
}, {
  currency: 'USD/THB', rate: '33.6115', bid: '33.61', ask: '33.613', high: 'n/a', low: 'n/a', open: '33.6115', close: 'n/a', timestamp: '1639308381706',
}, {
  currency: 'USD/TND', rate: '2.87215', bid: '2.872', ask: '2.8723', high: 'n/a', low: 'n/a', open: '2.87215', close: 'n/a', timestamp: '1639308381709',
}, {
  currency: 'USD/TTD', rate: '6.76808', bid: '6.767742', ask: '6.7684188', high: 'n/a', low: 'n/a', open: '6.76808', close: 'n/a', timestamp: '1639308381716',
}, {
  currency: 'USD/TWD', rate: '27.6524', bid: '27.651', ask: '27.6538', high: 'n/a', low: 'n/a', open: '27.6524', close: 'n/a', timestamp: '1639308381719',
}, {
  currency: 'USD/TZS', rate: '2294.98875', bid: '2294.874', ask: '2295.1035', high: 'n/a', low: 'n/a', open: '2294.98875', close: 'n/a', timestamp: '1639308381722',
}, {
  currency: 'USD/UAH', rate: '26.89361', bid: '26.89227', ask: '26.894959', high: 'n/a', low: 'n/a', open: '26.89361', close: 'n/a', timestamp: '1639308381725',
}, {
  currency: 'USD/UGX', rate: '3543.35015', bid: '3543.173', ask: '3543.5273', high: 'n/a', low: 'n/a', open: '3543.35015', close: 'n/a', timestamp: '1639308381729',
}, {
  currency: 'USD/UYU', rate: '44.0075', bid: '44.0053', ask: '44.0097', high: 'n/a', low: 'n/a', open: '44.0075', close: 'n/a', timestamp: '1639308381732',
}, {
  currency: 'USD/UZS', rate: '10762.888', bid: '10762.35', ask: '10763.426', high: 'n/a', low: 'n/a', open: '10762.888', close: 'n/a', timestamp: '1639308381735',
}, {
  currency: 'USD/VND', rate: '23031.15', bid: '23030', ask: '23032.3', high: 'n/a', low: 'n/a', open: '23031.15', close: 'n/a', timestamp: '1639308381738',
}, {
  currency: 'USD/XOF', rate: '579.75239', bid: '579.7234', ask: '579.78137', high: 'n/a', low: 'n/a', open: '579.75239', close: 'n/a', timestamp: '1639308381741',
}, {
  currency: 'USD/YER', rate: '250.2625', bid: '250.25', ask: '250.275', high: 'n/a', low: 'n/a', open: '250.2625', close: 'n/a', timestamp: '1639308381744',
}, {
  currency: 'USD/AFN', rate: '103.16906', bid: '103.1639', ask: '103.17422', high: 'n/a', low: 'n/a', open: '103.16906', close: 'n/a', timestamp: '1639308381761',
}, {
  currency: 'USD/ALL', rate: '106.97835', bid: '106.973', ask: '106.9837', high: 'n/a', low: 'n/a', open: '106.97835', close: 'n/a', timestamp: '1639308381764',
}, {
  currency: 'USD/AMD', rate: '493.45817', bid: '493.4335', ask: '493.48284', high: 'n/a', low: 'n/a', open: '493.45817', close: 'n/a', timestamp: '1639308381767',
}, {
  currency: 'USD/AOA', rate: '568.3074', bid: '568.279', ask: '568.3358', high: 'n/a', low: 'n/a', open: '568.3074', close: 'n/a', timestamp: '1639308381770',
}, {
  currency: 'USD/AWG', rate: '1.8', bid: '1.8', ask: '1.8', high: 'n/a', low: 'n/a', open: '1.8', close: 'n/a', timestamp: '1639308381773',
}, {
  currency: 'USD/AZN', rate: '1.7', bid: '1.7', ask: '1.7', high: 'n/a', low: 'n/a', open: '1.7', close: 'n/a', timestamp: '1639308381776',
}, {
  currency: 'USD/BAM', rate: '1.72862', bid: '1.728529', ask: '1.7287019', high: 'n/a', low: 'n/a', open: '1.72862', close: 'n/a', timestamp: '1639308381779',
}, {
  currency: 'USD/BBD', rate: '2.01079', bid: '2.010694', ask: '2.0108951', high: 'n/a', low: 'n/a', open: '2.01079', close: 'n/a', timestamp: '1639308381783',
}, {
  currency: 'USD/BIF', rate: '1984.85425', bid: '1984.755', ask: '1984.9535', high: 'n/a', low: 'n/a', open: '1984.85425', close: 'n/a', timestamp: '1639308381786',
}, {
  currency: 'USD/BMD', rate: '1.0', bid: '1', ask: '1.0', high: 'n/a', low: 'n/a', open: '1.0', close: 'n/a', timestamp: '1639308381789',
}, {
  currency: 'USD/BSD', rate: '0.9959', bid: '0.9958462', ask: '0.99594578', high: 'n/a', low: 'n/a', open: '0.9959', close: 'n/a', timestamp: '1639308381792',
}, {
  currency: 'USD/BZD', rate: '2.00735', bid: '2.007247', ask: '2.0074477', high: 'n/a', low: 'n/a', open: '2.00735', close: 'n/a', timestamp: '1639308381795',
}, {
  currency: 'USD/CDF', rate: '2000.6', bid: '2000.5', ask: '2000.7', high: 'n/a', low: 'n/a', open: '2000.6', close: 'n/a', timestamp: '1639308381798',
}, {
  currency: 'USD/CUP', rate: '23.90098', bid: '23.89978', ask: '23.90217', high: 'n/a', low: 'n/a', open: '23.90098', close: 'n/a', timestamp: '1639308381801',
}, {
  currency: 'USD/CVE', rate: '97.45516', bid: '97.45029', ask: '97.460035', high: 'n/a', low: 'n/a', open: '97.45516', close: 'n/a', timestamp: '1639308381804',
}, {
  currency: 'USD/DJF', rate: '177.28677', bid: '177.2779', ask: '177.29563', high: 'n/a', low: 'n/a', open: '177.28677', close: 'n/a', timestamp: '1639308381808',
}, {
  currency: 'USD/ETB', rate: '48.48541', bid: '48.48299', ask: '48.487838', high: 'n/a', low: 'n/a', open: '48.48541', close: 'n/a', timestamp: '1639308381811',
}, {
  currency: 'USD/GEL', rate: '3.1', bid: '3.1', ask: '3.1', high: 'n/a', low: 'n/a', open: '3.1', close: 'n/a', timestamp: '1639308381814',
}, {
  currency: 'USD/GHS', rate: '6.06986', bid: '6.069554', ask: '6.070161', high: 'n/a', low: 'n/a', open: '6.06986', close: 'n/a', timestamp: '1639308381817',
}, {
  currency: 'USD/GIP', rate: '0.75348', bid: '0.7534376', ask: '0.75351294', high: 'n/a', low: 'n/a', open: '0.75348', close: 'n/a', timestamp: '1639308381820',
}, {
  currency: 'USD/GMD', rate: '52.4525', bid: '52.45', ask: '52.455', high: 'n/a', low: 'n/a', open: '52.4525', close: 'n/a', timestamp: '1639308381823',
}, {
  currency: 'USD/GNF', rate: '9461.27705', bid: '9460.804', ask: '9461.7501', high: 'n/a', low: 'n/a', open: '9461.27705', close: 'n/a', timestamp: '1639308381826',
}, {
  currency: 'USD/GTQ', rate: '7.69813', bid: '7.697746', ask: '7.6985158', high: 'n/a', low: 'n/a', open: '7.69813', close: 'n/a', timestamp: '1639308381829',
}, {
  currency: 'USD/GYD', rate: '208.35332', bid: '208.3429', ask: '208.36373', high: 'n/a', low: 'n/a', open: '208.35332', close: 'n/a', timestamp: '1639308381832',
}, {
  currency: 'USD/HTG', rate: '100.38682', bid: '100.3818', ask: '100.39184', high: 'n/a', low: 'n/a', open: '100.38682', close: 'n/a', timestamp: '1639308381844',
}, {
  currency: 'USD/IQD', rate: '1454.97375', bid: '1454.901', ask: '1455.0465', high: 'n/a', low: 'n/a', open: '1454.97375', close: 'n/a', timestamp: '1639308381847',
}, {
  currency: 'USD/IRR', rate: '42277.1', bid: '42275', ask: '42279.2', high: 'n/a', low: 'n/a', open: '42277.1', close: 'n/a', timestamp: '1639308381850',
}, {
  currency: 'USD/ISK', rate: '130.4365', bid: '130.43', ask: '130.443', high: 'n/a', low: 'n/a', open: '130.4365', close: 'n/a', timestamp: '1639308381853',
}, {
  currency: 'USD/KGS', rate: '84.78784', bid: '84.7836', ask: '84.79208', high: 'n/a', low: 'n/a', open: '84.78784', close: 'n/a', timestamp: '1639308381856',
}, {
  currency: 'USD/KHR', rate: '4060.654', bid: '4060.451', ask: '4060.857', high: 'n/a', low: 'n/a', open: '4060.654', close: 'n/a', timestamp: '1639308381859',
}, {
  currency: 'USD/KMF', rate: '435.44675', bid: '435.425', ask: '435.4685', high: 'n/a', low: 'n/a', open: '435.44675', close: 'n/a', timestamp: '1639308381862',
}, {
  currency: 'USD/LAK', rate: '10960.598', bid: '10960.05', ask: '10961.146', high: 'n/a', low: 'n/a', open: '10960.598', close: 'n/a', timestamp: '1639308381865',
}, {
  currency: 'USD/LRD', rate: '141.805', bid: '141.8', ask: '141.81', high: 'n/a', low: 'n/a', open: '141.805', close: 'n/a', timestamp: '1639308381869',
}, {
  currency: 'USD/LSL', rate: '15.971', bid: '15.97', ask: '15.972', high: 'n/a', low: 'n/a', open: '15.971', close: 'n/a', timestamp: '1639308381872',
}, {
  currency: 'USD/LYD', rate: '4.57645', bid: '4.576226', ask: '4.5766836', high: 'n/a', low: 'n/a', open: '4.57645', close: 'n/a', timestamp: '1639308381875',
}, {
  currency: 'USD/MMK', rate: '1772.65565', bid: '1772.567', ask: '1772.7443', high: 'n/a', low: 'n/a', open: '1772.65565', close: 'n/a', timestamp: '1639308381878',
}, {
  currency: 'USD/MOP', rate: '8.00067', bid: '8.000265', ask: '8.001065', high: 'n/a', low: 'n/a', open: '8.00067', close: 'n/a', timestamp: '1639308381881',
}, {
  currency: 'USD/MWK', rate: '808.38072', bid: '808.3403', ask: '808.42113', high: 'n/a', low: 'n/a', open: '808.38072', close: 'n/a', timestamp: '1639308381884',
}, {
  currency: 'USD/MZN', rate: '63.833', bid: '63.83', ask: '63.836', high: 'n/a', low: 'n/a', open: '63.833', close: 'n/a', timestamp: '1639308381887',
}, {
  currency: 'USD/PAB', rate: '0.9959', bid: '0.9958462', ask: '0.99594578', high: 'n/a', low: 'n/a', open: '0.9959', close: 'n/a', timestamp: '1639308381890',
}, {
  currency: 'USD/RWF', rate: '1032.1506', bid: '1032.099', ask: '1032.2022', high: 'n/a', low: 'n/a', open: '1032.1506', close: 'n/a', timestamp: '1639308381893',
}, {
  currency: 'USD/SBD', rate: '8.10088', bid: '8.100479', ask: '8.101289', high: 'n/a', low: 'n/a', open: '8.10088', close: 'n/a', timestamp: '1639308381896',
}, {
  currency: 'USD/SDG', rate: '438.52', bid: '438.5', ask: '438.54', high: 'n/a', low: 'n/a', open: '438.52', close: 'n/a', timestamp: '1639308381899',
}, {
  currency: 'USD/SOS', rate: '586.05', bid: '586', ask: '586.1', high: 'n/a', low: 'n/a', open: '586.05', close: 'n/a', timestamp: '1639308381902',
}, {
  currency: 'USD/SRD', rate: '21.5591', bid: '21.558', ask: '21.5602', high: 'n/a', low: 'n/a', open: '21.5591', close: 'n/a', timestamp: '1639308381905',
}, {
  currency: 'USD/SVC', rate: '8.71453', bid: '8.714096', ask: '8.7149674', high: 'n/a', low: 'n/a', open: '8.71453', close: 'n/a', timestamp: '1639308381908',
}, {
  currency: 'USD/SZL', rate: '15.92108', bid: '15.92028', ask: '15.921872', high: 'n/a', low: 'n/a', open: '15.92108', close: 'n/a', timestamp: '1639308381911',
}, {
  currency: 'USD/TJS', rate: '11.24342', bid: '11.24286', ask: '11.243984', high: 'n/a', low: 'n/a', open: '11.24342', close: 'n/a', timestamp: '1639308381915',
}, {
  currency: 'USD/TMT', rate: '3.51', bid: '3.51', ask: '3.51', high: 'n/a', low: 'n/a', open: '3.51', close: 'n/a', timestamp: '1639308381918',
}, {
  currency: 'USD/TOP', rate: '2.28462', bid: '2.2845', ask: '2.28473', high: 'n/a', low: 'n/a', open: '2.28462', close: 'n/a', timestamp: '1639308381929',
}, {
  currency: 'USD/XAF', rate: '579.75239', bid: '579.7234', ask: '579.78137', high: 'n/a', low: 'n/a', open: '579.75239', close: 'n/a', timestamp: '1639308381932',
}, {
  currency: 'USD/XCD', rate: '2.70269', bid: '2.70255', ask: '2.70282', high: 'n/a', low: 'n/a', open: '2.70269', close: 'n/a', timestamp: '1639308381935',
}, {
  currency: 'USD/ZMW', rate: '16.00867', bid: '16.00787', ask: '16.009471', high: 'n/a', low: 'n/a', open: '16.00867', close: 'n/a', timestamp: '1639308381939',
}, {
  currency: 'TRY/JPY', rate: '8.164', bid: '8.142', ask: '8.186', high: '8.286', low: '8.103', open: '8.164', close: 'n/a', timestamp: '1639308382205',
}, {
  currency: 'USD/CNH', rate: '6.37564', bid: '6.37105', ask: '6.38022', high: '6.38933', low: '6.36442', open: '6.37564', close: 'n/a', timestamp: '1639308382209',
}, {
  currency: 'AUS200', rate: '7365.71', bid: '7364.91', ask: '7366.51', high: '7387.56', low: '7335.13', open: '7365.71', close: 'n/a', timestamp: '1639308382212',
}, {
  currency: 'ESP35', rate: '8370.83', bid: '8366.83', ask: '8374.83', high: '8416.28', low: '8326.3', open: '8370.83', close: 'n/a', timestamp: '1639308382216',
}, {
  currency: 'FRA40', rate: '7005.19', bid: '7004.69', ask: '7005.69', high: '7027.48', low: '6959.73', open: '7005.19', close: 'n/a', timestamp: '1639308382229',
}, {
  currency: 'GER30', rate: '15647.76', bid: '15647.21', ask: '15648.31', high: '15691.05', low: '15527.46', open: '15647.76', close: 'n/a', timestamp: '1639308382233',
}, {
  currency: 'HKG33', rate: '24062.78', bid: '24058.28', ask: '24067.28', high: '24222.85', low: '23904.94', open: '24062.78', close: 'n/a', timestamp: '1639308382236',
}, {
  currency: 'JPN225', rate: '28722.49', bid: '28717.49', ask: '28727.49', high: '28797.62', low: '28478.11', open: '28722.49', close: 'n/a', timestamp: '1639308382240',
}, {
  currency: 'NAS100', rate: '16318.68', bid: '16317.73', ask: '16319.63', high: '16336.75', low: '16135.23', open: '16318.68', close: 'n/a', timestamp: '1639308382243',
}, {
  currency: 'SPX500', rate: '4712.48', bid: '4712.18', ask: '4712.78', high: '4714.01', low: '4665.42', open: '4712.48', close: 'n/a', timestamp: '1639308382246',
}, {
  currency: 'UK100', rate: '7297.3', bid: '7296.55', ask: '7298.05', high: '7336.78', low: '7282.74', open: '7297.3', close: 'n/a', timestamp: '1639308382249',
}, {
  currency: 'US30', rate: '35978.81', bid: '35977.01', ask: '35980.61', high: '35989.56', low: '35705.14', open: '35978.81', close: 'n/a', timestamp: '1639308382252',
}, {
  currency: 'Copper', rate: '4.29715', bid: '4.2948', ask: '4.2995', high: '4.36225', low: '4.28125', open: '4.29715', close: 'n/a', timestamp: '1639308382256',
}, {
  currency: 'CHN50', rate: '16334.77', bid: '16329.27', ask: '16340.27', high: '16371.95', low: '16241.04', open: '16334.77', close: 'n/a', timestamp: '1639308382259',
}, {
  currency: 'EUSTX50', rate: '4208.85', bid: '4208.1', ask: '4209.6', high: '4223.24', low: '4177.74', open: '4208.85', close: 'n/a', timestamp: '1639308382262',
}, {
  currency: 'VOLX', rate: '19.875', bid: '19.85', ask: '19.9', high: '21.85', low: '19.75', open: '19.875', close: 'n/a', timestamp: '1639308382265',
}, {
  currency: 'USDOLLAR', rate: '12211.85', bid: '12208.6', ask: '12215.1', high: '12246.7', low: '12205.3', open: '12211.85', close: 'n/a', timestamp: '1639308382269',
}, {
  currency: 'US2000', rate: '2212.17', bid: '2211.97', ask: '2212.37', high: '2245.47', low: '2196.85', open: '2212.17', close: 'n/a', timestamp: '1639308382272',
}, {
  currency: 'USOil', rate: '71.955', bid: '71.935', ask: '71.975', high: '72.349', low: '70.309', open: '71.955', close: 'n/a', timestamp: '1639308382275',
}, {
  currency: 'UKOil', rate: '75.322', bid: '75.297', ask: '75.347', high: '75.721', low: '73.768', open: '75.322', close: 'n/a', timestamp: '1639308382278',
}, {
  currency: 'SOYF', rate: '1268.1975', bid: '1267.52', ask: '1268.875', high: '1277.125', low: '1258.625', open: '1268.1975', close: 'n/a', timestamp: '1639308382281',
}, {
  currency: 'NGAS', rate: '3.874', bid: '3.868', ask: '3.88', high: '3.9693', low: '3.7566', open: '3.874', close: 'n/a', timestamp: '1639308382284',
}, {
  currency: 'WHE/ATF', rate: '783.9975', bid: '783.37', ask: '784.625', high: '788.875', low: '767.52', open: '783.9975', close: 'n/a', timestamp: '1639308382287',
}, {
  currency: 'CORNF', rate: '590.235', bid: '589.73', ask: '590.74', high: '594.63', low: '586.39', open: '590.235', close: 'n/a', timestamp: '1639308382290',
}, {
  currency: 'Bund', rate: '173.943', bid: '173.915', ask: '173.971', high: '174.3', low: '173.759', open: '173.943', close: 'n/a', timestamp: '1639308382293',
}, {
  currency: 'XAU/USD', rate: '1782.935', bid: '1782.6', ask: '1783.27', high: '1789.6', low: '1770', open: '1782.935', close: 'n/a', timestamp: '1639308382296',
}, {
  currency: 'XAG/USD', rate: '22.174', bid: '22.154', ask: '22.194', high: '22.254', low: '21.665', open: '22.174', close: 'n/a', timestamp: '1639308382300',
}, {
  currency: 'EMBasket', rate: '8274.95', bid: '8266', ask: '8283.9', high: '8294.4', low: '8242.6', open: '8274.95', close: 'n/a', timestamp: '1639308382303',
}, {
  currency: 'JPYBasket', rate: '9287.75', bid: '9281', ask: '9294.5', high: '9318.6', low: '9265.7', open: '9287.75', close: 'n/a', timestamp: '1639308382314',
}, {
  currency: 'BCH/USD', rate: '448.76', bid: '447.21', ask: '450.31', high: '470.36', low: '439.33', open: '448.76', close: 'n/a', timestamp: '1639308382321',
}, {
  currency: 'ETH/USD', rate: '3998.65', bid: '3996.65', ask: '4000.65', high: '4234.15', low: '3929.95', open: '3998.65', close: 'n/a', timestamp: '1639308382324',
}, {
  currency: 'LTC/USD', rate: '152.845', bid: '152.72', ask: '152.97', high: '160.03', low: '148.55', open: '152.845', close: 'n/a', timestamp: '1639308382327',
}, {
  currency: 'XRP/USD', rate: '0.4605', bid: '0.458', ask: '0.463', high: '0.463', low: '0.458', open: '0.4605', close: 'n/a', timestamp: '1639308382331',
}, {
  currency: 'CryptoMajor', rate: '236.57', bid: '235.57', ask: '237.57', high: '249.687', low: '231.764', open: '236.57', close: 'n/a', timestamp: '1639308382334',
}, {
  currency: 'EOS/USD', rate: '3.135', bid: '3.12', ask: '3.15', high: '3.3642', low: '3.0389', open: '3.135', close: 'n/a', timestamp: '1639308382337',
}, {
  currency: 'XLM/USD', rate: '0.26673', bid: '0.26618', ask: '0.26728', high: '0.2835', low: '0.2634', open: '0.26673', close: 'n/a', timestamp: '1639308382340',
}, {
  currency: 'ESPORTS', rate: '4313.999', bid: '4311.155', ask: '4316.843', high: '4410.05', low: '4268.056', open: '4313.999', close: 'n/a', timestamp: '1639308382343',
}, {
  currency: 'BIOTECH', rate: '2600.9975', bid: '2600.21', ask: '2601.785', high: '2631.423', low: '2593.758', open: '2600.9975', close: 'n/a', timestamp: '1639308382346',
}, {
  currency: 'CANNABIS', rate: '2764.205', bid: '2755.935', ask: '2772.475', high: '2845.373', low: '2732.746', open: '2764.205', close: 'n/a', timestamp: '1639308382349',
}, {
  currency: 'FAANG', rate: '5736.177', bid: '5734.99', ask: '5737.364', high: '5751.116', low: '5659.794', open: '5736.177', close: 'n/a', timestamp: '1639308382352',
}, {
  currency: 'CHN.TECH', rate: '3274.3205', bid: '3266.19', ask: '3282.451', high: '3311.313', low: '3191.414', open: '3274.3205', close: 'n/a', timestamp: '1639308382356',
}, {
  currency: 'CHN.ECOMM', rate: '3601.509', bid: '3595.762', ask: '3607.256', high: '3639.466', low: '3541.958', open: '3601.509', close: 'n/a', timestamp: '1639308382359',
}, {
  currency: 'USEquities', rate: '3806.424', bid: '3805.424', ask: '3807.424', high: '3817.048', low: '3773.311', open: '3806.424', close: 'n/a', timestamp: '1639308382362',
}, {
  currency: 'BA.us', rate: '205.055', bid: '204.89', ask: '205.22', high: '209.36', low: '203.23', open: '205.055', close: 'n/a', timestamp: '1639308382366',
}, {
  currency: 'BAC/.us', rate: '44.515', bid: '44.45', ask: '44.58', high: '44.89', low: '44', open: '44.515', close: 'n/a', timestamp: '1639308382369',
}, {
  currency: 'DIS/.us', rate: '152.74', bid: '152.58', ask: '152.9', high: '154.85', low: '151.28', open: '152.74', close: 'n/a', timestamp: '1639308382372',
}, {
  currency: 'F.us', rate: '21.455', bid: '21.39', ask: '21.52', high: '21.54', low: '19.51', open: '21.455', close: 'n/a', timestamp: '1639308382375',
}, {
  currency: 'JPM/.us', rate: '159.825', bid: '159.66', ask: '159.99', high: '161.9', low: '158.95', open: '159.825', close: 'n/a', timestamp: '1639308382378',
}, {
  currency: 'PFE/.us', rate: '52.77', bid: '52.7', ask: '52.84', high: '52.91', low: '51.25', open: '52.77', close: 'n/a', timestamp: '1639308382381',
}, {
  currency: 'T.us', rate: '22.845', bid: '22.78', ask: '22.91', high: '23.15', low: '22.69', open: '22.845', close: 'n/a', timestamp: '1639308382384',
}, {
  currency: 'XOM/.us', rate: '63.005', bid: '62.94', ask: '63.07', high: '63.45', low: '62.16', open: '63.005', close: 'n/a', timestamp: '1639308382388',
}, {
  currency: 'AAPL.us', rate: '179.465', bid: '179.35', ask: '179.58', high: '179.74', low: '174.51', open: '179.465', close: 'n/a', timestamp: '1639308382391',
}, {
  currency: 'AMZN.us', rate: '3444.165', bid: '3443.45', ask: '3444.88', high: '3520.71', low: '3407.56', open: '3444.165', close: 'n/a', timestamp: '1639308382403',
}, {
  currency: 'FB.us', rate: '329.735', bid: '329.62', ask: '329.85', high: '335.15', low: '326.26', open: '329.735', close: 'n/a', timestamp: '1639308382406',
}, {
  currency: 'GOOG.us', rate: '2972.535', bid: '2972.42', ask: '2972.65', high: '2988.85', low: '2946.23', open: '2972.535', close: 'n/a', timestamp: '1639308382410',
}, {
  currency: 'INTC.us', rate: '50.59', bid: '50.52', ask: '50.66', high: '51.14', low: '49.99', open: '50.59', close: 'n/a', timestamp: '1639308382413',
}, {
  currency: 'MSFT.us', rate: '342.505', bid: '342.19', ask: '342.82', high: '343.31', low: '332.96', open: '342.505', close: 'n/a', timestamp: '1639308382416',
}, {
  currency: 'BNP/.fr', rate: '56.6', bid: '56.48', ask: '56.72', high: '57.61', low: '56.22', open: '56.6', close: 'n/a', timestamp: '1639308382420',
}, {
  currency: 'FP.fr', rate: '39.98', bid: '39.915', ask: '40.045', high: '40.045', low: '39.915', open: '39.98', close: 'n/a', timestamp: '1639308382423',
}, {
  currency: 'SAN/.fr', rate: '86.59', bid: '86.47', ask: '86.71', high: '86.99', low: '83.68', open: '86.59', close: 'n/a', timestamp: '1639308382426',
}, {
  currency: 'ADS/.de', rate: '254.5', bid: '254.09', ask: '254.91', high: '259.86', low: '253.14', open: '254.5', close: 'n/a', timestamp: '1639308382429',
}, {
  currency: 'ALV/.de', rate: '202.4', bid: '202.09', ask: '202.71', high: '204.26', low: '201.69', open: '202.4', close: 'n/a', timestamp: '1639308382432',
}, {
  currency: 'DAI/.de', rate: '74.24', bid: '74.12', ask: '74.36', high: '86.24', low: '70.89', open: '74.24', close: 'n/a', timestamp: '1639308382435',
}, {
  currency: 'DBK/.de', rate: '10.93', bid: '10.86', ask: '11', high: '11.12', low: '10.82', open: '10.93', close: 'n/a', timestamp: '1639308382439',
}, {
  currency: 'LHA/.de', rate: '6.025', bid: '5.96', ask: '6.09', high: '6.2', low: '5.92', open: '6.025', close: 'n/a', timestamp: '1639308382442',
}, {
  currency: 'SAP/.de', rate: '119.8', bid: '119.62', ask: '119.98', high: '120.04', low: '117.46', open: '119.8', close: 'n/a', timestamp: '1639308382445',
}, {
  currency: 'BARC.uk', rate: '183.02', bid: '181.97', ask: '184.07', high: '185.53', low: '169.44', open: '183.02', close: 'n/a', timestamp: '1639308382448',
}, {
  currency: 'BATS.uk', rate: '2759.25', bid: '2752.75', ask: '2765.75', high: '2769.01', low: '2644.99', open: '2759.25', close: 'n/a', timestamp: '1639308382451',
}, {
  currency: 'HSBA.uk', rate: '438.96', bid: '437.36', ask: '440.56', high: '443.21', low: '423.9', open: '438.96', close: 'n/a', timestamp: '1639308382454',
}, {
  currency: 'BABA.us', rate: '125.095', bid: '124.98', ask: '125.21', high: '125.66', low: '122.46', open: '125.095', close: 'n/a', timestamp: '1639308382457',
}, {
  currency: 'NFLX.us', rate: '611.45', bid: '611.34', ask: '611.56', high: '618.31', low: '605.73', open: '611.45', close: 'n/a', timestamp: '1639308382460',
}, {
  currency: 'TSLA.us', rate: '1016.465', bid: '1016.2', ask: '1016.73', high: '1021.24', low: '982.04', open: '1016.465', close: 'n/a', timestamp: '1639308382464',
}, {
  currency: 'GLEN.uk', rate: '367.73', bid: '366.28', ask: '369.18', high: '375.96', low: '364.2', open: '367.73', close: 'n/a', timestamp: '1639308382467',
}, {
  currency: 'BYND.us', rate: '64.49', bid: '64.43', ask: '64.55', high: '70.1', low: '63.73', open: '64.49', close: 'n/a', timestamp: '1639308382470',
}, {
  currency: 'UBER.us', rate: '36.675', bid: '36.61', ask: '36.74', high: '37.96', low: '36.54', open: '36.675', close: 'n/a', timestamp: '1639308382473',
}, {
  currency: 'ZM.us', rate: '185.295', bid: '185.18', ask: '185.41', high: '191.85', low: '183.76', open: '185.295', close: 'n/a', timestamp: '1639308382477',
}, {
  currency: 'JD.us', rate: '79.635', bid: '79.57', ask: '79.7', high: '80.83', low: '78.57', open: '79.635', close: 'n/a', timestamp: '1639308382488',
}, {
  currency: 'NVDA.us', rate: '301.805', bid: '301.54', ask: '302.07', high: '313.36', low: '298.35', open: '301.805', close: 'n/a', timestamp: '1639308382491',
}];
