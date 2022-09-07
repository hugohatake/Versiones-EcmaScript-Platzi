const regex = /\b(Kiwi)+\b/g;

const fruit = 'Apple, Banana, Kiwi, Orange, Grapes';

for(const match of fruit.matchAll(regex)){
    console.log(match);
}