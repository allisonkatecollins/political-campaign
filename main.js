//*******OBJECT*******
const sanger = {

//her congressional district
    district: 51,

//her platform statements
    platform: {
        taxes: "the right amount",
        jobs: "lots of them",
        infrastructure: "good",
        healthcare: "single payer",
        crimeAndEnforcement: "no crime"
    },
//URL for donation form
    donateURL: "www.google.com",

//calendar of events
    calendarOfEvents: ["event1", "event2", "event3"],

//volunteer information
    volunteerInfo: {
        name: "Allison Collins",
        address: "1605 Lethia Dr.",
        email: "allisonkatecollins@gmail.com",
        phoneNumber: "812-746-8321",
        availability: "weekends",
        preferredActivities: ["calling", "canvassing"]
    },
//Sanger's biography
    biography: "Sanger was born in the USA",

//image gallery containing 3 images
    imageGallery: {
        headshot: "headshot.jpg",
        familyPic: "family.jpg",
        constituentPic: "constituent.jpg"
    },
//Sanger's mission statement
    missionStatement: "Here to make y'all happy",

//URL for registering to vote
    voteURL: "www.google.com"
}


//****FUNCTIONS*********

//change congressional district
function changeDistrict(newDistrict){
    sanger.district = newDistrict
}
changeDistrict (52)

console.log(sanger.district)

//change platform statement on taxess
function changePlatformTaxes(newStatement){
    sanger.platform.taxes = newStatement
}
changePlatformTaxes ("no taxes"),

console.log(sanger.platform.taxes)

//change platform statement on jobs
function changePlatformJobs(newStatement){
    sanger.platform.jobs = newStatement
}
changePlatformJobs ("no jobs")

console.log(sanger.platform.jobs)

//change platform statement on infrastructure
function changePlatformInfrastructure(newStatement){
    sanger.platform.infrastructure = newStatement
}
changePlatformInfrastructure ("bad")

console.log(sanger.platform.infrastructure)

//change platform structure on healthcare
function changePlatformHealthcare(newStatement){
    sanger.platform.healthcare = newStatement
}
changePlatformHealthcare ("expensive for everyone")

console.log(sanger.platform.healthcare)

//add 2 events
function addToCalendar(newEvent, newEvent2){
    sanger.calendarOfEvents.push(newEvent, newEvent2)
}
addToCalendar("event4", "event5")

console.log(sanger.calendarOfEvents)

//replace existing headshot
function addToImageGallery1(newImage){
    sanger.imageGallery.headshot = newImage
}
addToImageGallery1 ("headshot2.jpg")

console.log(sanger.imageGallery.headshot)

//replace existing family pic
function addToImageGallery2(newImage){
    sanger.imageGallery.familyPic = newImage
}
addToImageGallery2 ("family2.jpg")

console.log(sanger.imageGallery.familyPic)

//replace existing constituent pic  
function addToImageGallery3(newImage){
    sanger.imageGallery.constituentPic = newImage
}
addToImageGallery3 ("constituent2.jpg")

console.log(sanger.imageGallery.constituentPic)