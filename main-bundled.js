/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend-js/modules/arrayOutput.js":
/*!********************************************!*\
  !*** ./frontend-js/modules/arrayOutput.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getContentIncomingCall: () => (/* binding */ getContentIncomingCall),
/* harmony export */   getContentQuestions: () => (/* binding */ getContentQuestions),
/* harmony export */   populateAttemptPageLanguage: () => (/* binding */ populateAttemptPageLanguage)
/* harmony export */ });
/* harmony import */ var _languageArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./languageArray */ "./frontend-js/modules/languageArray.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./frontend-js/modules/utils.js");


var previousIndices = [];
var incomingCallText = document.querySelector(".incoming-call-text");
var callThalaHeading = document.querySelector(".thala-heading");
var swipeUptoBtn = document.querySelector(".swipe-upto-btn");
var callConnectLoadingHeading = document.querySelector(".call-connect-loading-heading");
var callConnectLoadingText = document.querySelector(".call-connect-loading-text");
var tryAgainHeading = document.querySelector(".try-again-heading");
var tryAgainText = document.querySelector(".try-again-text");
var tryAgainBtnImg = document.querySelector(".try-again-btn-img");
var questionSelectText = document.querySelector(".question-select-text");
var refreshQuestionsBtn = document.querySelector(".refresh-questions-btn");
var thalaAnswerText = document.querySelector(".thala-answer-text");
var shareIcon = document.querySelector(".share-icon");
var downloadIcon = document.querySelector(".download-icon");
var questionSelectContainer = document.querySelector(".question-select-container");
var nextBtn = document.getElementById("nextBtn");
var dhoniVideo = document.querySelector(".response-video");
var attemptPageContainerHeading = document.querySelector(".attempt-page-container-heading");
var attemptpageContainerP = document.querySelector(".attempt-page-container-p");
var dhoniThankYouContinueHeading = document.querySelector(".dhoni-thankyou-continue-heading");
var dhoniThankYouContinueHeadingBottom = document.querySelector(".dhoni-thankyou-continue-heading-bottom");
var thankYouContinueButton = document.getElementById("thankYouContinueButton");
var buffer2 = document.querySelector(".buffer2");
function getContentIncomingCall(selectedLanguage) {
  // incomingCallText.innerText= "";
  // callThalaHeading.innerText = "";
  // swipeUptoBtn.innerText = "";
  callConnectLoadingHeading.innerText = "";
  callConnectLoadingText.innerText = "";
  tryAgainHeading.innerText = "";
  tryAgainText.innerText = "";
  tryAgainBtnImg.innerText = "";
  questionSelectText.innerText = "";
  refreshQuestionsBtn.innerText = "";
  shareIcon.innerText = "";
  //downloadIcon.innerText = "";
  thalaAnswerText.innerText = "";
  dhoniThankYouContinueHeading.innerText = "";
  dhoniThankYouContinueHeadingBottom.innerText = "";
  thankYouContinueButton.innerText = "";
  // attemptPageContainerHeading.innerText = "";
  // attemptpageContainerP.innerText = "";
  // incomingCallText.innerText = contentIncomingCall[0][selectedLanguage];
  // callThalaHeading.innerText = contentIncomingCall[1][selectedLanguage];
  // swipeUptoBtn.innerText = contentIncomingCall[2][selectedLanguage];
  callConnectLoadingHeading.innerText = _languageArray__WEBPACK_IMPORTED_MODULE_0__.callConnectLoadingContent[0][selectedLanguage];
  callConnectLoadingText.innerText = _languageArray__WEBPACK_IMPORTED_MODULE_0__.callConnectLoadingContent[1][selectedLanguage];
  tryAgainHeading.innerText = _languageArray__WEBPACK_IMPORTED_MODULE_0__.tryAgainContent[0][selectedLanguage];
  tryAgainText.innerText = _languageArray__WEBPACK_IMPORTED_MODULE_0__.tryAgainContent[1][selectedLanguage];
  tryAgainBtnImg.innerText = _languageArray__WEBPACK_IMPORTED_MODULE_0__.tryAgainContent[2][selectedLanguage];
  questionSelectText.innerText = _languageArray__WEBPACK_IMPORTED_MODULE_0__.avatarQuestionScreenContent[0][selectedLanguage];
  refreshQuestionsBtn.innerText = _languageArray__WEBPACK_IMPORTED_MODULE_0__.avatarQuestionScreenContent[1][selectedLanguage];
  shareIcon.innerText = _languageArray__WEBPACK_IMPORTED_MODULE_0__.avatarQuestionScreenContent[2][selectedLanguage];
  //downloadIcon.innerText = avatarQuestionScreenContent[3][selectedLanguage];
  thalaAnswerText.innerText = _languageArray__WEBPACK_IMPORTED_MODULE_0__.avatarQuestionScreenContent[4][selectedLanguage];
  dhoniThankYouContinueHeading.innerText = _languageArray__WEBPACK_IMPORTED_MODULE_0__.avatarQuestionScreenContent[5][selectedLanguage];
  dhoniThankYouContinueHeadingBottom.innerText = _languageArray__WEBPACK_IMPORTED_MODULE_0__.avatarQuestionScreenContent[6][selectedLanguage];
  thankYouContinueButton.innerText = _languageArray__WEBPACK_IMPORTED_MODULE_0__.avatarQuestionScreenContent[7][selectedLanguage];
  // attemptPageContainerHeading.innerText = attemptContent[0][selectedLanguage];
  // attemptpageContainerP.innerText = attemptContent[1][selectedLanguage];

  var selfieTriggerBtnText = document.querySelector("#selfieButton .btn-text");
  var selfieRotatePromptText = document.querySelector(".selfie-rotate-prompt-text");
  var selfieDownloadBtn = document.getElementById("selfie-download-btn");
  var selfieRetakeBtn = document.getElementById("selfie-retake-btn");
  if (selfieTriggerBtnText) {
    selfieTriggerBtnText.innerText = _languageArray__WEBPACK_IMPORTED_MODULE_0__.selfieScreenContent[0][selectedLanguage];
  }
  if (selfieRotatePromptText) {
    selfieRotatePromptText.innerText = _languageArray__WEBPACK_IMPORTED_MODULE_0__.selfieScreenContent[1][selectedLanguage];
  }
  if (selfieDownloadBtn) {
    selfieDownloadBtn.innerText = _languageArray__WEBPACK_IMPORTED_MODULE_0__.selfieScreenContent[2][selectedLanguage];
  }
  if (selfieRetakeBtn) {
    selfieRetakeBtn.innerText = _languageArray__WEBPACK_IMPORTED_MODULE_0__.selfieScreenContent[3][selectedLanguage];
  }
}
function populateAttemptPageLanguage(div) {
  attemptPageContainerHeading.innerText = "";
  attemptpageContainerP.innerText = "";
  var selectedLanguage = div.dataset.language;
  attemptPageContainerHeading.innerHTML = _languageArray__WEBPACK_IMPORTED_MODULE_0__.attemptContent[0][selectedLanguage];
  attemptpageContainerP.innerHTML = _languageArray__WEBPACK_IMPORTED_MODULE_0__.attemptContent[1][selectedLanguage];
}
function getContentQuestions(selectedLanguage) {
  var ORDER_KEY = "questionGroupOrder";
  var SEEN_KEY = "seenGroupIndices";
  var groupOrder = JSON.parse(localStorage.getItem(ORDER_KEY));
  var seenGroups = JSON.parse(localStorage.getItem(SEEN_KEY)) || [];
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var _ref = [array[j], array[i]];
      array[i] = _ref[0];
      array[j] = _ref[1];
    }
    return array;
  }
  if (!groupOrder || groupOrder.length !== _languageArray__WEBPACK_IMPORTED_MODULE_0__.questionContent.length) {
    groupOrder = shuffleArray(Array.from({
      length: _languageArray__WEBPACK_IMPORTED_MODULE_0__.questionContent.length
    }, function (_, i) {
      return i;
    }));
    localStorage.setItem(ORDER_KEY, JSON.stringify(groupOrder));
  }
  // Step 1: If no group order stored, generate a new fixed order
  // if (!groupOrder || groupOrder.length !== questionContent.length) {
  //     groupOrder = Array.from({ length: questionContent.length }, (_, i) => i);
  //     localStorage.setItem(ORDER_KEY, JSON.stringify(groupOrder));
  // }
  function getNextUnseenIndex() {
    for (var i = 0; i < groupOrder.length; i++) {
      if (!seenGroups.includes(groupOrder[i])) {
        return groupOrder[i];
      }
    }
    // All groups seen, reset
    seenGroups = [];
    localStorage.setItem(SEEN_KEY, JSON.stringify(seenGroups));
    return groupOrder[0]; // start again from beginning
  }
  var currentGroupIndex = getNextUnseenIndex();
  // Mark as seen
  // if (!seenGroups.includes(currentGroupIndex)) {
  //     seenGroups.push(currentGroupIndex);
  //     localStorage.setItem(SEEN_KEY, JSON.stringify(seenGroups));
  // }
  // console.log(selectedLanguage)
  function showNextQuestions() {
    var container = document.getElementById("questionContainer");
    container.innerHTML = "";
    var questionsArray = _languageArray__WEBPACK_IMPORTED_MODULE_0__.questionContent[currentGroupIndex];
    questionsArray.forEach(function (selectedSet, i) {
      var box = document.createElement("div");
      box.className = "question-box";
      // box.dataset.video = selectedSet[selectedLanguage].replace(/\s+/g, '');

      if (selectedLanguage == "english") {
        box.dataset.video = selectedSet.videoName[selectedLanguage];
      } else if (selectedLanguage == "tamil") {
        box.dataset.video = selectedSet.videoName[selectedLanguage];
      } else if (selectedLanguage == "telugu") {
        box.dataset.video = selectedSet.videoName[selectedLanguage];
      } else if (selectedLanguage == "kannada") {
        box.dataset.video = selectedSet.videoName[selectedLanguage];
      }
      var match = selectedSet.videoName[selectedLanguage].match(/\d+/);
      var questionNumber = match ? Number(match[0]) : null;
      box.setAttribute("id", "question".concat(questionNumber));
      var number = document.createElement("div");
      number.className = "question-number";
      number.setAttribute("id", "questionNumber".concat(questionNumber));
      number.innerText = "Q.";
      var question = document.createElement("span");
      question.className = "question-text";
      question.setAttribute("id", "questionText".concat(questionNumber));
      question.innerText = "".concat(selectedSet.questionText[selectedLanguage]);
      box.appendChild(number);
      box.appendChild(question);
      var wrapper = document.createElement("div");
      wrapper.className = "question-wrapper";
      wrapper.appendChild(box);
      container.appendChild(wrapper);
      box.addEventListener("click", function () {
        // questionSelectContainer.style.visibility = 'hidden';
        // thalaAnswerText.style.display = "block";
        // thalaAnswerText.style.visibility = 'visible';
        // console.log("Clicked question index in current group:", i);
        // currentGroupIndex = getNextUnseenIndex();

        buffer2.style.opacity = 0;
        fbq("track", "InitiateCheckout");
        if (!seenGroups.includes(currentGroupIndex)) {
          seenGroups.push(currentGroupIndex);
          localStorage.setItem(SEEN_KEY, JSON.stringify(seenGroups));
        }
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.showElement)(dhoniVideo, 0);
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.playVideo)("".concat(box.dataset.video, ".mp4"));
        // console.log(`${box.dataset.video}.mp4`)
        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.showQuestionScreenAtEnd)(selectedLanguage);
        // if (!seenGroups.includes(currentGroupIndex)) {
        //     seenGroups.push(currentGroupIndex);
        //     localStorage.setItem(SEEN_KEY, JSON.stringify(seenGroups));
        // }
        setTimeout(function () {
          currentGroupIndex = getNextUnseenIndex();
          showNextQuestions();
        }, 1000);
      });
    });
  }
  showNextQuestions();
  // function handleNextButtonClick() {
  //     // Proceed with the existing logic
  //     currentGroupIndex = getNextUnseenIndex();
  //     if (!seenGroups.includes(currentGroupIndex)) {
  //         seenGroups.push(currentGroupIndex - 1);
  //         localStorage.setItem(SEEN_KEY, JSON.stringify(seenGroups));
  //     }

  //     showNextQuestions();
  //     // hideElement(nextBtn, 300)
  //     // nextBtn.removeEventListener("click", handleNextButtonClick);
  // }
  function handleNextButtonClick() {
    // Mark current group as seen
    fbq("track", "ViewContent");
    if (!seenGroups.includes(currentGroupIndex)) {
      seenGroups.push(currentGroupIndex);
      localStorage.setItem(SEEN_KEY, JSON.stringify(seenGroups));
    }
    // Move to next index in groupOrder
    var currentOrderPos = groupOrder.indexOf(currentGroupIndex);
    var nextOrderPos = currentOrderPos + 1;
    // Loop back if at the end
    if (nextOrderPos >= groupOrder.length) {
      seenGroups = [];
      localStorage.setItem(SEEN_KEY, JSON.stringify(seenGroups));
      nextOrderPos = 0;
    }
    currentGroupIndex = groupOrder[nextOrderPos];
    showNextQuestions();
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.hideElement)(nextBtn, 300);
    nextBtn.removeEventListener("click", handleNextButtonClick);
  }
  nextBtn.addEventListener("click", handleNextButtonClick);
}

