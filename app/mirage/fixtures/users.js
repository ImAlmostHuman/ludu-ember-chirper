// app/mirage/fixtures/users.js

export default [
  {
    id: 1, 
    username: 'tom', // Put your username here
    numberOfChirps: 2,
    numberOfFollowing: 5,
    numberOfFollowers: 5,
    aboutMe: 'Goodbye Mary, goodbye Jane, will we ever meet again.',
    joinedAt: new Date('2017-05-21T09:30:24'),
    chirps: [1, 2, 3],
    followees: [1],
    followers: [1]
  }
];