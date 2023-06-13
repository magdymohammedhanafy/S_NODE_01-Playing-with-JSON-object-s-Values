let fs =require('fs');

//1-Read the JSON in problem1.json
let data=fs.readFileSync('problem1.json',{decoding:'utf-8'});
convertedData=JSON.parse(data);
console.log("1-Read the JSON in problem1.json");
console.log(convertedData);
console.log("#############################################################################");
console.log("#############################################################################");

//2-Add height and weight to Fluffy
console.log("2-Add height and weight to Fluffy");
convertedData.height='40cm';
convertedData.weight='50kg';
console.log(convertedData);
console.log("#############################################################################");
console.log("#############################################################################");

//3-Fluffy name is spelled wrongly. Update it to Fluffyy
console.log("3-Fluffy name is spelled wrongly. Update it to Fluffyy");
convertedData.name='Fluffyy';
console.log(convertedData);
console.log("#############################################################################");
console.log("#############################################################################");
//4-List all the activities of Fluffyy’s catFriends
console.log("4-List all the activities of Fluffyy’s catFriends");
let catFriendsActivitiesNonMerged=[];
let catFriendsActivities=[];
convertedData.catFriends.map((e)=>{catFriendsActivitiesNonMerged.push(e.activities)});
catFriendsActivitiesNonMerged.map((e)=>{catFriendsActivities=[...catFriendsActivities,...e]})
console.log(catFriendsActivities);
console.log("#############################################################################");
console.log("#############################################################################");

//5-Print the catFriends names
console.log("5-Print the catFriends names");
convertedData.catFriends.forEach((e)=>{console.log(e.name)});
console.log("#############################################################################");
console.log("#############################################################################");

//6-Print the total weight of catFriends
console.log("6-Print the total weight of catFriends");
let totalWeight=0;
convertedData.catFriends.forEach((e)=>{totalWeight+=e.weight});
console.log(totalWeight);
console.log("#############################################################################");
console.log("#############################################################################");

//7-Print the total activities of all cats (op:6)
console.log("7-Print the total activities of all cats (op:6)");
let totalActivitiesOfCats=[...catFriendsActivities,...convertedData.activities];
console.log(totalActivitiesOfCats.length);
totalActivitiesOfCats.forEach((e)=>console.log(e));
console.log("#############################################################################");
console.log("#############################################################################");

//8-Add 2 more activities to Bar & Foo cats
console.log("8-Add 2 more activities to Bar & Foo cats");
convertedData.catFriends[0].activities.push("swimming","eating dry food");
convertedData.catFriends[1].activities.push("playing wih small balls","eating two times");
console.log(convertedData.catFriends[0].activities);
console.log(convertedData.catFriends[1].activities);
console.log("#############################################################################");
console.log("#############################################################################");

//9-Update the fur color of bar
console.log("9-Update the fur color of bar");
convertedData.catFriends[0].furcolor="red"
console.log(convertedData);
console.log("#############################################################################");
console.log("#############################################################################");
