const STORAGE_KEYS={history:"ntokozo_vibe_history",memories:"ntokozo_memory_gallery",stories:"ntokozo_story_state",playlists:"ntokozo_custom_playlists",stats:"ntokozo_app_stats",specials:"ntokozo_special_flags",tutorial:"ntokozo_memories_tutorial_seen",notificationPrompt:"ntokozo_notification_prompt_seen"};
const NTOKOZO_NAME="Ntokozo";
const INTRO_DURATION_MS=5000;
const LONG_PRESS_SECRET_MS=5000;
const BIRTHDAY_DURATION_MS=7000;
const ANNIVERSARY_DURATION_MS=6000;
const NIGHT_MODE_DURATION_MS=5200;
const MIDNIGHT_GLITCH_DURATION_MS=2800;
const SECRET_TAP_TARGET=7;
const SECRET_TAP_WINDOW_MS=1600;
const ANNIVERSARY_MONTH=10;
const ANNIVERSARY_DAY=25;
const BUILTIN_MEMORIES=[
{src:"pictures/picture 1.jpeg",type:"image"},
{src:"pictures/picture 2.jpeg",type:"image"},
{src:"pictures/picture 3.jpeg",type:"image"},
{src:"pictures/picture 4.jpeg",type:"image"},
{src:"pictures/picture 5.jpeg",type:"image"}
];
const introPhrases=[
"I hope i make you smile \u2764\uFE0F",
"I made this because I wanted you \u2764\uFE0F",
"Take a breath and relax  \u2764\uFE0F",
"This is for you \u2764\uFE0F",
"Maybe this will make you smile \u2764\uFE0F",
"I thought about you while making this \u2764\uFE0F",
"Pressing yes is optional, but smiling is recommended \u2764\uFE0F",
"You're beautiful bronnie \u2764\uFE0F",
"I hope you like this little space I made \u2764\uFE0F",
"If i cheat, kill me \u2764\uFE0F",
"what do you see in me ?\u2764\uFE0F",
"either i got lucky,or GOD is on my side \u2764\uFE0F",
"What should we call our Romantic movie?\u2764\uFE0F",
"I LOVE YOU \u2764\uFE0F",
"YOU'RE STILL LEBRON JAMES \u2764\uFE0F",
"Say hi to your mother for me \u2764\uFE0F",
"Don't break my heart please \u2764\uFE0F",
"RIP KING VON \u2764\uFE0F",
"FREE DURK #SMURKIO \u2764\uFE0F",
"FUTURE DOCTOR \u2764\uFE0F",
"SUSHI LOVER \u2764\uFE0F",
 "Tell your brother im not a threat \u2764\uFE0F",
 "you making me nervous bruh,stop it \u2764\uFE0F",
 "pretty ass smile \u2764\uFE0F",
 "rihanna aint got shit on you \u2764\uFE0F",
 "my first coloured baddie,I doubt ill be normal again \u2764\uFE0F",
 "theres a stereotype of coloured people stabbing people,i would rather get stabbed by you, lowkey \u2764\uFE0F",
"MY WEIRDO \u2764\uFE0F"
];
const analysisSteps=["Checking today's energy...","Reading how the conversation felt...","Looking at effort, comfort, and connection...","Turning answers into a vibe score...","Wrapping up today's result..."];
const reminderQuotes=[
"Your boyfriend misses you. Open the app.",
"Bronwyn, this app is lonely without you.",
"Ntokozo filed a formal complaint: not enough Bronwyn today.",
"Cute reminder: your daily vibe check is waiting.",
"The relationship dashboard would like your attention, pretty please.",
"Open the app before Ntokozo starts being dramatic."
];
const optionSets={
warm:[{label:"Yes, definitely",weight:3,tone:"is-primary"},{label:"A little bit",weight:2,tone:"is-secondary"},{label:"Not really",weight:1,tone:"is-tertiary"}],
communication:[{label:"Very easy",weight:3,tone:"is-primary"},{label:"It was okay",weight:2,tone:"is-secondary"},{label:"A little off",weight:1,tone:"is-tertiary"}],
care:[{label:"A lot",weight:3,tone:"is-primary"},{label:"Somewhat",weight:2,tone:"is-secondary"},{label:"Not enough",weight:1,tone:"is-tertiary"}],
closeness:[{label:"Very close",weight:3,tone:"is-primary"},{label:"Kind of close",weight:2,tone:"is-secondary"},{label:"A bit distant",weight:1,tone:"is-tertiary"}],
playful:[{label:`That is ${NTOKOZO_NAME}`,weight:3,tone:"is-primary"},{label:"Maybe him",weight:2,tone:"is-secondary"},{label:"Not him",weight:1,tone:"is-tertiary"}]
};
const rawQuestionDays=[
{theme:"Warm start",tag:"Day 1",questions:[
{prompt:"Did Ntokozo make your day feel lighter today?",type:"warm"},
{prompt:"How easy did it feel talking to Ntokozo today?",type:"communication"},
{prompt:"Did Ntokozo make you feel noticed today?",type:"care"},
{prompt:"Would you want a longer conversation with Ntokozo tonight?",type:"warm"},
{prompt:"How close did you feel to Ntokozo today?",type:"closeness"}
]},
{theme:"Attention",tag:"Day 2",questions:[
{prompt:"Did Ntokozo check on you in a way that felt genuine today?",type:"care"},
{prompt:"If your day went bad, would Ntokozo be one of the first people you would tell?",type:"warm"},
{prompt:"How comforting does Ntokozo's presence feel when you are stressed?",type:"closeness"},
{prompt:"Did Ntokozo make you smile from your phone screen today?",type:"warm"},
{prompt:"How well did Ntokozo listen instead of just replying today?",type:"care"}
]},
{theme:"Soft honesty",tag:"Day 3",questions:[
{prompt:"Could you be fully yourself with Ntokozo today?",type:"closeness"},
{prompt:"Did Ntokozo feel emotionally safe today?",type:"closeness"},
{prompt:"Was Ntokozo thoughtful with the way he spoke to you today?",type:"care"},
{prompt:"Did you miss Ntokozo at any point today?",type:"warm"},
{prompt:"How understood did you feel by Ntokozo today?",type:"care"}
]},
{theme:"Little effort",tag:"Day 4",questions:[
{prompt:"Did Ntokozo put in effort even in a small way today?",type:"care"},
{prompt:"How good was Ntokozo at keeping the conversation alive today?",type:"communication"},
{prompt:"If Ntokozo asked to see you today, would that sound nice to you?",type:"warm"},
{prompt:"Did Ntokozo make you feel appreciated today?",type:"care"},
{prompt:"How natural did it feel being around Ntokozo today, even just online?",type:"closeness"}
]},
{theme:"Playful read",tag:"Day 5",questions:[
{prompt:"Who is more likely to send a random sweet message first?",type:"playful"},
{prompt:"Did Ntokozo bring fun energy into your day today?",type:"warm"},
{prompt:"How likely are you to think about Ntokozo before sleeping tonight?",type:"warm"},
{prompt:"Did Ntokozo feel like peace or pressure today?",type:"communication"},
{prompt:"Would Ntokozo pass the introduce-him-to-your-soft-side test today?",type:"playful"}
]},
{theme:"Comfort",tag:"Day 6",questions:[
{prompt:"How comfortable were you being honest with Ntokozo today?",type:"closeness"},
{prompt:"Did Ntokozo give you calm energy today?",type:"care"},
{prompt:"If you had good news, would you want Ntokozo to hear it first?",type:"warm"},
{prompt:"How balanced did the effort feel between you and Ntokozo today?",type:"communication"},
{prompt:"Did Ntokozo feel like someone worth protecting your heart for today?",type:"closeness"}
]},
{theme:"Flirting meter",tag:"Day 7",questions:[
{prompt:"Did Ntokozo flirt with you in a way that actually landed today?",type:"warm"},
{prompt:"How easy was it to laugh with Ntokozo today?",type:"communication"},
{prompt:"Did Ntokozo seem emotionally tuned in to your mood today?",type:"care"},
{prompt:"Would you have wanted an extra hour with Ntokozo today?",type:"warm"},
{prompt:"How much chemistry did the vibe have today?",type:"closeness"}
]},
{theme:"Thoughtfulness",tag:"Day 8",questions:[
{prompt:"Did Ntokozo remember something small about you today?",type:"care"},
{prompt:"How seen did you feel by Ntokozo today?",type:"care"},
{prompt:"Did Ntokozo make conversation feel easy instead of forced today?",type:"communication"},
{prompt:"Would you feel comfortable venting to Ntokozo right now?",type:"closeness"},
{prompt:"Did Ntokozo feel special to you today?",type:"warm"}
]},
{theme:"Common sense",tag:"Day 9",questions:[
{prompt:"If a girl says she had a rough day, what should Ntokozo do first: listen well, make it about himself, or disappear?",type:"playful"},
{prompt:"Did Ntokozo pass that common-sense test today?",type:"care"},
{prompt:"How mature did Ntokozo's communication feel today?",type:"communication"},
{prompt:"Did Ntokozo leave you more relaxed than stressed today?",type:"closeness"},
{prompt:"Would you choose Ntokozo's company over a boring day alone today?",type:"warm"}
]},
{theme:"Being gentle",tag:"Day 10",questions:[
{prompt:"Did Ntokozo speak to you with softness today?",type:"care"},
{prompt:"How respected did your feelings feel around Ntokozo today?",type:"closeness"},
{prompt:"Did Ntokozo make you feel pretty today, directly or indirectly?",type:"warm"},
{prompt:"How patient did Ntokozo seem with you today?",type:"communication"},
{prompt:"Did Ntokozo feel emotionally grown today?",type:"care"}
]},
{theme:"Connection",tag:"Day 11",questions:[
{prompt:"How connected did you feel to Ntokozo today?",type:"closeness"},
{prompt:"Did Ntokozo make normal moments feel a bit sweeter today?",type:"warm"},
{prompt:"How good was Ntokozo at matching your energy today?",type:"communication"},
{prompt:"Did Ntokozo make it easy for you to stay open today?",type:"care"},
{prompt:"If Ntokozo called right now, would you pick up smiling?",type:"warm"}
]},
{theme:"Personal check",tag:"Day 12",questions:[
{prompt:"Did Ntokozo make you feel emotionally chosen today?",type:"closeness"},
{prompt:"How safe does your softer side feel with Ntokozo?",type:"closeness"},
{prompt:"Did Ntokozo seem proud to have access to you today?",type:"care"},
{prompt:"Would you trust Ntokozo with a vulnerable truth today?",type:"care"},
{prompt:"Did Ntokozo make you want to stay a little longer today?",type:"warm"}
]},
{theme:"Humor",tag:"Day 13",questions:[
{prompt:"Did Ntokozo make you laugh for real today?",type:"warm"},
{prompt:"How fun was Ntokozo to talk to today?",type:"communication"},
{prompt:"Did Ntokozo know when to be serious and when to be playful today?",type:"care"},
{prompt:"Would you put Ntokozo in your safe-and-funny category today?",type:"playful"},
{prompt:"How much did today's vibe feel like friendship plus something deeper?",type:"closeness"}
]},
{theme:"Intentions",tag:"Day 14",questions:[
{prompt:"Did Ntokozo's intentions feel clear today?",type:"communication"},
{prompt:"How consistent did Ntokozo feel today?",type:"care"},
{prompt:"Did Ntokozo show interest without confusion today?",type:"warm"},
{prompt:"Would you trust Ntokozo to handle your feelings carefully today?",type:"closeness"},
{prompt:"Did Ntokozo feel worth investing more time in today?",type:"care"}
]},
{theme:"Real-life energy",tag:"Day 15",questions:[
{prompt:"If you spent the whole day with Ntokozo, would it feel peaceful?",type:"closeness"},
{prompt:"How dateable did Ntokozo feel today?",type:"warm"},
{prompt:"Did Ntokozo act like someone you could genuinely build with today?",type:"care"},
{prompt:"How smooth was your communication rhythm with Ntokozo today?",type:"communication"},
{prompt:"Would you be excited to make a memory with Ntokozo this weekend?",type:"warm"}
]},
{theme:"Sweetness",tag:"Day 16",questions:[
{prompt:"Did Ntokozo do anything sweet today, even if it was tiny?",type:"care"},
{prompt:"How often did Ntokozo cross your mind today?",type:"warm"},
{prompt:"Did Ntokozo make affection feel easy today?",type:"closeness"},
{prompt:"How good was Ntokozo at reading the mood today?",type:"communication"},
{prompt:"Would you call Ntokozo emotionally attractive today?",type:"warm"}
]},
{theme:"Respect",tag:"Day 17",questions:[
{prompt:"Did Ntokozo respect your pace today?",type:"care"},
{prompt:"How heard did your opinions feel around Ntokozo today?",type:"communication"},
{prompt:"Did Ntokozo feel grounded instead of careless today?",type:"care"},
{prompt:"How secure did Ntokozo make the vibe feel today?",type:"closeness"},
{prompt:"Would you let Ntokozo closer to your heart after today?",type:"warm"}
]},
{theme:"Late-night test",tag:"Day 18",questions:[
{prompt:"If you could only talk to one person late tonight, would Ntokozo make the shortlist?",type:"warm"},
{prompt:"How comforting would Ntokozo be on a hard night?",type:"closeness"},
{prompt:"Did Ntokozo feel dependable today?",type:"care"},
{prompt:"How natural did the back-and-forth feel today?",type:"communication"},
{prompt:"Did Ntokozo make closeness feel earned today?",type:"care"}
]},
{theme:"Personal softness",tag:"Day 19",questions:[
{prompt:"Did Ntokozo make you feel emotionally feminine and safe today?",type:"closeness"},
{prompt:"How gentle was Ntokozo with your feelings today?",type:"care"},
{prompt:"Did you feel desired in a respectful way by Ntokozo today?",type:"warm"},
{prompt:"How secure did Ntokozo's attention feel today?",type:"communication"},
{prompt:"Would Ntokozo handle your heart well if you gave him more of it?",type:"closeness"}
]},
{theme:"Common sense part two",tag:"Day 20",questions:[
{prompt:"Which is smarter: clear communication, mixed signals, or random silence?",type:"playful"},
{prompt:"Did Ntokozo choose the smart option today?",type:"communication"},
{prompt:"How reassuring did Ntokozo feel today?",type:"care"},
{prompt:"Did Ntokozo help the relationship feel simple instead of messy today?",type:"closeness"},
{prompt:"Would you happily keep learning Ntokozo after today?",type:"warm"}
]},
{theme:"Consistency",tag:"Day 21",questions:[
{prompt:"How consistent did Ntokozo's energy feel today?",type:"communication"},
{prompt:"Did Ntokozo give effort without needing to be asked today?",type:"care"},
{prompt:"Did talking to Ntokozo feel like part of your comfort routine today?",type:"warm"},
{prompt:"How stable did the connection feel today?",type:"closeness"},
{prompt:"Would you trust tomorrow's Ntokozo to feel like today's Ntokozo?",type:"care"}
]},
{theme:"Affection",tag:"Day 22",questions:[
{prompt:"Did Ntokozo feel affectionate today?",type:"warm"},
{prompt:"How welcome did your softer energy feel with Ntokozo today?",type:"closeness"},
{prompt:"Did Ntokozo make compliments feel sincere today?",type:"care"},
{prompt:"How emotionally available did Ntokozo seem today?",type:"communication"},
{prompt:"Did Ntokozo feel like someone you would want to hug today?",type:"warm"}
]},
{theme:"Future read",tag:"Day 23",questions:[
{prompt:"Could you picture a peaceful future version of Ntokozo today?",type:"closeness"},
{prompt:"Did Ntokozo feel serious in the right ways today?",type:"care"},
{prompt:"How easy was it to imagine real-life plans with Ntokozo today?",type:"warm"},
{prompt:"Did Ntokozo communicate like someone building, not just vibing, today?",type:"communication"},
{prompt:"Would you be proud of the way Ntokozo treated you today?",type:"care"}
]},
{theme:"Ease",tag:"Day 24",questions:[
{prompt:"How easy did your connection with Ntokozo feel today?",type:"closeness"},
{prompt:"Did Ntokozo take emotional pressure off you today?",type:"care"},
{prompt:"Was Ntokozo simple to understand today?",type:"communication"},
{prompt:"Did Ntokozo make the day feel softer?",type:"warm"},
{prompt:"Would you gladly repeat today's vibe tomorrow?",type:"warm"}
]},
{theme:"Care in action",tag:"Day 25",questions:[
{prompt:"Did Ntokozo show care through actions, not just words, today?",type:"care"},
{prompt:"How protected did your feelings feel with Ntokozo today?",type:"closeness"},
{prompt:"Did Ntokozo make communication feel mature today?",type:"communication"},
{prompt:"Would you want Ntokozo involved in your little daily life today?",type:"warm"},
{prompt:"Did Ntokozo make you feel worth the effort today?",type:"care"}
]},
{theme:"Quiz day",tag:"Day 26",questions:[
{prompt:"What keeps a relationship healthier: patience, ego, or guessing games?",type:"playful"},
{prompt:"Did Ntokozo act like he knew that answer today?",type:"care"},
{prompt:"How solid did Ntokozo's emotional IQ feel today?",type:"communication"},
{prompt:"Did Ntokozo make it easier to trust the connection today?",type:"closeness"},
{prompt:"How much would you choose Ntokozo's company again after today?",type:"warm"}
]},
{theme:"Nearness",tag:"Day 27",questions:[
{prompt:"Did Ntokozo feel near to you today, even from a distance?",type:"closeness"},
{prompt:"How emotionally close did Ntokozo make the day feel?",type:"closeness"},
{prompt:"Did Ntokozo make room for your mood today?",type:"care"},
{prompt:"How good was Ntokozo at keeping things smooth today?",type:"communication"},
{prompt:"Did Ntokozo feel like your person a little bit today?",type:"warm"}
]},
{theme:"Romantic energy",tag:"Day 28",questions:[
{prompt:"How romantic did Ntokozo's energy feel today?",type:"warm"},
{prompt:"Did Ntokozo bring intention as well as attraction today?",type:"care"},
{prompt:"How much did Ntokozo make you feel special today?",type:"closeness"},
{prompt:"Did Ntokozo know how to talk to you sweetly today?",type:"communication"},
{prompt:"Would today's version of Ntokozo earn an extra kiss on the forehead?",type:"playful"}
]},
{theme:"Reflection",tag:"Day 29",questions:[
{prompt:"Looking back, did Ntokozo add something good to your day today?",type:"warm"},
{prompt:"How respected did you feel by Ntokozo today?",type:"care"},
{prompt:"How healthy did the connection feel today?",type:"closeness"},
{prompt:"Did Ntokozo communicate with clarity today?",type:"communication"},
{prompt:"Would you choose this same vibe again tomorrow?",type:"warm"}
]},
{theme:"Final glow",tag:"Day 30",questions:[
{prompt:"After this whole run, how right did Ntokozo feel today?",type:"closeness"},
{prompt:"Did Ntokozo make love feel gentle instead of complicated today?",type:"care"},
{prompt:"How good would a real memory with Ntokozo sound right now?",type:"warm"},
{prompt:"Did Ntokozo act like someone worth choosing carefully today?",type:"communication"},
{prompt:"Would you say today's Ntokozo passed the overall relationship vibe test?",type:"playful"}
]}
];
const questionDays=rawQuestionDays.map((day)=>({
...day,
questions:day.questions.map((question)=>({...question,prompt:question.prompt.replaceAll("Ntokozo",NTOKOZO_NAME)}))
}));
const appState={currentDayIndex:0,currentQuestionIndex:0,answers:[],analysisDone:false,completedToday:false,currentResult:null,introPaused:false,introProgressMs:0,introStartTimestamp:0,introRafId:null,sessionStartedAt:Date.now(),lastShakeAt:0,activeStoryOwner:"bronwyn",storyQueue:[],storyIndex:0,storyPaused:false,storyProgressMs:0,storyStartTimestamp:0,storyRafId:null,storyHoldTimer:null,storyHoldTriggered:false,holdSecretTimer:null,longPressTriggered:false,currentScreenId:"intro",previousScreenId:"",noAnswerStreak:0,afterJealousTarget:"app",currentMemoryIndex:0,memoryPointerStartX:0,memoryPointerStartY:0,memoryTutorialStep:0};
const bgMusic=new Audio("music/mybeyonce.mp3");bgMusic.loop=true;bgMusic.volume=0;const noSound=new Audio("faaah.mp3");noSound.preload="auto";
const els={
intro:document.getElementById("intro"),introText:document.querySelector(".intro-text"),storyTimerFill:document.getElementById("storyTimerFill"),questionProgressBar:document.getElementById("questionProgressBar"),progress:document.getElementById("progress"),dayLabel:document.getElementById("dayLabel"),themeDisplay:document.getElementById("themeDisplay"),streakDisplay:document.getElementById("streakDisplay"),questionCount:document.getElementById("questionCount"),questionTag:document.getElementById("questionTag"),questionText:document.getElementById("questionText"),questionHint:document.getElementById("questionHint"),answers:document.getElementById("answers"),analysisText:document.getElementById("analysis-text"),vibeScore:document.getElementById("vibeScore"),vibeEmoji:document.getElementById("vibeEmoji"),vibeMessage:document.getElementById("vibeMessage"),summaryPills:document.getElementById("summaryPills"),historyList:document.getElementById("historyList"),memoryGallery:document.getElementById("memoryGallery"),memoryViewer:document.getElementById("memoryViewer"),memoryViewerContent:document.getElementById("memoryViewerContent"),closeMemoryViewer:document.getElementById("closeMemoryViewer"),memOptionsBtn:document.getElementById("memOptionsBtn"),memOptionsPanel:document.getElementById("memOptionsPanel"),memOverlay:document.getElementById("memOverlay"),memoryUpload:document.getElementById("memoryUpload"),proofUpload:document.getElementById("proofUpload"),profileBtn:document.getElementById("profileBtn"),bronwynStoryBtn:document.getElementById("bronwynStoryBtn"),ntokozoStoryBtn:document.getElementById("ntokozoStoryBtn"),bronwynStoryAvatar:document.getElementById("bronwynStoryAvatar"),ntokozoStoryAvatar:document.getElementById("ntokozoStoryAvatar"),proofStoryPreview:document.getElementById("proofStoryPreview"),proofStoryEmpty:document.getElementById("proofStoryEmpty"),proofEmptyAddBtn:document.getElementById("proofEmptyAddBtn"),proofStoryTimerFill:document.getElementById("proofStoryTimerFill"),storyViewerShell:document.getElementById("storyViewerShell"),backFromProfile:document.getElementById("backFromProfile"),shakeSosOverlay:document.getElementById("shakeSosOverlay"),closeShakeSos:document.getElementById("closeShakeSos"),playlistForm:document.getElementById("playlistForm"),playlistName:document.getElementById("playlistName"),playlistUrl:document.getElementById("playlistUrl"),customPlaylistList:document.getElementById("customPlaylistList"),statsGrid:document.getElementById("statsGrid"),statsChart:document.getElementById("statsChart"),enableNotificationsBtn:document.getElementById("enableNotificationsBtn"),skipNotificationsBtn:document.getElementById("skipNotificationsBtn"),secretAudio:document.getElementById("secretAudio"),secretPlayBtn:document.getElementById("secretPlayBtn"),secretTrackFill:document.getElementById("secretTrackFill"),secretPrevBtn:document.getElementById("secretPrevBtn"),secretNextBtn:document.getElementById("secretNextBtn"),secretLoveNote:document.getElementById("secretLoveNote"),closeSecretLoveNote:document.getElementById("closeSecretLoveNote"),memorySwipeStage:document.getElementById("memorySwipeStage"),memoryGalleryOpen:document.getElementById("memoryGalleryOpen"),memoryGallerySheet:document.getElementById("memoryGallerySheet"),closeMemoryGallery:document.getElementById("closeMemoryGallery"),memoriesTutorial:document.getElementById("memoriesTutorial"),tutorialBubble:document.getElementById("tutorialBubble"),tutorialStepLabel:document.getElementById("tutorialStepLabel"),tutorialStepText:document.getElementById("tutorialStepText"),tutorialNext:document.getElementById("tutorialNext"),tutorialSkip:document.getElementById("tutorialSkip"),tutorialSpotlight:document.getElementById("tutorialSpotlight"),storyLikeBtn:document.getElementById("storyLikeBtn"),gamesHubBtn:document.getElementById("gamesHubBtn"),openSnakeGame:document.getElementById("openSnakeGame"),openFlappyGame:document.getElementById("openFlappyGame"),backFromGamesHub:document.getElementById("backFromGamesHub"),backFromSnake:document.getElementById("backFromSnake"),backFromFlappy:document.getElementById("backFromFlappy")};
const getStorageArray=(key)=>{try{return JSON.parse(localStorage.getItem(key)||"[]");}catch{return[];}};
function playFailSound(){try{noSound.currentTime=0;noSound.play().catch(()=>{});}catch{}}
const getStorageObject=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key)||JSON.stringify(fallback));}catch{return fallback;}};
const setStorage=(key,value)=>localStorage.setItem(key,JSON.stringify(value));
function getSpecialFlags(){return getStorageObject(STORAGE_KEYS.specials,{birthdayShown:"",anniversaryShown:"",threeDayShown:"",sevenDayShown:"",nightShown:"",midnightShown:"",eggHintLevelShown:0});}
function saveSpecialFlags(flags){setStorage(STORAGE_KEYS.specials,flags);}
const getTodayKey=()=>new Date().toISOString().slice(0,10);
const formatDate=(value)=>new Date(value).toLocaleDateString(undefined,{month:"short",day:"numeric",year:"numeric"});
const getHistory=()=>getStorageArray(STORAGE_KEYS.history);
const normalizeMemoryItem=(item)=>typeof item==="string"?{src:item,type:"image",source:"user"}:item;
const getAllMemories=()=>[...BUILTIN_MEMORIES,...getStorageArray(STORAGE_KEYS.memories).map(normalizeMemoryItem)];
const getCurrentDayData=()=>questionDays[Math.min(appState.currentDayIndex,questionDays.length-1)];
function getStats(){return getStorageObject(STORAGE_KEYS.stats,{visits:0,secondsSpent:0,checkInsCompleted:0,lastVisitDate:"",daysOpened:[],reminderPermission:"default"});}
function getStoryState(){const cutoff=Date.now()-86400000;const state=getStorageObject(STORAGE_KEYS.stories,{bronwyn:null,ntokozo:null});["bronwyn","ntokozo"].forEach((key)=>{if(state[key]&&state[key].ts<cutoff){state[key]=null;}});setStorage(STORAGE_KEYS.stories,state);return state;}
function saveStats(stats){setStorage(STORAGE_KEYS.stats,stats);}
function getRandomReminder(){return reminderQuotes[Math.floor(Math.random()*reminderQuotes.length)];}
function getHeartColorForToday(){const colors=["rgba(255,141,180,0.72)","rgba(110,199,255,0.74)","rgba(255,204,107,0.72)","rgba(151,255,184,0.72)","rgba(205,166,255,0.72)","rgba(255,155,116,0.72)"];const start=new Date(new Date().getFullYear(),0,0);const diff=new Date()-start;const day=Math.floor(diff/86400000);return colors[day%colors.length];}
function calculateStreak(history){if(!history.length){return 0;}const sorted=[...new Set(history.map((item)=>item.dateKey))].sort().reverse();let streak=0;let cursor=new Date(`${sorted[0]}T00:00:00`);for(const dayKey of sorted){const compare=new Date(`${dayKey}T00:00:00`);if(compare.toISOString().slice(0,10)!==cursor.toISOString().slice(0,10)){break;}streak+=1;cursor.setDate(cursor.getDate()-1);}return streak;}
function isSpecificDate(month,day){const today=new Date();return today.getMonth()+1===month&&today.getDate()===day;}
function getOpeningEventQueue(){const flags=getSpecialFlags();const todayKey=getTodayKey();const queue=[];document.body.classList.toggle("night-pulse",isNightHour());if(isSpecificDate(12,6)&&flags.birthdayShown!==todayKey){flags.birthdayShown=todayKey;queue.push({id:"birthdayScreen",duration:BIRTHDAY_DURATION_MS});}if(isSpecificDate(ANNIVERSARY_MONTH,ANNIVERSARY_DAY)&&flags.anniversaryShown!==todayKey){flags.anniversaryShown=todayKey;queue.push({id:"anniversaryPoem",duration:ANNIVERSARY_DURATION_MS});}if(isNightHour()&&flags.nightShown!==todayKey){flags.nightShown=todayKey;queue.push({id:"nightModeScreen",duration:NIGHT_MODE_DURATION_MS});}if(isExactMidnight()&&flags.midnightShown!==todayKey){flags.midnightShown=todayKey;queue.push({id:"midnightGlitchScreen",duration:MIDNIGHT_GLITCH_DURATION_MS});}saveSpecialFlags(flags);return queue;}
function runOpeningSequence(){const queue=getOpeningEventQueue();if(!queue.length){beginIntro();return;}const runNext=(index)=>{if(index>=queue.length){beginIntro();return;}showScreen(queue[index].id);setTimeout(()=>runNext(index+1),queue[index].duration);};runNext(0);}
function getPerfectScoreStreak(){const history=[...getHistory()].sort((a,b)=>b.dateKey.localeCompare(a.dateKey));let streak=0;let cursor=new Date(`${getTodayKey()}T00:00:00`);for(const item of history){const expectedKey=cursor.toISOString().slice(0,10);if(item.dateKey!==expectedKey||item.score!==100){break;}streak+=1;cursor.setDate(cursor.getDate()-1);}return streak;}
function getPerfectScoreMilestone(){const flags=getSpecialFlags();const todayKey=getTodayKey();const streak=getPerfectScoreStreak();if(streak>=7&&flags.sevenDayShown!==todayKey){flags.sevenDayShown=todayKey;saveSpecialFlags(flags);return "sevenDayStreak";}if(streak>=3&&flags.threeDayShown!==todayKey){flags.threeDayShown=todayKey;saveSpecialFlags(flags);return "threeDayStreak";}return "";}
function getPositiveDayCount(){return getHistory().filter((item)=>item.score>=70).length;}
function getEggHintPayload(){const hints=["Month one unlocked. Hint: answer with the coldest option three times in a row.","Month two unlocked. Hint: tap the B&N logo 7 times quickly.","Month three unlocked. Hint: visit the app after 23:00.","Month four unlocked. Hint: open the app at exactly 00:00."];const flags=getSpecialFlags();const unlocked=Math.min(hints.length,Math.floor(getPositiveDayCount()/30));const nextLevel=(flags.eggHintLevelShown||0)+1;if(unlocked>=nextLevel){flags.eggHintLevelShown=nextLevel;saveSpecialFlags(flags);return{label:`Month ${nextLevel}`,text:hints[nextLevel-1]};}return null;}
function showEggHintScreen(){const payload=getEggHintPayload();if(!payload){return;}document.getElementById("eggHintLabel").textContent=payload.label;document.getElementById("eggHintText").textContent=payload.text;showScreen("eggHintScreen");}
function isNightHour(){const now=new Date();return now.getHours()>=23&&!(now.getHours()===0&&now.getMinutes()===0);}
function isExactMidnight(){const now=new Date();return now.getHours()===0&&now.getMinutes()===0;}

