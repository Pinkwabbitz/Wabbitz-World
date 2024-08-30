document.getElementById('get-word-btn').addEventListener('click', generateWord);
        document.getElementById('word-container').addEventListener('click', generateWord);

        function generateWord() {
            const words = [
                { word: 'Ephemeral', definition: 'lasting for a very short time.', sentence: 'The beauty of the sunset was ephemeral, fading within minutes.' },
                { word: 'Serendipity', definition: 'the occurrence and development of events by chance in a happy or beneficial way.', sentence: 'It was serendipity that led them to find the lost treasure.' },
                { word: 'Petrichor', definition: 'a pleasant smell that frequently accompanies the first rain after a long period of warm, dry weather.', sentence: 'The petrichor after the rain was refreshing.' },
                { word: 'Halcyon', definition: 'denoting a period of time in the past that was idyllically happy and peaceful.', sentence: 'She often reminisced about the halcyon days of her childhood.' },
				{ word: 'Limerence', definition: 'the state of being infatuated with another person.', sentence: 'He was caught in a state of limerence, thinking of her constantly.' },
				{ word: 'Solipsism', definition: 'the view or theory that the self is all that can be known to exist.', sentence: 'His solipsism made it difficult for him to relate to others.' },
				{ word: 'Sonder', definition: 'the realization that each passerby has a life as vivid and complex as your own.', sentence: 'The sonder hit him as he sat in the busy café, watching people go about their lives.' },
				{ word: 'Vellichor', definition: 'the strange wistfulness of used bookstores.', sentence: 'She felt vellichor every time she stepped into the old bookshop.' },
				{ word: 'Petrichor', definition: 'the pleasant, earthy smell after rain.', sentence: 'The petrichor brought back memories of her childhood.' },
				{ word: 'Clinomania', definition: 'an excessive desire to stay in bed.', sentence: 'His clinomania made it hard for him to start the day early.' },
				{ word: 'Nepenthe', definition: 'a drug described in Homer\'s Odyssey as banishing grief or trouble from a person\'s mind.', sentence: 'She sought nepenthe in the form of travel to distant lands.' },
				{ word: 'Eunoia', definition: 'beautiful thinking; a well mind.', sentence: 'Her eunoia was reflected in her kind actions towards others.' },
				{ word: 'Pluviophile', definition: 'a lover of rain; someone who finds joy and peace of mind during rainy days.', sentence: 'As a true pluviophile, he loved walking in the rain without an umbrella.' },
				{ word: 'Mellifluous', definition: 'a sound that is sweet and smooth, pleasing to hear.', sentence: 'Her mellifluous voice was the highlight of the evening.' },
				{ word: 'Effervescent', definition: 'vivacious and enthusiastic.', sentence: 'Her effervescent personality lit up every room she entered.' },
				{ word: 'Susurrus', definition: 'whispering, murmuring, or rustling.', sentence: 'The susurrus of the leaves in the breeze was calming.' },
				{ word: 'Ephemeral', definition: 'lasting for a very short time.', sentence: 'The ephemeral nature of the moment made it all the more precious.' },
				{ word: 'Ebullient', definition: 'cheerful and full of energy.', sentence: 'Her ebullient spirit was contagious and lifted everyone\'s mood.' },
				{ word: 'Peregrinate', definition: 'to travel or wander around from place to place.', sentence: 'They decided to peregrinate through Europe for the summer.' },
				{ word: 'Ebullience', definition: 'the quality of being cheerful and full of energy; exuberance.', sentence: 'His ebullience was apparent in the way he greeted everyone with a smile.' },
				{ word: 'Resplendent', definition: 'attractive and impressive through being richly colorful or sumptuous.', sentence: 'The ballroom was resplendent with glittering chandeliers and lavish decorations.' },
				{ word: 'Zephyr', definition: 'a gentle, mild breeze.', sentence: 'A gentle zephyr blew through the open window, cooling the room.' },
				{ word: 'Bucolic', definition: 'relating to the pleasant aspects of the countryside and country life.', sentence: 'They enjoyed a bucolic weekend in a charming village far from the city.' },
				{ word: 'Nefarious', definition: 'wicked or criminal.', sentence: 'The villain\'s nefarious plot was foiled by the hero at the last moment.' },
				{ word: 'Iridescent', definition: 'showing luminous colors that seem to change when seen from different angles.', sentence: 'The iridescent wings of the butterfly glowed in the sunlight.' },
				{ word: 'Lethologica', definition: 'the inability to remember a particular word or name.', sentence: 'She experienced lethologica during the presentation, struggling to recall the term she needed.' },
				{ word: 'Defenestration', definition: 'the act of throwing someone out of a window.', sentence: 'The king\'s enemies met a grim fate through defenestration.' },
				{ word: 'Quixotic', definition: 'exceedingly idealistic; unrealistic and impractical.', sentence: 'His quixotic quest for the perfect utopia was admirable but unattainable.' },
				{ word: 'Gossamer', definition: 'something very light, thin, and insubstantial or delicate.', sentence: 'The bride\'s veil was made of gossamer lace, delicate and ethereal.' },
				{ word: 'Ethereal', definition: 'extremely delicate and light in a way that seems too perfect for this world.', sentence: 'The ethereal glow of the moon cast a magical light on the landscape.' },
				{ word: 'Cynosure', definition: 'a person or thing that is the center of attention or admiration.', sentence: 'Her performance was the cynosure of the evening, captivating everyone.' },
				{ word: 'Laconic', definition: 'using very few words.', sentence: 'His laconic reply hinted that he was not in the mood for a conversation.' },
				{ word: 'Susurration', definition: 'whispering, murmuring, or rustling.', sentence: 'The susurration of the forest made it feel alive and mysterious.' },
				{ word: 'Ineffable', definition: 'too great or extreme to be expressed or described in words.', sentence: 'The beauty of the sunset was ineffable, leaving everyone in awe.' },
				{ word: 'Ephemeral', definition: 'lasting for a very short time.', sentence: 'The ephemeral nature of the moment made it all the more precious.' },
				{ word: 'Serendipity', definition: 'the occurrence and development of events by chance in a happy or beneficial way.', sentence: 'It was pure serendipity that they found the hidden beach.' },
				{ word: 'Sempiternal', definition: 'eternal and unchanging; everlasting.', sentence: 'The sempiternal beauty of the mountains was breathtaking.' },
				{ word: 'Aurora', definition: 'a natural electrical phenomenon characterized by the appearance of streamers of reddish or greenish light in the sky.', sentence: 'The aurora danced across the night sky, mesmerizing all who watched.' },
				{ word: 'Ineffable', definition: 'too great or extreme to be expressed or described in words.', sentence: 'The ineffable joy of holding her newborn was overwhelming.' },
				{ word: 'Ephemeral', definition: 'lasting for a very short time.', sentence: 'The ephemeral beauty of the cherry blossoms is celebrated every spring.' },
				{ word: 'Mellifluous', definition: 'a sound that is sweet and smooth, pleasing to hear.', sentence: 'The mellifluous melody filled the room, calming everyone.' },
				{ word: 'Luminous', definition: 'full of or shedding light; bright or shining, especially in the dark.', sentence: 'The luminous stars guided them through the night.' },
				{ word: 'Iridescent', definition: 'showing luminous colors that seem to change when seen from different angles.', sentence: 'The iridescent bubbles floated in the air, changing colors as they caught the light.' },
				{ word: 'Sublime', definition: 'of such excellence, grandeur, or beauty as to inspire great admiration or awe.', sentence: 'The sublime beauty of the mountain range left everyone speechless.' },
				{ word: 'Ebullient', definition: 'cheerful and full of energy.', sentence: 'Her ebullient personality was infectious, lifting the spirits of those around her.' },
				{ word: 'Nostalgia', definition: 'a sentimental longing or wistful affection for the past.', sentence: 'He felt a wave of nostalgia as he walked through his childhood neighborhood.' },
				{ word: 'Euphoria', definition: 'a feeling or state of intense excitement and happiness.', sentence: 'The euphoria of the victory was felt by the entire team.' },
				{ word: 'Ephemeral', definition: 'lasting for a very short time.', sentence: 'The ephemeral beauty of the flowers was admired by all.' },
				{ word: 'Epiphany', definition: 'a moment of sudden revelation or insight.', sentence: 'She had an epiphany about her life\'s purpose during her travels.' },
				{ word: 'Sonder', definition: 'the realization that each passerby has a life as vivid and complex as your own.', sentence: 'He experienced sonder as he watched the bustling streets of the city.' },
				{ word: 'Solitude', definition: 'the state or situation of being alone.', sentence: 'She found peace in the solitude of the mountains.' },
				{ word: 'Quintessential', definition: 'representing the most perfect or typical example of a quality or class.', sentence: 'He is the quintessential example of a successful entrepreneur.' },
				{ word: 'Ineffable', definition: 'too great or extreme to be expressed or described in words.', sentence: 'The ineffable beauty of the artwork left everyone in awe.' },
				{ word: 'Solitude', definition: 'the state or situation of being alone.', sentence: 'He enjoyed the solitude of the mountains, away from the bustling city.' },
				{ word: 'Euphoria', definition: 'a feeling or state of intense excitement and happiness.', sentence: 'The euphoria of winning the game was felt by the entire team.' },
				{ word: 'Melancholy', definition: 'a feeling of pensive sadness, typically with no obvious cause.', sentence: 'There was a hint of melancholy in her voice as she spoke about the past.' },
				{ word: 'Serendipity', definition: 'the occurrence and development of events by chance in a happy or beneficial way.', sentence: 'It was pure serendipity that she found her childhood friend at the airport.' },
				{ word: 'Ephemeral', definition: 'lasting for a very short time.', sentence: 'The ephemeral beauty of the cherry blossoms is admired by many every spring.' },
				{ word: 'Quintessential', definition: 'representing the most perfect or typical example of a quality or class.', sentence: 'He was the quintessential gentleman, always polite and respectful.' },
				{ word: 'Ineffable', definition: 'too great or extreme to be expressed or described in words.', sentence: 'The ineffable beauty of the sunrise left everyone in awe.' },
				{ word: 'Labyrinthine', definition: 'like a labyrinth; irregular and twisting.', sentence: 'The labyrinthine streets of the old city were confusing for the tourists.' },
				{ word: 'Epiphany', definition: 'a moment of sudden revelation or insight.', sentence: 'She had an epiphany about her career path during her vacation.' },
				{ word: 'Ethereal', definition: 'extremely delicate and light in a way that seems too perfect for this world.', sentence: 'The bride looked ethereal in her flowing white gown.' },
];

            const randomIndex = Math.floor(Math.random() * words.length);
            const selectedWord = words[randomIndex];

            const wordContainer = document.getElementById('word-container');
            wordContainer.style.display = 'block';
            wordContainer.innerHTML = `<strong>${selectedWord.word}</strong><br><br>
                                       <strong>Definition:</strong> ${selectedWord.definition}<br>
                                       <strong>Example:</strong> ${selectedWord.sentence}`;

            document.getElementById('get-word-btn').style.display = 'none';
        }

        document.getElementById('get-word-btn').style.cursor = 'pointer';

        // Quotes and transitions
        const quotes = [
            "The only limit to our realization of tomorrow is our doubts of today.",
            "The future belongs to those who believe in the beauty of their dreams.",
            "It always seems impossible until it’s done.",
            "Act as if what you do makes a difference. It does.",
            "Success is not the key to happiness. Happiness is the key to success."
        ];

        let quoteIndex = 0;
        const quoteElement = document.getElementById('quote-container');

        function changeQuote() {
            quoteElement.style.opacity = 0;

            setTimeout(() => {
                quoteElement.innerHTML = quotes[quoteIndex]
                    .split(' ')
                    .reduce((acc, word, i) => {
                        acc += `${word} `;
                        if ((i + 1) % 4 === 0) acc += '<br>';
                        return acc;
                    }, '');
                quoteElement.style.opacity = 1;
                quoteIndex = (quoteIndex + 1) % quotes.length;
            }, 1000);
        }

        setInterval(changeQuote, 20000);
        changeQuote();