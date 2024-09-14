
// Word generation logic


document.getElementById('get-word-btn').addEventListener('click', generateWord);

let displayedWords = []; // Array to track displayed words

function generateWord() {
    const words = [
       { word: 'Ephemeral', ipa: 'e·phem·er·al', definition: 'lasting for a very short time.', sentence: 'The beauty of the sunset was ephemeral, fading within minutes.' },
				{ word: 'Serendipity', ipa: 'se·ren·dip·i·ty', definition: 'the occurrence and development of events by chance in a happy or beneficial way.', sentence: 'It was serendipity that led them to find the lost treasure.' },
				{ word: 'Petrichor', ipa: 'pe·tri·chor', definition: 'a pleasant smell that frequently accompanies the first rain after a long period of warm, dry weather.', sentence: 'The petrichor after the rain was refreshing.' },
				{ word: 'Halcyon', ipa: 'hal·cy·on', definition: 'denoting a period of time in the past that was idyllically happy and peaceful.', sentence: 'She often reminisced about the halcyon days of her childhood.' },
				{ word: 'Limerence', ipa: 'lim·er·ence', definition: 'the state of being infatuated with another person.', sentence: 'He was caught in a state of limerence, thinking of her constantly.' },
				{ word: 'Solipsism', ipa: 'sol·ip·sism', definition: 'the view or theory that the self is all that can be known to exist.', sentence: 'His solipsism made it difficult for him to relate to others.' },
				{ word: 'Sonder', ipa: 'son·der', definition: 'the realization that each passerby has a life as vivid and complex as your own.', sentence: 'The sonder hit him as he sat in the busy café, watching people go about their lives.' },
				{ word: 'Vellichor', ipa: 'vel·li·chor', definition: 'the strange wistfulness of used bookstores.', sentence: 'She felt vellichor every time she stepped into the old bookshop.' },
				{ word: 'Clinomania', ipa: 'cli·no·ma·ni·a', definition: 'an excessive desire to stay in bed.', sentence: 'His clinomania made it hard for him to start the day early.' },
				{ word: 'Nepenthe', ipa: 'ne·pen·the', definition: 'a drug described in Homer\'s Odyssey as banishing grief or trouble from a person\'s mind.', sentence: 'She sought nepenthe in the form of travel to distant lands.' },
				{ word: 'Eunoia', ipa: 'eu·noi·a', definition: 'beautiful thinking; a well mind.', sentence: 'Her eunoia was reflected in her kind actions towards others.' },
				{ word: 'Pluviophile', ipa: 'plu·vi·o·phile', definition: 'a lover of rain; someone who finds joy and peace of mind during rainy days.', sentence: 'As a true pluviophile, he loved walking in the rain without an umbrella.' },
				{ word: 'Mellifluous', ipa: 'mel·lif·lu·ous', definition: 'a sound that is sweet and smooth, pleasing to hear.', sentence: 'Her mellifluous voice was the highlight of the evening.' },
				{ word: 'Effervescent', ipa: 'ef·fer·ves·cent', definition: 'vivacious and enthusiastic.', sentence: 'Her effervescent personality lit up every room she entered.' },
				{ word: 'Susurrus', ipa: 'su·sur·rus', definition: 'whispering, murmuring, or rustling.', sentence: 'The susurrus of the leaves in the breeze was calming.' },
				{ word: 'Ebullient', ipa: 'e·bul·lient', definition: 'cheerful and full of energy.', sentence: 'Her ebullient spirit was contagious and lifted everyone\'s mood.' },
				{ word: 'Peregrinate', ipa: 'pe·re·gri·nate', definition: 'to travel or wander around from place to place.', sentence: 'They decided to peregrinate through Europe for the summer.' },
				{ word: 'Resplendent', ipa: 're·splen·dent', definition: 'attractive and impressive through being richly colorful or sumptuous.', sentence: 'The garden was resplendent with blooming flowers of every color.' },
				{ word: 'Aureate', ipa: 'au·re·ate', definition: 'denoting, or characterized by a gilded or golden color or quality.', sentence: 'The aureate glow of the evening sun brought warmth to the cold landscape.' },
				{ word: 'Luminous', ipa: 'lu·mi·nous', definition: 'full of or shedding light; bright or shining, especially in the dark.', sentence: 'The stars were luminous in the clear night sky.' },
				{ word: 'Serenade', ipa: 'ser·e·nade', definition: 'a musical performance given to honor or express love for someone.', sentence: 'He sang a serenade under her window on their anniversary.' },
				{ word: 'Incandescent', ipa: 'in·can·des·cent', definition: 'emitting light as a result of being heated; passionate or brilliant.', sentence: 'The incandescent lightbulb filled the room with a warm glow.' },
				{ word: 'Sonorous', ipa: 'so·no·rous', definition: 'an imposingly deep and full sound.', sentence: 'The sonorous voice of the speaker commanded attention.' },
				{ word: 'Celestial', ipa: 'ce·les·tial', definition: 'positioned in or relating to the sky, or outer space as observed in astronomy.', sentence: 'The celestial beauty of the night sky was awe-inspiring.' },
				{ word: 'Aplomb', ipa: 'a·plomb', definition: 'self-confidence or assurance, especially when in a demanding situation.', sentence: 'She handled the challenging project with great aplomb.' },
				{ word: 'Zephyr', ipa: 'ze·phyr', definition: 'a gentle, mild breeze.', sentence: 'The zephyr brought relief from the heat.' },
				{ word: 'Quixotic', ipa: 'kwik·sot·ik', definition: 'extremely idealistic; unrealistic and impractical.', sentence: 'His quixotic quest for the perfect utopia kept him busy for years.' },
				{ word: 'Epiphany', ipa: 'e·pif·a·ny', definition: 'a moment of sudden revelation or insight.', sentence: 'She had an epiphany while walking in the park, realizing her true calling.' },
				{ word: 'Laconic', ipa: 'luh·kon·ik', definition: 'using very few words.', sentence: 'His laconic response was a simple nod.' },
				{ word: 'Ineffable', ipa: 'in·ef·fa·ble', definition: 'too great or extreme to be expressed or described in words.', sentence: 'The ineffable beauty of the sunset left them speechless.' },
				{ word: 'Ethereal', ipa: 'i·thee·ree·uhl', definition: 'extremely delicate and light in a way that seems too perfect for this world.', sentence: 'The dancer moved with an ethereal grace that mesmerized everyone.' },
				{ word: 'Labyrinthine', ipa: 'lab·uh·rin·thine', definition: 'complicated; highly convoluted.', sentence: 'The labyrinthine corridors of the old castle were easy to get lost in.' },
				{ word: 'Sublime', ipa: 'suh·blime', definition: 'of such excellence, grandeur, or beauty as to inspire great admiration or awe.', sentence: 'The sublime landscape stretched as far as the eye could see.' },
				{ word: 'Ebullition', ipa: 'eb·yuh·lish·uhn', definition: 'a sudden outburst of emotion or violence.', sentence: 'The ebullition of joy was evident when they announced the winner.' },
				{ word: 'Rhapsody', ipa: 'rap·so·dee', definition: 'an effusively enthusiastic or ecstatic expression of feeling.', sentence: 'He spoke in a rhapsody about his travels to distant lands.' },
				{ word: 'Iridescent', ipa: 'i·ri·des·uhnt', definition: 'showing luminous colors that seem to change when seen from different angles.', sentence: 'The iridescent wings of the butterfly shimmered in the sunlight.' },
				{ word: 'Aegis', ipa: 'ee·jis', definition: 'the protection, backing, or support of a particular person or organization.', sentence: 'Under the aegis of the university, she pursued her groundbreaking research.' },
				{ word: 'Vehement', ipa: 'vee-uh-muhnt', definition: 'showing strong feeling; forceful, passionate, or intense.', sentence: 'He gave a vehement defense of his position during the debate.' },
				{ word: 'Gregarious', ipa: 'gri-gair-ee-uhs', definition: 'fond of company; sociable.', sentence: 'His gregarious nature made him popular at social events.' },
				{ word: 'Pensive', ipa: 'pen-siv', definition: 'engaged in serious thought.', sentence: 'She had a pensive look on her face as she considered the decision.' },
				{ word: 'Dissonant', ipa: 'dis-uh-nuhnt', definition: 'lacking harmony; harsh and jarring because of a lack of harmony.', sentence: 'The dissonant chords in the music created a sense of unease.' },
				{ word: 'Pragmatic', ipa: 'prag-mat-ik', definition: 'dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations.', sentence: 'Her pragmatic approach to problem-solving was highly effective.' },
				{ word: 'Altruistic', ipa: 'al-troo-is-tik', definition: 'showing a disinterested and selfless concern for the well-being of others.', sentence: 'The altruistic actions of the volunteers made a significant difference in the community.' },
				{ word: 'Camaraderie', ipa: 'kam-uh-rah-duh-ree', definition: 'mutual trust and friendship among people who spend a lot of time together.', sentence: 'The camaraderie among the team members was evident in their collaborative efforts.' },
				{ word: 'Reclusive', ipa: 'ri-kloo-siv', definition: 'avoiding the company of other people; solitary.', sentence: 'The reclusive writer lived in a remote cabin far from the city.' },
				{ word: 'Nebulous', ipa: 'neb-yuh-luhs', definition: 'in the form of a cloud or haze; hazy.', sentence: 'His plans for the future were still nebulous and lacked detail.' },
				{ word: 'Sardonic', ipa: 'sahr-don-ik', definition: 'grimly mocking or cynical.', sentence: 'His sardonic remarks often masked his true feelings.' },
				{ word: 'Convivial', ipa: 'kuhn-viv-ee-uhl', definition: 'friendly, sociable, and enjoyable.', sentence: 'The convivial atmosphere of the party made everyone feel welcome.' },
				{ word: 'Voracious', ipa: 'vaw-ray-shuhs', definition: 'wanting or devouring great quantities of food; having a very eager approach to a particular activity.', sentence: 'His voracious appetite for reading meant he always had a book in hand.' },
				{ word: 'Pernicious', ipa: 'per-nish-uhs', definition: 'having a harmful effect, especially in a gradual or subtle way.', sentence: 'The pernicious influence of social media can affect mental health over time.' }
		]; // Your array of words
    

    // Check if the word limit has been reached
    if (displayedWords.length >= 10) {
        const remainingHours = getRemainingHoursUntilMidnight();
        alert(`Try using your words today in a sentence and come back tomorrow for more! Reset will happen in ${remainingHours} hours.`);
        return;
    }

    // Generate a random word
    const randomIndex = Math.floor(Math.random() * words.length);
    const word = words[randomIndex];

    // Display the word
    const wordContainer = document.getElementById('word-container');
    wordContainer.style.display = 'block';
    wordContainer.innerHTML = `
        <h2>${word.word}</h2><img src="speaker.png" class="speaker-icon" onclick="speakWord('${word.word}')" alt="Pronounce">
        <p><em>(${word.ipa})</em></p>
        <p>${word.definition}</p>
        <p><strong>Example:</strong> ${word.sentence}</p>
    `;

    // Add the word to the displayedWords array
    displayedWords.push(word.word);

    // Save the displayed words to local storage for persistence
    localStorage.setItem('displayedWords', JSON.stringify(displayedWords));
}

