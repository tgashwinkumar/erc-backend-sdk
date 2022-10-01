import { Router } from "express";
import Event from "../models/Event.js";
import fetch from "node-fetch";

const router = Router();

router.get("/", async (req, res) => {
  fetch(
    "https://api-ropsten.etherscan.io/api?module=account&action=txlist&address=0xE3E8b36dCEA6ABa09cAdca6Cb06724D6dC9C5E1d&sort=asc&apikey=384KZC5YXKS5VUWCNGFZR7G8H7UTR26S3G",
    {},
    20000
  )
    .then((resp) => resp.json())
    .then((data1) => {
      fetch(
        "https://api-ropsten.etherscan.io/api?module=logs&action=getLogs&address=0xE3E8b36dCEA6ABa09cAdca6Cb06724D6dC9C5E1d&apikey=384KZC5YXKS5VUWCNGFZR7G8H7UTR26S3G",
        {},
        20000
      )
        .then((resp) => resp.json())
        .then((data2) => {
          const final_data = data1.result.map((data, idx) => {
            return {
              timeStamp: data.timeStamp,
              from: data.from,
              to: data.to,
              data: data2.result[idx].data,
              address: data2.result[idx].address,
            };
          });
          res.send(final_data);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});

export default router;
