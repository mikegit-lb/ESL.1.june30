// ESL Learning App Content Data
// Contains course details, grammar library, conditional tenses, and If-clauses

const courseContent = {
  phases: [
    {
      id: "phase1",
      title: "Phase 1: A1 Foundations (A1 Temelleri)",
      duration: "10 mins",
      difficulty: "A1 (Beginner / Başlangıç)",
      intro: `Welcome to the first phase! We will cover the absolute essentials to get you started. In A1, you learn how to describe yourself, ask basic questions, and use the present simple tense for daily routines. 
      <br><br>
      <span class="turkish-note">💡 <strong>Türkçe Notu:</strong> İngilizce öğrenmeye başlarken en önemli adım 'to be' (olmak) fiilidir. Türkçe'deki '-dir/-dır' ekine karşılık gelir. (I am a student = Ben bir öğrenciyim).</span>`,
      vocabulary: [
        { word: "Introduce", meaning: "Tanıtmak", example: "Let me introduce myself." },
        { word: "Routine", meaning: "Rutin / Günlük işler", example: "My daily routine is simple." },
        { word: "Occupation", meaning: "Meslek", example: "What is your occupation?" },
        { word: "Habit", meaning: "Alışkanlık", example: "Smoking is a bad habit." }
      ],
      grammarPoints: [
        {
          title: "The Verb 'To Be' (Am/Is/Are)",
          explanation: "Used to describe states, feelings, occupations, and identities. We use 'am' for I, 'is' for He/She/It, and 'are' for We/You/They.",
          turkishNote: "Durum bildirirken kullanılır. Eylem (koşmak, okumak vb.) içermez.",
          examples: [
            { english: "I am a teacher.", turkish: "Ben bir öğretmenim." },
            { english: "She is happy today.", turkish: "O bugün mutlu." },
            { english: "They are at school.", turkish: "Onlar okulda." }
          ]
        },
        {
          title: "Present Simple Tense (Geniş Zaman)",
          explanation: "Used for general truths, routines, and habits. Add '-s' to the verb for singular third person (He/She/It). Use 'do/does' for questions and 'don't/doesn't' for negatives.",
          turkishNote: "Sürekli yaptığımız işleri ve genel doğruları anlatırken kullanırız. He/She/It öznelerinde fiile '-s' takısı gelir.",
          examples: [
            { english: "I work every day.", turkish: "Her gün çalışırım." },
            { english: "He plays tennis on Saturdays.", turkish: "O, Cumartesi günleri tenis oynar." },
            { english: "Do you drink coffee?", turkish: "Kahve içer misin?" }
          ]
        }
      ],
      exercises: [
        {
          id: "ex1_1",
          type: "multiple-choice",
          question: "Choose the correct verb form: She ___ (live) in London.",
          options: ["live", "lives", "living", "lived"],
          answer: "lives",
          explanation: "For singular third-person (She) in Present Simple, we add '-s' to the verb. (O, Londra'da yaşar.)"
        },
        {
          id: "ex1_2",
          type: "fill-in-the-blank",
          question: "Complete the sentence with am, is, or are: They ___ tired after the long journey.",
          answer: "are",
          explanation: "We use 'are' with the subject 'They'. (Onlar uzun yolculuktan sonra yorgunlar.)"
        },
        {
          id: "ex1_3",
          type: "word-order",
          question: "Arrange the words to make a correct sentence: [often / coffee / drinks / she / in the morning]",
          words: ["she", "often", "drinks", "coffee", "in the morning"],
          answer: "she often drinks coffee in the morning",
          explanation: "Frequency adverbs (often) come before the main verb (drinks) in the Present Simple. (Sabahları sık sık kahve içer.)"
        }
      ],
      speaking: [
        {
          id: "sp1_1",
          prompt: "Introduce yourself. Speak about your name, age, job, and where you live.",
          sampleAnswer: "Hello, my name is John. I am twenty-five years old. I am an engineer, and I live in Istanbul, Turkey.",
          translation: "Merhaba, benim adım John. Yirmi beş yaşındayım. Ben bir mühendisim ve İstanbul, Türkiye'de yaşıyorum.",
          grammarNote: "Use the Present Simple and 'to be' (I am, I live)."
        },
        {
          id: "sp1_2",
          prompt: "Describe your typical morning routine.",
          sampleAnswer: "I wake up at seven o'clock. I wash my face, drink a glass of water, and eat breakfast at seven thirty. Then, I go to work.",
          translation: "Saat yedi gibi uyanırım. Yüzümü yıkarım, bir bardak su içerim ve yedi otuzda kahvaltı yaparım. Sonra işe giderim.",
          grammarNote: "Use sequence markers like 'Then' or 'Next' along with simple present verbs."
        }
      ]
    },
    {
      id: "phase2",
      title: "Phase 2: A1-A2 Transition (Geçiş Aşaması)",
      duration: "10 mins",
      difficulty: "A1-A2 (Elementary / Temel Seviye)",
      intro: `This phase builds a bridge between A1 and A2. We introduce actions happening right now (Present Continuous), how to express abilities (Modal 'can'), and describing locations/places.
      <br><br>
      <span class="turkish-note">💡 <strong>Türkçe Notu:</strong> Şimdiki zaman (Present Continuous) yaparken yardımcı fiil 'am/is/are' ile ana fiile '-ing' takısını eklemeyi unutmayın. Türkçe'deki '-yor' ekidir. (I am reading = Okuyorum).</span>`,
      vocabulary: [
        { word: "Ability", meaning: "Yetenek / Beceri", example: "She has the ability to speak three languages." },
        { word: "Current", meaning: "Şu anki / Mevcut", example: "What is your current location?" },
        { word: "Permission", meaning: "İzin", example: "You need permission to enter this room." },
        { word: "Describe", meaning: "Tarif etmek / Tanımlamak", example: "Can you describe the city?" }
      ],
      grammarPoints: [
        {
          title: "Present Continuous Tense (Şimdiki Zaman)",
          explanation: "Used for actions happening right now, at the moment of speaking. Structure: subject + am/is/are + verb-ing.",
          turkishNote: "Konuşma anında gerçekleşen eylemler. Ayrıca geçici durumlar için de kullanılır.",
          examples: [
            { english: "I am writing an email right now.", turkish: "Şu anda bir e-posta yazıyorum." },
            { english: "What are you doing at the moment?", turkish: "Şu anda ne yapıyorsun?" },
            { english: "It is raining outside.", turkish: "Dışarıda yağmur yağıyor." }
          ]
        },
        {
          title: "Modal Verb 'Can' (Ebilmek / Yetenek)",
          explanation: "Used to express ability, permission, or possibility. Followed by the base form of the verb (without 'to').",
          turkishNote: "Yetenek veya izin bildirir. Olumsuzu 'cannot' veya kısaca 'can't' şeklindedir. Kendinden sonraki fiil yalın kalır.",
          examples: [
            { english: "I can speak English well.", turkish: "İyi İngilizce konuşabilirim." },
            { english: "Can I open the window?", turkish: "Pencereyi açabilir miyim? (İzin)" },
            { english: "He cannot swim fast.", turkish: "O hızlı yüzemez." }
          ]
        }
      ],
      exercises: [
        {
          id: "ex2_1",
          type: "multiple-choice",
          question: "Choose the correct sentence: Look! The bus ___.",
          options: ["is coming", "comes", "coming", "are coming"],
          answer: "is coming",
          explanation: "'Look!' indicates the action is happening right now, requiring Present Continuous. (Bak! Otobüs geliyor.)"
        },
        {
          id: "ex2_2",
          type: "fill-in-the-blank",
          question: "Complete with the modal verb: Children ___ (not) swim here; it is dangerous.",
          answer: "cannot",
          explanation: "Expresses inability or prohibition. 'can't' or 'cannot' are correct. (Çocuklar burada yüzemez; tehlikelidir.)"
        },
        {
          id: "ex2_3",
          type: "word-order",
          question: "Arrange the words: [you / what / doing / are / at the moment / ?]",
          words: ["what", "are", "you", "doing", "at the moment", "?"],
          answer: "what are you doing at the moment ?",
          explanation: "Question structure in Present Continuous: Question word + am/is/are + subject + verb-ing. (Şu anda ne yapıyorsun?)"
        }
      ],
      speaking: [
        {
          id: "sp2_1",
          prompt: "Look around your room or imagine a place. Describe what is happening right now using Present Continuous.",
          sampleAnswer: "At the moment, I am sitting at my desk. Outside, the birds are singing, and a dog is barking in the street. My brother is watching television in the other room.",
          translation: "Şu anda masamda oturuyorum. Dışarıda kuşlar ötüyor ve sokakta bir köpek havlıyor. Kardeşim diğer odada televizyon izliyor.",
          grammarNote: "Ensure you use 'am/is/are + verb-ing' correctly for all subjects."
        },
        {
          id: "sp2_2",
          prompt: "Talk about three things you can do well, and two things you cannot do.",
          sampleAnswer: "I can play the guitar, I can cook delicious Italian food, and I can speak English. However, I cannot drive a car, and I cannot swim very fast.",
          translation: "Gitar çalabilirim, lezzetli İtalyan yemekleri pişirebilirim ve İngilizce konuşabilirim. Ancak, araba süremem ve çok hızlı yüzemem.",
          grammarNote: "Keep the verb after 'can' / 'cannot' in its pure base form."
        }
      ]
    },
    {
      id: "phase3",
      title: "Phase 3: A2 Consolidation (A2 Yetkinlik)",
      duration: "10 mins",
      difficulty: "A2 (Waystage / İleri Temel Seviye)",
      intro: `Welcome to the final phase! To reach the A2 level, you need to confidently talk about past events (Past Simple), compare things (Comparatives), and make plans for the future (Going to).
      <br><br>
      <span class="turkish-note">💡 <strong>Türkçe Notu:</strong> Geçmiş zamanı (Past Simple) yaparken düzenli fiillere '-ed' ekleriz (work -> worked), ancak düzensiz fiiller tamamen değişir (go -> went). Bunları ezberlemek önemlidir.</span>`,
      vocabulary: [
        { word: "Compare", meaning: "Karşılaştırmak", example: "Compare these two cities." },
        { word: "Experience", meaning: "Deneyim / Tecrübe", example: "I have two years of work experience." },
        { word: "Intent", meaning: "Niyet / Amaç", example: "My intent is to improve my pronunciation." },
        { word: "Yesterday", meaning: "Dün", example: "Where were you yesterday?" }
      ],
      grammarPoints: [
        {
          title: "Past Simple Tense (Geçmiş Zaman)",
          explanation: "Used to describe completed actions in the past. Regular verbs add '-ed'. Irregular verbs have unique forms (e.g., eat -> ate, buy -> bought). Use 'did' for questions and 'didn't' for negatives.",
          turkishNote: "Geçmişte bitmiş eylemler. Soru ve olumsuzlarda fiil yalın haline döner çünkü 'did / didn't' yardımcı fiili geçmiş zamanı üstlenir.",
          examples: [
            { english: "I watched a good movie yesterday.", turkish: "Dün güzel bir film izledim." },
            { english: "She went to Paris last summer.", turkish: "Geçen yaz Paris'e gitti." },
            { english: "Did you buy the newspaper?", turkish: "Gazeteyi satın aldın mı?" }
          ]
        },
        {
          title: "Comparatives and Superlatives (Karşılaştırmalar)",
          explanation: "Use comparative adjectives to compare two things. Short adjectives: add '-er' (taller). Long adjectives: use 'more' (more beautiful). Use 'than' after comparatives. Superlatives describe the extreme (tallest, most beautiful).",
          turkishNote: "İki şeyi kıyaslarken comparative kullanırız. Tek hecelilerde sıfatın sonuna '-er', çok hecelilerde sıfatın başına 'more' gelir.",
          examples: [
            { english: "My new car is faster than my old one.", turkish: "Yeni arabam eskisinden daha hızlı." },
            { english: "English is easier than Japanese.", turkish: "İngilizce Japonca'dan daha kolaydır." },
            { english: "Tokyo is the largest city in the world.", turkish: "Tokyo dünyadaki en büyük şehirdir." }
          ]
        },
        {
          title: "Future Plan: 'Be Going To' (Gelecek Zaman Planları)",
          explanation: "Used to talk about future plans, intentions, or strong predictions based on evidence. Structure: subject + am/is/are + going to + verb.",
          turkishNote: "Önceden planlanmış, kararlaştırılmış gelecek zaman eylemleri. Türkçe'deki '-ecek/-acak' (planlı) ekine karşılık gelir.",
          examples: [
            { english: "I am going to study English tonight.", turkish: "Bu akşam İngilizce çalışacağım (planlı)." },
            { english: "They are going to buy a new house.", turkish: "Yeni bir ev satın alacaklar." },
            { english: "Look at the dark clouds! It is going to rain.", turkish: "Koyu bulutlara bak! Yağmur yağacak (kanıt var)." }
          ]
        }
      ],
      exercises: [
        {
          id: "ex3_1",
          type: "multiple-choice",
          question: "Choose the correct past form: We ___ (go) to the beach last Sunday.",
          options: ["go", "goes", "went", "goed"],
          answer: "went",
          explanation: "'go' is an irregular verb; its past simple form is 'went'. (Geçen Pazar sahile gittik.)"
        },
        {
          id: "ex3_2",
          type: "fill-in-the-blank",
          question: "Complete the comparative: Gold is ___ (expensive) than silver.",
          answer: "more expensive",
          explanation: "'expensive' is a long adjective, so we use 'more expensive than'. (Altın gümüşten daha pahalıdır.)"
        },
        {
          id: "ex3_3",
          type: "word-order",
          question: "Arrange the words: [going to / next month / they / buy / are / a new car]",
          words: ["they", "are", "going to", "buy", "a new car", "next month"],
          answer: "they are going to buy a new car next month",
          explanation: "Future plan: Subject + are + going to + verb + object + time expression. (Gelecek ay yeni bir araba satın alacaklar.)"
        }
      ],
      speaking: [
        {
          id: "sp3_1",
          prompt: "What did you do last weekend? Describe your activities in the past tense.",
          sampleAnswer: "Last weekend, I woke up late on Saturday. I cooked breakfast, cleaned my apartment, and met my friends in the afternoon. We drank coffee and talked. On Sunday, I stayed at home and rested.",
          translation: "Geçen hafta sonu, Cumartesi günü geç uyandım. Kahvaltı hazırladım, dairemi temizledim ve öğleden sonra arkadaşlarımla buluştum. Kahve içip sohbet ettik. Pazar günü evde kalıp dinlendim.",
          grammarNote: "Pay close attention to irregular past verbs (woke, cooked, cleaned, met, drank, stayed)."
        },
        {
          id: "sp3_2",
          prompt: "Compare your current city to another city you visited in the past.",
          sampleAnswer: "I live in Istanbul. Istanbul is much bigger and more crowded than Izmir. However, Izmir is quieter, cleaner, and closer to the sea. The weather in Izmir is usually warmer than in Istanbul.",
          translation: "İstanbul'da yaşıyorum. İstanbul, İzmir'den çok daha büyük ve kalabalık. Ancak, İzmir daha sakin, daha temiz ve denize daha yakın. İzmir'de hava genellikle İstanbul'dan daha sıcaktır.",
          grammarNote: "Use comparatives (bigger, more crowded, quieter, cleaner, warmer) followed by 'than'."
        }
      ]
    }
  ]
};