function setupHoldSecret(){const startHold=(event)=>{if(event.target.closest("input, textarea")){return;}clearTimeout(appState.holdSecretTimer);appState.longPressTriggered=false;appState.holdSecretTimer=setTimeout(()=>{appState.longPressTriggered=true;showScreen("secretMeeting");},LONG_PRESS_SECRET_MS);};const cancelHold=()=>{clearTimeout(appState.holdSecretTimer);};document.addEventListener("pointerdown",startHold);document.addEventListener("pointerup",cancelHold);document.addEventListener("pointercancel",cancelHold);document.addEventListener("pointerleave",cancelHold);document.addEventListener("selectstart",(event)=>event.preventDefault());document.addEventListener("contextmenu",(event)=>event.preventDefault());document.addEventListener("dragstart",(event)=>event.preventDefault());}

function showScreen(id){if(appState.currentScreenId!==id){appState.previousScreenId=appState.currentScreenId;}appState.currentScreenId=id;document.querySelectorAll(".screen").forEach((screen)=>screen.classList.remove("active"));const target=document.getElementById(id);if(target){target.classList.add("active");}els.questionProgressBar.classList.toggle("visible",["app","analysis","result"].includes(id));if(["birthdayScreen","anniversaryPoem","secretMeeting","threeDayStreak","sevenDayStreak","jealousMode","secretTapScreen","nightModeScreen","midnightGlitchScreen","eggHintScreen","easterEgg"].includes(id)){stopAmbientAudio();}if(!getGameScreenIds().includes(id)&&getGameScreenIds().includes(appState.previousScreenId)){stopAllGames();}if(id!=="extraContent"){hideMemoriesTutorial();closeMemoryGallerySheet();closeMemoryViewer();}if(id==="extraContent"){closeMemMenu();renderMemoryGallery();setTimeout(maybeShowMemoriesTutorial,180);}}
function updateTopStatus(){const history=getHistory();const currentDay=getCurrentDayData();const totalDays=questionDays.length;const dayNumber=Math.min(appState.currentDayIndex+1,totalDays);const streak=calculateStreak(history);els.dayLabel.textContent=`Day ${dayNumber} of ${totalDays}`;els.themeDisplay.textContent=currentDay.theme;els.streakDisplay.textContent=`${streak} day${streak===1?"":"s"}`;}
function updateProgress(){const totalQuestions=getCurrentDayData().questions.length;els.progress.style.width=`${(appState.currentQuestionIndex/totalQuestions)*100}%`;}
function renderQuestion(){const dayData=getCurrentDayData();const question=dayData.questions[appState.currentQuestionIndex];const options=optionSets[question.type]||optionSets.warm;els.questionTag.textContent=`${dayData.tag} theme`;els.questionText.textContent=question.prompt;els.questionHint.textContent=question.type==="playful"?`Pick the answer that matches ${NTOKOZO_NAME} best today.`:"Choose the answer that feels most true.";els.questionCount.textContent=`${appState.currentQuestionIndex+1} / ${dayData.questions.length}`;els.answers.innerHTML="";options.forEach((option)=>{const button=document.createElement("button");button.type="button";button.className=`answer-btn ${option.tone}`;button.textContent=option.label;button.addEventListener("click",()=>recordAnswer(option,button));els.answers.appendChild(button);});updateProgress();}
function recordAnswer(option,buttonEl){const dayData=getCurrentDayData();const question=dayData.questions[appState.currentQuestionIndex];appState.answers.push({prompt:question.prompt,type:question.type,label:option.label,weight:option.weight});appState.noAnswerStreak=option.weight===1?appState.noAnswerStreak+1:0;const triggerJealous=appState.noAnswerStreak>=3;els.answers.querySelectorAll("button").forEach((button)=>{button.disabled=true;});if(buttonEl){buttonEl.classList.add("is-selected");}if(option.weight===1){try{noSound.currentTime=0;noSound.play().catch(()=>{});}catch{}}if(navigator.vibrate){navigator.vibrate(40);}window.setTimeout(()=>{appState.currentQuestionIndex+=1;if(appState.currentQuestionIndex>=dayData.questions.length){if(triggerJealous){appState.afterJealousTarget="analysis";appState.noAnswerStreak=0;if(navigator.vibrate){navigator.vibrate(90);}showScreen("jealousMode");return;}startAnalysis();return;}renderQuestion();if(triggerJealous){appState.afterJealousTarget="app";appState.noAnswerStreak=0;if(navigator.vibrate){navigator.vibrate(90);}showScreen("jealousMode");}},220);}
function fadeInMusic(){bgMusic.play().catch(()=>{});let volume=0;const timer=setInterval(()=>{volume+=0.04;bgMusic.volume=Math.min(volume,0.28);if(volume>=0.28){clearInterval(timer);}},180);}
function buildResult(){const total=appState.answers.reduce((sum,item)=>sum+item.weight,0);const max=appState.answers.length*3;const score=Math.round((total/max)*100);const summaryMap={warm:"warm energy",communication:"good communication",care:"thoughtful effort",closeness:"real closeness",playful:"playful chemistry"};const strongest=[...appState.answers].sort((a,b)=>b.weight-a.weight).slice(0,3).map((item)=>summaryMap[item.type]);let emoji="Soft smiles";let message=`You and ${NTOKOZO_NAME} feel easy today.`;if(score>=85){emoji="Major heart-eyes";message="Today felt strong, soft, and very in sync.";}else if(score>=70){emoji="Very good vibes";message=`The connection with ${NTOKOZO_NAME} feels healthy and warm today.`;}else if(score>=55){emoji="Mixed but promising";message="There is still something good here, just with a few rough edges.";}else{emoji="Needs more effort";message=`${NTOKOZO_NAME} probably needs to show up with more clarity, softness, or consistency.`;}return{score,emoji,message,summary:[...new Set(strongest)],theme:getCurrentDayData().theme,dayNumber:appState.currentDayIndex+1};}
function saveResult(result){const history=getHistory();const entry={id:`${getTodayKey()}-${result.dayNumber}`,dateLabel:formatDate(new Date()),dateKey:getTodayKey(),score:result.score,emoji:result.emoji,message:result.message,theme:result.theme,dayNumber:result.dayNumber};const existingIndex=history.findIndex((item)=>item.dateKey===entry.dateKey);if(existingIndex>=0){history[existingIndex]=entry;}else{history.push(entry);}setStorage(STORAGE_KEYS.history,history);const stats=getStats();stats.checkInsCompleted=(stats.checkInsCompleted||0)+1;saveStats(stats);}
function showResult(){const result=buildResult();appState.currentResult=result;saveResult(result);els.vibeScore.textContent=`${result.score}%`;els.vibeEmoji.textContent=result.emoji;els.vibeMessage.textContent=result.message;els.summaryPills.innerHTML="";result.summary.forEach((item)=>{const pill=document.createElement("span");pill.textContent=item;els.summaryPills.appendChild(pill);});els.progress.style.width="100%";renderHistory();renderStats();updateTopStatus();showScreen("result");const milestoneScreen=getPerfectScoreMilestone();if(milestoneScreen){setTimeout(()=>showScreen(milestoneScreen),900);return;}setTimeout(showEggHintScreen,900);}
function startAnalysis(){if(appState.analysisDone){return;}appState.analysisDone=true;fadeInMusic();showScreen("analysis");let stepIndex=0;els.analysisText.textContent=analysisSteps[stepIndex];const timer=setInterval(()=>{stepIndex+=1;if(stepIndex>=analysisSteps.length){clearInterval(timer);showResult();return;}els.analysisText.textContent=analysisSteps[stepIndex];},1100);}
function closeMemMenu(){els.memOptionsPanel.classList.remove("active");els.memOverlay.classList.remove("active");}
function renderHistory(){const history=[...getHistory()].sort((a,b)=>b.dateKey.localeCompare(a.dateKey));els.historyList.innerHTML="";if(!history.length){els.historyList.innerHTML='<div class="history-item"><strong>No check-ins saved yet.</strong><p class="history-meta">Finish a daily set of five questions and the score will appear here.</p></div>';return;}history.forEach((item)=>{const card=document.createElement("article");card.className="history-item";card.innerHTML=`<span class="history-day">Day ${item.dayNumber}</span><strong>${item.dateLabel} - ${item.theme}</strong><div class="history-score">${item.score}% - ${item.emoji}</div><p class="history-meta">${item.message}</p>`;els.historyList.appendChild(card);});}
function renderStats(){const stats=getStats();const memories=getAllMemories().length;const stories=Object.values(getStoryState()).filter(Boolean).length;const history=getHistory();const totalMinutes=Math.round((stats.secondsSpent||0)/60);const averageScore=history.length?Math.round(history.reduce((sum,item)=>sum+item.score,0)/history.length):0;const cards=[{label:"Visits",value:stats.visits||0},{label:"Minutes spent",value:totalMinutes},{label:"Check-ins",value:stats.checkInsCompleted||0},{label:"Memories saved",value:memories},{label:"Live stories",value:stories},{label:"Average vibe",value:history.length?`${averageScore}%`:"-"}];els.statsGrid.innerHTML="";cards.forEach((item)=>{const card=document.createElement("article");card.className="stat-card";card.innerHTML=`<span>${item.label}</span><strong>${item.value}</strong>`;els.statsGrid.appendChild(card);});els.statsChart.innerHTML="";history.slice(-7).forEach((item)=>{const bar=document.createElement("div");bar.className="chart-bar";bar.innerHTML=`<span class="history-meta">Day ${item.dayNumber} - ${item.score}%</span><div class="chart-bar-fill" style="width:${item.score}%"></div>`;els.statsChart.appendChild(bar);});if(!history.length){els.statsChart.innerHTML='<p class="history-meta">The graph appears after your first check-in.</p>';}}
function fileToDataUrl(file){return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=reject;reader.readAsDataURL(file);});}
function openMemoryViewer(item){els.memoryViewerContent.innerHTML="";const isVideo=item.type&&item.type.startsWith("video");const media=document.createElement(isVideo?"video":"img");media.src=item.src;media.className="memory-viewer-media";if(isVideo){media.controls=true;media.autoplay=true;media.playsInline=true;}else{media.alt="Saved relationship memory";}els.memoryViewerContent.appendChild(media);els.memoryViewer.classList.add("active");}function closeMemoryViewer(){const activeMedia=els.memoryViewerContent.querySelector("video");if(activeMedia){activeMedia.pause();}els.memoryViewerContent.innerHTML="";els.memoryViewer.classList.remove("active");}function renderMemoryGallery(){const items=getAllMemories();els.memoryGallery.innerHTML="";items.forEach((item)=>{const card=document.createElement("button");card.type="button";card.className="memory-item";const isVideo=item.type&&item.type.startsWith("video");const media=document.createElement(isVideo?"video":"img");media.src=item.src;media.className="memory-media";if(isVideo){media.muted=true;media.playsInline=true;}else{media.alt="Saved relationship memory";}const badge=document.createElement("span");badge.className="memory-item-badge";badge.textContent=isVideo?"Video":"Photo";card.appendChild(media);card.appendChild(badge);card.addEventListener("click",()=>openMemoryViewer(item));els.memoryGallery.appendChild(card);});const addTile=document.createElement("button");addTile.type="button";addTile.className="memory-add-tile";addTile.innerHTML=' <i class="fas fa-plus"></i><span>Add memory</span>';addTile.addEventListener("click",()=>els.memoryUpload.click());els.memoryGallery.appendChild(addTile);renderMemorySwipeDeck();}
function getMemoryCardMeta(index,total,item){const kind=item.type&&item.type.startsWith("video")?"Video":"Photo";return{title:`${kind} ${index+1}`,detail:`${item.source==="user"?"Added by Bronwyn":"Saved together"} ? ${index+1} of ${total}`};}
function renderMemorySwipeDeck(direction=0){if(!els.memorySwipeStage){return;}const items=getAllMemories();const maxIndex=items.length;if(appState.currentMemoryIndex>maxIndex){appState.currentMemoryIndex=maxIndex;}if(appState.currentMemoryIndex<0){appState.currentMemoryIndex=0;}els.memorySwipeStage.innerHTML="";if(!items.length||appState.currentMemoryIndex===items.length){const end=document.createElement("div");end.className="memory-swipe-end";end.innerHTML=`<div class="memory-swipe-plus"><i class="fas fa-plus"></i></div><h3>Add your own memories</h3><p class="history-meta">You reached the end of the wall. Add photos or videos so this space keeps growing.</p><button class="primary-btn" type="button">Add photo or video</button>`;end.querySelector("button")?.addEventListener("click",()=>els.memoryUpload.click());els.memorySwipeStage.appendChild(end);return;}const item=items[appState.currentMemoryIndex];const card=document.createElement("div");card.className=`memory-swipe-card${direction>0?" is-animating-left":direction<0?" is-animating-right":""}`;const isVideo=item.type&&item.type.startsWith("video");const media=document.createElement(isVideo?"video":"img");media.src=item.src;media.className="memory-swipe-media";if(isVideo){media.controls=true;media.playsInline=true;}else{media.alt="Relationship memory";}const meta=getMemoryCardMeta(appState.currentMemoryIndex,items.length,item);const overlay=document.createElement("div");overlay.className="memory-swipe-overlay";overlay.innerHTML=`<div class="memory-swipe-meta"><strong>${meta.title}</strong><span>${meta.detail}</span></div><div class="memory-swipe-actions"><button class="memory-nav-btn" type="button" aria-label="Previous memory"><i class="fas fa-arrow-left"></i></button><button class="memory-nav-btn" type="button" aria-label="Next memory"><i class="fas fa-arrow-right"></i></button></div>`;card.appendChild(media);card.appendChild(overlay);const [prevBtn,nextBtn]=overlay.querySelectorAll("button");prevBtn?.addEventListener("click",(event)=>{event.stopPropagation();stepMemoryDeck(-1);});nextBtn?.addEventListener("click",(event)=>{event.stopPropagation();stepMemoryDeck(1);});card.addEventListener("click",(event)=>{if(event.target.closest("button")||event.target.tagName==="VIDEO"){return;}openMemoryViewer(item);});els.memorySwipeStage.appendChild(card);}
function stepMemoryDeck(direction){const items=getAllMemories();const maxIndex=items.length;appState.currentMemoryIndex=Math.min(maxIndex,Math.max(0,appState.currentMemoryIndex+direction));renderMemorySwipeDeck(direction);}
function openMemoryGallerySheet(){els.memoryGallerySheet?.classList.add("active");}
function closeMemoryGallerySheet(){els.memoryGallerySheet?.classList.remove("active");}
function getTutorialSteps(){return[{label:"Stories",text:"These circles are the daily proof-of-life stories. Tap the + on B or N to post one. ?",target:els.bronwynStoryBtn},{label:"Photo wall",text:"This is the swipe wall. Move left or right through your memories here. ? ?",target:els.memorySwipeStage},{label:"Gallery + menu",text:"Use Gallery for every saved memory, and Menu or Profile for the rest of the app. ?",target:els.memoryGalleryOpen}];}
function positionTutorialStep(){const steps=getTutorialSteps();const step=steps[appState.memoryTutorialStep];if(!step||!step.target||!els.tutorialBubble||!els.tutorialSpotlight){hideMemoriesTutorial();return;}const rect=step.target.getBoundingClientRect();els.tutorialStepLabel.textContent=step.label;els.tutorialStepText.textContent=step.text;els.tutorialSpotlight.style.left=`${rect.left-8}px`;els.tutorialSpotlight.style.top=`${rect.top-8}px`;els.tutorialSpotlight.style.width=`${rect.width+16}px`;els.tutorialSpotlight.style.height=`${rect.height+16}px`;const bubbleTop=Math.min(window.innerHeight-190,rect.bottom+18);const bubbleLeft=Math.max(16,Math.min(window.innerWidth-336,rect.left));els.tutorialBubble.style.top=`${bubbleTop}px`;els.tutorialBubble.style.left=`${bubbleLeft}px`;els.tutorialNext.textContent=appState.memoryTutorialStep===steps.length-1?"Done":"Next";}
function maybeShowMemoriesTutorial(){if(localStorage.getItem(STORAGE_KEYS.tutorial)==="true"){return;}if(appState.currentScreenId!=="extraContent"){return;}if(!appState.currentResult&&!appState.completedToday){return;}appState.memoryTutorialStep=0;els.memoriesTutorial?.classList.add("active");positionTutorialStep();}
function hideMemoriesTutorial(){els.memoriesTutorial?.classList.remove("active");}
function advanceMemoriesTutorial(){const steps=getTutorialSteps();if(appState.memoryTutorialStep>=steps.length-1){localStorage.setItem(STORAGE_KEYS.tutorial,"true");hideMemoriesTutorial();return;}appState.memoryTutorialStep+=1;positionTutorialStep();}
function dismissMemoriesTutorial(){localStorage.setItem(STORAGE_KEYS.tutorial,"true");hideMemoriesTutorial();}
function bindMemorySwipe(){if(!els.memorySwipeStage){return;}els.memorySwipeStage.addEventListener("pointerdown",(event)=>{appState.memoryPointerStartX=event.clientX;appState.memoryPointerStartY=event.clientY;});els.memorySwipeStage.addEventListener("pointerup",(event)=>{const dx=event.clientX-appState.memoryPointerStartX;const dy=event.clientY-appState.memoryPointerStartY;if(Math.abs(dx)<40||Math.abs(dx)<Math.abs(dy)){return;}if(dx<0){stepMemoryDeck(1);}else{stepMemoryDeck(-1);}});}
function renderStoryChips(){const stories=getStoryState();[["bronwyn",els.bronwynStoryAvatar,"B"],["ntokozo",els.ntokozoStoryAvatar,"N"]].forEach(([key,avatar,initial])=>{const story=stories[key];avatar.classList.toggle("has-story",Boolean(story));avatar.style.backgroundImage=story?`url(${story.src})`:"none";avatar.querySelector(".story-initial").textContent=initial;});}
function getLiveStoryQueue(owner){const stories=getStoryState();const order=owner==="ntokozo"?["ntokozo","bronwyn"]:["bronwyn","ntokozo"];return order.filter((key)=>Boolean(stories[key])).map((key)=>({owner:key,...stories[key]}));}
function launchStoryUpload(owner){appState.activeStoryOwner=owner;els.proofUpload.click();}
function stopStoryPlayback(){cancelAnimationFrame(appState.storyRafId);clearTimeout(appState.storyHoldTimer);appState.storyRafId=null;appState.storyHoldTimer=null;appState.storyPaused=false;appState.storyHoldTriggered=false;appState.storyProgressMs=0;appState.storyStartTimestamp=0;if(els.proofStoryTimerFill){els.proofStoryTimerFill.style.width="0%";}}
function closeStoryViewer(){stopStoryPlayback();showScreen("extraContent");}
function showStoryItem(){const active=appState.storyQueue[appState.storyIndex];if(!active){closeStoryViewer();return;}els.proofStoryEmpty.style.display="none";els.proofStoryPreview.style.display="block";els.proofStoryPreview.src=active.src;els.storyLikeBtn?.classList.toggle("active",Boolean(active.liked));els.proofStoryTimerFill.style.width="0%";appState.storyPaused=false;appState.storyProgressMs=0;appState.storyStartTimestamp=0;cancelAnimationFrame(appState.storyRafId);const tick=(timestamp)=>{if(!appState.storyStartTimestamp){appState.storyStartTimestamp=timestamp;}if(appState.storyPaused){appState.storyStartTimestamp=timestamp;appState.storyRafId=requestAnimationFrame(tick);return;}const delta=timestamp-appState.storyStartTimestamp;appState.storyStartTimestamp=timestamp;appState.storyProgressMs+=delta;const percent=Math.min(100,(appState.storyProgressMs/3800)*100);els.proofStoryTimerFill.style.width=`${percent}%`;if(appState.storyProgressMs>=3800){advanceStory(1);return;}appState.storyRafId=requestAnimationFrame(tick);};appState.storyRafId=requestAnimationFrame(tick);}
function advanceStory(direction){cancelAnimationFrame(appState.storyRafId);appState.storyRafId=null;appState.storyIndex+=direction;if(appState.storyIndex<0||appState.storyIndex>=appState.storyQueue.length){closeStoryViewer();return;}showStoryItem();}
function openStory(owner){appState.activeStoryOwner=owner;const queue=getLiveStoryQueue(owner);if(!queue.length){launchStoryUpload(owner);return;}appState.storyQueue=queue;appState.storyIndex=0;showScreen("proofLife");showStoryItem();}
function toggleCurrentStoryLike(){const active=appState.storyQueue[appState.storyIndex];if(!active||!active.owner){return;}const stories=getStoryState();if(!stories[active.owner]){return;}stories[active.owner].liked=!stories[active.owner].liked;setStorage(STORAGE_KEYS.stories,stories);appState.storyQueue=getLiveStoryQueue(active.owner);appState.storyIndex=Math.min(appState.storyIndex,Math.max(0,appState.storyQueue.length-1));showStoryItem();}
async function handleUpload(event,key){const[file]=event.target.files||[];if(!file){return;}const src=await fileToDataUrl(file);if(key===STORAGE_KEYS.memories){const existing=getStorageArray(key);existing.push({src,type:file.type||"image",source:"user"});setStorage(key,existing.slice(-24));appState.currentMemoryIndex=Math.max(0,getAllMemories().length-1);renderMemoryGallery();}else{const stories=getStoryState();stories[appState.activeStoryOwner]={src,ts:Date.now(),type:file.type||"image"};setStorage(STORAGE_KEYS.stories,stories);renderStoryChips();openStory(appState.activeStoryOwner);}renderStats();event.target.value="";}
function createHeart(){const heart=document.createElement("div");heart.className="heart";heart.style.left=`${Math.random()*100}vw`;heart.style.animationDuration=`${5.5+Math.random()*2.4}s`;document.getElementById("heart-container").appendChild(heart);setTimeout(()=>heart.remove(),8000);}
function renderCustomPlaylists(){const playlists=getStorageArray(STORAGE_KEYS.playlists);els.customPlaylistList.innerHTML="";if(!playlists.length){els.customPlaylistList.innerHTML='<p class="history-meta">Add your own playlists here.</p>';return;}playlists.forEach((item)=>{const link=document.createElement("a");link.href=item.url;link.target="_blank";link.rel="noreferrer";link.textContent=item.name;els.customPlaylistList.appendChild(link);});}
async function requestNotificationPermission(){if(!("Notification" in window)){localStorage.setItem(STORAGE_KEYS.notificationPrompt,"true");runOpeningSequence();return;}const permission=await Notification.requestPermission();const stats=getStats();stats.reminderPermission=permission;saveStats(stats);localStorage.setItem(STORAGE_KEYS.notificationPrompt,"true");if(permission==="granted"){new Notification("Bronwyn reminder",{body:getRandomReminder()});}runOpeningSequence();}
function dismissNotificationPrompt(){localStorage.setItem(STORAGE_KEYS.notificationPrompt,"true");runOpeningSequence();}
function shouldShowNotificationPrompt(){return !(localStorage.getItem(STORAGE_KEYS.notificationPrompt)==="true")&&("Notification" in window)&&Notification.permission==="default";}
function maybeShowReturnNotification(lastVisitBeforeLoad){const stats=getStats();if(!("Notification" in window)||Notification.permission!=="granted"){return;}if(lastVisitBeforeLoad&&lastVisitBeforeLoad!==getTodayKey()){new Notification("Bronwyn reminder",{body:getRandomReminder()});stats.reminderPermission="granted";saveStats(stats);}}
function maybeShowCompletedState(){const history=getHistory();const todayEntry=history.find((item)=>item.dateKey===getTodayKey());appState.completedToday=Boolean(todayEntry);if(!todayEntry){return false;}appState.currentDayIndex=Math.min(history.length,questionDays.length-1);appState.currentResult=todayEntry;els.vibeScore.textContent=`${todayEntry.score}%`;els.vibeEmoji.textContent=todayEntry.emoji;els.vibeMessage.textContent=todayEntry.message;els.summaryPills.innerHTML="<span>today already completed</span><span>open memories anytime</span>";showScreen("result");return true;}
function resetDayState(){const history=getHistory();appState.currentDayIndex=Math.min(history.length,questionDays.length-1);appState.currentQuestionIndex=0;appState.answers=[];appState.analysisDone=false;appState.currentResult=null;updateTopStatus();renderQuestion();}
function updateSessionStats(){const stats=getStats();const now=Date.now();const seconds=Math.max(0,Math.round((now-appState.sessionStartedAt)/1000));stats.secondsSpent=(stats.secondsSpent||0)+seconds;appState.sessionStartedAt=now;saveStats(stats);}
function beginIntro(){showScreen("intro");els.storyTimerFill.style.width="0%";appState.introPaused=false;appState.introProgressMs=0;appState.introStartTimestamp=0;cancelAnimationFrame(appState.introRafId);const tick=(timestamp)=>{if(!appState.introStartTimestamp){appState.introStartTimestamp=timestamp;}if(appState.introPaused){appState.introStartTimestamp=timestamp;appState.introRafId=requestAnimationFrame(tick);return;}const delta=timestamp-appState.introStartTimestamp;appState.introStartTimestamp=timestamp;appState.introProgressMs+=delta;const progress=Math.min(100,(appState.introProgressMs/INTRO_DURATION_MS)*100);els.storyTimerFill.style.width=`${progress}%`;if(appState.introProgressMs>=INTRO_DURATION_MS){finishIntro();return;}appState.introRafId=requestAnimationFrame(tick);};appState.introRafId=requestAnimationFrame(tick);}
function finishIntro(){cancelAnimationFrame(appState.introRafId);if(maybeShowCompletedState()){return;}showScreen("app");}
function setupIntroPause(){const pause=()=>{appState.introPaused=true;};const resume=()=>{appState.introPaused=false;};els.intro.addEventListener("pointerdown",pause);els.intro.addEventListener("pointerup",resume);els.intro.addEventListener("pointercancel",resume);els.intro.addEventListener("pointerleave",resume);}
function showShakeSos(){els.shakeSosOverlay.classList.add("active");}
function hideShakeSos(){els.shakeSosOverlay.classList.remove("active");}
function handleMotion(event){const acc=event.accelerationIncludingGravity;if(!acc){return;}const total=Math.abs(acc.x||0)+Math.abs(acc.y||0)+Math.abs(acc.z||0);const now=Date.now();if(total>42&&now-appState.lastShakeAt>5000){appState.lastShakeAt=now;showShakeSos();}}
function stopAmbientAudio(){bgMusic.pause();stopAllGames();if(els.secretAudio){els.secretAudio.pause();if(els.secretPlayBtn){els.secretPlayBtn.querySelector("i").className="fas fa-play";}if(els.secretLoveNote){els.secretLoveNote.classList.remove("active");}}}
function bindSecretPlayer(){
if(!els.secretAudio||!els.secretPlayBtn){return;}
const playIcon=()=>els.secretPlayBtn.querySelector("i");
const updateTrack=()=>{const duration=els.secretAudio.duration||0;const current=els.secretAudio.currentTime||0;els.secretTrackFill.style.width=duration?`${(current/duration)*100}%`:"0%";};
els.secretPlayBtn.addEventListener("click",()=>{if(els.secretAudio.paused){els.secretAudio.play().catch(()=>{});playIcon().className="fas fa-pause";if(els.secretLoveNote){els.secretLoveNote.classList.add("active");}}else{els.secretAudio.pause();playIcon().className="fas fa-play";}});
els.secretPrevBtn.addEventListener("click",()=>{els.secretAudio.currentTime=Math.max(0,(els.secretAudio.currentTime||0)-10);updateTrack();});
els.secretNextBtn.addEventListener("click",()=>{const duration=els.secretAudio.duration||0;els.secretAudio.currentTime=Math.min(duration||10,(els.secretAudio.currentTime||0)+10);updateTrack();});
els.closeSecretLoveNote?.addEventListener("click",()=>{els.secretLoveNote?.classList.remove("active");});
els.secretAudio.addEventListener("timeupdate",updateTrack);
els.secretAudio.addEventListener("ended",()=>{playIcon().className="fas fa-play";els.secretTrackFill.style.width="0%";});
}

