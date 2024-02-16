import {COLORS} from '../styles/colors';
import FontAwesome6 from '../styles/icons/fontAwesome6';
import FontAwesome from '../styles/icons/fontawesome';

export const videoData = [
  {
    id: 1,
    title: 'Cyber Skies 3',
    category: 'top',
    coverImage: {
      uri: `https://loremflickr.com/320/240?random=${Math.random(3)}`,
    },
    subTitle: 'Eleanor Walkman 1',
    videoURL: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 2,
    title: 'Cyber Skies 3',
    category: 'top',
    coverImage: {
      uri: `https://loremflickr.com/320/240?random=${Math.random(2)}`,
    },
    subTitle: 'Eleanor Walkman',
    videoURL:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  },
  {
    id: 3,
    title: 'Cyber Skies 3',
    category: 'top',
    coverImage: {
      uri: `https://loremflickr.com/320/240?random=${Math.random(3)}`,
    },
    subTitle: 'Eleanor Walkman',
    videoURL:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  },
];

export const transactionsData = [
  {
    tId: 1,
    trasactionDetails: 'Wallet transfer',
    receipientName: ' (Username) 7065087013',
    transactionType: 'Deposit',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',

    transactionReceiver: 'Zenith Bank',
    type: 'credit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/zenithbank.png'),
    target: 'ngn',
    for: 'investments',
    amount: '600,000.00',
  },
  {
    tId: 2,
    receipientName: ' (Username) 7065087013',
    transactionType: 'Transfer',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',

    trasactionDetails: 'Paid bills',
    transactionReceiver: 'MTN',
    type: 'debit', //or debit
    for: 'goals',
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/mtn.jpeg'),
    target: 'usd',
    amount: '5,350.00',
  },
  {
    tId: 3,
    receipientName: ' (Username) 7065087013',
    transactionType: 'Transfer',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',

    trasactionDetails: 'Paid bills',
    transactionReceiver: 'AIRTEL',
    for: 'investments',
    type: 'debit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/airtel.png'),
    target: 'usd',
    for: 'investments',
    amount: '1,000.0',
  },
  {
    tId: 4,
    receipientName: ' (Username) 7065087013',
    transactionType: 'Transfer',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',

    trasactionDetails: 'You made a withdrawal',
    transactionReceiver: 'GT Bank',
    type: 'debit', //or debit
    createdAt: '12 Dec. 2022',
    for: 'investments',
    receiverLogo: require('../assets/images/graphics/gtbank.png'),
    target: 'ngn',
    amount: '85,000.00',
  },
  {
    tId: 5,

    receipientName: ' (Username) 7065087013',
    transactionType: 'Transfer',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',

    trasactionDetails: 'Paid bills',
    transactionReceiver: '9MOBILE NG',
    type: 'debit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/9mobile.png'),
    target: 'ngn',
    amount: '16,400.00',
    for: 'goals',
  },
  {
    tId: 6,

    receipientName: ' (Username) 7065087013',
    transactionType: 'Transfer',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',

    trasactionDetails: 'You funded your NGN wallet',
    transactionReceiver: 'GT Bank',
    type: 'credit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/gtbank.png'),
    target: 'ngn',
    amount: '145,000.00',
    for: 'investments',
  },
  {
    tId: 7,

    receipientName: ' (Username) 7065087013',
    transactionType: 'Transfer',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',

    trasactionDetails: 'You funded your NGN wallet',
    transactionReceiver: 'Zenith Bank',
    type: 'credit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/zenithbank.png'),
    target: 'usd',
    amount: '100,000.00',
    for: 'goals',
  },
  {
    tId: 8,

    receipientName: ' (Username) 7065087013',
    transactionType: 'Transfer',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',

    trasactionDetails: 'Paid bills',
    transactionReceiver: 'MTN',
    type: 'debit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/mtn.jpeg'),
    target: 'usd',
    amount: '5,350.00',
    for: 'investments',
  },
  {
    tId: 9,

    receipientName: ' (Username) 7065087013',
    transactionType: 'Transfer',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',

    trasactionDetails: 'Paid bills',
    transactionReceiver: 'AIRTEL',
    type: 'debit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/airtel.png'),
    target: 'ngn',
    amount: '1,000.0',
    for: 'goals',
  },
  {
    tId: 10,

    receipientName: ' (Username) 7065087013',
    transactionType: 'Transfer',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',

    trasactionDetails: 'You made a withdrawal',
    transactionReceiver: 'GT BankBank',
    type: 'debit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/gtbank.png'),
    target: 'ngn',
    amount: '85,000.00',
    for: 'goals',
  },
  {
    tId: 11,

    receipientName: ' (Username) 7065087013',
    transactionType: 'Transfer',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',

    trasactionDetails: 'Paid bills',
    transactionReceiver: '9MOBILE NG',
    type: 'DEBIT', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/9mobile.png'),
    target: 'usd',
    amount: '16,400.00',
    for: 'investments',
  },
  {
    tId: 12,

    receipientName: ' (Username) 7065087013',
    transactionType: 'Transfer',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',

    trasactionDetails: 'Paid bills',
    transactionReceiver: '9MOBILE NG',
    type: 'DEBIT', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/9mobile.png'),
    target: 'usd',
    amount: '16,400.00',
    for: 'investments',
  },
  {
    tId: 13,

    receipientName: ' (Username) 7065087013',
    transactionType: 'Transfer',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',

    trasactionDetails: 'Paid bills',
    transactionReceiver: '9MOBILE NG',
    type: 'DEBIT', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/9mobile.png'),
    target: 'usd',
    amount: '16,400.00',
    for: 'investments',
  },
];

