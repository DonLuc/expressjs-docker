const express = require('express');
const router = express.Router();
const http = require('https');

const apiKey =
  '9312f9173fad7330dc780c926a665525c9023c3c4433416130766a602be7c83e';
const baseURL = 'https://apiv3.apifootball.com/';

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.get('/teams', (req, res) => {
  let data = '';
  http
    .get(
      `${baseURL}?action=get_teams&league_id=302&APIkey=${apiKey}`,
      (resp) => {
        if (resp.statusCode === 200) {
          resp.on('data', (chunk) => {
            data += chunk;
          });
          resp.on('end', () => {
            res.send(JSON.parse(data));
          });
        }
      }
    )
    .on('error', (error) => {
      res.status(500).json({ message: error });
    });
});

router.get('/teams/:teamid', (req, res) => {
  let data = '';
  const teamid = req.params.teamid;
  http
    .get(
      `${baseURL}?action=get_teams&league_id=302&team_id=${teamid}&APIkey=${apiKey}`,
      (resp) => {
        if (resp.statusCode === 200) {
          resp.on('data', (chunk) => {
            data += chunk;
          });
          resp.on('end', () => {
            res.send(JSON.parse(data));
          });
        }
      }
    )
    .on('error', (error) => {
      res.status(500).json({ message: error });
    });
});

router.get('/players/:id', (req, res) => {
  console.log('IN PLATERS');
  let data = '';
  const playerName = req.params.id;

  http
    .get(
      `${baseURL}?action=get_players&player_name=${playerName}&APIkey=${apiKey}`,
      (resp) => {
        if (resp.statusCode === 200) {
          resp.on('data', (chunk) => {
            data += chunk;
          });
          resp.on('end', () => {
            res.send(JSON.parse(data));
          });
        }
      }
    )
    .on('error', (error) => {
      res.status(500).json({ message: error });
    });
});

router.get('/get_leagues_by_country/:country', (req, res) => {
  const countryID = req.params.country;
  let data = '';
  http
    .get(
      `${baseURL}?action=get_leagues&country_id=${countryID}&APIkey=${apiKey}`,
      (resp) => {
        if (resp.statusCode === 200) {
          resp.on('data', (chunk) => {
            data += chunk;
          });
          resp.on('end', () => {
            const dataObj = JSON.parse(data);
            if (dataObj.error !== undefined) {
              res.status(500).json({ message: dataObj.message });
            } else {
              res.send(dataObj);
            }
          });
        }
      }
    )
    .on('error', (error) => {
      res.status(500).json({ message: error });
    });
});

module.exports = router;
