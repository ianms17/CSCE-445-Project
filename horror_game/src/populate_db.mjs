// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
        apiKey: "AIzaSyD3xbdYMckM3g6FFbP8Z1WBFYwpxUvBVm0",
        authDomain: "csce-445-horror.firebaseapp.com",
        projectId: "csce-445-horror",
        storageBucket: "csce-445-horror.appspot.com",
        messagingSenderId: "1014379355908",
        appId: "1:1014379355908:web:01fb9bf155fe59efc7ba51",
        measurementId: "G-PXCXJN25Q1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

const storyline = [
        {
                "id": "1",
                "narrativeText": "You are walking alone in on a cold night an dyou see a dark abandoned house. Do you go in?",
                "optionAID": "11",
                "optionAText": "Yes",
                "optionBID": "default",
                "optionBText": "No",
                "optionCID": "none",
                "optionCText": "none",
                "music": "base",
                "soundEffects": "none",
                "context": "none"
        },
        {
                "id": "11",
                "narrativeText": "You enter the house. Do you go upstairs, down to the basement, or stay on the main level?",
                "optionAID": "111",
                "optionAText": "Upstairs",
                "optionBID": "112",
                "optionBText": "Same Floor",
                "optionCID": "113",
                "optionCText": "Basement",
                "music": "base",
                "soundEffects": "none",
                "context": "none"
        },
        {
                "id": "111",
                "narrativeText": "You walk up the stairs and hear creaking. Curouisity getting the better of you, you continue to go upstairs. At the top of the stairs is a long hallway. Do you  turn left or turn right?",
                "optionAID": "1111",
                "optionAText": "Left",
                "optionBID": "1112",
                "optionBText": "Right",
                "optionCID": "none",
                "optionCText": "none",
                "music": "base",
                "soundEffects": "none",
                "context": "none"
        },
        {
                "id": "112",
                "narrativeText": "The kitchen is rundown and the cabinets are hanging on their hinges. You walk past, notivign nothing out of the ordinary. There is suddenly, a door to the backyard. Do you go outside or back to the main entrance. ",
                "optionAID": "111",
                "optionAText": "Go Back",
                "optionBID": "goodEnd",
                "optionBText": "Go Outside",
                "optionCID": "none",
                "optionCText": "none",
                "music": "base",
                "soundEffects": "none",
                "context": "You start walking and find your way into the kitchen."
        },
        {
                "id": "113",
                "narrativeText": "To the right you see a trail of mice and to the left a trail of spiders. Which do you follow?",
                "optionAID": "1131",
                "optionAText": "Mice",
                "optionBID": "1132",
                "optionBText": "Spiders",
                "optionCID": "none",
                "optionCText": "none",
                "music": "base",
                "soundEffects": "none",
                "context": "none"
        },
        {
                "id": "1111",
                "narrativeText": "There are two doors down the hall. One straight ahead ajar and one to your left. Which do you choose to go into?",
                "optionAID": "11111",
                "optionAText": "Straight",
                "optionBID": "11112",
                "optionBText": "Left",
                "optionCID": "none",
                "optionCText": "none",
                "music": "base",
                "soundEffects": "none",
                "context": "none"
        },
        {
                "id": "1112",
                "narrativeText": "The floor suddently starts shaking... It gives out from under you.",
                "optionAID": "badEnd",
                "optionAText": " You fall backwards and hit your head fatally on the floor.",
                "optionBID": "none",
                "optionBText": "none",
                "optionCID": "none",
                "optionCText": "none",
                "music": "base",
                "soundEffects": "none",
                "context": "none"
        },
        {
                "id": "11111",
                "narrativeText": "You see a dresser at the end of the room...something is in there...A ghost jumps out and knocks you off your feet",
                "optionAID": "badEnd",
                "optionAText": "You Have Been Killed by the Ghost",
                "optionBID": "none",
                "optionBText": "none",
                "optionCID": "none",
                "optionCText": "none",
                "music": "base",
                "soundEffects": "none",
                "context": "none"
        },
        {
                "id": "11112",
                "narrativeText": "Suddenly the door shuts behind you. You hear footsteps outside the room... Something smells? You realize someone has set the room on fire and you are trapped",
                "optionAID": "badEnd",
                "optionAText": "You Have Died in the Fire",
                "optionBID": "none",
                "optionBText": "none",
                "optionCID": "none",
                "optionCText": "none",
                "music": "base",
                "soundEffects": "none",
                "context": "none"
        },
        {
                "id": "1131",
                "narrativeText": "You follow the mice to a hidden ladder. Do you go up the ladder or follow the spiders?",
                "optionAID": "112",
                "optionAText": "Go Up the Ladder",
                "optionBID": "1132",
                "optionBText": "Follow the Spiders",
                "optionCID": "none",
                "optionCText": "none",
                "music": "base",
                "soundEffects": "none",
                "context": "The ladder takes you back to the main floor!"
        },
        {
                "id": "1132",
                "narrativeText": "The spiders are getting bigger and bigger... Suddenly the spiders are so big they have swept you up and are carrying you through a cellar. Do you attempt to fight back and run or do you see where they take you?",
                "optionAID": "11321",
                "optionAText": "While fighting back you somehow hit the wall and the ceiling above you has started to crumble... you are stuck.",
                "optionBID": "none",
                "optionBText": "none",
                "optionCID": "none",
                "optionCText": "none",
                "music": "base",
                "soundEffects": "none",
                "context": "none"
        },
        {
                "id": "11321",
                "narrativeText": "3 days have passed and you are still stuck. You have died of dehydration",
                "optionAID": "badEnd",
                "optionAText": "You Died",
                "optionBID": "none",
                "optionBText": "none",
                "optionCID": "none",
                "optionCText": "none",
                "music": "base",
                "soundEffects": "none",
                "context": "none"
        },
        {
                "id": "11322",
                "narrativeText": "The spiders are your friends and have led you through a secret tunnel to escape! You have made it out alive!",
                "optionAID": "goodEnd",
                "optionAText": "You Made It",
                "optionBID": "none",
                "optionBText": "none",
                "optionCID": "none",
                "optionCText": "none",
                "music": "base",
                "soundEffects": "none",
                "context": "none"
        }
]

f = open("/public/storylines.json");
docs = json.load(f.read());
console.log(docs);

json_obj.forEach(function(obj) {
        try {
                const docRef = addDoc(collection(db, "storyline")), {
                        id: obj.id,
                        narrativeText: obj.narrativeText,
                        optionAID: obj.optionAID,
                        optionAText: obj.optionAText,
                        optionBID: obj.optionBID,
                        optionBText: obj.optionBText,
                        optionCID: obj.optionCID,
                        optionCText: obj.optionCText,
                        music: obj.music,
                        soundFX: obj.soundEffects,
                        context: obj.context
                }
                console.log("Added document:", docRef.id);
        } catch (e) {
                console.log(e);
        }
});