export const transactionLogoGeneral = require('../assets/images/graphics/wallet.png');

export const billTransactionsData = [
  {
    tId: 1,
    trasactionDetails: 'Electricity Bills',
    status: 'success',
    transactionID: '123jkfdfhjh212',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    billType: 'Bills',
    transactionReceiver: 'Ikeja Electricity',
    type: 'credit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/wallet.png'),
    target: 'ngn',
    amount: '600,000.00',
    fee: '0.0',
  },
  {
    tId: 2,
    trasactionDetails: 'Data Purchase',
    status: 'success',
    transactionID: '123jkfdfhjffh212',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    billType: 'Data',
    transactionReceiver: 'Airtel',
    mobileNumber: '09031824914',
    type: 'credit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/airtel.png'),
    target: 'ngn',
    amount: '10,000.00',
    fee: '0.0',
  },
  {
    tId: 3,
    trasactionDetails: 'Funded Wallet',
    status: 'success',
    transactionID: '123jkfdfhjdfffh212',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    billType: 'Bills',
    transactionReceiver: 'Deposit',
    type: 'debit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/wallet.png'),
    target: 'ngn',
    amount: '70,000.00',
    fee: '0.0',
  },
  {
    tId: 4,
    trasactionDetails: 'Airtime Purchase',
    status: 'success',
    transactionID: '123jkfdfhjdfffh212',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    billType: 'Airtime',
    transactionReceiver: 'MTN',
    mobileNumber: '09031824914',
    type: 'credit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/mtn.jpeg'),
    target: 'ngn',
    amount: '10,000.00',
    fee: '0.0',
  },
  {
    tId: 5,
    trasactionDetails: 'Betting',
    status: 'success',
    transactionID: '123jkfdfhjdfffh212',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    billType: 'Bills',
    transactionReceiver: '9jaBet',
    type: 'credit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/bet9ja.png'),
    target: 'ngn',
    amount: '10,000.00',
    fee: '0.0',
  },
  {
    tId: 6,
    trasactionDetails: 'Funded Wallet',
    status: 'success',
    transactionID: '123jkfdfhjdfffh212',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    billType: 'fund',
    transactionReceiver: 'Deposit',
    type: 'debit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/wallet.png'),
    target: 'ngn',
    amount: '70,000.00',
    fee: '0.0',
  },

  {
    tId: 7,
    trasactionDetails: 'Internet',
    status: 'success',
    transactionID: '123jkfdfhjdfffh212',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    billType: 'Data',
    transactionReceiver: 'Spectranet',
    mobileNumber: '09031824914',
    type: 'credit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/Spectranet-Data-Plans.png'),
    target: 'ngn',
    amount: '24,000.00',
    fee: '0',
  },
  {
    tId: 8,
    trasactionDetails: 'Cable TV',
    status: 'success',
    transactionID: '123jkfdfhjdfffh212',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    billType: 'Bills',
    transactionReceiver: 'DSTV',
    type: 'credit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/DSTV-logo-214D0468CA-seeklogo.png'),
    target: 'ngn',
    amount: '24,000.00',
    fee: '0.0',
  },
  {
    tId: 9,
    trasactionDetails: 'GiftCards',
    status: 'success',
    transactionID: '123jkfdfhjdfffh212',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    billType: 'Bills',
    transactionReceiver: 'Amazon',
    type: 'credit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/Spectranet-Data-Plans.png'),
    target: 'ngn',
    amount: '24,600.00',
    fee: '0.0',
  },
  {
    tId: 10,
    trasactionDetails: 'GiftCards',
    status: 'success',
    transactionID: '123jkfdfhjdfffh212',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    billType: 'Bills',
    transactionReceiver: 'Amazon',
    type: 'credit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/Spectranet-Data-Plans.png'),
    target: 'ngn',
    amount: '24,600.00',
    fee: '0.0',
  },
  {
    tId: 11,
    trasactionDetails: 'GiftCards',
    status: 'success',
    transactionID: '123jkfdfhjdfffh212',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    billType: 'Bills',
    transactionReceiver: 'Amazon',
    type: 'credit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/Spectranet-Data-Plans.png'),
    target: 'ngn',
    amount: '24,600.00',
    fee: '0.0',
  },
  {
    tId: 12,
    trasactionDetails: 'GiftCards',
    status: 'success',
    transactionID: '123jkfdfhjdfffh212',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    billType: 'Bills',
    transactionReceiver: 'Amazon',
    type: 'credit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/Spectranet-Data-Plans.png'),
    target: 'ngn',
    amount: '24,600.00',
    fee: '0.0',
  },
  {
    tId: 13,
    trasactionDetails: 'DovaPoints Earned',
    status: 'success',
    transactionID: '123jkfdfhjdfffh212',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    billType: 'Dovapoints',
    transactionReceiver: 'Deposit',
    type: 'debit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/wallet.png'),
    target: 'ngn',
    amount: '24,600.00',
    fee: '0.0',
  },
  {
    tId: 14,
    trasactionDetails: 'Cashback Earned',
    status: 'success',
    transactionID: '123jkfdfhjdfffh212',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    billType: 'Cashbacks',
    transactionReceiver: 'Deposit',
    type: 'debit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/wallet.png'),
    target: 'ngn',
    amount: '600.00',
    fee: '0.0',
  },
];