const grammarLibrary = [
  {
    topic: "Pronouns (Zamirler)",
    level: "A1",
    description: "Subject, Object, and Possessive pronouns and adjectives.",
    explanation: `
      Pronouns are words that replace nouns. In English, we use different pronouns depending on their role in the sentence.
      <br><br>
      <table>
        <thead>
          <tr>
            <th>Subject (Özne)</th>
            <th>Object (Nesne)</th>
            <th>Possessive Adj (İyelik Sıf.)</th>
            <th>Possessive Pronoun (İyelik Zam.)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>I (Ben)</td><td>me (beni/bana)</td><td>my (benim)</td><td>mine (benimki)</td></tr>
          <tr><td>You (Sen)</td><td>you (seni/sana)</td><td>your (senin)</td><td>yours (seninki)</td></tr>
          <tr><td>He (O - Erkek)</td><td>him (onu/ona)</td><td>his (onun)</td><td>his (onunki)</td></tr>
          <tr><td>She (O - Kadın)</td><td>her (onu/ona)</td><td>her (onun)</td><td>hers (onunki)</td></tr>
          <tr><td>It (O - Cansız/Hayvan)</td><td>it (onu/ona)</td><td>its (onun)</td><td>-</td></tr>
          <tr><td>We (Biz)</td><td>us (bizi/bize)</td><td>our (bizim)</td><td>ours (bizimki)</td></tr>
          <tr><td>They (Onlar)</td><td>them (onları/onlara)</td><td>their (onların)</td><td>theirs (onlarınki)</td></tr>
        </tbody>
      </table>
      <br>
      <span class="turkish-note">💡 <strong>Türkçe Notu:</strong> İyelik sıfatlarından (my, your, his) sonra mutlaka bir isim gelmelidir (my book). İyelik zamirlerinden (mine, yours, his) sonra ise isim gelmez (This book is mine = Bu kitap benimkidir).</span>
    `,
    examples: [
      { english: "She loves her dog. It follows her everywhere.", turkish: "O köpeğini çok seviyor. Köpek onu her yerde takip eder." },
      { english: "Is this car yours? No, mine is blue.", turkish: "Bu araba senin mi? Hayır, benimki mavi." }
    ]
  },
  {
    topic: "Present Simple (Geniş Zaman)",
    level: "A1",
    description: "For facts, habits, and daily routines.",
    explanation: `
      Use the Present Simple tense for things that are generally true, habits, or scheduled routines.
      <br><br>
      <strong>Structure:</strong>
      <ul>
        <li><strong>Positive:</strong> Subject + Verb (add -s/-es for He/She/It)</li>
        <li><strong>Negative:</strong> Subject + don't/doesn't + Verb (base form)</li>
        <li><strong>Question:</strong> Do/Does + Subject + Verb (base form)?</li>
      </ul>
      <br>
      <span class="turkish-note">💡 <strong>Türkçe Notu:</strong> 'Does' veya 'doesn't' kullanılan cümlelerde, fiilin sonundaki '-s' takısı düşer. (He likes milk -> Does he like milk? / He doesn't like milk).</span>
    `,
    examples: [
      { english: "Water boils at 100 degrees Celsius.", turkish: "Su 100 santigrat derecede kaynar." },
      { english: "They do not live here anymore.", turkish: "Artık burada yaşamıyorlar." },
      { english: "Does he play soccer?", turkish: "O futbol oynar mı?" }
    ]
  },
  {
    topic: "Present Continuous (Şimdiki Zaman)",
    level: "A1-A2",
    description: "For actions happening right now.",
    explanation: `
      Use the Present Continuous for actions happening at the moment of speaking or for temporary situations.
      <br><br>
      <strong>Structure:</strong>
      <ul>
        <li><strong>Positive:</strong> Subject + am/is/are + Verb-ing</li>
        <li><strong>Negative:</strong> Subject + am not/isn't/aren't + Verb-ing</li>
        <li><strong>Question:</strong> Am/Is/Are + Subject + Verb-ing?</li>
      </ul>
      <br>
      <span class="turkish-note">💡 <strong>Türkçe Notu:</strong> Bazı fiiller (love, like, hate, want, know, understand, believe) durum bildirdiği için genellikle şimdiki zaman eki '-ing' almazlar. Bunlara 'stative verbs' denir. 'I am knowing' yerine 'I know' denir.</span>
    `,
    examples: [
      { english: "Listen! Somebody is playing the piano.", turkish: "Dinle! Biri piyano çalıyor." },
      { english: "I am studying English at the moment.", turkish: "Şu anda İngilizce çalışıyorum." }
    ]
  },
  {
    topic: "Past Simple (Geçmiş Zaman)",
    level: "A2",
    description: "Completed actions in the past.",
    explanation: `
      Use the Past Simple to talk about actions that started and finished in the past. We often use time expressions like *yesterday*, *last week*, *two years ago*.
      <br><br>
      <strong>Structure:</strong>
      <ul>
        <li><strong>Regular Verbs:</strong> add -ed (work -> worked, stay -> stayed, smile -> smiled)</li>
        <li><strong>Irregular Verbs:</strong> change completely (go -> went, see -> saw, buy -> bought)</li>
        <li><strong>Negative:</strong> Subject + didn't + Verb (base form)</li>
        <li><strong>Question:</strong> Did + Subject + Verb (base form)?</li>
      </ul>
      <br>
      <span class="turkish-note">💡 <strong>Türkçe Notu:</strong> Geçmiş zaman sorularında veya olumsuzlarında 'did' kullanıldığı için ana fiil geçmiş zaman takısı almaz, yalın (1. hal) kalır. (I saw him -> I didn't see him -> Did you see him?).</span>
    `,
    examples: [
      { english: "We visited our grandparents last Sunday.", turkish: "Geçen Pazar büyükbabamları ziyaret ettik." },
      { english: "Did you go out last night?", turkish: "Dün gece dışarı çıktın mı?" },
      { english: "She didn't write the report.", turkish: "Raporu yazmadı." }
    ]
  },
  {
    topic: "Future: Will vs. Going To (Gelecek Zaman)",
    level: "A2",
    description: "Spontaneous decisions (will) vs. planned actions (going to).",
    explanation: `
      We have two primary ways to express the future at A2 level:
      <br><br>
      <strong>1. Will (Spontaneous/Prediction):</strong>
      <ul>
        <li>Decisions made at the moment of speaking (instant decision).</li>
        <li>Opinions or predictions without direct evidence.</li>
        <li>Offers, promises, and requests.</li>
      </ul>
      <strong>2. Be Going To (Planned/Evidence):</strong>
      <ul>
        <li>Decisions made *before* the moment of speaking (prior plans).</li>
        <li>Predictions based on strong physical evidence right now.</li>
      </ul>
      <br>
      <span class="turkish-note">💡 <strong>Türkçe Notu:</strong> Garsona sipariş verirken 'will' kullanırız (I will have a coke, please). Akşamki sinema planımızı söylerken ise 'going to' kullanırız (I am going to watch a movie tonight).</span>
    `,
    examples: [
      { english: "The phone is ringing. I will answer it.", turkish: "Telefon çalıyor. Ben bakarım. (Anlık karar)" },
      { english: "We are going to visit my uncle tomorrow.", turkish: "Yarın amcamı ziyaret edeceğiz. (Planlı)" },
      { english: "Look at that driver! He is going to crash.", turkish: "Şu sürücüye bak! Kaza yapacak. (Kanıt var)" }
    ]
  },
  {
    topic: "Nouns & Articles (İsimler ve Tanımlayıcılar)",
    level: "A1-A2",
    description: "Countable/Uncountable nouns, a/an, and the.",
    explanation: `
      English nouns are divided into Countable (we can count them, like books, apples) and Uncountable (we cannot count them, like water, rice, information).
      <br><br>
      <strong>Articles:</strong>
      <ul>
        <li><strong>A / An:</strong> Used with singular, countable nouns when speaking generally or for the first time. (Use 'an' before vowel sounds: an apple, an hour).</li>
        <li><strong>The:</strong> Used when both speaker and listener know exactly which specific noun is being discussed.</li>
      </ul>
      <br>
      <span class="turkish-note">💡 <strong>Türkçe Notu:</strong> Türkçe'de olmayan 'the' (belirli tanımlayıcı) konusu önemlidir. Bahsedilen şey biliniyorsa 'the' kullanılır. Örneğin: 'Give me a book' (Bana herhangi bir kitap ver) vs. 'Give me the book' (Bana [masadaki/bildiğimiz] o kitabı ver).</span>
    `,
    examples: [
      { english: "Would you like a cup of tea? (countable container, general)", turkish: "Bir fincan çay ister misiniz?" },
      { english: "I need some information. (uncountable - never plural)", turkish: "Biraz bilgiye ihtiyacım var." },
      { english: "The sun is hot today. (unique object)", turkish: "Bugün güneş çok sıcak." }
    ]
  },
  {
    topic: "Comparatives & Superlatives (Karşılaştırma)",
    level: "A2",
    description: "Comparing two things, or describing the extreme.",
    explanation: `
      To compare two objects, people, or concepts:
      <br><br>
      <strong>Comparative Rules:</strong>
      <ul>
        <li>Short adjectives (1 syllable): add '-er' + than (fast -> faster than)</li>
        <li>Adjectives ending in -y: change y to 'ier' + than (happy -> happier than)</li>
        <li>Long adjectives (2+ syllables): use 'more' + adjective + than (more expensive than)</li>
        <li>Irregulars: good -> better, bad -> worse, far -> further</li>
      </ul>
      <strong>Superlative Rules (comparing 3+ things):</strong>
      <ul>
        <li>Short: the + adjective-est (the fastest)</li>
        <li>Ending in -y: the + adjective-iest (the happiest)</li>
        <li>Long: the + most + adjective (the most expensive)</li>
        <li>Irregulars: the best, the worst, the furthest</li>
      </ul>
      <br>
      <span class="turkish-note">💡 <strong>Türkçe Notu:</strong> Karşılaştırma yaparken 'than' (den/dan eki) kelimesini unutmayın. (Taller than me = Benden daha uzun).</span>
    `,
    examples: [
      { english: "This box is heavier than that one.", turkish: "Bu kutu diğerinden daha ağır." },
      { english: "She is the most intelligent student in the class.", turkish: "O, sınıftaki en zeki öğrencidir." }
    ]
  },
  {
    topic: "Modals: Can, Should, Must (Yardımcı Fiiller)",
    level: "A2",
    description: "Ability (can), advice (should), and obligation (must / have to).",
    explanation: `
      Modals are helping verbs that express functions like ability, duty, or suggestions. They are always followed by a verb in its base form.
      <br><br>
      <strong>Common Modals at A1/A2:</strong>
      <ul>
        <li><strong>Can / Can't:</strong> Ability or permission. (I can swim.)</li>
        <li><strong>Should / Shouldn't:</strong> Giving advice, suggestions. (You should sleep early.)</li>
        <li><strong>Must:</strong> Personal, strong obligation. (I must finish this.)</li>
        <li><strong>Have to / Has to:</strong> External rule or necessity. (We have to wear a uniform.)</li>
        <li><strong>Don't have to:</strong> No necessity. (You don't have to cook; I bought food.)</li>
      </ul>
      <br>
      <span class="turkish-note">💡 <strong>Türkçe Notu:</strong> 'Mustn't' (yasak - yapmamalısın) ile 'Don't have to' (zorunda değilsin - yapsan da olur yapmasan da) anlam farkına dikkat edin. 'You mustn't smoke' = Sigara içmen yasaktır. 'You don't have to work' = Çalışmak zorunda değilsin.</span>
    `,
    examples: [
      { english: "You should study hard for your exam.", turkish: "Sınavın için sıkı çalışmalısın (tavsiye)." },
      { english: "We must protect our planet.", turkish: "Gezegenimizi korumalıyız (güçlü içsel gereklilik)." },
      { english: "You don't have to pay now.", turkish: "Şimdi ödemek zorunda değilsiniz (isteğe bağlı)." }
    ]
  },
  {
    topic: "Prepositions of Time & Place (Edatlar)",
    level: "A1-A2",
    description: "Using 'in', 'on', and 'at' correctly.",
    explanation: `
      Prepositions show relationships in time or location.
      <br><br>
      <strong>1. Prepositions of Time:</strong>
      <ul>
        <li><strong>At:</strong> Specific times, points (at 5:00, at noon, at night, at the weekend).</li>
        <li><strong>On:</strong> Days of the week, dates (on Monday, on October 25th, on Christmas Day).</li>
        <li><strong>In:</strong> Longer periods like months, years, seasons, centuries (in May, in 2026, in summer, in the morning).</li>
      </ul>
      <strong>2. Prepositions of Place:</strong>
      <ul>
        <li><strong>At:</strong> Specific points, addresses, events (at the door, at school, at a concert).</li>
        <li><strong>On:</strong> Surfaces, public transport, floors (on the table, on the bus, on the first floor).</li>
        <li><strong>In:</strong> Enclosed spaces, countries, cities (in the box, in Turkey, in London).</li>
      </ul>
      <br>
      <span class="turkish-note">💡 <strong>Türkçe Notu:</strong> Türkçe'de '-de/-da' ekiyle karşıladığımız bu edatlar İngilizce'de ayrı kurallara bağlıdır. Geniş zaman dilimleri için 'in', daha dar ve yüzeyler için 'on', nokta atışı yer ve zamanlar için 'at' kullanılır.</span>
    `,
    examples: [
      { english: "Our meeting is at 2:00 PM on Friday in July.", turkish: "Toplantımız Temmuz ayında Cuma günü saat 14:00'te." },
      { english: "The book is on the table in my bedroom.", turkish: "Kitap, yatak odamdaki masanın üzerinde." }
    ]
  },
  {
    topic: "Conjunctions: And, But, Because, So (Bağlaçlar)",
    level: "A1-A2",
    description: "Linking words to connect clauses and ideas.",
    explanation: `
      Conjunctions join two clauses or words together to create compound sentences.
      <br><br>
      <strong>Common Conjunctions:</strong>
      <ul>
        <li><strong>And (Ve):</strong> Adds information. (I bought bread and cheese.)</li>
        <li><strong>But (Ama / Fakat):</strong> Shows contrast or conflict. (I want to go, but I am tired.)</li>
        <li><strong>Because (Çünkü):</strong> Gives a reason. (I stayed home because it was raining.)</li>
        <li><strong>So (Bu yüzden):</strong> Shows a result. (It was raining, so I stayed home.)</li>
      </ul>
      <br>
      <span class="turkish-note">💡 <strong>Türkçe Notu:</strong> 'Because' sebep belirtir (neden?), 'so' ise sonuç belirtir (ne oldu?). Birbirlerinin tam zıttı yönlerde bağ kurarlar. (I was sick because I ate cold food vs. I ate cold food so I was sick).</span>
    `,
    examples: [
      { english: "He worked very hard, so he passed the test.", turkish: "Çok sıkı çalıştı, bu yüzden sınavı geçti." },
      { english: "I like milk but my sister prefers juice.", turkish: "Ben süt severim ama kız kardeşim meyve suyunu tercih eder." }
    ]
  }
];

