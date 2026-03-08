const STORAGE_KEYS={history:"ntokozo_vibe_history",memories:"ntokozo_memory_gallery",stories:"ntokozo_story_state",playlists:"ntokozo_custom_playlists",stats:"ntokozo_app_stats",specials:"ntokozo_special_flags",tutorial:"ntokozo_memories_tutorial_seen",notificationPrompt:"ntokozo_notification_prompt_seen",bronwynSpace:"ntokozo_bronwyn_space",voiceNotes:"ntokozo_voice_notes",countdowns:"ntokozo_countdowns",calendar:"ntokozo_calendar",coupleQuiz:"ntokozo_couple_quiz"};
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
const BRONWYN_BIRTHDAY_MONTH=12;
const BRONWYN_BIRTHDAY_DAY=6;
const NTOKOZO_BIRTHDAY_MONTH=3;
const NTOKOZO_BIRTHDAY_DAY=4;
const FIRST_DATE_MONTH=3;
const FIRST_DATE_DAY=4;
const BUILTIN_MEMORIES=[
{src:"pictures/picture 1.jpeg",type:"image"},
{src:"pictures/picture 2.jpeg",type:"image"},
{src:"pictures/picture 3.jpeg",type:"image"},
{src:"pictures/picture 4.jpeg",type:"image"},
{src:"pictures/picture 5.jpeg",type:"image"}
];
const SUPABASE_PROJECT_URL="https://pmtpzqcqyvcbekhdptqm.supabase.co";
const SUPABASE_PUBLISHABLE_KEY="sb_publishable_UUX1AmMSsJPmYAPzH2SNqQ_7EqWUN9g";
const SUPABASE_BUCKET="relationship-media";
const REMOTE_SYNC_INTERVAL_MS=20000;
const REMOTE_ENABLED=Boolean(SUPABASE_PROJECT_URL&&SUPABASE_PUBLISHABLE_KEY);
const LOCATION_SHARE_KEY="ntokozo_location_enabled";
const DEFAULT_LOGO_PATH="b and n logo.jpg";
const UI_THEMES=[
{bgGlowA:"rgba(106,72,44,0.26)",bgGlowB:"rgba(194,120,77,0.18)",bgTop:"#22160f",bgMid:"#140d09",bgBottom:"#090604",panel:"rgba(31,20,15,0.74)",panelBorder:"rgba(238,196,162,0.08)",accentStrong:"#a46a42",accentSoft:"#d3a07b",rose:"#d08762",ambientGlow:"rgba(163,109,68,0.18)",buttonPrimaryEnd:"#c68b5f",buttonSecondary:"rgba(196,139,95,0.14)",buttonGhost:"rgba(255,232,215,0.05)",selectedPrimaryA:"#8f5b38",selectedPrimaryB:"#c58b62",selectedSecondaryA:"#6f4937",selectedSecondaryB:"#b9785b",selectedTertiaryA:"#91523d",selectedTertiaryB:"#d29773"},
{bgGlowA:"rgba(53,92,138,0.26)",bgGlowB:"rgba(68,125,160,0.18)",bgTop:"#101d31",bgMid:"#09111c",bgBottom:"#04080e",panel:"rgba(11,21,37,0.74)",panelBorder:"rgba(129,173,219,0.08)",accentStrong:"#3f6ea7",accentSoft:"#84b0dc",rose:"#648bb9",ambientGlow:"rgba(78,121,172,0.18)",buttonPrimaryEnd:"#6595cd",buttonSecondary:"rgba(83,125,177,0.14)",buttonGhost:"rgba(214,231,249,0.05)",selectedPrimaryA:"#395f90",selectedPrimaryB:"#6f99cb",selectedSecondaryA:"#2d4c74",selectedSecondaryB:"#5880b0",selectedTertiaryA:"#49678f",selectedTertiaryB:"#87a9d2"},
{bgGlowA:"rgba(68,74,97,0.24)",bgGlowB:"rgba(106,88,118,0.18)",bgTop:"#171922",bgMid:"#0e1016",bgBottom:"#05060a",panel:"rgba(24,25,34,0.76)",panelBorder:"rgba(179,183,212,0.08)",accentStrong:"#6e7597",accentSoft:"#a0a7ca",rose:"#8e86a9",ambientGlow:"rgba(104,110,146,0.16)",buttonPrimaryEnd:"#8d95ba",buttonSecondary:"rgba(117,126,161,0.14)",buttonGhost:"rgba(226,228,242,0.05)",selectedPrimaryA:"#5f6788",selectedPrimaryB:"#97a0c6",selectedSecondaryA:"#4c5370",selectedSecondaryB:"#8089b0",selectedTertiaryA:"#726783",selectedTertiaryB:"#a193b5"},
{bgGlowA:"rgba(37,88,72,0.24)",bgGlowB:"rgba(71,126,93,0.18)",bgTop:"#0f221b",bgMid:"#081410",bgBottom:"#030806",panel:"rgba(12,28,22,0.76)",panelBorder:"rgba(135,192,162,0.08)",accentStrong:"#3d7d66",accentSoft:"#8bc2ac",rose:"#5f9982",ambientGlow:"rgba(62,126,102,0.16)",buttonPrimaryEnd:"#66a48e",buttonSecondary:"rgba(76,139,113,0.14)",buttonGhost:"rgba(223,243,235,0.05)",selectedPrimaryA:"#336a56",selectedPrimaryB:"#75b49d",selectedSecondaryA:"#285245",selectedSecondaryB:"#5c927a",selectedTertiaryA:"#456f5e",selectedTertiaryB:"#84bca6"},
{bgGlowA:"rgba(83,57,90,0.24)",bgGlowB:"rgba(122,89,133,0.18)",bgTop:"#1b1320",bgMid:"#100b13",bgBottom:"#060409",panel:"rgba(28,18,31,0.76)",panelBorder:"rgba(209,173,219,0.08)",accentStrong:"#7f5a89",accentSoft:"#c29fc9",rose:"#a677a9",ambientGlow:"rgba(111,76,120,0.16)",buttonPrimaryEnd:"#a27aad",buttonSecondary:"rgba(127,90,137,0.14)",buttonGhost:"rgba(244,231,246,0.05)",selectedPrimaryA:"#6f4e78",selectedPrimaryB:"#b591bc",selectedSecondaryA:"#593f63",selectedSecondaryB:"#946e9c",selectedTertiaryA:"#7e5d84",selectedTertiaryB:"#c09fc7"},
{bgGlowA:"rgba(94,76,46,0.24)",bgGlowB:"rgba(154,126,74,0.18)",bgTop:"#211a0f",bgMid:"#141006",bgBottom:"#080603",panel:"rgba(31,24,13,0.76)",panelBorder:"rgba(227,203,149,0.08)",accentStrong:"#9a7f43",accentSoft:"#d8bf7f",rose:"#bd9458",ambientGlow:"rgba(151,122,64,0.16)",buttonPrimaryEnd:"#c7aa67",buttonSecondary:"rgba(154,127,67,0.14)",buttonGhost:"rgba(250,242,218,0.05)",selectedPrimaryA:"#866e39",selectedPrimaryB:"#cdb36f",selectedSecondaryA:"#68562b",selectedSecondaryB:"#ab8d4a",selectedTertiaryA:"#8c733e",selectedTertiaryB:"#d2b97a"},
{bgGlowA:"rgba(82,53,53,0.24)",bgGlowB:"rgba(146,87,87,0.18)",bgTop:"#201111",bgMid:"#120909",bgBottom:"#070404",panel:"rgba(33,17,17,0.76)",panelBorder:"rgba(224,171,171,0.08)",accentStrong:"#975a5a",accentSoft:"#d3a0a0",rose:"#bf7979",ambientGlow:"rgba(144,85,85,0.16)",buttonPrimaryEnd:"#be7c7c",buttonSecondary:"rgba(151,90,90,0.14)",buttonGhost:"rgba(248,229,229,0.05)",selectedPrimaryA:"#824c4c",selectedPrimaryB:"#cb9090",selectedSecondaryA:"#663a3a",selectedSecondaryB:"#a96b6b",selectedTertiaryA:"#8a5252",selectedTertiaryB:"#d39d9d"},
{bgGlowA:"rgba(46,66,96,0.24)",bgGlowB:"rgba(72,98,136,0.18)",bgTop:"#101722",bgMid:"#091018",bgBottom:"#04070b",panel:"rgba(14,22,33,0.76)",panelBorder:"rgba(169,190,219,0.08)",accentStrong:"#5676a2",accentSoft:"#9eb7d8",rose:"#7290b8",ambientGlow:"rgba(76,108,153,0.16)",buttonPrimaryEnd:"#7598c3",buttonSecondary:"rgba(86,118,162,0.14)",buttonGhost:"rgba(232,239,248,0.05)",selectedPrimaryA:"#4a668b",selectedPrimaryB:"#8facd2",selectedSecondaryA:"#3b506d",selectedSecondaryB:"#6885ac",selectedTertiaryA:"#5f7896",selectedTertiaryB:"#9ab4d7"},
{bgGlowA:"rgba(64,88,58,0.24)",bgGlowB:"rgba(98,133,77,0.18)",bgTop:"#152012",bgMid:"#0c140a",bgBottom:"#050805",panel:"rgba(20,30,17,0.76)",panelBorder:"rgba(181,212,169,0.08)",accentStrong:"#6e9658",accentSoft:"#adc99a",rose:"#8eae77",ambientGlow:"rgba(96,133,74,0.16)",buttonPrimaryEnd:"#8ab473",buttonSecondary:"rgba(110,150,88,0.14)",buttonGhost:"rgba(237,246,232,0.05)",selectedPrimaryA:"#5f814c",selectedPrimaryB:"#9fc186",selectedSecondaryA:"#4c663d",selectedSecondaryB:"#7ea768",selectedTertiaryA:"#6a8756",selectedTertiaryB:"#a7ca8f"},
{bgGlowA:"rgba(68,54,78,0.24)",bgGlowB:"rgba(106,83,128,0.18)",bgTop:"#16121d",bgMid:"#0d0a12",bgBottom:"#050409",panel:"rgba(23,18,30,0.76)",panelBorder:"rgba(191,176,216,0.08)",accentStrong:"#76618f",accentSoft:"#b0a2cd",rose:"#9484b2",ambientGlow:"rgba(106,87,136,0.16)",buttonPrimaryEnd:"#9080b3",buttonSecondary:"rgba(118,97,143,0.14)",buttonGhost:"rgba(238,233,248,0.05)",selectedPrimaryA:"#65537a",selectedPrimaryB:"#a799c6",selectedSecondaryA:"#504161",selectedSecondaryB:"#8070a1",selectedTertiaryA:"#72628a",selectedTertiaryB:"#b4a6d0"},
{bgGlowA:"rgba(40,82,94,0.24)",bgGlowB:"rgba(62,129,145,0.18)",bgTop:"#102025",bgMid:"#081216",bgBottom:"#030709",panel:"rgba(13,30,34,0.76)",panelBorder:"rgba(164,214,223,0.08)",accentStrong:"#4d95a5",accentSoft:"#98d0d8",rose:"#6fb5c0",ambientGlow:"rgba(73,142,154,0.16)",buttonPrimaryEnd:"#72b8c2",buttonSecondary:"rgba(77,149,165,0.14)",buttonGhost:"rgba(231,247,249,0.05)",selectedPrimaryA:"#417f8d",selectedPrimaryB:"#8ec7d0",selectedSecondaryA:"#33636f",selectedSecondaryB:"#65a7b1",selectedTertiaryA:"#578e97",selectedTertiaryB:"#9dd7df"},
{bgGlowA:"rgba(92,60,40,0.24)",bgGlowB:"rgba(151,96,65,0.18)",bgTop:"#21130d",bgMid:"#140b07",bgBottom:"#080403",panel:"rgba(34,20,14,0.76)",panelBorder:"rgba(227,184,154,0.08)",accentStrong:"#a36443",accentSoft:"#d9a58a",rose:"#be7f60",ambientGlow:"rgba(160,97,63,0.16)",buttonPrimaryEnd:"#c1835f",buttonSecondary:"rgba(163,100,67,0.14)",buttonGhost:"rgba(249,236,229,0.05)",selectedPrimaryA:"#8f5639",selectedPrimaryB:"#ca9578",selectedSecondaryA:"#72432d",selectedSecondaryB:"#ab6d50",selectedTertiaryA:"#92563f",selectedTertiaryB:"#d6a58d"},
{bgGlowA:"rgba(58,58,70,0.24)",bgGlowB:"rgba(98,98,120,0.18)",bgTop:"#17171c",bgMid:"#0e0e12",bgBottom:"#050508",panel:"rgba(25,25,32,0.76)",panelBorder:"rgba(200,200,216,0.08)",accentStrong:"#73738d",accentSoft:"#b6b6cc",rose:"#9696ac",ambientGlow:"rgba(92,92,116,0.16)",buttonPrimaryEnd:"#9292b0",buttonSecondary:"rgba(115,115,141,0.14)",buttonGhost:"rgba(239,239,246,0.05)",selectedPrimaryA:"#626279",selectedPrimaryB:"#aaaac3",selectedSecondaryA:"#4d4d60",selectedSecondaryB:"#80809f",selectedTertiaryA:"#73738a",selectedTertiaryB:"#b7b7ce"},
{bgGlowA:"rgba(43,79,67,0.24)",bgGlowB:"rgba(73,123,104,0.18)",bgTop:"#112019",bgMid:"#09130f",bgBottom:"#040806",panel:"rgba(14,30,24,0.76)",panelBorder:"rgba(165,211,191,0.08)",accentStrong:"#4d9078",accentSoft:"#97ccb6",rose:"#6fb098",ambientGlow:"rgba(67,125,102,0.16)",buttonPrimaryEnd:"#6db399",buttonSecondary:"rgba(77,144,120,0.14)",buttonGhost:"rgba(232,246,240,0.05)",selectedPrimaryA:"#417865",selectedPrimaryB:"#8cc1ac",selectedSecondaryA:"#335d4f",selectedSecondaryB:"#629984",selectedTertiaryA:"#56876f",selectedTertiaryB:"#9cd0bb"},
{bgGlowA:"rgba(84,48,68,0.24)",bgGlowB:"rgba(148,83,113,0.18)",bgTop:"#1f1018",bgMid:"#120910",bgBottom:"#070407",panel:"rgba(33,15,25,0.76)",panelBorder:"rgba(229,173,202,0.08)",accentStrong:"#a65a80",accentSoft:"#db9fbc",rose:"#c5769b",ambientGlow:"rgba(160,82,119,0.16)",buttonPrimaryEnd:"#ca7ea1",buttonSecondary:"rgba(166,90,128,0.14)",buttonGhost:"rgba(249,232,240,0.05)",selectedPrimaryA:"#924d6f",selectedPrimaryB:"#d193b2",selectedSecondaryA:"#743b57",selectedSecondaryB:"#b56b8d",selectedTertiaryA:"#985475",selectedTertiaryB:"#dba0bf"},
{bgGlowA:"rgba(48,72,90,0.24)",bgGlowB:"rgba(78,121,147,0.18)",bgTop:"#101a22",bgMid:"#091017",bgBottom:"#04070a",panel:"rgba(13,23,31,0.76)",panelBorder:"rgba(172,199,221,0.08)",accentStrong:"#5d83a4",accentSoft:"#a3c0da",rose:"#7a9fbe",ambientGlow:"rgba(82,122,152,0.16)",buttonPrimaryEnd:"#7d9fbe",buttonSecondary:"rgba(93,131,164,0.14)",buttonGhost:"rgba(233,241,248,0.05)",selectedPrimaryA:"#4f6f8c",selectedPrimaryB:"#99b6d2",selectedSecondaryA:"#3f586f",selectedSecondaryB:"#6f8dad",selectedTertiaryA:"#65839f",selectedTertiaryB:"#a7c4dd"},
{bgGlowA:"rgba(88,71,52,0.24)",bgGlowB:"rgba(143,114,83,0.18)",bgTop:"#20170f",bgMid:"#120d08",bgBottom:"#070503",panel:"rgba(32,23,15,0.76)",panelBorder:"rgba(223,195,169,0.08)",accentStrong:"#9b7958",accentSoft:"#d6b090",rose:"#bf9370",ambientGlow:"rgba(144,111,79,0.16)",buttonPrimaryEnd:"#bc946f",buttonSecondary:"rgba(155,121,88,0.14)",buttonGhost:"rgba(247,239,231,0.05)",selectedPrimaryA:"#86674b",selectedPrimaryB:"#cca686",selectedSecondaryA:"#694f38",selectedSecondaryB:"#a57f5d",selectedTertiaryA:"#8b6d50",selectedTertiaryB:"#d6b18f"},
{bgGlowA:"rgba(53,68,54,0.24)",bgGlowB:"rgba(88,122,88,0.18)",bgTop:"#131914",bgMid:"#0b100c",bgBottom:"#040605",panel:"rgba(20,27,21,0.76)",panelBorder:"rgba(185,207,186,0.08)",accentStrong:"#667f66",accentSoft:"#a6bfa6",rose:"#879f87",ambientGlow:"rgba(91,120,91,0.16)",buttonPrimaryEnd:"#849d84",buttonSecondary:"rgba(102,127,102,0.14)",buttonGhost:"rgba(236,243,236,0.05)",selectedPrimaryA:"#586d58",selectedPrimaryB:"#9cb49c",selectedSecondaryA:"#465646",selectedSecondaryB:"#738d73",selectedTertiaryA:"#667b66",selectedTertiaryB:"#a7c0a7"},
{bgGlowA:"rgba(70,52,88,0.24)",bgGlowB:"rgba(116,86,148,0.18)",bgTop:"#181220",bgMid:"#0f0b13",bgBottom:"#050409",panel:"rgba(24,18,32,0.76)",panelBorder:"rgba(202,184,227,0.08)",accentStrong:"#8360a4",accentSoft:"#baa4d8",rose:"#9f83be",ambientGlow:"rgba(116,85,154,0.16)",buttonPrimaryEnd:"#9c7cbe",buttonSecondary:"rgba(131,96,164,0.14)",buttonGhost:"rgba(240,235,248,0.05)",selectedPrimaryA:"#71538d",selectedPrimaryB:"#b09acd",selectedSecondaryA:"#5a426f",selectedSecondaryB:"#896aab",selectedTertiaryA:"#7d629b",selectedTertiaryB:"#c0abdb"},
{bgGlowA:"rgba(48,88,86,0.24)",bgGlowB:"rgba(84,146,140,0.18)",bgTop:"#10201f",bgMid:"#081313",bgBottom:"#030707",panel:"rgba(13,31,30,0.76)",panelBorder:"rgba(168,220,214,0.08)",accentStrong:"#529992",accentSoft:"#9dd6d0",rose:"#73b8b1",ambientGlow:"rgba(82,152,147,0.16)",buttonPrimaryEnd:"#73bbb3",buttonSecondary:"rgba(82,153,146,0.14)",buttonGhost:"rgba(232,248,247,0.05)",selectedPrimaryA:"#45827c",selectedPrimaryB:"#92cbc5",selectedSecondaryA:"#366663",selectedSecondaryB:"#68a79f",selectedTertiaryA:"#59958f",selectedTertiaryB:"#a2dbd5"},
{bgGlowA:"rgba(88,44,44,0.24)",bgGlowB:"rgba(142,72,72,0.18)",bgTop:"#200f0f",bgMid:"#120808",bgBottom:"#070303",panel:"rgba(33,14,14,0.76)",panelBorder:"rgba(224,171,171,0.08)",accentStrong:"#9a4f4f",accentSoft:"#d59b9b",rose:"#c27070",ambientGlow:"rgba(149,76,76,0.16)",buttonPrimaryEnd:"#c37474",buttonSecondary:"rgba(154,79,79,0.14)",buttonGhost:"rgba(248,231,231,0.05)",selectedPrimaryA:"#864444",selectedPrimaryB:"#cb8e8e",selectedSecondaryA:"#693333",selectedSecondaryB:"#ad6464",selectedTertiaryA:"#935252",selectedTertiaryB:"#d8a0a0"}
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
const MOTIVATION_QUOTES=[
{text:"Success is not final; failure is not fatal: It is the courage to continue that counts.",author:"Winston Churchill"},
{text:"It is better to fail in originality than to succeed in imitation.",author:"Herman Melville"},
{text:"The road to success and the road to failure are almost exactly the same.",author:"Colin R. Davis"},
{text:"Success usually comes to those who are too busy to be looking for it.",author:"Henry David Thoreau"},
{text:"Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",author:"Dale Carnegie"},
{text:"There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.",author:"Mister Rogers"},
{text:"I never dreamed about success. I worked for it.",author:"Estee Lauder"},
{text:"You can't be that kid standing at the top of the waterslide, overthinking it. You have to go down the chute.",author:"Tina Fey"},
{text:"And the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom.",author:"Anais Nin"},
{text:"The standard you walk past is the standard you accept.",author:"David Hurley"},
{text:"Keep your eyes on the stars and your feet on the ground.",author:"Theodore Roosevelt"},
{text:"Perfection is not attainable. But if we chase perfection we can catch excellence.",author:"Vince Lombardi"},
{text:"Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",author:"Helen Keller"},
{text:"Don't let yesterday take up too much of today.",author:"Will Rogers"},
{text:"If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.",author:"Steve Jobs"},
{text:"Goal setting is the secret to a compelling future.",author:"Tony Robbins"},
{text:"Either you run the day or the day runs you.",author:"Jim Rohn"},
{text:"When we strive to become better than we are, everything around us becomes better too.",author:"Paulo Coelho"},
{text:"Think like a queen. A queen is not afraid to fail. Failure is another stepping stone to greatness.",author:"Oprah Winfrey"},
{text:"The thing women have yet to learn is nobody gives you power. You just take it.",author:"Roseanne Barr"},
{text:"If they don't give you a seat at the table, bring a folding chair.",author:"Shirley Chisholm"},
{text:"He who conquers himself is the mightiest warrior.",author:"Confucius"},
{text:"Try not to become a man of success, but rather become a man of value.",author:"Albert Einstein"},
{text:"Education is the most powerful weapon which you can use to change the world.",author:"Nelson Mandela"},
{text:"Take the attitude of a student: never be too big to ask questions, never know too much to learn something new.",author:"Og Mandino"},
{text:"Life is like riding a bicycle. To keep your balance, you must keep moving.",author:"Albert Einstein"},
{text:"If you really want to do something, you'll find a way. If you don't, you'll find an excuse.",author:"Jim Rohn"},
{text:"Courage doesn't always roar. Sometimes courage is a quiet voice at the end of the day saying, I will try again tomorrow.",author:"Mary Anne Radmacher"},
{text:"The greatest discovery of my generation is that a human being can alter his life by altering his attitudes.",author:"William James"},
{text:"When you arise in the morning, think of what a privilege it is to be alive, to think, to enjoy, to love.",author:"Marcus Aurelius"},
{text:"Inspiration does exist, but it must find you working.",author:"Pablo Picasso"},
{text:"Power's not given to you. You have to take it.",author:"Beyonce"},
{text:"Believe you can and you're halfway there.",author:"Theodore Roosevelt"},
{text:"The future belongs to those who believe in the beauty of their dreams.",author:"Eleanor Roosevelt"},
{text:"The greatest weapon against stress is our ability to choose one thought over another.",author:"William James"},
{text:"Learn as if you will live forever, live like you will die tomorrow.",author:"Mahatma Gandhi"},
{text:"The elevator to success is out of order. You'll have to use the stairs, one step at a time.",author:"Joe Girard"},
{text:"Just one small positive thought in the morning can change your whole day.",author:"Dalai Lama"},
{text:"Opportunities don't happen, you create them.",author:"Chris Grosser"},
{text:"If you can dream it, you can do it.",author:"Walt Disney"},
{text:"Someone's sitting in the shade today because someone planted a tree a long time ago.",author:"Warren Buffett"},
{text:"Set your goals high, and don't stop till you get there.",author:"Bo Jackson"},
{text:"A year from now you will wish you had started today.",author:"Unknown"},
{text:"If it makes you nervous, you're doing it right.",author:"Childish Gambino"},
{text:"I choose to make the rest of my life the best of my life.",author:"Louise Hay"},
{text:"Nothing is impossible, the word itself says I'm possible.",author:"Audrey Hepburn"},
{text:"Start where you are. Use what you have. Do what you can.",author:"Arthur Ashe"},
{text:"If you're going through hell, keep going.",author:"Unknown"},
{text:"Everything you've ever wanted is sitting on the other side of fear.",author:"George Addair"},
{text:"Never let success get to your head, and never let failure get to your heart.",author:"Drake"},
{text:"The best way out is always through.",author:"Robert Frost"},
{text:"Courage is like a muscle. We strengthen it by use.",author:"Ruth Gordon"},
{text:"More is lost by indecision than wrong decision.",author:"Marcus Tullius Cicero"},
{text:"Keep a little fire burning; however small, however hidden.",author:"Cormac McCarthy"},
{text:"Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.",author:"Earl Nightingale"}
];
const MOTIVATION_THEMES=[
["#ff7f50","#ff4da6"],["#ff9f1c","#ff4f7b"],["#00c2ff","#ff5ea8"],["#7b61ff","#ff7a59"],["#00d084","#00b8ff"],["#ff5c8a","#ffa751"],["#00b4d8","#9b5cff"],["#845ef7","#ff6b6b"],["#f72585","#4cc9f0"],["#ff8fab","#7b2cbf"],["#06d6a0","#118ab2"],["#ef476f","#ffd166"]
];

const reminderQuotes=[
"Your boyfriend misses you. Open the app.",
"Bronwyn, this app is lonely without you.",
"Ntokozo filed a formal complaint: not enough Bronwyn today.",
"Cute reminder: your daily vibe check is waiting.",
"The relationship dashboard would like your attention, pretty please.",
"Open the app before Ntokozo starts being dramatic."
];
const SECRET_WHEEL_OPTIONS=[
"Anniversary sushi date",
"Dress up and do a rooftop dinner",
"Sunset picnic with snacks and music",
"Late coffee and a long drive",
"Couple movie night with takeout",
"Mini photo date together",
"Ice cream and a random walk",
"Arcade date and silly competition",
"Bookstore and dessert date",
"Stay-in spa night",
"Couple challenge night at home",
"Fancy dinner and soft pictures"
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
const BUILTIN_COUPLE_QUESTION_BANK=[
{key:"getting-to-know",title:"Getting to know your partner",description:"Big-picture questions about personality, values, and inner life.",questions:[
"What's your ideal way to spend a vacation?",
"What makes you dislike a person?",
"Do you think you are a confident person? Why or why not?",
"What about yourself are you most proud of?",
"What would the best version of you be like?",
"What life experiences did you miss out on?",
"When are you the most 'you'?",
"Are you happy with the people you surround yourself with? Why or why not?",
"What musical instrument do you wish you could play?",
"What is the nicest compliment you've received?",
"What age would you like to live to?",
"If you could travel to any country in the world for one month, where would you go?",
"What is your favorite memory of someone who isn't in your life anymore?",
"How superstitious are you?",
"What has been a recurring theme in your life?",
"What do you think happens after death?",
"What are your top 5 rules for life?",
"What book or movie do you wish you could experience for the first time again?",
"What petty thing that people do really gets on your nerves?",
"What brings meaning to your life?",
"What is something you wish you could say to people but can't?",
"What are some of the most attractive traits a person can have?",
"What's a secret you've never told anyone?",
"What small pleasures do you enjoy the most?",
"What has been your biggest screw up so far?",
"What have you struggled with your entire life?",
"What is the most significant change you would like to make in your life?",
"What do you want out of life?",
"What calms you down the most?",
"What kinds of things do you find repulsive?",
"What would your perfect life look like?",
"If you received a salary to follow whatever passion you wanted to, what would you do?",
"How good are you at reading people?",
"Are you hopeful about your future?",
"Who do you want to be more like or who do you look up to most?",
"What were the healthiest and unhealthiest periods of your life?",
"What's the worst emotional or mental anguish you've endured?",
"What do you worry about?",
"Do you think the world is improving or getting worse? Why?",
"What's the biggest betrayal you have ever experienced?",
"What would be the greatest gift to receive?",
"What is something that you are dreading?",
"What would you want your obituary to say?",
"What has taken up too much of your life?",
"What was the hardest lesson you've had to learn?",
"What part of you as a person still needs a lot of work?",
"How forgiving are you?",
"Are you ashamed of anything you did in the past?",
"What's the most unethical thing you do regularly?",
"What job do you think you were born to do?",
"What biases do you think you have?",
"What are you battling that you don't tell anyone about?",
"What's something that a lot of people are afraid of, but you aren't?",
"If you could open a business what type of business would you open?",
"What can someone do that makes them immediately unattractive to you?",
"What were the three most important turning points in your life?",
"When was the last time you cried?",
"What's your biggest regret?",
"What do you think your best and worst personality traits are?",
"What do you take for granted?",
"What are you most sentimental about?",
"What question do you most want an answer to?",
"What do you look forward to most in the day?",
"If you could instantly learn a talent or skill, what would you want to know how to do?",
"When is your favorite time of day?",
"How well do you function under a lot of pressure?",
"What is your weakness?",
"What brings you the most joy?",
"What do you wish you were better at?"
]},
{key:"family-childhood",title:"Family and childhood",description:"Questions that explain where someone came from and what shaped them.",questions:[
"What is something your parents did that really embarrassed you?",
"What small thing did someone say to you as a child that has stuck with you all this time?",
"What is the best or worst thing you inherited from your parents?",
"What made you realize that your parents were just human like everyone else?",
"What habits do you still have from childhood?",
"What family vacations did you take as a child?",
"How traditionally normal was your family?",
"How do you want to be different than your parents? And how do you want to be similar to them?",
"What school subjects did you like and hate most when you were in school?",
"What unique game of pretend did you frequently play as a child?",
"What movie seriously scarred you as a child or as an adult?",
"What irrational fears did you have as a child?",
"What toy played the most significant part in your childhood?",
"What are some of your earliest memories?"
]},
{key:"relationship",title:"Relationship questions",description:"Questions about the two of you, your habits, and what stronger love looks like.",questions:[
"What is something I did that you thought was exceptionally kind or thoughtful?",
"What new hobbies or activities would you like to try together as a couple?",
"What's our greatest strength as a couple?",
"What could we do to make our relationship stronger?",
"What is something small that we can do daily for each other to make our lives better?",
"How much space or alone time should people in a relationship give each other?",
"What questions should partners ask each other before getting married?",
"What do I do that makes you the happiest?",
"How important is it for individuals in a relationship to maintain their own separate identity?",
"What makes our relationship better than other relationships?",
"What do you think our life will look like in 10 years?",
"What do you think would bring us closer together as a couple?",
"What kind of memories do you want to make together?",
"What do you think the most essential thing in a successful relationship is?",
"What's your favorite way we spend time together?",
"What's your favorite gift I've given you?",
"Where do you want to live when we retire?",
"In what areas do you think our personalities complement each other?",
"How well do you think we communicate?",
"What adventure would you like to go on with me?",
"What's the best relationship advice you've received?",
"What are some things you really like about me?",
"What do you think the hardest thing about marriage or being in a relationship is?",
"What can I do to most help us?",
"What do you see as your role in our relationship?",
"What would be a deal breaker for our relationship, something you couldn't forgive?",
"What makes us different than other couples?",
"What do you think would be the best way to strengthen our relationship?",
"What are some of your relationship goals?",
"What does a happy and healthy relationship look like to you?"
]},
{key:"sex",title:"Sex and intimacy",description:"A private category for attraction, chemistry, and bedroom honesty.",questions:[
"How well do you think our sex drives match up?",
"How important do you think sex is in our relationship?",
"What are you into, but haven't told me about?",
"What do I do in bed that drives you wild?",
"What is the most adventurous thing you've done sexually?",
"Besides orgasms, what is the best part of sex?",
"What's the most embarrassing thing that has happened to you while having sex?",
"When am I at my sexiest?",
"What would you like me to do in the bedroom to spice things up a bit?",
"What's better than great sex?",
"What do I do outside the bedroom that turns you on?"
]},
{key:"kids",title:"Kids and future family",description:"Important questions for whether you both imagine children and how you would raise them.",questions:[
"Do you eventually want to have children? How many children do you eventually want? Why?",
"What's the worst parenting mistake a couple can make?",
"What is the best way to raise children?",
"How would we know if we did our job as parents well?",
"Do you think it is more important for a couple with kids to focus on the kids more or each other more? Why?",
"How do you think having kids will or has changed our lives and relationship?"
]}
];

const questionDays=rawQuestionDays.map((day)=>({
...day,
questions:day.questions.map((question)=>({...question,prompt:question.prompt.replaceAll("Ntokozo",NTOKOZO_NAME)}))
}));
const appState={currentDayIndex:0,currentQuestionIndex:0,answers:[],analysisDone:false,completedToday:false,currentResult:null,introPaused:false,introProgressMs:0,introStartTimestamp:0,introRafId:null,sessionStartedAt:Date.now(),lastShakeAt:0,activeStoryOwner:"bronwyn",storyQueue:[],storyIndex:0,storyPaused:false,storyProgressMs:0,storyStartTimestamp:0,storyRafId:null,storyHoldTimer:null,storyHoldTriggered:false,holdSecretTimer:null,longPressTriggered:false,currentScreenId:"intro",previousScreenId:"",noAnswerStreak:0,afterJealousTarget:"app",currentMemoryIndex:0,memoryPointerStartX:0,memoryPointerStartY:0,memoryTutorialStep:0,remoteMemories:null,remoteStories:null,remoteLocation:null,remoteSyncReady:false,remoteSyncing:false,remotePollTimer:null,locationWatchId:null,locationSharing:false};
const RELATIONSHIP_MOODS=["glowing","okay","overwhelmed","tired","missing you","proud"];
const DEFAULT_COUNTDOWNS=[
{id:"next-date",title:"Next date",date:"",details:"Plan your next proper date."},
{id:"anniversary",title:"Anniversary",date:"",details:"Your relationship anniversary."},
{id:"next-see",title:"Next time we see each other",date:"",details:"The next real-life moment together."}
];
const bgMusic=new Audio("music/mybeyonce.mp3");bgMusic.loop=false;bgMusic.volume=0;const noSound=new Audio("faaah.mp3");noSound.preload="auto";let ambientFadeInTimer=null;let ambientFadeOutTimer=null;let ambientStopTimer=null;let voiceRecorder=null;let voiceRecorderStream=null;let voiceRecorderChunks=[];let secretWheelRotation=0;let secretWheelSpinning=false;
const els={
appFavicon:document.getElementById("appFavicon"),mainLogoImage:document.getElementById("mainLogoImage"),secretAlbumArt:document.getElementById("secretAlbumArt"),
intro:document.getElementById("intro"),introText:document.querySelector(".intro-text"),storyTimerFill:document.getElementById("storyTimerFill"),questionProgressBar:document.getElementById("questionProgressBar"),globalBackBtn:document.getElementById("globalBackBtn"),progress:document.getElementById("progress"),dayLabel:document.getElementById("dayLabel"),themeDisplay:document.getElementById("themeDisplay"),streakDisplay:document.getElementById("streakDisplay"),questionCount:document.getElementById("questionCount"),questionTag:document.getElementById("questionTag"),questionText:document.getElementById("questionText"),questionHint:document.getElementById("questionHint"),answers:document.getElementById("answers"),analysisText:document.getElementById("analysis-text"),vibeScore:document.getElementById("vibeScore"),vibeEmoji:document.getElementById("vibeEmoji"),vibeMessage:document.getElementById("vibeMessage"),summaryPills:document.getElementById("summaryPills"),historyList:document.getElementById("historyList"),memoryGallery:document.getElementById("memoryGallery"),memoryViewer:document.getElementById("memoryViewer"),memoryViewerContent:document.getElementById("memoryViewerContent"),closeMemoryViewer:document.getElementById("closeMemoryViewer"),memOptionsBtn:document.getElementById("memOptionsBtn"),memOptionsPanel:document.getElementById("memOptionsPanel"),memOverlay:document.getElementById("memOverlay"),memoryUpload:document.getElementById("memoryUpload"),proofUpload:document.getElementById("proofUpload"),profileBtn:document.getElementById("profileBtn"),bronwynStoryBtn:document.getElementById("bronwynStoryBtn"),ntokozoStoryBtn:document.getElementById("ntokozoStoryBtn"),bronwynStoryAvatar:document.getElementById("bronwynStoryAvatar"),ntokozoStoryAvatar:document.getElementById("ntokozoStoryAvatar"),proofStoryPreview:document.getElementById("proofStoryPreview"),proofStoryEmpty:document.getElementById("proofStoryEmpty"),proofEmptyAddBtn:document.getElementById("proofEmptyAddBtn"),proofStoryTimerFill:document.getElementById("proofStoryTimerFill"),storyViewerShell:document.getElementById("storyViewerShell"),backFromProfile:document.getElementById("backFromProfile"),profileSubtitle:document.getElementById("profileSubtitle"),profileNotificationTag:document.getElementById("profileNotificationTag"),profileStoryTag:document.getElementById("profileStoryTag"),profileQuickStats:document.getElementById("profileQuickStats"),profileDetailList:document.getElementById("profileDetailList"),profilePreferenceList:document.getElementById("profilePreferenceList"),profileOpenStats:document.getElementById("profileOpenStats"),profileOpenHistory:document.getElementById("profileOpenHistory"),complaintsBtn:document.getElementById("complaintsBtn"),complaintText:document.getElementById("complaintText"),sendComplaintBtn:document.getElementById("sendComplaintBtn"),copyComplaintBtn:document.getElementById("copyComplaintBtn"),backFromComplaints:document.getElementById("backFromComplaints"),shakeSosOverlay:document.getElementById("shakeSosOverlay"),closeShakeSos:document.getElementById("closeShakeSos"),playlistForm:document.getElementById("playlistForm"),playlistName:document.getElementById("playlistName"),playlistUrl:document.getElementById("playlistUrl"),customPlaylistList:document.getElementById("customPlaylistList"),boyfriendLocationCard:document.getElementById("boyfriendLocationCard"),boyfriendLocationTitle:document.getElementById("boyfriendLocationTitle"),boyfriendMap:document.getElementById("boyfriendMap"),locationStatus:document.getElementById("locationStatus"),locationUpdated:document.getElementById("locationUpdated"),openInAppleMaps:document.getElementById("openInAppleMaps"),motivationQuote:document.getElementById("motivationQuote"),motivationAuthor:document.getElementById("motivationAuthor"),dailyMotivationCard:document.getElementById("dailyMotivationCard"),statsGrid:document.getElementById("statsGrid"),statsChart:document.getElementById("statsChart"),enableNotificationsBtn:document.getElementById("enableNotificationsBtn"),skipNotificationsBtn:document.getElementById("skipNotificationsBtn"),secretAudio:document.getElementById("secretAudio"),secretPlayBtn:document.getElementById("secretPlayBtn"),secretTrackFill:document.getElementById("secretTrackFill"),secretPrevBtn:document.getElementById("secretPrevBtn"),secretNextBtn:document.getElementById("secretNextBtn"),secretLoveNote:document.getElementById("secretLoveNote"),closeSecretLoveNote:document.getElementById("closeSecretLoveNote"),secretSpinWheel:document.getElementById("secretSpinWheel"),spinSecretWheel:document.getElementById("spinSecretWheel"),secretWheelResult:document.getElementById("secretWheelResult"),memorySwipeStage:document.getElementById("memorySwipeStage"),memoryGalleryOpen:document.getElementById("memoryGalleryOpen"),memoryGallerySheet:document.getElementById("memoryGallerySheet"),closeMemoryGallery:document.getElementById("closeMemoryGallery"),memoriesTutorial:document.getElementById("memoriesTutorial"),tutorialBubble:document.getElementById("tutorialBubble"),tutorialStepLabel:document.getElementById("tutorialStepLabel"),tutorialStepText:document.getElementById("tutorialStepText"),tutorialNext:document.getElementById("tutorialNext"),tutorialSkip:document.getElementById("tutorialSkip"),tutorialSpotlight:document.getElementById("tutorialSpotlight"),storyLikeBtn:document.getElementById("storyLikeBtn"),storyDeleteBtn:document.getElementById("storyDeleteBtn"),gamesHubBtn:document.getElementById("gamesHubBtn"),openSnakeGame:document.getElementById("openSnakeGame"),openFlappyGame:document.getElementById("openFlappyGame"),backFromGamesHub:document.getElementById("backFromGamesHub"),backFromSnake:document.getElementById("backFromSnake"),backFromFlappy:document.getElementById("backFromFlappy")};
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
const getCurrentDayData=()=>questionDays[Math.min(appState.currentDayIndex,questionDays.length-1)];
function getStats(){return getStorageObject(STORAGE_KEYS.stats,{visits:0,secondsSpent:0,checkInsCompleted:0,lastVisitDate:"",daysOpened:[],reminderPermission:"default"});}
function saveStats(stats){setStorage(STORAGE_KEYS.stats,stats);}
function buildSupabaseHeaders(extra={}){return{apikey:SUPABASE_PUBLISHABLE_KEY,Authorization:`Bearer ${SUPABASE_PUBLISHABLE_KEY}`,...extra};}
function buildSupabaseRestUrl(path){return `${SUPABASE_PROJECT_URL}/rest/v1/${path}`;}
function buildSupabasePublicUrl(objectPath){return `${SUPABASE_PROJECT_URL}/storage/v1/object/public/${SUPABASE_BUCKET}/${objectPath}`;}
function sanitizeUploadName(name){return(name||"upload").toLowerCase().replace(/[^a-z0-9._-]+/g,"-");}
function getLocalMemories(){return getStorageArray(STORAGE_KEYS.memories).map(normalizeMemoryItem);}
function normalizeRemoteMemory(row){return{src:buildSupabasePublicUrl(row.path),type:row.media_type||"image",source:row.source_name||"user",path:row.path,id:row.id||row.path};}
function getAllMemories(){const sharedMemories=appState.remoteMemories!==null?appState.remoteMemories:getLocalMemories();return[...BUILTIN_MEMORIES,...sharedMemories.map(normalizeMemoryItem)];}
function getLocalStoryState(){const cutoff=Date.now()-86400000;const state=getStorageObject(STORAGE_KEYS.stories,{bronwyn:null,ntokozo:null});["bronwyn","ntokozo"].forEach((key)=>{if(state[key]&&state[key].ts<cutoff){state[key]=null;}});setStorage(STORAGE_KEYS.stories,state);return state;}
function normalizeRemoteStory(row){return{src:buildSupabasePublicUrl(row.path),ts:new Date(row.created_at||Date.now()).getTime(),type:row.media_type||"image",liked:Boolean(row.liked),path:row.path,owner:row.owner,expires_at:row.expires_at};}
function getStoryState(){if(appState.remoteStories){return appState.remoteStories;}return getLocalStoryState();}
async function supabaseJsonRequest(path,options={}){const response=await fetch(buildSupabaseRestUrl(path),{method:options.method||"GET",headers:buildSupabaseHeaders(options.headers||{}),body:options.body});if(!response.ok){throw new Error(`Supabase request failed: ${response.status}`);}if(response.status===204){return null;}const text=await response.text();return text?JSON.parse(text):null;}
async function fetchRemoteMemories(){const rows=await supabaseJsonRequest("memories?select=id,path,media_type,source_name,created_at&order=created_at.asc");return Array.isArray(rows)?rows.map(normalizeRemoteMemory):[];}
async function fetchRemoteStories(){const now=encodeURIComponent(new Date().toISOString());const rows=await supabaseJsonRequest(`stories?select=owner,path,media_type,liked,created_at,expires_at&expires_at=gt.${now}`);const state={bronwyn:null,ntokozo:null};if(Array.isArray(rows)){rows.forEach((row)=>{if(row.owner==="bronwyn"||row.owner==="ntokozo"){state[row.owner]=normalizeRemoteStory(row);}});}return state;}
async function fetchRemoteLocation(){const rows=await supabaseJsonRequest("locations?select=owner,latitude,longitude,accuracy,updated_at,is_active&owner=eq.ntokozo&is_active=eq.true&limit=1");return Array.isArray(rows)&&rows[0]?rows[0]:null;}
async function refreshSharedContent(options={}){if(!REMOTE_ENABLED||appState.remoteSyncing){return;}appState.remoteSyncing=true;try{const[memories,stories,location]=await Promise.all([fetchRemoteMemories(),fetchRemoteStories(),fetchRemoteLocation()]);appState.remoteMemories=memories;appState.remoteStories=stories;appState.remoteLocation=location;appState.remoteSyncReady=true;renderStoryChips();renderMemoryGallery();renderLocationCard();renderStats();}catch(error){if(!options.silent){console.warn("Shared sync unavailable",error);}}finally{appState.remoteSyncing=false;}}
function startRemotePolling(){if(!REMOTE_ENABLED||appState.remotePollTimer){return;}appState.remotePollTimer=setInterval(()=>{refreshSharedContent({silent:true});},REMOTE_SYNC_INTERVAL_MS);}
async function uploadFileToSupabase(file,folder){const objectPath=`${folder}/${Date.now()}-${sanitizeUploadName(file.name)}`;const response=await fetch(`${SUPABASE_PROJECT_URL}/storage/v1/object/${SUPABASE_BUCKET}/${objectPath}`,{method:"POST",headers:buildSupabaseHeaders({"x-upsert":"true","content-type":file.type||"application/octet-stream"}),body:file});if(!response.ok){throw new Error(`Storage upload failed: ${response.status}`);}return objectPath;}
async function saveRemoteMemory(file){const objectPath=await uploadFileToSupabase(file,"memories");await supabaseJsonRequest("memories",{method:"POST",headers:{"Content-Type":"application/json",Prefer:"return=representation"},body:JSON.stringify({path:objectPath,media_type:file.type||"image",source_name:"Bronwyn"})});}
async function saveRemoteStory(owner,file){const objectPath=await uploadFileToSupabase(file,`stories/${owner}`);await supabaseJsonRequest("stories?on_conflict=owner",{method:"POST",headers:{"Content-Type":"application/json",Prefer:"resolution=merge-duplicates,return=representation"},body:JSON.stringify({owner,path:objectPath,media_type:file.type||"image",liked:false,expires_at:new Date(Date.now()+86400000).toISOString(),created_at:new Date().toISOString()})});}
async function updateRemoteStoryLike(owner,liked){await supabaseJsonRequest(`stories?owner=eq.${owner}`,{method:"PATCH",headers:{"Content-Type":"application/json",Prefer:"return=representation"},body:JSON.stringify({liked})});}
async function saveRemoteLocation(payload){await supabaseJsonRequest("locations?on_conflict=owner",{method:"POST",headers:{"Content-Type":"application/json",Prefer:"resolution=merge-duplicates,return=representation"},body:JSON.stringify(payload)});}
async function stopRemoteLocation(){await supabaseJsonRequest("locations?owner=eq.ntokozo",{method:"PATCH",headers:{"Content-Type":"application/json",Prefer:"return=representation"},body:JSON.stringify({is_active:false,updated_at:new Date().toISOString()})});}
async function deleteSupabaseObject(objectPath){if(!objectPath){return;}const response=await fetch(`${SUPABASE_PROJECT_URL}/storage/v1/object/${SUPABASE_BUCKET}/${objectPath}`,{method:"DELETE",headers:buildSupabaseHeaders()});if(!response.ok&&response.status!==404){throw new Error(`Storage delete failed: ${response.status}`);}}
async function deleteRemoteMemory(item){if(!item?.path){return;}await supabaseJsonRequest(`memories?path=eq.${encodeURIComponent(item.path)}`,{method:"DELETE",headers:{Prefer:"return=minimal"}});await deleteSupabaseObject(item.path);}
async function deleteRemoteStory(owner,path){await supabaseJsonRequest(`stories?owner=eq.${encodeURIComponent(owner)}`,{method:"DELETE",headers:{Prefer:"return=minimal"}});await deleteSupabaseObject(path);}
function getRandomReminder(){return reminderQuotes[Math.floor(Math.random()*reminderQuotes.length)];}
function getDayOfYear(){const start=new Date(new Date().getFullYear(),0,0);return Math.floor((new Date()-start)/86400000);}
function getUiThemeForToday(){const twoDayIndex=Math.floor(getDayOfYear()/2)%UI_THEMES.length;return UI_THEMES[twoDayIndex];}
function applyUiTheme(){const theme=getUiThemeForToday();const root=document.documentElement;Object.entries({"--panel":theme.panel,"--panel-border":theme.panelBorder,"--accent-strong":theme.accentStrong,"--accent-soft":theme.accentSoft,"--rose":theme.rose,"--bg-glow-a":theme.bgGlowA,"--bg-glow-b":theme.bgGlowB,"--bg-top":theme.bgTop,"--bg-mid":theme.bgMid,"--bg-bottom":theme.bgBottom,"--ambient-glow":theme.ambientGlow,"--button-primary-end":theme.buttonPrimaryEnd,"--button-secondary":theme.buttonSecondary,"--button-ghost":theme.buttonGhost,"--selected-primary-a":theme.selectedPrimaryA,"--selected-primary-b":theme.selectedPrimaryB,"--selected-secondary-a":theme.selectedSecondaryA,"--selected-secondary-b":theme.selectedSecondaryB,"--selected-tertiary-a":theme.selectedTertiaryA,"--selected-tertiary-b":theme.selectedTertiaryB,"--glass-overlay-top":"rgba(255,255,255,0.18)","--glass-overlay-bottom":"rgba(255,255,255,0.06)"}).forEach(([key,value])=>root.style.setProperty(key,value));}
function getHeartColorForToday(){const colors=["rgba(255,141,180,0.72)","rgba(110,199,255,0.74)","rgba(255,204,107,0.72)","rgba(151,255,184,0.72)","rgba(205,166,255,0.72)","rgba(255,155,116,0.72)"];return colors[getDayOfYear()%colors.length];}
function calculateStreak(history){if(!history.length){return 0;}const sorted=[...new Set(history.map((item)=>item.dateKey))].sort().reverse();let streak=0;let cursor=new Date(`${sorted[0]}T00:00:00`);for(const dayKey of sorted){const compare=new Date(`${dayKey}T00:00:00`);if(compare.toISOString().slice(0,10)!==cursor.toISOString().slice(0,10)){break;}streak+=1;cursor.setDate(cursor.getDate()-1);}return streak;}
function isSpecificDate(month,day){const today=new Date();return today.getMonth()+1===month&&today.getDate()===day;}
function getNthWeekdayOfMonth(year,monthIndex,weekday,nth){const first=new Date(year,monthIndex,1);const offset=(weekday-first.getDay()+7)%7;return 1+offset+((nth-1)*7);}
function getEasterDate(year){const a=year%19;const b=Math.floor(year/100);const c=year%100;const d=Math.floor(b/4);const e=b%4;const f=Math.floor((b+8)/25);const g=Math.floor((b-f+1)/3);const h=(19*a+b-d-g+15)%30;const i=Math.floor(c/4);const k=c%4;const l=(32+(2*e)+(2*i)-h-k)%7;const m=Math.floor((a+(11*h)+(22*l))/451);const month=Math.floor((h+l-(7*m)+114)/31);const day=((h+l-(7*m)+114)%31)+1;return {month,day};}
function getSeasonalLogoPath(){const today=new Date();const year=today.getFullYear();const month=today.getMonth()+1;const day=today.getDate();const easter=getEasterDate(year);const mothersDay=getNthWeekdayOfMonth(year,4,0,2);const fathersDay=getNthWeekdayOfMonth(year,5,0,3);const thanksgiving=getNthWeekdayOfMonth(year,10,4,4);if(month===FIRST_DATE_MONTH&&day===FIRST_DATE_DAY){return "holiday-logos/first-date-anniversary.png";}if(month===12&&day===BRONWYN_BIRTHDAY_DAY){return "holiday-logos/bronwyn-birthday.png";}if(month===2&&day===14){return "holiday-logos/valentines-day.png";}if(month===easter.month&&day===easter.day){return "holiday-logos/easter.png";}if(month===5&&day===mothersDay){return "holiday-logos/mothers-day.png";}if(month===6&&day===fathersDay){return "holiday-logos/fathers-day.png";}if(month===10&&day===31){return "holiday-logos/halloween.png";}if(month===11&&day===5){return "holiday-logos/bonfire-night.png";}if(month===11&&day===thanksgiving){return "holiday-logos/thanksgiving.png";}if(month===12&&day===24){return "holiday-logos/christmas-eve.png";}if(month===12&&day===25){return "holiday-logos/christmas-day.png";}if(month===12&&day===26){return "holiday-logos/boxing-day.png";}if(month===12&&day===31){return "holiday-logos/new-years-eve.png";}if(month===1&&day===1){return "holiday-logos/new-years-day.png";}if(month===NTOKOZO_BIRTHDAY_MONTH&&day===NTOKOZO_BIRTHDAY_DAY){return "holiday-logos/ntokozo-birthday.png";}return DEFAULT_LOGO_PATH;}
function applySeasonalLogo(){const logoPath=getSeasonalLogoPath();if(els.mainLogoImage){els.mainLogoImage.src=logoPath;}if(els.secretAlbumArt){els.secretAlbumArt.src=logoPath;}if(els.appFavicon){els.appFavicon.href=logoPath;} }
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

function getBackTargetForScreen(id){const usScreens=["bronwynSpace","voiceNotes","countdowns","relationshipCalendar","coupleQuiz","rewards","history","stats","complaints","gamesHub"];if(id==="profile"){return appState.previousScreenId==="usHub"?"usHub":"extraContent";}if(usScreens.includes(id)){return "usHub";}if(id==="proofLife"||id==="easterEgg"){return "extraContent";}if(id==="snakeGame"||id==="flappyGame"){return "gamesHub";}if(id==="result"||id==="analysis"){return "app";}if(id==="secretMeeting"||id==="secretTapScreen"){return appState.previousScreenId||"extraContent";}if(id==="threeDayStreak"||id==="sevenDayStreak"||id==="eggHintScreen"){return "result";}if(id==="jealousMode"){return appState.afterJealousTarget||"app";}if(id==="notificationPrompt"){return "intro";}return "";}
function updateGlobalBackButton(id){if(!els.globalBackBtn){return;}const hiddenScreens=["intro","app","extraContent","createHub","usHub","birthdayScreen","anniversaryPoem","nightModeScreen","midnightGlitchScreen"];const target=hiddenScreens.includes(id)?"":getBackTargetForScreen(id);els.globalBackBtn.classList.toggle("visible",Boolean(target));els.globalBackBtn.dataset.target=target||"";}
function getTabForScreen(id){if(["extraContent","proofLife"].includes(id)){return "home";}if(["app","analysis","result"].includes(id)){return "questions";}if(["createHub"].includes(id)){return "create";}if(["usHub","bronwynSpace","voiceNotes","countdowns","relationshipCalendar","coupleQuiz","rewards","history","stats","complaints","gamesHub","snakeGame","flappyGame"].includes(id)){return "us";}if(["profile"].includes(id)){return "profile";}return "";}
function updateBottomNav(id){const nav=document.getElementById("bottomNav");if(!nav){return;}const roots=["app","result","extraContent","createHub","usHub","profile"];const visible=roots.includes(id);nav.classList.toggle("visible",visible);const activeTab=getTabForScreen(id);nav.querySelectorAll(".bottom-nav-item").forEach((button)=>button.classList.toggle("active",button.dataset.tab===activeTab));}

function showScreen(id){if(appState.currentScreenId!==id){appState.previousScreenId=appState.currentScreenId;}appState.currentScreenId=id;document.querySelectorAll(".screen").forEach((screen)=>screen.classList.remove("active","has-global-back"));const target=document.getElementById(id);if(target){target.classList.add("active");}updateGlobalBackButton(id);updateBottomNav(id);if(target&&els.globalBackBtn?.classList.contains("visible")){target.classList.add("has-global-back");}els.questionProgressBar.classList.toggle("visible",["app","analysis","result"].includes(id));if(["birthdayScreen","anniversaryPoem","secretMeeting","threeDayStreak","sevenDayStreak","jealousMode","secretTapScreen","nightModeScreen","midnightGlitchScreen","eggHintScreen","easterEgg"].includes(id)){stopAmbientAudio();}if(!getGameScreenIds().includes(id)&&getGameScreenIds().includes(appState.previousScreenId)){stopAllGames();}if(id!=="extraContent"){hideMemoriesTutorial();closeMemoryGallerySheet();closeMemoryViewer();}if(id==="app"){renderQuestion();}if(id==="extraContent"){closeMemMenu();renderMemoryGallery();renderRelationshipHub();void refreshSharedContent({silent:true});setTimeout(maybeShowMemoriesTutorial,180);}}
function updateTopStatus(){const history=getHistory();const currentDay=getCurrentDayData();const totalDays=questionDays.length;const dayNumber=Math.min(appState.currentDayIndex+1,totalDays);const streak=calculateStreak(history);els.dayLabel.textContent=`Day ${dayNumber} of ${totalDays}`;els.themeDisplay.textContent=currentDay.theme;els.streakDisplay.textContent=`${streak} day${streak===1?"":"s"}`;}
function updateProgress(){const totalQuestions=getCurrentDayData().questions.length;els.progress.style.width=`${(appState.currentQuestionIndex/totalQuestions)*100}%`;}
function renderQuestion(){const dayData=getCurrentDayData();if(appState.completedToday){els.questionTag.textContent=`${dayData.tag} complete`;els.questionText.textContent="Today's questions have been answered.";els.questionHint.textContent="Come back tomorrow for a new set, or open the results and memories anytime.";els.questionCount.textContent=`${dayData.questions.length} / ${dayData.questions.length}`;els.answers.innerHTML=`<div class="history-item"><strong>Today already completed.</strong><p class="history-meta">You finished today's check-in already.</p></div>`;document.getElementById("skipBtn")?.setAttribute("disabled","disabled");els.progress.style.width="100%";return;}document.getElementById("skipBtn")?.removeAttribute("disabled");const question=dayData.questions[appState.currentQuestionIndex];const options=optionSets[question.type]||optionSets.warm;els.questionTag.textContent=`${dayData.tag} theme`;els.questionText.textContent=question.prompt;els.questionHint.textContent=question.type==="playful"?`Pick the answer that matches ${NTOKOZO_NAME} best today.`:"Choose the answer that feels most true.";els.questionCount.textContent=`${appState.currentQuestionIndex+1} / ${dayData.questions.length}`;els.answers.innerHTML="";options.forEach((option)=>{const button=document.createElement("button");button.type="button";button.className=`answer-btn ${option.tone}`;button.textContent=option.label;button.addEventListener("click",()=>recordAnswer(option,button));els.answers.appendChild(button);});updateProgress();}
function recordAnswer(option,buttonEl){const dayData=getCurrentDayData();const question=dayData.questions[appState.currentQuestionIndex];appState.answers.push({prompt:question.prompt,type:question.type,label:option.label,weight:option.weight});appState.noAnswerStreak=option.weight===1?appState.noAnswerStreak+1:0;const triggerJealous=appState.noAnswerStreak>=3;els.answers.querySelectorAll("button").forEach((button)=>{button.disabled=true;});if(buttonEl){buttonEl.classList.add("is-selected");}if(option.weight===1){try{noSound.currentTime=0;noSound.play().catch(()=>{});}catch{}}if(navigator.vibrate){navigator.vibrate(40);}window.setTimeout(()=>{appState.currentQuestionIndex+=1;if(appState.currentQuestionIndex>=dayData.questions.length){if(triggerJealous){appState.afterJealousTarget="analysis";appState.noAnswerStreak=0;if(navigator.vibrate){navigator.vibrate(90);}showScreen("jealousMode");return;}startAnalysis();return;}renderQuestion();if(triggerJealous){appState.afterJealousTarget="app";appState.noAnswerStreak=0;if(navigator.vibrate){navigator.vibrate(90);}showScreen("jealousMode");}},220);}
function clearAmbientTimers(){if(ambientFadeInTimer){clearInterval(ambientFadeInTimer);ambientFadeInTimer=null;}if(ambientFadeOutTimer){clearInterval(ambientFadeOutTimer);ambientFadeOutTimer=null;}if(ambientStopTimer){clearTimeout(ambientStopTimer);ambientStopTimer=null;}}
function fadeOutAmbientMusic(durationMs=4000){clearInterval(ambientFadeInTimer);ambientFadeInTimer=null;const startVolume=bgMusic.volume||0;if(!startVolume){bgMusic.pause();bgMusic.currentTime=0;return;}const startedAt=Date.now();ambientFadeOutTimer=setInterval(()=>{const elapsed=Date.now()-startedAt;const ratio=Math.min(1,elapsed/durationMs);bgMusic.volume=Math.max(0,startVolume*(1-ratio));if(ratio>=1){clearInterval(ambientFadeOutTimer);ambientFadeOutTimer=null;bgMusic.pause();bgMusic.currentTime=0;bgMusic.volume=0;}},120);}
function fadeInMusic(){clearAmbientTimers();bgMusic.pause();bgMusic.currentTime=0;bgMusic.volume=0;bgMusic.play().catch(()=>{});ambientFadeInTimer=setInterval(()=>{bgMusic.volume=Math.min(bgMusic.volume+0.04,0.28);if(bgMusic.volume>=0.28){clearInterval(ambientFadeInTimer);ambientFadeInTimer=null;}},180);ambientStopTimer=setTimeout(()=>{fadeOutAmbientMusic(4500);ambientStopTimer=null;},30000);}
function buildResult(){const total=appState.answers.reduce((sum,item)=>sum+item.weight,0);const max=appState.answers.length*3;const score=Math.round((total/max)*100);const summaryMap={warm:"warm energy",communication:"good communication",care:"thoughtful effort",closeness:"real closeness",playful:"playful chemistry"};const strongest=[...appState.answers].sort((a,b)=>b.weight-a.weight).slice(0,3).map((item)=>summaryMap[item.type]);let emoji="Soft smiles";let message=`You and ${NTOKOZO_NAME} feel easy today.`;if(score>=85){emoji="Major heart-eyes";message="Today felt strong, soft, and very in sync.";}else if(score>=70){emoji="Very good vibes";message=`The connection with ${NTOKOZO_NAME} feels healthy and warm today.`;}else if(score>=55){emoji="Mixed but promising";message="There is still something good here, just with a few rough edges.";}else{emoji="Needs more effort";message=`${NTOKOZO_NAME} probably needs to show up with more clarity, softness, or consistency.`;}return{score,emoji,message,summary:[...new Set(strongest)],theme:getCurrentDayData().theme,dayNumber:appState.currentDayIndex+1};}
function saveResult(result){const history=getHistory();const entry={id:`${getTodayKey()}-${result.dayNumber}`,dateLabel:formatDate(new Date()),dateKey:getTodayKey(),score:result.score,emoji:result.emoji,message:result.message,theme:result.theme,dayNumber:result.dayNumber};const existingIndex=history.findIndex((item)=>item.dateKey===entry.dateKey);if(existingIndex>=0){history[existingIndex]=entry;}else{history.push(entry);}setStorage(STORAGE_KEYS.history,history);const stats=getStats();stats.checkInsCompleted=(stats.checkInsCompleted||0)+1;saveStats(stats);}
function showResult(){const result=buildResult();appState.currentResult=result;appState.completedToday=true;saveResult(result);els.vibeScore.textContent=`${result.score}%`;els.vibeEmoji.textContent=result.emoji;els.vibeMessage.textContent=result.message;els.summaryPills.innerHTML="";result.summary.forEach((item)=>{const pill=document.createElement("span");pill.textContent=item;els.summaryPills.appendChild(pill);});els.progress.style.width="100%";renderHistory();renderStats();updateTopStatus();showScreen("result");const milestoneScreen=getPerfectScoreMilestone();if(milestoneScreen){setTimeout(()=>showScreen(milestoneScreen),900);return;}setTimeout(showEggHintScreen,900);}
function startAnalysis(){if(appState.analysisDone){return;}appState.analysisDone=true;fadeInMusic();showScreen("analysis");let stepIndex=0;els.analysisText.textContent=analysisSteps[stepIndex];const timer=setInterval(()=>{stepIndex+=1;if(stepIndex>=analysisSteps.length){clearInterval(timer);showResult();return;}els.analysisText.textContent=analysisSteps[stepIndex];},1100);}
function closeMemMenu(){els.memOptionsPanel?.classList.remove("active");els.memOverlay?.classList.remove("active");}
function renderHistory(){const history=[...getHistory()].sort((a,b)=>b.dateKey.localeCompare(a.dateKey));els.historyList.innerHTML="";if(!history.length){els.historyList.innerHTML='<div class="history-item"><strong>No check-ins saved yet.</strong><p class="history-meta">Finish a daily set of five questions and the score will appear here.</p></div>';return;}history.forEach((item)=>{const card=document.createElement("article");card.className="history-item";card.innerHTML=`<span class="history-day">Day ${item.dayNumber}</span><strong>${item.dateLabel} - ${item.theme}</strong><div class="history-score">${item.score}% - ${item.emoji}</div><p class="history-meta">${item.message}</p>`;els.historyList.appendChild(card);});}
function renderStats(){const stats=getStats();const memories=getAllMemories().length;const stories=Object.values(getStoryState()).filter(Boolean).length;const history=getHistory();const totalMinutes=Math.round((stats.secondsSpent||0)/60);const averageScore=history.length?Math.round(history.reduce((sum,item)=>sum+item.score,0)/history.length):0;const cards=[{label:"Visits",value:stats.visits||0},{label:"Minutes spent",value:totalMinutes},{label:"Check-ins",value:stats.checkInsCompleted||0},{label:"Memories saved",value:memories},{label:"Live stories",value:stories},{label:"Average vibe",value:history.length?`${averageScore}%`:"-"}];els.statsGrid.innerHTML="";cards.forEach((item)=>{const card=document.createElement("article");card.className="stat-card";card.innerHTML=`<span>${item.label}</span><strong>${item.value}</strong>`;els.statsGrid.appendChild(card);});els.statsChart.innerHTML="";history.slice(-7).forEach((item)=>{const bar=document.createElement("div");bar.className="chart-bar";bar.innerHTML=`<span class="history-meta">Day ${item.dayNumber} - ${item.score}%</span><div class="chart-bar-fill" style="width:${item.score}%"></div>`;els.statsChart.appendChild(bar);});if(!history.length){els.statsChart.innerHTML='<p class="history-meta">The graph appears after your first check-in.</p>';}}
function fileToDataUrl(file){return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=reject;reader.readAsDataURL(file);});}
function isRemovableMemory(item){return Boolean(item&&(item.path||item.source==="user"));}
async function deleteMemoryItem(item){if(!isRemovableMemory(item)){return;}if(appState.remoteSyncReady&&item.path){try{await deleteRemoteMemory(item);await refreshSharedContent({silent:true});}catch(error){console.warn("Remote memory delete failed",error);}}else{saveMemoryLocally(item);}appState.currentMemoryIndex=Math.max(0,Math.min(appState.currentMemoryIndex,getAllMemories().length-1));renderMemoryGallery();renderStats();renderProfile();}
function saveMemoryLocally(item){const next=getStorageArray(STORAGE_KEYS.memories).filter((entry)=>{const normalized=normalizeMemoryItem(entry);return !(normalized.src===item.src&&normalized.type===item.type);});setStorage(STORAGE_KEYS.memories,next);}
async function deleteCurrentStory(){const active=appState.storyQueue[appState.storyIndex];if(!active||!active.owner){return;}if(appState.remoteSyncReady&&active.path){try{await deleteRemoteStory(active.owner,active.path);await refreshSharedContent({silent:true});}catch(error){console.warn("Remote story delete failed",error);}}else{const stories=getLocalStoryState();stories[active.owner]=null;setStorage(STORAGE_KEYS.stories,stories);}renderStoryChips();renderStats();renderProfile();closeStoryViewer();}
function deleteCustomPlaylist(index){const playlists=getStorageArray(STORAGE_KEYS.playlists);playlists.splice(index,1);setStorage(STORAGE_KEYS.playlists,playlists);renderCustomPlaylists();renderProfile();}
function deleteCountdownItem(id){saveCountdowns(getCountdowns().filter((item)=>item.id!==id));renderCountdowns();renderRelationshipHub();}
function openMemoryViewer(item){els.memoryViewerContent.innerHTML="";const isVideo=item.type&&item.type.startsWith("video");const media=document.createElement(isVideo?"video":"img");media.src=item.src;media.className="memory-viewer-media";if(isVideo){media.controls=true;media.autoplay=true;media.playsInline=true;}else{media.alt="Saved relationship memory";}els.memoryViewerContent.appendChild(media);els.memoryViewer.classList.add("active");}
function closeMemoryViewer(){const activeMedia=els.memoryViewerContent.querySelector("video");if(activeMedia){activeMedia.pause();}els.memoryViewerContent.innerHTML="";els.memoryViewer.classList.remove("active");}
function renderMemoryGallery(){const items=getAllMemories();els.memoryGallery.innerHTML="";items.forEach((item)=>{const card=document.createElement("button");card.type="button";card.className="memory-item";const isVideo=item.type&&item.type.startsWith("video");const media=document.createElement(isVideo?"video":"img");media.src=item.src;media.className="memory-media";if(isVideo){media.muted=true;media.playsInline=true;}else{media.alt="Saved relationship memory";}const badge=document.createElement("span");badge.className="memory-item-badge";badge.textContent=isVideo?"Video":"Photo";card.appendChild(media);card.appendChild(badge);if(isRemovableMemory(item)){const deleteBtn=document.createElement("button");deleteBtn.type="button";deleteBtn.className="memory-delete-btn";deleteBtn.innerHTML='<i class="fas fa-trash"></i>';deleteBtn.setAttribute("aria-label","Delete memory");deleteBtn.addEventListener("click",async(event)=>{event.stopPropagation();await deleteMemoryItem(item);});card.appendChild(deleteBtn);}card.addEventListener("click",()=>openMemoryViewer(item));els.memoryGallery.appendChild(card);});const addTile=document.createElement("button");addTile.type="button";addTile.className="memory-add-tile";addTile.innerHTML=' <i class="fas fa-plus"></i><span>Add memory</span>';addTile.addEventListener("click",()=>els.memoryUpload.click());els.memoryGallery.appendChild(addTile);renderMemorySwipeDeck();}
function getMemoryCardMeta(index,total,item){const kind=item.type&&item.type.startsWith("video")?"Video":"Photo";return{title:`${kind} ${index+1}`,detail:`${item.source==="user"?"Added by Bronwyn":"Saved together"} - ${index+1} of ${total}`};}
function renderMemorySwipeDeck(direction=0){if(!els.memorySwipeStage){return;}const items=getAllMemories();const maxIndex=items.length;if(appState.currentMemoryIndex>maxIndex){appState.currentMemoryIndex=maxIndex;}if(appState.currentMemoryIndex<0){appState.currentMemoryIndex=0;}els.memorySwipeStage.innerHTML="";if(!items.length||appState.currentMemoryIndex===items.length){const end=document.createElement("div");end.className="memory-swipe-end";end.innerHTML=`<div class="memory-swipe-plus"><i class="fas fa-plus"></i></div><h3>Add your own memories</h3><p class="history-meta">You reached the end of the wall. Add photos or videos so this space keeps growing.</p><button class="primary-btn" type="button">Add photo or video</button>`;end.querySelector("button")?.addEventListener("click",()=>els.memoryUpload.click());els.memorySwipeStage.appendChild(end);return;}const item=items[appState.currentMemoryIndex];const card=document.createElement("div");card.className=`memory-swipe-card${direction>0?" is-animating-left":direction<0?" is-animating-right":""}`;const isVideo=item.type&&item.type.startsWith("video");const media=document.createElement(isVideo?"video":"img");media.src=item.src;media.className="memory-swipe-media";if(isVideo){media.controls=true;media.playsInline=true;}else{media.alt="Relationship memory";}const meta=getMemoryCardMeta(appState.currentMemoryIndex,items.length,item);const overlay=document.createElement("div");overlay.className="memory-swipe-overlay";overlay.innerHTML=`<div class="memory-swipe-meta"><strong>${meta.title}</strong><span>${meta.detail}</span></div><div class="memory-swipe-actions">${isRemovableMemory(item)?`<button class="memory-nav-btn memory-delete-nav-btn" type="button" aria-label="Delete memory"><i class="fas fa-trash"></i></button>`:""}<button class="memory-nav-btn" type="button" aria-label="Previous memory"><i class="fas fa-arrow-left"></i></button><button class="memory-nav-btn" type="button" aria-label="Next memory"><i class="fas fa-arrow-right"></i></button></div>`;card.appendChild(media);card.appendChild(overlay);const buttons=[...overlay.querySelectorAll("button")];const deleteBtn=buttons.find((button)=>button.classList.contains("memory-delete-nav-btn"));const navButtons=buttons.filter((button)=>!button.classList.contains("memory-delete-nav-btn"));const [prevBtn,nextBtn]=navButtons;deleteBtn?.addEventListener("click",async(event)=>{event.stopPropagation();await deleteMemoryItem(item);});prevBtn?.addEventListener("click",(event)=>{event.stopPropagation();stepMemoryDeck(-1);});nextBtn?.addEventListener("click",(event)=>{event.stopPropagation();stepMemoryDeck(1);});card.addEventListener("click",(event)=>{if(event.target.closest("button")||event.target.tagName==="VIDEO"){return;}openMemoryViewer(item);});els.memorySwipeStage.appendChild(card);}
function stepMemoryDeck(direction){const items=getAllMemories();const maxIndex=items.length;appState.currentMemoryIndex=Math.min(maxIndex,Math.max(0,appState.currentMemoryIndex+direction));renderMemorySwipeDeck(direction);}
function openMemoryGallerySheet(){els.memoryGallerySheet?.classList.add("active");}
function closeMemoryGallerySheet(){els.memoryGallerySheet?.classList.remove("active");}
function getTutorialSteps(){return[{label:"Stories",text:"These circles are the daily proof-of-life stories. Tap the + on B or N to post one.",target:els.bronwynStoryBtn},{label:"Photo wall",text:"This is the swipe wall. Move left or right through your memories here.",target:els.memorySwipeStage},{label:"Gallery + menu",text:"Use Gallery for every saved memory, and Profile for the rest of the app.",target:els.memoryGalleryOpen}];}
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
function showStoryItem(){const active=appState.storyQueue[appState.storyIndex];if(!active){closeStoryViewer();return;}els.proofStoryEmpty.style.display="none";els.proofStoryPreview.style.display="block";els.proofStoryPreview.src=active.src;els.storyDeleteBtn?.classList.add("active");els.storyLikeBtn?.classList.toggle("active",Boolean(active.liked));els.proofStoryTimerFill.style.width="0%";appState.storyPaused=false;appState.storyProgressMs=0;appState.storyStartTimestamp=0;cancelAnimationFrame(appState.storyRafId);const tick=(timestamp)=>{if(!appState.storyStartTimestamp){appState.storyStartTimestamp=timestamp;}if(appState.storyPaused){appState.storyStartTimestamp=timestamp;appState.storyRafId=requestAnimationFrame(tick);return;}const delta=timestamp-appState.storyStartTimestamp;appState.storyStartTimestamp=timestamp;appState.storyProgressMs+=delta;const percent=Math.min(100,(appState.storyProgressMs/3800)*100);els.proofStoryTimerFill.style.width=`${percent}%`;if(appState.storyProgressMs>=3800){advanceStory(1);return;}appState.storyRafId=requestAnimationFrame(tick);};appState.storyRafId=requestAnimationFrame(tick);}
function advanceStory(direction){cancelAnimationFrame(appState.storyRafId);appState.storyRafId=null;appState.storyIndex+=direction;if(appState.storyIndex<0||appState.storyIndex>=appState.storyQueue.length){closeStoryViewer();return;}showStoryItem();}
function openStory(owner){appState.activeStoryOwner=owner;const queue=getLiveStoryQueue(owner);if(!queue.length){launchStoryUpload(owner);return;}appState.storyQueue=queue;appState.storyIndex=0;showScreen("proofLife");showStoryItem();}
async function toggleCurrentStoryLike(){const active=appState.storyQueue[appState.storyIndex];if(!active||!active.owner){return;}if(appState.remoteSyncReady){try{await updateRemoteStoryLike(active.owner,!active.liked);await refreshSharedContent({silent:true});appState.storyQueue=getLiveStoryQueue(active.owner);appState.storyIndex=Math.min(appState.storyIndex,Math.max(0,appState.storyQueue.length-1));showStoryItem();return;}catch(error){console.warn("Remote like update failed",error);}}const stories=getStoryState();if(!stories[active.owner]){return;}stories[active.owner].liked=!stories[active.owner].liked;setStorage(STORAGE_KEYS.stories,stories);appState.storyQueue=getLiveStoryQueue(active.owner);appState.storyIndex=Math.min(appState.storyIndex,Math.max(0,appState.storyQueue.length-1));showStoryItem();}
async function handleUpload(event,key){const[file]=event.target.files||[];if(!file){return;}try{if(REMOTE_ENABLED){if(key===STORAGE_KEYS.memories){await saveRemoteMemory(file);await refreshSharedContent({silent:true});appState.currentMemoryIndex=Math.max(0,getAllMemories().length-1);renderMemoryGallery();}else{await saveRemoteStory(appState.activeStoryOwner,file);await refreshSharedContent({silent:true});openStory(appState.activeStoryOwner);}renderStats();event.target.value="";return;}}catch(error){console.warn("Remote upload failed, using local storage fallback",error);}const src=await fileToDataUrl(file);if(key===STORAGE_KEYS.memories){const existing=getStorageArray(key);existing.push({src,type:file.type||"image",source:"user"});setStorage(key,existing.slice(-24));appState.currentMemoryIndex=Math.max(0,getAllMemories().length-1);renderMemoryGallery();}else{const stories=getLocalStoryState();stories[appState.activeStoryOwner]={src,ts:Date.now(),type:file.type||"image"};setStorage(STORAGE_KEYS.stories,stories);renderStoryChips();openStory(appState.activeStoryOwner);}renderStats();event.target.value="";}
function createHeart(){const heart=document.createElement("div");heart.className="heart";heart.style.left=`${Math.random()*100}vw`;heart.style.animationDuration=`${5.5+Math.random()*2.4}s`;document.getElementById("heart-container").appendChild(heart);setTimeout(()=>heart.remove(),8000);}
function renderCustomPlaylists(){const playlists=getStorageArray(STORAGE_KEYS.playlists);els.customPlaylistList.innerHTML="";if(!playlists.length){els.customPlaylistList.innerHTML='<p class="history-meta">Add your own playlists here.</p>';return;}playlists.forEach((item,index)=>{const row=document.createElement("div");row.className="playlist-row";row.innerHTML=`<a href="${item.url}" target="_blank" rel="noreferrer">${item.name}</a><button class="secondary-btn delete-inline-btn" type="button" aria-label="Delete playlist"><i class="fas fa-trash"></i></button>`;row.querySelector("button")?.addEventListener("click",()=>deleteCustomPlaylist(index));els.customPlaylistList.appendChild(row);});}
function formatLocationTime(value){if(!value){return "Updated just now";}const date=new Date(value);if(Number.isNaN(date.getTime())){return "Updated recently";}return `Updated ${date.toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"})}`;}
function renderLocationCard(){if(!els.boyfriendMap||!els.locationStatus||!els.locationUpdated||!els.openInAppleMaps){return;}const location=appState.remoteLocation;const hasLiveLocation=Boolean(location&&Number.isFinite(Number(location.latitude))&&Number.isFinite(Number(location.longitude))&&location.is_active!==false);if(!hasLiveLocation){els.boyfriendMap.removeAttribute("src");els.locationStatus.textContent=appState.locationSharing?"Looking for a live location...":"No live location yet.";els.locationUpdated.textContent="Waiting for a live location.";els.openInAppleMaps.href="#";els.openInAppleMaps.setAttribute("aria-disabled","true");els.openInAppleMaps.classList.add("is-disabled");return;}const latitude=Number(location.latitude);const longitude=Number(location.longitude);const delta=0.008;els.boyfriendMap.src=`https://www.openstreetmap.org/export/embed.html?bbox=${longitude-delta}%2C${latitude-delta}%2C${longitude+delta}%2C${latitude+delta}&layer=mapnik&marker=${latitude}%2C${longitude}`;els.locationStatus.textContent=location.accuracy?`Live location active. Accuracy about ${Math.round(location.accuracy)}m.`:"Live location active.";els.locationUpdated.textContent=formatLocationTime(location.updated_at);els.openInAppleMaps.href=`https://maps.apple.com/?ll=${latitude},${longitude}&q=${encodeURIComponent("Ntokozo")}`;els.openInAppleMaps.removeAttribute("aria-disabled");els.openInAppleMaps.classList.remove("is-disabled");}
function renderDailyMotivation(){if(!els.motivationQuote||!els.motivationAuthor||!els.dailyMotivationCard){return;}const palettes=[["#ff7096","#ffd166"],["#7c5cff","#4fc3ff"],["#ff6b6b","#ff9f43"],["#ffd93d","#ff7a59"],["#00c2a8","#5b8cff"],["#ff5fa2","#8f7dff"]];const quote=MOTIVATION_QUOTES[getDayOfYear()%MOTIVATION_QUOTES.length];const palette=palettes[getDayOfYear()%palettes.length];els.motivationQuote.textContent=`"${quote.text}"`;els.motivationAuthor.textContent=`- ${quote.author}`;els.dailyMotivationCard.style.setProperty("--motivation-a",palette[0]);els.dailyMotivationCard.style.setProperty("--motivation-b",palette[1]);}
function openComplaintWhatsApp(){const text=(els.complaintText?.value||"").trim();if(!text){return;}window.open(`https://wa.me/27608793239?text=${encodeURIComponent(text)}`,"_blank","noopener");}
function createProfileRows(items,target){if(!target){return;}target.innerHTML="";items.forEach((item)=>{const row=document.createElement("div");row.className="profile-detail-row";row.innerHTML=`<span>${item.label}</span><strong>${item.value}</strong>`;target.appendChild(row);});}
function resetSecretWheelResult(){if(!els.secretWheelResult){return;}els.secretWheelResult.innerHTML="<strong>Hidden reward ready</strong><p>Tap spin and let the wheel pick something cute for you two.</p>";}
function spinSecretWheel(){if(!els.secretSpinWheel||!els.secretWheelResult||secretWheelSpinning){return;}secretWheelSpinning=true;if(els.spinSecretWheel){els.spinSecretWheel.disabled=true;}const segmentAngle=360/SECRET_WHEEL_OPTIONS.length;const index=Math.floor(Math.random()*SECRET_WHEEL_OPTIONS.length);const centerAngle=index*segmentAngle+segmentAngle/2;secretWheelRotation+=360*5+(360-centerAngle);els.secretSpinWheel.style.transform=`rotate(${secretWheelRotation}deg)`;els.secretWheelResult.innerHTML="<strong>Spinning...</strong><p>Let the hidden wheel decide something cute for you two.</p>";setTimeout(()=>{const choice=SECRET_WHEEL_OPTIONS[index];els.secretWheelResult.innerHTML=`<strong>It picked: ${choice}</strong><p>Keep it, spin again, or use it as your next anniversary or date idea.</p>`;secretWheelSpinning=false;if(els.spinSecretWheel){els.spinSecretWheel.disabled=false;}},4900);}
function renderProfile(){const stats=getStats();const history=getHistory();const stories=Object.values(getStoryState()).filter(Boolean).length;const playlists=getStorageArray(STORAGE_KEYS.playlists).length;const minutes=Math.round((stats.secondsSpent||0)/60);const avg=history.length?Math.round(history.reduce((sum,item)=>sum+item.score,0)/history.length):0;const joined=stats.daysOpened&&stats.daysOpened.length?formatDate(`${stats.daysOpened[0]}T00:00:00`):"Today";const lastVisit=stats.lastVisitDate?formatDate(`${stats.lastVisitDate}T00:00:00`):"Today";const notificationAllowed=("Notification" in window)&&Notification.permission==="granted";if(els.profileSubtitle){els.profileSubtitle.textContent=`${history.length?`Average vibe ${avg}%`:"Start your first daily check-in."}`;}if(els.profileNotificationTag){els.profileNotificationTag.textContent=`Notifications ${notificationAllowed?"on":"off"}`;}if(els.profileStoryTag){els.profileStoryTag.textContent=`${stories} live stor${stories===1?"y":"ies"}`;}if(els.profileQuickStats){els.profileQuickStats.innerHTML="";[{label:"Visits",value:stats.visits||0},{label:"Minutes",value:minutes},{label:"Check-ins",value:stats.checkInsCompleted||0},{label:"Playlists",value:playlists}].forEach((item)=>{const card=document.createElement("article");card.className="profile-mini-stat";card.innerHTML=`<span>${item.label}</span><strong>${item.value}</strong>`;els.profileQuickStats.appendChild(card);});}createProfileRows([{label:"Member since",value:joined},{label:"Last active",value:lastVisit},{label:"Memories saved",value:getAllMemories().length},{label:"Live stories",value:stories||0},{label:"Average vibe",value:history.length?`${avg}%`:"-"}],els.profileDetailList);createProfileRows([{label:"Notifications",value:notificationAllowed?"Allowed":"Off"},{label:"Location card",value:appState.remoteLocation?"Live":"Waiting"},{label:"Custom playlists",value:playlists||0},{label:"Theme streak",value:`${calculateStreak(history)} days`}],els.profilePreferenceList);}
function getBronwynSpaceState(){return getStorageObject(STORAGE_KEYS.bronwynSpace,{mood:"",note:"",updatedAt:""});}
function saveBronwynSpaceState(state){setStorage(STORAGE_KEYS.bronwynSpace,state);}
function getVoiceNotes(){return getStorageArray(STORAGE_KEYS.voiceNotes);}
function saveVoiceNotes(notes){setStorage(STORAGE_KEYS.voiceNotes,notes.slice(-8));}
function getCountdowns(){const saved=getStorageArray(STORAGE_KEYS.countdowns);return saved.length?saved:DEFAULT_COUNTDOWNS;}
function saveCountdowns(items){setStorage(STORAGE_KEYS.countdowns,items);}
function getCalendarEvents(){return getStorageArray(STORAGE_KEYS.calendar).sort((a,b)=>String(a.date).localeCompare(String(b.date)));}
function saveCalendarEvents(items){setStorage(STORAGE_KEYS.calendar,items);}
function getCoupleQuizQuestions(){return getStorageArray(STORAGE_KEYS.coupleQuiz);}
function saveCoupleQuizQuestions(items){setStorage(STORAGE_KEYS.coupleQuiz,items.slice(-60));}
function getMoodResponse(mood){const responses={"glowing":"Keep that softness. If today feels light, let yourself enjoy it without shrinking it.","okay":"Okay is still valid. You do not need to perform a better mood for anyone.","overwhelmed":"Take the day gently. One small win, one breath, one soft moment at a time is enough.","tired":"Rest is not laziness. Slow down and let the app meet you where you are.","missing you":"Missing someone means the connection matters. Let that be warm instead of heavy today.","proud":"Stay in that feeling. You deserve to notice your own effort and growth."};return responses[mood]||"Pick a mood and this space will respond to you first.";}
function formatDistanceLabel(value){if(!value){return "No date set yet.";}const target=new Date(value);if(Number.isNaN(target.getTime())){return "Invalid date.";}const diff=target.getTime()-Date.now();const abs=Math.abs(diff);const days=Math.floor(abs/86400000);const hours=Math.floor((abs%86400000)/3600000);const prefix=diff>=0?"in":"";const suffix=diff<0?"ago":"";return `${prefix} ${days}d ${hours}h ${suffix}`.replace(/\s+/g," ").trim();}
function renderMoodChoices(targetId,selectedMood,onSelect){const target=document.getElementById(targetId);if(!target){return;}target.innerHTML="";RELATIONSHIP_MOODS.forEach((mood)=>{const button=document.createElement("button");button.type="button";button.className=`mood-chip${selectedMood===mood?" active":""}`;button.textContent=mood;button.addEventListener("click",()=>onSelect(mood));target.appendChild(button);});}
function renderBronwynSpace(){const state=getBronwynSpaceState();const headline=document.getElementById("moodHeadline");const preview=document.getElementById("moodResponsePreview");const responseCard=document.getElementById("moodResponseCard");const noteField=document.getElementById("bronwynNote");if(headline){headline.textContent=state.mood?`Today feels ${state.mood}`:"How are you feeling today?";}if(preview){preview.textContent=getMoodResponse(state.mood);}if(responseCard){responseCard.innerHTML=`<strong>${state.mood?`Mood: ${state.mood}`:"Mood response"}</strong><p>${getMoodResponse(state.mood)}</p>${state.updatedAt?`<span class="history-meta">Updated ${formatLocationTime(state.updatedAt).replace("Updated ","")}</span>`:""}`;}if(noteField){noteField.value=state.note||"";}renderMoodChoices("moodChipRow",state.mood,(mood)=>{const next={...getBronwynSpaceState(),mood,updatedAt:new Date().toISOString()};saveBronwynSpaceState(next);renderBronwynSpace();});renderMoodChoices("moodSelector",state.mood,(mood)=>{const next={...getBronwynSpaceState(),mood,updatedAt:new Date().toISOString()};saveBronwynSpaceState(next);renderBronwynSpace();});}
function renderCountdowns(){
const preview=document.getElementById("countdownPreviewList");
const editor=document.getElementById("countdownEditorList");
const items=getCountdowns();
if(preview){
  preview.innerHTML="";
  items.forEach((item)=>{
    const row=document.createElement("div");
    row.className="countdown-item";
    const title=document.createElement("strong");
    title.textContent=item.title;
    const meta=document.createElement("p");
    meta.className="countdown-meta";
    meta.textContent=formatDistanceLabel(item.date);
    row.appendChild(title);
    row.appendChild(meta);
    preview.appendChild(row);
  });
}
if(editor){
  editor.innerHTML="";
  items.forEach((item)=>{
    const card=document.createElement("div");
    card.className="countdown-item countdown-edit-grid";
    const titleInput=document.createElement("input");
    titleInput.type="text";
    titleInput.dataset.field="title";
    titleInput.dataset.id=item.id;
    titleInput.value=item.title||"";
    const dateInput=document.createElement("input");
    dateInput.type="datetime-local";
    dateInput.dataset.field="date";
    dateInput.dataset.id=item.id;
    dateInput.value=item.date||"";
    const detailsInput=document.createElement("input");
    detailsInput.type="text";
    detailsInput.dataset.field="details";
    detailsInput.dataset.id=item.id;
    detailsInput.value=item.details||"";
    const actions=document.createElement("div");
    actions.className="hub-mini-actions";
    const saveBtn=document.createElement("button");
    saveBtn.type="button";
    saveBtn.className="primary-btn save-countdown-btn";
    saveBtn.dataset.id=item.id;
    saveBtn.textContent="Save";
    const deleteBtn=document.createElement("button");
    deleteBtn.type="button";
    deleteBtn.className="secondary-btn delete-countdown-btn";
    deleteBtn.dataset.id=item.id;
    deleteBtn.textContent="Delete";
    actions.appendChild(saveBtn);
    actions.appendChild(deleteBtn);
    const meta=document.createElement("p");
    meta.className="countdown-meta";
    meta.textContent=formatDistanceLabel(item.date)+(item.details?" - "+item.details:"");
    card.appendChild(titleInput);
    card.appendChild(dateInput);
    card.appendChild(detailsInput);
    card.appendChild(actions);
    card.appendChild(meta);
    editor.appendChild(card);
  });
  editor.querySelectorAll(".save-countdown-btn").forEach((button)=>{
    button.addEventListener("click",()=>{
      const id=button.dataset.id;
      const next=getCountdowns().map((item)=>item.id!==id?item:{...item,title:editor.querySelector(`input[data-id="${id}"][data-field="title"]`).value.trim()||item.title,date:editor.querySelector(`input[data-id="${id}"][data-field="date"]`).value,details:editor.querySelector(`input[data-id="${id}"][data-field="details"]`).value.trim()});
      saveCountdowns(next);
      renderCountdowns();
      renderRelationshipHub();
    });
  });
  editor.querySelectorAll(".delete-countdown-btn").forEach((button)=>button.addEventListener("click",()=>deleteCountdownItem(button.dataset.id)));
}
}
function renderVoiceNotes(){const list=document.getElementById("voiceNotesList");const preview=document.getElementById("voiceNotesPreview");const notes=getVoiceNotes();if(preview){preview.textContent=notes.length?`${notes.length} saved voice note${notes.length===1?"":"s"}.`:"Record short voice notes and keep them here.";}if(!list){return;}list.innerHTML="";if(!notes.length){list.innerHTML='<div class="voice-note-item"><strong>No voice notes yet.</strong><p>Record one and it will stay here.</p></div>';return;}notes.slice().reverse().forEach((note)=>{const card=document.createElement("div");card.className="voice-note-item";card.innerHTML=`<strong>${note.title||"Voice note"}</strong><p>${formatDate(note.createdAt||Date.now())}</p><audio controls src="${note.src}"></audio><button class="secondary-btn delete-voice-note" data-id="${note.id}" type="button">Delete</button>`;list.appendChild(card);});list.querySelectorAll(".delete-voice-note").forEach((button)=>button.addEventListener("click",()=>{saveVoiceNotes(getVoiceNotes().filter((note)=>note.id!==button.dataset.id));renderVoiceNotes();renderRewards();renderRelationshipHub();}));}
function blobToDataUrl(blob){return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=reject;reader.readAsDataURL(blob);});}
async function startVoiceRecording(){const status=document.getElementById("voiceRecorderStatus");if(!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)){if(status){status.textContent="Voice recording is not supported on this device.";}return;}if(typeof MediaRecorder==="undefined"){if(status){status.textContent="Voice recording is not supported in this browser.";}return;}voiceRecorderStream=await navigator.mediaDevices.getUserMedia({audio:true});voiceRecorderChunks=[];voiceRecorder=new MediaRecorder(voiceRecorderStream);voiceRecorder.ondataavailable=(event)=>{if(event.data&&event.data.size){voiceRecorderChunks.push(event.data);}};voiceRecorder.onstop=async()=>{const blob=new Blob(voiceRecorderChunks,{type:voiceRecorder.mimeType||"audio/webm"});const src=await blobToDataUrl(blob);const notes=getVoiceNotes();notes.push({id:`voice-${Date.now()}`,src,createdAt:new Date().toISOString(),title:`Voice note ${notes.length+1}`});saveVoiceNotes(notes);voiceRecorderStream?.getTracks().forEach((track)=>track.stop());voiceRecorderStream=null;voiceRecorder=null;voiceRecorderChunks=[];if(status){status.textContent="Voice note saved.";}renderVoiceNotes();renderRewards();renderRelationshipHub();};voiceRecorder.start();if(status){status.textContent="Recording... tap stop when you're done.";}}
function stopVoiceRecording(){const status=document.getElementById("voiceRecorderStatus");if(voiceRecorder&&voiceRecorder.state!=="inactive"){voiceRecorder.stop();if(status){status.textContent="Saving voice note...";}}}
function getUnlockedRewards(){const stats=getStats();const memories=getAllMemories().length;const stories=Object.values(getStoryState()).filter(Boolean).length;const voiceNotes=getVoiceNotes().length;return[{title:"Three check-ins",note:"You kept showing up. That matters more than perfection.",unlocked:(stats.checkInsCompleted||0)>=3},{title:"Seven positive days",note:"There is something steady here. Keep building on the soft parts.",unlocked:getPositiveDayCount()>=7},{title:"Ten memories saved",note:"You are collecting proof that this relationship has a life of its own.",unlocked:memories>=10},{title:"First voice note",note:"A voice changes everything. Tiny sounds become tiny keepsakes.",unlocked:voiceNotes>=1},{title:"Two live stories",note:"Daily life is starting to feel shared, not just visited.",unlocked:stories>=2}];}
function renderRewards(){const rewards=getUnlockedRewards();const list=document.getElementById("rewardsList");const preview=document.getElementById("rewardsPreview");const unlockedCount=rewards.filter((reward)=>reward.unlocked).length;if(preview){preview.textContent=`${unlockedCount} of ${rewards.length} rewards unlocked.`;}if(!list){return;}list.innerHTML="";rewards.forEach((reward)=>{const card=document.createElement("div");card.className=`reward-item ${reward.unlocked?"is-unlocked":"is-locked"}`;card.innerHTML=`<strong>${reward.title}</strong><p>${reward.unlocked?reward.note:"Keep using the app together to unlock this."}</p><span class="reward-pill">${reward.unlocked?"Unlocked":"Locked"}</span>`;list.appendChild(card);});}
function renderCalendar(){const list=document.getElementById("calendarEventsList");if(!list){return;}const events=getCalendarEvents();list.innerHTML="";if(!events.length){list.innerHTML='<div class="calendar-event"><strong>No events yet.</strong><p>Add a date, plan, anniversary, or reminder.</p></div>';return;}events.forEach((event)=>{const card=document.createElement("div");card.className="calendar-event";card.innerHTML=`<strong>${event.title}</strong><p>${formatDate(event.date)} - ${event.type||"Event"}</p><p>${event.notes||""}</p><div class="hub-mini-actions"><button class="secondary-btn edit-calendar-event" data-id="${event.id}" type="button">Edit</button><button class="secondary-btn delete-calendar-event" data-id="${event.id}" type="button">Delete</button></div>`;list.appendChild(card);});list.querySelectorAll(".edit-calendar-event").forEach((button)=>button.addEventListener("click",()=>{const event=getCalendarEvents().find((item)=>item.id===button.dataset.id);if(!event){return;}document.getElementById("calendarTitle").value=event.title||"";document.getElementById("calendarDate").value=event.date||"";document.getElementById("calendarType").value=event.type||"";document.getElementById("calendarNotes").value=event.notes||"";document.getElementById("saveCalendarEvent").dataset.editingId=event.id;}));list.querySelectorAll(".delete-calendar-event").forEach((button)=>button.addEventListener("click",()=>{saveCalendarEvents(getCalendarEvents().filter((event)=>event.id!==button.dataset.id));renderCalendar();}));}
function clearCalendarForm(){document.getElementById("calendarTitle").value="";document.getElementById("calendarDate").value="";document.getElementById("calendarType").value="";document.getElementById("calendarNotes").value="";document.getElementById("saveCalendarEvent").dataset.editingId="";}
function saveCalendarFromForm(){const title=document.getElementById("calendarTitle").value.trim();const date=document.getElementById("calendarDate").value;const type=document.getElementById("calendarType").value.trim();const notes=document.getElementById("calendarNotes").value.trim();if(!title||!date){return;}const editingId=document.getElementById("saveCalendarEvent").dataset.editingId||"";const items=getCalendarEvents();if(editingId){const next=items.map((item)=>item.id!==editingId?item:{...item,title,date,type,notes});saveCalendarEvents(next);}else{items.push({id:`event-${Date.now()}`,title,date,type,notes});saveCalendarEvents(items);}clearCalendarForm();renderCalendar();}
function renderCoupleQuiz(){const list=document.getElementById("quizQuestionList");const concepts=document.querySelector("#coupleQuiz .quiz-concepts-grid");if(concepts){concepts.innerHTML="";BUILTIN_COUPLE_QUESTION_BANK.forEach((category)=>{const card=document.createElement("article");card.className="profile-card quiz-category-card";card.innerHTML=`<p class="eyebrow">${category.questions.length} prompts</p><h2>${category.title}</h2><p class="history-meta">${category.description}</p>`;concepts.appendChild(card);});}if(!list){return;}const questions=getCoupleQuizQuestions();list.innerHTML="";BUILTIN_COUPLE_QUESTION_BANK.forEach((category)=>{const section=document.createElement("section");section.className="quiz-bank-section";const header=document.createElement("div");header.className="quiz-bank-header";header.innerHTML=`<p class="eyebrow">${category.questions.length} questions</p><h2>${category.title}</h2><p class="history-meta">${category.description}</p>`;section.appendChild(header);const items=document.createElement("div");items.className="quiz-bank-items";category.questions.forEach((prompt,index)=>{const card=document.createElement("article");card.className="quiz-question-item quiz-bank-item";card.innerHTML=`<span class="quiz-question-number">${index+1}</span><strong>${prompt}</strong>`;items.appendChild(card);});section.appendChild(items);list.appendChild(section);});const customSection=document.createElement("section");customSection.className="quiz-bank-section quiz-custom-section";customSection.innerHTML='<div class="quiz-bank-header"><p class="eyebrow">Custom pack</p><h2>Your own quiz questions</h2><p class="history-meta">Use the form above to add your own multiple-choice questions for the two of you.</p></div>';const customItems=document.createElement("div");customItems.className="quiz-bank-items";if(!questions.length){customItems.innerHTML='<div class="quiz-question-item quiz-empty-state"><strong>No custom quiz questions yet.</strong><p>Add your own pack below when you are ready.</p></div>';}else{questions.forEach((question)=>{const card=document.createElement("div");card.className="quiz-question-item";card.innerHTML=`<strong>${question.prompt}</strong><div class="quiz-option-list"><span>${question.options[0]}</span><span>${question.options[1]}</span><span>${question.options[2]}</span></div><p>Intended answer: ${question.options[question.answerIndex]||"Option 1"}</p><div class="hub-mini-actions"><button class="secondary-btn edit-quiz-question" data-id="${question.id}" type="button">Edit</button><button class="secondary-btn delete-quiz-question" data-id="${question.id}" type="button">Delete</button></div>`;customItems.appendChild(card);});}customSection.appendChild(customItems);list.appendChild(customSection);list.querySelectorAll(".edit-quiz-question").forEach((button)=>button.addEventListener("click",()=>{const question=getCoupleQuizQuestions().find((item)=>item.id===button.dataset.id);if(!question){return;}document.getElementById("quizPrompt").value=question.prompt||"";document.getElementById("quizOptionOne").value=question.options[0]||"";document.getElementById("quizOptionTwo").value=question.options[1]||"";document.getElementById("quizOptionThree").value=question.options[2]||"";document.getElementById("quizAnswerIndex").value=String(question.answerIndex||0);document.getElementById("saveQuizQuestion").dataset.editingId=question.id;document.getElementById("quizPrompt")?.focus();}));list.querySelectorAll(".delete-quiz-question").forEach((button)=>button.addEventListener("click",()=>{saveCoupleQuizQuestions(getCoupleQuizQuestions().filter((question)=>question.id!==button.dataset.id));renderCoupleQuiz();}));}
function clearQuizForm(){document.getElementById("quizPrompt").value="";document.getElementById("quizOptionOne").value="";document.getElementById("quizOptionTwo").value="";document.getElementById("quizOptionThree").value="";document.getElementById("quizAnswerIndex").value="0";document.getElementById("saveQuizQuestion").dataset.editingId="";}
function saveQuizFromForm(){const prompt=document.getElementById("quizPrompt").value.trim();const options=[document.getElementById("quizOptionOne").value.trim(),document.getElementById("quizOptionTwo").value.trim(),document.getElementById("quizOptionThree").value.trim()];const answerIndex=Number(document.getElementById("quizAnswerIndex").value||0);if(!prompt||options.some((option)=>!option)){return;}const editingId=document.getElementById("saveQuizQuestion").dataset.editingId||"";const items=getCoupleQuizQuestions();if(editingId){saveCoupleQuizQuestions(items.map((item)=>item.id!==editingId?item:{...item,prompt,options,answerIndex}));}else{items.push({id:`quiz-${Date.now()}`,prompt,options,answerIndex});saveCoupleQuizQuestions(items);}clearQuizForm();renderCoupleQuiz();}
function renderRelationshipHub(){renderBronwynSpace();renderCountdowns();renderVoiceNotes();renderRewards();renderCalendar();renderCoupleQuiz();}
async function startLocationSharing(){if(!navigator.geolocation){if(els.locationStatus){els.locationStatus.textContent="This device cannot share location.";}return;}if(appState.locationWatchId!==null){appState.locationSharing=true;localStorage.setItem(LOCATION_SHARE_KEY,"true");renderLocationCard();return;}appState.locationSharing=true;localStorage.setItem(LOCATION_SHARE_KEY,"true");if(els.locationStatus){els.locationStatus.textContent="Getting your laptop location...";}appState.locationWatchId=navigator.geolocation.watchPosition(async(position)=>{const payload={owner:"ntokozo",latitude:position.coords.latitude,longitude:position.coords.longitude,accuracy:Math.round(position.coords.accuracy||0),is_active:true,updated_at:new Date().toISOString()};appState.remoteLocation=payload;renderLocationCard();if(REMOTE_ENABLED){try{await saveRemoteLocation(payload);}catch(error){console.warn("Remote location update failed",error);}}},(error)=>{appState.locationSharing=false;localStorage.removeItem(LOCATION_SHARE_KEY);if(els.locationStatus){els.locationStatus.textContent=error&&error.message?error.message:"Location permission was not granted.";}},{enableHighAccuracy:true,maximumAge:10000,timeout:12000});}
async function stopLocationSharing(){if(appState.locationWatchId!==null){navigator.geolocation.clearWatch(appState.locationWatchId);appState.locationWatchId=null;}appState.locationSharing=false;localStorage.removeItem(LOCATION_SHARE_KEY);if(REMOTE_ENABLED){try{await stopRemoteLocation();}catch(error){console.warn("Remote stop location failed",error);}}appState.remoteLocation=null;renderLocationCard();}
async function requestNotificationPermission(){if(!("Notification" in window)){localStorage.setItem(STORAGE_KEYS.notificationPrompt,"true");runOpeningSequence();return;}const permission=await Notification.requestPermission();const stats=getStats();stats.reminderPermission=permission;saveStats(stats);localStorage.setItem(STORAGE_KEYS.notificationPrompt,"true");if(permission==="granted"){new Notification("Bronwyn reminder",{body:getRandomReminder()});}runOpeningSequence();}
function dismissNotificationPrompt(){localStorage.setItem(STORAGE_KEYS.notificationPrompt,"true");runOpeningSequence();}
function bindHiddenLocationConsent(){if(!els.boyfriendLocationTitle){return;}let holdTimer=null;const start=()=>{holdTimer=setTimeout(()=>{if(localStorage.getItem(LOCATION_SHARE_KEY)==="true"){void stopLocationSharing();}else{void startLocationSharing();}},1800);};const clear=()=>{if(holdTimer){clearTimeout(holdTimer);holdTimer=null;}};els.boyfriendLocationTitle.addEventListener("pointerdown",start);els.boyfriendLocationTitle.addEventListener("pointerup",clear);els.boyfriendLocationTitle.addEventListener("pointerleave",clear);els.boyfriendLocationTitle.addEventListener("pointercancel",clear);}
function shouldShowNotificationPrompt(){return !(localStorage.getItem(STORAGE_KEYS.notificationPrompt)==="true")&&("Notification" in window)&&Notification.permission==="default";}
function maybeShowReturnNotification(lastVisitBeforeLoad){const stats=getStats();if(!("Notification" in window)||Notification.permission!=="granted"){return;}if(lastVisitBeforeLoad&&lastVisitBeforeLoad!==getTodayKey()){new Notification("Bronwyn reminder",{body:getRandomReminder()});stats.reminderPermission="granted";saveStats(stats);}}
function maybeShowCompletedState(){const history=getHistory();const todayEntry=history.find((item)=>item.dateKey===getTodayKey());appState.completedToday=Boolean(todayEntry);if(!todayEntry){return false;}appState.currentDayIndex=Math.min(history.length,questionDays.length-1);appState.currentResult=todayEntry;els.vibeScore.textContent=`${todayEntry.score}%`;els.vibeEmoji.textContent=todayEntry.emoji;els.vibeMessage.textContent=todayEntry.message;els.summaryPills.innerHTML="<span>today already completed</span><span>open memories anytime</span>";showScreen("result");return true;}
function resetDayState(){const history=getHistory();const todayEntry=history.find((item)=>item.dateKey===getTodayKey());appState.completedToday=Boolean(todayEntry);appState.currentDayIndex=Math.min(history.length,questionDays.length-1);appState.currentQuestionIndex=0;appState.answers=[];appState.analysisDone=false;appState.currentResult=todayEntry||null;updateTopStatus();renderQuestion();}
function updateSessionStats(){const stats=getStats();const now=Date.now();const seconds=Math.max(0,Math.round((now-appState.sessionStartedAt)/1000));stats.secondsSpent=(stats.secondsSpent||0)+seconds;appState.sessionStartedAt=now;saveStats(stats);}
function beginIntro(){showScreen("intro");els.storyTimerFill.style.width="0%";appState.introPaused=false;appState.introProgressMs=0;appState.introStartTimestamp=0;cancelAnimationFrame(appState.introRafId);const tick=(timestamp)=>{if(!appState.introStartTimestamp){appState.introStartTimestamp=timestamp;}if(appState.introPaused){appState.introStartTimestamp=timestamp;appState.introRafId=requestAnimationFrame(tick);return;}const delta=timestamp-appState.introStartTimestamp;appState.introStartTimestamp=timestamp;appState.introProgressMs+=delta;const progress=Math.min(100,(appState.introProgressMs/INTRO_DURATION_MS)*100);els.storyTimerFill.style.width=`${progress}%`;if(appState.introProgressMs>=INTRO_DURATION_MS){finishIntro();return;}appState.introRafId=requestAnimationFrame(tick);};appState.introRafId=requestAnimationFrame(tick);}
function finishIntro(){cancelAnimationFrame(appState.introRafId);if(maybeShowCompletedState()){return;}showScreen("app");}
function setupIntroPause(){const pause=()=>{appState.introPaused=true;};const resume=()=>{appState.introPaused=false;};els.intro.addEventListener("pointerdown",pause);els.intro.addEventListener("pointerup",resume);els.intro.addEventListener("pointercancel",resume);els.intro.addEventListener("pointerleave",resume);}
function showShakeSos(){els.shakeSosOverlay.classList.add("active");}
function hideShakeSos(){els.shakeSosOverlay.classList.remove("active");}
function handleMotion(event){const acc=event.accelerationIncludingGravity;if(!acc){return;}const total=Math.abs(acc.x||0)+Math.abs(acc.y||0)+Math.abs(acc.z||0);const now=Date.now();if(total>42&&now-appState.lastShakeAt>5000){appState.lastShakeAt=now;showShakeSos();}}
function stopAmbientAudio(){clearAmbientTimers();bgMusic.pause();bgMusic.currentTime=0;bgMusic.volume=0;stopAllGames();if(els.secretAudio){els.secretAudio.pause();if(els.secretPlayBtn){els.secretPlayBtn.querySelector("i").className="fas fa-play";}if(els.secretLoveNote){els.secretLoveNote.classList.remove("active");}}}
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
function showGamesHub(){showScreen("gamesHub");}

