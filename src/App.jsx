import React, { useState, useEffect } from "react";
import { supabase } from "./supabase";

const CORES = {
  wildflower: {
    name: `The Wildflower`,
    opening: `you packed the car before they finished asking.`,
    vibe: `alive on purpose.`,
    shareCallout: `send this to the friend who texts "i'm outside."`,
    secondaryShort: `you also have Wildflower running underneath — the yes-to-motion, the road, the door. when life gets too dense, you reach for it.`,
    sections: [
      { label: `you definitely`, content: [
        `have sand in the car from a beach day you didn't plan`,
        `own at least one tote bag with a snack, a swimsuit, and a library book in it`,
        `have said "wait — let's just go" within the last two weeks`,
        `have a camera roll that's 70% sky, water, and the back of your kids' heads`,
        `know exactly how long it takes to pack the car for an unplanned day`
      ]},
      { label: `your superpower`, content: `aliveness. you remember that this is supposed to be fun. you are the friend who makes other people feel allowed. you are constitutionally drawn to motion — the road, the door, the yes.` },
      { label: `with your kids`, content: `"get in the car." you are the mom of spontaneous beach days, skipped tuesdays, "let's just go look at it." your kids grow up thinking life is something you say yes to. they will remember you as the one who let them. they don't have a sterile childhood. they have a full one. their feet are dirty. they fell asleep in the car on the way home. they're fine.` },
      { label: `your home`, content: `lived-in and barely indoors. the back door is open. there are shoes by the door and sand on the floor and you've stopped apologizing for either. your house is a place you come back to, not a place you spend your day in. you'd rather be outside, and most of the time, you are. the things in your house are well-loved because they've been everywhere with you.` },
      { label: `your marriage / partner`, content: `you're the one who suggests the trip. you're the one who says "let's move the furniture." you bring the yes into the relationship and your partner anchors it — or matches it, and then it's chaos in the best way. you can be hard to keep up with. you don't apologize for that, but you know it. the love you give is loud.` },
      { label: `your friendships`, content: `you're the friend who texts "i'm outside" with no warning. you're the one who started the group chat. you remember birthdays inconsistently but you'll drive two hours when someone's dad dies. your love is verbs.` },
      { label: `your friday night`, content: `depends entirely on the weather and a feeling you had at 3pm. could be a bonfire with six families. could be takeout in the bathtub. could be packing the car at 7pm to go camping. you are constitutionally incapable of a "standing" anything. the answer is whatever feels alive.` },
      { label: `your work`, content: `you do best when there's room to move and go. you're not a 9-to-5. you say yes to the speaking gig in another city. you say yes to the road trip with the friend you haven't seen in years. you say yes to the thing that requires getting up and going somewhere. your career has probably zigzagged — the path doesn't look linear from the outside, but every move was toward something alive. the work that's yours has travel in it, even if the travel is just walking to the next room with a different idea.` },
      { label: `how you move`, content: `outside, ideally. a hike, a beach walk, a run that turns into a wander. you do not love a gym. you love the world being the venue. the workout is incidental — you wanted to be out there anyway. on a bad week, motion is your medicine. on a good week, motion is your celebration.` },
      { label: `your shadow side`, content: `the same engine that says yes to everything has a hard time staying. you reach for motion when you should be sitting still. you start things you don't finish, and you've learned to call that "following your energy" — sometimes it is. sometimes it's an escape hatch. you can be hard to pin down, even by people who love you. you avoid the slow conversation by suggesting a trip. you confuse aliveness with avoidance more often than you'd like to admit. the shadow isn't bad. it's the cost of the gift. you don't have to fix it — but you should know it's there.` },
      { label: `the wink`, content: `you have at least one half-dead plant you keep watering on principle. you have said "i'm going to start meditating" approximately forty times. there is a piece of fruit in your bag right now.` }
    ]
  },
  feral: {
    name: `The Firestarter`,
    opening: `you read three sentences of the recipe and started anyway.`,
    vibe: `she figured it out.`,
    shareCallout: `send this to the friend who has flour on her phone.`,
    secondaryShort: `you also have Firestarter running underneath — the maker, the hands-in-it, the "i can do it myself." you reach for projects when you need to feel like yourself.`,
    sections: [
      { label: `you definitely`, content: [
        `have flour on your phone screen right now`,
        `have made something you had no business making and it worked`,
        `have at least one project drying, fermenting, or curing in your kitchen`,
        `own a thing you built and you mention it casually`,
        `have YouTube tutorials open on your phone that you don't need to actually finish watching`
      ]},
      { label: `your superpower`, content: `full conviction without a tutorial. you start. that's it. that's the gift. other women research. you go — and you don't go anywhere. you go right here, into the project, into the dough, into the dirt. your aliveness is generative, and it happens at home.` },
      { label: `with your kids`, content: `they're in it with you. flour on the counter, chicks in a box on the porch, "go get the hammer." your kids learn by watching you try things and not panic when they don't work. you don't curate childhood — you invite them into yours. they grow up thinking the kitchen is for verbs. they will pull up to a friend's house at sixteen and know how to fix a flat. they will not be afraid of their own hands.` },
      { label: `your home`, content: `in a state of becoming. there is always a project. the counter is staging for something. the sourdough is on the counter. the chicken coop is half-painted. your house is not done and never will be — that's the point. you do not have a guest bedroom that is "ready." you have a guest bedroom that has a half-finished mosaic in it.` },
      { label: `your marriage / partner`, content: `you and your partner have a shared verb. you build things together, or you build things while they watch with their hand on their forehead saying "what are you doing." either works. you are not a passive partner. you bring projects, ideas, and a constant low-grade chaos. the relationship has texture because you have texture. you do not do still.` },
      { label: `your friendships`, content: `your friends come over and you put them to work. you didn't mean to — it's just that you're shucking corn and they're there. you teach more than you realize. women leave your house knowing how to do something they didn't know how to do that morning. you give competence as a gift.` },
      { label: `your friday night`, content: `something is fermenting. something is being made. you said you'd "take it easy" and then you started a project at 6pm. you are not on the couch. you might be on the couch eventually but only after you've punched down the dough one more time.` },
      { label: `your work`, content: `you are at your best with your hands in it. you do not theorize, you build. you are not interested in going anywhere if there's something to make at home. if you have a job that doesn't let you make things, you will be making things on the side — that's not a hobby, that's the actual you finding a way out. the work that's yours has texture you can feel. the Wildflower goes to the beach; you stay home and build a kiln.` },
      { label: `how you move`, content: `functional. lifting things. carrying things. the garden counts. so does building the coop. you might lift weights at home, but you are not buying the matching set. your body is built by what you build. you do not separate "working out" from "doing things" — both happen in the body, both make you stronger.` },
      { label: `your shadow side`, content: `you do not stop. you do not ask for help. you confuse "i can do it myself" with "i have to do it myself," and you have built an entire identity on the first one while quietly suffering the second. you mistake exhaustion for productivity. you don't always finish what you start because there's always a next project, and "finished" feels like a small death. the shadow isn't bad. it's the cost of the gift. you don't have to fix it — but you should know it's there.` },
      { label: `the wink`, content: `you have at least one injury from a project. you have googled "is it supposed to look like this" today. there is dough rising somewhere.` }
    ]
  },
  hearth: {
    name: `The Hearth`,
    opening: `you sat on the floor with someone last week and didn't say much.`,
    vibe: `safe to fall apart here.`,
    shareCallout: `send this to the friend whose house is the one people land at.`,
    secondaryShort: `you also have Hearth running underneath — the steady presence, the unflinching room, the friend everyone calls. it's the part of you that holds, even when the rest of you is moving.`,
    sections: [
      { label: `you definitely`, content: [
        `have a friend currently in a hard season who has your number on speed dial`,
        `have cried with someone this month and not been embarrassed about it`,
        `have a person in your life who only calls you when it's bad`,
        `have said "tell me everything" and meant it`,
        `have a couch with a divot in it shaped like the people you love`
      ]},
      { label: `your superpower`, content: `unshakeable presence. you do not flinch. people fall apart in front of you and you stay in the room. it is rarer than you know.` },
      { label: `with your kids`, content: `you are the one they come to when it falls apart. you sit on the floor. you let them cry the whole cry. you don't rush it. you don't fix it. you don't make it about you. your kids know — in their bones — that you will not flinch when they're a mess. they will tell you the hard thing when they're sixteen because you trained them at four that you could hold it. that is not nothing. that might be everything.` },
      { label: `your home`, content: `soft. there are blankets. there are candles, but used ones — not staged. there is always somewhere to sit and be sad. your couch has a divot in it shaped like the people you love. your house feels like an exhale. people come to your house and they don't know why they cry there. you know why.` },
      { label: `your marriage / partner`, content: `you hold a lot. probably too much. you are the emotional infrastructure of the relationship and you don't always get held back, and you've learned not to ask. your partner may not know how to be what you are. the love is real — but it is asymmetrical sometimes, and you feel it. the best version of this relationship is one where your partner is learning how to land you.` },
      { label: `your friendships`, content: `you are the one everyone calls. you have a roster. you remember what's going on with people. you check in. you check in again. you don't keep score, but you notice when no one's checking in on you. you are loved deeply by women who don't always know how to show it.` },
      { label: `your friday night`, content: `quiet. or with one person. you do not have a big-group friday night. you have a long conversation friday night. tea. a candle. someone telling you a hard thing slowly. the input has to be low for you to give what you give.` },
      { label: `your work`, content: `you are drawn to work that involves people in their hardest moments. therapy, healing, teaching, hospice, ministry, motherhood itself. if your day job isn't this, you are doing this on the side, unpaid, all the time. people find you. they always have. you didn't choose this. you were chosen.` },
      { label: `how you move`, content: `gentle and restorative. yoga, walking with a friend, swimming. you are not chasing a PR — you are giving yourself back. movement is one of the few times nobody else is asking you for anything, and your body finally gets to be yours. you do best when there's no performance, no app, no count.` },
      { label: `your shadow side`, content: `you absorb. you take on what isn't yours. you confuse other people's emotions for your own and you don't always know where you end and they begin. you are so good at holding everyone else that you forget no one is holding you — and you don't ask, because asking feels like a burden you can't add. you get tired in a way that doesn't fix with sleep. the shadow isn't bad. it's the cost of the gift. you don't have to fix it — but you should know it's there.` },
      { label: `the wink`, content: `your camera roll has at least four screenshots of texts from friends that said something nice. you have absolutely cried in a target before. you own more than one candle that's "for hard days."` }
    ]
  },
  force: {
    name: `The Force of Nature`,
    opening: `you have a plan. you also have a backup plan.`,
    vibe: `she got it done.`,
    shareCallout: `send this to the friend whose calendar runs the group.`,
    secondaryShort: `you also have Force of Nature running underneath — the executor, the load-bearing wall. when something needs doing, this is the engine that takes over.`,
    sections: [
      { label: `you definitely`, content: [
        `have a color-coded something in your life that other people find alarming`,
        `have made a spreadsheet for a vacation`,
        `have said "would you like to be in the plan" and meant it as a courtesy`,
        `have a tone you do when something is not on the schedule`,
        `have outworked a room more than once and not made a thing of it`
      ]},
      { label: `your superpower`, content: `you move real weight through the world. things happen because you make them happen. you don't wait. you don't drift. you decide and then it's done.` },
      { label: `with your kids`, content: `the schedule works. the snacks are packed. the birthday party is good. you don't half-do the things you do for your kids — and the things you choose not to do, you choose on purpose. your kids grow up inside a life that runs. they learn early that women are capable of moving real weight through the world without losing the plot. they learn that "i can handle this" is something you say and then prove.` },
      { label: `your home`, content: `functional and beautiful in that order. you have systems. you have a hook for everything. the labels are on the bins. there is a charging station and everyone respects it. your home does not have visible chaos because you have already preempted it. the dishwasher is running before you sit down.` },
      { label: `your marriage / partner`, content: `you are the load-bearing wall. you and your partner have probably had the conversation about how much you carry. you might still be having it. the relationship works because you make it work — and you are slowly learning that this is not a compliment. the best version of this relationship is one where your partner steps up — not so you can step down, but so you can finally be soft sometimes.` },
      { label: `your friendships`, content: `you are the planner. the group trip happens because of you. the dinner gets on the calendar because of you. your friends know you'll handle it and they let you, and you have feelings about that you don't always say. you would like to be invited to something you didn't plan.` },
      { label: `your friday night`, content: `already on the calendar. you don't do "what should we do tonight" — you do "what are we doing tonight" and the answer is already known. if it's a quiet night, it's a quiet night because you decided last tuesday. spontaneity is something you schedule.` },
      { label: `your work`, content: `you are the one who runs things. if you don't have a leadership role, you have one informally — people defer to you because you've earned it by being right too many times in a row. you will outwork the room. you have, in fact, already outworked the room. you don't need recognition, but you do notice when it doesn't come.` },
      { label: `how you move`, content: `on the schedule. probably 5am or 6am. probably the same days each week. probably a class with a structure, or a program with a plan. you do not skip. you do not negotiate. your workout is one of the few non-negotiables that's actually for you, and you defend it like a meeting. on a bad week, you still go. on a good week, you go harder.` },
      { label: `your shadow side`, content: `you cannot rest. resting feels like falling behind, and falling behind feels like dying. you control because the alternative — letting go — has never been safe. you don't ask for help because asking feels slower than just doing it. you have outsourced your own softness and you don't know how to get it back. you are tired in a way you don't admit, and the people closest to you know it but can't say it without setting off the tone. the shadow isn't bad. it's the cost of the gift. you don't have to fix it — but you should know it's there.` },
      { label: `the wink`, content: `you have a tab open right now that is a to-do list. you have at least once gotten frustrated at a vacation for being inefficient. you have a tote bag full of bags.` }
    ]
  },
  noticer: {
    name: `The Noticer`,
    opening: `you knew before they told you.`,
    vibe: `she saw it.`,
    shareCallout: `send this to the friend who saw it before anyone said it.`,
    secondaryShort: `you also have Noticer running underneath — the attuned one, the depth, the one who reads the room first. it's the part of you that's always listening, even when you're doing something else.`,
    sections: [
      { label: `you definitely`, content: [
        `know the names of trees you can see from your kitchen window`,
        `know which kid is off today without being told`,
        `have a notes app full of ideas you'll get to`,
        `have read the same book three times`,
        `have stopped a conversation to point at something`
      ]},
      { label: `your superpower`, content: `attunement and depth. you read rooms, weather, kids, animals, sentences. you go deep where other people skim. you can feel what other women only think about, and you've been doing it your whole life.` },
      { label: `with your kids`, content: `you clock the shift in the room before anyone else does. you know which kid needs you on a given day without asking. you don't have to ask "what's wrong" because you've already noticed. you remember what they said last tuesday. you answer the big questions seriously because you've already thought about them for six months. your kids feel known in a way they can't articulate yet. they grow up assuming someone is paying attention — and that is rarer than you know. they will be attuned themselves because they were attuned to.` },
      { label: `your home`, content: `considered. sensory. nothing in your house is there by accident, even the things that look casual. the light matters. the air matters. you opened the window because something needed it. your home is calibrated whether you meant to calibrate it or not. people walk in and feel something they can't name. it's because you've been adjusting it, quietly, for years.` },
      { label: `your marriage / partner`, content: `you read your partner. you know when they're off before they do. you don't always say what you've noticed, and sometimes you should. the relationship benefits from your attention but can suffer from your silence about what you've seen. you don't argue fast. you go quiet, you think, you come back. this drives some partners insane and is exactly what others need. the best version of this relationship is one where your partner asks you what you're noticing — because you don't always volunteer it.` },
      { label: `your friendships`, content: `small circle. real ones. you don't have forty friends, you have four, and three of them have known you for fifteen years. you are not interested in surface. you ask the second question. you don't return texts fast but when you do, you write something real. your friends know not to take it personally.` },
      { label: `your friday night`, content: `slow. observed. low input. you might be alone outside for an hour. you might be with one person, mostly quiet, watching the light change. you might have a book. you do not need stimulation. you need room. the inside life is loud — you don't need a lot of input.` },
      { label: `your work`, content: `you do best in work that rewards perception and depth. a good therapist, a good designer, a good teacher, a good doctor, a good writer, a good photographer. you see what others miss, and you go further with it than they would. if your job doesn't use this, the rest of your life does. you make things that are deeper than what's around them.` },
      { label: `how you move`, content: `attuned. your body tells you what it needs and you actually listen — which makes you rare. a walk one day, a slow yoga another, weights when the body asks for weights, rest when rest is what's needed. you do not have a "program" because you have a relationship. you can tell when something is off before the app does.` },
      { label: `your shadow side`, content: `you absorb the room. what you notice doesn't just register — it enters you, and you don't always have a way to put it back down. you can feel responsible for things you only saw. you can become a witness to your own life instead of an actor in it — watching the thing happen instead of changing it. you can also wait too long. you mistake thinking for doing, and you can hold back from people who would love you because you're "not sure yet" — and the not-sure can last years. the shadow isn't bad. it's the cost of the gift. you don't have to fix it — but you should know it's there.` },
      { label: `the wink`, content: `you have a photo of clouds on your phone. you have stopped a walk to look at a bug. you have started the same journal practice approximately nine times. there is a draft email you have not sent.` }
    ]
  },
  weaver: {
    name: `The Weaver`,
    opening: `kid on your hip, laptop in the kitchen, somehow it works.`,
    vibe: `both, actually.`,
    shareCallout: `send this to the friend with the laptop on the kitchen counter.`,
    secondaryShort: `you also have Weaver running underneath — the integrator, the refuser of "either/or." it's the part of you that knows you don't actually have to pick one lane.`,
    sections: [
      { label: `you definitely`, content: [
        `have taken a work call from a closet`,
        `have nursed a baby while writing an email`,
        `have refused the "either/or" your whole life`,
        `have been told you're "doing too much" and disagreed`,
        `have answered a slack message at a school pickup line`
      ]},
      { label: `your superpower`, content: `integration. you do not split yourself in half. you do not have a "work self" and a "mom self." you have a self, and the work and the kids both happen inside it. you are doing two things at once, well, and the people around you are just starting to notice.` },
      { label: `with your kids`, content: `they don't live in a separate "kid world." they're at the table while you work. they help with dinner because you're making it anyway. you take them on errands instead of finding childcare for errands. your kids grow up watching a woman who didn't split herself in half — and they learn they don't have to either. they will not assume work and home are enemies. that is a generational inheritance you are quietly giving them.` },
      { label: `your home`, content: `hybrid. the kitchen counter is also a desk. the dining table is also a workstation. the playroom has a printer. your home does not have rigid zones because you don't have rigid zones. the lines blur because you make them blur on purpose. it's not messy — it's integrated.` },
      { label: `your marriage / partner`, content: `you and your partner have probably renegotiated who does what approximately fourteen times. you are not a 1950s setup. you are not a roommates-who-coparent setup. you are a team, and the division of labor is fluid because life is fluid. the relationship requires real communication — because the roles aren't given, they're made.` },
      { label: `your friendships`, content: `your friends are the ones who don't think it's weird that you brought your kid to lunch. you have lost friends who needed you to be one thing or the other. you have kept the ones who let you be both. the women in your life are also integrators, mostly. you find each other.` },
      { label: `your friday night`, content: `varies wildly depending on what week of the month it is. could be a glass of wine with one kid still awake. could be a date night that includes a 15-minute work call you swore you'd ignore. the line between "on" and "off" is a soft line. you've made peace with that, mostly.` },
      { label: `your work`, content: `you have probably built something around your life rather than fit your life around a job. or you are about to. or you are quietly resenting the fact that you haven't yet. the work that's yours flexes. you are not made for rigid hours, but you are not made for no structure either. you live in the middle.` },
      { label: `how you move`, content: `in pieces. ten minutes while the kid naps. a walk that's also a phone call. yoga in the kitchen between meetings. the gym membership is more aspiration than practice. your movement has to be portable, interruptible, and forgiving — and you've made peace with the fact that this is what works for now. it counts. all of it counts.` },
      { label: `your shadow side`, content: `you do not have edges. work bleeds into family bleeds into sleep bleeds into work, and you call it integration when sometimes it's just no off switch. you can resent the both-handedness even though you chose it, because no one else around you is doing both and you start to feel like you're the only one who didn't get to pick a lane. you compare yourself to women who picked one — and you can't tell if you envy them or pity them, and that ambivalence is its own tax. the shadow isn't bad. it's the cost of the gift. you don't have to fix it — but you should know it's there.` },
      { label: `the wink`, content: `you have a laptop on the kitchen counter right now. you have answered an email from a bathtub. you have at least one tote bag that is half "work bag" and half "diaper bag."` }
    ]
  },
  gatherer: {
    name: `The Gatherer`,
    opening: `you set the extra place before they said yes.`,
    vibe: `the door's open.`,
    shareCallout: `send this to the friend whose house is full of other people's kids.`,
    secondaryShort: `you also have Gatherer running underneath — the convener, the room-maker. it's the part of you that turns a tuesday into a dinner and four people into a community.`,
    sections: [
      { label: `you definitely`, content: [
        `have hosted on a tuesday for no reason`,
        `have a friend whose kids are at your house right now or have been this week`,
        `have texted "come over" with no agenda`,
        `have a "regular" — a person who shows up at your house without ringing the bell`,
        `have introduced two people who ended up being each other's best friend`
      ]},
      { label: `your superpower`, content: `convening. you make rooms out of nothing. you don't wait to be invited. you build the room and people come.` },
      { label: `with your kids`, content: `your house is the house. friends' kids are always over. you set another place. you don't make a thing of it. your kids grow up in a home full of people — and they learn early that belonging is something you make for other people, not something you wait to be invited into. they will host their friends as adults. they will know how to set a table. they will know that the door opens.` },
      { label: `your home`, content: `made for people. there are extra chairs. there is always something to eat. the living room is configured for gathering, not for tv. you have a guest setup that's been used eleven times this year. your home runs on hospitality. there's a dish to share in the fridge that was made for whoever shows up.` },
      { label: `your marriage / partner`, content: `you and your partner are a we — when people are over, you co-host. you have a rhythm. your partner is either the other host or the one who hides and is glad to come out for dessert, and either works. the relationship has a public dimension because you do. you've thought about whether this is healthy. it is.` },
      { label: `your friendships`, content: `you have a lot of friends. real ones, not collected ones — but a lot. you maintain wide. you remember birthdays. you organize the group. you are the connector — you introduce people to each other and they end up being each other's best friend and you love that. your love is room-making.` },
      { label: `your friday night`, content: `people are over. or you went to someone else's people. friday is not a solo night for you, structurally. the input is high because you're feeding off it. the few solo fridays you do have are intentional and short-lived.` },
      { label: `your work`, content: `you do best in collaboration. you are not a lone-genius worker. you build with people, you teach with people, you sell with people. the work that's yours has other faces in it. if you're in a solo role, you've informally turned it into a team role by gathering people around you.` },
      { label: `how you move`, content: `social. a walking date with a friend. a class with the same women every week. a hike where the conversation is the point. you do not work out alone if you can help it. movement is one more room you build. on a solo day, you'll still go — but you'll come home with a story about who you saw there.` },
      { label: `your shadow side`, content: `you don't know how to be alone. you have built so much of yourself out of other people's presence that the silence feels like a problem to solve, not a state to be in. you over-invite. you fill the room before you've checked if you actually want anyone there. you can use hospitality as a way to avoid yourself — there's always a dinner to plan, always a person to text, always a room to set up. and the people you gather can't fully fill the place that quiet was supposed to. the shadow isn't bad. it's the cost of the gift. you don't have to fix it — but you should know it's there.` },
      { label: `the wink`, content: `you have texted "come over" to someone today. you have at least three extra of something in your pantry "in case." you have hosted a holiday that wasn't yours to host.` }
    ]
  },
  muse: {
    name: `The Muse`,
    opening: `you put the grocery-store flowers in three small vases and lit the candle at 11am.`,
    vibe: `she made it feel like something.`,
    shareCallout: `send this to the friend who set the table on a tuesday.`,
    secondaryShort: `you also have Muse running underneath — beauty as nutrient, pleasure as practice. it's the part of you that lights the candle for no reason, that needs life to feel like something.`,
    sections: [
      { label: `you definitely`, content: [
        `have plated leftovers like a restaurant`,
        `own perfume you wear when you're alone`,
        `have moved a lamp this week`,
        `have a "fall scent" and a "spring scent" and you take this seriously`,
        `have made dinner feel like an event for no occasion`
      ]},
      { label: `your superpower`, content: `making the ordinary feel like something. you take a tuesday and you adorn it. you take a regular kitchen and you score it. you take an unremarkable evening and you score it, light it, plate it, and turn it into a memory. you do not need permission, money, or a special occasion. the magic is in your eyes and your hands.` },
      { label: `with your kids`, content: `they grow up with cut fruit on a beautiful plate. music in the kitchen in the morning. candles at dinner because the moment deserved it. they watch you turn a sick day into a fort, a regular meal into a plating, a thursday into something. they grow up believing that beauty is daily and pleasure is allowed. they will be adults who know how to enjoy things. they will be adults who can make their own lives feel like something. that is an inheritance most kids never get.` },
      { label: `your home`, content: `sensual and conjured. there's always something lit. there's always music. the robe by the bed is nicer than what most people wear out. nothing in your house cost much, but all of it feels like something — because the alchemy is in the combinations, the layering, the lighting, the eye. your home is the most generous self-portrait you'll ever make. people walk in and feel a softness they can't place.` },
      { label: `your marriage / partner`, content: `you bring atmosphere into the relationship. you light the candle for date night at home. you wear the perfume to bed. you have taste and you've slowly trained your partner into it, mostly happily. the romance is not waiting for someone else to provide it. you provide it, and the best version of this relationship is one where your partner notices, names it, and brings their version back to you.` },
      { label: `your friendships`, content: `you are the friend who gives the good gifts — never expensive, always specific. you remember someone's favorite scent. you send the postcard. you make the playlist. your love is in the curation. the women in your life feel seen by you in a way that's sensory — you don't just remember their birthday, you remember what their kitchen smells like.` },
      { label: `your friday night`, content: `already a thing. a bath with the good salts you've been rationing. a record. a glass of something out of a beautiful glass. or a dinner where everything matters — the lighting, the playlist, the courses, the table. you do not collapse on friday night. you treat it like a small ceremony, even alone, even tired. especially tired.` },
      { label: `your work`, content: `you do best where atmosphere matters. design, hospitality, branding, writing, anything that engages the senses. if your day job isn't sensory, your evenings are — you're styling, sourcing, photographing, plating, rearranging. your eye is always on, and it's the most monetizable thing about you, whether or not you've monetized it yet.` },
      { label: `how you move`, content: `sensory and ritualistic. pilates, dance, yoga in soft light. or a long bath that counts. or a slow walk in beautiful clothing. you are not punishing your body, you are inhabiting it. the playlist matters. the candle in the locker room matters. your movement is one more place you compose.` },
      { label: `your shadow side`, content: `you can confuse pleasure with avoidance. the candle gets lit, the playlist goes on, the bath gets drawn — and the hard conversation, the unopened email, the difficult feeling stays exactly where you left it. you reach for the beautiful as a way of not being in what's ugly, and you've learned to call that "self-care." sometimes it is. sometimes it's a hideout. you can also slip into needing everything to feel good to function, and life will not always oblige. and there's a quieter version of the shadow: you can carry a low-grade shame about your means — like the alchemy is something you do because the real version isn't available to you — when in fact the alchemy is the real version, and the women buying the expensive version are jealous of you. the shadow isn't bad. it's the cost of the gift. you don't have to fix it — but you should know it's there.` },
      { label: `the wink`, content: `you have at least one robe you wear to put out the trash. you bought flowers for yourself this week. you have transferred a store-bought thing into a nicer container. you have at least once gotten dressed for a day spent entirely at home.` }
    ]
  },
  pilgrim: {
    name: `The Pilgrim`,
    opening: `you are not done becoming and you are not trying to be.`,
    vibe: `the inquiry is the life.`,
    shareCallout: `send this to the friend who's already on her next book.`,
    secondaryShort: `you also have Pilgrim running underneath — the seeker, the always-becoming. it's the part of you that's always reading the next thing, trying the next thing, becoming the next version of yourself.`,
    sections: [
      { label: `you definitely`, content: [
        `have a bookshelf that intimidates people`,
        `have changed your mind publicly about something you used to be sure of`,
        `have taken a course, retreat, modality, or practice that your friends had to google`,
        `have at least three things on your phone you're working through right now`,
        `have heard yourself say "i used to think that, but —" recently and not flinched`
      ]},
      { label: `your superpower`, content: `openness as discipline. you have practiced not arriving. most people grip an identity and call it stability. you have learned that the grip itself is the unsteadiness. you can sit with not-knowing in a way most adults have lost the capacity for. you are profoundly hard to manipulate because you've already considered the other side.` },
      { label: `with your kids`, content: `you are raising people, not products. you let them change. you let them try the weird thing, abandon the weird thing, contradict themselves, double back. you don't lock them into who they were at six. they grow up with a mother who's still becoming herself, and they understand that's an option. they will not be afraid to outgrow what they used to love. they will not need to "find themselves" because they were never told they had to be one thing. that's an inheritance most kids don't get.` },
      { label: `your home`, content: `a record of where you've been. books from different chapters. an object from a place you used to live. a thing on the shelf that someone gave you in a version of your life that doesn't exist anymore. your home is a timeline, gently. nothing is curated to project a single coherent self because you've never been a single coherent self and you've made peace with that.` },
      { label: `your marriage / partner`, content: `you are not the same woman your partner married, and you've told them. the best version of this relationship is one where you both keep becoming and stay curious about each other. the worst version is the one where your partner is trying to keep you the way you were when they met you. you do not stay the same to keep someone comfortable. you can't. it would be a kind of death.` },
      { label: `your friendships`, content: `your friendships have seasons. the friend from your last chapter might still be in your life or might not be — and either is fine. you have a small group of friends who have let you change and who are also changing themselves. the loyalty in your friendships isn't to who you were — it's to who you're each becoming. it's a more durable loyalty than most people have.` },
      { label: `your friday night`, content: `something that involves your inner life. a long bath thinking about a podcast. a book that's about to change you. a long walk with the friend who can keep up. or a quiet evening with whatever you're working through right now. the friday night is rarely external, and you've stopped apologizing for that.` },
      { label: `your work`, content: `you have done several things. you'll probably do several more. your resume looks like a mosaic, not a ladder, and you've learned to stop explaining it. the work that's yours is the work you're in right now, and you trust that the next thing will arrive when it's time. you do not climb — you traverse.` },
      { label: `how you move`, content: `investigative. you've probably tried four modalities in the last two years. pilates this year, weights last year, somatic experiencing the year before that. you don't stay in one practice forever and you don't apologize for changing — because your body, like your mind, is becoming. you treat movement as inquiry, not maintenance.` },
      { label: `your shadow side`, content: `you can mistake becoming for avoiding. you have, at least once, used "i'm still figuring it out" as cover for not doing the hard thing. you can keep moving past discomfort instead of sitting in it — and call it growth. you can also exhaust the people who love you by being a moving target — they want to know you and you keep changing the shape of who they're trying to know. you can be subtly proud of your unfinishedness in a way that becomes its own kind of arrival. the shadow isn't bad. it's the cost of the gift.` },
      { label: `the wink`, content: `you have started a journal practice this year. you have at least one book you bought because of the title and never finished. you have re-discovered the same insight three times in different frameworks and not been embarrassed.` }
    ]
  }
};

