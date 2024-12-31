document.addEventListener("DOMContentLoaded", function() {
    // Array of quotes with authors
    const quotes = [
        {
            //Chesnut wife of his youth
            quote: "He stood at the threshold of life; he was ambitious. He was a rising man in a rising class.",
            author: "Charles W. Chesnutt",
            book: "Chesnut wife of his youth"
        },
        {
            quote: "I have no race prejudice... But we people of mixed blood are ground between the upper and the nether millstone.",
            author: "Charles W. Chesnutt",
            book: "Chesnut wife of his youth"
            
        },
        {
            quote: "Suppose that years ago, before you had become what you are, you had married a woman who was your equal in age, and at the time of your marriage your equal in condition.",
            author: "Charles W. Chesnutt",
            book: "Chesnut wife of his youth"
        },
        {
            quote: "Her face was black, and her hair was white; and yet she seemed but little older than himself.",
            author: "Charles W. Chesnutt",
            book: "Chesnut wife of his youth"
        },
        {
            quote: "He looked at the woman a moment longer, and then said with a slow smile, ‘Ladies and gentlemen, this is the wife of my youth.’",
            author: "Charles W. Chesnutt",
            book: "Chesnut wife of his youth"
        },
        {
            //Langston Hughes (The Negro Artists & the Racial Mountain)
            quote: "One of the most promising of the young Negro poets said to me once, ‘I want to be a poet—not a Negro poet,’ meaning, I believe, ‘I want to write like a white poet.’",
            author: "Langston Hughes",
            book: "The Negro Artists & the Racial Mountain"
        },
        {
            quote: "But this is the mountain standing in the way of any true Negro art in America—this urge within the race toward whiteness, the desire to pour racial individuality into the mold of American standardization, and to be as little Negro and as much American as possible.",
            author: "Langston Hughes",
            book: "The Negro Artists & the Racial Mountain"
        },
        {
            quote: "We younger Negro artists who create now intend to express our individual dark-skinned selves without fear or shame. If white people are pleased we are glad. If they are not, it doesn’t matter. We know we are beautiful. And ugly too.",
            author: "Langston Hughes",
            book: "The Negro Artists & the Racial Mountain"
        },
        {
            quote: "An artist must be free to choose what he does, certainly, but he must also never be afraid to do what he might choose.",
            author: "Langston Hughes",
            book: "The Negro Artists & the Racial Mountain"
        },
        {
            quote: "We build our temples for tomorrow, strong as we know how, and we stand on top of the mountain, free within ourselves.",
            author: "Langston Hughes",
            book: "The Negro Artists & the Racial Mountain"
        },
        {
            // Langston Hughes (The Negro Speaks of Rivers)
            quote: "I've known rivers: I've known rivers ancient as the world and older than the flow of human blood in human veins.",
            author: "Langston Hughes",
            book: "The Negro Speaks of Rivers"
        },
        {
            quote: "My soul has grown deep like the rivers",
            author: "Langston Hughes",
            book: "The Negro Speaks of Rivers"
        },
        {
            quote: "I bathed in the Euphrates when dawns were young. I built my hut near the Congo and it lulled me to sleep.",
            author: "Langston Hughes",
            book: "The Negro Speaks of Rivers"
        },
        {
            quote: "I looked upon the Nile and raised the pyramids above it. I heard the singing of the Mississippi when Abe Lincoln went down to New Orleans, and I've seen its muddy bosom turn all golden in the sunset.",
            author: "Langston Hughes",
            book: "The Negro Speaks of Rivers"
        },
        {
            quote: "I've known rivers: Ancient, dusky rivers.",
            author: "Langston Hughes",
            book: "The Negro Speaks of Rivers"
        },
        {
            // W.E.B Du Bois (The Comet)
            quote: "He stood a moment on the steps, dreamily regarding the world about him, and then with a start remembered that he was a Negro, and pushed his way hurriedly down the street.",
            author: "W.E.B Du Bois",
            book: "The Comet"
        },
        {
            quote: "‘Suppose,’ he said slowly, ‘I am the last man left alive?’",
            author: "W.E.B Du Bois",
            book: "The Comet"
        },
        {
            quote: "He went back to the girl. Slowly, heavily, he climbed the stone steps and stood before her. She was the last woman and he was the last man.",
            author: "W.E.B Du Bois",
            book: "The Comet"
        },
        {
            quote: "For the first time she seemed to notice him—notice him as a man.",
            author: "W.E.B Du Bois",
            book: "The Comet"
        },
        {
            quote: "‘It's been so lonesome,’ she whispered. ‘So lonesome.’",
            author: "W.E.B Du Bois",
            book: "The Comet"
        },
        {
            //Ann Petry (The Witness)
            quote: "A man who never did anything to anybody. Yet, they had taken his name and dragged it through the streets of the city.",
            author: "Ann Petry",
            book: "The Witness"
        },
        {
            quote: "He became a man who saw the world in terms of black and white—black people and white people.",
            author: "Ann Petry",
            book: "The Witness"
        },
        {
            quote: "He had once been a person who believed in justice—now he was a man who had no belief in anything.",
            author: "Ann Petry",
            book: "The Witness"
        },
        {
            quote: "I'm gonna turn up the high heat for my ho-daddy, ho-daddy",
            author: "Ann Petry",
            book: "The Witness"
        },
        {
            quote:"They laughed, Ho-daddy dont want none ",
            author: "Ann Petry",
            book: "The Witness"
        },
        {
            //Richard Wright (the native son )
            quote:"I was trapped in a world that was no longer my own, a world in which I could not live.",
            author: "Richard Wright",
            book: "The Native Son"
        },
        {
            quote:"I felt like a man who had taken a knife and cut away the world around him, and then he was left with a bloody hunk of flesh.",
            author: "Richard Wright",
            book: "The Native Son"
        },
        {
            quote:"It was a kind of fear that was not born of cowardice, but of a deep, festering wound.",
            author: "Richard Wright",
            book: "The Native Son"
        },
        {
            quote:"In the end, it was the choices I made that defined who I was.",
            author: "Richard Wright",
            book: "The Native Son"
        },
        {
            quote:"The thing that had made me different was not my skin, but my experience.",
            author: "Richard Wright",
            book: "The Native Son"
        }, 
        {
            //Lorraine Hansberry(A Rasin in the sun)
            quote:"A man say: I got to change my life, I’m choking to death, baby! And his woman say— Your eggs is getting cold!",
            author: "Lorraine Hansberry",
            book: "A Rasin in the Sun"
        },
        {
            quote:"There is always a way to keep going, no matter how heavy the burden seems.",
            author: "Lorraine Hansberry",
            book: "A Rasin in the Sun"
        },
        {
            quote:"It’s all a matter of how you look at things. We can dream big, even if the world tells us we can’t.",
            author: "Lorraine Hansberry",
            book: "A Rasin in the Sun"
        },
        {
            quote:"We have a right to be heard and to have our place in this world, no matter what barriers stand in our way.",
            author: "Lorraine Hansberry",
            book: "A Rasin in the Sun"
        },
        {
            quote:"It’s not a matter of who we are but who we have the potential to be.",
            author: "Lorraine Hansberry",
            book: "A Rasin in the Sun"
        },

        // Fences August Wilson
        {
            quote:"Death ain't nothing but a fastball on the outside corner.",
            author: "August Wilson",
            book: "Fences"
        },
        {
            quote:"I took all my feelings, my wants and needs, my dreams... and I buried them inside you. I planted myself inside you and waited to bloom.",
            author: "August Wilson",
            book: "Fences"
        },
        {
            quote:"You got to take the crookeds with the straights.",
            author: "August Wilson",
            book: "Fences"
        },
        {
            quote:"I don't have to like you! Got a roof over your head? Got clothes on your back? You don't have to like me. I done everything I could for you",
            author: "August Wilson",
            book: "Fences"
        },
        {
            quote:"You just scared I'm gonna be better than you, that's all.",
            author: "August Wilson",
            book: "Fences"
        },

         // In Search of Our Mothers' Garden Alice Walker
         {
            quote:"Who were these Saints? These crazy, loony, pitiful women?",
            author: "Alice Walker",
            book: "In Search of Our Mothers' Garden"
        },
        {
            quote:"And when those frail whirlwinds fell, in scattered particles, upon tha tground, no one mourned.",
            author: "Alice Walker",
            book: "In Search of Our Mothers' Garden"
        },
        {
            quote:"For these grandmothers and mothers of ours were not Saints, but Artists; driven to a numb and bleeding madness by the springs of creativity in them for which there was no release.",
            author: "Alice Walker",
            book: "In Search of Our Mothers' Garden"
        },
        {
            quote:"Below this quilt I saw a note that says it was made by an 'anonymous Blakc women in Alabama, a hundred years ago'.",
            author: "Alice Walker",
            book: "In Search of Our Mothers' Garden"
        },
        {
            quote:"Whatever she planted grew as if by magic, and her fame as a grower of flowers spread over three counties.",
            author: "Alice Walker",
            book: "In Search of Our Mothers' Garden"
        },
        
        {
            quote:"We have constanly looked high, wehen we should have looked high - and low.",
            author: "Alice Walker",
            book: "In Search of Our Mothers' Garden"
        },
        // Go tell it on the Mountain James Baldwin
        {
            quote:"There was no room for him to escape, no door, no hiding place; from his father’s wrath, from his mother’s weeping, from the love that would seek him out and destroy him.",
            author: "James Baldwin",
            book: "Go tell it on the Mountain"
        },
        {
            quote:"The wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.",
            author: "James Baldwin",
            book: "Go tell it on the Mountain"
        },
        {
            quote:"Not a soul was damned who had not first been deceived.",
            author: "James Baldwin",
            book: "Go tell it on the Mountain"
        },
        {
            quote:"His father had conquered, had said, The fear of the Lord is the beginning of wisdom.",
            author: "James Baldwin",
            book: "Go tell it on the Mountain"
        },
        {
            quote:"The Lord don’t hate nothing He done made. You can’t see that? He made you to love you, child.",
            author: "James Baldwin",
            book: "Go tell it on the Mountain"
        },
        //Everyone Protest Novel (Notes of a Native son) James Baldwin
        {
            quote:"To flee or not, to move or not, it is all the samel his doom is written on his forehead, it is carried in his heart.",
            author: "James Baldwin",
            book: "Everyone Protest Novel"
        },
        {
            quote:"Below the surface of this novel there lies, as it seems to me, a continuation a complement of the monstrous legend it was written to destroy.",
            author: "James Baldwin",
            book: "Everyone Protest Novel"
        },
        {
            quote:"They emerge for what they are: a mirror of out congusion, dishonesty, panic, trapped & immoblized in the sunlit prision of the American dream.",
            author: "James Baldwin",
            book: "Everyone Protest Novel"

        },
        {
            quote:"The failure of the protest novel lies in its rejection of life, the human being, the denial of his beauty, dread, power, in its insistence that it is his categorization alone which is real and which cannot be transcended.",
            author: "James Baldwin",
            book: "Everyone Protest Novel"
        },
        {
            quote:"Sentimentality, the ostentatious parading of excessive and spurious emotion, is the mark of dishonesty, the inability to feel; the wet eyes of the sentimentalist betray his aversion to experience, his fear of life, his arid heart; and it is always, therefore, the signal of secret and violent inhumanity, the mask of cruelty.",
            author: "James Baldwin",
            book: "Everyone Protest Novel"
        },

        //  The Bluest Eye ( Toni Morrison)
        {
            quote:"She wanted to see the world with blue eyes, to feel the love and admiration that the white world seemed to bestow upon those with blue eyes.",
            author: "Toni Morrison",
            book: "The Bluest Eye"
        },
        {
            quote:"It was a though some silent scream had stuck in her throat, and could not be released.",
            author: "Toni Morrison",
            book: "The Bluest Eye"
        },
        {
            quote:"In the world of make-believe, the only thing that counts is what people see, and what they see is the truth.",
            author: "Toni Morrison",
            book: "The Bluest Eye"
        },
        {
            quote:"She was never able to see the world through blue eyes, but that is not the point. The point is, she wanted to.",
            author: "Toni Morrison",
            book: "The Bluest Eye"
        },   
        {
            quote: "We were not concered with beauty; we were concerned with loving.",
            author: "Toni Morrison",
            book: "The Bluest Eye"
        },

        // Crutches Gus Nikki Giovanni (last one)
        {
            quote:"Its not the crutches we decry its the need to move forward.",
            author: "Nikki Giovanni",
            book: "Crutches Gus"
        },
        {
            quote:"Women aren't supposed to be strong so they deveolop social smiles and secret drinking problems.",
            author: "Nikki Giovanni",
            book: "Crutches Gus"
        },
        {
            quote:"If you broke an arm or leg a crutch would be a sign of courage.",
            author: "Nikki Giovanni",
            book: "Crutches Gus"
        },
        {
            quote:"I really want to say something about all of us am I shouting I want you to hear me.",
            author: "Nikki Giovanni",
            book: "Crutches Gus"
        },   
        {
            quote: "Black men grow inverse To the Common experience.",
            author: "Nikki Giovanni",
            book: "Crutches Gus"
        }
    ];

    // Function to generate a random quote
    function generateQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        
        document.getElementById('quote').textContent = `"${randomQuote.quote}"`;
        document.getElementById('author').textContent = `${randomQuote.author}`;
        document.getElementById('book').textContent = `${randomQuote.book}`;
    }

    generateQuote();
    // Add event listener to the button
    document.getElementById('new-quote').addEventListener('click', generateQuote);
});
