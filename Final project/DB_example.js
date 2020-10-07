// const reviews = [
//   {
//     hotel: {
//       id: 1,
//       name: "hotel 1",
//       users: [
//         {
//           id: 1,
//           username: "user name 1",
//           comment: "Hotel dep",
//           star: 5,
//         },
//       ],
//     },
//   },
//   {
//     hotel: {
//       id: 2,
//       name: "hotel 2",
//       users: [
//         {
//           id: 1,
//           username: "user name 1",
//           comment: "Hotel dep",
//           star: 5,
//         },
//         {
//           id: 2,
//           username: "user name 2",
//           comment: "Hotel xau",
//           star: 3,
//         },
//       ],
//     },
//   },
// ];

// const reviewByHotel = reviews.find((item) => item.hotel.id === 1);

// console.log(reviewByHotel);

const user = [
  {
    id: 1,
    name: "user name 1",
    address: "Address 1",
  },
  {
    id: 2,
    name: "user name 2",
    address: "Address 2",
  },
];

const hotel = [
  {
    id: 1,
    name: "hotel A",
    address: "address A",
  },
  {
    id: 2,
    name: "hotel B",
    address: "address B",
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

const getReviewsHotel = () => {
  const result = [];
  for (let item of reviewsHotel) {
    const mapData = {
      id: item.id,
      user: getUserById(item.userId),
      hotel: getHotelById(item.hotelId),
      comment: item.comment,
      star: item.star,
    };
    result.push(mapData);
  }
  return result;
};
const getUserById = (id) => {
  return user.find((item) => item.id === id);
};
const getHotelById = (id) => {
  return hotel.find((item) => item.id === id);
};

console.log("review Data ", getReviewsHotel());