const MODIFIERS = {
  storyteller: {
    name: `The Storyteller`,
    tagline: `language is your medium.`,
    description: `you don't just live your life — you narrate it. you turn the ordinary tuesday into a sentence. you remember exactly what they said. your love language is being described well. you have a voice memo of yourself processing something. you have a notebook somewhere with phrases that haven't found their home yet.`,
    shadow: `you can live in the description more than the experience. you can write about it instead of being in it. you can spend an hour drafting the perfect text about a feeling instead of having the feeling. you can turn the people you love into characters in the story of you, and then forget they have a story of their own.`,
    wink: `you have re-read your own caption. you have written a draft text three times before sending it. you have at least one voice memo from a year ago you've never listened back to.`
  },
  curator: {
    name: `The Curator`,
    tagline: `composition is your medium.`,
    description: `you arrange, layer, edit, and refine. you walk into a room and rearrange it in your head. the object on the shelf matters. the light matters. you can spot the wrong thing in a beautiful room at fifty paces. you don't decorate — you compose. your eye is always on, whether you're styling a shelf or a sentence or a friday night.`,
    shadow: `you can over-edit. you can adjust the room three times before sitting down in it. you can refuse to enjoy something until you've fixed it. you can feel a low-grade wrongness about disorder that you've never named because it sounds shallow, but it's wired into your nervous system.`,
    wink: `you have moved a piece of furniture this week. you have a "for company" version of something you secretly use yourself. you have stopped mid-conversation to fix a crooked picture frame.`
  },
  defender: {
    name: `The Defender`,
    tagline: `protection is your medium.`,
    description: `you know what's yours. you know what you won't tolerate. you will end you, with words or otherwise. you do not have a thirty-minute warm-up before saying no. fierce clarity is your default state. you have a line, and people who try to cross it find out fast.`,
    shadow: `you can be armored when you don't need to be. you scan for threats even in rooms that are safe, and the people closest to you feel scanned. you can mistake control for protection — the people you love can feel managed rather than held. you have a hard time receiving softness because you've spent so long being the wall.`,
    wink: `you have left a doctor's office. you have a text thread with a friend that is just you both being furious. you have read the school's email twice and started typing before you finished.`
  },
  wit: {
    name: `The Wit`,
    tagline: `humor is your medium.`,
    description: `you process through the punchline. you defuse a tense moment with a single sentence. mischief is your love language. you can make a hospital waiting room laugh. you and your deadpan friends recognize each other across a crowded room. you have made your kids snort milk through their nose. you have, at least once, won an argument by saying something so funny that the other person forgot what they were arguing about.`,
    shadow: `you can deflect with humor when you should be sitting with something. you make the joke instead of having the feeling. you can let people get away with hurting you because you turned it into a bit before you registered the hurt. you can also exhaust yourself being on — the laugh becomes the labor.`,
    wink: `you have made a stranger laugh this week. you have written a caption that took you ten minutes because the joke had to land exactly. you have a friend who only knows you in your funny mode and you've never bothered to correct it.`
  }
};

