import Axios from 'axios';

function getSkills() {
  return Axios.get('/data/skills.json');
}

function getUserInfo() {
  return Axios.get('/data/skills.json');
}

export const helpers = {
  getData: function () {
    return Axios.all([getSkills(), getUserInfo()]).then(function (arr) {
      return {
        skills: arr[0].data,
      }
    });
  },
}