/***/ }),

/***/ "./frontend-js/modules/attemptPage.js":
/*!********************************************!*\
  !*** ./frontend-js/modules/attemptPage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AttemptPage)
/* harmony export */ });
/* harmony import */ var _arrayOutput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayOutput */ "./frontend-js/modules/arrayOutput.js");

function AttemptPage() {
  var attemptPage = document.querySelector('.attempt-page');
  (0,_arrayOutput__WEBPACK_IMPORTED_MODULE_0__.populateAttemptPageLanguage)(attemptPage);
}

/***/ }),

/***/ "./frontend-js/modules/languageArray.js":
/*!**********************************************!*\
  !*** ./frontend-js/modules/languageArray.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attemptContent: () => (/* binding */ attemptContent),
/* harmony export */   avatarQuestionScreenContent: () => (/* binding */ avatarQuestionScreenContent),
/* harmony export */   callConnectLoadingContent: () => (/* binding */ callConnectLoadingContent),
/* harmony export */   questionContent: () => (/* binding */ questionContent),
/* harmony export */   selfieScreenContent: () => (/* binding */ selfieScreenContent),
/* harmony export */   tryAgainContent: () => (/* binding */ tryAgainContent)
/* harmony export */ });
var callConnectLoadingContent = [{
  english: "You’ve made it!",
  telugu: "సూపర్!",
  //done
  tamil: "நீங்க கலக்கிட்டீங்க!",
  //done
  kannada: "ಅರೆ ವಾಹ್!" // done
}, {
  english: "Welcome to your pitch invasion with Thala, keep it cool.",
  telugu: "ధోనిని రంగం లో పేస్ చెయ్యడానికి సిద్ధం అవ్వండి ! కీప్ కూల్/ కూల్ గా ఉండండి",
  //done
  tamil: "தல-ய பிட்ச்ல ஃபேஸ் பண்ண உங்கள வரவேற்கிறோம், கூலா இருங்க. ",
  //done
  kannada: "ಕೊನೆಗೂ ಪಿಚ್ ಗೆ ನುಗ್ಗಿದ್ದಾಯ್ತು. ಇನ್ನು ಧೋನಿ ಮೀಟ್ ಮಾಡಬಹುದು. ಕೂಲ್ ಆಗಿರಿ. " //done
}];
var tryAgainContent = [{
  english: "About 7 seconds to go...",
  telugu: "ఇంకా 7 సెకన్లు ....",
  //done
  tamil: "இன்னும் 7 செகண்ட்ஸ் தான்… ",
  //done
  kannada: "ಇನ್ನೂ ಸುಮಾರು 7 ಸೆಕೆಂಡ್ ಉಳಿದಿದೆ... " //done
}, {
  english: "and you know the reason. ",
  telugu: "కారణం మీకు తెలుసు.",
  //done
  tamil: "ஏன்னு உங்களுக்கே தெரியும்",
  //done
  kannada: "ಕಾರಣ ನಿಮಗೆ ಗೊತ್ತಿದೆ." //done
}, {
  english: "Try Again",
  telugu: "మళ్లీ ప్రయత్నించండి",
  tamil: "மீண்டும் முயற்சிக்கவும்",
  kannada: "ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ"
}];
var avatarQuestionScreenContent = [{
  english: "You can select only one question at this time",
  telugu: "మీరు ఒకసారి ఒక ప్రశ్నను మాత్రమే సెలెక్ట్ చేసుకోగలరు",
  //done
  tamil: "ஒரு கேள்வியை மட்டுமே தேர்வு செய்ய முடியும்",
  //done
  kannada: "ಒಂದೇ ಸಮಯದಲ್ಲಿ ನೀವು ಒಂದು ಪ್ರಶ್ನೆಯನ್ನಷ್ಟೇ ಆಯ್ಕೆ ಮಾಡಬಹುದು." //done
}, {
  english: "Refresh Questions",
  telugu: "ప్రశ్నలను రీఫ్రెష్ చేయండి",
  //done
  tamil: "கேள்விகளைப் புதுப்பிக்கவும்",
  //done
  kannada: "ಪ್ರಶ್ನೆಗಳನ್ನು ರಿಫ್ರೆಶ್ ಮಾಡಿ" //done
}, {
  english: "Share the Thala magic",
  telugu: "తలా మాయను పంచుకోండి",
  //done
  tamil: "தலாவின் மாயத்தை பகிருங்கள்",
  //done
  kannada: "ತಲಾ ಮಾಯೆಯನ್ನು ಹಂಚಿಕೊಳ್ಳಿ" //done
}, {
  english: "Download",
  telugu: "డౌన్‌లోడ్",
  //done
  tamil: "டவுன்லோட்",
  //done
  kannada: "ಡೌನ್‌ಲೋಡ್" //done
}, {
  english: "Thala Answer",
  telugu: "ధోని సమాధానమిస్తాడు",
  //done
  tamil: "தல பதிலளிக்கிறார் ",
  //done
  kannada: "ಧೋನಿ ಉತ್ತರಿಸುತ್ತಾರೆ" //done
}, {
  english: "Tap the button below to",
  telugu: "తదుపరి విభాగానికి వెళ్లడానికి",
  tamil: "அடுத்த பகுதிக்குச் செல்ல",
  kannada: "ಮುಂದಿನ ವಿಭಾಗಕ್ಕೆ ಹೋಗಲು"
}, {
  english: "proceed to next section",
  telugu: "క్రింది బటన్‌ను నొక్కండి",
  tamil: "கீழே உள்ள பொத்தானைத் தட்டவும்",
  kannada: "ಕೆಳಗಿನ ಬಟನ್ ಅನ್ನು ಒತ್ತಿರಿ"
}, {
  english: "Proceed",
  telugu: "కొనసాగండి",
  tamil: "தொடரவும்",
  kannada: "ಮುಂದುವರಿಸಿ"
}];
var attemptContent = [{
  english: "This round’s over!",
  telugu: "This round’s over!",
  tamil: "This round’s over!",
  kannada: "This round’s over!"
}, {
  english: "Please try with a new device or phone number for more time with Thala.",
  telugu: "Please try with a new device or phone number for more time with Thala.",
  tamil: "Please try with a new device or phone number for more time with Thala.",
  kannada: "Please try with a new device or phone number for more time with Thala."
}];
var questionContent = [[{
  videoName: {
    english: "english4",
    telugu: "telugu4",
    tamil: "tamil4",
    kannada: "kannada4"
  },
  questionText: {
    english: "Drinks break mein kabhi chai pi hai?",
    telugu: "డ్రింక్స్ బ్రేక్ లో మీరు ఎప్పుడైనా టీ తాగారా?",
    tamil: "ட்ரிங்க்ஸ் பிரேக்ல எப்பயாவது டீ குடிச்சிருக்கீங்களா?",
    kannada: "ಡ್ರಿಂಕ್ಸ್ ಬ್ರೇಕ್‌ನಲ್ಲಿ ಯಾವತ್ತಾದರೂ ಟೀ ಕುಡಿದಿದೀರಾ?"
  }
}, {
  videoName: {
    english: "english2",
    telugu: "telugu2",
    tamil: "tamil2",
    kannada: "kannada2"
  },
  questionText: {
    english: "What is your cricketing ritual?",
    telugu: "మీ క్రికెటింగ్ రిట్చ్యువల్ ఏమిటి?",
    tamil: "உங்க கிரிக்கெட்டிங் ரிச்சுவல் என்ன?",
    kannada: "ನಿಮ್ಮ ಕ್ರಿಕೆಟ್ ದಿನಚರಿ ಏನು?"
  }
}, {
  videoName: {
    english: "english3",
    telugu: "telugu3",
    tamil: "tamil3",
    kannada: "kannada3"
  },
  questionText: {
    english: "What's the fastest ball you've ever faced?",
    telugu: "మీరు ఎదుర్కొన్న ఫాస్టెస్ట్ బాల్ ఏది",
    tamil: "நீங்க இதுவர ஃபேஸ் பண்ண ஃபாஸ்டஸ்ட் பால் எது?",
    kannada: "ನೀವು ಎದುರಿಸಿರೋ ಅತ್ಯಂತ ವೇಗವಾದ ಬಾಲ್ ಯಾವ್ದು?"
  }
}], [{
  videoName: {
    english: "english14",
    telugu: "telugu14",
    tamil: "tamil14",
    kannada: "kannada14"
  },
  questionText: {
    english: "Between you and Sakshi, who can't survive without tea?",
    telugu: "మీరు ఇంకా సాక్షి మీ ఇద్దరిలో టీ లేకుండా సర్వైవ్ కాలేనివారు ఎవరు?",
    tamil: "நீங்க அண்ட் சாக்ஷி உங்க ரெண்டு பேர்ல டீ இல்லாம யாராலா சர்வைவ் பண்ண முடியாது?",
    kannada: "ನೀವು ಅಥವಾ ಸಾಕ್ಷಿ – ಯಾರಿಗೆ ಟೀ ಇಲ್ದೆ ಇರಕ್ಕಾಗಲ್ಲ ?"
  }
}, {
  videoName: {
    english: "english5",
    telugu: "telugu5",
    tamil: "tamil5",
    kannada: "kannada5"
  },
  questionText: {
    english: "Which side do you love hitting on the most?",
    telugu: "మీరు ఏ సైడ్ కొట్టడానికి చాలా ఇష్టపడతారు?",
    tamil: "உங்களுக்கு எந்த சைட் அடிச்சு விளையாட ரொம்ப பிடிக்கும்?",
    kannada: "ನೀವು ಯಾವ್ ಸೈಡ್ ಹೊಡ್ಯಕ್ ಜಾಸ್ತಿ ಇಷ್ಟ ಪಡ್ತೀರ ?"
  }
}, {
  videoName: {
    english: "english6",
    telugu: "telugu6",
    tamil: "tamil6",
    kannada: "kannada6"
  },
  questionText: {
    english: "Is the helicopter shot really your favorite - or is it something else?",
    telugu: "నిజంగానే హెలికాప్టర్ షాట్ అంటే మీకు ఇష్టమా- లేక మరేదైనానా?",
    tamil: "உண்மையாவே ஹெலிகாப்டர் ஷாட் உங்களோட ஃபேவரைட்டா இல்ல வேற எதாவது இருக்கா?",
    kannada: "ನಿಮ್ಗೂ ಹೆಲಿಕಾಪ್ಟರ್ ಶಾಟ್  ಫೇವ್ರೆಟ್ಟಾ! ಇಲ್ಲ ಬೇರೆನಾ?"
  }
}], [{
  videoName: {
    english: "english15",
    telugu: "telugu15",
    tamil: "tamil15",
    kannada: "kannada15"
  },
  questionText: {
    english: "What is your favorite time to drink tea?",
    telugu: "టీ తాగడానికి మీ ఫేవరెట్ టైం ఏదీ?",
    tamil: "டீ குடிக்கிறதுக்கு உங்களோட ஃபேவரைட் டைம் என்ன?",
    kannada: "ನಿಮಗೆ ಟೀ ಕುಡಿಯಕ್ಕೆ ಇಷ್ಟವಾದ ಸಮಯ ಯಾವುದು ?"
  }
}, {
  videoName: {
    english: "english8",
    telugu: "telugu8",
    tamil: "tamil8",
    kannada: "kannada8"
  },
  questionText: {
    english: "How many bikes do you have now?",
    telugu: "మీ వద్ద ఎన్ని బైక్-లు ఉన్నాయ్?",
    tamil: "நீங்க இப்போ எவ்ளோ பைக் வச்சிருக்கீங்க?",
    kannada: "ನಿಮ್ಮ ಹತ್ರ ಈಗ ಎಷ್ಟು ಬೈಕ್ಸ್ ಇದೆ?"
  }
}, {
  videoName: {
    english: "english9",
    telugu: "telugu9",
    tamil: "tamil9",
    kannada: "kannada9"
  },
  questionText: {
    english: "What's a hobby of yours that fans don't know about?",
    telugu: "మీ ఫ్యాన్స్ కు తెలియని మీ హాబీ ఏమిటి?",
    tamil: "ஃபேன்ஸுக்கு தெரியாத உங்களோட ஹாபி எது? ",
    kannada: "ನಿಮ್ಮ ಅಭಿಮಾನಿಗಳಿಗೆ ಗೊತ್ತಿಲ್ಲದ ನಿಮ್ಮಹಾಬಿ ಯಾವುದು?"
  }
}], [{
  videoName: {
    english: "english16",
    telugu: "telugu16",
    tamil: "tamil16",
    kannada: "kannada16"
  },
  questionText: {
    english: "Do you like Assam tea or Darjeeling tea - or something else?",
    telugu: "మీకు అస్సాం టీ ఆర్ డార్జీలింగ్ టీ ఏదీ ఇష్టం… లేక వేరే ఏదైనానా?",
    tamil: "உங்களுக்கு அசாம் டீ ஆர் டார்ஜிலிங் டீ எது பிடிக்கும்… இல்ல வேற எதாவதா?",
    kannada: "ನಿಮಗೆ ಅಸ್ಸಾಂ ಟೀ ಇಷ್ಟಾನಾ ಅಥವಾ ಡಾರ್ಜಿಲಿಂಗ್ ಟೀ ಅಥವಾ ಬೇರೆ ಯಾವುದು ಇಷ್ಟ ಆಗತ್ತೆ?"
  }
}, {
  videoName: {
    english: "english11",
    telugu: "telugu11",
    tamil: "tamil11",
    kannada: "kannada11"
  },
  questionText: {
    english: "Do you still follow football? What's your favorite club?",
    telugu: "మీరు ఇంకా ఫుట్ బాల్ ఫాలో చేస్తున్నారా? మీ ఫేవరెట్ క్లబ్ ఏది?",
    tamil: "நீங்க இப்பவும் ஃபூட்பால் ஃபாலோ பண்றீங்களா? உங்க ஃபேவரைட் க்ளப் எது?",
    kannada: "ನೀವು ಇನ್ನೂ ಫುಟ್ಬಾಲ್‌ ಫಾಲೋ ಮಾಡ್ತೀರಾ? ನಿಮ್ಮ ಫೇವರಿಟ್ ಕ್ಲಬ್ ಯಾವ್ದು?"
  }
}, {
  videoName: {
    english: "english12",
    telugu: "telugu12",
    tamil: "tamil12",
    kannada: "kannada12"
  },
  questionText: {
    english: "Have you ever cracked a joke in the huddle?",
    telugu: "హడుల్ చేస్తున్నప్పుడు మధ్యలో జోక్ చేసేవారా?",
    tamil: "ஹடில் பண்ணும்போது நடுவுல ஜோக் பண்ணிருக்கீங்களா? ",
    kannada: "ಟೀಮ್‌ ಹಡಲ್‌ನಲ್ಲಿ ನೀವು ಯಾವಾಗಾದ್ರು ಜೋಕ್‌ ಮಾಡಿದ್ದೀರಾ?"
  }
}], [{
  videoName: {
    english: "english17",
    telugu: "telugu17",
    tamil: "tamil17",
    kannada: "kannada17"
  },
  questionText: {
    english: "Do you miss station wali chai?",
    telugu: "మీరు స్టేషన్-లో దొరికే టీ ని మిస్ చేస్తారా?",
    tamil: "ஸ்டேஷன்ல கிடைக்குற டீய மிஸ் பண்றீங்களா?",
    kannada: "ನೀವು ಸ್ಟೇಷನ್‌ ಟೀ ನ ಮಿಸ್ ಮಾಡ್ತೀರಾ?"
  }
}, {
  videoName: {
    english: "english1",
    telugu: "telugu1",
    tamil: "tamil1",
    kannada: "kannada1"
  },
  questionText: {
    english: "What is your family's favorite moment from your career?",
    telugu: "మీ కెరీర్ లో మీ ఫ్యామిలీ యొక్క ఫేవరెట్ మూమెంట్ ఏది?",
    tamil: "உங்க கரியர்-ல உங்க ஃபேமிலியோட ஃபேவரைட் மொமென்ட் எது?",
    kannada: "ನಿಮ್ಮ ಇಷ್ಟು ವರ್ಷದ ಕ್ರಿಕೆಟ್ ಪಯಣದ ಯಾವ ಕ್ಷಣ ನಿಮ್ಮ ಕುಟುಂಬದವರಿಗೆ ತುಂಬಾ ಇಷ್ಟ?"
  }
}, {
  videoName: {
    english: "english7",
    telugu: "telugu7",
    tamil: "tamil7",
    kannada: "kannada7"
  },
  questionText: {
    english: "Who is your favorite commentator?",
    telugu: "మీ ఫేవరెట్ కామెంటేటర్ ఎవరు?",
    tamil: "உங்க ஃபேவரைட் கம்மென்ட்டேட்டர் யாரு?",
    kannada: "ನಿಮ್ಮ ಫೇವರರೆಟ್ ಕಾಮೆಂಟೇಟರ್ ಯಾರು?"
  }
}], [{
  videoName: {
    english: "english18",
    telugu: "telugu18",
    tamil: "tamil18",
    kannada: "kannada18"
  },
  questionText: {
    english: "Who makes the best tea in Team India or CSK?",
    telugu: "టీం ఇండియా ఆర్ CSKలో ఎవరు బెస్ట్ టీ పెడతారు?",
    tamil: "டீம் இந்தியா ஆர் CSK-ல யாரு பெஸ்ட் டீ போடுவா?",
    kannada: "ಟೀಂ ಇಂಡಿಯಾ ಅಥವಾ ಸಿಎಸ್‌ಕೆ ತಂಡದಲ್ಲಿ ಯಾರು ಒಳ್ಳೆ ಟೀ ಮಾಡ್ತಾರೆ?"
  }
}, {
  videoName: {
    english: "english10",
    telugu: "telugu10",
    tamil: "tamil10",
    kannada: "kannada10"
  },
  questionText: {
    english: "Is there someone you look up to who inspired your journey?",
    telugu: "మీ జర్నీకి ఇన్స్పైర్  చేసినవారు ఎవరైనా ఉన్నారా?",
    tamil: "உங்க ஜர்னில நீங்க பார்த்து இன்ஸ்பையர் ஆன ஒருத்தர் இருக்காங்களா? ",
    kannada: "ನಿಮ್ಮ ಈ ಪಯಣಕ್ಕೆ ಸ್ಫೂರ್ತಿ ಯಾರು ?"
  }
}, {
  videoName: {
    english: "english13",
    telugu: "telugu13",
    tamil: "tamil13",
    kannada: "kannada13"
  },
  questionText: {
    english: "Other players sing or listen to music before batting. What's your coping mechanism under pressure?",
    telugu: "బ్యాటింగ్ చేయడానికి ముందు ఇతర ప్లేయర్స్ పాటలు వింటారు లేదా పాడుతారు. మీరు ప్రెషర్-ని ఎలా ఎదుర్కొంటారు?",
    tamil: "பேட்டிங் பண்றதுக்கு முன்னாடி மத்த ப்ளேயர்ஸ் பாடுவாங்க இல்ல மியூசிக் கேப்பாங்க. ப்ரெஷர்ர சமாளிக்க நீங்க என்ன பண்ணுவீங்க? ",
    kannada: "ಆಟಗಾರರು ಬ್ಯಾಟಿಂಗ್ ಮಾಡೋ ಮೊದಲು ಹಾಡು ಹೇಳ್ತಾರೆ ಅಥವಾ ಸಂಗೀತ ಕೇಳ್ತಾರೆ.  ಒತ್ತಡ ನಿಭಾಯಿಸಕ್ಕೇ ನಿಮ್ಮ ತಂತ್ರ ಏನು?"
  }
}], [{
  videoName: {
    english: "english20",
    telugu: "telugu20",
    tamil: "tamil20",
    kannada: "kannada20"
  },
  questionText: {
    english: "When in a hotel, do you make tea yourself or order room service?",
    telugu: "హోటల్-లో స్టే చేసేటప్పుడు, టీ మీరే ప్రిపేర్ చేస్తారా లేక రూం సర్వీస్-కు ఆర్డర్ చేస్తారా?",
    tamil: "ஹோட்டல்ல இருக்கும்போது, டீ நீங்களே போட்டுப்பீங்களா இல்ல ரூம் சர்வீஸ்ஸ ஆர்டர் பண்ணுவீங்களா?",
    kannada: "ಹೋಟೆಲ್‌ನಲ್ಲಿ ಇರೋವಾಗ ನೀವೇ ಟೀ ಮಾಡ್ ಕೊಳ್ತೀರಾ? ಅಥವಾ ರೂಮ್ ಸರ್ವಿಸ್ ನಲ್ಲಿ ಆರ್ಡರ್ ಮಾಡ್ತೀರಾ?"
  }
}, {
  videoName: {
    english: "english19",
    telugu: "telugu19",
    tamil: "tamil19",
    kannada: "kannada19"
  },
  questionText: {
    english: "When you have a fight with Sakshi, who’s the first one to say sorry or make up for it?",
    telugu: "మీరు సాక్షితో గొడవపడినప్పుడు ఎవరు ముందు సారీ లేక రాజీ పడతారు?",
    tamil: "சாக்ஷி கூட சண்ட போட்டா, யாரு ஃபர்ஸ்ட் சாரி சொல்வீங்க இல்ல சமாதானம் பண்ணுவீங்க?",
    kannada: "ನಿಮ್ಮ ಮತ್ತು ಸಾಕ್ಷಿ ನಡುವೆ ಜಗಳದ್ಆದ್ರೆ ಯಾರು ಮೊದಲು ಸಾರಿ ಕೇಳ್ತಾರೆ?"
  }
}, {
  videoName: {
    english: "english21",
    telugu: "telugu21",
    tamil: "tamil21",
    kannada: "kannada21"
  },
  questionText: {
    english: "Are you a cutting chai person or a full mug person?",
    telugu: "మీకు కటింగ్ టీ ఇష్టమా, లేక ఫుల్ మగ్ ఇష్టమా?",
    tamil: "உங்களுக்கு கட்டிங் டீ பிடிக்குமா இல்ல ஃபுல் மக் குடிப்பீங்களா? ",
    kannada: "ನೀವು ಹಾಫ್ ಚಹಾ ಕುಡಿತೀರಾ / ಕಟಿಂಗ್ ಚಾಯ್ ತೊಗೊತ್ತೀರ ಅಥವಾ ಫುಲ್ ಕಪ್ ಕುಡಿಯೋ ವ್ಯಕ್ತಿನಾ?"
  }
}], [{
  videoName: {
    english: "english22",
    telugu: "telugu22",
    tamil: "tamil22",
    kannada: "kannada22"
  },
  questionText: {
    english: "What's the weirdest tea you've ever tasted?",
    telugu: "మీరు టేస్ట్ చేసిన వాటిలో విచిత్రమైన టీ ఏది?",
    tamil: "நீங்க டேஸ்ட் பண்ணதுலேயே விசித்திரமான டீ எது? ",
    kannada: "ನೀವು ಇದುವರೆಗೆ ಟೇಸ್ಟ್ ಮಾಡಿರೋ ಅತ್ಯಂತ ವಿಚಿತ್ರವಾದ ಟೀ ಯಾವುದು?"
  }
}, {
  videoName: {
    english: "english23",
    telugu: "telugu23",
    tamil: "tamil23",
    kannada: "kannada23"
  },
  questionText: {
    english: "Who makes better tea between you and Sakshi?",
    telugu: "మీరు అండ్ సాక్షిలలో ఎవరు మంచి టీ పెట్టగలరు",
    tamil: "யாரு நல்லா டீ போடுவீங்க… நீங்களா சாக்ஷியா?",
    kannada: "ನೀವು ಮತ್ತು ಸಾಕ್ಷಿ – ಇಬ್ಬರಲ್ಲಿ ಯಾರು ಚೆನ್ನಾಗಿ ಟೀ ಮಾಡ್ತೀರಿ?"
  }
}, {
  videoName: {
    english: "english8",
    telugu: "telugu8",
    tamil: "tamil8",
    kannada: "kannada8"
  },
  questionText: {
    english: "How many bikes do you have now?",
    telugu: "మీ వద్ద ఎన్ని బైక్-లు ఉన్నాయ్?",
    tamil: "நீங்க இப்போ எவ்ளோ பைக் வச்சிருக்கீங்க?",
    kannada: "ನಿಮ್ಮ ಹತ್ರ ಈಗ ಎಷ್ಟು ಬೈಕ್ಸ್ ಇದೆ?"
  }
}]];
var selfieScreenContent = [{
  english: "TAKE A SELFIE WITH THALA",
  tamil: "தலாவுடன் செல்ஃபி எடுங்கள்",
  telugu: "తలాతో సెల్ఫీ తీయండి",
  kannada: "ತಲಾ ಜೊತೆ ಸೆಲ್ಫಿ ತೆಗೆಯಿರಿ"
}, {
  english: "Rotate your device to click selfie with Thala",
  tamil: "தலாவுடன் செல்ஃபி எடுக்க உங்கள் சாதனத்தைச் சுழற்றுங்கள்",
  telugu: "తలాతో సెల్ఫీ తీయడానికి మీ పరికరాన్ని తిప్పండి",
  kannada: "ತಲಾ ಜೊತೆ ಸೆಲ್ಫಿ ತೆಗೆಯಲು ನಿಮ್ಮ ಸಾಧನವನ್ನು ತಿರುಗಿಸಿ"
}, {
  english: "DOWNLOAD",
  tamil: "டவுன்லோட்",
  telugu: "డౌన్‌లోడ్",
  kannada: "ಡೌನ್‌ಲೋಡ್"
}, {
  english: "RETAKE",
  tamil: "மீண்டும் எடுக்கவும்",
  telugu: "మళ్లీ తీయండి",
  kannada: "ಮತ್ತೆ ತೆಗೆಯಿರಿ"
}];

