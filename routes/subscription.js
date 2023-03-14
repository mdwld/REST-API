//1 importation
const express = require('express');
const SubscriptionModel  = require ('../models/subscriptionSchema');
const webPush = require ('web-push');
//2 express router 
const router = express.Router();

//3 routes
router.post('/subscribe', async (req, res, next) => {

    const newSubscription = await SubscriptionModel.create({...req.body});
    const options = {
        vapidDetails: {
          subject: 'benrhimamohamedwalid@gmail.com',
          publicKey: process.env.PUBLIC_KEY,
          privateKey: process.env.PRIVATE_KEY,
        },
    };
    try {
        const res2 = await webPush.sendNotification (
          newSubscription,
          JSON.stringify ({
            title: 'Hello from server',
            description: 'this message is coming from the server',
            image: 'https://cdn2.vectorstock.com/i/thumb-large/94/66/emoji-smile-icon-symbol-smiley-face-vector-26119466.jpg',
          }),
          options
        );
        res.status(200).send({msg :'notif !!' , res2});
      } catch (error) {
        console.log (error);
        res.sendStatus (500);
      }
    });

module.exports = router