const QUESTIONS = [
  { id: 1, prompt: `nothing is on fire. nothing is scheduled. what do you do first:`, type: `long`, options: [
    { text: `the car gets packed. we figure out where we're going on the way.`, scores: { wildflower: 2, gatherer: 1 } },
    { text: `i start a project i've been thinking about all week.`, scores: { feral: 2, force: 1 } },
    { text: `slow breakfast, music, candle even though it's morning.`, scores: { muse: 2, hearth: 1 } },
    { text: `the kids do their thing. i do mine. nobody talks for an hour.`, scores: { noticer: 2, pilgrim: 1 } },
    { text: `house first. i can't enjoy a day with a sink full of dishes.`, scores: { force: 2, weaver: 1 } },
    { text: `figure out who's coming over. food once i know.`, scores: { gatherer: 2, wildflower: 1 } },
    { text: `check in on the friend who's having a hard week.`, scores: { hearth: 2, noticer: 1 } },
    { text: `clear my inbox while the coffee brews. the day is better that way.`, scores: { weaver: 2, force: 1 } },
    { text: `open the book i'm reading. kids know i'm a person.`, scores: { pilgrim: 2, noticer: 1 } },
    { text: `get the workout in. it's already on the schedule.`, scores: { force: 2 } },
    { text: `move my body first. a walk, a stretch, whatever it asks for.`, scores: { noticer: 2, wildflower: 1 } }
  ]},
  { id: 2, prompt: `my house is mostly:`, type: `long`, options: [
    { text: `somewhere we leave from.`, scores: { wildflower: 2 } },
    { text: `somewhere we're building.`, scores: { feral: 2 } },
    { text: `somewhere people land.`, scores: { hearth: 2 } },
    { text: `somewhere that runs.`, scores: { force: 2 } },
    { text: `somewhere we pay attention.`, scores: { noticer: 2 } },
    { text: `somewhere two things happen at once.`, scores: { weaver: 2 } },
    { text: `somewhere we host.`, scores: { gatherer: 2 } },
    { text: `somewhere beautiful.`, scores: { muse: 2 } },
    { text: `somewhere we're each still figuring it out.`, scores: { pilgrim: 2 } }
  ]},
  { id: 3, prompt: `which of these is most you, this year:`, type: `long`, options: [
    { text: `the woman in the car with a thermos and three kids and a vague plan`, scores: { wildflower: 2 } },
    { text: `the woman with flour on her phone`, scores: { feral: 2 } },
    { text: `the woman on the couch with the friend who's falling apart`, scores: { hearth: 2 } },
    { text: `the woman whose calendar is the reason everything works`, scores: { force: 2 } },
    { text: `the woman who knew which kid was off without being told`, scores: { noticer: 2 } },
    { text: `the woman with the laptop on the kitchen counter and a kid on her hip`, scores: { weaver: 2 } },
    { text: `the woman whose house is full of other people's kids`, scores: { gatherer: 2 } },
    { text: `the woman who lit the candle at 11am because the day called for it`, scores: { muse: 2 } },
    { text: `the woman who's already on her next book and her next idea`, scores: { pilgrim: 2 } }
  ]},
  { id: 4, prompt: `would you rather:`, type: `fast`, options: [
    { text: `spend the day out`, scores: { wildflower: 1 } },
    { text: `spend the day making something`, scores: { feral: 1 } }
  ]},
  { id: 5, prompt: `you have one free hour. nobody needs you. you most likely:`, type: `long`, options: [
    { text: `get out of the house.`, scores: { wildflower: 2, pilgrim: 1 } },
    { text: `start something with your hands.`, scores: { feral: 2 } },
    { text: `check on someone.`, scores: { hearth: 2, gatherer: 1 } },
    { text: `handle three small things you've been meaning to handle.`, scores: { force: 2, weaver: 1 } },
    { text: `sit somewhere quiet and don't do much.`, scores: { noticer: 2 } },
    { text: `get two things done that you couldn't do at the same time before.`, scores: { weaver: 2 } },
    { text: `text someone to come over.`, scores: { gatherer: 2 } },
    { text: `bath, candle, music, even though it's a tuesday.`, scores: { muse: 2 } },
    { text: `read or listen to what you're working through right now.`, scores: { pilgrim: 2 } }
  ]},
  { id: 6, prompt: `your real night off. not the one you'd post:`, type: `long`, options: [
    { text: `whatever the weather and a 3pm feeling told you to do.`, scores: { wildflower: 2 } },
    { text: `something's fermenting. you said you'd take it easy. you didn't.`, scores: { feral: 2 } },
    { text: `one person across the table having the real conversation.`, scores: { hearth: 2, noticer: 1 } },
    { text: `already on the calendar. already handled.`, scores: { force: 2 } },
    { text: `quiet. low input. you don't need much.`, scores: { noticer: 2 } },
    { text: `kids still up. work email at 9pm. somehow okay.`, scores: { weaver: 2 } },
    { text: `people are over. or you're at someone's people.`, scores: { gatherer: 2 } },
    { text: `a bath. a candle. food that matters even if you're alone.`, scores: { muse: 2 } },
    { text: `a book or a long walk and your own thoughts.`, scores: { pilgrim: 2 } },
    { text: `with my people. that's the whole point of the night off.`, scores: { hearth: 2, gatherer: 1, feral: 1 } }
  ]},
  { id: 7, prompt: `the door rings unexpectedly. you:`, type: `fast`, options: [
    { text: `open it. always.`, scores: { gatherer: 1 } },
    { text: `open it. but you're checking who first.`, scores: { hearth: 1 } },
    { text: `don't open it. you're not ready for that today.`, scores: { noticer: 1 } }
  ]},
  { id: 8, prompt: `when life gets hard, your first move is usually:`, type: `long`, options: [
    { text: `move. trip, project, change something.`, scores: { wildflower: 2 } },
    { text: `work harder. stop sleeping if you have to.`, scores: { feral: 2, force: 1 } },
    { text: `take on someone else's hard. easier than your own.`, scores: { hearth: 2 } },
    { text: `control. tighten the systems. make a plan.`, scores: { force: 2 } },
    { text: `go quiet. disappear for a few days.`, scores: { noticer: 2, pilgrim: 1 } },
    { text: `push through. no time to feel it. you have three things due.`, scores: { weaver: 2 } },
    { text: `gather people. nobody falls apart alone in your house.`, scores: { gatherer: 2 } },
    { text: `make the hard thing beautiful. or reach for beauty to get through it.`, scores: { muse: 2 } },
    { text: `look for the lesson. find the framework. find the next teacher.`, scores: { pilgrim: 2 } }
  ]},
  { id: 9, prompt: `which one is most true:`, type: `fast`, options: [
    { text: `my purse weighs 12 pounds`, scores: { weaver: 1 } },
    { text: `my purse has a snack in it`, scores: { wildflower: 1 } },
    { text: `my purse has a candle in it`, scores: { muse: 1 } },
    { text: `my purse has a book in it`, scores: { pilgrim: 1 } },
    { text: `i don't carry a purse`, scores: { feral: 1, force: 1 } }
  ]},
  { id: 10, prompt: `if your kids had to describe you to a stranger, they'd say:`, type: `long`, options: [
    { text: `"my mom takes us everywhere."`, scores: { wildflower: 2 } },
    { text: `"my mom can fix anything."`, scores: { feral: 2 } },
    { text: `"my mom is the one you tell stuff to."`, scores: { hearth: 2 } },
    { text: `"my mom is in charge."`, scores: { force: 2 } },
    { text: `"my mom can tell when something's wrong."`, scores: { noticer: 2 } },
    { text: `"my mom is always doing like five things."`, scores: { weaver: 2 } },
    { text: `"there are always people at my house."`, scores: { gatherer: 2 } },
    { text: `"my mom makes everything pretty."`, scores: { muse: 2 } },
    { text: `"my mom reads a lot."`, scores: { pilgrim: 2 } },
    { text: `"my mom is really funny."`, scores: { wit: 2 } }
  ]},
  { id: 11, prompt: `what actually runs you:`, type: `long`, options: [
    { text: `the next yes. the road. the open thing.`, scores: { wildflower: 2 } },
    { text: `making things. doing things. building.`, scores: { feral: 2 } },
    { text: `being where someone needs you.`, scores: { hearth: 2 } },
    { text: `getting it done. moving real weight.`, scores: { force: 2 } },
    { text: `seeing things first. knowing things first.`, scores: { noticer: 2 } },
    { text: `refusing to pick one lane.`, scores: { weaver: 2 } },
    { text: `making rooms full of people.`, scores: { gatherer: 2 } },
    { text: `needing it to feel beautiful.`, scores: { muse: 2 } },
    { text: `the next book. the next idea. the next version of you.`, scores: { pilgrim: 2 } }
  ]},
  { id: 12, prompt: `closer to true:`, type: `fast`, options: [
    { text: `i run things`, scores: { force: 1 } },
    { text: `i hold things together`, scores: { weaver: 1 } }
  ]},
  { id: 13, prompt: `something big happens — good or bad. first instinct:`, type: `long`, options: [
    { text: `write about it. even if just for you.`, scores: { storyteller: 2 } },
    { text: `make the moment look like something. light a candle. set the table.`, scores: { curator: 2 } },
    { text: `decide who needs protecting. and from what.`, scores: { defender: 2 } },
    { text: `find the line in it that's funny. don't say it out loud yet.`, scores: { wit: 2 } }
  ]},
  { id: 14, prompt: `the friend you remind people of most is:`, type: `long`, options: [
    { text: `the one who texted you something so well-written you saved it to your camera roll`, scores: { storyteller: 2 } },
    { text: `the one whose pantry looks like a magazine and she didn't try`, scores: { curator: 2 } },
    { text: `the one who once stood between her kid and a teacher and the room actually went quiet`, scores: { defender: 2 } },
    { text: `the one who made you laugh so hard in a grocery store that strangers stared`, scores: { wit: 2 } }
  ]},
  { id: 15, prompt: `someone you love is going through it. you:`, type: `fast`, options: [
    { text: `send a text that takes you 20 minutes to write`, scores: { storyteller: 1 } },
    { text: `show up at their door with food and a candle`, scores: { curator: 1, hearth: 1 } },
    { text: `make a phone call to the person responsible for it`, scores: { defender: 1 } }
  ]},
  { id: 16, prompt: `if someone left you a one-line note on the kitchen counter, it'd probably say:`, type: `long`, options: [
    { text: `"this is so well-said i'm putting it on the fridge."`, scores: { storyteller: 2 } },
    { text: `"how did you make this look like this."`, scores: { curator: 2 } },
    { text: `"thank you. nobody else would have said something."`, scores: { defender: 2 } },
    { text: `"i'm crying. send help. you ruined me."`, scores: { wit: 2 } }
  ]},
  { id: 17, prompt: `with your partner — current, past, or hypothetical — you are most often the one who:`, type: `long`, options: [
    { text: `says "let's just go"`, scores: { wildflower: 2 } },
    { text: `starts a renovation without asking`, scores: { feral: 2 } },
    { text: `notices they had a hard day before they tell you`, scores: { hearth: 2, noticer: 1 } },
    { text: `has the plan when nobody else does`, scores: { force: 2 } },
    { text: `reads the room first`, scores: { noticer: 2 } },
    { text: `says "we'll do both"`, scores: { weaver: 2 } },
    { text: `invites people over without warning`, scores: { gatherer: 2 } },
    { text: `sets the table even on a tuesday`, scores: { muse: 2 } },
    { text: `just told them about your new idea`, scores: { pilgrim: 2 } }
  ]},
  { id: 18, prompt: `the honest truth about your closest love is:`, type: `long`, options: [
    { text: `we're each other's adventure partner`, scores: { wildflower: 1 } },
    { text: `we build a life together with our hands`, scores: { feral: 1 } },
    { text: `i'm the one who holds it. mostly.`, scores: { hearth: 2 } },
    { text: `i run it. they know.`, scores: { force: 2 } },
    { text: `i see things they don't say out loud`, scores: { noticer: 1 } },
    { text: `we are juggling. we're tired but we love it.`, scores: { weaver: 1 } },
    { text: `we're each other's home base for everyone we love`, scores: { gatherer: 1 } },
    { text: `i'm the one bringing the beauty. they receive it.`, scores: { muse: 2 } },
    { text: `we are not who we were, and we're learning each other again`, scores: { pilgrim: 1 } }
  ]},
  { id: 19, prompt: `tonight:`, type: `fast`, options: [
    { text: `outside`, scores: { wildflower: 1, noticer: 1 } },
    { text: `inside`, scores: { feral: 1, muse: 1, hearth: 1 } }
  ]},
  { id: 20, prompt: `the truest thing about you, if you only got one:`, type: `long`, options: [
    { text: `i'm always going somewhere. physically or otherwise.`, scores: { wildflower: 1, pilgrim: 1 } },
    { text: `i can't stop making things.`, scores: { feral: 1 } },
    { text: `people end up at my house when their life is falling apart.`, scores: { hearth: 1 } },
    { text: `things actually happen when i'm in charge of them.`, scores: { force: 1 } },
    { text: `i see what other people don't.`, scores: { noticer: 1 } },
    { text: `i refuse to pick one lane.`, scores: { weaver: 1 } },
    { text: `my house is always full of other people's kids and other people's friends.`, scores: { gatherer: 1 } },
    { text: `i need life to feel beautiful or i can't function.`, scores: { muse: 1 } },
    { text: `i've been six versions of myself and i'm not done.`, scores: { pilgrim: 1 } },
    { text: `i can describe a thing exactly.`, scores: { storyteller: 1 } },
    { text: `every space i'm in starts looking like me.`, scores: { curator: 1 } },
    { text: `i will end you for the people i love.`, scores: { defender: 1 } },
    { text: `i make people laugh and it's not always on purpose.`, scores: { wit: 1 } }
  ]}
];