// Function to speak the word
function speakWord(word) {
    const speech = new SpeechSynthesisUtterance(word);
    speechSynthesis.speak(speech);
}
speakWord()

// Function to reset words at midnight
function resetWordsAtMidnight() {
    const currentDate = new Date().toDateString(); // Get the current date as a string
    const lastResetDate = localStorage.getItem('lastResetDate'); // Retrieve the last reset date from local storage

    if (lastResetDate !== currentDate) {
        // If the date has changed, reset the displayed words
        displayedWords = []; // Initialize an empty array for displayed words
        localStorage.setItem('displayedWords', JSON.stringify(displayedWords)); // Clear displayed words
        localStorage.setItem('lastResetDate', currentDate); // Update the last reset date in local storage
    }
}

// Calculate the remaining hours until midnight
function getRemainingHoursUntilMidnight() {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0); // Set time to midnight

    const diff = midnight - now; // Time difference in milliseconds
    const hoursLeft = Math.floor(diff / (1000 * 60 * 60)); // Convert milliseconds to hours
    return hoursLeft;
}

// Check every minute if the date has changed
setInterval(resetWordsAtMidnight, 60000); // 60,000 milliseconds = 1 minute

// Load displayed words from local storage on page load
window.onload = function() {
    const savedWords = JSON.parse(localStorage.getItem('displayedWords'));
    if (savedWords) {
        displayedWords = savedWords;
    }
    resetWordsAtMidnight(); // Check if words need to be reset
};