/***/ }),

/***/ "./frontend-js/modules/script.js":
/*!***************************************!*\
  !*** ./frontend-js/modules/script.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Script)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./frontend-js/modules/utils.js");
/* harmony import */ var _arrayOutput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrayOutput */ "./frontend-js/modules/arrayOutput.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


function Script() {
  // console.log("JS File connected")
  var selectedLanguage;
  var languageSelectionScreen = document.querySelector(".language-selection-screen");
  var languageSelectionBtn = document.querySelectorAll(".language-selection-btn");
  var incomingCallScreen = document.querySelector(".incoming-call-screen");
  var pickcall = document.getElementById("swipeUp_prompt");
  var englishButton = document.getElementById("english");
  var avatarScreen = document.querySelector(".avatar-screen");
  var questionSelectContainer = document.querySelector(".question-select-container");
  var callConnectLoadingScreen = document.querySelector(".call-connect-loading-screen");
  var arrowAnim = document.getElementById("arrowAnim");
  var cameraFeed = document.getElementById("camera-feed");
  var callEnd = document.getElementById("callEnd");
  var shareDownloadScreen = document.querySelector(".share-download-screen");
  var idleVideo = document.querySelector(".idle-video");
  var dhoniVideo = document.querySelector(".response-video");
  var dhoniVideoSource = document.querySelector(".response-video source");
  var outroVideo = document.querySelector("#endVideo");
  var shareHeroContainer = document.querySelector(".share-hero-container");
  var cookieConsentBanner = document.querySelector(".cookie-consent-screen");
  var closeCookieConsentBtn = document.querySelector(".cookie-consent img");
  var shareButton = document.getElementById("shareButton");
  var buffer1 = document.querySelector(".buffer1");
  var buffer2 = document.querySelector(".buffer2");
  var buffer3 = document.querySelector(".buffer3");
  var allVideos = document.querySelectorAll("video");

  // const downloadButton = document.getElementById('downloadButton');
  var callAccepted = false;
  var callAcceptedTimer;
  var autoSelectTimeout = null;

  // languageSelectionBtn.forEach(button => {
  //     button.addEventListener('click', function () {
  //         selectedLanguage = button.id;
  //         console.log(selectedLanguage);
  //         if (selectedLanguage === 'english') {
  //             dhoniVideoSource.src = 'https://cdn.makear.ai/assets/videos/english-intro.mp4';
  //             outroVideo.src = "https://cdn.makear.ai/assets/videos/english-outro.mp4"
  //             dhoniVideo.load()
  //             outroVideo.load()
  //         } else if (selectedLanguage === 'tamil') {
  //             dhoniVideoSource.src = 'https://cdn.makear.ai/assets/videos/tamil-intro.mp4';
  //             outroVideo.src = "https://cdn.makear.ai/assets/videos/tamil-outro.mp4"
  //             dhoniVideo.load()
  //             outroVideo.load()
  //         } else if (selectedLanguage === 'telugu') {
  //             dhoniVideoSource.src = 'https://cdn.makear.ai/assets/videos/telugu-intro.mp4';
  //             outroVideo.src = "https://cdn.makear.ai/assets/videos/telugu-outro.mp4"
  //             dhoniVideo.load()
  //             outroVideo.load()
  //         } else if (selectedLanguage === 'kannada') {
  //             dhoniVideoSource.src = 'https://cdn.makear.ai/assets/videos/kannada-intro.mp4'
  //             outroVideo.src = "https://cdn.makear.ai/assets/videos/kannada-outro.mp4"
  //             dhoniVideo.load()
  //             outroVideo.load()
  //         }

  //         languageSelectionBtn.forEach(btn => btn.classList.remove('active'));
  //         button.classList.add('active');
  //         getContentIncomingCall(selectedLanguage);
  //         console.log(selectedLanguage)
  //         getContentQuestions(selectedLanguage);
  //         hideElement(languageSelectionScreen, 500);
  //         showElement(incomingCallScreen, 0, 'flex');

  //         if (isAndroidOrWindows() && !callAccepted) {
  //             callAcceptedTimer = setTimeout(() => {
  //                 handlePickCall()
  //                 callAccepted = true;
  //             }, 3000)
  //         }
  //     });
  // });

  function isMobileScreen() {
    return window.innerWidth < 768;
  }
  function triggerEnglishSelectionIfNeeded() {
    if (!isMobileScreen()) return;

    // Don't even start the timer if currently in landscape
    if (window.innerWidth > window.innerHeight) return;
    if (!selectedLanguage && englishButton) {
      clearTimeout(autoSelectTimeout);
      autoSelectTimeout = setTimeout(function () {
        // Last second check before clicking: abort if landscape
        if (window.innerWidth > window.innerHeight) return;
        englishButton.click();
      }, 5000);
    }
  }
  languageSelectionBtn.forEach(function (button) {
    button.addEventListener("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            clearTimeout(autoSelectTimeout);
            selectedLanguage = button.id;
            fbq("track", "AddToCart");
            try {
              // Since we are deploying on a static host (Cloudflare Pages),
              // we no longer have a backend to handle POST requests or manage sessions.
              // We just call the UI update function directly!
              updateVideosAndStartExperience(selectedLanguage, button);
            } catch (error) {
              console.error("Error setting language:", error);
            }
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })));
  });
  function updateVideosAndStartExperience(selectedLanguage, button) {
    if (selectedLanguage === "english") {
      dhoniVideoSource.src = "https://cdn.makear.ai/private_videos/english-intro.mp4";
      outroVideo.src = "https://cdn.makear.ai/private_videos/english-outro.mp4";
      dhoniVideo.load();
      outroVideo.load();
    } else if (selectedLanguage === "tamil") {
      dhoniVideoSource.src = "https://cdn.makear.ai/assets/videos/tamil-intro.mp4";
      outroVideo.src = "https://cdn.makear.ai/assets/videos/tamil-outro.mp4";
      dhoniVideo.load();
      outroVideo.load();
    } else if (selectedLanguage === "telugu") {
      dhoniVideoSource.src = "https://cdn.makear.ai/assets/videos/telugu-intro.mp4";
      outroVideo.src = "https://cdn.makear.ai/assets/videos/telugu-outro.mp4";
      dhoniVideo.load();
      outroVideo.load();
    } else if (selectedLanguage === "kannada") {
      dhoniVideoSource.src = "https://cdn.makear.ai/assets/videos/kannada-intro.mp4";
      outroVideo.src = "https://cdn.makear.ai/assets/videos/kannada-outro.mp4";
      dhoniVideo.load();
      outroVideo.load();
    }
    languageSelectionBtn.forEach(function (btn) {
      return btn.classList.remove("active");
    });
    button.classList.add("active");
    (0,_arrayOutput__WEBPACK_IMPORTED_MODULE_1__.getContentIncomingCall)(selectedLanguage);
    (0,_arrayOutput__WEBPACK_IMPORTED_MODULE_1__.getContentQuestions)(selectedLanguage);
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.hideElement)(languageSelectionScreen, 500);
    // showElement(incomingCallScreen, 0, "flex");
    // if (isAndroidOrWindows() && !callAccepted) {
    //   callAcceptedTimer = setTimeout(() => {
    //     handlePickCall();
    //     callAccepted = true;
    //   }, 3000);
    // }
    handlePickCall();
  }

  // let touchStartY = 0;
  // let touchEndY = 0;
  // swipeUpPrompt.addEventListener("touchstart", (e) => {
  //     touchStartY = e.changedTouches[0].screenY;
  // });
  // swipeUpPrompt.addEventListener("touchend", (e) => {
  //     touchEndY = e.changedTouches[0].screenY;
  //     handleSwipe();
  // });
  // dhoniVideo.addEventListener('ended', () => {
  //     playIdleVideo();
  // });
  // function handleSwipe() {
  //     const swipeDistance = touchStartY - touchEndY;
  //     if (swipeDistance > 50) { // User swiped up
  //         swipeUpPrompt.textContent = "Starting...";
  //         arrowAnim.style.display = "none";
  //         hideElement(incomingCallScreen, 500)
  //         showElement(callConnectLoadingScreen, 0)
  //         showQuestionScreenAtEnd(selectedLanguage)
  //         setTimeout(() => {
  //             startCamera();
  //         }, 1000)
  //     }
  // }

  // async function startCamera() {
  //     try {
  //         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  //         cameraFeed.srcObject = stream;
  //         hideElement(callConnectLoadingScreen, 1000)
  //         showElement(avatarScreen, 0, 'flex')

  //         setTimeout(() => {
  //             dhoniVideo.play()
  //         }, 1000)
  //     } catch (err) {
  //         console.error("Camera error:", err);
  //         alert("Could not access the camera.");
  //     }
  // }

  // function handleSwipe() {
  //     const swipeDistance = touchStartY - touchEndY;
  //     if (swipeDistance > 50) {
  //         swipeUpPrompt.textContent = "Starting...";
  //         arrowAnim.style.display = "none";
  //         hideElement(incomingCallScreen, 500);
  //         showElement(callConnectLoadingScreen, 0);
  //         showQuestionScreenAtEnd(selectedLanguage);
  //         // iOS-friendly muted start
  //         dhoniVideo.muted = true;
  //         dhoniVideo.play().then(() => {
  //             startCamera();
  //         }).catch(err => console.error("Video play error:", err));
  //         // setTimeout(() => {
  //         //     startCamera();
  //         // }, 1000);
  //     }
  // }

  function handlePickCall() {
    fbq("track", "CompleteRegistration");
    callAccepted = true;
    clearInterval(callAcceptedTimer);
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.hideElement)(incomingCallScreen, 500);
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.showElement)(callConnectLoadingScreen, 0);
    // Commented out to prevent showing avatar screen before video is loaded and playing
    // showElement(avatarScreen, 0, "flex");
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.showQuestionScreenAtEnd)(selectedLanguage);

    // Hide camera feed and UI controls during the intro video
    var frameCamera = document.getElementById("frame-camera");
    if (frameCamera) {
      frameCamera.style.opacity = "0";
      frameCamera.style.pointerEvents = "none";
    }
    // const bottomBar = document.querySelector(".avatar-bottom-bar");
    // if (bottomBar) {
    //   bottomBar.style.display = "none";
    // }
    var callUiLogo = document.querySelector(".dhoni-avatar-bg img");
    if (callUiLogo) {
      // callUiLogo.style.display = "none";
    }

    // iOS-friendly muted start
    dhoniVideo.muted = true;
    dhoniVideo.play().then(function () {
      startCamera();
    })["catch"](function (err) {
      return console.error("Video play error:", err);
    });
  }
  pickcall.addEventListener("click", handlePickCall);
  function startCamera() {
    return _startCamera.apply(this, arguments);
  }
  function _startCamera() {
    _startCamera = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var stream;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return navigator.mediaDevices.getUserMedia({
              video: true
            });
          case 3:
            stream = _context3.sent;
            cameraFeed.srcObject = stream;
            cameraFeed.onloadedmetadata = function () {
              cameraFeed.play();
              // hideElement(callConnectLoadingScreen, 1000);
              // showElement(avatarScreen, 0, "flex");
              dhoniVideo.pause();
              dhoniVideo.currentTime = 0;
              dhoniVideo.muted = false;
              buffer1.style.opacity = "1";
              buffer2.style.opacity = "0";
              setTimeout(function () {
                dhoniVideo.play().then(function () {
                  // Reveal avatar screen and hide loading screen once the unmuted video is playing
                  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.showElement)(avatarScreen, 0, "flex");
                  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.hideElement)(callConnectLoadingScreen, 500);
                })["catch"](function (err) {
                  console.error("Replay error:", err);
                  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.showElement)(avatarScreen, 0, "flex");
                  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.hideElement)(callConnectLoadingScreen, 500);
                });
              }, 500); // Small delay to ensure everything settles
            };
            _context3.next = 17;
            break;
          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            // console.error("Camera error:", err);
            // alert("Could not access the camera.");

            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.hideElement)(cameraFeed);
            // hideElement(callConnectLoadingScreen, 1000);
            // showElement(avatarScreen, 0, "flex");
            dhoniVideo.pause();
            dhoniVideo.currentTime = 0;
            dhoniVideo.muted = false;
            buffer1.style.opacity = "1";
            buffer2.style.opacity = "0";
            setTimeout(function () {
              dhoniVideo.play().then(function () {
                // Reveal avatar screen and hide loading screen once the unmuted video is playing
                (0,_utils__WEBPACK_IMPORTED_MODULE_0__.showElement)(avatarScreen, 0, "flex");
                (0,_utils__WEBPACK_IMPORTED_MODULE_0__.hideElement)(callConnectLoadingScreen, 500);
              })["catch"](function (err) {
                console.error("Replay error:", err);
                (0,_utils__WEBPACK_IMPORTED_MODULE_0__.showElement)(avatarScreen, 0, "flex");
                (0,_utils__WEBPACK_IMPORTED_MODULE_0__.hideElement)(callConnectLoadingScreen, 500);
              });
            }, 500); // Small delay to ensure everything settles
          case 17:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 8]]);
    }));
    return _startCamera.apply(this, arguments);
  }
  function endCamera() {
    var stream = cameraFeed.srcObject;
    if (stream) {
      stream.getTracks().forEach(function (track) {
        return track.stop();
      });
      cameraFeed.srcObject = null;
    }
  }
  callEnd.addEventListener("click", function () {
    // console.log("Next Questions button clicked!");
    fbq("track", "Lead");
    // fetch("/complete");
    dhoniVideo.pause();
    dhoniVideo.currentTime = 0;
    idleVideo.pause();
    idleVideo.currentTime = 0;
    outroVideo.load();
    outroVideo.oncanplay = function () {
      outroVideo.play()["catch"](function (err) {
        return console.error("Playback failed:", err);
      });
    };

    // arrowAnim.style.display = "flex";
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.showElement)(shareDownloadScreen, 0);
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.hideElement)(avatarScreen, 500);
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.hideElement)(questionSelectContainer, 500);
    endCamera();
  });
  // downloadButton.addEventListener('click', function () {
  //     const enVideo = document.getElementById('endVideo');
  //     if (!enVideo || !enVideo.querySelector('source')) {
  //         alert('Video not found.');
  //         return;
  //     }
  //     const source = enVideo.querySelector('source');
  //     const videoUrl = source.getAttribute('src');
  //     const a = document.createElement('a');
  //     a.href = videoUrl;
  //     a.download = 'downloaded-video.mp4';
  //     document.body.appendChild(a);
  //     a.click();
  //     document.body.removeChild(a);
  // });
  // shareButton.addEventListener('click', async () => {
  //     const shareData = {
  //         title: document.title,
  //         text: 'Check this out! , https://talktothala.makear.ai/assets/images/thala.png',
  //         image: 'https://talk-to-thala.onrender.com/assets/images/thala.png',
  //         url: window.location.href // current page URL
  //     };
  //     if (navigator.share) {
  //         try {
  //             await navigator.share(shareData);
  //             console.log('Shared successfully');
  //         } catch (err) {
  //             console.error('Error sharing:', err);
  //         }
  //     } else {
  //         // Fallback: copy to clipboard
  //         navigator.clipboard.writeText(shareData.url).then(() => {
  //             alert('Link copied to clipboard!');
  //         });
  //     }
  // });

  shareButton.addEventListener("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var faviconLink, faviconUrl, response, blob, file, shareData;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          fbq("track", "SubmitApplication");
          faviconLink = document.querySelector("link[rel='icon']");
          if (faviconLink) {
            _context2.next = 4;
            break;
          }
          return _context2.abrupt("return", alert("Favicon not found"));
        case 4:
          faviconUrl = new URL(faviconLink.href, window.location.href).href;
          _context2.prev = 5;
          _context2.next = 8;
          return fetch(faviconUrl);
        case 8:
          response = _context2.sent;
          _context2.next = 11;
          return response.blob();
        case 11:
          blob = _context2.sent;
          file = new File([blob], "favicon.png", {
            type: "image/png"
          });
          shareData = {
            title: document.title,
            text: "I had my moment with Thala 💛 Now, it’s your turn! 3Roses made it possible for me, and you could be next. Here’s the link – don’t miss it:",
            url: "https://askthalaanything.com/",
            files: [file]
          };
          if (!(navigator.canShare && navigator.canShare({
            files: [file]
          }) && navigator.share)) {
            _context2.next = 19;
            break;
          }
          _context2.next = 17;
          return navigator.share(shareData);
        case 17:
          _context2.next = 20;
          break;
        case 19:
          throw new Error("Web Share Level 2 not supported or cannot share files");
        case 20:
          _context2.next = 35;
          break;
        case 22:
          _context2.prev = 22;
          _context2.t0 = _context2["catch"](5);
          console.error("Error sharing:", _context2.t0);
          alert("Sharing failed. Copying link to clipboard instead.");
          _context2.prev = 26;
          _context2.next = 29;
          return navigator.clipboard.writeText(window.location.href);
        case 29:
          alert("Link copied to clipboard!");
          _context2.next = 35;
          break;
        case 32:
          _context2.prev = 32;
          _context2.t1 = _context2["catch"](26);
          console.error("Clipboard write failed:", _context2.t1);
        case 35:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[5, 22], [26, 32]]);
  })));
  function restartCamera() {
    return _restartCamera.apply(this, arguments);
  } // outroVideo.addEventListener('ended', () => {
  //     hideElement(outroVideo, 300);
  //     showElement(shareHeroContainer, 100);
  // });
  function _restartCamera() {
    _restartCamera = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var stream;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return navigator.mediaDevices.getUserMedia({
              video: true
            });
          case 3:
            stream = _context4.sent;
            cameraFeed.srcObject = stream;
            cameraFeed.onloadedmetadata = function () {
              cameraFeed.play();
            };
            _context4.next = 11;
            break;
          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            if (_context4.t0.name === "NotAllowedError" || _context4.t0.name === "PermissionDeniedError") {
              console.error("Camera permission denied.");
              // alert("Please grant camera permission to use this feature.");
            } else {
              console.error("Error accessing the camera:", _context4.t0);
              // alert("Could not access the camera.");
            }
          case 11:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 8]]);
    }));
    return _restartCamera.apply(this, arguments);
  }
  function showBuffering(video, buffer) {
    video.addEventListener("waiting", function () {
      buffer.style.display = "block";
    });
    video.addEventListener("playing", function () {
      buffer.style.display = "none";
    });
    video.addEventListener("canplay", function () {
      buffer.style.display = "none";
    });
  }
  showBuffering(dhoniVideo, buffer1);
  showBuffering(idleVideo, buffer2);
  showBuffering(outroVideo, buffer3);
  document.addEventListener("visibilitychange", function () {
    var selfieOverlay = document.getElementById("selfie-screen-overlay");
    var isSelfieOpen = selfieOverlay && selfieOverlay.style.display === "block";
    if (document.hidden) {
      endCamera();
    } else {
      // Only restart the main camera if the selfie screen is not open
      if (!isSelfieOpen) {
        restartCamera();
      }
    }
  });
  window.addEventListener("beforeunload", function () {
    endCamera();
  });
  function setCookie(name, value, days) {
    var expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = "".concat(name, "=").concat(encodeURIComponent(value), ";expires=").concat(expires.toUTCString(), ";path=/");
  }
  function getCookie(name) {
    var cookieArr = document.cookie.split("; ");
    for (var i = 0; i < cookieArr.length; i++) {
      var cookiePair = cookieArr[i].split("=");
      if (name === cookiePair[0]) {
        return decodeURIComponent(cookiePair[1]);
      }
    }
    return null;
  }
  if (getCookie("cookiesAccepted") === "true") {
    cookieConsentBanner.style.display = "none";
    triggerEnglishSelectionIfNeeded();
  } else {
    cookieConsentBanner.style.display = "block";
  }
  setCookie("cookiesAccepted", "true", 60);
  closeCookieConsentBtn.addEventListener("click", function () {
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.hideElement)(cookieConsentBanner, 200);
    triggerEnglishSelectionIfNeeded();
  });
  setTimeout(function () {
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.hideElement)(cookieConsentBanner, 200);
    triggerEnglishSelectionIfNeeded();
  }, 5000);
  cookieConsentBanner.addEventListener("click", function (e) {
    if (!e.target.closest(".cookie-consent")) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.hideElement)(cookieConsentBanner, 200);
      triggerEnglishSelectionIfNeeded();
    }
  });
  var globalRotateOverlay = document.getElementById("global-rotate-overlay");
  var playingVideos = [];
  function checkGlobalOrientation() {
    if (!isMobileScreen()) return; // Only for mobile

    // Check if landscape by comparing width and height
    var isLandscape = window.innerWidth > window.innerHeight;

    // Check if selfie screen is open
    var selfieOverlay = document.getElementById("selfie-screen-overlay");
    var isSelfieOpen = selfieOverlay && selfieOverlay.style.display === "block";
    if (isLandscape && !isSelfieOpen) {
      // Show overlay
      if (globalRotateOverlay) {
        globalRotateOverlay.style.display = "flex";
      }
      // Stop the auto-select timer
      clearTimeout(autoSelectTimeout);

      // Track playing videos and mute/pause them
      allVideos.forEach(function (vid) {
        if (!vid.paused && vid.readyState >= 2) {
          if (!playingVideos.includes(vid)) {
            playingVideos.push(vid);
          }
          vid.muted = true;
          vid.pause();
        }
      });
    } else {
      // Hide overlay
      if (globalRotateOverlay) {
        globalRotateOverlay.style.display = "none";
      }

      // We do NOT resume the auto-select timer if the user rotates back to portrait.
      // By rotating, they've shown active engagement, so we wait for them to manually choose a language.

      // Resume tracked videos
      if (playingVideos.length > 0) {
        playingVideos.forEach(function (vid) {
          vid.muted = false;
          vid.play()["catch"](function (e) {
            return console.error("Could not auto-resume video:", e);
          });
        });
        playingVideos = [];
      }
    }
  }
  window.addEventListener("resize", checkGlobalOrientation);
  window.addEventListener("orientationchange", checkGlobalOrientation);

  // Call once to initialize
  setTimeout(checkGlobalOrientation, 100);
}