function bindEvents(lastVisitBeforeLoad){
document.getElementById("skipBtn").addEventListener("click",startAnalysis);
document.getElementById("openHubFromApp").addEventListener("click",()=>showScreen("extraContent"));
document.getElementById("finalYes").addEventListener("click",()=>{if(window.confetti){window.confetti({particleCount:80,spread:70,origin:{y:0.7}});}showScreen("extraContent");});
document.getElementById("profileBtn").addEventListener("click",()=>{renderProfile();showScreen("profile");});
els.globalBackBtn?.addEventListener("click",()=>{const target=els.globalBackBtn.dataset.target;if(target){showScreen(target);}});
els.bronwynStoryBtn.addEventListener("click",(event)=>{if(event.target.closest(".story-plus")){launchStoryUpload("bronwyn");return;}openStory("bronwyn");});
els.ntokozoStoryBtn.addEventListener("click",(event)=>{if(event.target.closest(".story-plus")){launchStoryUpload("ntokozo");return;}openStory("ntokozo");});
document.getElementById("vibeHistoryBtn")?.addEventListener("click",()=>{closeMemMenu();renderHistory();showScreen("history");});
document.getElementById("statsBtn")?.addEventListener("click",()=>{closeMemMenu();renderStats();showScreen("stats");});
document.getElementById("gamesHubBtn")?.addEventListener("click",showGamesHub);
document.getElementById("memoriesBtn")?.addEventListener("click",()=>{closeMemMenu();showScreen("extraContent");});
els.complaintsBtn?.addEventListener("click",()=>{closeMemMenu();showScreen("complaints");});
document.getElementById("bronwynSpaceBtn")?.addEventListener("click",()=>{closeMemMenu();renderBronwynSpace();showScreen("bronwynSpace");});
document.getElementById("countdownsBtn")?.addEventListener("click",()=>{closeMemMenu();renderCountdowns();showScreen("countdowns");});
document.getElementById("calendarBtn")?.addEventListener("click",()=>{closeMemMenu();renderCalendar();showScreen("relationshipCalendar");});
document.getElementById("voiceNotesBtn")?.addEventListener("click",()=>{closeMemMenu();renderVoiceNotes();showScreen("voiceNotes");});
document.getElementById("coupleQuizBtn")?.addEventListener("click",()=>{closeMemMenu();renderCoupleQuiz();showScreen("coupleQuiz");});
document.getElementById("rewardsBtn")?.addEventListener("click",()=>{closeMemMenu();renderRewards();showScreen("rewards");});
document.getElementById("openBronwynSpace")?.addEventListener("click",()=>{renderBronwynSpace();showScreen("bronwynSpace");});
document.getElementById("openCountdowns")?.addEventListener("click",()=>{renderCountdowns();showScreen("countdowns");});
document.getElementById("openVoiceNotes")?.addEventListener("click",()=>{renderVoiceNotes();showScreen("voiceNotes");});
document.getElementById("openRewards")?.addEventListener("click",()=>{renderRewards();showScreen("rewards");});
document.querySelectorAll("#bottomNav .bottom-nav-item").forEach((button)=>button.addEventListener("click",()=>{const target=button.dataset.target;if(target){if(target==="profile"){renderProfile();}showScreen(target);}}));
document.getElementById("createBronwynStory")?.addEventListener("click",()=>launchStoryUpload("bronwyn"));
document.getElementById("createNtokozoStory")?.addEventListener("click",()=>launchStoryUpload("ntokozo"));
document.getElementById("createMemory")?.addEventListener("click",()=>els.memoryUpload.click());
document.getElementById("createVoiceNote")?.addEventListener("click",()=>{renderVoiceNotes();showScreen("voiceNotes");void startVoiceRecording();});
document.getElementById("createCalendarEvent")?.addEventListener("click",()=>{clearCalendarForm();renderCalendar();showScreen("relationshipCalendar");});
document.getElementById("goBronwynSpace")?.addEventListener("click",()=>{renderBronwynSpace();showScreen("bronwynSpace");});
document.getElementById("goCountdowns")?.addEventListener("click",()=>{renderCountdowns();showScreen("countdowns");});
document.getElementById("goCalendar")?.addEventListener("click",()=>{renderCalendar();showScreen("relationshipCalendar");});
document.getElementById("goCoupleQuiz")?.addEventListener("click",()=>{renderCoupleQuiz();showScreen("coupleQuiz");});
document.getElementById("goRewards")?.addEventListener("click",()=>{renderRewards();showScreen("rewards");});
document.getElementById("goVoiceNotes")?.addEventListener("click",()=>{renderVoiceNotes();showScreen("voiceNotes");});
document.getElementById("goHistory")?.addEventListener("click",()=>{renderHistory();showScreen("history");});
document.getElementById("goStats")?.addEventListener("click",()=>{renderStats();showScreen("stats");});
document.getElementById("goComplaints")?.addEventListener("click",()=>showScreen("complaints"));
document.getElementById("goGamesHub")?.addEventListener("click",showGamesHub);
document.getElementById("saveBronwynSpace")?.addEventListener("click",()=>{const current=getBronwynSpaceState();saveBronwynSpaceState({...current,note:(document.getElementById("bronwynNote")?.value||"").trim(),updatedAt:new Date().toISOString()});renderBronwynSpace();renderRelationshipHub();});
document.getElementById("startVoiceNote")?.addEventListener("click",()=>{void startVoiceRecording();});
document.getElementById("stopVoiceNote")?.addEventListener("click",stopVoiceRecording);
document.getElementById("saveCalendarEvent")?.addEventListener("click",()=>{saveCalendarFromForm();renderRelationshipHub();});
document.getElementById("clearCalendarEvent")?.addEventListener("click",clearCalendarForm);
document.getElementById("saveQuizQuestion")?.addEventListener("click",()=>{saveQuizFromForm();renderRelationshipHub();});
document.getElementById("clearQuizQuestion")?.addEventListener("click",clearQuizForm);
document.getElementById("backFromProfile")?.addEventListener("click",()=>showScreen("extraContent"));
els.profileOpenStats?.addEventListener("click",()=>{renderStats();showScreen("stats");});
els.profileOpenHistory?.addEventListener("click",()=>{renderHistory();showScreen("history");});
els.sendComplaintBtn?.addEventListener("click",openComplaintWhatsApp);
els.copyComplaintBtn?.addEventListener("click",async()=>{const text=(els.complaintText?.value||"").trim();if(!text){return;}try{await navigator.clipboard.writeText(text);}catch{}});
els.backFromComplaints?.addEventListener("click",()=>showScreen("usHub"));
els.closeShakeSos.addEventListener("click",hideShakeSos);
els.shakeSosOverlay.addEventListener("click",(event)=>{if(event.target===els.shakeSosOverlay){hideShakeSos();}});
document.getElementById("backFromHistory").addEventListener("click",()=>showScreen("usHub"));
document.getElementById("backFromStats").addEventListener("click",()=>showScreen("usHub"));
document.getElementById("backFromGamesHub").addEventListener("click",()=>showScreen("usHub"));
document.getElementById("backFromSnake").addEventListener("click",()=>showScreen("gamesHub"));
document.getElementById("backFromFlappy").addEventListener("click",()=>showScreen("gamesHub"));
document.getElementById("easterContinue").addEventListener("click",()=>{stopAmbientAudio();showScreen("extraContent");});
document.getElementById("closeSecretMeeting").addEventListener("click",()=>showScreen(appState.previousScreenId||"extraContent"));
document.getElementById("closeThreeDayStreak").addEventListener("click",()=>showScreen("result"));
document.getElementById("closeSevenDayStreak").addEventListener("click",()=>showScreen("result"));
document.getElementById("closeJealousMode").addEventListener("click",()=>{if(appState.afterJealousTarget==="analysis"){startAnalysis();return;}showScreen(appState.afterJealousTarget||"app");});
document.getElementById("closeSecretTapScreen").addEventListener("click",()=>showScreen(appState.previousScreenId||"app"));
els.spinSecretWheel?.addEventListener("click",spinSecretWheel);
document.getElementById("closeEggHint").addEventListener("click",()=>showScreen("result"));
els.openSnakeGame?.addEventListener("click",()=>showScreen("snakeGame"));
els.openFlappyGame?.addEventListener("click",()=>showScreen("flappyGame"));
let logoTapCount=0;
let lastLogoTap=0;
document.getElementById("logoBadge").addEventListener("click",()=>{const now=Date.now();if(now-lastLogoTap>SECRET_TAP_WINDOW_MS){logoTapCount=0;}logoTapCount+=1;lastLogoTap=now;if(logoTapCount>=SECRET_TAP_TARGET){logoTapCount=0;resetSecretWheelResult();showScreen("secretTapScreen");}});
els.memOptionsBtn?.addEventListener("click",()=>{els.memOptionsPanel?.classList.toggle("active");els.memOverlay?.classList.toggle("active");});
els.memOverlay?.addEventListener("click",closeMemMenu);
els.memoryGalleryOpen.addEventListener("click",openMemoryGallerySheet);
els.closeMemoryGallery.addEventListener("click",closeMemoryGallerySheet);
els.memoryGallerySheet.addEventListener("click",(event)=>{if(event.target===els.memoryGallerySheet){closeMemoryGallerySheet();}});
els.memoryUpload.addEventListener("change",(event)=>handleUpload(event,STORAGE_KEYS.memories));
els.closeMemoryViewer.addEventListener("click",closeMemoryViewer);
els.memoryViewer.addEventListener("click",(event)=>{if(event.target===els.memoryViewer){closeMemoryViewer();}});
els.proofUpload.addEventListener("change",(event)=>handleUpload(event,STORAGE_KEYS.stories));
els.proofEmptyAddBtn.addEventListener("click",()=>launchStoryUpload(appState.activeStoryOwner));
els.storyLikeBtn?.addEventListener("click",(event)=>{event.preventDefault();event.stopPropagation();toggleCurrentStoryLike();});
els.storyDeleteBtn?.addEventListener("click",async(event)=>{event.preventDefault();event.stopPropagation();await deleteCurrentStory();});
els.storyViewerShell.addEventListener("pointerdown",(event)=>{if(!appState.storyQueue.length||event.target.closest("button")){return;}clearTimeout(appState.storyHoldTimer);appState.storyHoldTriggered=false;appState.storyHoldTimer=setTimeout(()=>{appState.storyPaused=true;appState.storyHoldTriggered=true;},240);});
els.storyViewerShell.addEventListener("pointerup",(event)=>{clearTimeout(appState.storyHoldTimer);if(!appState.storyQueue.length||event.target.closest("button")){return;}if(appState.storyHoldTriggered){appState.storyPaused=false;appState.storyHoldTriggered=false;return;}const bounds=els.storyViewerShell.getBoundingClientRect();const tapX=event.clientX-bounds.left;if(tapX<bounds.width*0.35){advanceStory(-1);}else{advanceStory(1);}});
els.storyViewerShell.addEventListener("pointercancel",()=>{clearTimeout(appState.storyHoldTimer);if(appState.storyPaused){appState.storyPaused=false;}appState.storyHoldTriggered=false;});
els.playlistForm.addEventListener("submit",(event)=>{event.preventDefault();const name=els.playlistName.value.trim();const url=els.playlistUrl.value.trim();if(!name||!url){return;}const playlists=getStorageArray(STORAGE_KEYS.playlists);playlists.push({name,url});setStorage(STORAGE_KEYS.playlists,playlists.slice(-12));els.playlistName.value="";els.playlistUrl.value="";renderCustomPlaylists();});
els.enableNotificationsBtn?.addEventListener("click",requestNotificationPermission);
els.skipNotificationsBtn?.addEventListener("click",dismissNotificationPrompt);
let tapCount=0;
let lastTap=0;
document.body.addEventListener("click",(event)=>{if(document.getElementById("proofLife").classList.contains("active")||getGameScreenIds().includes(appState.currentScreenId)){return;}if(event.target.closest("button, input, label, audio, a, form")){return;}const now=Date.now();if(now-lastTap>1500){tapCount=0;}tapCount+=1;lastTap=now;if(tapCount===5){tapCount=0;showScreen("easterEgg");}});
document.addEventListener("visibilitychange",()=>{if(document.hidden){updateSessionStats();stopAmbientAudio();if(appState.storyQueue.length){appState.storyPaused=true;}}else{appState.sessionStartedAt=Date.now();void refreshSharedContent({silent:true});if(appState.storyQueue.length){appState.storyPaused=false;appState.storyStartTimestamp=0;}}});
window.addEventListener("pagehide",()=>{updateSessionStats();stopAmbientAudio();});
window.addEventListener("devicemotion",handleMotion);
setupIntroPause();
setupHoldSecret();
bindSecretPlayer();
bindMemorySwipe();
bindHiddenLocationConsent();
els.tutorialNext.addEventListener("click",advanceMemoriesTutorial);
els.tutorialSkip.addEventListener("click",dismissMemoriesTutorial);
}
function registerVisit(){const stats=getStats();const today=getTodayKey();const lastVisitBeforeLoad=stats.lastVisitDate||"";if(lastVisitBeforeLoad!==today){stats.visits=(stats.visits||0)+1;stats.daysOpened=[...(stats.daysOpened||[]),today].slice(-60);}stats.lastVisitDate=today;appState.sessionStartedAt=Date.now();saveStats(stats);return lastVisitBeforeLoad;}
async function init(){applyUiTheme();applySeasonalLogo();document.documentElement.style.setProperty("--heart-color",getHeartColorForToday());els.introText.textContent=introPhrases[Math.floor(Math.random()*introPhrases.length)];if(REMOTE_ENABLED){await refreshSharedContent({silent:true});startRemotePolling();}renderHistory();renderMemoryGallery();renderStoryChips();renderCustomPlaylists();renderLocationCard();renderDailyMotivation();renderRelationshipHub();renderProfile();if(localStorage.getItem(LOCATION_SHARE_KEY)==="true"){void startLocationSharing();}resetDayState();const lastVisitBeforeLoad=registerVisit();renderStats();bindEvents(lastVisitBeforeLoad);maybeShowReturnNotification(lastVisitBeforeLoad);window.addEventListener("resize",()=>{if(els.memoriesTutorial.classList.contains("active")){positionTutorialStep();}});setInterval(createHeart,900);if(shouldShowNotificationPrompt()){showScreen("notificationPrompt");return;}runOpeningSequence();}
window.addEventListener("load",init);














































