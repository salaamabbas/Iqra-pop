// Arabic Alphabet Interactive Tool

document.addEventListener('DOMContentLoaded', function() {
    console.log('Arabic alphabet script loaded');
    
    // Arabic alphabet data with Qur'anic examples
    const arabicAlphabet = [
        {
            letter: 'ا',
            name: 'Alif',
            pronunciation: "Similar to 'A' as in  'Apple'",
            examples: [
                { word: 'اللَّه', transliteration: 'Allah (God)' },
                { word: 'أَحَد', transliteration: 'Ahad (One) - Surah Al-Ikhlas' }
            ],
            audioSrc: 'assets/audio/alif.mp3'
        },
        {
            letter: 'ب',
            name: 'Ba',
            pronunciation: "Similar to 'B' as in 'boy'",
            examples: [
                { word: 'بِسْمِ', transliteration: 'Bismi (In the name of)' },
                { word: 'بَقَرَة', transliteration: 'Baqarah (The Cow) - Surah name' }
            ],
            audioSrc: 'assets/audio/ba.mp3'
        },
        {
            letter: 'ت',
            name: 'Ta',
            pronunciation: "Similar to 'T' as in 'table'",
            examples: [
                { word: 'تَوْبَة', transliteration: 'Tawbah (Repentance)' },
                { word: 'تَقْوَى', transliteration: 'Taqwa (God-consciousness)' }
            ],
            audioSrc: 'assets/audio/ta.mp3'
        },
        {
            letter: 'ث',
            name: 'Tha',
            pronunciation: "Similar to 'Th' as in 'think'",
            examples: [
                { word: 'ثَوَاب', transliteration: 'Thawab (Reward)' },
                { word: 'ثُمَّ', transliteration: 'Thumma (Then) - Common in Qur\'an' }
            ],
            audioSrc: 'assets/audio/tha.mp3'
        },
        {
            letter: 'ج',
            name: 'Jim',
            pronunciation: "Similar to 'J' as in 'jam'",
            examples: [
                { word: 'جَنَّة', transliteration: 'Jannah (Paradise)' },
                { word: 'جَهَنَّم', transliteration: 'Jahannam (Hellfire)' }
            ],
            audioSrc: 'assets/audio/jim.mp3'
        },
        {
            letter: 'ح',
            name: 'Ha',
            pronunciation: "A heavy 'H' sound from the throat",
            examples: [
                { word: 'حَمْد', transliteration: 'Hamd (Praise)' },
                { word: 'حَكِيم', transliteration: 'Hakeem (Wise) - Divine attribute' }
            ],
            audioSrc: 'assets/audio/ha.mp3'
        },
        {
            letter: 'خ',
            name: 'Kha',
            pronunciation: "Similar to 'Ch' in Scottish 'loch'",
            examples: [
                { word: 'خَالِق', transliteration: 'Khaliq (Creator)' },
                { word: 'خَوْف', transliteration: 'Khawf (Fear) - Qur\'anic concept' }
            ],
            audioSrc: 'assets/audio/kha.mp3'
        },
        {
            letter: 'د',
            name: 'Dal',
            pronunciation: "Similar to 'D' as in 'door'",
            examples: [
                { word: 'دِين', transliteration: 'Deen (Religion)' },
                { word: 'دُعَاء', transliteration: 'Du\'a (Supplication)' }
            ],
            audioSrc: 'assets/audio/dal.mp3'
        },
        {
            letter: 'ذ',
            name: 'Dhal',
            pronunciation: "Similar to 'Th' as in 'this'",
            examples: [
                { word: 'ذِكْر', transliteration: 'Dhikr (Remembrance)' },
                { word: 'ذُنُوب', transliteration: 'Dhunub (Sins)' }
            ],
            audioSrc: 'assets/audio/dhal.mp3'
        },
        {
            letter: 'ر',
            name: 'Ra',
            pronunciation: "Rolled 'R' sound",
            examples: [
                { word: 'رَبّ', transliteration: 'Rabb (Lord)' },
                { word: 'رَحْمَن', transliteration: 'Rahman (Most Merciful)' }
            ],
            audioSrc: 'assets/audio/ra.mp3'
        },
        {
            letter: 'ز',
            name: 'Zay',
            pronunciation: "Similar to 'Z' as in 'zebra'",
            examples: [
                { word: 'زَكَاة', transliteration: 'Zakat (Charity)' },
                { word: 'زَبُور', transliteration: 'Zabur (Psalms given to Prophet Dawud)' }
            ],
            audioSrc: 'assets/audio/zay.mp3'
        },
        {
            letter: 'س',
            name: 'Sin',
            pronunciation: "Similar to 'S' as in 'sun'",
            examples: [
                { word: 'سَلَام', transliteration: 'Salam (Peace)' },
                { word: 'سُجُود', transliteration: 'Sujud (Prostration)' }
            ],
            audioSrc: 'assets/audio/sin.mp3'
        },
        {
            letter: 'ش',
            name: 'Shin',
            pronunciation: "Similar to 'Sh' as in 'shine'",
            examples: [
                { word: 'شَهَادَة', transliteration: 'Shahadah (Testimony of faith)' },
                { word: 'شُكْر', transliteration: 'Shukr (Gratitude)' }
            ],
            audioSrc: 'assets/audio/shin.mp3'
        },
        {
            letter: 'ص',
            name: 'Sad',
            pronunciation: "Emphatic 'S' sound",
            examples: [
                { word: 'صَلَاة', transliteration: 'Salah (Prayer)' },
                { word: 'صَبْر', transliteration: 'Sabr (Patience)' }
            ],
            audioSrc: 'assets/audio/sad.mp3'
        },
        {
            letter: 'ض',
            name: 'Dad',
            pronunciation: "Emphatic 'D' sound",
            examples: [
                { word: 'ضَلَال', transliteration: 'Dalal (Misguidance)' },
                { word: 'ضَعِيف', transliteration: 'Da\'if (Weak)' }
            ],
            audioSrc: 'assets/audio/dad.mp3'
        },
        {
            letter: 'ط',
            name: 'Ta',
            pronunciation: "Emphatic 'T' sound",
            examples: [
                { word: 'طَاعَة', transliteration: 'Ta\'ah (Obedience)' },
                { word: 'طَهَارَة', transliteration: 'Taharah (Purification)' }
            ],
            audioSrc: 'assets/audio/ta_emphatic.mp3'
        },
        {
            letter: 'ظ',
            name: 'Dha',
            pronunciation: "Emphatic 'Th' as in 'this'",
            examples: [
                { word: 'ظُلْم', transliteration: 'Dhulm (Oppression)' },
                { word: 'ظَاهِر', transliteration: 'Dhahir (Apparent)' }
            ],
            audioSrc: 'assets/audio/zha.mp3'
        },
        {
            letter: 'ع',
            name: 'Ayn',
            pronunciation: "Unique Arabic sound from the throat",
            examples: [
                { word: 'عِبَادَة', transliteration: 'Ibadah (Worship)' },
                { word: 'عَالَمِين', transliteration: 'Alameen (Worlds) - Rabbil-Alameen' }
            ],
            audioSrc: 'assets/audio/ayn.mp3'
        },
        {
            letter: 'غ',
            name: 'Ghayn',
            pronunciation: "Similar to French 'R'",
            examples: [
                { word: 'غَفُور', transliteration: 'Ghafoor (Most Forgiving)' },
                { word: 'غَيْب', transliteration: 'Ghayb (Unseen)' }
            ],
            audioSrc: 'assets/audio/ghayn.mp3'
        },
        {
            letter: 'ف',
            name: 'Fa',
            pronunciation: "Similar to 'F' as in 'fish'",
            examples: [
                { word: 'فَلَاح', transliteration: 'Falah (Success)' },
                { word: 'فَجْر', transliteration: 'Fajr (Dawn)' }
            ],
            audioSrc: 'assets/audio/fa.mp3'
        },
        {
            letter: 'ق',
            name: 'Qaf',
            pronunciation: "Deep 'K' sound from the throat",
            examples: [
                { word: 'قُرْآن', transliteration: 'Quran (The Recitation)' },
                { word: 'قِيَامَة', transliteration: 'Qiyamah (Resurrection)' }
            ],
            audioSrc: 'assets/audio/qaf.mp3'
        },
        {
            letter: 'ك',
            name: 'Kaf',
            pronunciation: "Similar to 'K' as in 'king'",
            examples: [
                { word: 'كَرِيم', transliteration: 'Kareem (Generous)' },
                { word: 'كِتَاب', transliteration: 'Kitab (Book)' }
            ],
            audioSrc: 'assets/audio/kaf.mp3'
        },
        {
            letter: 'ل',
            name: 'Lam',
            pronunciation: "Similar to 'L' as in 'lamp'",
            examples: [
                { word: 'لَا إِلَٰهَ', transliteration: 'La ilaha (There is no deity)' },
                { word: 'لَطِيف', transliteration: 'Latif (Subtle) - Divine attribute' }
            ],
            audioSrc: 'assets/audio/lam.mp3'
        },
        {
            letter: 'م',
            name: 'Mim',
            pronunciation: "Similar to 'M' as in 'moon'",
            examples: [
                { word: 'مُحَمَّد', transliteration: 'Muhammad (Praised One)' },
                { word: 'مَسْجِد', transliteration: 'Masjid (Mosque)' }
            ],
            audioSrc: 'assets/audio/mim.mp3'
        },
        {
            letter: 'ن',
            name: 'Nun',
            pronunciation: "Similar to 'N' as in 'noon'",
            examples: [
                { word: 'نُور', transliteration: 'Nur (Light)' },
                { word: 'نَاس', transliteration: 'Nas (People) - Surah An-Nas' }
            ],
            audioSrc: 'assets/audio/nun.mp3'
        },
        {
            letter: 'ه',
            name: 'Ha',
            pronunciation: "Similar to 'H' as in 'hat'",
            examples: [
                { word: 'هُدَى', transliteration: 'Huda (Guidance)' },
                { word: 'هَادِي', transliteration: 'Hadi (Guide)' }
            ],
            audioSrc: 'assets/audio/ha_soft.mp3'
        },
        {
            letter: 'و',
            name: 'Waw',
            pronunciation: "Similar to 'W' as in 'water'",
            examples: [
                { word: 'وَاحِد', transliteration: 'Wahid (One)' },
                { word: 'وَلِيّ', transliteration: 'Wali (Protector)' }
            ],
            audioSrc: 'assets/audio/waw.mp3'
        },
        {
            letter: 'ي',
            name: 'Ya',
            pronunciation: "Similar to 'Y' as in 'yellow'",
            examples: [
                { word: 'يَوْم', transliteration: 'Yawm (Day)' },
                { word: 'يَقِين', transliteration: 'Yaqin (Certainty)' }
            ],
            audioSrc: 'assets/audio/ya.mp3'
        }
    ];

    // Get DOM elements
    const alphabetGrid = document.getElementById('alphabet-grid');
    const selectedLetter = document.getElementById('selected-letter');
    const letterName = document.getElementById('letter-name');
    const letterPronunciation = document.getElementById('letter-pronunciation');
    const example1 = document.getElementById('example-1');
    const example2 = document.getElementById('example-2');

    // Populate alphabet grid
    console.log('Starting to populate alphabet grid with', arabicAlphabet.length, 'letters');
    console.log('Alphabet grid element found:', alphabetGrid !== null);
    
    if (!alphabetGrid) {
        console.error('Alphabet grid element not found! Check if the ID is correct.');
    } else {
        arabicAlphabet.forEach((letter, index) => {
            console.log('Adding letter ' + (index + 1) + '/' + arabicAlphabet.length + ': ' + letter.letter + ' (' + letter.name + ')');
            const letterCard = document.createElement('div');
            letterCard.className = 'letter-card';
            letterCard.textContent = letter.letter;
            letterCard.setAttribute('data-index', index);
            
            letterCard.addEventListener('click', () => {
                // Remove active class from all cards
                document.querySelectorAll('.letter-card').forEach(card => {
                    card.classList.remove('active');
                });
                
                // Add active class to clicked card
                letterCard.classList.add('active');
                
                // Update letter details
                updateLetterDetails(index);
            });
            
            alphabetGrid.appendChild(letterCard);
        });
        console.log('Finished populating alphabet grid');
    }

    // Set first letter as active by default
    if (alphabetGrid && alphabetGrid.firstChild) {
        alphabetGrid.firstChild.classList.add('active');
    }

    // Function to update letter details
    function updateLetterDetails(index) {
        const letter = arabicAlphabet[index];
        
        selectedLetter.textContent = letter.letter;
        letterName.textContent = letter.name;
        letterPronunciation.textContent = letter.pronunciation;
        
        // Update examples
        if (letter.examples.length > 0) {
            example1.querySelector('.arabic-word').textContent = letter.examples[0].word;
            example1.querySelector('.transliteration').textContent = letter.examples[0].transliteration;
        }
        
        if (letter.examples.length > 1) {
            example2.querySelector('.arabic-word').textContent = letter.examples[1].word;
            example2.querySelector('.transliteration').textContent = letter.examples[1].transliteration;
        }
        
        // Audio functionality removed
    }

    // Audio functionality removed

    // Initialize with first letter
    if (arabicAlphabet.length > 0) {
        updateLetterDetails(0);
    }
});