/***/ }),

/***/ "./frontend-js/modules/segmentation.js":
/*!*********************************************!*\
  !*** ./frontend-js/modules/segmentation.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VideoSegmentation)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function VideoSegmentation() {
  var cameraFeed = document.getElementById("camera-feed");
  if (!cameraFeed) return;

  // 1. Hide the original camera-feed element
  cameraFeed.style.display = "none";

  // 2. Create the background image element
  var cameraBg = document.createElement("img");
  cameraBg.id = "camera-bg";
  cameraBg.src = "https://cdn.makear.ai/assets/images/user-feed-bg-img.png";
  cameraBg.style.width = "100%";
  cameraBg.style.height = "100%";
  cameraBg.style.objectFit = "cover";
  cameraBg.style.position = "absolute";
  cameraBg.style.top = "0";
  cameraBg.style.left = "0";
  cameraBg.style.zIndex = "1";

  // 3. Create the transparent canvas element for segmented user feed
  var canvasElement = document.createElement("canvas");
  canvasElement.id = "camera-canvas";
  canvasElement.style.width = "100%";
  canvasElement.style.height = "100%";
  canvasElement.style.objectFit = "cover";
  canvasElement.style.position = "absolute";
  canvasElement.style.bottom = "0";
  canvasElement.style.left = "0";
  canvasElement.style.zIndex = "2";
  canvasElement.style.transform = "scaleX(-1)"; // Mirror the user feed (matching original camera style)
  // canvasElement.style.filter = "drop-shadow(0px 5px 15px rgba(0,0,0,0.6))";

  // 4. Inject elements into the frame parent
  var parent = cameraFeed.parentElement;
  if (parent) {
    parent.style.position = "relative";
    parent.appendChild(cameraBg);
    parent.appendChild(canvasElement);
  }
  var ctx = canvasElement.getContext("2d");

  // GPU-Optimized Buffers for Temporal Smoothing (from original video segmentation script)
  var maskCanvas = document.createElement("canvas");
  var maskCtx = maskCanvas.getContext("2d");
  var smoothMaskCanvas = document.createElement("canvas");
  var smoothMaskCtx = smoothMaskCanvas.getContext("2d");
  var selfieSegmentation = null;
  var isLoaded = false;
  function loadScript(_x) {
    return _loadScript.apply(this, arguments);
  }
  function _loadScript() {
    _loadScript = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              var script = document.createElement("script");
              script.src = url;
              script.onload = resolve;
              script.onerror = reject;
              document.head.appendChild(script);
            }));
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _loadScript.apply(this, arguments);
  }
  function init() {
    return _init.apply(this, arguments);
  }
  function _init() {
    _init = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            if (window.SelfieSegmentation) {
              _context2.next = 4;
              break;
            }
            _context2.next = 4;
            return loadScript("https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation/selfie_segmentation.js");
          case 4:
            selfieSegmentation = new window.SelfieSegmentation({
              locateFile: function locateFile(file) {
                return "https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation/".concat(file);
              }
            });

            // Set segmentation options. modelSelection: 1 is optimized for landscape/general selfie segmentation.
            selfieSegmentation.setOptions({
              modelSelection: 1
            });
            selfieSegmentation.onResults(function (results) {
              var w = results.image.width;
              var h = results.image.height;
              if (canvasElement.width !== w || canvasElement.height !== h) {
                canvasElement.width = w;
                canvasElement.height = h;
                maskCanvas.width = w;
                maskCanvas.height = h;
                smoothMaskCanvas.width = w;
                smoothMaskCanvas.height = h;
              }

              // 1. Prepare Raw Mask
              maskCtx.clearRect(0, 0, w, h);
              maskCtx.drawImage(results.segmentationMask, 0, 0, w, h);

              // 2. Temporal Smoothing to reduce flickering
              var smoothFactor = 0.0;
              var blendAlpha = Math.max(0.01, 1 - smoothFactor);
              smoothMaskCtx.globalCompositeOperation = "copy";
              smoothMaskCtx.globalAlpha = blendAlpha;
              smoothMaskCtx.drawImage(maskCanvas, 0, 0);
              smoothMaskCtx.globalAlpha = 1.0;

              // 3. Render Final Segmented Person
              ctx.save();
              ctx.clearRect(0, 0, w, h);

              // Apply contrast, brightness and saturation corrections matching the video Segmentation project
              ctx.filter = "brightness(1.05) contrast(1.52) saturate(1)";

              // Draw the camera image
              ctx.drawImage(results.image, 0, 0, w, h);

              // Apply the smooth mask to isolate the user
              ctx.globalCompositeOperation = "destination-in";
              var blurAmt = 2; // soft edge blur
              if (blurAmt > 0) {
                ctx.filter = "blur(".concat(blurAmt, "px) contrast(1.2)");
              } else {
                ctx.filter = "none";
              }
              ctx.drawImage(smoothMaskCanvas, 0, 0);
              ctx.restore();
            });
            isLoaded = true;
            render();
            _context2.next = 14;
            break;
          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            console.error("Failed to load or initialize SelfieSegmentation:", _context2.t0);
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 11]]);
    }));
    return _init.apply(this, arguments);
  }
  var lastTime = -1;
  function render() {
    return _render.apply(this, arguments);
  } // Start initialization
  function _render() {
    _render = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!(isLoaded && selfieSegmentation && cameraFeed.readyState >= 2 && !cameraFeed.paused && !cameraFeed.ended)) {
              _context3.next = 11;
              break;
            }
            if (!(cameraFeed.currentTime !== lastTime)) {
              _context3.next = 11;
              break;
            }
            lastTime = cameraFeed.currentTime;
            _context3.prev = 3;
            _context3.next = 6;
            return selfieSegmentation.send({
              image: cameraFeed
            });
          case 6:
            _context3.next = 11;
            break;
          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](3);
            console.error("Error sending frame to SelfieSegmentation:", _context3.t0);
          case 11:
            requestAnimationFrame(render);
          case 12:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[3, 8]]);
    }));
    return _render.apply(this, arguments);
  }
  init();
}

/***/ }),