export const walletData = [
  {
    tId: 1,
    trasactionDetails: 'Wallet transfer',
    receipientName: ' (Username) 7065087013',
    transactionType: 'Deposit',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',

    transactionReceiver: 'Zenith Bank',
    type: 'credit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/wallet.png'),
    target: 'ngn',
    for: 'investments',
    amount: '600,000.00',
  },
  {
    tId: 2,
    receipientName: ' (Username) 7065087013',
    transactionType: 'Transfer',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',

    trasactionDetails: 'Wallet transfer',
    transactionReceiver: 'MTN',
    type: 'credit', //or debit
    for: 'goals',
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/wallet.png'),
    target: 'ngn',
    amount: '5,350.00',
  },
  {
    tId: 3,
    receipientName: ' (Username) 7065087013',
    transactionType: 'Transfer',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',

    trasactionDetails: 'Wallet transfer  ',
    transactionReceiver: 'AIRTEL',
    for: 'investments',
    type: 'credit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/wallet.png'),
    target: 'ngn',
    for: 'investments',
    amount: '1,000.0',
  },
  {
    tId: 4,
    receipientName: ' (Username) 7065087013',
    transactionType: 'Transfer',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: '(*****78084)',

    trasactionDetails: 'Wallet transfer',
    transactionReceiver: 'GT Bank',
    type: 'credit', //or debit
    createdAt: '12 Dec. 2022',
    for: 'investments',
    receiverLogo: require('../assets/images/graphics/wallet.png'),
    target: 'ngn',
    amount: '85,000.00',
  },
];

export const transactionCardTabs = [
  {
    id: 1,
    cardName: 'All',
    active: true,
    code: 'NGN',
    currency: '₦',
    balance: '',
  },
  {
    id: 2,
    cardName: 'NGN Wallet',
    active: false,
    code: 'USD',
    currency: '$',
    balance: '',
  },
  {
    id: 3,
    cardName: 'USD Wallet',
    active: false,
    code: 'USD',
    currency: '$',
    balance: '',
  },
  {
    id: 4,
    cardName: 'Investments',
    active: false,
    code: 'USD',
    currency: '$',
    balance: '',
  },
  {
    id: 5,
    cardName: 'Goals',
    active: false,
    code: 'USD',
    currency: '$',
    balance: '',
  },
];

