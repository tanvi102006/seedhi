/*
 * All words the learner sees live in this file.
 * Every piece of text is a pair: [English, Hindi].
 * To add a lesson, copy an existing one and change the words.
 */
window.SEEDHI = (() => {
  const STR = {
    en: {
      tagline: 'Learn step by step',
      skip: 'Skip to content',
      navHome: 'Home', navSubjects: 'Subjects', navProgress: 'Progress', navSettings: 'Settings',
      offline: 'No internet — lessons still work',
      welcomeTitle: 'Welcome to Seedhi',
      welcomeBody: 'Free lessons that work on any phone, even without internet. Learn one small step at a time.',
      chooseLang: 'Choose your language',
      yourName: 'Your name (optional)',
      nameHint: 'It stays on this phone only.',
      chooseSubject: 'What do you want to get better at?',
      chooseSubjectHint: 'You can change this any time.',
      start: 'Start learning',
      hello: 'Hello, {name}!', helloNoName: 'Hello!',
      dayStreak: 'day streak', stars: 'stars', lessonsDone: 'steps done',
      mySubject: 'My subject', continue: 'Continue', nextUp: 'Next step',
      allDone: 'You finished every step in this subject. Try another one!',
      steps: 'Steps', step: 'Step {n}', minutes: '{n} min', notStarted: 'Not started', starsOf: '{n} of 3 stars',
      doneOf: '{c} of {n} steps done',
      otherSubjects: 'Explore other subjects', allSubjects: 'All subjects',
      makeMain: 'Make this my main subject', isMain: 'This is your main subject',
      listen: 'Listen', stop: 'Stop',
      startPractice: 'Start practice', back: 'Back',
      questionOf: 'Question {i} of {n}',
      correct: 'Correct!', notQuite: 'Not quite.', rightAnswer: 'The right answer is: {a}',
      yourAnswer: 'your answer', rightMark: 'right answer',
      next: 'Next question', seeResult: 'See my result',
      resultGreat: 'Excellent work!', resultGood: 'Well done!',
      resultTry: 'Good try! Read the lesson once more and try again.',
      youGot: 'You got {c} of {n} right.',
      tryAgain: 'Try again', nextLesson: 'Go to next step', backToSubject: 'Back to steps', readAgain: 'Read the lesson again',
      progressTitle: 'My progress', badges: 'Badges', locked: 'Not earned yet', earned: 'Earned',
      settingsTitle: 'Settings', language: 'Language', textSize: 'Text size',
      sizeM: 'Normal', sizeL: 'Large', sizeXL: 'Extra large',
      contrast: 'High contrast colours', save: 'Save', saved: 'Saved.',
      reset: 'Erase my progress',
      resetConfirm: 'Erase all your progress on this phone? This cannot be undone.',
      about: 'About Seedhi',
      aboutBody: 'Seedhi is free. It needs no account and collects no data. After your first visit, every lesson works without internet.',
      notFound: 'Page not found', goHome: 'Go to Home'
    },
    hi: {
      tagline: 'एक-एक कदम सीखें',
      skip: 'सीधे पाठ पर जाएँ',
      navHome: 'होम', navSubjects: 'विषय', navProgress: 'प्रगति', navSettings: 'सेटिंग',
      offline: 'इंटरनेट नहीं है — पाठ फिर भी चलेंगे',
      welcomeTitle: 'सीढ़ी में आपका स्वागत है',
      welcomeBody: 'मुफ़्त पाठ जो हर फ़ोन पर चलते हैं, बिना इंटरनेट के भी। हर दिन एक छोटा कदम सीखें।',
      chooseLang: 'अपनी भाषा चुनें',
      yourName: 'आपका नाम (ज़रूरी नहीं)',
      nameHint: 'यह सिर्फ़ इसी फ़ोन में रहेगा।',
      chooseSubject: 'आप किस विषय में बेहतर होना चाहते हैं?',
      chooseSubjectHint: 'आप इसे कभी भी बदल सकते हैं।',
      start: 'सीखना शुरू करें',
      hello: 'नमस्ते, {name}!', helloNoName: 'नमस्ते!',
      dayStreak: 'दिन लगातार', stars: 'तारे', lessonsDone: 'कदम पूरे',
      mySubject: 'मेरा विषय', continue: 'आगे बढ़ें', nextUp: 'अगला कदम',
      allDone: 'आपने इस विषय के सभी कदम पूरे कर लिए। अब कोई दूसरा विषय आज़माएँ!',
      steps: 'कदम', step: 'कदम {n}', minutes: '{n} मिनट', notStarted: 'शुरू नहीं किया', starsOf: '3 में से {n} तारे',
      doneOf: '{n} में से {c} कदम पूरे',
      otherSubjects: 'दूसरे विषय देखें', allSubjects: 'सभी विषय',
      makeMain: 'इसे मेरा मुख्य विषय बनाएँ', isMain: 'यह आपका मुख्य विषय है',
      listen: 'सुनें', stop: 'रोकें',
      startPractice: 'अभ्यास शुरू करें', back: 'वापस',
      questionOf: 'सवाल {i} / {n}',
      correct: 'सही जवाब!', notQuite: 'यह सही नहीं है।', rightAnswer: 'सही जवाब है: {a}',
      yourAnswer: 'आपका जवाब', rightMark: 'सही जवाब',
      next: 'अगला सवाल', seeResult: 'मेरा नतीजा देखें',
      resultGreat: 'बहुत बढ़िया!', resultGood: 'शाबाश!',
      resultTry: 'अच्छी कोशिश! पाठ एक बार फिर पढ़ें और दोबारा कोशिश करें।',
      youGot: 'आपने {n} में से {c} सही किए।',
      tryAgain: 'दोबारा कोशिश करें', nextLesson: 'अगले कदम पर जाएँ', backToSubject: 'कदमों पर वापस', readAgain: 'पाठ फिर से पढ़ें',
      progressTitle: 'मेरी प्रगति', badges: 'बैज', locked: 'अभी नहीं मिला', earned: 'मिल गया',
      settingsTitle: 'सेटिंग', language: 'भाषा', textSize: 'अक्षरों का आकार',
      sizeM: 'सामान्य', sizeL: 'बड़ा', sizeXL: 'बहुत बड़ा',
      contrast: 'गहरे और साफ़ रंग', save: 'सेव करें', saved: 'सेव हो गया।',
      reset: 'मेरी प्रगति मिटाएँ',
      resetConfirm: 'क्या इस फ़ोन से आपकी सारी प्रगति मिटा दें? इसे वापस नहीं लाया जा सकता।',
      about: 'सीढ़ी के बारे में',
      aboutBody: 'सीढ़ी मुफ़्त है। इसमें खाता बनाने की ज़रूरत नहीं है और यह कोई जानकारी इकट्ठा नहीं करती। पहली बार खोलने के बाद सभी पाठ बिना इंटरनेट के चलते हैं।',
      notFound: 'पेज नहीं मिला', goHome: 'होम पर जाएँ'
    }
  };

  const SUBJECTS = [
    {
      id: 'maths', icon: '🔢', color: '#1d5fbf',
      name: ['Maths', 'गणित'],
      tagline: ['Numbers you can use every day', 'रोज़ काम आने वाला हिसाब'],
      lessons: [
        {
          id: 'fractions', minutes: 5,
          title: ['Fractions: parts of a whole', 'भिन्न: पूरे का हिस्सा'],
          cards: [
            ['A fraction shows a part of a whole. If you cut a roti into 4 equal pieces and eat 1 piece, you ate 1/4 (one-fourth) of the roti.',
             'भिन्न किसी पूरी चीज़ का हिस्सा बताती है। अगर आप एक रोटी के 4 बराबर टुकड़े करें और 1 टुकड़ा खा लें, तो आपने रोटी का 1/4 (एक-चौथाई) खाया।'],
            ['The bottom number tells how many equal parts there are in total. The top number tells how many parts we are counting.',
             'नीचे की संख्या बताती है कि कुल कितने बराबर हिस्से हैं। ऊपर की संख्या बताती है कि हम कितने हिस्से गिन रहे हैं।'],
            ['When the bottom numbers are the same, the fraction with the bigger top number is bigger. So 3/4 is more than 1/4.',
             'जब नीचे की संख्या एक जैसी हो, तो जिस भिन्न की ऊपर की संख्या बड़ी है वह भिन्न बड़ी होती है। इसलिए 3/4, 1/4 से ज़्यादा है।']
          ],
          quiz: [
            { q: ['A chocolate has 8 equal pieces. You eat 3. What fraction did you eat?', 'एक चॉकलेट में 8 बराबर टुकड़े हैं। आपने 3 खाए। आपने कितना हिस्सा खाया?'],
              o: ['8/3', '3/8', '3/5'], a: 1,
              why: ['3 pieces out of 8 equal pieces is 3/8.', '8 बराबर टुकड़ों में से 3 टुकड़े यानी 3/8।'] },
            { q: ['In the fraction 2/5, what does the 5 tell us?', 'भिन्न 2/5 में 5 क्या बताता है?'],
              o: [['How many equal parts there are in total', 'कुल कितने बराबर हिस्से हैं'], ['How many parts we ate', 'हमने कितने हिस्से खाए'], ['The biggest number', 'सबसे बड़ी संख्या']], a: 0,
              why: ['The bottom number is the total number of equal parts.', 'नीचे की संख्या कुल बराबर हिस्से बताती है।'] },
            { q: ['Which is bigger: 2/6 or 5/6?', 'कौन बड़ा है: 2/6 या 5/6?'],
              o: [['They are equal', 'दोनों बराबर हैं'], '2/6', '5/6'], a: 2,
              why: ['The bottom numbers are the same, and 5 is more than 2.', 'नीचे की संख्या एक जैसी है, और 5, 2 से बड़ा है।'] }
          ]
        },
        {
          id: 'percent', minutes: 5,
          title: ['Percent: out of 100', 'प्रतिशत: 100 में से'],
          cards: [
            ['Percent means "out of 100". The sign is %. So 50% means 50 out of 100, which is half.',
             'प्रतिशत का मतलब है "100 में से"। इसका चिह्न % है। तो 50% का मतलब है 100 में से 50, यानी आधा।'],
            ['To find 10% of a number, divide it by 10. For example, 10% of 200 rupees is 20 rupees.',
             'किसी संख्या का 10% निकालने के लिए उसे 10 से भाग दें। जैसे, 200 रुपये का 10% है 20 रुपये।'],
            ['Shops use percent for discounts. A shirt of ₹100 with 20% off costs ₹20 less. So you pay ₹80.',
             'दुकानें छूट बताने के लिए प्रतिशत का इस्तेमाल करती हैं। ₹100 की कमीज़ पर 20% छूट हो तो ₹20 कम लगेंगे। यानी आप ₹80 देंगे।']
          ],
          quiz: [
            { q: ['What is 50% of 60?', '60 का 50% कितना है?'], o: ['20', '30', '50'], a: 1,
              why: ['50% is half, and half of 60 is 30.', '50% यानी आधा, और 60 का आधा 30 है।'] },
            { q: ['What is 10% of 350?', '350 का 10% कितना है?'], o: ['35', '3.5', '300'], a: 0,
              why: ['Divide by 10: 350 ÷ 10 = 35.', '10 से भाग दें: 350 ÷ 10 = 35।'] },
            { q: ['A bag costs ₹200 and has 10% off. How much do you pay?', 'एक बैग ₹200 का है और उस पर 10% छूट है। आप कितने देंगे?'],
              o: ['₹190', '₹20', '₹180'], a: 2,
              why: ['10% of 200 is 20. Then 200 − 20 = 180.', '200 का 10% है 20। फिर 200 − 20 = 180।'] }
          ]
        },
        {
          id: 'area', minutes: 6,
          title: ['Perimeter and area', 'परिमाप और क्षेत्रफल'],
          cards: [
            ['Perimeter is the distance around a shape. Add all the sides. A field 10 m long and 5 m wide has a perimeter of 10 + 5 + 10 + 5 = 30 m.',
             'परिमाप किसी आकृति के चारों ओर की दूरी है। सभी भुजाओं को जोड़ें। 10 मीटर लंबे और 5 मीटर चौड़े खेत का परिमाप 10 + 5 + 10 + 5 = 30 मीटर है।'],
            ['Area is the space inside a shape. For a rectangle, multiply length by width. The same field has an area of 10 × 5 = 50 square metres.',
             'क्षेत्रफल किसी आकृति के अंदर की जगह है। आयत के लिए लंबाई को चौड़ाई से गुणा करें। उसी खेत का क्षेत्रफल 10 × 5 = 50 वर्ग मीटर है।'],
            ['Use perimeter to know how much fence goes around a field. Use area to know how much seed is needed to cover it.',
             'खेत के चारों ओर कितनी बाड़ लगेगी, यह परिमाप से पता चलता है। पूरे खेत में कितना बीज लगेगा, यह क्षेत्रफल से पता चलता है।']
          ],
          quiz: [
            { q: ['A room is 4 m long and 3 m wide. What is its area?', 'एक कमरा 4 मीटर लंबा और 3 मीटर चौड़ा है। उसका क्षेत्रफल कितना है?'],
              o: [['7 square metres', '7 वर्ग मीटर'], ['12 square metres', '12 वर्ग मीटर'], ['14 square metres', '14 वर्ग मीटर']], a: 1,
              why: ['Area = length × width = 4 × 3 = 12.', 'क्षेत्रफल = लंबाई × चौड़ाई = 4 × 3 = 12।'] },
            { q: ['What is the perimeter of the same room?', 'उसी कमरे का परिमाप कितना है?'],
              o: [['14 m', '14 मीटर'], ['12 m', '12 मीटर'], ['7 m', '7 मीटर']], a: 0,
              why: ['Add all sides: 4 + 3 + 4 + 3 = 14.', 'सभी भुजाएँ जोड़ें: 4 + 3 + 4 + 3 = 14।'] },
            { q: ['You want to put a fence around a garden. What should you measure?', 'आपको बगीचे के चारों ओर बाड़ लगानी है। आप क्या नापेंगे?'],
              o: [['Area', 'क्षेत्रफल'], ['Weight', 'वज़न'], ['Perimeter', 'परिमाप']], a: 2,
              why: ['A fence goes around the edge, and that distance is the perimeter.', 'बाड़ किनारे-किनारे लगती है, और वह दूरी परिमाप है।'] }
          ]
        }
      ]
    },
    {
      id: 'english', icon: '🗣️', color: '#b0413e',
      name: ['English', 'अंग्रेज़ी'],
      tagline: ['Speak and write with confidence', 'आत्मविश्वास से बोलें और लिखें'],
      lessons: [
        {
          id: 'introduce', minutes: 4,
          title: ['Introducing yourself', 'अपना परिचय देना'],
          cards: [
            ['To greet someone, say "Hello" or "Good morning". To tell your name, say "My name is Asha."',
             'किसी से मिलने पर "Hello" या "Good morning" कहें। अपना नाम बताने के लिए कहें: "My name is Asha."'],
            ['To tell where you live, say "I live in Pune." To tell your class, say "I study in class 7."',
             'आप कहाँ रहते हैं, यह बताने के लिए कहें: "I live in Pune." अपनी कक्षा बताने के लिए कहें: "I study in class 7."'],
            ['To ask the other person, say "What is your name?" and "Where do you live?" At the end, say "Nice to meet you."',
             'सामने वाले से पूछने के लिए कहें: "What is your name?" और "Where do you live?" आख़िर में कहें: "Nice to meet you."']
          ],
          quiz: [
            { q: ['Which sentence tells your name?', 'कौन सा वाक्य आपका नाम बताता है?'],
              o: ['I live in Asha.', 'My name is Asha.', 'What is your name?'], a: 1,
              why: ['"My name is …" is how we tell our name.', '"My name is …" कहकर हम अपना नाम बताते हैं।'] },
            { q: ['How do you ask where someone lives?', 'किसी से कैसे पूछेंगे कि वे कहाँ रहते हैं?'],
              o: ['Where do you live?', 'Where is you live?', 'What do you live?'], a: 0,
              why: ['"Where" asks about a place.', '"Where" जगह के बारे में पूछता है।'] },
            { q: ['What do you say when you meet someone in the morning?', 'सुबह किसी से मिलने पर क्या कहते हैं?'],
              o: ['Good night', 'Goodbye', 'Good morning'], a: 2,
              why: ['"Good morning" is the morning greeting.', '"Good morning" सुबह का अभिवादन है।'] }
          ]
        },
        {
          id: 'be-verbs', minutes: 5,
          title: ['Using is, am, are', 'is, am, are का प्रयोग'],
          cards: [
            ['Use "am" only with "I". Example: "I am happy."',
             '"am" सिर्फ़ "I" के साथ लगता है। जैसे: "I am happy."'],
            ['Use "is" for one person or one thing. Examples: "She is my friend." "The book is new."',
             '"is" एक व्यक्ति या एक चीज़ के लिए लगता है। जैसे: "She is my friend." "The book is new."'],
            ['Use "are" with "you", "we", "they", and for more than one. Examples: "They are students." "You are kind."',
             '"are" "you", "we", "they" के साथ और एक से ज़्यादा के लिए लगता है। जैसे: "They are students." "You are kind."']
          ],
          quiz: [
            { q: ['I ___ a student.', 'I ___ a student.'], o: ['is', 'am', 'are'], a: 1,
              why: ['"I" always takes "am".', '"I" के साथ हमेशा "am" लगता है।'] },
            { q: ['They ___ playing.', 'They ___ playing.'], o: ['are', 'is', 'am'], a: 0,
              why: ['"They" means more than one, so we use "are".', '"They" एक से ज़्यादा के लिए है, इसलिए "are" लगता है।'] },
            { q: ['My brother ___ tall.', 'My brother ___ tall.'], o: ['am', 'are', 'is'], a: 2,
              why: ['"My brother" is one person, so we use "is".', '"My brother" एक व्यक्ति है, इसलिए "is" लगता है।'] }
          ]
        },
        {
          id: 'past', minutes: 5,
          title: ['Talking about yesterday', 'बीते हुए कल की बात करना'],
          cards: [
            ['For things that already happened, we use the past tense. Many action words just add "-ed": play becomes played, walk becomes walked.',
             'जो काम हो चुके हैं, उनके लिए past tense का प्रयोग होता है। कई क्रियाओं में बस "-ed" जुड़ता है: play से played, walk से walked।'],
            ['Some action words change completely: go becomes went, eat becomes ate, see becomes saw.',
             'कुछ क्रियाएँ पूरी बदल जाती हैं: go से went, eat से ate, see से saw।'],
            ['Words like "yesterday" and "last week" tell you to use the past. Example: "Yesterday I walked to school."',
             '"yesterday" और "last week" जैसे शब्द बताते हैं कि past tense लगेगा। जैसे: "Yesterday I walked to school."']
          ],
          quiz: [
            { q: ['Yesterday I ___ cricket.', 'Yesterday I ___ cricket.'], o: ['play', 'played', 'playing'], a: 1,
              why: ['"Yesterday" is the past, so play becomes played.', '"Yesterday" बीता हुआ समय है, इसलिए play का played होगा।'] },
            { q: ['What is the past form of "go"?', '"go" का past रूप क्या है?'], o: ['went', 'goed', 'going'], a: 0,
              why: ['"Go" changes completely to "went".', '"go" पूरा बदलकर "went" हो जाता है।'] },
            { q: ['Which sentence is about the past?', 'कौन सा वाक्य बीते हुए समय का है?'],
              o: ['I eat rice.', 'I will eat rice.', 'I ate rice.'], a: 2,
              why: ['"Ate" is the past form of "eat".', '"ate", "eat" का past रूप है।'] }
          ]
        }
      ]
    },
    {
      id: 'science', icon: '🌱', color: '#2e7d4f',
      name: ['Science', 'विज्ञान'],
      tagline: ['Understand the world around you', 'अपने आसपास की दुनिया को समझें'],
      lessons: [
        {
          id: 'plants', minutes: 5,
          title: ['How plants make food', 'पौधे खाना कैसे बनाते हैं'],
          cards: [
            ['Plants make their own food. This is called photosynthesis. It happens mostly in the green leaves.',
             'पौधे अपना खाना खुद बनाते हैं। इसे प्रकाश-संश्लेषण कहते हैं। यह ज़्यादातर हरी पत्तियों में होता है।'],
            ['To make food, a plant needs three things: sunlight, water from the soil, and a gas from the air called carbon dioxide.',
             'खाना बनाने के लिए पौधे को तीन चीज़ें चाहिए: धूप, मिट्टी से पानी, और हवा से एक गैस जिसे कार्बन डाइऑक्साइड कहते हैं।'],
            ['While making food, plants give out oxygen. Oxygen is the gas we breathe in. That is why trees keep the air fresh.',
             'खाना बनाते समय पौधे ऑक्सीजन छोड़ते हैं। ऑक्सीजन वही गैस है जिसे हम साँस में लेते हैं। इसीलिए पेड़ हवा को ताज़ा रखते हैं।']
          ],
          quiz: [
            { q: ['Where does a plant mostly make its food?', 'पौधा अपना खाना ज़्यादातर कहाँ बनाता है?'],
              o: [['Roots', 'जड़ों में'], ['Leaves', 'पत्तियों में'], ['Flowers', 'फूलों में']], a: 1,
              why: ['Green leaves catch sunlight and make the food.', 'हरी पत्तियाँ धूप लेकर खाना बनाती हैं।'] },
            { q: ['Which gas do plants give out?', 'पौधे कौन सी गैस छोड़ते हैं?'],
              o: [['Oxygen', 'ऑक्सीजन'], ['Carbon dioxide', 'कार्बन डाइऑक्साइड'], ['Smoke', 'धुआँ']], a: 0,
              why: ['Plants take in carbon dioxide and give out oxygen.', 'पौधे कार्बन डाइऑक्साइड लेते हैं और ऑक्सीजन छोड़ते हैं।'] },
            { q: ['Which of these does a plant NOT need to make food?', 'इनमें से कौन सी चीज़ पौधे को खाना बनाने के लिए नहीं चाहिए?'],
              o: [['Sunlight', 'धूप'], ['Water', 'पानी'], ['Darkness', 'अँधेरा']], a: 2,
              why: ['Plants need light, not darkness, to make food.', 'पौधों को खाना बनाने के लिए रोशनी चाहिए, अँधेरा नहीं।'] }
          ]
        },
        {
          id: 'matter', minutes: 5,
          title: ['Solid, liquid and gas', 'ठोस, द्रव और गैस'],
          cards: [
            ['Everything around us is called matter. Matter is usually found in three forms: solid, liquid and gas.',
             'हमारे आसपास की हर चीज़ पदार्थ कहलाती है। पदार्थ आम तौर पर तीन रूपों में मिलता है: ठोस, द्रव और गैस।'],
            ['A solid keeps its shape, like a stone. A liquid flows and takes the shape of its pot, like water. A gas spreads everywhere, like air.',
             'ठोस अपना आकार बनाए रखता है, जैसे पत्थर। द्रव बहता है और बर्तन का आकार ले लेता है, जैसे पानी। गैस हर तरफ़ फैल जाती है, जैसे हवा।'],
            ['Heat can change the form. Ice is solid; when heated it melts into water. When water boils it turns into steam, which is a gas.',
             'गर्मी से रूप बदल सकता है। बर्फ़ ठोस है; गर्म करने पर वह पिघलकर पानी बन जाती है। पानी उबलने पर भाप बन जाता है, जो एक गैस है।']
          ],
          quiz: [
            { q: ['Ice is which form of matter?', 'बर्फ़ पदार्थ का कौन सा रूप है?'],
              o: [['Liquid', 'द्रव'], ['Solid', 'ठोस'], ['Gas', 'गैस']], a: 1,
              why: ['Ice keeps its shape, so it is a solid.', 'बर्फ़ अपना आकार बनाए रखती है, इसलिए वह ठोस है।'] },
            { q: ['What happens when you heat ice?', 'बर्फ़ को गर्म करने पर क्या होता है?'],
              o: [['It melts into water', 'वह पिघलकर पानी बन जाती है'], ['It becomes harder', 'वह और सख़्त हो जाती है'], ['Nothing happens', 'कुछ नहीं होता']], a: 0,
              why: ['Heat changes solid ice into liquid water.', 'गर्मी ठोस बर्फ़ को द्रव पानी में बदल देती है।'] },
            { q: ['Which one takes the shape of its pot?', 'इनमें से कौन बर्तन का आकार ले लेता है?'],
              o: [['A stone', 'पत्थर'], ['A brick', 'ईंट'], ['Milk', 'दूध']], a: 2,
              why: ['Milk is a liquid, and liquids take the shape of their pot.', 'दूध द्रव है, और द्रव बर्तन का आकार ले लेते हैं।'] }
          ]
        },
        {
          id: 'germs', minutes: 4,
          title: ['Clean water and germs', 'साफ़ पानी और कीटाणु'],
          cards: [
            ['Germs are tiny living things. They are too small to see. Some germs in dirty water can make us sick.',
             'कीटाणु बहुत छोटे जीव होते हैं। वे इतने छोटे हैं कि दिखाई नहीं देते। गंदे पानी के कुछ कीटाणु हमें बीमार कर सकते हैं।'],
            ['Boiling water kills most germs. Keep drinking water covered in a clean pot.',
             'पानी उबालने से ज़्यादातर कीटाणु मर जाते हैं। पीने का पानी साफ़ बर्तन में ढककर रखें।'],
            ['Wash your hands with soap before eating and after using the toilet. Soap removes germs from your hands.',
             'खाने से पहले और शौचालय के बाद साबुन से हाथ धोएँ। साबुन हाथों से कीटाणु हटा देता है।']
          ],
          quiz: [
            { q: ['Why do we boil drinking water?', 'हम पीने का पानी क्यों उबालते हैं?'],
              o: [['To make it sweet', 'उसे मीठा करने के लिए'], ['To kill germs', 'कीटाणु मारने के लिए'], ['To make it colder', 'उसे ठंडा करने के लिए']], a: 1,
              why: ['Boiling kills most germs in water.', 'उबालने से पानी के ज़्यादातर कीटाणु मर जाते हैं।'] },
            { q: ['When should you wash your hands with soap?', 'साबुन से हाथ कब धोने चाहिए?'],
              o: [['Before eating', 'खाने से पहले'], ['Only on Sundays', 'सिर्फ़ रविवार को'], ['Never', 'कभी नहीं']], a: 0,
              why: ['Clean hands keep germs away from your food.', 'साफ़ हाथ कीटाणुओं को खाने से दूर रखते हैं।'] },
            { q: ['Can we see germs with our eyes?', 'क्या हम कीटाणुओं को आँखों से देख सकते हैं?'],
              o: [['Yes, always', 'हाँ, हमेशा'], ['Only at night', 'सिर्फ़ रात में'], ['No, they are too small', 'नहीं, वे बहुत छोटे हैं']], a: 2,
              why: ['Germs are too small to see without a microscope.', 'कीटाणु इतने छोटे हैं कि सूक्ष्मदर्शी के बिना नहीं दिखते।'] }
          ]
        }
      ]
    },
    {
      id: 'computers', icon: '💻', color: '#6a3fb0',
      name: ['Computers', 'कंप्यूटर'],
      tagline: ['Digital skills for school and work', 'पढ़ाई और काम के लिए डिजिटल हुनर'],
      lessons: [
        {
          id: 'parts', minutes: 5,
          title: ['Parts of a computer', 'कंप्यूटर के हिस्से'],
          cards: [
            ['A computer takes in information, works on it, and shows a result. A smartphone is also a small computer.',
             'कंप्यूटर जानकारी लेता है, उस पर काम करता है, और नतीजा दिखाता है। स्मार्टफ़ोन भी एक छोटा कंप्यूटर है।'],
            ['Input devices send information in: keyboard, mouse, touchscreen, microphone. Output devices show the result: screen, speaker, printer.',
             'इनपुट डिवाइस जानकारी अंदर भेजते हैं: कीबोर्ड, माउस, टचस्क्रीन, माइक। आउटपुट डिवाइस नतीजा दिखाते हैं: स्क्रीन, स्पीकर, प्रिंटर।'],
            ['The processor, or CPU, is the brain that does the work. Storage keeps your files, photos and apps.',
             'प्रोसेसर या CPU वह दिमाग़ है जो काम करता है। स्टोरेज में आपकी फ़ाइलें, फ़ोटो और ऐप रहते हैं।']
          ],
          quiz: [
            { q: ['Which of these is an input device?', 'इनमें से इनपुट डिवाइस कौन सा है?'],
              o: [['Speaker', 'स्पीकर'], ['Keyboard', 'कीबोर्ड'], ['Printer', 'प्रिंटर']], a: 1,
              why: ['A keyboard sends information into the computer.', 'कीबोर्ड जानकारी कंप्यूटर के अंदर भेजता है।'] },
            { q: ['What is the CPU?', 'CPU क्या है?'],
              o: [['The brain of the computer', 'कंप्यूटर का दिमाग़'], ['A kind of screen', 'एक तरह की स्क्रीन'], ['A game', 'एक खेल']], a: 0,
              why: ['The CPU does the thinking work of the computer.', 'CPU कंप्यूटर का सोचने वाला काम करता है।'] },
            { q: ['A screen is which kind of device?', 'स्क्रीन किस तरह का डिवाइस है?'],
              o: [['Input', 'इनपुट'], ['Storage', 'स्टोरेज'], ['Output', 'आउटपुट']], a: 2,
              why: ['A screen shows the result, so it is an output device.', 'स्क्रीन नतीजा दिखाती है, इसलिए वह आउटपुट डिवाइस है।'] }
          ]
        },
        {
          id: 'safety', minutes: 5,
          title: ['Staying safe online', 'इंटरनेट पर सुरक्षित रहना'],
          cards: [
            ['A password is like the key to your house. Never share it, not even with friends. A strong password mixes letters, numbers and symbols.',
             'पासवर्ड आपके घर की चाबी जैसा है। इसे किसी को न बताएँ, दोस्तों को भी नहीं। मज़बूत पासवर्ड में अक्षर, अंक और चिह्न मिले होते हैं।'],
            ['Do not share personal details with strangers online. This means your address, school name, phone number and photos.',
             'इंटरनेट पर अनजान लोगों को अपनी निजी जानकारी न दें। यानी अपना पता, स्कूल का नाम, फ़ोन नंबर और फ़ोटो।'],
            ['If a message makes you uncomfortable or promises a prize, do not click on it. Tell a trusted adult, like a parent or teacher.',
             'अगर कोई संदेश आपको अजीब लगे या इनाम का लालच दे, तो उस पर क्लिक न करें। किसी भरोसेमंद बड़े को बताएँ, जैसे माता-पिता या शिक्षक।']
          ],
          quiz: [
            { q: ['Which password is the strongest?', 'कौन सा पासवर्ड सबसे मज़बूत है?'],
              o: ['12345', 'Mango#27tree', ['Your own name', 'आपका अपना नाम']], a: 1,
              why: ['It mixes letters, numbers and a symbol, so it is hard to guess.', 'इसमें अक्षर, अंक और चिह्न मिले हैं, इसलिए इसका अंदाज़ा लगाना मुश्किल है।'] },
            { q: ['A stranger online asks for your home address. What do you do?', 'इंटरनेट पर कोई अनजान व्यक्ति आपके घर का पता माँगता है। आप क्या करेंगे?'],
              o: [['Do not share it, and tell a trusted adult', 'नहीं बताएँगे, और किसी भरोसेमंद बड़े को बताएँगे'], ['Share it', 'बता देंगे'], ['Ask for their address', 'उनका पता पूछेंगे']], a: 0,
              why: ['Personal details should never go to strangers.', 'निजी जानकारी अनजान लोगों को कभी नहीं देनी चाहिए।'] },
            { q: ['A message says "You won a phone! Click here." What do you do?', 'एक संदेश आता है: "आपने फ़ोन जीता है! यहाँ क्लिक करें।" आप क्या करेंगे?'],
              o: [['Click quickly', 'जल्दी से क्लिक करेंगे'], ['Send it to friends', 'दोस्तों को भेजेंगे'], ['Not click, because it may be a trick', 'क्लिक नहीं करेंगे, क्योंकि यह धोखा हो सकता है']], a: 2,
              why: ['Surprise prizes are a common trick to steal information.', 'अचानक मिला इनाम अक्सर जानकारी चुराने की चाल होती है।'] }
          ]
        },
        {
          id: 'steps', minutes: 5,
          title: ['Thinking in steps', 'कदम-दर-कदम सोचना'],
          cards: [
            ['An algorithm is a list of steps to finish a task. A recipe for making tea is an algorithm.',
             'एल्गोरिदम किसी काम को पूरा करने के कदमों की सूची है। चाय बनाने का तरीक़ा भी एक एल्गोरिदम है।'],
            ['The order matters. If you pour the tea before boiling the water, it will not work. A computer follows its steps exactly in order.',
             'क्रम बहुत ज़रूरी है। अगर आप पानी उबालने से पहले चाय छान दें, तो काम नहीं बनेगा। कंप्यूटर अपने कदम ठीक उसी क्रम में चलता है।'],
            ['A loop repeats steps. Saying "stir 10 times" is shorter than saying "stir" ten times. Programmers use loops to save work.',
             'लूप कदमों को दोहराता है। "10 बार चलाओ" कहना, दस बार "चलाओ" कहने से छोटा है। प्रोग्रामर मेहनत बचाने के लिए लूप का इस्तेमाल करते हैं।']
          ],
          quiz: [
            { q: ['What is an algorithm?', 'एल्गोरिदम क्या है?'],
              o: [['A kind of computer', 'एक तरह का कंप्यूटर'], ['A list of steps to do a task', 'किसी काम को करने के कदमों की सूची'], ['A password', 'एक पासवर्ड']], a: 1,
              why: ['An algorithm is steps in order, like a recipe.', 'एल्गोरिदम क्रम से लिखे कदम हैं, जैसे कोई नुस्ख़ा।'] },
            { q: ['To make tea, which step comes first?', 'चाय बनाने में सबसे पहले कौन सा कदम आता है?'],
              o: [['Boil the water', 'पानी उबालना'], ['Drink the tea', 'चाय पीना'], ['Pour it into a cup', 'कप में डालना']], a: 0,
              why: ['The other steps only work after the water is boiled.', 'बाक़ी कदम पानी उबलने के बाद ही हो सकते हैं।'] },
            { q: ['"Clap 5 times" is an example of a …', '"5 बार ताली बजाओ" किसका उदाहरण है?'],
              o: [['mistake', 'ग़लती'], ['password', 'पासवर्ड'], ['loop', 'लूप']], a: 2,
              why: ['A loop repeats the same step many times.', 'लूप एक ही कदम को कई बार दोहराता है।'] }
          ]
        }
      ]
    }
  ];

  // s = { stars, lessons, subjectsTouched, subjectsDone, perfect, bestStreak }
  const BADGES = [
    { id: 'first', icon: '🌟', name: ['First step', 'पहला कदम'], desc: ['Finish your first step', 'अपना पहला कदम पूरा करें'], test: s => s.lessons >= 1 },
    { id: 'perfect', icon: '🎯', name: ['Perfect score', 'पूरे अंक'], desc: ['Get 3 stars in a practice', 'किसी अभ्यास में 3 तारे पाएँ'], test: s => s.perfect },
    { id: 'stars10', icon: '✨', name: ['Star collector', 'तारों का ख़ज़ाना'], desc: ['Collect 10 stars', '10 तारे जमा करें'], test: s => s.stars >= 10 },
    { id: 'explorer', icon: '🧭', name: ['Explorer', 'खोजी'], desc: ['Finish steps in 2 subjects', '2 विषयों में कदम पूरे करें'], test: s => s.subjectsTouched >= 2 },
    { id: 'streak3', icon: '🔥', name: ['3-day habit', '3 दिन की आदत'], desc: ['Learn 3 days in a row', 'लगातार 3 दिन सीखें'], test: s => s.bestStreak >= 3 },
    { id: 'champion', icon: '🏆', name: ['Subject champion', 'विषय चैंपियन'], desc: ['Finish every step in a subject', 'किसी विषय के सभी कदम पूरे करें'], test: s => s.subjectsDone >= 1 }
  ];

  return { STR, SUBJECTS, BADGES };
})();