export default function App() {
  const [stage, setStage] = useState(`landing`);
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState({
    wildflower: 0, feral: 0, hearth: 0, force: 0, noticer: 0,
    weaver: 0, gatherer: 0, muse: 0, pilgrim: 0,
    storyteller: 0, curator: 0, defender: 0, wit: 0
  });
  const [name, setName] = useState(``);
  const [email, setEmail] = useState(``);
  const [showAllArchetypes, setShowAllArchetypes] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [shareStatus, setShareStatus] = useState(``);
  const [answerHistory, setAnswerHistory] = useState([]);
  const [resultRowId, setResultRowId] = useState(null);
  const [shareLinkCopied, setShareLinkCopied] = useState(false);
  const [sharedResult, setSharedResult] = useState(null);

  // Check URL on load for share parameters
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const shareParam = params.get(`share`);
    const fromParam = params.get(`from`);
    if (shareParam) {
      const parts = shareParam.split(`-`);
      if (parts.length >= 3) {
        setSharedResult({
          primary: parts[0],
          secondary: parts[1],
          modifier: parts[2],
          from: fromParam || ``
        });
        setStage(`shareLanding`);
      }
    }
  }, []);

  const saveResultToSupabase = async (finalScores) => {
    const coreKeys = [`wildflower`, `feral`, `hearth`, `force`, `noticer`, `weaver`, `gatherer`, `muse`, `pilgrim`];
    const modKeys = [`storyteller`, `curator`, `defender`, `wit`];
    const rankedCores = coreKeys.map(key => ({ key, score: finalScores[key] })).sort((a, b) => b.score - a.score);
    const topModifier = modKeys.reduce((max, key) => finalScores[key] > finalScores[max] ? key : max, modKeys[0]);

    try {
      const { data, error } = await supabase
        .from(`quiz_results`)
        .insert([{
          primary_archetype: rankedCores[0].key,
          secondary_archetype: rankedCores[1].key,
          modifier: topModifier,
          scores: finalScores,
          name: name || null
        }])
        .select();
      if (error) {
        console.error(`supabase save error:`, error);
      } else if (data && data[0]) {
        setResultRowId(data[0].id);
      }
    } catch (err) {
      console.error(`supabase save exception:`, err);
    }
  };

  const handleAnswer = (option) => {
    const newScores = { ...scores };
    Object.entries(option.scores).forEach(([key, value]) => {
      newScores[key] += value;
    });
    setScores(newScores);

    const newHistory = [...answerHistory.slice(0, currentQ), option];
    setAnswerHistory(newHistory);

    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ(currentQ + 1);
      window.scrollTo({ top: 0, behavior: `smooth` });
    } else {
      saveResultToSupabase(newScores);
      setStage(`results`);
      window.scrollTo({ top: 0, behavior: `smooth` });
    }
  };

  const handleBack = () => {
    if (currentQ === 0) return;
    const previousAnswer = answerHistory[currentQ - 1];
    if (previousAnswer) {
      const newScores = { ...scores };
      Object.entries(previousAnswer.scores).forEach(([key, value]) => {
        newScores[key] -= value;
      });
      setScores(newScores);
    }
    setCurrentQ(currentQ - 1);
    window.scrollTo({ top: 0, behavior: `smooth` });
  };

  const getRankedCores = () => {
    const coreKeys = [`wildflower`, `feral`, `hearth`, `force`, `noticer`, `weaver`, `gatherer`, `muse`, `pilgrim`];
    return coreKeys
      .map(key => ({ key, score: scores[key] }))
      .sort((a, b) => b.score - a.score);
  };

  const getPrimaryModifier = () => {
    const modKeys = [`storyteller`, `curator`, `defender`, `wit`];
    return modKeys.reduce((max, key) => scores[key] > scores[max] ? key : max, modKeys[0]);
  };

  const restart = () => {
    setStage(`landing`);
    setCurrentQ(0);
    setScores({
      wildflower: 0, feral: 0, hearth: 0, force: 0, noticer: 0,
      weaver: 0, gatherer: 0, muse: 0, pilgrim: 0,
      storyteller: 0, curator: 0, defender: 0, wit: 0
    });
    setName(``);
    setEmail(``);
    setShowAllArchetypes(false);
    setEmailSubmitted(false);
    setShareStatus(``);
    setAnswerHistory([]);
    setResultRowId(null);
    setShareLinkCopied(false);
    setSharedResult(null);
    // Clear URL params so they don't loop back to share landing
    if (window.location.search) {
      window.history.replaceState({}, ``, window.location.pathname);
    }
  };

  const startQuizFromShare = () => {
    setSharedResult(null);
    setStage(`nameEntry`);
    if (window.location.search) {
      window.history.replaceState({}, ``, window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: `smooth` });
  };

  const buildShareUrl = () => {
    const ranked = getRankedCores();
    const primaryKey = ranked[0].key;
    const secondaryKey = ranked[1].key;
    const modifierKey = getPrimaryModifier();
    const baseUrl = `${window.location.origin}${window.location.pathname}`;
    const sharePath = `${primaryKey}-${secondaryKey}-${modifierKey}`;
    const fromParam = name ? `&from=${encodeURIComponent(name.trim())}` : ``;
    return `${baseUrl}?share=${sharePath}${fromParam}`;
  };

  const handleCopyShareLink = async () => {
    const url = buildShareUrl();
    try {
      await navigator.clipboard.writeText(url);
      setShareLinkCopied(true);
      setTimeout(() => setShareLinkCopied(false), 3000);
    } catch (err) {
      console.error(`copy failed:`, err);
    }
  };

  const handleNativeShareLink = async () => {
    const url = buildShareUrl();
    const ranked = getRankedCores();
    const primary = CORES[ranked[0].key];
    const modifier = MODIFIERS[getPrimaryModifier()];
    const shareText = name
      ? `i took this quiz. i'm ${primary.name} with ${modifier.name} energy. what are you?`
      : `i took this quiz. i'm ${primary.name} with ${modifier.name} energy. take it.`;
    if (navigator.share) {
      try {
        await navigator.share({ title: `Nine Women, One House`, text: shareText, url });
      } catch (err) {
        // canceled
      }
    } else {
      handleCopyShareLink();
    }
  };

  const handleShare = async () => {
    const ranked = getRankedCores();
    const primary = CORES[ranked[0].key];
    const modifier = MODIFIERS[getPrimaryModifier()];
    const shareText = name
      ? `i took this quiz. i'm ${primary.name} with ${modifier.name} energy. what are you?`
      : `i took this quiz. i'm ${primary.name} with ${modifier.name} energy. take it.`;
    const shareUrl = buildShareUrl();

    if (navigator.share) {
      try {
        await navigator.share({ title: `Nine Women, One House`, text: shareText, url: shareUrl });
        setShareStatus(`shared!`);
      } catch (err) {
        // user canceled
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
        setShareStatus(`link copied to clipboard`);
        setTimeout(() => setShareStatus(``), 3000);
      } catch (err) {
        setShareStatus(`couldn't copy automatically`);
      }
    }
  };

  // LANDING
  if (stage === "landing") {
    return (
      <div className="min-h-screen bg-stone-50 text-stone-800 px-6 py-12 flex flex-col items-center font-serif">
        <div className="max-w-md w-full text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-6">a domestic archetype quiz</p>
          <h1 className="text-4xl leading-tight mb-2 italic">nine women,</h1>
          <h1 className="text-4xl leading-tight mb-10 italic">one house.</h1>
          
          <div className="text-stone-600 text-base leading-relaxed mb-12 space-y-6">
            <div className="space-y-1">
              <p>nine women.</p>
              <p>nine ways of moving through a home,</p>
              <p>a life,</p>
              <p>and the people inside both.</p>
            </div>
            <div className="space-y-1">
              <p>some host dinner on a tuesday.</p>
              <p>some start projects at 9pm.</p>
              <p>some notice the bird first.</p>
              <p>some turn ordinary childhoods into something people remember forever.</p>
            </div>
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
            onClick={() => setStage(`nameEntry`)}
            className="bg-stone-800 text-stone-50 px-10 py-4 text-sm uppercase tracking-[0.2em] hover:bg-stone-700 transition-colors"
          >
            begin
          </button>

          <p className="text-xs text-stone-400 mt-12 italic">
            by @mrslovehealthdoc
          </p>
        </div>
      </div>
    );
  }

  // SHARE LANDING (when someone clicks a friend's share link)
  if (stage === "shareLanding" && sharedResult) {
    const primary = CORES[sharedResult.primary];
    const secondary = CORES[sharedResult.secondary];
    const modifier = MODIFIERS[sharedResult.modifier];

    if (!primary || !secondary || !modifier) {
      // Bad share link, fall back to landing
      return (
        <div className="min-h-screen bg-stone-50 text-stone-800 px-6 py-12 flex flex-col items-center font-serif">
          <div className="max-w-md w-full text-center">
            <p className="text-sm text-stone-600 mb-6 italic">that share link didn't quite work. take the quiz fresh:</p>
            <button
              onClick={startQuizFromShare}
              className="bg-stone-800 text-stone-50 px-10 py-4 text-sm uppercase tracking-[0.2em] hover:bg-stone-700 transition-colors"
            >
              begin
            </button>
          </div>
        </div>
      );
    }

    const sharerName = sharedResult.from ? sharedResult.from.toLowerCase() : ``;

    return (
      <div className="min-h-screen bg-stone-50 text-stone-800 px-6 py-12 flex flex-col items-center font-serif">
        <div className="max-w-md w-full text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-8">a domestic archetype quiz</p>

          <p className="text-sm text-stone-600 mb-3 italic">
            {sharerName ? `${sharerName} got:` : `your friend got:`}
          </p>

          <h1 className="text-3xl leading-tight italic mb-2">{primary.name}</h1>
          <p className="text-sm text-stone-600 italic mb-1">with {modifier.name} energy</p>
          <p className="text-sm text-stone-500 italic mb-8">and a {secondary.name.replace(`The `, ``)} running underneath</p>

          <div className="my-10 py-6 border-t border-b border-stone-300">
            <p className="text-lg italic text-stone-700">{primary.vibe}</p>
          </div>

          <p className="text-base text-stone-700 mb-10 italic leading-relaxed">
            twenty questions.<br/>
            about five minutes.<br/>
            <em>alarmingly accurate, respectfully.</em>
          </p>

          <button
            onClick={startQuizFromShare}
            className="bg-stone-800 text-stone-50 px-10 py-4 text-sm uppercase tracking-[0.2em] hover:bg-stone-700 transition-colors"
          >
            find out yours →
          </button>

          <p className="text-xs text-stone-400 mt-12 italic">
            by @mrslovehealthdoc
          </p>
        </div>
      </div>
    );
  }

  // NAME ENTRY (between landing and quiz)
  if (stage === "nameEntry") {
    return (
      <div className="min-h-screen bg-stone-50 text-stone-800 px-6 py-12 flex flex-col items-center justify-center font-serif">
        <div className="max-w-md w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-8 text-center">first things first</p>

          <h2 className="text-2xl leading-relaxed mb-8 italic text-center">
            what's your first name?
          </h2>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === `Enter` && name.trim()) {
                setStage(`quiz`);
                window.scrollTo({ top: 0, behavior: `smooth` });
              }
            }}
            placeholder="your name"
            className="w-full p-4 border border-stone-300 text-stone-700 mb-3 text-center italic"
            autoFocus
          />

          <p className="text-xs text-stone-400 mb-8 text-center italic">
            so your result feels like it's about you. that's it.
          </p>

          <button
            onClick={() => {
              if (name.trim()) {
                setStage(`quiz`);
                window.scrollTo({ top: 0, behavior: `smooth` });
              }
            }}
            disabled={!name.trim()}
            className={`w-full py-4 text-sm uppercase tracking-[0.2em] transition-colors ${
              name.trim()
                ? `bg-stone-800 text-stone-50 hover:bg-stone-700`
                : `bg-stone-300 text-stone-500 cursor-not-allowed`
            }`}
          >
            begin
          </button>
        </div>
      </div>
    );
  }

  // QUIZ
  if (stage === "quiz") {
    const q = QUESTIONS[currentQ];
    const progress = ((currentQ + 1) / QUESTIONS.length) * 100;
    const previousSelection = answerHistory[currentQ];

    return (
      <div className="min-h-screen bg-stone-50 text-stone-800 px-6 py-8 font-serif">
        <div className="max-w-md mx-auto">
          <div className="mb-8">
            <div className="flex justify-between text-xs uppercase tracking-[0.2em] text-stone-400 mb-2">
              <span>{currentQ + 1} of {QUESTIONS.length}</span>
              <span>{q.type === "fast" ? `quick` : ``}</span>
            </div>
            <div className="h-px bg-stone-200">
              <div 
                className="h-px bg-stone-800 transition-all duration-300" 
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <h2 className="text-xl leading-relaxed mb-8 italic">
            {q.prompt}
          </h2>

          <div className="space-y-3">
            {q.options.map((option, i) => {
              const isPreviousSelection = previousSelection && previousSelection.text === option.text;
              return (
                <button
                  key={i}
                  onClick={() => handleAnswer(option)}
                  className={`w-full text-left p-4 border transition-colors leading-relaxed ${
                    isPreviousSelection
                      ? `bg-stone-800 text-stone-50 border-stone-800`
                      : `bg-white border-stone-200 hover:border-stone-800 hover:bg-stone-100 text-stone-700`
                  }`}
                >
                  {option.text}
                </button>
              );
            })}
          </div>

          {currentQ > 0 && (
            <div className="mt-6">
              <button
                onClick={handleBack}
                className="w-full text-left p-4 bg-stone-50 border border-stone-300 hover:border-stone-600 hover:bg-stone-100 text-stone-500 text-sm italic transition-colors"
              >
                ← back
              </button>
            </div>
          )}
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
    <div className="min-h-screen bg-stone-50 text-stone-800 font-serif">
      {/* HERO */}
      <div className="bg-stone-800 text-stone-50 px-6 py-16">
        <div className="max-w-md mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-400 mb-6">
            {name ? `${name.toLowerCase()} — your archetype` : `your archetype`}
          </p>
          <h1 className="text-3xl md:text-4xl italic mb-3 leading-tight">
            {primary.name}
          </h1>
          <p className="text-base md:text-lg italic text-stone-300 mb-2">
            with {modifier.name.replace(`The `, ``)} energy
          </p>
          <p className="text-sm text-stone-400 mb-8 italic">
            and a {secondary.name.replace(`The `, ``)} running underneath
          </p>
          <p className="text-lg italic text-stone-100 leading-relaxed">
            `{primary.opening}`
          </p>
        </div>
      </div>

      {/* PRIMARY CORE WRITEUP - moved up to be the headliner */}
      <div className="px-6 py-12">
        <div className="max-w-md mx-auto space-y-8">
          <div className="text-center pb-4">
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-2">how you move through life</p>
            <h2 className="text-2xl italic">{primary.name}</h2>
          </div>

          {primary.sections.map((section, i) => (
            <div key={i}>
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-3">{section.label}</p>
              {Array.isArray(section.content) ? (
                <ul className="space-y-2">
                  {section.content.map((item, j) => (
                    <li key={j} className="text-stone-700 leading-relaxed">— {item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-stone-700 leading-relaxed">{section.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* MODIFIER - now positioned AFTER the primary writeup */}
      <div className="bg-amber-50 border-y border-amber-200 px-6 py-12">
        <div className="max-w-md mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-700 mb-3 text-center">your modifier — how your energy comes out</p>
          <h2 className="text-2xl italic text-center mb-2">{modifier.name}</h2>
          <p className="text-base italic text-stone-600 text-center mb-6">{modifier.tagline}</p>
          <p className="text-stone-700 leading-relaxed">{modifier.description}</p>
          
          <div className="mt-6 pt-6 border-t border-amber-200">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-700 mb-2">the shadow of {modifier.name.toLowerCase()}</p>
            <p className="text-sm text-stone-600 leading-relaxed italic">{modifier.shadow}</p>
          </div>

          <div className="mt-6 pt-6 border-t border-amber-200">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-700 mb-2">the wink</p>
            <p className="text-sm text-stone-600 leading-relaxed italic">{modifier.wink}</p>
          </div>
        </div>
      </div>

      {/* SECONDARY */}
      <div className="bg-stone-100 px-6 py-12 border-b border-stone-200">
        <div className="max-w-md mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-3 text-center">and underneath, you also run</p>
          <h2 className="text-2xl italic text-center mb-4">{secondary.name}</h2>
          <p className="text-base italic text-stone-600 text-center mb-6">`{secondary.opening}`</p>
          <p className="text-stone-700 leading-relaxed">{secondary.secondaryShort}</p>
        </div>
      </div>

      {/* VIBE LINE */}
      <div className="px-6 py-16 text-center">
        <div className="max-w-md mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-4">your vibe in one line</p>
          <p className="text-3xl italic text-stone-800">{primary.vibe}</p>
        </div>
      </div>

      {/* EMAIL CAPTURE - moved up to right after vibe line for peak emotional moment */}
      <div className="px-6 pb-12">
        <div className="max-w-md mx-auto bg-white p-6 border border-stone-200 text-center">
          <p className="text-sm text-stone-600 leading-relaxed mb-4 italic">
            i'll send you updates when there's something worth sending. nothing else.
          </p>
          {!emailSubmitted ? (
            <div className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your email"
                className="w-full p-3 border border-stone-300 text-stone-700"
              />
              <button
                onClick={async () => {
                  if (!email.includes(`@`)) return;
                  setEmailSubmitted(true);
                  try {
                    if (resultRowId) {
                      await supabase
                        .from(`quiz_results`)
                        .update({ email: email })
                        .eq(`id`, resultRowId);
                    } else {
                      await supabase
                        .from(`quiz_results`)
                        .insert([{ email: email, name: name || null }]);
                    }
                  } catch (err) {
                    console.error(`email save error:`, err);
                  }
                }}
                className="w-full bg-stone-800 text-stone-50 py-3 text-xs uppercase tracking-[0.2em] hover:bg-stone-700"
              >
                keep me in the loop
              </button>
            </div>
          ) : (
            <p className="text-sm text-stone-700 italic">got it. talk soon.</p>
          )}
        </div>
      </div>

      {/* SHARE - native share for general sharing */}
      <div className="px-6 pb-8 text-center">
        <div className="max-w-md mx-auto">
          <p className="text-sm text-stone-700 mb-1 italic">
            {primary.shareCallout}
          </p>
          <p className="text-xs text-stone-500 mb-5 italic">
            or just post it. somebody you know is on this list.
          </p>
          <button
            onClick={handleShare}
            className="bg-stone-800 text-stone-50 px-8 py-3 text-xs uppercase tracking-[0.2em] hover:bg-stone-700 transition-colors"
          >
            share my result
          </button>
          {shareStatus && (
            <p className="text-sm text-stone-600 mt-3 italic">{shareStatus}</p>
          )}
        </div>
      </div>

      {/* EXPLORE - moved to bottom as system browse */}
      <div className="px-6 py-8 bg-stone-100 border-t border-stone-200">
        <div className="max-w-md mx-auto">
          <button
            onClick={() => setShowAllArchetypes(!showAllArchetypes)}
            className="w-full text-center text-sm uppercase tracking-[0.2em] text-stone-700 hover:text-stone-900 underline py-2"
          >
            {showAllArchetypes ? `hide all archetypes` : `see all nine + four`}
          </button>

          {showAllArchetypes && (
            <div className="mt-6 space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-3">the nine cores</p>
              {Object.entries(CORES).map(([key, core]) => (
                <div key={key} className={`bg-white p-4 border ${key === primaryKey ? 'border-amber-400' : key === secondaryKey ? 'border-stone-400' : 'border-stone-200'}`}>
                  <div className="flex items-baseline justify-between mb-2">
                    <p className="font-semibold italic">{core.name}</p>
                    {key === primaryKey && <span className="text-xs uppercase tracking-[0.15em] text-amber-700">primary</span>}
                    {key === secondaryKey && <span className="text-xs uppercase tracking-[0.15em] text-stone-500">secondary</span>}
                  </div>
                  <p className="text-sm italic text-stone-600 mb-1">`{core.opening}`</p>
                  <p className="text-xs text-stone-500 italic">— {core.vibe}</p>
                </div>
              ))}

              <p className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-3 mt-8">the four modifiers</p>
              {Object.entries(MODIFIERS).map(([key, mod]) => (
                <div key={key} className={`bg-white p-4 border ${key === modifierKey ? 'border-amber-400' : 'border-stone-200'}`}>
                  <div className="flex items-baseline justify-between mb-2">
                    <p className="font-semibold italic">{mod.name}</p>
                    {key === modifierKey && <span className="text-xs uppercase tracking-[0.15em] text-amber-700">yours</span>}
                  </div>
                  <p className="text-sm italic text-stone-600 mb-2">{mod.tagline}</p>
                  <p className="text-sm text-stone-600 leading-relaxed">{mod.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* RESTART */}
      <div className="px-6 py-12 text-center">
        <button
          onClick={restart}
          className="text-xs uppercase tracking-[0.2em] text-stone-500 hover:text-stone-800 underline"
        >
          take it again
        </button>
        
        <p className="text-xs text-stone-400 mt-12 italic">
          nine women, one house · by @mrslovehealthdoc
        </p>
      </div>
    </div>
  );
}
