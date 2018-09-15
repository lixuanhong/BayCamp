var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://images.unsplash.com/photo-1445308394109-4ec2920981b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1c80f31bb4040015d51db663252fbd30&auto=format&fit=crop&w=1353&q=80",
        description: "Clouds Rest is a mountain in Yosemite National Park east northeast of Yosemite Village, California. Although there are many peaks in the park having far greater elevation, Clouds Rest's proximity to the valley gives it a very high degree of visual prominence."
    },
    {
        name: "Desert Mesa",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c2e086325efab49ac1c075b97afc495b&auto=format&fit=crop&w=1308&q=80",
        description: "With desert mountainscapes visible from every angle, Mesa RV resorts afford visitors a scenic advantage. Just minutes from the Mesa campgrounds, there is a plethora of outdoor activities, golf courses and athletic facilities for all to enjoy. Not only that, but the resorts located within Mesa also offer close proximity to downtown amenities. Enjoy award-winning restaurants, shopping and entertainment all within a short drive from any of Mesa’s convenient campgrounds."
    },
    {
        name: "Canyon Floor",
        image: "https://images.unsplash.com/photo-1484960055659-a39d25adcb3c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ffdbb5e90a2c129258d4540ef0f29d06&auto=format&fit=crop&w=1350&q=80",
        description: "Camping at the bottom of Grand Canyon is one of the most unique experiences in America. The views from the rim are incredible, but the views from the bottom of Grand Canyon are beyond belief. As you gaze upwards, dozens of massive rock formations tower above you on all sides. If it’s spring, the cactus will be blooming; if it’s fall, soft autumn light will illuminate the canyon walls. For those with a love of the natural world, it’s pure sensory overload—thrilling, dizzying, enlightening."
    }
]

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("added a campground");
                     //add a few comments
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
    });
});
    
   
}

module.exports = seedDB;