/***/ "./frontend-js/modules/selfie.js":
/*!***************************************!*\
  !*** ./frontend-js/modules/selfie.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelfieScreen)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function SelfieScreen() {
  var selfieBtn = document.getElementById("selfieButton");
  var shareBtn = document.getElementById("shareButton");
  if (!selfieBtn || !shareBtn) return;

  // 1. Inject Selfie/Share Button Styles
  var styleEl = document.createElement("style");
  styleEl.innerHTML = "\n    .share-button-container {\n      display: flex !important;\n      flex-direction: column !important;\n      align-items: center !important;\n      justify-content: center !important;\n      gap: 12px !important;\n      width: 100% !important;\n      max-width: 480px !important;\n      pointer-events: none;\n      position: absolute;\n      bottom: 2rem;\n      left: 0;\n      right: 0;\n      margin: auto;\n    }\n\n    .selfie-trigger-btn, .share-trigger-btn {\n      background: #e1c070;\n      clip-path: polygon(25px 0%, calc(100% - 25px) 0%, 100% calc(50% - 3px), 100% calc(50% + 3px), calc(100% - 25px) 100%, 25px 100%, 0% calc(50% + 3px), 0% calc(50% - 3px));\n      position: relative;\n      padding: 10px 30px !important;\n      box-sizing: border-box;\n      cursor: pointer;\n      transition: all 0.2s ease-in-out;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      z-index: 2;\n      width: 90% !important;\n      min-height: 48px;\n      border: none !important;\n      border-radius: 0 !important;\n      margin: 0 auto !important;\n    }\n\n    .selfie-trigger-btn::before, .share-trigger-btn::before {\n      content: \"\";\n      position: absolute;\n      top: 2px;\n      left: 2px;\n      right: 2px;\n      bottom: 2px;\n      background: linear-gradient(90deg, #F10005 0%, #EB1B1F 50%, #F10005 100%);\n      clip-path: polygon(24px 0%, calc(100% - 24px) 0%, 100% calc(50% - 3px), 100% calc(50% + 3px), calc(100% - 24px) 100%, 24px 100%, 0% calc(50% + 3px), 0% calc(50% - 3px));\n      z-index: -1;\n      transition: all 0.2s ease-in-out;\n    }\n\n    .selfie-trigger-btn .btn-text, .share-trigger-btn .btn-text {\n      color: white;\n      font-size: 1.6dvh;\n      font-family: \"Poppins\", sans-serif;\n      font-weight: 700;\n      text-align: center;\n      z-index: 3;\n      text-transform: uppercase;\n    }\n\n    .selfie-trigger-btn:active, .share-trigger-btn:active {\n      transform: scale(0.98);\n      filter: brightness(1.1);\n    }\n\n    .share-trigger-btn .icon_share {\n      width: 18px;\n      height: 18px;\n      margin-right: 8px;\n      display: inline-block;\n      vertical-align: middle;\n      display: none; \n    }\n\n    /* Selfie Screen UI */\n    #selfie-screen-overlay {\n      position: fixed;\n      width: 100vw !important;\n      height: 100dvh !important;\n      top: 0 !important;\n      left: 0 !important;\n      background-color: #000;\n      z-index: 10000;\n      display: none;\n      font-family: 'Poppins', sans-serif;\n      overflow: hidden;\n    }\n\n    .selfie-stage-video {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      z-index: 1;\n      transition: all 0.3s ease-in-out;\n    }\n\n    /* Base canvas style \u2014 always positioned absolutely, above the bg video */\n    .selfie-user-canvas {\n      position: absolute;\n      z-index: 3;\n      display: block;\n    }\n\n    .selfie-preview-container {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      z-index: 2;\n    }\n\n    /* ==========================================================================\n       PORTRAIT VIEWPORT STYLES (Vertical Mode / Locked Portrait)\n       ========================================================================== */\n    #selfie-screen-overlay.is-portrait .selfie-stage-video {\n      position: absolute;\n      width: 100dvh;\n      height: 100vw;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%) rotate(90deg);\n      object-fit: cover;\n      z-index: 1;\n    }\n\n    /* Portrait (screen locked vertical, phone may be physically rotated horizontal):\n       The canvas stream is landscape from the camera, so we rotate it -90deg to fill the portrait screen correctly.\n       scaleX(-1) mirrors the user feed. */\n    #selfie-screen-overlay.is-portrait .selfie-user-canvas {\n       position: absolute;\n    left: -8vw;\n    top: 7dvh;\n    width: 86vw;\n    height: 70vw;\n    transform: rotate(90deg) scaleX(-1);\n    object-fit: cover;\n    z-index: 3;\n    filter: drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.6));\n    }\n\n    #selfie-screen-overlay.is-portrait .selfie-controls-bar {\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      width: 100%;\n      height: 80px;\n      background: rgba(0, 0, 0, 0.7);\n      display: flex;\n      flex-direction: row;\n      justify-content: space-around;\n      align-items: center;\n      z-index: 5;\n    }\n\n    #selfie-screen-overlay.is-portrait .selfie-controls-bar .selfie-action-icon,\n    #selfie-screen-overlay.is-portrait .selfie-controls-bar .selfie-shutter-btn {\n      transform: rotate(90deg);\n    }\n\n    #selfie-screen-overlay.is-portrait .selfie-preview-overlay {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: rgba(0, 0, 0, 0.95);\n      z-index: 10;\n      display: none;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n    }\n\n    #selfie-screen-overlay.is-portrait .selfie-preview-img {\n      max-width: 80%;\n      max-height: 55dvh;\n      transform: rotate(90deg);\n      border: 3px solid #e1c070;\n      box-shadow: 0 5px 25px rgba(0,0,0,0.8);\n      border-radius: 4px;\n      object-fit: contain;\n      position: absolute;\n      top: 20dvh;\n    }\n\n    #selfie-screen-overlay.is-portrait .selfie-preview-buttons {\n      position: absolute;\n      bottom: 14%;\n      left: 0;\n      width: 100%;\n      display: flex;\n      justify-content: center;\n      gap: 0;\n      z-index: 12;\n    }\n\n    #selfie-screen-overlay.is-portrait .selfie-preview-buttons .selfie-modal-btn {\n      transform: rotate(90deg);\n    }\n\n    /* ==========================================================================\n       LANDSCAPE VIEWPORT STYLES (Horizontal Mode / Natural Landscape)\n       ========================================================================== */\n    #selfie-screen-overlay.is-landscape .selfie-stage-video {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      z-index: 1;\n      transform: none;\n    }\n\n    #selfie-screen-overlay.is-landscape .selfie-user-canvas {\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      width: 50%;\n      height: 90dvh;\n      object-fit: cover;\n      transform: scaleX(-1);\n      z-index: 3;\n      filter: drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.6));\n    }\n\n    #selfie-screen-overlay.is-landscape .selfie-controls-bar {\n      position: absolute;\n      right: 0;\n      top: 0;\n      width: 90px;\n      height: 100%;\n      background: rgba(0, 0, 0, 0.7);\n      display: flex;\n      flex-direction: column;\n      justify-content: space-around;\n      align-items: center;\n      z-index: 5;\n    }\n\n    #selfie-screen-overlay.is-landscape .selfie-preview-overlay {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: rgba(0, 0, 0, 0.95);\n      z-index: 10;\n      display: none;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n    }\n\n    #selfie-screen-overlay.is-landscape .selfie-preview-img {\n      max-width: 85%;\n      max-height: 75%;\n      border: 3px solid #e1c070;\n      box-shadow: 0 5px 25px rgba(0,0,0,0.8);\n      border-radius: 4px;\n      object-fit: contain;\n    }\n\n    #selfie-screen-overlay.is-landscape .selfie-preview-buttons {\n      display: flex;\n      margin-top: 20px;\n      gap: 20px;\n    }\n\n    .selfie-shutter-btn {\n      width: 65px;\n      height: 65px;\n      border-radius: 50%;\n      background: #ffffff;\n      border: 5px solid rgba(255, 255, 255, 0.4);\n      cursor: pointer;\n      box-shadow: 0 4px 10px rgba(0,0,0,0.5);\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      transition: transform 0.1s;\n    }\n\n    .selfie-shutter-btn:active {\n      transform: scale(0.92);\n    }\n\n    .selfie-shutter-inner {\n      width: 45px;\n      height: 45px;\n      border-radius: 50%;\n      background: #ffffff;\n      border: 2px solid #000000;\n    }\n\n    .selfie-action-icon {\n      width: 44px;\n      height: 44px;\n      border-radius: 50%;\n      background: rgba(255, 255, 255, 0.15);\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      cursor: pointer;\n      color: white;\n      border: 1px solid rgba(255, 255, 255, 0.3);\n      transition: background-color 0.2s, transform 0.2s;\n    }\n\n    .selfie-action-icon:hover {\n      background: rgba(255, 255, 255, 0.3);\n    }\n\n    /* Flash Screen Effect */\n    .selfie-flash {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: #ffffff;\n      z-index: 9999;\n      opacity: 0;\n      pointer-events: none;\n      transition: opacity 0.15s ease-out;\n    }\n\n    .selfie-modal-btn {\n      background: #e1c070;\n      border: none;\n      padding: 10px 24px;\n      color: #000;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      font-family: 'Poppins', sans-serif;\n      box-shadow: 0 4px 6px rgba(0,0,0,0.2);\n    }\n\n    .selfie-modal-btn:active {\n      transform: scale(0.97);\n    }\n\n    /* Rotate Prompt */\n    .selfie-rotate-prompt {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: rgba(0, 0, 0, 0.75);\n      z-index: 100000;\n      display: none;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      color: white;\n      text-align: center;\n      box-sizing: border-box;\n      backdrop-filter: blur(4px);\n    }\n    .selfie-rotate-prompt-text {\n      font-size: 20px;\n      font-weight: 600;\n      margin-top: 20px;\n      max-width: 80%;\n      line-height: 1.4;\n      font-family: 'Poppins', sans-serif;\n    }\n    .selfie-rotate-prompt-close {\n      position: absolute;\n      top: 25px;\n      right: 25px;\n      width: 40px;\n      height: 40px;\n      background: rgba(255,255,255,0.2);\n      border-radius: 50%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      cursor: pointer;\n      font-size: 28px;\n      line-height: 1;\n      border: 1px solid rgba(255,255,255,0.4);\n    }\n    .selfie-rotate-icon {\n      width: 64px;\n      height: 64px;\n      animation: rotate-anim 2s infinite ease-in-out;\n    }\n    @keyframes rotate-anim {\n      0% { transform: rotate(0deg); }\n      50% { transform: rotate(90deg); }\n      100% { transform: rotate(0deg); }\n    }\n  ";
  document.head.appendChild(styleEl);

  // The buttons are already present in the index.ejs DOM template directly!

  // 4. Create Selfie Overlay DOM
  var overlay = document.createElement("div");
  overlay.id = "selfie-screen-overlay";
  overlay.className = "is-portrait"; // default orientation
  overlay.innerHTML = "\n    <div class=\"selfie-preview-container\">\n      <video id=\"selfie-video-element\" autoplay playsinline muted style=\"display: none;\"></video>\n      <video class=\"selfie-stage-video\" id=\"selfie-bg-video-element\" loop playsinline autoplay muted crossorigin=\"anonymous\">\n        <source src=\"https://cdn.makear.ai/private_videos/selfie-bg-video.mp4\" type=\"video/mp4\" />\n      </video>\n      <canvas class=\"selfie-user-canvas\" id=\"selfie-canvas-element\"></canvas>\n    </div>\n    <div class=\"selfie-controls-bar\">\n      <!-- Close/Back Button -->\n      <div class=\"selfie-action-icon\" id=\"selfie-close-btn\" title=\"Back\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n          <line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"></line>\n          <line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"></line>\n        </svg>\n      </div>\n      <!-- Capture Shutter Button -->\n      <div class=\"selfie-shutter-btn\" id=\"selfie-capture-btn\" title=\"Capture\">\n        <div class=\"selfie-shutter-inner\"></div>\n      </div>\n      <!-- Empty space to align with capture and close buttons -->\n      <div style=\"width: 44px; height: 44px; opacity: 0;\"></div>\n    </div>\n    <div class=\"selfie-flash\" id=\"selfie-flash-effect\"></div>\n    <!-- Capture Preview & Actions Modal -->\n    <div class=\"selfie-preview-overlay\" id=\"selfie-modal\">\n      <img class=\"selfie-preview-img\" id=\"selfie-captured-preview\" src=\"\" alt=\"Selfie Preview\" />\n      <div class=\"selfie-preview-buttons\">\n        <button class=\"selfie-modal-btn\" id=\"selfie-download-btn\">DOWNLOAD</button>\n        <button class=\"selfie-modal-btn\" id=\"selfie-retake-btn\" style=\"background: #555; color: #fff;\">RETAKE</button>\n      </div>\n    </div>\n    <!-- Rotate Prompt -->\n    <div class=\"selfie-rotate-prompt\" id=\"selfie-rotate-prompt\">\n      <div class=\"selfie-rotate-prompt-close\" id=\"selfie-rotate-close\">&times;</div>\n      <svg class=\"selfie-rotate-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n        <rect x=\"5\" y=\"2\" width=\"14\" height=\"20\" rx=\"2\" ry=\"2\"></rect>\n        <line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"></line>\n      </svg>\n      <div class=\"selfie-rotate-prompt-text\">Rotate your device to click selfie with Thala</div>\n    </div>\n  ";
  document.body.appendChild(overlay);

  // 5. Selfie Setup
  var selfieVideo = document.getElementById("selfie-video-element");
  var selfieCanvas = document.getElementById("selfie-canvas-element");
  // NOTE: selfieCtx is NOT cached here — canvas.width/height resets the context.
  // Always call selfieCanvas.getContext("2d") fresh after a resize.
  var dhoniVideo = document.getElementById("selfie-bg-video-element");
  var closeBtn = document.getElementById("selfie-close-btn");
  var captureBtn = document.getElementById("selfie-capture-btn");
  var flashEffect = document.getElementById("selfie-flash-effect");
  var modal = document.getElementById("selfie-modal");
  var previewImg = document.getElementById("selfie-captured-preview");
  var downloadBtn = document.getElementById("selfie-download-btn");
  var retakeBtn = document.getElementById("selfie-retake-btn");
  var promptEl = document.getElementById("selfie-rotate-prompt");
  var promptCloseBtn = document.getElementById("selfie-rotate-close");
  var localStream = null;
  var selfieSegmentation = null;
  var isMediaPipeLoaded = false;
  var captureDataUrl = null;
  var animationFrameId = null;

  // GPU Buffers for Smoothing
  var maskCanvas = document.createElement("canvas");
  var maskCtx = maskCanvas.getContext("2d");
  var smoothMaskCanvas = document.createElement("canvas");
  var smoothMaskCtx = smoothMaskCanvas.getContext("2d");
  function loadScript(_x) {
    return _loadScript.apply(this, arguments);
  }
  function _loadScript() {
    _loadScript = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              var script = document.createElement("script");
              script.src = url;
              script.onload = resolve;
              script.onerror = reject;
              document.head.appendChild(script);
            }));
          case 1:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return _loadScript.apply(this, arguments);
  }
  function initMediaPipe() {
    return _initMediaPipe.apply(this, arguments);
  }
  function _initMediaPipe() {
    _initMediaPipe = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var drawFrame;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!isMediaPipeLoaded) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return");
          case 2:
            _context3.prev = 2;
            // Helper to draw standard or rotated frames
            drawFrame = function drawFrame(ctx, img, w, h, isStreamPortrait) {
              ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
              if (isStreamPortrait) {
                ctx.save();
                ctx.translate(h / 2, w / 2);
                ctx.rotate(90 * Math.PI / 180);
                ctx.drawImage(img, -w / 2, -h / 2, w, h);
                ctx.restore();
              } else {
                ctx.drawImage(img, 0, 0, w, h);
              }
            };
            if (window.SelfieSegmentation) {
              _context3.next = 7;
              break;
            }
            _context3.next = 7;
            return loadScript("https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation/selfie_segmentation.js");
          case 7:
            selfieSegmentation = new window.SelfieSegmentation({
              locateFile: function locateFile(file) {
                return "https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation/".concat(file);
              }
            });
            selfieSegmentation.setOptions({
              modelSelection: 1
            });
            selfieSegmentation.onResults(function (results) {
              var w = results.image.width;
              var h = results.image.height;
              var isStreamPortrait = w < h;
              var targetW = isStreamPortrait ? h : w;
              var targetH = isStreamPortrait ? w : h;
              if (selfieCanvas.width !== targetW || selfieCanvas.height !== targetH) {
                selfieCanvas.width = targetW;
                selfieCanvas.height = targetH;
                // Reset any inline size so CSS always controls the display dimensions
                selfieCanvas.style.width = "";
                selfieCanvas.style.height = "";
                maskCanvas.width = targetW;
                maskCanvas.height = targetH;
                smoothMaskCanvas.width = targetW;
                smoothMaskCanvas.height = targetH;
              }

              // Always get a fresh context — canvas resize invalidates any cached reference
              var ctx = selfieCanvas.getContext("2d");

              // 1. Prepare raw mask
              maskCtx.clearRect(0, 0, targetW, targetH);
              drawFrame(maskCtx, results.segmentationMask, w, h, isStreamPortrait);

              // 2. Smoothing
              var smoothFactor = 0.0;
              var blendAlpha = Math.max(0.01, 1 - smoothFactor);
              smoothMaskCtx.globalCompositeOperation = "copy";
              smoothMaskCtx.globalAlpha = blendAlpha;
              smoothMaskCtx.drawImage(maskCanvas, 0, 0);
              smoothMaskCtx.globalAlpha = 1.0;

              // 3. Render final frame
              ctx.save();
              ctx.clearRect(0, 0, targetW, targetH);

              // KBC Contrast / Brightness adjustments
              ctx.filter = "brightness(1.05) contrast(1.52) saturate(1)";
              drawFrame(ctx, results.image, w, h, isStreamPortrait);

              // Apply smooth mask
              ctx.globalCompositeOperation = "destination-in";
              var blurAmt = 2;
              if (blurAmt > 0) {
                ctx.filter = "blur(".concat(blurAmt, "px) contrast(1.2)");
              } else {
                ctx.filter = "none";
              }
              ctx.drawImage(smoothMaskCanvas, 0, 0);
              ctx.restore();
            });
            isMediaPipeLoaded = true;
            _context3.next = 16;
            break;
          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](2);
            console.error("Selfie MediaPipe initialization failed:", _context3.t0);
          case 16:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[2, 13]]);
    }));
    return _initMediaPipe.apply(this, arguments);
  }
  function startCamera() {
    return _startCamera.apply(this, arguments);
  }
  function _startCamera() {
    _startCamera = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return navigator.mediaDevices.getUserMedia({
              video: {
                facingMode: "user"
              },
              audio: false
            });
          case 3:
            localStream = _context4.sent;
            selfieVideo.srcObject = localStream;
            _context4.next = 7;
            return selfieVideo.play();
          case 7:
            renderLoop();
            _context4.next = 14;
            break;
          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            console.error("Camera access failed on selfie page:", _context4.t0);
            alert("Could not access camera for selfie.");
          case 14:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 10]]);
    }));
    return _startCamera.apply(this, arguments);
  }
  function stopCamera() {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
    if (localStream) {
      localStream.getTracks().forEach(function (track) {
        return track.stop();
      });
      localStream = null;
    }
    selfieVideo.srcObject = null;
  }
  var lastTime = -1;
  function renderLoop() {
    return _renderLoop.apply(this, arguments);
  } // Composes the final capture matching exactly what the user sees on screen
  function _renderLoop() {
    _renderLoop = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            if (!(isMediaPipeLoaded && selfieSegmentation && selfieVideo.readyState >= 2 && !selfieVideo.paused && !selfieVideo.ended)) {
              _context5.next = 11;
              break;
            }
            if (!(selfieVideo.currentTime !== lastTime)) {
              _context5.next = 11;
              break;
            }
            lastTime = selfieVideo.currentTime;
            _context5.prev = 3;
            _context5.next = 6;
            return selfieSegmentation.send({
              image: selfieVideo
            });
          case 6:
            _context5.next = 11;
            break;
          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](3);
            console.error("Error sending selfie frame:", _context5.t0);
          case 11:
            animationFrameId = requestAnimationFrame(renderLoop);
          case 12:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[3, 8]]);
    }));
    return _renderLoop.apply(this, arguments);
  }
  function captureSelfie() {
    // Flash effect
    flashEffect.style.opacity = "1";
    setTimeout(function () {
      flashEffect.style.opacity = "0";
    }, 150);

    // Output canvas is always landscape 1280x720
    var OUTPUT_W = 1280;
    var OUTPUT_H = 720;
    var captureCanvas = document.createElement("canvas");
    captureCanvas.width = OUTPUT_W;
    captureCanvas.height = OUTPUT_H;
    var cCtx = captureCanvas.getContext("2d");

    // Read real on-screen dimensions
    var overlayRect = overlay.getBoundingClientRect();
    var canvasRect = selfieCanvas.getBoundingClientRect();
    var isPortrait = overlay.classList.contains("is-portrait");
    var W = overlayRect.width;
    var H = overlayRect.height;

    // 1. Draw Background Video filling the output
    // The background video is 16:9, so it perfectly fills 1280x720.
    cCtx.drawImage(dhoniVideo, 0, 0, OUTPUT_W, OUTPUT_H);

    // 2. Draw User Canvas mapped correctly
    if (selfieCanvas.width > 0 && selfieCanvas.height > 0) {
      cCtx.save();
      if (isPortrait) {
        // Map from portrait screen coords (W x H) to landscape output coords (1280x720)
        // Screen center to origin
        cCtx.translate(OUTPUT_W / 2, OUTPUT_H / 2);
        // Undo the UI's 90deg rotation
        cCtx.rotate(-Math.PI / 2);
        // Scale from unrotated video size on screen (which is H wide, W tall) to 1280x720
        cCtx.scale(OUTPUT_W / H, OUTPUT_H / W);
        // Move origin back to top-left of screen space
        cCtx.translate(-W / 2, -H / 2);

        // Now we are in portrait screen space!
        var cx = canvasRect.left + canvasRect.width / 2;
        var cy = canvasRect.top + canvasRect.height / 2;
        cCtx.translate(cx, cy);

        // Apply canvas CSS transform: rotate(90deg) scaleX(-1)
        cCtx.rotate(Math.PI / 2);
        cCtx.scale(-1, 1);

        // Draw canvas using its CSS dimensions.
        // Since it was rotated 90deg, its CSS width is visual height, CSS height is visual width.
        var cssWidth = canvasRect.height;
        var cssHeight = canvasRect.width;

        // Calculate final painted dimensions to maintain original ratio under non-uniform scale
        var finalW = cssWidth * (OUTPUT_H / W);
        var finalH = cssHeight * (OUTPUT_W / H);

        // Emulate object-fit: cover to maintain original ratio
        var sW = selfieCanvas.width;
        var sH = selfieCanvas.height;
        var scaleFit = Math.max(finalW / sW, finalH / sH);
        var srcW = finalW / scaleFit;
        var srcH = finalH / scaleFit;
        var srcX = (sW - srcW) / 2;
        var srcY = (sH - srcH) / 2;
        cCtx.drawImage(selfieCanvas, srcX, srcY, srcW, srcH, -cssWidth / 2, -cssHeight / 2, cssWidth, cssHeight);
      } else {
        // Landscape Mode mapping
        cCtx.scale(OUTPUT_W / W, OUTPUT_H / H);
        var _cx = canvasRect.left + canvasRect.width / 2;
        var _cy = canvasRect.top + canvasRect.height / 2;
        cCtx.translate(_cx, _cy);

        // Apply canvas CSS transform: scaleX(-1)
        cCtx.scale(-1, 1);
        var _cssWidth = canvasRect.width;
        var _cssHeight = canvasRect.height;

        // Calculate final painted dimensions to maintain original ratio under non-uniform scale
        var _finalW = _cssWidth * (OUTPUT_W / W);
        var _finalH = _cssHeight * (OUTPUT_H / H);

        // Emulate object-fit: cover to maintain original ratio
        var _sW = selfieCanvas.width;
        var _sH = selfieCanvas.height;
        var _scaleFit = Math.max(_finalW / _sW, _finalH / _sH);
        var _srcW = _finalW / _scaleFit;
        var _srcH = _finalH / _scaleFit;
        var _srcX = (_sW - _srcW) / 2;
        var _srcY = (_sH - _srcH) / 2;
        cCtx.drawImage(selfieCanvas, _srcX, _srcY, _srcW, _srcH, -_cssWidth / 2, -_cssHeight / 2, _cssWidth, _cssHeight);
      }
      cCtx.restore();
    }

    // Show Preview modal
    captureDataUrl = captureCanvas.toDataURL("image/png");
    previewImg.src = captureDataUrl;
    modal.style.display = "flex";
  }

  // Dynamic Orientation Tracker
  function updateOrientation() {
    var isPortrait = window.innerWidth < window.innerHeight;
    if (isPortrait) {
      overlay.classList.add("is-portrait");
      overlay.classList.remove("is-landscape");
    } else {
      overlay.classList.add("is-landscape");
      overlay.classList.remove("is-portrait");
    }
  }

  // Tab Visibility Change Handler for Selfie Screen
  function handleVisibilityChange() {
    return _handleVisibilityChange.apply(this, arguments);
  }
  function _handleVisibilityChange() {
    _handleVisibilityChange = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            if (!(document.visibilityState === "visible")) {
              _context6.next = 10;
              break;
            }
            if (!(overlay.style.display === "block")) {
              _context6.next = 8;
              break;
            }
            console.log("Selfie tab became active, restarting camera...");
            dhoniVideo.play()["catch"](function (e) {
              return console.error(e);
            });
            _context6.next = 6;
            return initMediaPipe();
          case 6:
            _context6.next = 8;
            return startCamera();
          case 8:
            _context6.next = 11;
            break;
          case 10:
            if (overlay.style.display === "block") {
              console.log("Selfie tab became hidden, stopping camera...");
              stopCamera();
              dhoniVideo.pause();
            }
          case 11:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return _handleVisibilityChange.apply(this, arguments);
  }
  document.addEventListener("visibilitychange", handleVisibilityChange);
  window.addEventListener("resize", updateOrientation);
  window.addEventListener("orientationchange", updateOrientation);
  updateOrientation();

  // Events
  selfieBtn.addEventListener("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var outroVideo;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          outroVideo = document.getElementById("endVideo");
          if (outroVideo && !outroVideo.paused && !outroVideo.ended) {
            if (outroVideo.duration) {
              outroVideo.currentTime = outroVideo.duration - 0.1;
            }
            outroVideo.pause();
          }
          overlay.style.display = "block";

          // Show rotate prompt and hide after 4 sec
          if (promptEl) {
            promptEl.style.display = "flex";
            setTimeout(function () {
              if (promptEl.style.display === "flex") {
                promptEl.style.display = "none";
              }
            }, 4000);
          }
          dhoniVideo.play();
          _context.next = 7;
          return initMediaPipe();
        case 7:
          _context.next = 9;
          return startCamera();
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  if (promptCloseBtn && promptEl) {
    promptCloseBtn.addEventListener("click", function () {
      promptEl.style.display = "none";
    });
  }
  closeBtn.addEventListener("click", function () {
    stopCamera();
    dhoniVideo.pause();
    overlay.style.display = "none";
  });
  captureBtn.addEventListener("click", function () {
    captureSelfie();
  });
  retakeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    previewImg.src = "";
    captureDataUrl = null;
  });
  downloadBtn.addEventListener("click", function () {
    if (!captureDataUrl) return;
    var a = document.createElement("a");
    a.href = captureDataUrl;
    a.download = "selfie-with-thala.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
}

/***/ }),

