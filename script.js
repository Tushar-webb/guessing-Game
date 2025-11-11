let mistakeAttempts =0;
let targetNumber;
let attempts;
let done;

// Function to play the game
function guessNumber()
{
    targetNumber = Math.floor(Math.random() * 100) + 1; // Generate random number between 1 and 100
    attempts = 0;
    done = 0;

    // Get user input using prompt
    let guess = parseInt(prompt(" Ab aap, 1 se 100 tak ke beech ek number guess kijiye:"));
    
    //when user intentionally click the cancel option or enters nothing
    if (isNaN(guess)) {
        alert("Abe saale, khelna nai toh aaya kaiko");
        done++;
    }
    //when user does not enter in the range of 1-100
    else if(guess < 1 || guess > 100)
    {
        alert("Bachpan me seir ke bal gira tha? Samaj nai aata; 1-100 ke beech mein number dalna hai!.");
        done++;
    }
    while(done==0 && attempts<10)
    {
        attempts++;
        if(guess === targetNumber)
        {
            alert(`Wah bhai! Sahi jawab: ${targetNumber}. Tune ${attempts} attempts mein guess kiya.`);
            done++;
        } 
        else if (guess < targetNumber)
        {   
            guess = parseInt(prompt("Thoda bada number try kar: "));
            if (isNaN(guess) || (guess < 1 || guess > 100))
            {
                mistakeAttempts++;
                if(mistakeAttempts<2)
                {
                    alert("Are yr, kyu faltu masti ki!!! ab tereko shuruwat se khelna hoga.");
                    guessNumber();
                }
                else
                {
                    alert("Tu mat khel__bhg yaha se!");
                    done++;
                }
            }
        } 
        else
        {
            guess = parseInt(prompt("Thoda chhota number try kar."));
            if (isNaN(guess))
            {
                mistakeAttempts++;
                if(mistakeAttempts<2)
                {
                    alert("Are yr, kyu faltu masti ki!!! ab tereko shuruwat se khelna hoga.");
                    guessNumber();
                }
                else
                {
                    alert("Tu mat khel__bhg yaha se!");
                    done++;
                }
            }
        }
        if(attempts==10)
        {
            alert("Sorry yr__TIME OUT!! kafi guess kar liya tumne____ab niklo.");
        }
    }
}

// Start the game
alert("Welcome to Number Guessing Game, User!");
alert("Maine ek number soch liya hai 1 se 100 ke beech.");
guessNumber();
alert("To play the game again, reload the page");