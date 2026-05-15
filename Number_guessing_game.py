# taking int value from compiler...

import random
randNumber = random.randint(1,100)
print(randNumber)

# defining userGuess...
userGuess = None
guesses = 0

# applying condition...

while(userGuess != randNumber):
    userGuess = int(input("Enter your guess: "))
    guesses += 1
    if(userGuess == randNumber):
        print("You guessed right number")
    else:
        if(userGuess > randNumber):
            print("You guessed it wrong! then, Enter smaller number")
        else:
            print("You guessed it wrong! then, Enter greater number")

# printing your guessed number...
print(f"You guessed the correct number in {guesses} guesses")