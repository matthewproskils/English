let words = document.getElementById("words");

function* def(i)
{
    while (true)
    {
        yield `<h3 id="${i}">#${i}: ${shuffled[Object.keys(shuffled)[i]]}<input id="${i}i"/></h3><br>`;
        i++;
    }
}

const wrd = {
    "contradictory": "(adj): expressing the opposite; inconsistent",
    "adversary": "(n): an opponent, an enemy",
    "chide": "(v) to scold; to express dissatisfaction",
    "belligerent": "(adj) hostile; aggressive; quarrelsome",
    "strife": "(n) bitter conflict or struggle",
    "discord": "(n) lack of agreement / harmony",
    "embroil": "(v) to get involved in a conflict, an argument, or confusion",
    "skirmish": "(n) a minor battle, sometimes on the fringes of a larger battle",
    "haggle": "(v) to argue / bargain in order to come into favorable terms",
    "ruse": "(n) a crafty trick intended to create a false impression",
    "despondent": "(adj) in low spirits; depressed, dejected",
    "gratification": "(n) satisfaction; a feeling of reward for one's efforts",
    "desolate": "(adj) lonely or sad; having little or no life or vegitation; barren",
    "anguish": "(n) great physical / mental pain, torture; (v) to suffer from emotional pain",
    "exuberant": "(adj) filled with enthusiasm & joy",
    "defiant": "(adj) openly / bodly resisting authority",
    "congenial": "(adj) friendly; having a pleasent disposition",
    "blithe": "(adj) cheerful, carefree, lighthearted",
    "disillusion": "(v) to dissapoint someone by breaking their belief in a false ideal",
    "disgruntled": "(adj) discontented; resentful",
    "tolerate": "(v) to allow, to bear; to endure",
    "amenable": "(adj) willing to be consider; open to advice or suggestion",
    "subjective": "(adj) governed by personal thoughts or feelings",
    "deception": "(n) a trick; an attempt to make someone belive the untrue",
    "slander": "(n) to make false statements about someone; (v) to (v) to make false statements about someone;",
    "forbearance": "(n) patience; not reacting when annoyed or harmed",
    "preconceived": "(adj) believed before has full knowledge / experience",
    "objective": "(adj) impartial, realistic; (n) a goal / purpose",
    "partisanship": "(n) very strong, sometimes excessive support for a group idea or cause",
    "partially": "(n) a favorable bias toward something",
    "sanctuary": "(n) Any place of safety / protection; holy place",
    "intercede": "(v) to mediate / help in a problem between others",
    "refurbish": "(v) to clean, renew, repair, refresh",
    "bestow": "(v) to give or present especially as a gift / honor",
    "abet": "(v) to encourage or assist, particularly when doing something wrong",
    "offset": "(v) to make up, to compensate; conteract",
    "pacify": "(v) to calm; to establish peace",
    "haven": "(n) a place of refuge / safety",
    "deliverance": "(n) liberation; rescue from slavery, capture / danger",
    "expdite": "(v) to speed up or help the progress of; to do quickly",
    "articulate": "(adj) skilled in expressing oneself clearly and effectively (v) to express clearly in words",
    "enunciate": "(v) to pronounce, especially in a clear manner",
    "stress": "(n) emphasis in speaking or music (v) to emphasize, (n) tension, strain",
    "hierarchy": "(n) a group organized according to rank / status",
    "stratify": "(v) to seperate into different layers",
    "accent": "(n) a style of pronunciation; (v) to focus on",
    "dictation": "(n) clearness in speech / pronunciation",
    "dialect": "(n) an unique form of language spoken by people from a specific group",
    "peer": "(n) a person who is equal to another in social standing / age",
    "intelligible": "(adj) to be understood"
}

function knuthShuffle(arr) {
    var rand, temp, i;
 
    for (i = arr.length - 1; i > 0; i -= 1) {
        rand = Math.floor((i + 1) * Math.random());//get random between zero and i (inclusive)
        temp = arr[rand];//swap i and the zero-indexed number
        arr[rand] = arr[i];
        arr[i] = temp;
    }
    return arr;
}


let shuffled = Object.fromEntries(knuthShuffle(Object.entries(wrd)));

let j = 0;

let gen = def(0);

for (; j < Object.keys(wrd).length; j++) {
    words.innerHTML += gen.next().value;
}

document.getElementById("submit").onclick = () =>
{
    for (let i = 0; i < j; i++)
    { 
        if (Object.keys(shuffled)[i].toLowerCase() == document.getElementById(i + "i").value)
        {
            alert(`${document.getElementById(i + "i").value} is correct for ${shuffled[Object.keys(shuffled)[i].toLowerCase()]}`)
        } else
        {
            alert(`${Object.keys(shuffled)[i].toLowerCase()} means ${shuffled[Object.keys(shuffled)[i]]}, #${i}, you wrote ${document.getElementById(i+"i").value}`);
        }
    }
}