// Quote rotation logic
const quotes = [
			'Life is what happens when you’re busy making other plans.',
			'The only limit to our realization of tomorrow is our doubts of today.',
			'Success is not final, failure is not fatal: It is the courage to continue that counts.',
			'Do not wait to strike till the iron is hot; but make it hot by striking.',
			'Life is 10% what happens to us and 90% how we react to it.',
			'It does not matter how slowly you go as long as you do not stop.',
			'The future belongs to those who believe in the beauty of their dreams.',
			'The best way to predict the future is to create it.',
			'You miss 100% of the shots you don\'t take.',
			'Success usually comes to those who are too busy to be looking for it.',
			'Believe you can and you’re halfway there.',
			'Don\'t watch the clock; do what it does. Keep going.',
			'The only way to do great work is to love what you do.',
			'Dream big and dare to fail.',
			'Keep your face always toward the sunshine—and shadows will fall behind you.',
			'The best time to plant a tree was 20 years ago. The second best time is now.',
			'The only way to do great work is to love what you do. — Steve Jobs',
			'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. — Albert Schweitzer',
			'Believe you can and you are halfway there. — Theodore Roosevelt',
			'It does not matter how slowly you go as long as you do not stop. — Confucius',
			'The best way to predict the future is to create it. — Peter Drucker',
			'Your limitation—it is only your imagination. — Unknown',
			'Push yourself, because no one else is going to do it for you. — Unknown',
			'Great things never come from comfort zones. — Unknown',
			'Dream it. Wish it. Do it. — Unknown',
			'Success doesn’t just find you. You have to go out and get it. — Unknown',
			'The harder you work for something, the greater you will feel when you achieve it. — Unknown',
			'Dream bigger. Do bigger. — Unknown',
			'Don’t stop when you’re tired. Stop when you’re done. — Unknown',
			'Wake up with determination. Go to bed with satisfaction. — Unknown',
			'Do something today that your future self will thank you for. — Unknown',
			'Little things make big days. Great things take time. Be patient. — Unknown',
			'It is going to be hard, but hard does not mean impossible. — Unknown',
			'Push yourself because no one else is going to do it for you. — Unknown',
			'Great things never come from comfort zones. — Unknown',
			'Dream it. Believe it. Build it. — Unknown'

		];

function displayRandomQuote() {
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    const quoteContainer = document.getElementById('quote-container');
    quoteContainer.innerText = quotes[randomQuoteIndex];
}

// Initial quote display
displayRandomQuote();

// Opacity transition for the quote container
const quoteContainer = document.getElementById('quote-container');

let transitionDuration = 1000; // 1 second for transition

function changeQuote() {
    // Start fading out the quote
    quoteContainer.style.transition = `opacity ${transitionDuration / 1000}s ease`;
    quoteContainer.style.opacity = 0;

    // After fading out (1 second), change the quote and fade it in
    setTimeout(() => {
        displayRandomQuote();
        quoteContainer.style.opacity = 1;
    }, transitionDuration);
}

// Run the changeQuote function every 10 seconds
setInterval(changeQuote, 10000); // Changes every 10 seconds

