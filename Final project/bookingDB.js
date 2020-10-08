const user = [
  {
    id: 1,
    name: "user name 1",
    age: 18,
    address: "Address 1",
    phone: 0987654376,
    mail: "qwerty@gmail.com"
  },
  {
    id: 2,
    name: "user name 2",
    age: 18,
    address: "Address 2",
    phone: 0967342565,
    mail: "abcxyz@gmail.com"
  },
];

const hotel = [
  {
    id: 1,
    name: "hotel A",
    address: "address A",
    phone: 19006886,
    mail: "fghjkl@gmail.com"
  },
  {
    id: 2,
    name: "hotel B",
    address: "address B",
    phone: 19005645,
    mail: " yuiuopiy@gmail.com",
  },
];

const room = [
  {
    id: 1,
    hotelId: 1,
    roomCap: 2,
    roomName: "The room",
  },
  {
    id: 2,
    hotelId: 2,
    roomCap: 2,
    roomName: "The room 2",
  },
];

const reviewsHotel = [
  {
    id: 1,
    hotelId: 1,
    userId: 1,
    comment: "Good",
    star: 4,
  },
  {
    id: 2,
    hotelId: 1,
    userId: 1,
    comment: "Bad",
    star: 2,
  },
  {
    id: 3,
    userId: 2,
    hotelId: 1,
    comment: "Good",
    star: 4,
  },
];

const booking = [
  {
    id: 1,
    userId: 1,
    hotelId: 1,
    roomId: 1,
  },
  {
    id: 2,
    userId: 3,
    hotelId: 2,
    roomId: 1,
  },
  {
    id: 3,
    userId: 2,
    hotelId: 2,
    roomId: 2,
  },
];