export const billTransactionCardTabs = [
  {
    id: 1,
    cardName: 'All',
    active: true,
    code: 'NGN',
    currency: '₦',
    balance: '',
  },
  {
    id: 2,
    cardName: 'Airtime',
    active: false,
    code: 'USD',
    currency: '$',
    balance: '',
  },
  {
    id: 3,
    cardName: 'Data',
    active: false,
    code: 'USD',
    currency: '$',
    balance: '',
  },
  // {
  //   id: 4,
  //   cardName: 'Cashbacks',
  //   active: false,
  //   code: 'USD',
  //   currency: '$',
  //   balance: '',
  // },

  // {
  //   id: 6,
  //   cardName: 'Dovapoints',
  //   active: false,
  //   code: 'USD',
  //   currency: '$',
  //   balance: '',
  // },
  {
    id: 7,
    cardName: 'Bills',
    active: false,
    code: 'USD',
    currency: '$',
    balance: '',
  },
  {
    id: 8,
    cardName: 'Education',
    active: false,
    code: 'NGN',
    currency: '₦',
    balance: '',
  },
  {
    id: 9,
    cardName: 'Cable',
    active: false,
    code: 'NGN',
    currency: '₦',
    balance: '',
  },
];

export const dataCardTabs = [
  // {
  //   id: 1,
  //   cardName: 'Top Offers',
  //   active: true,
  //   code: 'NGN',
  //   currency: '₦',
  //   balance: '',
  // },
  // {
  //   id: 2,
  //   cardName: 'Daily',
  //   active: false,
  //   code: 'USD',
  //   currency: '$',
  //   balance: '',
  // },
  // {
  //   id: 3,
  //   cardName: 'Weekly',
  //   active: false,
  //   code: 'USD',
  //   currency: '$',
  //   balance: '',
  // },
  {
    id: 2,
    cardName: 'Monthly',
    active: false,
    code: 'USD',
    currency: '$',
    balance: '',
  },

  // {
  //   id: 6,
  //   cardName: '2-Months',
  //   active: false,
  //   code: 'USD',
  //   currency: '$',
  //   balance: '',
  // },
  // {
  //   id: 7,
  //   cardName: '3-Months',
  //   active: false,
  //   code: 'USD',
  //   currency: '$',
  //   balance: '',
  // },
  // {
  //   id: 8,
  //   cardName: 'Yearly',
  //   active: false,
  //   code: 'USD',
  //   currency: '$',
  //   balance: '',
  // },
];

export const fakeUser = {
  name: 'Angela',
  username: '@angela2023',
  email: 'Jessica2023@mail.com',
  tagId: 'TagId',
  mobile: '0903 182 4914',
  dob: 'February 21, 2000',
  address: 'Ope Junction Road, ENUGU',
  gender: 'Female',
  refCode: 'JESSICA2023',
  refSignUp: 0,
  refThatPaid: 0,
  accountNumber: '7065087013',
  fullName: 'JESSICA SANDRA ALBERT',
};

export const homeSlide = [
  {
    id: 1,
    title: 'Top',
    amount: '$2,500.00',
    image: require('./../assets/images/graphics/homeSlide1.png'),
    icon: (
      <FontAwesome6
        iconName={'hand-middle-finger'}
        size={16}
        color={COLORS.videoGold}
      />
    ),
    onPress: () => {},
  },
  {
    id: 2,
    title: 'RPG',
    amount: '$2,500.00',
    image: require('./../assets/images/graphics/homeSlide2.png'),
    onPress: () => {},
    icon: (
      <FontAwesome6
        iconName={'bolt-lightning'}
        size={16}
        color={COLORS.videoError}
      />
    ),
  },
  {
    id: 3,
    title: 'Action',
    amount: '$2,500.00',
    image: require('./../assets/images/graphics/homeSlide3.png'),
    onPress: () => {},
    icon: (
      <FontAwesome6 iconName={'hand-peace'} size={16} color={COLORS.gold} />
    ),
  },
  {
    id: 3,
    title: 'Roma',
    amount: '$2,500.00',
    image: require('./../assets/images/graphics/homeSlide4.png'),
    onPress: () => {},
    icon: (
      <FontAwesome6
        iconName={'hand-peace'}
        size={16}
        color={COLORS.videoError}
      />
    ),
  },
];

// Image 3 and Image 4 will no0t give a full rasdius, you need to request for the right ones

