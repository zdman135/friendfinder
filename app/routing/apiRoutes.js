var arraySum = require('array-sum');
var friendsData = require("../data/friends");
var resultArr = [];

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
      });

    app.post("/api/friends", function(req, res) {
        var user = req.body
        var userMatchedIndex = [];
        
        for(var x = 0; x < friendsData.length; x++) {    
            resultArr.push(arraySum(friendsData[x].scores));

            resultArr.find(function(score) {
                if (score >= arraySum(user.scores)) {
                    userMatchedIndex.push(friendsData[x]);
                };
              });              
        }
        if(typeof(userMatchedIndex[0]) === 'undefined') {
            userMatchedIndex[0] = friendsData[Math.floor(Math.random()*friendsData.length)];
        }
        res.json({
            matchedUser: userMatchedIndex[0]
        })
    });    
};
  