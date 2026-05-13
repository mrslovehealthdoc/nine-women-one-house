import React, { useState } from "react"; 
const CORES = { 
 wildflower: { 
 name: "The Wildflower", 
 opening: "you packed the car before they finished asking.", 
 vibe: "alive on purpose.", 
 secondaryShort: "you also have Wildflower running underneath — the yes-to-motion, the ro sections: [ 
 { label: "you definitely", content: [ 
 "have sand in the car from a beach day you didn't plan", 
 "own at least one tote bag with a snack, a swimsuit, and a library book in it",  `have said "wait — let's just go" within the last two weeks`, 
 "have a camera roll that's 70% sky, water, and the back of your kids' heads",  "know exactly how long it takes to pack the car for an unplanned day"  ]}, 
 { label: "your superpower", content: "aliveness. you remember that this is supposed to { label: "with your kids", content: `"get in the car." you are the mom of spontaneous  { label: "your home", content: "lived-in and barely indoors. the back door is open. th { label: "your marriage / partner", content: `you're the one who suggests the trip. yo { label: "your friendships", content: `you're the friend who texts "i'm outside" with  { label: "your friday night", content: `depends entirely on the weather and a feeling  { label: "your work", content: "you do best when there's room to move and go. you're n { label: "how you move", content: "outside, ideally. a hike, a beach walk, a run that  { label: "your shadow side", content: `the same engine that says yes to everything has { label: "the wink", content: `you have at least one half-dead plant you keep watering ] 
 }, 
 feral: { 
 name: "The Firestarter", 
 opening: "you read three sentences of the recipe and started anyway.",  vibe: "she figured it out.", 
 secondaryShort: `you also have Firestarter running underneath — the maker, the hands-in- sections: [ 
 { label: "you definitely", content: [ 
 "have flour on your phone screen right now", 
 "have made something you had no business making and it worked",  "have at least one project drying, fermenting, or curing in your kitchen",  "own a thing you built and you mention it casually", 
 "have YouTube tutorials open on your phone that you don't need to actually finish wa ]}, 
 { label: "your superpower", content: "full conviction without a tutorial. you start. t { label: "with your kids", content: `they're in it with you. flour on the counter, chi { label: "your home", content: `in a state of becoming. there is always a project. the
 { label: "your marriage / partner", content: `you and your partner have a shared verb. { label: "your friendships", content: "your friends come over and you put them to work. { label: "your friday night", content: `something is fermenting. something is being ma { label: "your work", content: "you are at your best with your hands in it. you do not { label: "how you move", content: `functional. lifting things. carrying things. the ga { label: "your shadow side", content: `you do not stop. you do not ask for help. you c { label: "the wink", content: `you have at least one injury from a project. you have g ] 
 }, 
 hearth: { 
 name: "The Hearth", 
 opening: "you sat on the floor with someone last week and didn't say much.",  vibe: "safe to fall apart here.", 
 secondaryShort: "you also have Hearth running underneath — the steady presence, the unfl sections: [ 
 { label: "you definitely", content: [ 
 "have a friend currently in a hard season who has your number on speed dial",  "have cried with someone this month and not been embarrassed about it",  "have a person in your life who only calls you when it's bad",  `have said "tell me everything" and meant it`, 
 "have a couch with a divot in it shaped like the people you love"  ]}, 
 { label: "your superpower", content: "unshakeable presence. you do not flinch. people  { label: "with your kids", content: "you are the one they come to when it falls apart. { label: "your home", content: "soft. there are blankets. there are candles, but used  { label: "your marriage / partner", content: "you hold a lot. probably too much. you a { label: "your friendships", content: "you are the one everyone calls. you have a rost { label: "your friday night", content: "quiet. or with one person. you do not have a b { label: "your work", content: "you are drawn to work that involves people in their ha { label: "how you move", content: "gentle and restorative. yoga, walking with a friend,
 { label: "your shadow side", content: "you absorb. you take on what isn't yours. you c { label: "the wink", content: `your camera roll has at least four screenshots of texts ] 
 }, 
 force: { 
 name: "The Force of Nature", 
 opening: "you have a plan. you also have a backup plan.", 
 vibe: "she got it done.", 
 secondaryShort: "you also have Force of Nature running underneath — the executor, the lo sections: [ 
 { label: "you definitely", content: [ 
 "have a color-coded something in your life that other people find alarming",  "have made a spreadsheet for a vacation", 
 `have said "would you like to be in the plan" and meant it as a courtesy`,  "have a tone you do when something is not on the schedule", 
 "have outworked a room more than once and not made a thing of it"  ]},
 { label: "your superpower", content: "you move real weight through the world. things h { label: "with your kids", content: `the schedule works. the snacks are packed. the bi { label: "your home", content: "functional and beautiful in that order. you have syste { label: "your marriage / partner", content: "you are the load-bearing wall. you and y { label: "your friendships", content: "you are the planner. the group trip happens bec { label: "your friday night", content: `already on the calendar. you don't do "what sh { label: "your work", content: "you are the one who runs things. if you don't have a l { label: "how you move", content: "on the schedule. probably 5am or 6am. probably the  { label: "your shadow side", content: "you cannot rest. resting feels like falling beh { label: "the wink", content: "you have a tab open right now that is a to-do list. you ] 
 }, 
 noticer: { 
 name: "The Noticer", 
 opening: "you knew before they told you.", 
 vibe: "she saw it.", 
 secondaryShort: "you also have Noticer running underneath — the attuned one, the depth,  sections: [ 
 { label: "you definitely", content: [ 
 "know the names of trees you can see from your kitchen window",  "know which kid is off today without being told", 
 "have a notes app full of ideas you'll get to", 
 "have read the same book three times", 
 "have stopped a conversation to point at something" 
 ]}, 
 { label: "your superpower", content: "attunement and depth. you read rooms, weather, k { label: "with your kids", content: `you clock the shift in the room before anyone els { label: "your home", content: "considered. sensory. nothing in your house is there by { label: "your marriage / partner", content: "you read your partner. you know when the { label: "your friendships", content: "small circle. real ones. you don't have forty f { label: "your friday night", content: "slow. observed. low input. you might be alone  { label: "your work", content: "you do best in work that rewards perception and depth. { label: "how you move", content: `attuned. your body tells you what it needs and you  { label: "your shadow side", content: `you absorb the room. what you notice doesn't ju { label: "the wink", content: "you have a photo of clouds on your phone. you have stop ] 
 }, 
 weaver: { 
 name: "The Weaver", 
 opening: "kid on your hip, laptop in the kitchen, somehow it works.",  vibe: "both, actually.", 
 secondaryShort: `you also have Weaver running underneath — the integrator, the refuser o sections: [ 
 { label: "you definitely", content: [ 
 "have taken a work call from a closet", 
 "have nursed a baby while writing an email", 
 `have refused the "either/or" your whole life`,
 `have been told you're "doing too much" and disagreed`, 
 "have answered a slack message at a school pickup line" 
 ]}, 
 { label: "your superpower", content: `integration. you do not split yourself in half.  { label: "with your kids", content: `they don't live in a separate "kid world." they'r { label: "your home", content: "hybrid. the kitchen counter is also a desk. the dining { label: "your marriage / partner", content: "you and your partner have probably reneg { label: "your friendships", content: "your friends are the ones who don't think it's  { label: "your friday night", content: `varies wildly depending on what week of the mo { label: "your work", content: "you have probably built something around your life rat { label: "how you move", content: "in pieces. ten minutes while the kid naps. a walk t { label: "your shadow side", content: "you do not have edges. work bleeds into family  { label: "the wink", content: `you have a laptop on the kitchen counter right now. you ] 
 }, 
 gatherer: { 
 name: "The Gatherer", 
 opening: "you set the extra place before they said yes.", 
 vibe: "the door's open.", 
 secondaryShort: "you also have Gatherer running underneath — the convener, the room-make sections: [ 
 { label: "you definitely", content: [ 
 "have hosted on a tuesday for no reason", 
 "have a friend whose kids are at your house right now or have been this week",  `have texted "come over" with no agenda`, 
 `have a "regular" — a person who shows up at your house without ringing the bell`,  "have introduced two people who ended up being each other's best friend"  ]}, 
 { label: "your superpower", content: "convening. you make rooms out of nothing. you do { label: "with your kids", content: "your house is the house. friends' kids are always { label: "your home", content: "made for people. there are extra chairs. there is alwa { label: "your marriage / partner", content: "you and your partner are a we — when peo { label: "your friendships", content: "you have a lot of friends. real ones, not colle { label: "your friday night", content: "people are over. or you went to someone else's { label: "your work", content: "you do best in collaboration. you are not a lone-geniu { label: "how you move", content: "social. a walking date with a friend. a class with  { label: "your shadow side", content: "you don't know how to be alone. you have built  { label: "the wink", content: `you have texted "come over" to someone today. you have  ] 
 }, 
 muse: { 
 name: "The Muse", 
 opening: "you put the grocery-store flowers in three small vases and lit the candle at 1 vibe: "she made it feel like something.", 
 secondaryShort: "you also have Muse running underneath — beauty as nutrient, pleasure as sections: [ 
 { label: "you definitely", content: [
 "have plated leftovers like a restaurant", 
 "own perfume you wear when you're alone", 
 "have moved a lamp this week", 
 `have a "fall scent" and a "spring scent" and you take this seriously`,  "have made dinner feel like an event for no occasion" 
 ]}, 
 { label: "your superpower", content: "making the ordinary feel like something. you tak { label: "with your kids", content: "they grow up with cut fruit on a beautiful plate. { label: "your home", content: "sensual and conjured. there's always something lit. th { label: "your marriage / partner", content: "you bring atmosphere into the relationsh { label: "your friendships", content: "you are the friend who gives the good gifts — n { label: "your friday night", content: "already a thing. a bath with the good salts yo { label: "your work", content: "you do best where atmosphere matters. design, hospital { label: "how you move", content: "sensory and ritualistic. pilates, dance, yoga in so { label: "your shadow side", content: `you can confuse pleasure with avoidance. the ca { label: "the wink", content: "you have at least one robe you wear to put out the tras ] 
 }, 
 pilgrim: { 
 name: "The Pilgrim", 
 opening: "you are not done becoming and you are not trying to be.",  vibe: "the inquiry is the life.", 
 secondaryShort: "you also have Pilgrim running underneath — the seeker, the always-becom sections: [ 
 { label: "you definitely", content: [ 
 "have a bookshelf that intimidates people", 
 "have changed your mind publicly about something you used to be sure of",  "have taken a course, retreat, modality, or practice that your friends had to google "have at least three things on your phone you're working through right now",  `have heard yourself say "i used to think that, but —" recently and not flinched`  ]}, 
 { label: "your superpower", content: "openness as discipline. you have practiced not a { label: "with your kids", content: `you are raising people, not products. you let the { label: "your home", content: "a record of where you've been. books from different ch { label: "your marriage / partner", content: "you are not the same woman your partner  { label: "your friendships", content: "your friendships have seasons. the friend from  { label: "your friday night", content: "something that involves your inner life. a lon { label: "your work", content: "you have done several things. you'll probably do sever { label: "how you move", content: "investigative. you've probably tried four modalitie { label: "your shadow side", content: `you can mistake becoming for avoiding. you have,
 { label: "the wink", content: "you have started a journal practice this year. you have ] 
 } 
}; 
const MODIFIERS = { 
 storyteller: {
 name: "The Storyteller", 
 tagline: "language is your medium.", 
 description: "you don't just live your life — you narrate it. you turn the ordinary tues shadow: "you can live in the description more than the experience. you can write about i wink: "you have re-read your own caption. you have written a draft text three times befo }, 
 curator: { 
 name: "The Curator", 
 tagline: "composition is your medium.", 
 description: "you arrange, layer, edit, and refine. you walk into a room and rearrange i shadow: "you can over-edit. you can adjust the room three times before sitting down in i wink: `you have moved a piece of furniture this week. you have a "for company" version o }, 
 defender: { 
 name: "The Defender", 
 tagline: "protection is your medium.", 
 description: "you know what's yours. you know what you won't tolerate. you will end you, shadow: "you can be armored when you don't need to be. you scan for threats even in room wink: "you have left a doctor's office. you have a text thread with a friend that is jus }, 
 wit: { 
 name: "The Wit", 
 tagline: "humor is your medium.", 
 description: "you process through the punchline. you defuse a tense moment with a single shadow: "you can deflect with humor when you should be sitting with something. you make  wink: "you have made a stranger laugh this week. you have written a caption that took yo } 
}; 
const QUESTIONS = [ 
 { id: 1, prompt: "nothing is on fire. nothing is scheduled. what do you do first:", type:  { text: "the car gets packed. we figure out where we're going on the way.", scores: { wi { text: "i start a project i've been thinking about all week.", scores: { feral: 2, forc { text: "slow breakfast, music, candle even though it's morning.", scores: { muse: 2, he { text: "the kids do their thing. i do mine. nobody talks for an hour.", scores: { notic { text: "house first. i can't enjoy a day with a sink full of dishes.", scores: { force: { text: "figure out who's coming over. food once i know.", scores: { gatherer: 2, wildfl { text: "check in on the friend who's having a hard week.", scores: { hearth: 2, noticer:
 { text: "clear my inbox while the coffee brews. the day is better that way.", scores: {  { text: "open the book i'm reading. kids know i'm a person.", scores: { pilgrim: 2, noti { text: "get the workout in. it's already on the schedule.", scores: { force: 2 } },  { text: "move my body first. a walk, a stretch, whatever it asks for.", scores: { notice ]}, 
 { id: 2, prompt: "my house is mostly:", type: "long", options: [ 
 { text: "somewhere we leave from.", scores: { wildflower: 2 } }, 
 { text: "somewhere we're building.", scores: { feral: 2 } }, 
 { text: "somewhere people land.", scores: { hearth: 2 } },
 { text: "somewhere that runs.", scores: { force: 2 } }, 
 { text: "somewhere we pay attention.", scores: { noticer: 2 } }, 
 { text: "somewhere two things happen at once.", scores: { weaver: 2 } },  { text: "somewhere we host.", scores: { gatherer: 2 } }, 
 { text: "somewhere beautiful.", scores: { muse: 2 } }, 
 { text: "somewhere we're each still figuring it out.", scores: { pilgrim: 2 } }  ]}, 
 { id: 3, prompt: "which of these is most you, this year:", type: "long", options: [  { text: "the woman in the car with a thermos and three kids and a vague plan", scores: { { text: "the woman with flour on her phone", scores: { feral: 2 } },  { text: "the woman on the couch with the friend who's falling apart", scores: { hearth:  { text: "the woman whose calendar is the reason everything works", scores: { force: 2 } } { text: "the woman who knew which kid was off without being told", scores: { noticer: 2 } { text: "the woman with the laptop on the kitchen counter and a kid on her hip", scores: { text: "the woman whose house is full of other people's kids", scores: { gatherer: 2 } } { text: "the woman who lit the candle at 11am because the day called for it", scores: {  { text: "the woman who's already on her next book and her next idea", scores: { pilgrim: ]}, 
 { id: 4, prompt: "would you rather:", type: "fast", options: [ 
 { text: "spend the day out", scores: { wildflower: 1 } }, 
 { text: "spend the day making something", scores: { feral: 1 } } 
 ]}, 
 { id: 5, prompt: "you have one free hour. nobody needs you. you most likely:", type: "long { text: "get out of the house.", scores: { wildflower: 2, pilgrim: 1 } },  { text: "start something with your hands.", scores: { feral: 2 } },  { text: "check on someone.", scores: { hearth: 2, gatherer: 1 } },  { text: "handle three small things you've been meaning to handle.", scores: { force: 2,  { text: "sit somewhere quiet and don't do much.", scores: { noticer: 2 } },  { text: "get two things done that you couldn't do at the same time before.", scores: { w { text: "text someone to come over.", scores: { gatherer: 2 } }, 
 { text: "bath, candle, music, even though it's a tuesday.", scores: { muse: 2 } },  { text: "read or listen to what you're working through right now.", scores: { pilgrim: 2 ]}, 
 { id: 6, prompt: "your real night off. not the one you'd post:", type: "long", options: [  { text: "whatever the weather and a 3pm feeling told you to do.", scores: { wildflower:  { text: "something's fermenting. you said you'd take it easy. you didn't.", scores: { fe { text: "one person across the table having the real conversation.", scores: { hearth: 2, { text: "already on the calendar. already handled.", scores: { force: 2 } },  { text: "quiet. low input. you don't need much.", scores: { noticer: 2 } },  { text: "kids still up. work email at 9pm. somehow okay.", scores: { weaver: 2 } },  { text: "people are over. or you're at someone's people.", scores: { gatherer: 2 } },  { text: "a bath. a candle. food that matters even if you're alone.", scores: { muse: 2 } { text: "a book or a long walk and your own thoughts.", scores: { pilgrim: 2 } },  { text: "with my people. that's the whole point of the night off.", scores: { hearth: 2, ]}, 
 { id: 7, prompt: "the door rings unexpectedly. you:", type: "fast", options: [  { text: "open it. always.", scores: { gatherer: 1 } },
 { text: "open it. but you're checking who first.", scores: { hearth: 1 } },  { text: "don't open it. you're not ready for that today.", scores: { noticer: 1 } }  ]}, 
 { id: 8, prompt: "when life gets hard, your first move is usually:", type: "long", options: { text: "move. trip, project, change something.", scores: { wildflower: 2 } },  { text: "work harder. stop sleeping if you have to.", scores: { feral: 2, force: 1 } },  { text: "take on someone else's hard. easier than your own.", scores: { hearth: 2 } },  { text: "control. tighten the systems. make a plan.", scores: { force: 2 } },  { text: "go quiet. disappear for a few days.", scores: { noticer: 2, pilgrim: 1 } },  { text: "push through. no time to feel it. you have three things due.", scores: { weaver: { text: "gather people. nobody falls apart alone in your house.", scores: { gatherer: 2 } { text: "make the hard thing beautiful. or reach for beauty to get through it.", scores: { text: "look for the lesson. find the framework. find the next teacher.", scores: { pil ]}, 
 { id: 9, prompt: "which one is most true:", type: "fast", options: [  { text: "my purse weighs 12 pounds", scores: { weaver: 1 } }, 
 { text: "my purse has a snack in it", scores: { wildflower: 1 } },  { text: "my purse has a candle in it", scores: { muse: 1 } }, 
 { text: "my purse has a book in it", scores: { pilgrim: 1 } }, 
 { text: "i don't carry a purse", scores: { feral: 1, force: 1 } } 
 ]}, 
 { id: 10, prompt: "if your kids had to describe you to a stranger, they'd say:", type: "lo { text: `"my mom takes us everywhere."`, scores: { wildflower: 2 } },  { text: `"my mom can fix anything."`, scores: { feral: 2 } }, 
 { text: `"my mom is the one you tell stuff to."`, scores: { hearth: 2 } },  { text: `"my mom is in charge."`, scores: { force: 2 } }, 
 { text: `"my mom can tell when something's wrong."`, scores: { noticer: 2 } },  { text: `"my mom is always doing like five things."`, scores: { weaver: 2 } },  { text: `"there are always people at my house."`, scores: { gatherer: 2 } },  { text: `"my mom makes everything pretty."`, scores: { muse: 2 } },  { text: `"my mom reads a lot."`, scores: { pilgrim: 2 } }, 
 { text: `"my mom is really funny."`, scores: { wit: 2 } } 
 ]}, 
 { id: 11, prompt: "what actually runs you:", type: "long", options: [  { text: "the next yes. the road. the open thing.", scores: { wildflower: 2 } },  { text: "making things. doing things. building.", scores: { feral: 2 } },  { text: "being where someone needs you.", scores: { hearth: 2 } },  { text: "getting it done. moving real weight.", scores: { force: 2 } },  { text: "seeing things first. knowing things first.", scores: { noticer: 2 } },  { text: "refusing to pick one lane.", scores: { weaver: 2 } }, 
 { text: "making rooms full of people.", scores: { gatherer: 2 } },  { text: "needing it to feel beautiful.", scores: { muse: 2 } }, 
 { text: "the next book. the next idea. the next version of you.", scores: { pilgrim: 2 } ]}, 
 { id: 12, prompt: "closer to true:", type: "fast", options: [ 
 { text: "i run things", scores: { force: 1 } }, 
 { text: "i hold things together", scores: { weaver: 1 } }
 ]}, 
 { id: 13, prompt: "something big happens — good or bad. first instinct:", type: "long", op { text: "write about it. even if just for you.", scores: { storyteller: 2 } },  { text: "make the moment look like something. light a candle. set the table.", scores: { { text: "decide who needs protecting. and from what.", scores: { defender: 2 } },  { text: "find the line in it that's funny. don't say it out loud yet.", scores: { wit: 2 ]}, 
 { id: 14, prompt: "the friend you remind people of most is:", type: "long", options: [  { text: "the one who texted you something so well-written you saved it to your camera ro { text: "the one whose pantry looks like a magazine and she didn't try", scores: { curat { text: "the one who once stood between her kid and a teacher and the room actually went { text: "the one who made you laugh so hard in a grocery store that strangers stared", s ]}, 
 { id: 15, prompt: "someone you love is going through it. you:", type: "fast", options: [  { text: "send a text that takes you 20 minutes to write", scores: { storyteller: 1 } },  { text: "show up at their door with food and a candle", scores: { curator: 1, hearth: 1 } { text: "make a phone call to the person responsible for it", scores: { defender: 1 } }  ]}, 
 { id: 16, prompt: "if someone left you a one-line note on the kitchen counter, it'd probab { text: `"this is so well-said i'm putting it on the fridge."`, scores: { storyteller: 2 { text: `"how did you make this look like this."`, scores: { curator: 2 } },  { text: `"thank you. nobody else would have said something."`, scores: { defender: 2 } },  { text: `"i'm crying. send help. you ruined me."`, scores: { wit: 2 } }  ]}, 
 { id: 17, prompt: "with your partner — current, past, or hypothetical — you are most often { text: `says "let's just go"`, scores: { wildflower: 2 } }, 
 { text: "starts a renovation without asking", scores: { feral: 2 } },  { text: "notices they had a hard day before they tell you", scores: { hearth: 2, noticer: { text: "has the plan when nobody else does", scores: { force: 2 } },  { text: "reads the room first", scores: { noticer: 2 } }, 
 { text: `says "we'll do both"`, scores: { weaver: 2 } }, 
 { text: "invites people over without warning", scores: { gatherer: 2 } },  { text: "sets the table even on a tuesday", scores: { muse: 2 } },  { text: "just told them about your new idea", scores: { pilgrim: 2 } }  ]}, 
 { id: 18, prompt: "the honest truth about your closest love is:", type: "long", options: [  { text: "we're each other's adventure partner", scores: { wildflower: 1 } },  { text: "we build a life together with our hands", scores: { feral: 1 } },  { text: "i'm the one who holds it. mostly.", scores: { hearth: 2 } },  { text: "i run it. they know.", scores: { force: 2 } }, 
 { text: "i see things they don't say out loud", scores: { noticer: 1 } },  { text: "we are juggling. we're tired but we love it.", scores: { weaver: 1 } },  { text: "we're each other's home base for everyone we love", scores: { gatherer: 1 } },  { text: "i'm the one bringing the beauty. they receive it.", scores: { muse: 2 } },  { text: "we are not who we were, and we're learning each other again", scores: { pilgrim: ]}, 
 { id: 19, prompt: "tonight:", type: "fast", options: [
 { text: "outside", scores: { wildflower: 1, noticer: 1 } }, 
 { text: "inside", scores: { feral: 1, muse: 1, hearth: 1 } } 
 ]}, 
 { id: 20, prompt: "the truest thing about you, if you only got one:", type: "long", option { text: "i'm always going somewhere. physically or otherwise.", scores: { wildflower: 1, { text: "i can't stop making things.", scores: { feral: 1 } }, 
 { text: "people end up at my house when their life is falling apart.", scores: { hearth: { text: "things actually happen when i'm in charge of them.", scores: { force: 1 } },  { text: "i see what other people don't.", scores: { noticer: 1 } },  { text: "i refuse to pick one lane.", scores: { weaver: 1 } }, 
 { text: "my house is always full of other people's kids and other people's friends.", sc { text: "i need life to feel beautiful or i can't function.", scores: { muse: 1 } },  { text: "i've been six versions of myself and i'm not done.", scores: { pilgrim: 1 } },  { text: "i can describe a thing exactly.", scores: { storyteller: 1 } },  { text: "every space i'm in starts looking like me.", scores: { curator: 1 } },  { text: "i will end you for the people i love.", scores: { defender: 1 } },  { text: "i make people laugh and it's not always on purpose.", scores: { wit: 1 } }  ]} 
]; 
export default function App() { 
 const [stage, setStage] = useState("landing"); 
 const [currentQ, setCurrentQ] = useState(0); 
 const [scores, setScores] = useState({ 
 wildflower: 0, feral: 0, hearth: 0, force: 0, noticer: 0, 
 weaver: 0, gatherer: 0, muse: 0, pilgrim: 0, 
 storyteller: 0, curator: 0, defender: 0, wit: 0 
 }); 
 const [email, setEmail] = useState(""); 
 const [showAllArchetypes, setShowAllArchetypes] = useState(false); 
 const [emailSubmitted, setEmailSubmitted] = useState(false); 
 const [shareStatus, setShareStatus] = useState(""); 
 const handleAnswer = (option) => { 
 const newScores = { ...scores }; 
 Object.entries(option.scores).forEach(([key, value]) => { 
 newScores[key] += value; 
 }); 
 setScores(newScores); 
  
 if (currentQ < QUESTIONS.length - 1) { 
 setCurrentQ(currentQ + 1); 
 window.scrollTo({ top: 0, behavior: "smooth" }); 
 } else { 
 setStage("results"); 
 window.scrollTo({ top: 0, behavior: "smooth" }); 
 }
 }; 
 const getRankedCores = () => { 
 const coreKeys = ["wildflower", "feral", "hearth", "force", "noticer", "weaver", "gather return coreKeys 
 .map(key => ({ key, score: scores[key] })) 
 .sort((a, b) => b.score - a.score); 
 }; 
 const getPrimaryModifier = () => { 
 const modKeys = ["storyteller", "curator", "defender", "wit"]; 
 return modKeys.reduce((max, key) => scores[key] > scores[max] ? key : max, modKeys[0]);  }; 
 const restart = () => { 
 setStage("landing"); 
 setCurrentQ(0); 
 setScores({ 
 wildflower: 0, feral: 0, hearth: 0, force: 0, noticer: 0, 
 weaver: 0, gatherer: 0, muse: 0, pilgrim: 0, 
 storyteller: 0, curator: 0, defender: 0, wit: 0 
 }); 
 setEmail(""); 
 setShowAllArchetypes(false); 
 setEmailSubmitted(false); 
 setShareStatus(""); 
 }; 
 const handleShare = async () => { 
 const ranked = getRankedCores(); 
 const primary = CORES[ranked[0].key]; 
 const modifier = MODIFIERS[getPrimaryModifier()]; 
 const shareText = `i got ${primary.name} with ${modifier.name} energy. take the quiz: ni const shareUrl = window.location.href; 
  
 if (navigator.share) { 
 try { 
 await navigator.share({ title: "Nine Women, One House", text: shareText, url: shareU setShareStatus("shared!"); 
 } catch (err) { 
 // user canceled 
 } 
 } else { 
 try { 
 await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);  setShareStatus("link copied to clipboard"); 
 setTimeout(() => setShareStatus(""), 3000);
 } catch (err) { 
 setShareStatus("couldn't copy automatically"); 
 } 
 } 
 }; 
 // LANDING 
 if (stage === "landing") { 
 return ( 
 <div className="min-h-screen bg-stone-50 text-stone-800 px-6 py-12 flex flex-col items <div className="max-w-md w-full text-center"> 
 <p className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-6">a domestic a <h1 className="text-4xl leading-tight mb-2 italic">nine women,</h1>  <h1 className="text-4xl leading-tight mb-10 italic">one house.</h1>   
 <div className="text-stone-600 text-base leading-relaxed mb-12 space-y-6">  <div className="space-y-1"> 
 <p>nine women.</p> 
 <p>nine ways of moving through a home,</p> 
 <p>a life,</p> 
 <p>and the people inside both.</p> 
 </div> 
 <div className="space-y-1"> 
 <p>some host dinner on a tuesday.</p> 
 <p>some start projects at 9pm.</p> 
 <p>some notice the bird first.</p> 
 <p>some turn ordinary childhoods into something people remember forever.</p>  </div> 
 <div className="space-y-1"> 
 <p>some are gatherers.</p> 
 <p>some are storytellers.</p> 
 <p>some are protectors.</p> 
 <p>some are wildflowers.</p> 
 </div> 
 <p>all of them are recognizable.</p> 
 <div className="space-y-1"> 
 <p>twenty questions.</p> 
 <p>about five minutes.</p> 
 <p><em>alarmingly accurate, respectfully.</em></p> 
 </div> 
 </div> 
 <button  
 onClick={() => setStage("quiz")} 
 className="bg-stone-800 text-stone-50 px-10 py-4 text-sm uppercase tracking-[0.2 > 
 begin
 </button> 
 <p className="text-xs text-stone-400 mt-12 italic"> 
 by @mrslovehealthdoc 
 </p> 
 </div> 
 </div> 
 ); 
 } 
 // QUIZ 
 if (stage === "quiz") { 
 const q = QUESTIONS[currentQ]; 
 const progress = ((currentQ + 1) / QUESTIONS.length) * 100; 
 return ( 
 <div className="min-h-screen bg-stone-50 text-stone-800 px-6 py-8 font-serif">  <div className="max-w-md mx-auto"> 
 <div className="mb-8"> 
 <div className="flex justify-between text-xs uppercase tracking-[0.2em] text-sto <span>{currentQ + 1} of {QUESTIONS.length}</span> 
 <span>{q.type === "fast" ? "quick" : ""}</span> 
 </div> 
 <div className="h-px bg-stone-200"> 
 <div  
 className="h-px bg-stone-800 transition-all duration-300"   style={{ width: `${progress}%` }} 
 /> 
 </div> 
 </div> 
 <h2 className="text-xl leading-relaxed mb-8 italic"> 
 {q.prompt} 
 </h2> 
 <div className="space-y-3"> 
 {q.options.map((option, i) => ( 
 <button 
 key={i} 
 onClick={() => handleAnswer(option)} 
 className="w-full text-left p-4 bg-white border border-stone-200 hover:borde > 
 {option.text} 
 </button> 
 ))} 
 </div> 
 </div>
 </div> 
 ); 
 } 
 // RESULTS 
 const ranked = getRankedCores(); 
 const primaryKey = ranked[0].key; 
 const secondaryKey = ranked[1].key; 
 const modifierKey = getPrimaryModifier(); 
 const primary = CORES[primaryKey]; 
 const secondary = CORES[secondaryKey]; 
 const modifier = MODIFIERS[modifierKey]; 
 return ( 
 <div className="min-h-screen bg-stone-50 text-stone-800 font-serif">  {/* HERO */} 
 <div className="bg-stone-800 text-stone-50 px-6 py-16"> 
 <div className="max-w-md mx-auto text-center"> 
 <p className="text-xs uppercase tracking-[0.3em] text-stone-400 mb-6">your archety <h1 className="text-3xl md:text-4xl italic mb-3 leading-tight">  {primary.name} 
 </h1> 
 <p className="text-base md:text-lg italic text-stone-300 mb-2">  with {modifier.name.replace("The ", "")} energy 
 </p> 
 <p className="text-sm text-stone-400 mb-8 italic"> 
 and a {secondary.name.replace("The ", "")} running underneath  </p> 
 <p className="text-lg italic text-stone-100 leading-relaxed">  "{primary.opening}" 
 </p> 
 </div> 
 </div> 
 {/* PRIMARY CORE WRITEUP - moved up to be the headliner */} 
 <div className="px-6 py-12"> 
 <div className="max-w-md mx-auto space-y-8"> 
 <div className="text-center pb-4"> 
 <p className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-2">how you mo <h2 className="text-2xl italic">{primary.name}</h2> 
 </div> 
 {primary.sections.map((section, i) => ( 
 <div key={i}> 
 <p className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-3">{section. {Array.isArray(section.content) ? ( 
 <ul className="space-y-2">
 {section.content.map((item, j) => ( 
 <li key={j} className="text-stone-700 leading-relaxed">— {item}</li>  ))} 
 </ul> 
 ) : ( 
 <p className="text-stone-700 leading-relaxed">{section.content}</p>  )} 
 </div> 
 ))} 
 </div> 
 </div> 
 {/* MODIFIER - now positioned AFTER the primary writeup */} 
 <div className="bg-amber-50 border-y border-amber-200 px-6 py-12">  <div className="max-w-md mx-auto"> 
 <p className="text-xs uppercase tracking-[0.3em] text-amber-700 mb-3 text-center"> <h2 className="text-2xl italic text-center mb-2">{modifier.name}</h2>  <p className="text-base italic text-stone-600 text-center mb-6">{modifier.tagline} <p className="text-stone-700 leading-relaxed">{modifier.description}</p>   
 <div className="mt-6 pt-6 border-t border-amber-200"> 
 <p className="text-xs uppercase tracking-[0.2em] text-amber-700 mb-2">the shadow <p className="text-sm text-stone-600 leading-relaxed italic">{modifier.shadow}</ </div> 
 <div className="mt-6 pt-6 border-t border-amber-200"> 
 <p className="text-xs uppercase tracking-[0.2em] text-amber-700 mb-2">the wink</ <p className="text-sm text-stone-600 leading-relaxed italic">{modifier.wink}</p>  </div> 
 </div> 
 </div> 
 {/* SECONDARY */} 
 <div className="bg-stone-100 px-6 py-12 border-b border-stone-200">  <div className="max-w-md mx-auto"> 
 <p className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-3 text-center"> <h2 className="text-2xl italic text-center mb-4">{secondary.name}</h2>  <p className="text-base italic text-stone-600 text-center mb-6">"{secondary.openin <p className="text-stone-700 leading-relaxed">{secondary.secondaryShort}</p>  </div> 
 </div> 
 {/* VIBE LINE */} 
 <div className="px-6 py-16 text-center"> 
 <div className="max-w-md mx-auto"> 
 <p className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-4">your vibe in <p className="text-3xl italic text-stone-800">{primary.vibe}</p>
 </div> 
 </div> 
 {/* EMAIL CAPTURE - moved up to right after vibe line for peak emotional moment */}  <div className="px-6 pb-12"> 
 <div className="max-w-md mx-auto bg-white p-6 border border-stone-200 text-center">  <p className="text-sm text-stone-600 leading-relaxed mb-4"> 
 want this sent to you? or want to know when more of these are coming?  </p> 
 {!emailSubmitted ? ( 
 <div className="space-y-3"> 
 <input 
 type="email" 
 value={email} 
 onChange={(e) => setEmail(e.target.value)} 
 placeholder="your email" 
 className="w-full p-3 border border-stone-300 text-stone-700"  /> 
 <button 
 onClick={() => email.includes("@") && setEmailSubmitted(true)}  className="w-full bg-stone-800 text-stone-50 py-3 text-xs uppercase tracking > 
 send it to me 
 </button> 
 </div> 
 ) : ( 
 <p className="text-sm text-stone-700 italic">got it. talk soon.</p>  )} 
 </div> 
 </div> 
 {/* SHARE - now with working share button */} 
 <div className="px-6 pb-8 text-center"> 
 <div className="max-w-md mx-auto"> 
 <p className="text-sm text-stone-600 mb-4 italic"> 
 send this to the friend who's most <em>{primary.name.toLowerCase().replace("the  </p> 
 <button 
 onClick={handleShare} 
 className="bg-stone-800 text-stone-50 px-8 py-3 text-xs uppercase tracking-[0.2e > 
 share my result 
 </button> 
 {shareStatus && ( 
 <p className="text-sm text-stone-600 mt-3 italic">{shareStatus}</p>  )} 
 </div>
 </div> 
 {/* EXPLORE - moved to bottom as system browse */} 
 <div className="px-6 py-8 bg-stone-100 border-t border-stone-200">  <div className="max-w-md mx-auto"> 
 <button 
 onClick={() => setShowAllArchetypes(!showAllArchetypes)} 
 className="w-full text-center text-sm uppercase tracking-[0.2em] text-stone-700  > 
 {showAllArchetypes ? "hide all archetypes" : "see all nine + four"}  </button> 
 {showAllArchetypes && ( 
 <div className="mt-6 space-y-4"> 
 <p className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-3">the nine {Object.entries(CORES).map(([key, core]) => ( 
 <div key={key} className={`bg-white p-4 border ${key === primaryKey ? 'borde <div className="flex items-baseline justify-between mb-2">  <p className="font-semibold italic">{core.name}</p>  {key === primaryKey && <span className="text-xs uppercase tracking-[0.15 {key === secondaryKey && <span className="text-xs uppercase tracking-[0. </div> 
 <p className="text-sm italic text-stone-600 mb-1">"{core.opening}"</p>  <p className="text-xs text-stone-500 italic">— {core.vibe}</p>  </div> 
 ))} 
 <p className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-3 mt-8">the {Object.entries(MODIFIERS).map(([key, mod]) => ( 
 <div key={key} className={`bg-white p-4 border ${key === modifierKey ? 'bord <div className="flex items-baseline justify-between mb-2">  <p className="font-semibold italic">{mod.name}</p>  {key === modifierKey && <span className="text-xs uppercase tracking-[0.1 </div> 
 <p className="text-sm italic text-stone-600 mb-2">{mod.tagline}</p>  <p className="text-sm text-stone-600 leading-relaxed">{mod.description}</p  </div> 
 ))} 
 </div> 
 )} 
 </div> 
 </div> 
 {/* RESTART */} 
 <div className="px-6 py-12 text-center"> 
 <button 
 onClick={restart}
 className="text-xs uppercase tracking-[0.2em] text-stone-500 hover:text-stone-800  > 
 take it again 
 </button> 
  
 <p className="text-xs text-stone-400 mt-12 italic"> 
 nine women, one house · by @mrslovehealthdoc 
 </p> 
 </div> 
 </div> 
 ); 
}
