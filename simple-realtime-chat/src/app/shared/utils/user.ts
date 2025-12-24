const USERNAME_ANIMALS = ['walrus', 'dolphin', 'elephant', 'lion', 'fish', 'penguin', 'bear', 'fox', 'koala', 'panda', 'tiger', 'zebra', 'giraffe', 'hippopotamus', 'rhinoceros', 'monkey', 'kangaroo', 'octopus', 'shark', 'whale', 'cat', 'dog', 'bird', 'rabbit', 'mouse', 'snake', 'turtle', 'frog', 'lizard', 'spider', 'bee', 'ant', 'butterfly', 'caterpillar', 'chicken', 'cow', 'duck', 'goat', 'horse', 'pig', 'sheep', 'crab', 'jellyfish', 'starfish', 'seahorse', 'owl', 'eagle', 'hawk', 'falcon', 'parrot', 'pigeon', 'sparrow', 'swan', 'woodpecker', 'peacock', 'flamingo', 'pelican', 'stork', 'crane', 'robin', 'crow', 'raven', 'vulture', 'bat', 'beaver', 'camel', 'deer', 'gorilla', 'hamster', 'otter', 'sloth', 'squirrel', 'weasel', 'wolf', 'badger', 'chinchilla', 'coyote', 'ferret', 'meerkat', 'mongoose', 'platypus', 'raccoon', 'skunk', 'wombat', 'yak', 'cheetah', 'jaguar', 'leopard', 'panther', 'puma', 'gazelle', 'impala', 'kudu', 'moose', 'reindeer', 'wildebeest', 'baboon', 'chimpanzee', 'orangutan', 'gorilla', 'lemur', 'marmoset', 'gibbon', 'spider_monkey', 'howler_monkey', 'capybara', 'guinea_pig', 'hedgehog', 'mole', 'shrew', 'vole', 'gerbil', 'chinchilla', 'opossum', 'armadillo', 'anteater', 'pangolin', 'aardvark', 'hyena', 'wild_dog', 'fennec_fox', 'arctic_fox', 'red_fox', 'grey_fox', 'polar_bear', 'grizzly_bear', 'black_bear', 'brown_bear', 'sun_bear', 'moon_bear', 'koala_bear', 'panda_bear', 'raccoon_dog', 'red_panda', 'sable', 'ermine', 'mink', 'stoat',];

function generateUniqueUsername():string{
    const randomIndex = Math.floor(Math.random() * USERNAME_ANIMALS.length);
    const randomAnimal = USERNAME_ANIMALS[randomIndex];
    const randomNumber = Math.floor(Math.random() * 999001) + 1000;

    return `anonymous-${randomAnimal}-${randomNumber}`;
}

export {generateUniqueUsername}