function stopAllGames(){}
function getGameScreenIds(){return ["gamesHub","snakeGame","flappyGame"];}
function showGamesHub(){closeMemMenu();showScreen("gamesHub");}

function bindEvents(lastVisitBeforeLoad){document.getElementById("skipBtn").addEventListener("click",startAnalysis);document.getElementById("openHubFromApp").addEventListener("click",()=>showScreen("extraContent"));document.getElementById("finalYes").addEventListener("click",()=>{if(window.confetti){window.confetti({particleCount:80,spread:70,origin:{y:0.7}});}showScreen("extraContent");});document.getElementById("profileBtn").addEventListener("click",()=>showScreen("profile"));els.bronwynStoryBtn.addEventListener("click",(event)=>{if(event.target.closest(".story-plus")){launchStoryUpload("bronwyn");return;}openStory("bronwyn");});els.ntokozoStoryBtn.addEventListener("click",(event)=>{if(event.target.closest(".story-plus")){launchStoryUpload("ntokozo");return;}openStory("ntokozo");});document.getElementById("vibeHistoryBtn").addEventListener("click",()=>{closeMemMenu();renderHistory();showScreen("history");});document.getElementById("statsBtn").addEventListener("click",()=>{closeMemMenu();renderStats();showScreen("stats");});document.getElementById("gamesHubBtn").addEventListener("click",showGamesHub);document.getElementById("memoriesBtn").addEventListener("click",()=>{closeMemMenu();showScreen("extraContent");});document.getElementById("backFromProfile").addEventListener("click",()=>showScreen("extraContent"));els.closeShakeSos.addEventListener("click",hideShakeSos);els.shakeSosOverlay.addEventListener("click",(event)=>{if(event.target===els.shakeSosOverlay){hideShakeSos();}});document.getElementById("backFromHistory").addEventListener("click",()=>showScreen("extraContent"));document.getElementById("backFromStats").addEventListener("click",()=>showScreen("extraContent"));document.getElementById("backFromGamesHub").addEventListener("click",()=>showScreen("extraContent"));document.getElementById("backFromSnake").addEventListener("click",()=>showScreen("gamesHub"));document.getElementById("backFromFlappy").addEventListener("click",()=>showScreen("gamesHub"));document.getElementById("easterContinue").addEventListener("click",()=>{stopAmbientAudio();showScreen("extraContent");});document.getElementById("closeSecretMeeting").addEventListener("click",()=>showScreen(appState.previousScreenId||"extraContent"));document.getElementById("closeThreeDayStreak").addEventListener("click",()=>showScreen("result"));document.getElementById("closeSevenDayStreak").addEventListener("click",()=>showScreen("result"));document.getElementById("closeJealousMode").addEventListener("click",()=>{if(appState.afterJealousTarget==="analysis"){startAnalysis();return;}showScreen(appState.afterJealousTarget||"app");});document.getElementById("closeSecretTapScreen").addEventListener("click",()=>showScreen(appState.previousScreenId||"app"));document.getElementById("closeEggHint").addEventListener("click",()=>showScreen("result"));els.openSnakeGame?.addEventListener("click",()=>showScreen("snakeGame"));els.openFlappyGame?.addEventListener("click",()=>showScreen("flappyGame"));let logoTapCount=0;let lastLogoTap=0;document.getElementById("logoBadge").addEventListener("click",()=>{const now=Date.now();if(now-lastLogoTap>SECRET_TAP_WINDOW_MS){logoTapCount=0;}logoTapCount+=1;lastLogoTap=now;if(logoTapCount>=SECRET_TAP_TARGET){logoTapCount=0;showScreen("secretTapScreen");}});els.memOptionsBtn.addEventListener("click",()=>{els.memOptionsPanel.classList.toggle("active");els.memOverlay.classList.toggle("active");});els.memOverlay.addEventListener("click",closeMemMenu);els.memoryGalleryOpen.addEventListener("click",openMemoryGallerySheet);els.closeMemoryGallery.addEventListener("click",closeMemoryGallerySheet);els.memoryGallerySheet.addEventListener("click",(event)=>{if(event.target===els.memoryGallerySheet){closeMemoryGallerySheet();}});els.memoryUpload.addEventListener("change",(event)=>handleUpload(event,STORAGE_KEYS.memories));els.closeMemoryViewer.addEventListener("click",closeMemoryViewer);els.memoryViewer.addEventListener("click",(event)=>{if(event.target===els.memoryViewer){closeMemoryViewer();}});els.proofUpload.addEventListener("change",(event)=>handleUpload(event,STORAGE_KEYS.stories));els.proofEmptyAddBtn.addEventListener("click",()=>launchStoryUpload(appState.activeStoryOwner));els.storyLikeBtn?.addEventListener("click",(event)=>{event.stopPropagation();toggleCurrentStoryLike();});els.storyViewerShell.addEventListener("pointerdown",()=>{if(!appState.storyQueue.length){return;}clearTimeout(appState.storyHoldTimer);appState.storyHoldTriggered=false;appState.storyHoldTimer=setTimeout(()=>{appState.storyPaused=true;appState.storyHoldTriggered=true;},180);});els.storyViewerShell.addEventListener("pointerup",(event)=>{clearTimeout(appState.storyHoldTimer);if(!appState.storyQueue.length){return;}if(appState.storyHoldTriggered){appState.storyPaused=false;appState.storyHoldTriggered=false;return;}const bounds=els.storyViewerShell.getBoundingClientRect();const tapX=event.clientX-bounds.left;if(tapX<bounds.width*0.35){advanceStory(-1);}else{advanceStory(1);}});els.storyViewerShell.addEventListener("pointercancel",()=>{clearTimeout(appState.storyHoldTimer);if(appState.storyPaused){appState.storyPaused=false;}appState.storyHoldTriggered=false;});els.playlistForm.addEventListener("submit",(event)=>{event.preventDefault();const name=els.playlistName.value.trim();const url=els.playlistUrl.value.trim();if(!name||!url){return;}const playlists=getStorageArray(STORAGE_KEYS.playlists);playlists.push({name,url});setStorage(STORAGE_KEYS.playlists,playlists.slice(-12));els.playlistName.value="";els.playlistUrl.value="";renderCustomPlaylists();});els.enableNotificationsBtn?.addEventListener("click",requestNotificationPermission);els.skipNotificationsBtn?.addEventListener("click",dismissNotificationPrompt);let tapCount=0;let lastTap=0;document.body.addEventListener("click",(event)=>{if(document.getElementById("proofLife").classList.contains("active")||getGameScreenIds().includes(appState.currentScreenId)){return;}if(event.target.closest("button, input, label, audio, a, form")){return;}const now=Date.now();if(now-lastTap>1500){tapCount=0;}tapCount+=1;lastTap=now;if(tapCount===5){tapCount=0;showScreen("easterEgg");}});document.addEventListener("visibilitychange",()=>{if(document.hidden){updateSessionStats();stopAmbientAudio();if(appState.storyQueue.length){appState.storyPaused=true;}}else{appState.sessionStartedAt=Date.now();if(appState.storyQueue.length){appState.storyPaused=false;appState.storyStartTimestamp=0;}}});window.addEventListener("pagehide",()=>{updateSessionStats();stopAmbientAudio();});window.addEventListener("devicemotion",handleMotion);setupIntroPause();setupHoldSecret();bindSecretPlayer();bindMemorySwipe();els.tutorialNext.addEventListener("click",advanceMemoriesTutorial);els.tutorialSkip.addEventListener("click",dismissMemoriesTutorial);}
function registerVisit(){const stats=getStats();const today=getTodayKey();const lastVisitBeforeLoad=stats.lastVisitDate||"";if(lastVisitBeforeLoad!==today){stats.visits=(stats.visits||0)+1;stats.daysOpened=[...(stats.daysOpened||[]),today].slice(-60);}stats.lastVisitDate=today;appState.sessionStartedAt=Date.now();saveStats(stats);return lastVisitBeforeLoad;}
function init(){document.documentElement.style.setProperty("--heart-color",getHeartColorForToday());els.introText.textContent=introPhrases[Math.floor(Math.random()*introPhrases.length)];renderHistory();renderMemoryGallery();renderStoryChips();renderCustomPlaylists();resetDayState();const lastVisitBeforeLoad=registerVisit();renderStats();bindEvents(lastVisitBeforeLoad);maybeShowReturnNotification(lastVisitBeforeLoad);window.addEventListener("resize",()=>{if(els.memoriesTutorial.classList.contains("active")){positionTutorialStep();}});setInterval(createHeart,900);if(shouldShowNotificationPrompt()){showScreen("notificationPrompt");return;}runOpeningSequence();}
window.addEventListener("load",init);












