export const adSlide = [
  {
    id: 1,
    title: 'Earn Points',
    subTitle: 'Accumulate points with every transaction.',
    image: require('./../assets/images/graphics/adBanner1.png'),
    icon: <FontAwesome />,
    onPress: () => {},
  },
  // {
  //   id: 1,
  //   title: 'Earn More',
  //   subTitle: 'Earn More From Paying Through Us',
  //   image: require('./../assets/images/graphics/adBanner1.png'),
  //   icon: <FontAwesome />,
  //   onPress: () => {},
  // },
  {
    id: 2,
    title: 'Refer  & Earn',
    subTitle: 'Enjoy extra points, exclusive discounts for every transaction',
    image: require('./../assets/images/graphics/adBanner2.png'),
    // image: require('./../assets/images/graphics/trophybanner.png'),

    onPress: () => {},
  },
];
export const allAssets = [
  {
    id: 1,
    title: 'Dova wallet',
    subTitle: 'Dova wallet',
    header: 'Enjoy a streamlined digital and mobile banking experience',
    welcomeImage: require('../assets/images/graphics/walletDove.png'),
    image: require('./../assets/images/graphics/asset1.png'),
    icon: <FontAwesome />,
    onPress: () => {},
  },
  {
    id: 2,
    title: 'Virtual Bank',
    subTitle: 'Virtual Bank',
    header: 'Enjoy swift and secure transfers Worldwide.',
    welcomeImage: require('../assets/images/graphics/virtualbank.png'),
    image: require('./../assets/images/graphics/asset2.png'),
    onPress: () => {},
  },
  {
    id: 3,
    title: 'Cashback',
    subTitle: 'Cashback',
    header: 'Earn Cashback on all your Spendings.',
    welcomeImage: require('../assets/images/graphics/cashBackWelcom.png'),
    image: require('./../assets/images/graphics/asset3.png'),
    onPress: () => {},
  },
  {
    id: 4,
    title: 'Bills',
    subTitle: 'Pay Bills',
    header: 'Pay Bills from your Comfort Zone',
    welcomeImage: require('../assets/images/graphics/ewallet.png'),
    image: require('./../assets/images/graphics/asset4.png'),
    onPress: () => {},
  },
];

export const cashBackImage = require('./../assets/images/graphics/cashBack.png');
export const payBillImage = require('./../assets/images/graphics/billpayment.png');

export const payBillscategory = [
  {
    id: 1,
    title: 'Airtime',
    image: require('./../assets/images/graphics/airtime.png'),
  },
  {
    id: 2,
    title: 'Transport',
    image: require('./../assets/images/graphics/transport.png'),
  },
  {
    id: 3,
    title: 'Food',
    image: require('./../assets/images/graphics/food.png'),
  },
  {
    id: 4,
    title: 'Food',
    image: require('./../assets/images/graphics/food2.png'),
  },
  {
    id: 5,
    title: 'Buy Movie Ticket',
    image: require('./../assets/images/graphics/ticket.png'),
  },
  {
    id: 6,
    title: 'Housing',
    image: require('./../assets/images/graphics/housing.png'),
  },
  {
    id: 7,
    title: 'Education',
    image: require('./../assets/images/graphics/education.png'),
  },
  {
    id: 8,
    title: 'Healthcare',
    image: require('./../assets/images/graphics/heathcare.png'),
  },
  {
    id: 9,
    title: 'Others',
    image: require('./../assets/images/graphics/others.png'),
  },
];

export const mtnLogo = require('../assets/images/graphics/mtn.jpeg');
export const airtimeBillsWelcome = require('../assets/images/graphics/ewallet.png');
export const sendAndReceive = require('./../assets/images/graphics/adBanner1.png');
export const UsLogo = require('./../assets/images/graphics/usflag3.jpeg');
export const mastercardLogo = require('./../assets/images/graphics/rsz_mastercard.png');
export const starIcon = require('./../assets/images/graphics/starstar.png');
export const badgeIcon = require('./../assets/images/graphics/badge.png');
export const randomUser = {
  uri: `https://loremflickr.com/320/240?random=${Math.random(2)}`,
};

export const jessicaImage = {
  uri: 'https://loremflickr.com/320/240/paris,girl/all',
};

export const morning = require('./../assets/images/graphics/sunny.png');
export const bell = require('./../assets/images/graphics/bell.png');