const conditionalTensesContent = {
  title: "Tenses for Conditionals Masterclass (Koşul Cümleleri için Zamanlar)",
  duration: "10 mins",
  intro: `To master English conditionals (koşul cümleleri), you must first master the specific tenses that they rely on. Conditionals represent cause-and-effect relationships: "If X happens, Y will happen."
  <br><br>
  The primary tenses and structures used in conditionals are:
  <ol>
    <li><strong>Present Simple (Geniş Zaman):</strong> Used in the 'If' clause for Type 0 and Type 1. (e.g., If you <strong>heat</strong> ice...)</li>
    <li><strong>Present Continuous (Şimdiki Geniş Zaman):</strong> Can be used in 'If' clauses for ongoing actions. (e.g., If you <strong>are looking</strong> for him...)</li>
    <li><strong>Future with Will (Gelecek Zaman):</strong> Used in the 'Result' clause of Type 1. (e.g., ...it <strong>will melt</strong>.)</li>
    <li><strong>Past Simple (Geçmiş Zaman):</strong> Used in the 'If' clause of Type 2 (imaginary situations). (e.g., If I <strong>won</strong> the lottery...)</li>
    <li><strong>Would + Verb:</strong> Used in the 'Result' clause of Type 2. (e.g., ...I <strong>would buy</strong> a yacht.)</li>
  </ol>
  <br>
  <span class="turkish-note">💡 <strong>Türkçe Notu:</strong> Koşul cümlelerinde temel kural: 'If' kelimesinin bulunduğu yarım cümlede (koşul kısmı) asla 'Will' kullanılmaz! (If it will rain -> YANLIŞ, If it rains -> DOĞRU).</span>
  <br><br>
  <strong>Speaking Drills (12 Questions):</strong> Practice speaking in these tenses. Speak your answer aloud using the microphone, then listen to the sample answer and check the grammar explanation.`,
  questions: [
    {
      id: "ct_1",
      tense: "Present Simple (Geniş Zaman)",
      focus: "General Fact / Habits (Type 0 Condition)",
      question: "What happens if you leave butter in the sun? (Tereyağını güneşte bırakırsan ne olur?)",
      explanation: "Use the Present Simple in both parts because it is a universal scientific fact. ('leave' and 'melts')",
      sampleAnswer: "If you leave butter in the sun, it melts quickly because of the heat.",
      translation: "Tereyağını güneşte bırakırsan, ısıdan dolayı hızlıca erir.",
      turkishNote: "Genel gerçekler için her iki tarafta da Geniş Zaman (Present Simple) kullanılır. 'It' öznesi olduğu için 'melts' fiiline -s ekledik."
    },
    {
      id: "ct_2",
      tense: "Present Simple (Geniş Zaman)",
      focus: "Daily routines and responses",
      question: "What do you do if you feel very tired after work? (İşten sonra çok yorgun hissedersen ne yaparsın?)",
      explanation: "Describe your personal habit. Both verbs must be in the Present Simple.",
      sampleAnswer: "If I feel very tired after work, I usually take a warm shower and sleep early.",
      translation: "İşten sonra çok yorgun hissedersem, genellikle ılık bir duş alırım ve erken uyurum.",
      turkishNote: "Kendi kişisel rutinleriniz ve alışkanlıklarınız da Type 0 (Genel kural/alışkanlık) yapısına girer."
    },
    {
      id: "ct_3",
      tense: "Present Simple (Geniş Zaman)",
      focus: "Scientific rules",
      question: "What happens if you freeze water? (Suyu dondurursan ne olur?)",
      explanation: "Use Present Simple. Water turns into ice.",
      sampleAnswer: "If you freeze water, it turns into ice and expands.",
      translation: "Suyu dondurursan, buza dönüşür ve genleşir.",
      turkishNote: "Scientific facts (Bilimsel gerçekler) her zaman Present Simple gerektirir. 'It turns' ve 'expands' şeklinde üçüncü tekil şahıs takısı aldılar."
    },
    {
      id: "ct_4",
      tense: "Future Simple with 'Will'",
      focus: "Real Future Possibility (Type 1 Result)",
      question: "If it rains tomorrow, what will you do? (Yarın yağmur yağarsa ne yapacaksın?)",
      explanation: "The 'If' clause is Present Simple ('rains'), but the result clause must use 'will' + base verb because it is a future possibility.",
      sampleAnswer: "If it rains tomorrow, I will stay at home and watch a documentary on television.",
      translation: "Yarın yağmur yağarsa, evde kalacağım ve televizyonda belgesel izleyeceğim.",
      turkishNote: "'If'li kısım Present Simple (rains), diğer kısım gelecek zaman bildirdiği için 'will stay' (Future Simple) olur."
    },
    {
      id: "ct_5",
      tense: "Future Simple with 'Will'",
      focus: "Future planning / consequences",
      question: "What will your parents do if you pass your English exam? (İngilizce sınavını geçersen ailen ne yapacak?)",
      explanation: "If + subject + present verb, subject + will + verb. (Type 1 structure)",
      sampleAnswer: "If I pass my English exam, my parents will be very happy and they will buy me a present.",
      translation: "İngilizce sınavımı geçersem, ailem çok mutlu olacak ve bana bir hediye alacaklar.",
      turkishNote: "'My parents' çoğul olduğu için 'will be' ve 'will buy' şeklinde çekimlendi."
    },
    {
      id: "ct_6",
      tense: "Future Simple with 'Will'",
      focus: "Promises & Predictions",
      question: "If you have free time this evening, who will you call? (Bu akşam boş vaktin olursa kimi arayacaksın?)",
      explanation: "Type 1 question about a future possibility tonight.",
      sampleAnswer: "If I have free time this evening, I will call my best friend and invite her to dinner.",
      translation: "Bu akşam boş vaktim olursa, en yakın arkadaşımı arayıp onu akşam yemeğine davet edeceğim.",
      turkishNote: "Boş vaktin olması ihtimali gerçekçi olduğundan Type 1 'will' yapısı kullanılır."
    },
    {
      id: "ct_7",
      tense: "Past Simple (Geçmiş Zaman)",
      focus: "Imaginary / Unreal Situation (Type 2 Condition)",
      question: "If you had a lot of money, what would you buy? (Çok paran olsaydı ne satın alırdın?)",
      explanation: "This is imaginary. The conditional clause uses Past Simple ('had'), and the result clause uses 'would' + base verb.",
      sampleAnswer: "If I had a lot of money, I would buy a large house near the sea and travel around the world.",
      translation: "Çok param olsaydı, deniz kenarında büyük bir ev satın alırdım ve dünyayı gezerdim.",
      turkishNote: "Type 2 gerçek dışı veya hayali durumları anlatır. Koşul kısmında geçmiş zaman fiili 'had' kullanılır ama anlam şu anki zamandır. Diğer tarafta ise 'would' kullanılır."
    },
    {
      id: "ct_8",
      tense: "Past Simple (Geçmiş Zaman)",
      focus: "Unreal identity / Advice",
      question: "If you were the president of your country, what would you change? (Ülkenin başkanı olsaydın neyi değiştirirdin?)",
      explanation: "Use 'were' instead of 'was' in Type 2 conditional for all subjects (If I were, If she were) to show it is purely hypothetical.",
      sampleAnswer: "If I were the president, I would make education free and build more green parks.",
      translation: "Başkan olsaydım, eğitimi ücretsiz yapardım ve daha fazla yeşil park inşa ederdim.",
      turkishNote: "İngilizce'de hayali durumlarda 'I/He/She/It' özneleri ile de 'was' yerine 'were' kullanımı tercih edilir (If I were you = Senin yerinde olsaydım)."
    },
    {
      id: "ct_9",
      tense: "Past Simple (Geçmiş Zaman)",
      focus: "Imaginary relocation",
      question: "Where would you live if you could live anywhere in the world? (Dünyada herhangi bir yerde yaşayabilseydin nerede yaşardın?)",
      explanation: "Conditional contains 'could' (past of can) and result contains 'would live'.",
      sampleAnswer: "If I could live anywhere in the world, I would live in a quiet village in Switzerland.",
      translation: "Dünyada herhangi bir yerde yaşayabilseydim, İsviçre'de sakin bir köyde yaşardım.",
      turkishNote: "'could live' (yaşayabilseydim - yetenek/ihtimal koşulu) ve 'would live' (yaşardım) uyumu."
    },
    {
      id: "ct_10",
      tense: "Present Continuous (Şimdiki Zaman)",
      focus: "Continuous condition in Present",
      question: "What should you do if someone is sleeping in the library? (Kütüphanede biri uyuyorsa ne yapmalısın?)",
      explanation: "The condition is ongoing: 'If someone is sleeping' (Present Continuous). The result can use a modal like 'should' for advice.",
      sampleAnswer: "If someone is sleeping in the library, you should speak quietly and you should not make noise.",
      translation: "Kütüphanede biri uyuyorsa, sessizce konuşmalısın ve gürültü yapmamalısın.",
      turkishNote: "Koşul cümlesi illa düz Geniş Zaman olmak zorunda değil; 'şu an yapılıyor olan' bir durumsa Şimdiki Zaman da olabilir."
    },
    {
      id: "ct_11",
      tense: "Modal Verb 'Should'",
      focus: "Advice conditional",
      question: "What will you do if you feel sick during class? (Ders sırasında hasta hissedersen ne yapacaksın?)",
      explanation: "If + present simple, result can express plans or rules.",
      sampleAnswer: "If I feel sick during class, I will ask the teacher for permission and go to the hospital.",
      translation: "Ders sırasında hasta hissedersem, öğretmenden izin isteyip hastaneye gideceğim.",
      turkishNote: "Gerçekleşmesi muhtemel durum. Present Simple (feel) ve Future (will ask... and go) uyumu."
    },
    {
      id: "ct_12",
      tense: "Past Perfect (Miş'li Geçmiş Zaman)",
      focus: "Past Regret / Unreal Past (Type 3 - Preview)",
      question: "If you had studied harder last year, would you have passed the advanced exam? (Geçen yıl daha sıkı çalışsaydın ileri düzey sınavı geçer miydin?)",
      explanation: "This is a Type 3 conditional (unreal past, regrets). Structure: If + Past Perfect ('had studied'), result uses 'would have' + V3 (past participle).",
      sampleAnswer: "Yes, if I had studied harder last year, I would have passed the advanced exam easily.",
      translation: "Evet, geçen yıl daha sıkı çalışsaydım, ileri düzey sınavı kolayca geçerdim.",
      turkishNote: "Geçmişe dair gerçekleşmemiş hayaller veya pişmanlıklar için kullanılır. Koşulda Past Perfect (had V3), sonuçta would have V3 kullanılır."
    }
  ]
};

