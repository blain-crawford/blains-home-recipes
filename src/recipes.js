
import BagelAvocado from './images/bagel_avocado.jpg';
import Gumbo from './images/gumbo.jpg';
import ShortRibs from './images/shortribs.jpg';
import Pie from './images/pie.jpg';
import Chashu from './images/chashu.jpg';
import CinnamonRolls from './images/cinnamon-rolls.jpg';
import HoosierTenderloin from './images/hoosier-tenderloin.jpg';
import Shakshuka from './images/shakshuka.jpg';
import ShrimpEtouffee from './images/shrimp-etouffee.jpg';
const recipes = [
  { name: 'Bluefish Pâté Bagel with Avocado', picture: BagelAvocado, id: 1, ingredients: ['Bagels','Smoked Bluefish Pâté', 'feta cheese', 'Avocado','Pickeled Onions and Jalepenós', 'Hot Sauce'], instructions: ['Start off by making sure you get fresh bagels (this is a MUST for maximum delicious-ness), and toast them well to get a nice crispy inside!  This will help to keep a contrasting texture to all of the other ingredients', 'Spread a healthy layer of Bluefish Pâté on each slice of your bagel and spinkle a bit of feta cheese over top of it', 'Next, dice up some fresh spinach and toss in a bit of the juice from your pickled jalepènos for a bit of extra bite', 'Finally garnish with pickeled jalepènos and pickled onion, serve with a side of avocado and with salt, pepper, and your choice of hotsauce and get ready to get your day started with a healthy and incredible breakfast!']},
  { name: 'Gumbo', picture: Gumbo, id: 2, ingredients: ['4 bone-in skin-on chicken thighs', '3 teaspsoons kosher salt, divided', ' 2 teaspoons black pepper, divided', '1/2 cup grapeseed oil', '1/2 cup all purpose flour', '1 large onion diced', '1large bell pepper, diced', '2 ribs celery diced', '10 cloves garlic, crushed', '4 bay leaves', '12 ounces amber-style beer', '5 cups chicken-stock', '1/2 teaspoon cayenne pepper', '1 pound andouille sausage, bite sized pieces', 'rice for serving', 'green onions for garnish'], instructions: ['Preheat the oven to 400°F. Season the chicken thighs with 2 teaspoons of the salt and 1 teaspoon of the black pepper. Place on a rimmed baking sheet, skin side up, and roast for 20 minutes, or until the skin is lightly browned. Remove from the oven and set aside. Don’t throw that fat away, it’s going in the gumbo later.', 'In a heavy Dutch oven over medium heat, make a dark roux by simmering the oil and flour for about 45 minutes. Once the roux is the color of milk chocolate, add the trinity of onion, bell pepper, and celery and stir once every 5 seconds for about a minute until the vegetables begin to soften and caramelize. The roux is rocking hot, so these vegetables are going to cook really quickly. Don’t walk away! After a minute, add the garlic and bay leaves and cook for another 30 seconds, stirring frequently.', 'Deglaze the pot with the beer, scraping the bottom with a wooden spoon until all the browned bits are released. Stir constantly until it returns to a simmer. Add the stock and continue stirring until it returns to a simmer. Add the remaining 1 teaspoon salt and 1 teaspoon black pepper and the cayenne. Add the reserved chicken thighs (skin, bones, everything) and their fat and the sausage. Bring back to a bare simmer, being careful not to let it boil and not to let the roux scorch, reduce the heat to the lowest setting on your stove, and cover. Simmer for 3 hours, stirring every 30 minutes, scraping the bottom each time. Your gumbo should begin to thicken, but not like gravy. If it starts getting too thick before the 3 hours are up and you have to hit it with a little water to thin it, do so.', 'Do not skim that fat off the top!!!!', 'Serve with rice. Garnish with sliced green onions. If you want to bump up the heat, add a little scoop of pepper paste']},
  { name: 'Pecan Pie', picture: Pie, id: 3, ingredients: ['1 unbaked 9-inch crist, frozen for at least 30min', '2 cups pecans, coarsley chopped, (save some for decoration before backing', '3 large eggs slightly beaten', '1 cup light corn syrup', '1/2 cup brown sugar', '1 tablespoon molasses (unsulphured)', '4 tablespoons unsalted butter melted', '1/2 teaspoon salt', '2 teaspoons vanilla extract'], instructions: ['Preheat the oven to 350°F and position a rack in the center.', 'In a medium bowl vigorously mix together the eggs, brown sugar, corn syrup, molasses, melted butter, vanilla, and salt, until smooth. (No need for a mixer, you can beat by hand using a wooden spoon.)', 'Spread the chopped pecans over the bottom of a frozen pie shell. Pour the filling over the pecans. Don\'t worry about burying the pecans, they will rise to the surface. (If you have reserved a few whole pecan halves, you can arrange them on the surface in a decorative pattern. Just dip them below the wet filling and let them rise again so they get coated with the filling.)', 'Bake at 350°F for 30 minutes. After 30 minutes tent the pie loosely with aluminum foil to prevent the crust and pecans from getting too browned. Bake for another 35 to 45 minutes until the filling has set. The pie should be a bit wiggly in the center.', 'Note that the pie will be puffed up a bit when you first take it out of the oven. It will settle as it cools.' ]},
  { name: 'Gochujang Shortribs', picture: ShortRibs, id: 4, ingredients: ['3lbs bone-in beef shortribs', '3/4 cup soy sauce', '2 tablespoons seasame oil', '2 teaspoons rice vinegar', '2 tablespoons mirin', '1/2 teaspoon kosher salt', '1/2 teaspoon black pepper', '2/3 teaspsoon korean red chili flakes', '4 - 5 tablespoons gochujang (more if you want it spicier)', '1/3 cup of honey or sugar', '5 cloves garlic minced or crushed', 'green onions for garnish', 'toasted sesame seeds for garnish'], instructions: ['Line a rimmed baking sheet with foil and place a cooling rack inside; set aside. Place your oven rack to the upper third tray.', 'In a large bowl whisk together the soy sauce, sesame oil, vinegar, salt, pepper, chili flakes, Gochujang, honey, garlic, and ginger. Place your short ribs in the bowl and gently toss/stir to coat all of the meat. Allow to rest for 10 minutes. If you’re in a hurry you can skip this part and dump it all into the Instant Pot/Pressure Cooker.', 'set oven to 350°F and place in ribs on foil lined backing sheet until ribs are throughly cooked through and meat is falling from the bone', 'baste ribs in sauce and wrap in tin foil for 10 - 15min (ribs will continue to heat in tin foil and become more juicy)', 'sprinkle with sesame seeds and green onion and plate!  Get ready for some for the best ribs you\'ve ever had!' ]}, 
  {name: 'Chashu', picture: Chashu, id: 5, ingredients: ['2 - 2 1/2lbs pork belly block', 'green onion', '1 knob ginger', '1 tablespoon neutral flavored oil', '1 cup sake', '1 cup soy sauce', '2 cups water', '2/3 cup sugar'], instructions: ['Roll up the pork belly, making sure one or both ends has a “bacon-like” appearance, showing the varying layers of meat and fat. If your slab comes with the rind, it should be removed. Ask your butcher to remove it for you.', 'Run some butcher twine under the far end of the log. Tie a double knot to secure the pork tightly. Make sure you leave a tail of about 3 inches (7.5 cm) of twine at the end.', 'Next, tightly wrap the twine around the spot you just tied another 2 or 3 times to secure the starting point of the roll. Then, pull the twine to the opposite end of the pork belly roll. Tightly wrap the twine around that end 2 to 3 times to secure it.', 'Next, start wrapping the twine around the roll back toward the starting point. Space each wrap ⅓ inch (1 cm) apart. Make sure you wrap the roll as tightly as possible.', 'Once you reach the starting point, run the twine under some of the end wraps; this hooks the twine in place so you can reverse direction. Next, run the twine under 4 or 5 wraps going away from the starting point. Then, double back toward the starting point, running your twine under the wraps until you reach the original double knot.', 'Find the 3-inch tail of twine that you left when you started. Tie a double knot with the tail and the long end of the twine, and cut the excess.', 'Heat the oil in a cast-iron skillet (or regular frying pan) over high heat. Add the tied pork belly to the skillet.', 'Sear the pork belly one side at a time, rotating it to make sure all sides are golden brown.', 'Transfer the seared chashu to the Dutch oven with all liquids and ingredients for sauce', 'Simmer on low heat, and cover with the otoshibuta at all times for the next 2 hours, turning the chashu every 30 minutes. The sauce has been reduced. After 2 hours, turn off the heat to let it cool a little bit. rest overnight!']}, 
  {name: 'Cinnamon Rolls', picture: CinnamonRolls, id: 6, ingredients: ['-----DOUGH-----','3/4 cup warm 2% milk', '2 1/4 teaspoons quick rise or active yeast', '1/4 cup granulated sugar', '1 egg and 1 egg yolk at room temp', '1/4 cup butter melted', '3 cups bread flower and more for dusting', '3/4 tablespoon of salt', '-----FILLING-----', '2/3 cup brown sugar', '1 1/2 tabletspoon ground cinnamon', '1/4 cup butter softened', '-----FROSTING-----', '4 ounces cream cheese softened', '3 tablespoons butter softened', '3/4 cup powdered sugar', '1/2 teaspoon vanilla extract'], instructions: ['Warm milk to around 110 degrees F. I like to do this by placing milk in a microwave safe bowl and microwaving it for 40-45 seconds. It should be like warm bath water. Transfer warm milk to the bowl of an electric mixer and sprinkle yeast on top. Add in sugar, egg, egg yolk and melted butter. Mix until well combined. Next stir in flour and salt with a wooden spoon until a dough begins to form.', 'Place dough hook on stand mixer and knead dough on medium speed for 8 minutes. Dough should form into a nice ball and be slightly sticky. If it\'s TOO sticky (meaning it\'s sticking to the bottom of the mixer, add in 2 tablespoons more bread flour.) If you don’t want to use an electric mixer, you can use your hands to knead the dough for 8-10 minutes on a well-floured surface.', 'Transfer dough ball to a well-oiled bowl, cover with plastic wrap and a warm towel. Allow dough to rise for 1 hour to 1 ½ hours, or until doubled in size. This may more or less time depending the humidity and temperature in your home.', 'After dough has doubled in size, transfer dough to a well-floured surface and roll out into a 14x9 inch rectangle. Spread softened butter over dough, leaving a ¼ inch margin at the far side of the dough.', 'In a small bowl, mix together brown sugar and cinnamon. Use your hands to sprinkle mixture over the buttered dough, then rub the brown sugar mixture into the butter.', 'Tightly roll dough up, starting from the 9-inch side and place seam side down making sure to seal the edges of the dough as best you can. You will probably need to cut off about an inch off the ends of the dough as the ends won’t be as full of cinnamon sugar as we’d want it to be.', 'Cut into 1 inch sections with a serrated knife or floss. You should get 9 large pieces.', 'Place cinnamon rolls in a greased 9x9 inch baking pan or round 9 inch cake pan. (I also recommend lining the pan with parchment paper as well, in case any of the filling ends up leaking out.) Cover with plastic wrap and a warm towel and let rise again for 30-45 minutes.', 'Preheat oven to 350 degrees F. Remove plastic wrap and towel and bake cinnamon rolls for 20-25 minutes or until just slightly golden brown on the edges. You want to underbake them a little so they stay soft in the middle, that’s why we want them just slightly golden brown. Allow them to cool for 5-10 minutes before frosting. Makes 9 cinnamon rolls.', 'To make the frosting: In the bowl of an electric mixer, combine cream cheese, butter, powdered sugar and vanilla extract. Beat until smooth and fluffy. Spread over cinnamon rolls and serve immediately. Enjoy!']}, 
  {name: 'Hoosier Tenderloin', picture: HoosierTenderloin, id: 7, ingredients: ['2 lbs center cut boneloess pork loin', '2 large eggs', '2 cups buttermilk', '2 garlic cloves crushed', 'salt and black pepper to taste', '1/4 teaspoon cayenne pepper', '2 sleeves of saltines', '2 cups instant flour', 'neutral oil for frying', 'hamburger buns', '1/3 cup mayonnaise', '3 tablespoons yellow mustard', 'head of iceberg lettuce shredded', ' 2 tomatoes thinly sliced', '1 red onion thinly sliced', '4 dil pickles thinly sliced'], instructions: ['Cut the pork crosswise into 4 equal pieces. Put each piece flat on a cutting board and slice horizontally almost in half (stop about 1 inch from the other side). Open like a book. Sprinkle each with water, place between 2 pieces of heavy-duty plastic wrap and pound to 1/4 inch thick with a mallet or heavy skillet.', 'Whisk the eggs, buttermilk, garlic, 1 teaspoon each salt and black pepper, and the cayenne in a shallow bowl. Add the pork, cover and refrigerate at least 4 hours or overnight.', 'Pulse the crackers into coarse crumbs in a food processor, then transfer to a shallow dish. Put the flour in another dish. Remove each piece of pork from the marinade, letting the excess drip off. Dredge both sides in the flour, dip in the buttermilk marinade again, then coat with the cracker crumbs.', 'Heat 1/4 to 1/2 inch peanut oil in a large heavy-bottomed skillet over medium-high heat until a deep-fry thermometer registers 360°F Fry the pork in batches until golden and cooked through about 3 minutes per side. Drain on paper towels.', 'Spread both halves of each bun with mayonnaise and mustard. Layer the lettuce, tomatoes and onion on the bottom halves. Add a piece of pork and a few pickle slices. Cover with bun tops.']}, 
  {name: 'Shakshuka', picture: Shakshuka, id: 8, ingredients: ['2 tablespoons olive oil', '1 medium onion diced', '2 reb bell pepper diced and seeded', '4 garlic cloves finely chopped', '2 teaspoons paprika', '1 teaspoon cumin', '1/4 teaspoon chili powder', '1 28-ounce can whole peeled tomatoes', '6 large eggs', 'salt and pepper to taste', '1 small bunch fresh cilantro chopped', '1 small bunch fresh parsley chopped'], instructions: ['Spread both halves of each bun with mayonnaise and mustard. Layer the lettuce, tomatoes and onion on the bottom halves. Add a piece of pork and a few pickle slices. Cover with bun tops.', 'Add garlic and spices and cook an additional minute.', 'Pour the can of tomatoes and juice into the pan and break down the tomatoes using a large spoon. Season with salt and pepper and bring the sauce to a simmer.', 'Use your large spoon to make small wells in the sauce and crack the eggs into each well. Cover the pan and cook for 5-8 minutes, or until the eggs are done to your liking.', 'Garnish with chopped cilantro and parsley.']},
  {name: 'Shrimp Étouffée', picture: ShrimpEtouffee, id: 9, ingredients: ['2 tablespoons butter divided', '1/2 white onion small dice', '1 rib celery small dice', '1 bell pepper small dice', '5 cloves garlic crushed', '1 1/2 tablespoons flour', '2 rip tomatoes puréed', '1/4 cup dry white wine', '2 cups shrimp stock', '3 bay leaves', '3 tablespoons crystal hotsauce', '1 - 2 lbs shrimp', 'white rice for serving', 'green onion for garnish'], instructions: ['In a large pan, heat 1 tablespoon of the butter and sweat the onion, celery, and bell pepper until translucent.', 'Add the garlic and sweat for another 2 minutes.', 'Remove the vegetables from pan.', 'Add the remaining butter and simmer until the butter stops bubbling or is clarified.', 'Add the flour and stir and until a blonde roux is achieved.', 'Add the tomato purée and caramelize.', 'Add the sweated vegetables and the dry white wine.', 'Add the crawfish stock, stirring continually until it comes to a simmer.', 'Add the bay leaf, Tabasco and white pepper.', 'Continue to simmer for 30 minutes.', 'Add the shrimp and bring back to a simmer.', 'Adjust for salt and spice.', 'Plate with rice and serve garnished with green onions.']}
]; 

export {recipes};