export const cashBackRewards = [
  {
    id: 1,
    title: 'Up to N60 Cashback!',
    subTitle: 'Daily Cashback on your first Airtime top-ups',
    rimage: require('./../assets/images/graphics/rsz_cashbackreward.png'),
  },
  {
    id: 2,
    title: 'Up to N50 Cashback!',
    subTitle: 'Daily Cashback on your Data Purchase',
    rimage: require('./../assets/images/graphics/rsz_cashbackreward.png'),
  },
  {
    id: 3,
    title: 'Send Money for free',
    subTitle: 'Send money to your friend for free today',
    rimage: require('./../assets/images/graphics/rsz_cashbackreward.png'),
  },
];

export const notifcations = [
  {
    id: 1,
    title: 'Dova Rate Alert',
    subTitle: '$1 = N750 (Top up) & $1 = N725 (Payout)',
    date: 'Dec 04, 2022',
  },
  {
    id: 2,
    title: 'Dova Rate Alert',
    subTitle: '$1 = N750 (Top up) & $1 = N725 (Payout)',
    date: 'Dec 04, 2022',
  },
  {
    id: 3,
    title: 'Dova customer service',
    subTitle: 'The NGN funding is now available',
    date: 'Dec 04, 2022',
  },
  {
    id: 4,
    title: 'Dova customer service',
    subTitle: 'The NGN funding is now available',
    date: 'Dec 04, 2022',
  },
];

export const claimedRewards = [
  {
    id: 1,
    title: '$1 Earned on Transfer',
    subTitle: '10 successful transactions',
    date: 'Dec 04, 2022',
  },
  {
    id: 2,
    title: 'Dova Rate Alert',
    subTitle: '$1 = N750 (Top up) & $1 = N725 (Payout)',
    date: 'Dec 04, 2022',
  },
  {
    id: 3,
    title: 'Dova customer service',
    subTitle: 'The NGN funding is now available',
    date: 'Dec 04, 2022',
  },
  {
    id: 4,
    title: 'Dova customer service',
    subTitle: 'The NGN funding is now available',
    date: 'Dec 04, 2022',
  },
];

export const newDovaPointsData = [
  {
    id: 1,
    pointTitle: 'DovaPoints Earned',
    amount: '10',
    remainder: 'P 254',
    date: 'Yesterday 6:51 PM',
    type: 'credit',
  },
  {
    id: 2,
    pointTitle: 'DovaPoints Earned',
    amount: '10',
    remainder: 'P 254',
    date: 'Yesterday 6:51 PM',
    type: 'credit',
  },
  {
    id: 3,
    pointTitle: 'DovaPoints Earned',
    amount: '10',
    remainder: 'P 254',
    date: 'Yesterday 6:51 PM',
    type: 'credit',
  },
];

export const dovaPointsData = [
  {
    tId: 1,
    trasactionDetails: 'DovaPoints Earned',
    receipientName: ' (Username) 7065087013',
    transactionType: 'Transfer',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',
    date: 'Yesterday 6:51 PM',
    transactionReceiver: 'Zenith Bank',
    type: 'credit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/blank.png'),
    target: 'ngn',
    for: 'investments',
    amount: '10',
    remainder: 'P 254',
  },
  {
    tId: 2,
    receipientName: ' (Username) 7065087013',
    transactionType: 'Transfer',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',
    date: 'Yesterday 6:51 PM',
    trasactionDetails: 'Paid bills',
    transactionReceiver: 'MTN',
    type: 'credit', //or debit
    for: 'goals',
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/blank.png'),
    target: 'usd',
    amount: '10',
    remainder: 'P 254',
  },
  {
    tId: 3,
    receipientName: ' (Username) 7065087013',
    transactionType: 'Transfer',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',
    date: 'Yesterday 6:51 PM',
    trasactionDetails: 'DovaPoints Withdrawal',
    transactionReceiver: 'AIRTEL',
    for: 'investments',
    type: 'debit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/blank.png'),
    target: 'usd',
    for: 'investments',
    amount: '25',
    remainder: 'P 235',
  },
  {
    tId: 4,
    receipientName: ' (Username) 7065087013',
    transactionType: 'Transfer',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',
    date: 'Yesterday 6:51 PM',
    trasactionDetails: 'DovaPoints Withdrawal',
    transactionReceiver: 'GT Bank',
    type: 'debit', //or debit
    createdAt: '12 Dec. 2022',
    for: 'investments',
    receiverLogo: require('../assets/images/graphics/blank.png'),
    target: 'ngn',
    amount: '25',
    remainder: 'P 235',
  },
  {
    tId: 5,

    receipientName: ' (Username) 7065087013',
    transactionType: 'Transfer',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',
    date: 'Yesterday 6:51 PM',
    trasactionDetails: 'DovaPoints Withdrawal',
    transactionReceiver: '9MOBILE NG',
    type: 'credit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/blank.png'),
    target: 'ngn',
    amount: '10',
    remainder: 'P 235',
  },
  {
    tId: 6,

    receipientName: ' (Username) 7065087013',
    transactionType: 'Transfer',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',
    date: 'Yesterday 6:51 PM',
    trasactionDetails: 'DovaPoints Withdrawal',
    transactionReceiver: 'GT Bank',
    type: 'credit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/blank.png'),
    target: 'ngn',
    amount: '10',
    remainder: 'P 235',
  },
];
// kudalogo.png
export const leaders = [
  {
    id: 1,
    name: 'David Emulo',
    points: 'P 20854',
    image: {uri: `https://loremflickr.com/320/240?random=${Math.random(5)}`},
  },
  {
    id: 2,
    name: 'David Emulo',
    points: 'P 20854',
    image: {uri: `https://loremflickr.com/320/240?random=${Math.random(1)}`},
  },
  {
    id: 3,
    name: 'David Emulo',
    points: 'P 20854',
    image: {uri: `https://loremflickr.com/320/240?random=${Math.random(6)}`},
  },
  {
    id: 4,
    name: 'David Emulo',
    points: 'P 20854',
    image: {uri: `https://loremflickr.com/320/240?random=${Math.random(7)}`},
  },
  {
    id: 5,
    name: 'David Emulo',
    points: 'P 20854',
    image: {uri: `https://loremflickr.com/320/240?random=${Math.random(8)}`},
  },
];

