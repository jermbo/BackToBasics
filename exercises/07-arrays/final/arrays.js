// -------------------------------
// Arrays!
// -------------------------------

// ---------------------------------------------------------------------
//
// Using the knowledge we just learned, follow the instructions
// above the function and modify things to get the desired results
//
// ---------------------------------------------------------------------

const inventory = [
	{ title: 'Def-Con Owl Traps', category: 'Pest Control', description: 'Traps for the wild spotted owls which have replaced rats as the #1 infestation in New New York.', slogan: 'Kills owls dead', price: '309.29', stock: '5' },
	{ title: 'Human traps', category: 'Pest Control', description: 'Traps used to lure humans and trap them.', slogan: '', price: '999.99', stock: '1' },
	{ title: 'Arachno Spores', category: 'Pest Control', description: 'The fatal spore with the funny name!', slogan: '', price: '1.99', stock: '1000000000' },
	{ title: 'Molten Boron', category: 'Misc', description: 'A large drum of boron at 2,075 degrees Celsius or more.', slogan: 'Nobody doesn\'t like Molten Boron!', price: '74.19', stock: '23' },
	{ title: 'Bachelor Chow', category: 'Food', description: 'Cheap, dog-food-like substance sold in bulk to bachelors. Just add water!', slogan: 'Bachelor Chow, now with flavor.', price: '4.69', stock: '88' },
	{ title: 'Slurm', category: 'Food', description: 'A highly addictive, highly popular soft drink, exuded from the behind of a giant worm queen.', slogan: 'It\'s highly addictive! Enjoy Slurm', price: '2.40', stock: '50000' },
	{ title: 'Big Applet', category: 'Publications', description: 'A magazine. It publishes an annual "Best of" list covering a wide area of categories.', slogan: 'For the discriminated New New Yorker.', price: '2.50', stock: '240' },
	{ title: 'iObey', category: 'App', description: 'A virus that can be sent to robots via email. Once the target robot downloads the virus, he or she is forced to obey the every demand of the sender of the email.', slogan: '', price: '0.00', stock: '1000000' },
	{ title: 'Angry Norwegian Anchovies', category: 'Food', description: 'A thousand-year can of anchovies. Due to the anchovy\'s extinction in the 2200s, they are now extremely valuable.', slogan: '', price: '50000000', stock: '1' },
	{ title: 'Farnsworth novelty disintegrator ray', category: 'Toys', description: 'Manufactured by Professor Farnsworth. Available for purchase via comic book ads, such as in the comic book Delivery-Boy Man. Not an actual disintegrator ray, as advertised, but rather a common teleporter ray.', slogan: '', price: '29.99', stock: '28' },
	{ title: 'Captain\'s Handbook', category: 'Publications', description: ' A handbook for captaining a vessel.', slogan: '', price: '24.99', stock: '3' },
	{ title: 'Bendërbrāu', category: 'Food', description: 'A cold-fusion steam beer brewed by the Planet Express crew inside Bender\'s body cavity as an alternative to having to choose a commercial brand.', slogan: 'Let\'s get drunk!', price: '9.99', stock: '0' },
	{ title: 'Tickle Me Bender dolls', category: 'Toys', description: 'Small Bender dolls that can get tickled, and doesn\'t want you to touch his junk.', slogan: '', price: '14.88', stock: '0' },
	{ title: 'Delivery-Boy Man', category: 'Publications', description: 'A comic book written and inked by Philip J. Fry.', slogan: '', price: '0.00', stock: '1' },
	{ title: 'Kibbles \'N\' Snouts', category: 'Food', description: 'A 31st century brand of pet food, suitable for dogs and Nibblonians.', slogan: 'If you\'ve got the nibbles, go for some kibbles!', price: '12.54', stock: '29' },
	{ title: 'Lovey Bears', category: 'Toys', description: 'Cute bears are genetically engineered by Romanticorp. They are raised in the "Lovey Forest" until their first birthday, then, the cuddly-uddliest ones are killed then stuffed full of "fire-retardant love fluff".', slogan: '', price: '99.29', stock: '341' },
	{ title: 'Extreme Walrus Juice', category: 'Food', description: 'A beverage sold at Fishy Joe\'s.', slogan: 'Ride the walrus!', price: '0.99', stock: '44' },
	{ title: 'Good News', category: 'Health', description: 'A brand of herbal supplement.', slogan: '', price: '85.25', stock: '0' },
	{ title: 'Glagnar\'s Human Rinds', category: 'Food', description: 'Fried Human skins, presumably.', slogan: 'It\'s a buncha muncha cruncha human!', price: '8.99', stock: '50' },
	{ title: 'Bamboo Boogie Boots', category: 'Toys', description: 'An entertainment product consisting of boots that produces long bamboo stilts, which are apparently hard to get the hang of. Carries a large and prominent warning label, and are highly flammable.', slogan: '', price: '59.99', stock: '38' },
	{ title: 'Three More Great Recipes', category: 'Publications', description: 'A cookbook written by Elzar', slogan: 'BAM!', price: '24.99', stock: '24' },
	{ title: 'Band-Ape', category: 'Health', description: 'A brand of bandages for monkeys.', slogan: '', price: '2.99', stock: '15' },
	{ title: 'Admiral Crunch', category: 'Food', description: 'Based on the 20th and 21st century Captain Crunch. In the intervening millenium the titular mascot has been promoted, a reference to Star Trek and its habit of depicting future versions of prominent captains as admirals.', slogan: '', price: '6.49', stock: '65' },
	{ title: 'Webster\'s New Abridged Becktionary‎', category: 'Publications', description: 'Webster\'s New Abridged Becktionary‎', slogan: '', price: '0.00', stock: '1' },
	{ title: 'Cavitar Toothpaste', category: 'Health', description: 'A brand of toothpaste that Fry uses.', slogan: '', price: '1.88', stock: '2' },
	{ title: 'Lightspeed Briefs', category: 'Clothing', description: 'Lightspeed Briefs are comfortable underwear that cost around $30. They are advertised for in dreams.', slogan: 'As seen in your dreams. For the discriminating crotch.', price: '30.99', stock: '221' },
	{ title: 'Dr. FlimFlam\'s miracle cream', category: 'Health', description: 'A rub-on cream that soothes aching muscles and causes superpowers in humans.', slogan: '', price: '253.99', stock: '0' },
	{ title: 'Robo Fresh', category: 'Health', description: 'A robot hygiene product that at one point sponsored All My Circuits.', slogan: 'Robo Fresh, designed by a robot, for a robot.', price: '3.78', stock: '20' },
	{ title: 'Human Broth', category: 'Food', description: 'Soup broth made of humans.', slogan: '', price: '7.75', stock: '62' },
	{ title: 'Thompson\'s Teeth', category: 'Health', description: 'Dentures sturdy enough to allow the wearer to eat other teeth.', slogan: 'The only teeth strong enough to eat other teeth.', price: '55.55', stock: '48' },
	{ title: 'Code of Conduct for Cannibalism‎', category: 'Publications', description: 'A manual on what to do in emergencies.', slogan: '', price: '75.82', stock: '55' },
]