/***/ "./frontend-js/modules/utils.js":
/*!**************************************!*\
  !*** ./frontend-js/modules/utils.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hideElement: () => (/* binding */ hideElement),
/* harmony export */   isAndroidOrWindows: () => (/* binding */ isAndroidOrWindows),
/* harmony export */   playIdleVideo: () => (/* binding */ playIdleVideo),
/* harmony export */   playVideo: () => (/* binding */ playVideo),
/* harmony export */   showElement: () => (/* binding */ showElement),
/* harmony export */   showQuestionScreenAtEnd: () => (/* binding */ showQuestionScreenAtEnd)
/* harmony export */ });
/* harmony import */ var _arrayOutput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayOutput */ "./frontend-js/modules/arrayOutput.js");
//! 1. If you pass only one parameter to hideElement / ShowElement - It only toggles visibility and opacity
//! 2. If you pass 2nd parameter to hideElement / ShowElement - It will toggle the visibility, opacity and display of the element
//! 3. If you do not pass the 3rd parameter to showElement - Adds the display block in given time
//! 4. If you pass 3rd parameter to showElement - It add the given display property to the element in the given time (block, flex, grid etc.)


var idleVideo = document.querySelector(".idle-video");
var idleVideoSource = document.querySelector(".idle-video source");
var dhoniVideo = document.querySelector(".response-video");
var dhoniVideoSource = document.querySelector(".response-video source");
var questionSelectContainer = document.querySelector(".question-select-container");
var outroVideo = document.querySelector("#endVideo");
var shareDownloadScreen = document.querySelector(".share-download-screen");
var avatarScreen = document.querySelector(".avatar-screen");
var cameraFeed = document.getElementById("camera-feed");
var dhoniThankYouContinueScreen = document.querySelector(".dhoni-thankyou-continue-screen");
var thankYouContinueButton = document.getElementById("thankYouContinueButton");
var buffer2 = document.querySelector(".buffer2");
var autoPlayTimer;
function hideElement(element, time) {
  element.style.visibility = "hidden";
  element.style.opacity = "0";
  if (time || time == 0) {
    setTimeout(function () {
      element.style.display = "none";
    }, time);
  }
}
function showElement(element, time, displayType) {
  if (time || time == 0) {
    element.style.display = displayType ? displayType : "block";
  }
  setTimeout(function () {
    element.style.visibility = "visible";
    element.style.opacity = "1";
  }, time || 0);
}
function playIdleVideo() {
  idleVideo.muted = true;
  idleVideoSource.src = "https://cdn.makear.ai/private_videos/idle-video.mp4";
  idleVideo.setAttribute("loop", true);
  idleVideo.setAttribute("autoplay", true);
  idleVideo.load();
  idleVideo.play();
}