export const cardsTransaction = [
  {
    tId: 1,
    trasactionDetails: 'Wallet Transfer',
    receipientName: ' (Username) 7065087013',
    transactionType: 'Transfer',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',

    transactionReceiver: 'Deposit', //change this to card Transaction for live
    type: 'credit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/wallet.png'),
    target: 'ngn',
    for: 'investments',
    amount: '600,000.00',
  },
  {
    tId: 2,
    receipientName: ' (Username) 7065087013',
    transactionType: 'Transfer',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',

    trasactionDetails: 'SM Ads',
    transactionReceiver: 'Withdrawal', //change this to card Transaction for live
    type: 'debit', //or debit
    for: 'goals',
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/twitter2.png'),
    target: 'usd',
    amount: '14,350.00',
  },
  {
    tId: 3,
    receipientName: ' (Username) 7065087013',
    transactionType: 'Transfer',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',

    trasactionDetails: 'Shopping',
    transactionReceiver: 'Withdrawal',
    for: 'investments',
    type: 'debit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/amazon.png'),
    target: 'usd',
    for: 'investments',
    amount: '45,000.0',
  },
  {
    tId: 4,
    receipientName: ' (Username) 7065087013',
    transactionType: 'Transfer',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',

    trasactionDetails: 'SM Ads',
    transactionReceiver: 'Withdrawal',
    type: 'debit', //or debit
    createdAt: '12 Dec. 2022',
    for: 'investments',
    receiverLogo: require('../assets/images/graphics/facebook.png'),
    target: 'ngn',
    amount: '65,000.00',
  },
  {
    tId: 5,

    receipientName: ' (Username) 7065087013',
    transactionType: 'Transfer',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',

    trasactionDetails: 'SM Ads',
    transactionReceiver: 'Withdrawal',
    type: 'debit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/instagram.png'),
    target: 'ngn',
    amount: '16,400.00',
    for: 'goals',
  },
  {
    tId: 6,

    receipientName: ' (Username) 7065087013',
    transactionType: 'Transfer',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',

    trasactionDetails: 'Shopping',
    transactionReceiver: 'Withdrawal',
    type: 'debit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/amazon.png'),
    target: 'ngn',
    amount: '145,000.00',
    for: 'investments',
  },
  {
    tId: 7,

    receipientName: ' (Username) 7065087013',
    transactionType: 'Transfer',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',

    trasactionDetails: 'Wallet Transfer',
    transactionReceiver: 'Withdrawal',
    type: 'credit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/wallet.png'),
    target: 'usd',
    amount: '100,000.00',
    for: 'goals',
  },
  {
    tId: 8,

    receipientName: ' (Username) 7065087013',
    transactionType: 'Transfer',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',

    trasactionDetails: 'SM Ads',
    transactionReceiver: 'Withdrawal',
    type: 'debit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/linkedin.png'),
    target: 'usd',
    amount: '5,350.00',
    for: 'investments',
  },
  {
    tId: 9,

    receipientName: ' (Username) 7065087013',
    transactionType: 'Transfer',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',

    trasactionDetails: 'SM Ads',
    transactionReceiver: 'Withdrawal',
    type: 'debit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/twitter2.png'),
    target: 'ngn',
    amount: '1,000.0',
    for: 'goals',
  },
  {
    tId: 10,

    receipientName: ' (Username) 7065087013',
    transactionType: 'Transfer',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',

    trasactionDetails: 'SM Ads',
    transactionReceiver: 'GT BankBank',
    type: 'debit', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/facebook.png'),
    target: 'ngn',
    amount: '85,000.00',
    for: 'goals',
  },
  {
    tId: 11,

    receipientName: ' (Username) 7065087013',
    transactionType: 'Transfer',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',

    trasactionDetails: 'SM Ads',
    transactionReceiver: 'Withdrawal',
    type: 'DEBIT', //or debit
    createdAt: '12 Dec. 2022',
    receiverLogo: require('../assets/images/graphics/instagram.png'),
    target: 'usd',
    amount: '16,400.00',
    for: 'investments',
  },
];