// Log all the titles and their descriptions in the console.
inventory.forEach(function( item ){
	console.log( item.title );
});

// Log all items greater than 50 and are in stock here.
const moreThan50 = inventory.filter(function( item ) {
    return item.price > 50 && item.stock > 0;
});
console.table( moreThan50 );

// Log all food items that are instock here.
const food = inventory.filter(function( item ) {
	return item.category == 'Food' && item.stock > 0;
});
console.table( food );

// Log total number of items in the inventory here.
const totalInventory = inventory.reduce(function( itt, item ) {
	return itt + parseInt(item.stock);
}, 0);
console.log( totalInventory );

// Log total cost of all the publications in stock here
const totalPublicationsInStock = inventory.reduce(function (itt, item){
	let totalCost = 0;
	if( item.category == 'Publications' && item.stock > 0 ){
		for( let i = 0; i < item.stock; i++ ) {
			totalCost += parseFloat(item.price);
		}
		return itt + totalCost;
	}
	return itt;
}, 0);
console.log( totalPublicationsInStock );

// Remove first and last item here.
inventory.unshift();
inventory.pop();
console.table( inventory );

// Add an item here.
const myItem = {
	title: 'Space Goggles',
	category: 'Clothing',
	description: 'A stylish set of eye glasses that do nothing for you when you are in the vacume of space.',
	slogan: 'When the radiation is to intense, Space Goggles does nothing to help.',
	price: '59.99',
	stock: '33'
};
inventory.push( myItem );
console.table( inventory );