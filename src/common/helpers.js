import axios from 'axios';

//= ====================== API CALLS =======================
const API_URL = 'http://api.sportradar.us/nfl/official/trial/v5/en/games/2018/PST/4/schedule.json?api_key=p3jrhz3b36atpuwr2d593jyq';
// TODO: GET YEAR FROM TODAYS DATE
// FIGURE OUT REG OR POST SEASON
// GET NFL WEEK
const getAllMatches = () => axios.get(API_URL).then(res => res.data);
const getSingleMatch = () => axios.get(API_URL).then(res => res.data);
const getBoard = () => axios.get(API_URL).then(res => res.data);
const createBoard = () => axios.get(API_URL).then(res => res.data);
const updateBoard = () => axios.get(API_URL).then(res => res.data);
//= ====================== End API =======================
//= ====================== Heloper Methods =======================
// NOTE: generates game board 5 x 5
// TODO: make dynamic
const generateSquares = num => (square) => {
  const data = [];
  let count = 0;
  const points = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const iter = (i) => {
    if (i === num) {
      return data;
    } if ((i <= 5 && i !== 0) || (i > 5 && i % 6 === 0)) {
      data.push(square(` ${points[count]} | ${points[count + 1]}`, i));
      count === 8 ? (count = 0) : (count += 2);
    } else {
      data.push(square(`${i}`, i));
    }
    return iter(i + 1);
  };

  return iter(0);
};
//= ====================== End Heloper Methods =======================
export default {
  getAllMatches, getSingleMatch, getBoard, generateSquares, createBoard, updateBoard,
}
