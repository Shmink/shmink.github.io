var quotes = JSON.parse('{\
    "0": "Don\'t worry about what anybody else is going to do. The best way to predict the future is to invent it. -- Alan Kay", \
    "1": "Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great. -- Mark Twain", \
    "2": "No problem should ever have to be solved twice. -- Eric S. Raymond, How to become a hacker", \
    "3": "Attitude is no substitute for competence. -- Eric S. Raymond, How to become a hacker", \
    "4": "It is said that the real winner is the one who lives in today but able to see tomorrow. -- Juan Meng", \
    "5": "Fools ignore complexity.Pragmatists suffer it.Some can avoid it. Geniuses remove it. -- Alan J.Perlis(Epigrams in programming)", \
    "6": "A year spent in artificial intelligence is enough to make one believe in God. -- Alan J.Perlis(Epigrams in programming)", \
    "7": "Dealing with failure is easy: Work hard to improve.Success is also easy to handle: You\'ve solved the wrong problem. Work hard to improve. -- Alan J.Perlis(Epigrams in programming)", \
    "8": "Within a computer natural language is unnatural. -- Alan J.Perlis(Epigrams in programming)", \
    "9": "You think you know when you learn, are more sure when you can write, even more when you can teach, but certain when you can program. -- Alan J. Perlis (Epigrams in programming)", \
    "10": "Adapting old programs to fit new machines usually means adapting new machines to behave like old ones. -- Alan J. Perlis (Epigrams in programming)", \
    "11": "A little learning is a dangerous thing. -- Alexander Pope", \
    "12": "Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter. -- Eric Raymond", \
    "13": "Einstein argued that there must be simplified explanations of nature, because God is not capricious or arbitrary. -- Frederick P.Brooks, No Sliver Bullet.", \
    "14": "We remember what we learn when we care about performing better and when we believe that what we have been asked to do is representative of reality. -- Roger Schank, Engines for Education", \
    "15": "There really is no learning without doing. -- Roger Schank, Engines for Education", \
    "16": "The only problems we can really solve in a satisfactory manner are those that finally admit a nicely factored solution. -- E.W.Dijkstra, The humble programmer", \
    "17": "The best way to learn to live with our limitations is to know them. -- E.W.Dijkstra, The humble programmer", \
    "18": "Whatever you can do, or dream you can, begin it. Boldness has genius, power, and magic in it. -- Goethe", \
    "19": "The programmer must seek both perfection of part and adequacy of collection. -- Alan J.Perlis", \
    "20": "Thus, programs must be written for people to read, and only incidentally for machines to execute. -- Alan J.Perlis", \
    "21": "Lisp programmers know the value of everything but the cost of nothing. -- Alan J.Perlis", \
    "22": "An interpreter raises the machine to the level of the user program; a compiler lowers the user program to the level of the machine language. -- SICP", \
    "23": "Everything should be made as simple as possible, but no simpler. -- Albert Einstein", \
    "24": "Acknowledging the negative doesn\'t mean sniveling [whining, complaining]; it means facing the truth and then moving on. -- George Leonard, Mastery.", \
    "25": "When your enemy is making a very serious mistake, don\'t be impolite and disturb him. -- Napoleon Bonaparte (allegedly)", \
    "26": "A charlatan makes obscure what is clear; a thinker makes clear what is obscure. -- Hugh Kingsmill", \
    "27": "The three chief virtues of a programmer are: Laziness, Impatience and Hubris. -- Larry Wall (Programming Perl)", \
    "28": "All non-trivial abstractions, to some degree, are leaky. -- Joel Spolsky(The Law of Leaky Abstractions)", \
    "29": "XML wasn\'t designed to be edited by humans on a regular basis. -- Guido van Rossum", \
    "30": "Premature abstraction is an equally grevious sin as premature optimization. -- Keith Devens", \
    "31": "You can have premature generalization as well as premature optimization. -- Bjarne Stroustrup", \
    "32": "He causes his sun to rise on the evil and the good, and sends rain on the righteous and the unrighteous. -- Matthew 5:45", \
    "33": "A language that doesn\'t affect the way you think about programming, is not worth knowing. -- Alan Perlis", \
    "34": "Men never do evil so completely and cheerfully as when they do it from religious conviction. -- Blaise Pascal(attributed)", \
    "35": "If we wish to count lines of code, we should not regard them as * lines produced * but as * lines spent * . -- Edsger Dijkstra", \
    "36": "Omit needless words. -- William Strunk, Jr.(The Elements of Style)", \
    "37": "I have never met a man so ignorant that I couldn\'t learn something from him. -- Galileo Galilei", \
    "38": "Philosophy: the finding of bad reasons for what one believes by instinct. -- Brave New World(paraphrased)", \
    "39": "Fools! Don\'t they know that tears are a woman\'s most effective weapon? -- Catwoman(The Batman TV Series, episode 83)", \
    "40": "C++ is history repeated as tragedy. Java is history repeated as farce. -- Scott McKay", \
    "41": "Simplicity takes effort-- genius, even. -- Paul Graham", \
    "42": "Show, don\'t tell. -- unknown", \
    "43": "In God I trust; I will not be afraid. What can mortal man do to me? -- David (Psalm 56:4)", \
    "44": "Linux is only free if your time has no value. -- Jamie Zawinski", \
    "45": "Code is poetry. -- wordpress.org", \
    "46": "If you choose not to decide, you still have made a choice. -- Rush (Freewill)", \
    "47": "Civilization advances by extending the number of important operations which we can perform without thinking about them. -- Alfred North Whitehead (Introduction to Mathematics)", \
    "48": "The function of wisdom is to discriminate between good and evil. -- Cicero", \
    "49": "Mistakes were made. -- Ronald Reagan", \
    "50": "I would rather be an optimist and be wrong than a pessimist who proves to be right. The former sometimes wins, but never the latter. -- Hoots" \
}');

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
var num = Math.floor(getRandomArbitrary(0, Object.keys(quotes).length));
console.log(num);
console.log(quotes[num]);
console.log(Object.keys(quotes).length - 1)
document.getElementById('quote').innerHTML = quotes[num];