const ifClausesContent = {
  title: "Deep Dive: If Clauses Type 0 & Type 1 (Koşul Cümleleri Tip 0 ve Tip 1)",
  intro: `Conditionals (Koşul Cümleleri), İngilizce'de bir olayın gerçekleşmesinin başka bir olaya bağlı olduğu durumları ifade etmek için kullanılır. 
  Genellikle iki cümlecikten oluşurlar:
  <br>
  1. <strong>Condition (If) Clause:</strong> Koşul cümlesi ("Eğer ..." kısmı)
  <br>
  2. <strong>Result (Main) Clause:</strong> Sonuç cümlesi ("... olacak/olur" kısmı)
  <br><br>
  Cümlenin sırası önemli değildir:
  <br>
  • <em>If it rains, we stay home.</em> (If başta ise araya virgül koyulur)
  <br>
  • <em>We stay home if it rains.</em> (If ortada ise virgül koyulmaz)`,
  
  type0: {
    title: "If Clause Type 0: General Truths & Habits (Genel Gerçekler ve Alışkanlıklar)",
    explanation: `
      Type 0 conditional is used when the result of the condition is <strong>always true</strong> or <strong>always happens</strong>. Think of it as natural laws, scientific facts, and automatic personal habits.
      <br><br>
      <h4>Grammar Structure (Dilbilgisi Yapısı):</h4>
      <div class="grammar-formula">
        <strong>If + Present Simple (Geniş Zaman), [comma] + Present Simple (Geniş Zaman)</strong>
      </div>
      <br>
      <h4>When to Use (Ne Zaman Kullanılır):</h4>
      <ul>
        <li><strong>Scientific Facts (Bilimsel Gerçekler):</strong> Physics, chemistry, or nature laws.</li>
        <li><strong>General Rules (Genel Kurallar):</strong> Instructions or static facts.</li>
        <li><strong>Personal Routines (Kişisel Alışkanlıklar):</strong> Things you always do under certain conditions.</li>
      </ul>
      <br>
      <span class="turkish-note">💡 <strong>Türkçe Açıklama:</strong> Tip 0 cümlelerinde her iki taraf da Geniş Zaman (Present Simple) ile kurulur. Çünkü bu durumlar olasılık değil, kesin kurallardır. Türkçeye çevirirken "-se/-sa ... -er/-ar" (Örn: Suyu ısıtırsan kaynar) şeklinde çevrilir. Bu yapıda 'If' yerine genellikle 'When' (olduğu zaman) de kullanılabilir çünkü sonuç %100 kesindir.</span>
    `,
    examples: [
      {
        english: "If you heat ice, it melts.",
        turkish: "Buzu ısıtırsan erir.",
        note: "Scientific fact (100% true). Heat = Present Simple, melts = Present Simple."
      },
      {
        english: "If you mix red and blue, you get purple.",
        turkish: "Kırmızı ve maviyi karıştırırsan mor elde edersin.",
        note: "Color physics rule."
      },
      {
        english: "If I drink coffee late at night, I do not sleep well.",
        turkish: "Gece geç saatte kahve içersem iyi uyuyamam.",
        note: "Personal physical habit."
      },
      {
        english: "Plants die if they do not get water.",
        turkish: "Bitkiler su almazlarsa ölürler.",
        note: "Nature law. Note that 'if' is in the middle, so no comma is used."
      },
      {
        english: "If the temperature drops below zero, water freezes.",
        turkish: "Sıcaklık sıfırın altına düşerse su donar.",
        note: "Scientific fact."
      }
    ]
  },

  type1: {
    title: "If Clause Type 1: Real Future Possibilities (Gerçek Gelecek İhtimalleri)",
    explanation: `
      Type 1 conditional is used to describe a <strong>possible future condition</strong> and its <strong>probable result</strong>. It is not a guaranteed fact, but it is very likely to happen in the future under the right conditions.
      <br><br>
      <h4>Grammar Structure (Dilbilgisi Yapısı):</h4>
      <div class="grammar-formula">
        <strong>If + Present Simple (Geniş Zaman), [comma] + Will + Verb (Yalın Fiil)</strong>
      </div>
      <br>
      <h4>When to Use (Ne Zaman Kullanılır):</h4>
      <ul>
        <li><strong>Future Plans & Threats (Gelecek Planları & Tehditler):</strong> If X happens, I will do Y.</li>
        <li><strong>Warnings (Uyarılar):</strong> Warning someone about the consequence of their actions.</li>
        <li><strong>Predictions (Tahminler):</strong> Real-life consequences based on current events.</li>
      </ul>
      <br>
      <span class="turkish-note">💡 <strong>Türkçe Açıklama:</strong> Tip 1 yapısında 'If'li cümle yine Geniş Zaman (Present Simple) ile kurulurken, sonuç cümlesi Gelecek Zaman (Will + fiilin yalın hali) ile kurulur. Çünkü gelecekteki olası bir durumdan bahsediyoruz. Türkçeye çevirirken "-se/-sa ... -ecek/-acak" (Örn: Çalışırsan geçeceksin) şeklinde çevrilir.</span>
      <br><br>
      <strong>Alternative Modals in Result:</strong> Instead of 'will', you can also use 'can' (permission/ability) or 'should' (advice) in the result clause:
      <ul>
        <li><em>If you finish your homework, you <strong>can</strong> play video games.</em></li>
        <li><em>If you go to London, you <strong>should</strong> visit the British Museum.</em></li>
      </ul>
    `,
    examples: [
      {
        english: "If I study hard, I will pass the exam.",
        turkish: "Eğer sıkı çalışırsam, sınavı geçeceğim.",
        note: "Future possibility. Study = Present Simple, will pass = Future."
      },
      {
        english: "If it is sunny tomorrow, we will have a picnic.",
        turkish: "Yarın hava güneşli olursa, piknik yapacağız.",
        note: "Weather prediction and plan."
      },
      {
        english: "If you do not hurry, you will miss the train.",
        turkish: "Acele etmezsen treni kaçıracaksın.",
        note: "Warning. Negative present (do not hurry) -> future result (will miss)."
      },
      {
        english: "I will call you if I arrive early.",
        turkish: "Erken varırsam seni arayacağım.",
        note: "Future plan. 'If' in the middle, so no comma."
      },
      {
        english: "If she goes to the store, she will buy some milk.",
        turkish: "Markete giderse biraz süt alacak.",
        note: "Probable activity."
      }
    ]
  },

  comparison: {
    title: "Type 0 vs. Type 1: Key Differences (Temel Farklar)",
    explanation: `
      It is easy to mix these two. Here is how to distinguish them clearly:
      <br><br>
      <table>
        <thead>
          <tr>
            <th>Aspect</th>
            <th>Type 0 (Genel Gerçek)</th>
            <th>Type 1 (Gelecek Olasılığı)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Certainty (Kesinlik)</strong></td>
            <td>100% certain. Natural law or constant rule.</td>
            <td>Possible and likely, but not 100% guaranteed.</td>
          </tr>
          <tr>
            <td><strong>Time Focus (Zaman)</strong></td>
            <td>General (All time - past, present, future).</td>
            <td>Specific future event.</td>
          </tr>
          <tr>
            <td><strong>Formula (Formül)</strong></td>
            <td>If + Present Simple, Present Simple</td>
            <td>If + Present Simple, Will + Verb</td>
          </tr>
          <tr>
            <td><strong>Example Comparison</strong></td>
            <td>
              <em>If you touch fire, you get burned.</em><br>
              (Ateşe dokunursan yanarsın - her zaman, fiziksel kural)
            </td>
            <td>
              <em>If you touch that wire, you will get hurt.</em><br>
              (Şu kabloya dokunursan canın yanacak - belirli bir durum/uyarı)
            </td>
          </tr>
        </tbody>
      </table>
    `
  },

  exercises: [
    {
      id: "if_ex_1",
      type: "multiple-choice",
      question: "If you heat water to 100 degrees, it ___ (boil).",
      options: ["boils", "will boil", "boiled", "is boiling"],
      answer: "boils",
      explanation: "This is a scientific law (Type 0). We use Present Simple in the result clause: 'boils'."
    },
    {
      id: "if_ex_2",
      type: "multiple-choice",
      question: "If she ___ (arrive) late tonight, we will start the meeting without her.",
      options: ["arrive", "arrives", "will arrive", "arrived"],
      answer: "arrives",
      explanation: "'If' clauses never use 'will'. Since it is Type 1 and the subject is 'she', we use Present Simple third person: 'arrives'."
    },
    {
      id: "if_ex_3",
      type: "multiple-choice",
      question: "We ___ (go) to the beach if the weather is warm this weekend.",
      options: ["go", "will go", "goes", "went"],
      answer: "will go",
      explanation: "This describes a specific future plan based on a condition (Type 1). The result clause uses 'will go'."
    },
    {
      id: "if_ex_4",
      type: "multiple-choice",
      question: "If you mix blue and yellow, you ___ green.",
      options: ["get", "will get", "got", "gets"],
      answer: "get",
      explanation: "Type 0 (General fact / color mixing). Result is in Present Simple: 'get'."
    },
    {
      id: "if_ex_5",
      type: "multiple-choice",
      question: "If I don't feel well tomorrow, I ___ (stay) in bed.",
      options: ["stay", "will stay", "stayed", "stays"],
      answer: "will stay",
      explanation: "Type 1. A prediction/plan for tomorrow. Result uses 'will stay'."
    },
    {
      id: "if_ex_6",
      type: "fill-in-the-blank",
      question: "Complete the Type 1 sentence: If you drop that glass, it ___ (break).",
      answer: "will break",
      explanation: "Type 1 warning about a specific event. The result clause needs 'will + base verb'."
    },
    {
      id: "if_ex_7",
      type: "fill-in-the-blank",
      question: "Complete the Type 0 sentence: If babies are hungry, they ___ (cry).",
      answer: "cry",
      explanation: "Type 0 general truth. Babies always cry when hungry. Use Present Simple plural: 'cry'."
    },
    {
      id: "if_ex_8",
      type: "word-order",
      question: "Arrange into a Type 1 sentence: [if / we / will / miss / don't / run / the train / ,]",
      words: ["if", "we", "don't", "run", ",", "we", "will", "miss", "the train"],
      answer: "if we don't run , we will miss the train",
      explanation: "Structure: If + negative present simple, comma, subject + will + verb + object. (Eğer koşmazsak treni kaçıracağız.)"
    },
    {
      id: "if_ex_9",
      type: "word-order",
      question: "Arrange into a Type 0 sentence: [gets / ice / melt / when / it / warm / .]",
      words: ["ice", "melts", "when", "it", "gets", "warm"],
      answer: "ice melts when it gets warm",
      explanation: "Type 0 using 'when' instead of 'if'. Subject + verb, when + subject + verb. (Buz ısındığında erir.)"
    },
    {
      id: "if_ex_10",
      type: "multiple-choice",
      question: "Identify the type and correctness: 'If it will snow, we will go skiing.'",
      options: ["Correct Type 1", "Incorrect - 'will' cannot be in the 'If' clause", "Correct Type 0", "Incorrect - both verbs should be past tense"],
      answer: "Incorrect - 'will' cannot be in the 'If' clause",
      explanation: "You must never put 'will' inside the 'If' clause. The correct sentence is 'If it snows, we will go skiing.'"
    }
  ]
};

// Export to window object for browser access
window.eslContent = {
  courseContent,
  grammarLibrary,
  conditionalTensesContent,
  ifClausesContent
};