export const rewardCard = [
  {
    id: 1,
    cardName: 'Dovapoints',
    active: true,
    code: 'NGN',
    currency: '₦',
    earningsThisMonth: '23,609.00',
    earningsThisyear: '1,609.00',
  },
  {
    id: 2,
    cardName: 'Cashback',
    active: false,
    code: 'NGN',
    currency: '$',
    earningsThisMonth: '103,609.00',
    earningsThisyear: '0.00',
  },
];

export const boardCard = [
  {
    id: 1,
    cardName: 'Weekly',
    active: true,
    code: 'NGN',
    currency: '₦',
    earningsThisMonth: '23,609.00',
    earningsThisyear: '1,609.00',
  },
  {
    id: 2,
    cardName: 'All Time',
    active: false,
    code: 'NGN',
    currency: '₦',
    earningsThisMonth: '103,609.00',
    earningsThisyear: '0.00',
  },
];

export const cashBackData = [
  {
    tId: 1,
    trasactionDetails: 'MTN Airtime',
    receipientName: ' (Username) 7065087013',
    transactionType: '12 Dec. 2022, 07:34',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',
    transactionReceiver: 'Zenith Bank',
    type: 'credit', //or debit
    createdAt: 'Balance after: NGN 10.00',
    receiverLogo: require('../assets/images/graphics/mtn.jpeg'),
    target: 'ngn',
    for: 'investments',
    amount: '600,000.00',
  },
  {
    tId: 2,
    trasactionDetails: 'Airtel Airtime',
    receipientName: ' (Username) 7065087013',
    transactionType: '12 Dec. 2022, 07:34',
    status: 'completed',
    transactionID: '123jkfdfhjh212',
    paymentBank: 'Kuda Micofinance Bank',
    confirmedOn: ' 16 Mar. 2023 | 03:27',
    accountNumber: ' (*****78084)',

    transactionReceiver: 'Zenith Bank',
    type: 'credit', //or debit
    createdAt: 'Balance after: NGN 10.00',
    receiverLogo: require('../assets/images/graphics/airtel.png'),
    target: 'ngn',
    for: 'investments',
    amount: '600,000.00',
  },
];

export const virtualWallet = [
  {
    id: 1,
    accName: fakeUser.fullName,
    accNumber: '7065087013',
    bankName: 'FCMB',
    bankImage: require('./../assets/images/graphics/FCMB_Logo.png'),
  },
  {
    id: 2,
    accName: fakeUser.fullName,
    accNumber: '7065087013',
    bankName: 'GTBANK',
    bankImage: require('./../assets/images/graphics/gtbank.png'),
  },

  {
    id: 3,
    accName: fakeUser.fullName,
    accNumber: '7065087013',
    bankName: 'PROVIDUS BANK',
    bankImage: require('./../assets/images/graphics/providus.png'),
  },
];

export const ikejaElectricty = require('./../assets/images/graphics/ikejaelectricity.png');
export const kudalogo = require('./../assets/images/graphics/kudalogo.png');
export const monielogo = require('./../assets/images/graphics/moniepointlogo.png');
export const flutterlogo = require('./../assets/images/graphics/flutterlogo.jpeg');
