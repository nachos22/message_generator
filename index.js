const readline = require('readline');

// Arrays with subjects, verbs, and objects
const subjects = [
    "The cat", "A dog", "The bird", "My neighbor", "An artist",
    "The child", "A musician", "The chef", "The teacher", "A student",
    "The scientist", "The farmer", "The doctor", "A librarian", "The engineer",
    "The dancer", "A painter", "The actor", "A writer", "The athlete",
    "The carpenter", "The driver", "The nurse", "The pilot", "A gardener",
    "The swimmer", "A photographer", "The baker", "The programmer", "A journalist",
    "The police officer", "The firefighter", "A scientist", "The musician", "A poet",
    "The sailor", "The explorer", "The astronaut", "A veterinarian", "The mechanic",
    "The architect", "The jeweler", "A fashion designer", "The sculptor", "The tour guide",
    "The artist", "A magician", "The comedian", "A farmer", "The artist",
    "The sculptor", "The designer", "The teacher", "A travel agent", "The novelist",
    "The chef", "The historian", "The lawyer", "A bus driver", "The baker",
    "The electrician", "A barista", "The technician", "The tailor", "A personal trainer",
    "The pilot", "A travel writer", "The entrepreneur", "The inventor", "A historian",
    "The astronomer", "The biologist", "The geologist", "A therapist", "The librarian",
    "The curator", "A graphic designer", "The sailor", "The professor", "The analyst",
    "The actor", "The gardener", "The chef", "A researcher", "The firefighter",
    "The artist", "The bartender", "A zookeeper", "The taxidermist", "A pilot",
    "The trainer", "The professor", "A musician", "The florist", "The therapist",
    "The social worker", "The chef", "The contractor", "A project manager", "The writer",
    "The florist", "The mechanic", "A painter", "The coach", "The designer"
];

const verbs = [
    "jumps over", "paints", "eats", "runs around", "plays with",
    "writes", "explores", "sings", "dances", "cooks",
    "builds", "designs", "creates", "draws", "trains",
    "teaches", "reads", "drives", "flies", "gardens",
    "bakes", "draws", "runs", "swims", "climbs",
    "jumps", "bounces", "throws", "catches", "plays",
    "sketches", "photographs", "repairs", "models", "directs",
    "programs", "solves", "studies", "analyzes", "tests",
    "writes", "teaches", "guides", "leads", "mentors",
    "helps", "assists", "innovates", "investigates", "designs",
    "paints", "sculpts", "decorates", "develops", "explores",
    "composes", "performs", "displays", "creates", "organizes",
    "navigates", "repairs", "fixes", "plans", "strategizes",
    "coordinates", "facilitates", "implements", "develops", "analyzes",
    "assesses", "evaluates", "reviews", "consults", "instructs",
    "mentors", "encourages", "advises", "moderates", "prepares",
    "recommends", "assists", "enlightens", "entertains", "transforms",
    "establishes", "directs", "coordinates", "manages", "organizes",
    "invents", "designs", "devises", "constructs", "produces",
    "executes", "drafts", "outlines", "performs", "models",
    "creates", "translates", "articulates", "establishes", "develops",
    "advises", "counsels", "modifies", "fine-tunes", "enhances",
    "restructures", "redefines", "projects", "envisions", "imagines",
    "develops", "articulates", "delivers", "proposes", "summarizes"
];

const objects = [
    "a book", "a chair", "a laptop", "a lamp", "a table",
    "a phone", "a car", "a bicycle", "a guitar", "a painting",
    "a plant", "a cup", "a ball", "a pen", "a notebook",
    "a television", "a camera", "a pillow", "a toy", "a bottle",
    "a clock", "a hat", "a lamp", "a sculpture", "a suitcase",
    "a jacket", "a spoon", "a fork", "a plate", "a towel",
    "a rug", "a vase", "a photo", "a mug", "a lamp",
    "a desk", "a television", "a mirror", "a sofa", "a bookcase",
    "a painting", "a blanket", "a keyboard", "a mouse", "a backpack",
    "a necklace", "a bracelet", "a ring", "a vase", "a book",
    "a sketchpad", "a candle", "a basket", "a globe", "a poster",
    "a toy car", "a teddy bear", "a magazine", "a pair of shoes", "a scarf",
    "a painting", "a drawing", "a sculpture", "a pillow", "a photo frame",
    "a piece of furniture", "a lamp", "a mirror", "a basket", "a plant",
    "a ball", "a frisbee", "a candle", "a photo album", "a travel bag",
    "a suitcase", "a television", "a printer", "a rug", "a shelf",
    "a bookshelf", "a frame", "a stuffed animal", "a pen holder", "a coffee maker",
    "a blender", "a toaster", "a microwave", "a vase", "a lamp",
    "a toothbrush", "a comb", "a wallet", "a smartphone", "a tablet",
    "a laptop", "a lamp", "a chair", "a sofa", "a rug",
    "a painting", "a sculpture", "a picture", "a clock", "a table"
];

// Function to generate a random message
function createMessage() {
    let subj = subjects[Math.floor(Math.random() * subjects.length)];
    let verb = verbs[Math.floor(Math.random() * verbs.length)];
    let obj = objects[Math.floor(Math.random() * objects.length)];

    console.log(`${subj} ${verb} ${obj}.`);
}

// Function to handle user input and call `createMessage`
function inputFunc() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Type G to generate message: ', (answer) => {
        if (answer === 'G') {
            createMessage();
            anotherMessage(rl); // Pass the readline interface to anotherMessage
        } else {
            console.log('ERROR: Invalid input. Please try again.');
            rl.close(); // Close the readline interface before recursive call
            inputFunc(); // Re-prompt the user
        }
    });
}

// Function to ask if the user wants another message
function anotherMessage(rl) {
    rl.question('Would you like to generate another message? Type "YES" or "NO": ', (answer) => {
        if (answer === 'YES') {
            createMessage();
            anotherMessage(rl); // Re-prompt the user
        } else if (answer === 'NO') {
            console.log('Goodbye!');
            rl.close(); // Close the readline interface
        } else {
            console.log('ERROR: Invalid input. Please try again.');
            anotherMessage(rl); // Re-prompt the user
        }
    });
}

// Start the process
inputFunc();