// export function playVideo(src) {

//   dhoniVideoSource.src = `video/${src}`;
//   dhoniVideo.load();

//   showElement(dhoniVideo, 0, "block")

//   requestAnimationFrame(() => {
//     dhoniVideo.style.display = "block"

//     dhoniVideo.play().then(() => {
//       dhoniVideo.classList.add('fade-in');
//     }).catch((e) => {
//       console.error("Video play error:", e);
//     });
//   });
// }

function playVideo(src) {
  if (src.includes("english")) {
    dhoniVideoSource.src = "https://cdn.makear.ai/private_videos/".concat(src);
  } else {
    dhoniVideoSource.src = "https://cdn.makear.ai/private_videos/".concat(src);
  }
  dhoniVideo.load();
  showElement(dhoniVideo, 0, "block");
  requestAnimationFrame(function () {
    dhoniVideo.style.display = "block";
    dhoniVideo.play().then(function () {
      dhoniVideo.classList.add("fade-in");
    })["catch"](function (e) {
      console.error("Video play error:", e);
    });
  });
}
function isAndroidOrWindows() {
  // Prefer modern userAgentData if available
  // console.log(navigator.userAgent)

  if (navigator.userAgentData && navigator.userAgentData.platform) {
    var platform = navigator.userAgentData.platform.toLowerCase();
    return platform.includes("android") || platform.includes("windows");
  }

  // Fallback to traditional userAgent
  var ua = navigator.userAgent.toLowerCase();
  return ua.includes("android") || ua.includes("windows nt");
}
function endCall() {
  // dhoniVideo.pause();
  // dhoniVideo.currentTime = 0;
  fbq("track", "Lead");
  // fetch("/complete"); // Disabled: no backend on Cloudflare Pages (was causing 405)
  dhoniVideo.muted = true;
  idleVideo.pause();
  idleVideo.currentTime = 0;
  hideElement(avatarScreen, 1000);
  hideElement(questionSelectContainer, 1000);
  showElement(dhoniThankYouContinueScreen, 500, "flex");
  var stream = cameraFeed.srcObject;
  if (stream) {
    stream.getTracks().forEach(function (track) {
      return track.stop();
    });
    cameraFeed.srcObject = null;
  }
}
thankYouContinueButton && thankYouContinueButton.addEventListener("click", function () {
  // console.log("Continue")
  showElement(shareDownloadScreen, 300);
  hideElement(dhoniThankYouContinueScreen, 0);
  outroVideo.load();
  outroVideo.play();
});
var questionScreenShownCount = 0;
function showQuestionScreenAtEnd(selectedLanguage) {
  clearTimeout(autoPlayTimer);
  var hasShownQuestionScreen = false;
  hideElement(questionSelectContainer, 1000);
  function onTimeUpdate() {
    var remainingTime = dhoniVideo.duration - dhoniVideo.currentTime;
    if (!hasShownQuestionScreen && remainingTime <= 0.2) {
      hasShownQuestionScreen = true;
      buffer2.style.opacity = 1;
      questionScreenShownCount = questionScreenShownCount + 1;
      if (questionScreenShownCount <= 3) {
        (0,_arrayOutput__WEBPACK_IMPORTED_MODULE_0__.getContentQuestions)(selectedLanguage);
        showElement(questionSelectContainer, 300);
        hideElement(dhoniVideo);

        // Restore camera feed and UI controls when the video ends
        var frameCamera = document.getElementById("frame-camera");
        if (frameCamera) {
          frameCamera.style.opacity = "1";
          frameCamera.style.pointerEvents = "auto";
        }
        // const bottomBar = document.querySelector(".avatar-bottom-bar");
        // if (bottomBar) {
        //   bottomBar.style.display = "flex";
        // }
        var callUiLogo = document.querySelector(".dhoni-avatar-bg img");
        if (callUiLogo) {
          callUiLogo.style.display = "block";
        }
        if (isAndroidOrWindows()) {
          autoPlayTimer = setTimeout(function () {
            document.querySelector(".question-box").click();
            buffer2.style.opacity = 0;
          }, 30000);
        }

        // console.log(questionScreenShownCount)
      } else {
        endCall();
        // console.log(questionScreenShownCount)
        return;
      }

      // getContentQuestions(selectedLanguage);
      // showElement(questionSelectContainer, 300);
    }

    // if (!hasShownQuestionScreen && questionScreenShownCount <= 2 && remainingTime <= .5) {
    //   hideElement(dhoniVideo, 2000)

    //   console.log(questionScreenShownCount)
    // }
  }
  function onEnded() {
    // hideElement(dhoniVideo, 0)
    dhoniVideo.removeEventListener("timeupdate", onTimeUpdate);
    hasShownQuestionScreen = false;
  }
  dhoniVideo.addEventListener("timeupdate", onTimeUpdate);
  dhoniVideo.addEventListener("ended", onEnded);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend-js/main.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_attemptPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/attemptPage */ "./frontend-js/modules/attemptPage.js");
/* harmony import */ var _modules_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/script */ "./frontend-js/modules/script.js");
/* harmony import */ var _modules_segmentation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/segmentation */ "./frontend-js/modules/segmentation.js");
/* harmony import */ var _modules_selfie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/selfie */ "./frontend-js/modules/selfie.js");




document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".experience-page")) {
    new _modules_script__WEBPACK_IMPORTED_MODULE_1__["default"]();
    new _modules_segmentation__WEBPACK_IMPORTED_MODULE_2__["default"]();
    new _modules_selfie__WEBPACK_IMPORTED_MODULE_3__["default"]();
  }
  if (document.querySelector(".attempt-page")) new _modules_attemptPage__WEBPACK_IMPORTED_MODULE_0__["default"]();
});
})();

/******/ })()
;