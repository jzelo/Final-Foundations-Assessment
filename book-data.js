const bookData1 = [
  
    {
      author: ["Burroughs, Edgar Rice"],
      language: "en",
      subject: [
        "Adventure stories",
        "PZ",
        "Fantasy fiction",
        "Tarzan (Fictitious character) -- Fiction",
        "PS",
        "Jungle animals -- Fiction",
      ],
      title: "The Beasts of Tarzan",
    },
    {
      author: ["Kipling, Rudyard"],
      language: "en",
      subject: [
        "India -- History -- 19th century -- Fiction",
        "Feral children -- Fiction",
        "Animals -- Fiction",
        "Jungles -- Fiction",
        "India -- Fiction",
        "PR",
        "Adventure stories, English",
        "Mowgli (Fictitious character) -- Fiction",
        "Short stories",
        "Jungle animals -- Fiction",
      ],
      title: "The Jungle Book",
    },
    {
      author: ["Sewell, Anna"],
      language: "en",
      subject: [
        "Historical fiction",
        "PZ",
        "PR",
        "Great Britain -- History -- 19th century -- Juvenile fiction",
        "Human-animal relationships -- Juvenile fiction",
        "Horses -- Juvenile fiction",
      ],
      title: "Black Beauty",
    },
    {
      author: ["Lofting, Hugh"],
      language: "en",
      subject: [
        "Fantasy literature",
        "PZ",
        "Human-animal communication -- Juvenile fiction",
        "Animals -- Juvenile fiction",
      ],
      title: "The Story of Doctor Dolittle",
    },
    {
      author: ["Lofting, Hugh"],
      language: "en",
      subject: [
        "PZ",
        "Human-animal communication -- Juvenile fiction",
        "Animals -- Juvenile fiction",
        "Fantasy literature",
        "Voyages and travels -- Juvenile fiction",
      ],
      title: "The Voyages of Doctor Dolittle",
    },
    {
      author: ["Kipling, Rudyard"],
      language: "en",
      subject: [
        "Mowgli (Fictitious character) -- Fiction",
        "India -- Fiction",
        "PR",
        "Jungle animals -- Fiction",
      ],
      title: "The Second Jungle Book",
    },
    {
      author: ["Darwin, Charles"],
      language: "en",
      subject: [
        "Sex differences",
        "Sexual dimorphism (Animals)",
        "QH",
        "Sexual selection in animals",
        "Evolution (Biology)",
        "Human beings -- Origin",
      ],
      title: "The Descent of Man, and Selection in Relation to Sex",
    },
    {
      author: ["Saunders, Marshall"],
      language: "en",
      subject: [
        "Dogs -- Fiction",
        "Didactic fiction",
        "Dog owners -- Fiction",
        "Human-animal relationships -- Fiction",
        "Canada -- Fiction",
        "Animal welfare -- Fiction",
        "PS",
      ],
      title: "Beautiful Joe: An Autobiography",
    },
    {
      author: ["Darwin, Charles"],
      language: "en",
      subject: [
        "Domestic animals",
        "Variation (Biology)",
        "QH",
        "Plants, Cultivated",
      ],
      title: "The Variation of Animals and Plants under Domestication — Volume 1",
    },
    {
      author: ["Darwin, Charles"],
      language: "en",
      subject: [
        "Domestic animals",
        "Variation (Biology)",
        "QH",
        "Plants, Cultivated",
      ],
      title: "The Variation of Animals and Plants under Domestication — Volume 2",
    },
    {
      author: ["Darwin, Charles"],
      language: "en",
      subject: [
        "Domestic animals",
        "Variation (Biology)",
        "QH",
        "Plants, Cultivated",
      ],
      title: "The Variation of Animals and Plants under Domestication",
    },
    {
      author: ["Burgess, Thornton W. (Thornton Waldo)"],
      language: "en",
      subject: ["Deer -- Fiction", "Forest animals -- Fiction", "PZ", "PS"],
      title: "Lightfoot the Deer",
    },
    {
      author: ["Burgess, Thornton W. (Thornton Waldo)"],
      language: "en",
      subject: [
        "Survival -- Fiction",
        "Forest animals -- Fiction",
        "PZ",
        "Forests and forestry -- Fiction",
        "Mice -- Fiction",
        "PS",
      ],
      title: "Whitefoot the Wood Mouse",
    },
    {
      author: ["Garis, Howard Roger"],
      language: "en",
      subject: [
        "Circus animals -- Juvenile fiction",
        "India -- Juvenile fiction",
        "PZ",
        "Elephants -- Juvenile fiction",
      ],
      title: "Umboo, the Elephant",
    },
    {
      author: ["Bailey, Arthur Scott"],
      language: "en",
      subject: [
        "Wild animals as pets -- Juvenile fiction",
        "PZ",
        "Brothers and sisters -- Juvenile fiction",
        "Parent and child -- Juvenile fiction",
        "Conduct of life -- Juvenile fiction",
        "Animals -- Juvenile fiction",
        "Foxes -- Juvenile fiction",
        "Children -- Conduct of life -- Juvenile fiction",
      ],
      title: "The Tale of Tommy Fox",
    },
    {
      author: ["Atwater, Emily Paret"],
      language: "en",
      subject: [
        "PZ",
        "Salmon -- Juvenile literature",
        "Marine animals -- Juvenile literature",
      ],
      title: "How Sammy Went to Coral-Land",
    },
    {
      author: ["Eddy, Velda Allis"],
      language: "en",
      subject: [
        "West (U.S.) -- Juvenile fiction",
        "PZ",
        "Prairie animals -- Juvenile fiction",
        "Christian life -- Juvenile fiction",
        "Prairies -- Juvenile fiction",
        "Farm life -- Juvenile fiction",
      ],
      title: "The Allis Family; or, Scenes of Western Life",
    },
    {
      author: ["Burroughs, Edgar Rice"],
      language: "en",
      subject: [
        "PS",
        "Adventure stories",
        "PZ",
        "Fantasy fiction",
        "Tarzan (Fictitious character) -- Fiction",
        "Jungle animals -- Fiction",
      ],
      title: "The Beasts of Tarzan",
    },
    {
      author: ["Saunders, Marshall"],
      language: "en",
      subject: [
        "Dogs -- Fiction",
        "Didactic fiction",
        "Dog owners -- Fiction",
        "Human-animal relationships -- Fiction",
        "Canada -- Fiction",
        "Animal welfare -- Fiction",
        "PS",
      ],
      title: "Beautiful Joe: An Autobiography",
    },
    {
      author: ["Smith, R. Cadwallader"],
      language: "en",
      subject: [
        "QH",
        "Seashore plants -- Juvenile literature",
        "Marine plants -- Juvenile literature",
        "Seashore animals -- Juvenile literature",
        "Marine animals -- Juvenile literature",
      ],
      title: 'On the Seashore\r\nCassell\'s "Eyes and No Eyes" Series, Book VII',
    },
    {
      author: ["Smith, R. Cadwallader"],
      language: "en",
      subject: ["QL", "Marine animals -- Juvenile literature"],
      title: 'Within the Deep\nCassell\'s "Eyes and No Eyes" Series, Book VIII.',
    },
    {
      author: ["Sewell, Anna"],
      language: "en",
      subject: [
        "Historical fiction",
        "PZ",
        "Great Britain -- History -- 19th century -- Juvenile fiction",
        "Human-animal relationships -- Juvenile fiction",
        "Horses -- Juvenile fiction",
      ],
      title: "Black Beauty, Young Folks' Edition",
    },
    {
      author: ["Burgess, Thornton W. (Thornton Waldo)"],
      language: "en",
      subject: [
        "Forest animals -- Juvenile fiction",
        "PZ",
        "Squirrels -- Juvenile fiction",
      ],
      title: "Happy Jack",
    },
    {
      author: ["Brown, Abbie Farwell"],
      language: "en",
      subject: [
        "Forest animals -- Juvenile fiction",
        "PZ",
        "Runaway children -- Juvenile fiction",
        "Hunters -- Juvenile fiction",
      ],
      title: "John of the Woods",
    },
    {
      author: ["Potter, Beatrix"],
      language: "en",
      subject: [
        "Ducks -- Juvenile fiction",
        "PZ",
        "Domestic animals -- Juvenile fiction",
        "Foxes -- Juvenile fiction",
        "Dogs -- Juvenile fiction",
      ],
      title: "The Tale of Jemima Puddle-Duck",
    },
    {
      author: ["Gilbert, Rosa M. (Rosa Mulholland)"],
      language: "en",
      subject: [
        "PZ",
        "Social classes -- Juvenile fiction",
        "Kindness -- Juvenile fiction",
        "Orphans -- Juvenile fiction",
        "Adopted children -- Juvenile fiction",
        "Dogs -- Juvenile fiction",
        "Human-animal relationships -- Juvenile fiction",
      ],
      title: "Hetty Gray\r\nNobody's Bairn",
    },
    {
      author: ["Amerel"],
      language: "en",
      subject: [
        "Family -- Juvenile fiction",
        "PZ",
        "Domestic animals -- Juvenile fiction",
        "Children's stories, American",
        "Uncles -- Juvenile fiction",
        "Children -- Conduct of life -- Juvenile fiction",
      ],
      title: "The Summer Holidays: A Story for Children",
    },
    {
      author: ["Hope, Laura Lee"],
      language: "en",
      subject: [
        "Stuffed animals (Toys) -- Juvenile fiction",
        "Teddy bears -- Juvenile fiction",
        "PZ",
      ],
      title: "The Story of a Plush Bear",
    },
    {
      author: ["O'Donnell, Elliott"],
      language: "en",
      subject: ["Animal ghosts", "Extrasensory perception in animals", "BF"],
      title: "Animal Ghosts; Or, Animal Hauntings and the Hereafter",
    },
    {
      author: ["Butler, Samuel"],
      language: "en",
      subject: [
        "Romanes, George John, 1848-1894. Mental evolution in animals",
        "English literature -- 19th century -- Miscellanea",
        "PR",
        "B",
      ],
      title:
        "Selections from Previous Works\r\nWith Remarks on Romanes' Mental Evolution in Animals, and a Psalm of Montreal",
    },
    {
      author: ["Sewell, Anna"],
      language: "en",
      subject: [
        "Historical fiction",
        "PZ",
        "PR",
        "Great Britain -- History -- 19th century -- Juvenile fiction",
        "Human-animal relationships -- Juvenile fiction",
        "Horses -- Juvenile fiction",
      ],
      title: "Black Beauty - The Autobiography of a Horse",
    },
    {
      author: ["Ford, Sewell"],
      language: "en",
      subject: [
        "United States -- Social life and customs -- 20th century -- Fiction",
        "Horses -- Fiction",
        "PS",
        "Human-animal relationships -- Fiction",
      ],
      title: "Horses Nine\nStories of Harness and Saddle",
    },
    {
      author: ["Allen, Lewis Falley"],
      language: "en",
      subject: ["Domestic animals", "NA", "Architecture, Domestic"],
      title:
        "Rural Architecture\nBeing a Complete Description of Farm Houses, Cottages, and Out Buildings",
    },
    {
      author: ["Russell, E. S. (Edward Stuart)"],
      language: "en",
      subject: [
        "QL",
        "Morphology (Animals) -- History",
        "Anatomy, Comparative -- History",
      ],
      title:
        "Form and Function: A Contribution to the History of Animal Morphology",
    },
    {
      author: ["Bailey, Arthur Scott"],
      language: "en",
      subject: [
        "PZ",
        "Conduct of life -- Juvenile fiction",
        "Animals -- Juvenile fiction",
        "Moles (Animals) -- Juvenile fiction",
      ],
      title: "The Tale of Grandfather Mole",
    },
    {
      author: ["Ballantyne, R. M. (Robert Michael)"],
      language: "en",
      subject: [
        "PZ",
        "West (U.S.) -- Discovery and exploration -- Juvenile fiction",
        "Survival skills -- Juvenile fiction",
        "Indians of North America -- Juvenile fiction",
        "Hunters -- Juvenile fiction",
        "Human-animal relationships -- Juvenile fiction",
        "Dogs -- Juvenile fiction",
        "Adventure and adventurers -- Juvenile fiction",
      ],
      title: "The Dog Crusoe and his Master",
    },
    {
      author: ["Ballantyne, R. M. (Robert Michael)"],
      language: "en",
      subject: [
        "PZ",
        "Robinsonades",
        "Shipwreck survival -- Juvenile fiction",
        "Dog owners -- Juvenile fiction",
        "Human-animal relationships -- Juvenile fiction",
        "Castaways -- Juvenile fiction",
      ],
      title: "Jarwin and Cuffy",
    },
    {
      author: ["Gautier, Théophile"],
      language: "fr",
      subject: ["Domestic animals", "PQ", "Animals -- Biography"],
      title: "Ménagerie intime",
    },
    {
      author: ["Anonymous"],
      language: "en",
      subject: ["Domestic animals -- Juvenile literature", "SF"],
      title: "Tame Animals",
    },
    {
      author: ["Roscoe, William", "Dorset, Catherine Ann Turner"],
      language: "en",
      subject: [
        "PZ",
        "Birds -- Juvenile poetry",
        "Zoo animals -- Juvenile poetry",
        "Insects -- Juvenile poetry",
        "Animals -- Juvenile poetry",
      ],
      title: "The Peacock 'At Home' AND The Butterfly's Ball AND The Fancy Fair",
    },
    {
      author: ["Darwin, Charles"],
      language: "en",
      subject: [
        "Domestic animals",
        "Variation (Biology)",
        "QH",
        "Plants, Cultivated",
      ],
      title: "The Variation of Animals and Plants Under Domestication, Vol. I.",
    },
    {
      author: ["Shaler, Nathaniel Southgate"],
      language: "en",
      subject: ["Domestic animals", "SF"],
      title:
        "Domesticated Animals\nTheir Relation to Man and to his Advancement in Civilization",
    },
    {
      author: ["Lofting, Hugh"],
      language: "en",
      subject: [
        "Fantasy literature",
        "PZ",
        "Animals -- Juvenile fiction",
        "Human-animal communication -- Juvenile fiction",
      ],
      title: "The Story of Doctor Dolittle",
    },
    {
      author: ["Leslie, Madeline"],
      language: "en",
      subject: [
        "Pets -- Social aspects -- Juvenile fiction",
        "PZ",
        "Natural history -- Juvenile fiction",
        "Children -- Conduct of life -- Juvenile fiction",
        "Children and animals -- Juvenile fiction",
        "Dogs -- Juvenile fiction",
      ],
      title: "Minnie's Pet Dog",
    },
    {
      author: ["Leslie, Madeline"],
      language: "en",
      subject: [
        "Pets -- Social aspects -- Juvenile fiction",
        "PZ",
        "Natural history -- Juvenile fiction",
        "Parrots -- Juvenile fiction",
        "Children -- Conduct of life -- Juvenile fiction",
        "Children and animals -- Juvenile fiction",
      ],
      title: "Minnie's Pet Parrot",
    },
    {
      author: ["Leslie, Madeline"],
      language: "en",
      subject: [
        "Pets -- Social aspects -- Juvenile fiction",
        "PZ",
        "Monkeys -- Juvenile fiction",
        "Natural history -- Juvenile fiction",
        "Children -- Conduct of life -- Juvenile fiction",
        "Children and animals -- Juvenile fiction",
      ],
      title: "Minnie's Pet Monkey",
    },
    {
      author: ["Leslie, Madeline"],
      language: "en",
      subject: [
        "Pets -- Social aspects -- Juvenile fiction",
        "PZ",
        "Lambs -- Juvenile fiction",
        "Natural history -- Juvenile fiction",
        "Children -- Conduct of life -- Juvenile fiction",
        "Children and animals -- Juvenile fiction",
      ],
      title: "Minnie's Pet Lamb",
    },
    {
      author: ["Leslie, Madeline"],
      language: "en",
      subject: [
        "Pets -- Social aspects -- Juvenile fiction",
        "PZ",
        "Shetland pony -- Juvenile fiction",
        "Natural history -- Juvenile fiction",
        "Children -- Conduct of life -- Juvenile fiction",
        "Children and animals -- Juvenile fiction",
        "Horses -- Juvenile fiction",
      ],
      title: "Minnie's Pet Horse",
    },
    {
      author: ["Anonymous"],
      language: "en",
      subject: [
        "PZ",
        "Children's poetry",
        "Children -- Social life and customs -- Juvenile fiction",
        "Children -- Conduct of life -- Juvenile fiction",
        "Children and animals -- Juvenile fiction",
      ],
      title:
        "Phebe, the Blackberry Girl\nUncle Thomas's Stories for Good Children",
    },
    {
      author: ["Leslie, Madeline"],
      language: "en",
      subject: [
        "Pets -- Social aspects -- Juvenile fiction",
        "PZ",
        "Natural history -- Juvenile fiction",
        "Cats -- Juvenile fiction",
        "Children -- Conduct of life -- Juvenile fiction",
        "Children and animals -- Juvenile fiction",
      ],
      title: "Minnie's Pet Cat",
    },
    {
      author: ["Darwin, Charles"],
      language: "en",
      subject: [
        "Domestic animals",
        "Variation (Biology)",
        "QH",
        "Plants, Cultivated",
      ],
      title:
        "The Variation of Animals and Plants Under Domestication, Volume II (of 2)",
    },
    {
      author: ["Gautier, Théophile"],
      language: "en",
      subject: ["Domestic animals", "PQ", "Animals -- Biography", "QL"],
      title:
        "My Private Menagerie\nfrom The Works of Theophile Gautier Volume 19",
    },
    {
      author: ["Baker, Rollin H. (Rollin Harold)"],
      language: "en",
      subject: ["Moles (Animals)", "QH"],
      title: "Two New Moles (Genus Scalopus) from Mexico and Texas",
    },
    {
      author: ["Otis, James"],
      language: "en",
      subject: [
        "Country life -- Juvenile fiction",
        "People with disabilities -- Juvenile fiction",
        "Friendship -- Juvenile fiction",
        "Boys -- Juvenile fiction",
        "PZ",
        "Adventure stories",
        "Gardens -- Juvenile fiction",
        "Kindness -- Juvenile fiction",
        "Aunts -- Juvenile fiction",
        "Attitude change -- Juvenile fiction",
        "Girls -- Juvenile fiction",
        "Runaway children -- Juvenile fiction",
        "Empathy -- Juvenile fiction",
        "Human-animal relationships -- Juvenile fiction",
        "Inheritance and succession -- Juvenile fiction",
        "Dogs -- Juvenile fiction",
      ],
      title: "Aunt Hannah and Seth",
    },
    {
      author: ["Jackson, Helen Hunt"],
      language: "en",
      subject: [
        "Pets -- Juvenile literature",
        "PZ",
        "Cats -- Juvenile literature",
        "Euthanasia of animals -- Juvenile literature",
      ],
      title:
        "Letters from a Cat\r\nPublished by Her Mistress for the Benefit of All Cats and the Amusement of Little Children",
    },
    {
      author: ["Deming, Therese O. (Therese Osterheld)"],
      language: "en",
      subject: [
        "Human-animal relationships -- Juvenile fiction",
        "Indian children -- North America -- Juvenile fiction",
        "PZ",
      ],
      title: "Indian Child Life",
    },
    {
      author: ["Fanny, Aunt"],
      language: "en",
      subject: [
        "Country life -- Juvenile fiction",
        "PZ",
        "Readers",
        "Animal welfare -- Juvenile fiction",
        "Conduct of life -- Juvenile fiction",
        "Human-animal relationships -- Juvenile fiction",
        "Children -- Conduct of life -- Juvenile fiction",
        "Dogs -- Juvenile fiction",
      ],
      title: "The Third Little Pet Book, with the Tale of Mop and Frisk",
    },
    {
      author: ["Garner, R. L. (Richard Lynch)"],
      language: "en",
      subject: ["Monkeys", "Speech", "QL", "Sound production by animals"],
      title: "The Speech of Monkeys",
    },
    {
      author: ["Harding, A. R. (Arthur Robert)"],
      language: "en",
      subject: ["Fur-bearing animals", "SF"],
      title:
        "Fur Farming\r\nA book of Information about Fur Bearing Animals, Enclosures, Habits, Care, etc.",
    },
    {
      author: ["Allen, Richard Lamb"],
      language: "en",
      subject: ["Domestic animals", "SF"],
      title:
        "Domestic Animals\r\nHistory and description of the horse, mule, cattle, sheep, swine, poultry and farm dogs; with directions for their management, breeding, crossing, rearing, feeding, and preparation for a profitable market; also their diseases and remedies. Together with full directions for the management of the dairy.",
    },
    {
      author: ["Reid, Mayne"],
      language: "en",
      subject: [
        "National characteristics -- Juvenile fiction",
        "Africa, Southern -- Description and travel -- Juvenile fiction",
        "Camping -- Juvenile fiction",
        "PZ",
        "Wilderness survival -- Juvenile fiction",
        "Brothers -- Juvenile fiction",
        "Outdoor life -- Juvenile fiction",
        "Natural history -- Juvenile fiction",
        "Big game hunting -- Africa, Southern -- Juvenile fiction",
        "Big game animals -- Juvenile fiction",
        "Adventure and adventurers -- Juvenile fiction",
      ],
      title:
        "The Young Yagers: A Narrative of Hunting Adventures in Southern Africa",
    },
    {
      author: ["Darwin, Charles"],
      language: "en",
      subject: [
        "Sex differences",
        "Sexual dimorphism (Animals)",
        "QH",
        "Sexual selection in animals",
        "Evolution (Biology)",
        "Human beings -- Origin",
      ],
      title: "The Descent of Man and Selection in Relation to Sex, Vol. I",
    },
    {
      author: ["Reid, Mayne"],
      language: "en",
      subject: [
        "PZ",
        "Ship captains -- Juvenile fiction",
        "Birds -- Juvenile fiction",
        "South America -- Juvenile fiction",
        "Brothers -- Juvenile fiction",
        "Mines and mineral resources -- Juvenile fiction",
        "Storms -- Juvenile fiction",
        "Natural history -- Juvenile fiction",
        "Orphans -- Juvenile fiction",
        "Ants -- Juvenile fiction",
        "Snakes -- Juvenile fiction",
        "Forest animals -- Juvenile fiction",
        "Castaways -- Juvenile fiction",
        "Adventure and adventurers -- Juvenile fiction",
        "Voyages and travels -- Juvenile fiction",
      ],
      title: "Afloat in the Forest; Or, A Voyage among the Tree-Tops",
    },
    {
      author: ["Agassiz, Elizabeth Cabot Cary", "Agassiz, Alexander"],
      language: "en",
      subject: [
        "QL",
        "Marine animals -- Massachusetts -- Massachusetts Bay",
        "Seashore biology -- Massachusetts -- Massachusetts Bay",
      ],
      title:
        "Seaside Studies in Natural History. Marine Animals of Massachusetts Bay. Radiates.",
    },
    {
      author: ["Phelps, Elizabeth Stuart"],
      language: "en",
      subject: [
        "Vivisection -- Fiction",
        "Children with disabilities -- Fiction",
        "Dogs -- Fiction",
        "Human-animal relationships -- Fiction",
        "Cruelty -- Fiction",
        "Animal welfare -- Fiction",
        "PS",
      ],
      title: "Loveliness: A Story",
    },
    {
      author: ["Kipling, Rudyard"],
      language: "en",
      subject: [
        "India -- History -- 19th century -- Fiction",
        "Feral children -- Fiction",
        "Jungles -- Fiction",
        "Animals -- Fiction",
        "India -- Fiction",
        "PR",
        "Adventure stories, English",
        "Mowgli (Fictitious character) -- Fiction",
        "Short stories",
        "Jungle animals -- Fiction",
      ],
      title: "The Jungle Book",
    },
    {
      author: ["Dralet, M. (Etienne François)"],
      language: "fr",
      subject: ["Moles (Animals)", "SB"],
      title:
        "L'art du taupier; ou, méthode amusante et infaillible de prendre les taupes",
    },
    {
      author: ["Annandale, Nelson"],
      language: "en",
      subject: [
        "QL",
        "Freshwater animals -- Sri Lanka",
        "Freshwater animals -- Burma",
        "Freshwater animals -- India",
      ],
      title: "Freshwater Sponges, Hydroids & Polyzoa",
    },
    {
      author: ["Darwin, Charles"],
      language: "en",
      subject: [
        "Sex differences",
        "Sexual dimorphism (Animals)",
        "QH",
        "Sexual selection in animals",
        "Evolution (Biology)",
        "Human beings -- Origin",
      ],
      title:
        "The Descent of Man and Selection in Relation to Sex, Vol. II (1st Edition)",
    },
    {
      author: ["Lee, Henry"],
      language: "en",
      subject: ["QL", "Cephalopoda", "Marine animals"],
      title: "Sea Monsters Unmasked, and Sea Fables Explained",
    },
    {
      author: ["Slack, Henry James"],
      language: "en",
      subject: [
        "QL",
        "Pond animals",
        "Microscopy",
        "Freshwater animals -- England",
      ],
      title:
        "Marvels of Pond-life\r\nOr, A Year's Microscopic Recreations Among the Polyps, Infusoria, Rotifers, Water-bears and Polyzoa",
    },
    {
      author: ["Busch, Wilhelm"],
      language: "en",
      subject: [
        "Human-animal relationships -- Juvenile poetry",
        "Wit and humor, Juvenile",
        "Conduct of life -- Juvenile poetry",
        "PZ",
        "Pets -- Juvenile poetry",
        "Children -- Conduct of life -- Juvenile poetry",
        "Animal welfare -- Juvenile poetry",
        "Dogs -- Juvenile poetry",
        "Brothers -- Juvenile poetry",
        "PT",
      ],
      title: "Plish and Plum",
    },
    {
      author: ["Stables, Gordon"],
      language: "en",
      subject: [
        "PZ",
        "Animal welfare -- Juvenile fiction",
        "Pets -- Juvenile fiction",
        "Animals -- Juvenile fiction",
        "Loyalty -- Juvenile fiction",
        "Human-animal relationships -- Juvenile fiction",
      ],
      title:
        "Aileen Aroon, A Memoir\nWith other Tales of Faithful Friends and Favourites",
    },
    {
      author: ["Kipling, Rudyard"],
      language: "en",
      subject: [
        "Mowgli (Fictitious character) -- Fiction",
        "India -- Fiction",
        "PR",
        "Jungle animals -- Fiction",
      ],
      title: "The Second Jungle Book",
    },
    {
      author: ["Waugh, Arthur"],
      language: "en",
      subject: ["Domestic animals -- Juvenile poetry", "PZ"],
      title: "The Square Book of Animals",
    },
    {
      author: ["Kipling, John Lockwood"],
      language: "en",
      subject: [
        "Human-animal relationships -- India",
        "Animals -- Folklore",
        "DS",
        "Domestic animals -- India",
        "QL",
        "India -- Social life and customs",
      ],
      title:
        "Beast and Man in India\nA Popular Sketch of Indian Animals in their Relations with the People",
    },
    {
      author: ["Pierson, Clara Dillingham"],
      language: "en",
      subject: [
        "PZ",
        "Poultry -- Juvenile fiction",
        "Brothers and sisters -- Juvenile fiction",
        "Parent and child -- Juvenile fiction",
        "Farmers -- Juvenile fiction",
        "Families -- Juvenile fiction",
        "Farm life -- Juvenile fiction",
        "Human-animal relationships -- Juvenile fiction",
      ],
      title: "Tales of a Poultry Farm",
    },
    {
      author: ["Everett-Green, Evelyn"],
      language: "en",
      subject: [
        "Country life -- Juvenile fiction",
        "Friendship -- Juvenile fiction",
        "Adventure stories",
        "Boys -- Juvenile fiction",
        "PZ",
        "Voyages and travels -- Juvenile fiction",
        "Domestic animals -- Juvenile fiction",
        "Interpersonal relations -- Juvenile fiction",
        "Youth -- Conduct of life -- Juvenile fiction",
        "Aunts -- Juvenile fiction",
        "Vacations -- Juvenile fiction",
        "Attitude change -- Juvenile fiction",
        "Cousins -- Juvenile fiction",
        "Mothers and daughters -- Juvenile fiction",
        "Conduct of life -- Juvenile fiction",
        "Obedience -- Juvenile fiction",
        "Orphans -- Juvenile fiction",
      ],
      title: "Esther's Charge: A Story for Girls",
    },
    {
      author: ["Davenport, Emma"],
      language: "en",
      subject: [
        "Human-animal relationships -- Juvenile fiction",
        "Children's stories",
        "PZ",
        "Pets -- Juvenile fiction",
      ],
      title: "Live Toys; Or, Anecdotes of Our Four-Legged and Other Pets",
    },
    {
      author: ["Molesworth, Mrs."],
      language: "en",
      subject: [
        "Fantasy fiction, English",
        "PZ",
        "Human-animal communication -- Juvenile fiction",
        "Birds -- Juvenile fiction",
      ],
      title: "The Wood-Pigeons and Mary",
    },
    {
      author: ["Sindelar, Joseph C. (Joseph Charles)"],
      language: "en",
      subject: [
        "Children's stories",
        "PZ",
        "Readers",
        "Animals -- Juvenile fiction",
        "Human-animal relationships -- Juvenile fiction",
      ],
      title: "Father Thrift and His Animal Friends",
    },
    {
      author: ["Schmid, Christoph von"],
      language: "de",
      subject: [
        "Family -- Juvenile fiction",
        "PZ",
        "Lambs -- Juvenile fiction",
        "Honesty -- Juvenile fiction",
        "Christian life -- Juvenile fiction",
        "Farm life -- Juvenile fiction",
        "Human-animal relationships -- Juvenile fiction",
      ],
      title: "Das Lämmchen",
    },
    {
      author: ["Arnold, Augusta Foote"],
      language: "en",
      subject: [
        "Marine plants",
        "Marine algae",
        "Seashore biology",
        "QH",
        "Marine animals",
      ],
      title:
        "The Sea-beach at Ebb-tide\r\nA Guide to the Study of the Seaweeds and the Lower Animal Life Found Between Tide-marks",
    },
    {
      author: ["Fenn, George Manville"],
      language: "en",
      subject: [
        "Friendship -- Juvenile fiction",
        "Adventure stories",
        "PZ",
        "Fathers and sons -- Juvenile fiction",
        "Courage -- Juvenile fiction",
        "Youth -- Conduct of life -- Juvenile fiction",
        "Natural history -- Juvenile fiction",
        "Dangerous animals -- Juvenile fiction",
        "Princes -- Juvenile fiction",
        "Thailand -- Juvenile fiction",
        "Snakes -- Juvenile fiction",
        "Conduct of life -- Juvenile fiction",
        "Voyages and travels -- Juvenile fiction",
      ],
      title: "Jungle and Stream; Or, The Adventures of Two Boys in Siam",
    },
    {
      author: ["Kipling, Rudyard"],
      language: "fi",
      subject: [
        "India -- History -- 19th century -- Fiction",
        "Feral children -- Fiction",
        "Jungles -- Fiction",
        "Animals -- Fiction",
        "India -- Fiction",
        "PR",
        "Adventure stories, English",
        "Mowgli (Fictitious character) -- Fiction",
        "Short stories",
        "Jungle animals -- Fiction",
      ],
      title: "Viidakkopoika",
    },
    {
      author: ["Dunham, Curtis", "Herford, Oliver"],
      language: "en",
      subject: [
        "Friendship -- Juvenile fiction",
        "Captive wild animals -- Juvenile fiction",
        "PZ",
        "Zoo animals -- Juvenile fiction",
        "Children with disabilities -- Juvenile fiction",
        "Animals -- Juvenile fiction",
        "Zoos -- Juvenile fiction",
        "Happiness -- Juvenile fiction",
        "Conduct of life -- Juvenile fiction",
        "Children -- Conduct of life -- Juvenile fiction",
      ],
      title: "Two in a Zoo",
    },
    {
      author: ["Chun, Carl"],
      language: "de",
      subject: ["Deutsche Tiefsee-Expedition (1898-1999)", "Q", "Marine animals"],
      title:
        "Aus den Tiefen des Weltmeeres\nSchilderungen von der deutschen Tiefsee-Expedition",
    },
    {
      author: ["Burgess, Thornton W. (Thornton Waldo)"],
      language: "en",
      subject: [
        "PZ",
        "Northern bobwhite -- Juvenile fiction",
        "Animals -- Juvenile fiction",
        "Human-animal relationships -- Juvenile fiction",
        "Birds -- Juvenile fiction",
      ],
      title: "The Adventures of Bob White",
    },
    {
      author: ["Figuier, Louis"],
      language: "en",
      subject: ["QL", "Ocean", "Marine animals"],
      title:
        "The Ocean World: Being a Description of the Sea and Its Living Inhabitants.",
    },
    {
      author: ["McArthur, Peter"],
      language: "en",
      subject: ["S", "Domestic animals"],
      title: "The Red Cow and Her Friends",
    },
    {
      author: ["Scott, Matthew"],
      language: "en",
      subject: [
        "Circus animals -- United States",
        "Scott, Matthew, 1834-",
        "Jumbo (Elephant)",
        "QL",
        "Elephants",
        "Animal trainers -- United States -- Biography",
      ],
      title:
        "Autobiography of Matthew Scott, Jumbo's Keeper; Also Jumbo's Biography, by the same Author",
    },
    {
      author: ["Young, Stanley Paul", "Redington, Paul G. (Paul Goodwin)"],
      language: "en",
      subject: [
        "Rodents -- Control -- United States",
        "SK",
        "S",
        "Predatory animals -- Control -- United States",
      ],
      title:
        "Information for the Guidance of Field Men and Cooperators of the Bureau of Biological Survey Engaged in the Control of Injurious Rodents and Predatory Animals",
    },
    {
      author: ["Wesselhoeft, Lily F."],
      language: "en",
      subject: [
        "Friendship -- Juvenile fiction",
        "PZ",
        "Fires -- Juvenile fiction",
        "Sick -- Juvenile fiction",
        "Fire fighters -- Juvenile fiction",
        "Blind children -- Juvenile fiction",
        "Parent and child -- Juvenile fiction",
        "Human-animal relationships -- Juvenile fiction",
        "Conduct of life -- Juvenile fiction",
        "Dogs -- Juvenile fiction",
        "Children -- Conduct of life -- Juvenile fiction",
      ],
      title: "Jack, the Fire Dog",
    },
    {
      author: ["Gosse, Philip Henry"],
      language: "en",
      subject: ["QL", "Marine animals -- Great Britain"],
      title: "A Year at the Shore",
    },
    {
      author: ["Haeckel, Ernst"],
      language: "de",
      subject: [
        "Natural history",
        "Bursa (Turkey) -- Description and travel",
        "Morphology (Animals)",
        "Corals",
        "QH",
        "Heredity",
        "Human beings -- Origin",
      ],
      title: "Natur und Mensch\nSechs Abschnitte aus Werken von Ernst Haeckel",
    },
    {
      author: ["Anastasi, Peter A.", "Hines, Bob"],
      language: "en",
      subject: ["QL", "Urban animals", "Birds"],
      title: "Fifty Birds of Town and City",
    },
    {
      author: ["Sutton, Lee"],
      language: "en",
      subject: [
        "Boys -- Juvenile fiction",
        "Venus (Planet) -- Juvenile fiction",
        "PZ",
        "Science fiction",
        "Extraterrestrial beings -- Juvenile fiction",
        "Pets -- Juvenile fiction",
        "Human-animal relationships -- Juvenile fiction",
      ],
      title: "Venus Boy",
    },
    {
      author: ["Selous, Edmund"],
      language: "en",
      subject: ["QL", "Birds -- Scotland -- Shetland", "Seals (Animals)"],
      title:
        "The Bird Watcher in the Shetlands, with Some Notes on Seals—and Digressions",
    },
    {
      author: ["Anonymous"],
      language: "en",
      subject: [
        "Conduct of life -- Juvenile fiction",
        "PZ",
        "Chickens -- Juvenile fiction",
        "Domestic animals -- Juvenile fiction",
      ],
      title:
        "The Surprising and Singular Adventures of a Hen as Related by Herself to Her Family of Chickens",
    },
    {
      author: ["Shipley, A. E. (Arthur Everett), Sir"],
      language: "en",
      subject: [
        "University of Cambridge",
        "Zebras",
        "Flies as carriers of disease",
        "Zoology",
        "QL",
        "Pearls",
        "Malaria",
        "Pasteur, Louis, 1822-1895",
        "Fisheries -- Great Britain",
        "Marine animals",
      ],
      title: "Pearls & Parasites",
    },
    {
      author: ["Harper, John"],
      language: "en",
      subject: ["QL", "Animal behavior", "Marine animals -- Juvenile literature"],
      title: "Glimpses of Ocean Life; Or, Rock-Pools and the Lessons they Teach",
    },
    {
      author: ["Reed, Myrtle"],
      language: "en",
      subject: [
        "Children's stories",
        "Wit and humor, Juvenile",
        "PZ",
        "Fantasy fiction",
        "Animals -- Juvenile fiction",
        "Human-animal relationships -- Juvenile fiction",
        "Conduct of life -- Juvenile fiction",
        "Children -- Conduct of life -- Juvenile fiction",
        "Animals, Mythical -- Juvenile fiction",
      ],
      title: "The Book of Clever Beasts: Studies in Unnatural History",
    },
    {
      author: ["Kipling, Rudyard"],
      language: "fr",
      subject: [
        "India -- History -- 19th century -- Fiction",
        "Feral children -- Fiction",
        "Animals -- Fiction",
        "Jungles -- Fiction",
        "India -- Fiction",
        "PR",
        "Adventure stories, English",
        "Mowgli (Fictitious character) -- Fiction",
        "Short stories",
        "Jungle animals -- Fiction",
      ],
      title: "Le livre de la Jungle",
    },
    {
      author: ["Dodge, Natt N. (Natt Noyes)"],
      language: "en",
      subject: [
        "QL",
        "Desert animals -- Southwest, New",
        "Poisonous animals -- Southwest, New",
      ],
      title: "Poisonous Dwellers of the Desert",
    },
    {
      author: ["Garis, Howard Roger"],
      language: "en",
      subject: [
        "Children's stories",
        "Uncle Wiggily (Fictitious character) -- Juvenile fiction",
        "PZ",
        "Insects -- Juvenile fiction",
        "Rabbits -- Juvenile fiction",
        "Animals -- Juvenile fiction",
        "Foxes -- Juvenile fiction",
        "Seashore -- Juvenile fiction",
        "Seashore animals -- Juvenile fiction",
        "Birds -- Juvenile fiction",
      ],
      title: "Uncle Wiggily's Fortune",
    },
    {
      author: ["Thompson, D'Arcy Wentworth"],
      language: "en",
      subject: ["QP", "Growth", "QH", "Morphology (Animals)"],
      title: "On Growth and Form",
    },
    {
      author: ["Oxley, J. Macdonald (James Macdonald)"],
      language: "en",
      subject: [
        "PZ",
        "Brothers and sisters -- Juvenile fiction",
        "Circus performers -- Juvenile fiction",
        "Circus animals -- Juvenile fiction",
        "Children -- Juvenile fiction",
        "Orphans -- Juvenile fiction",
      ],
      title: "The Family on Wheels",
    },
    {
      author: ["Mendel, Rosalie G."],
      language: "en",
      subject: [
        "QL",
        "Fishes -- Juvenile fiction",
        "Seashore animals -- Juvenile literature",
        "Marine animals -- Juvenile literature",
      ],
      title: "My Book of Ten Fishes",
    },
    {
      author: ["Zell, Th."],
      language: "de",
      subject: ["Domestic animals", "Animal behavior", "SF"],
      title: "Unsere Haustiere vom Standpunkte ihrer wilden Verwandten",
    },
    {
      author: ["Trowbridge, J. T. (John Townsend)"],
      language: "en",
      subject: [
        "Treasure troves -- Juvenile fiction",
        "PZ",
        "Boys -- Conduct of life -- Juvenile fiction",
        "Truthfulness and falsehood -- Juvenile fiction",
        "Farm life -- Juvenile fiction",
        "Human-animal relationships -- Juvenile fiction",
        "Conduct of life -- Juvenile fiction",
        "Dogs -- Juvenile fiction",
        "Trials -- Juvenile fiction",
      ],
      title: "A Chance for Himself; or, Jack Hazard and His Treasure",
    },
    {
      author: ["Dunham, Curtis"],
      language: "en",
      subject: [
        "Human-animal relationships -- Fiction",
        "Country life -- Fiction",
        "Livestock -- Fiction",
        "PS",
      ],
      title: "Gambolling with Galatea: a Bucolic Romance",
    },
    {
      author: ["Walsh, George Ethelbert"],
      language: "en",
      subject: [
        "Animal behavior -- Juvenile fiction",
        "Circus animals -- Juvenile fiction",
        "Bears -- Juvenile fiction",
        "PZ",
      ],
      title: "Buster the Big Brown Bear",
    },
    {
      author: ["Tracy, Louis"],
      language: "en",
      subject: [
        "PZ",
        "Domestic animals -- Juvenile fiction",
        "England -- Juvenile fiction",
        "Families -- Juvenile fiction",
        "Girls -- Juvenile fiction",
        "Mystery fiction",
      ],
      title: "Minkie",
    },
    {
      author: ["Lofting, Hugh"],
      language: "en",
      subject: [
        "PZ",
        "Human-animal communication -- Juvenile fiction",
        "Fantasy fiction",
        "Africa, West -- Juvenile fiction",
        "Animals -- Juvenile fiction",
      ],
      title: "Doctor Dolittle's Post Office",
    },
    {
      author: ["Bader, Robert N.", "Coxwell, Donald J.", "Johnson, Tom R."],
      language: "en",
      subject: ["QL", "Reptiles", "Amphibians", "Captive wild animals"],
      title: "Amphibians and Reptiles in Captivity",
    },
    {
      author: ["Anonymous"],
      language: "en",
      subject: [
        "PZ",
        "Swine -- Juvenile fiction",
        "Conduct of life -- Juvenile fiction",
        "Human-animal relationships -- Juvenile fiction",
        "Children -- Conduct of life -- Juvenile fiction",
        "Children and animals -- Juvenile fiction",
      ],
      title: "The Conceited Pig",
    },
    {
      author: ["Barnum, Richard"],
      language: "en",
      subject: [
        "PZ",
        "Animals -- Juvenile fiction",
        "Pet loss -- Juvenile fiction",
        "Children and animals -- Juvenile fiction",
        "Dogs -- Juvenile fiction",
      ],
      title: "Don, a Runaway Dog: His Many Adventures",
    },
    {
      author: ["Willard, Charles Dwight"],
      language: "en",
      subject: [
        "Humorous stories",
        "Human-animal relationships -- Fiction",
        "British -- India -- Fiction",
        "Elephants -- Fiction",
        "Education -- Fiction",
        "PS",
      ],
      title: "The Fall of Ulysses: An Elephant Story",
    },
    {
      author: ["Manning, William"],
      language: "en",
      subject: [
        "PZ",
        "Zoo animals -- Juvenile poetry",
        "Zoos -- Juvenile poetry",
      ],
      title: "A Child's Dream of the Zoo",
    },
    {
      author: ["Hartwig, G. (Georg)"],
      language: "en",
      subject: [
        "Marine plants",
        "Animal behavior",
        "GC",
        "QH",
        "QL",
        "Discoveries in geography -- History",
        "Discoveries in geography",
        "Ocean",
        "Marine animals",
      ],
      title:
        "The Sea and Its Living Wonders\r\nA Popular Account of the Marvels of the Deep and of the Progress of Martime Discovery from the Earliest Ages to the Present Time",
    },
    {
      author: ["Sewell, Anna"],
      language: "fi",
      subject: [
        "Historical fiction",
        "PZ",
        "Great Britain -- History -- 19th century -- Juvenile fiction",
        "Human-animal relationships -- Juvenile fiction",
        "Horses -- Juvenile fiction",
      ],
      title: "Pulska Musta: Hevosen elämänvaiheet, sen itsensä kertomat",
    },
    {
      author: ["Anonymous"],
      language: "en",
      subject: ["Domestic animals -- Juvenile literature", "PZ"],
      title: "Domestic animals: a story book for children",
    },
    {
      author: ["Morris, Charles"],
      language: "en",
      subject: ["Domestic animals", "GT", "Manners and customs"],
      title: "Home Life in All Lands—Book III—Animal Friends and Helpers",
    },
    {
      author: ["Carrington, Edith"],
      language: "en",
      subject: [
        "Children's stories",
        "PZ",
        "Animal welfare -- Juvenile fiction",
        "Horses -- Juvenile fiction",
        "Cruelty -- Juvenile fiction",
        "Human-animal relationships -- Juvenile fiction",
        "Conduct of life -- Juvenile fiction",
        "Children -- Conduct of life -- Juvenile fiction",
      ],
      title: "Poor Blossom: The Story of a Horse",
    },
    {
      author: ["Reinhardt, Ludwig"],
      language: "de",
      subject: ["Domestic animals -- History", "SF", "Livestock -- History"],
      title: "Kulturgeschichte der Nutztiere",
    },
    {
      author: ["Anonymous"],
      language: "en",
      subject: [
        "Picture books for children",
        "PZ",
        "Children's stories",
        "Domestic animals -- Juvenile fiction",
      ],
      title: "Familiar Animals",
    },
    {
      author: ["Samachson, Joseph"],
      language: "en",
      subject: [
        "Mars (Planet) -- Fiction",
        "Science fiction",
        "Bureaucrats -- Fiction",
        "Dogs -- Fiction",
        "Families -- Fiction",
        "Predatory animals -- Fiction",
        "Short stories",
        "PS",
      ],
      title: "Monster",
    },
    {
      author: ["Bullen, Frank Thomas"],
      language: "en",
      subject: ["Sea stories", "PR", "Seafaring life", "Marine animals"],
      title: "Idylls of the Sea, and Other Marine Sketches",
    },
    {
      author: ["Burroughs, Edgar Rice"],
      language: "fi",
      subject: [
        "PS",
        "Adventure stories",
        "Fantasy fiction",
        "Tarzan (Fictitious character) -- Fiction",
        "Jungle animals -- Fiction",
      ],
      title: "Tarzanin pedot",
    },
    {
      author: ["Hickson, Sydney J. (Sydney John)"],
      language: "en",
      subject: ["QL", "Marine animals"],
      title: "The fauna of the deep sea",
    },
    {
      author: ["Ewald, Carl"],
      language: "en",
      subject: [
        "PZ",
        "Fathers and sons -- Juvenile fiction",
        "Human beings -- Juvenile fiction",
        "Animals -- Juvenile fiction",
        "Human-animal relationships -- Juvenile fiction",
      ],
      title: "Two-Legs",
    },
    {
      author: ["Burgess, Thornton W. (Thornton Waldo)"],
      language: "en",
      subject: [
        "Friendship -- Juvenile fiction",
        "PZ",
        "Robbers and outlaws -- Juvenile fiction",
        "Minks -- Juvenile fiction",
        "Forest animals -- Juvenile fiction",
      ],
      title: "Billy Mink",
    },
    {
      author: ["Gautier, Théophile"],
      language: "en",
      subject: ["QL", "Domestic animals"],
      title: "My household of pets",
    },
    {
      author: ["Grey, Eliza"],
      language: "en",
      subject: [
        "Children and animals -- Juvenile fiction",
        "PZ",
        "Pets -- Juvenile fiction",
        "Marmots -- Juvenile fiction",
      ],
      title: "The Adventures of a Marmotte\nSold for the Distressed Irish",
    },
    {
      author: ["Montgomery, Frances Trego"],
      language: "en",
      subject: [
        "Friendship -- Juvenile fiction",
        "West (U.S.) -- Juvenile fiction",
        "Adventure stories",
        "PZ",
        "Mexico -- Juvenile fiction",
        "Animals -- Juvenile fiction",
        "Indians of North America -- Juvenile fiction",
        "Goats -- Juvenile fiction",
        "Human-animal relationships -- Juvenile fiction",
        "Dogs -- Juvenile fiction",
        "Voyages and travels -- Juvenile fiction",
      ],
      title: "Billy Whiskers, Jr.",
    },
    {
      author: ["Wood, Theodore"],
      language: "en",
      subject: [
        "QL",
        "Seashore -- Juvenile literature",
        "Marine plants -- Juvenile literature",
        "Marine animals -- Juvenile literature",
      ],
      title: "The Sea-Shore, Shown to the Children",
    },
    {
      author: ["Fabre, Jean-Henri"],
      language: "en",
      subject: ["Domestic animals", "SF"],
      title: "Our Humble Helpers: Familiar Talks on the Domestic Animals",
    },
    {
      author: ["Stacpoole, H. De Vere (Henry De Vere)"],
      language: "en",
      subject: [
        "Bornean orangutan -- Fiction",
        "Human-animal relationships -- Fiction",
        "PR",
        "Borneo -- Fiction",
        "Fathers and sons -- Fiction",
        "Short stories",
      ],
      title: "Kadjaman",
    },
    {
      author: ["Garner, R. L. (Richard Lynch)"],
      language: "en",
      subject: ["Monkeys", "Apes", "Sound production by animals", "QL", "Speech"],
      title: "Apes and Monkeys: Their Life and Language",
    },
    {
      author: ["Gozlan, Léon"],
      language: "en",
      subject: [
        "Survival -- Juvenile fiction",
        "PZ",
        "Robinsonades",
        "Shipwreck survival -- Juvenile fiction",
        "Monkeys -- Juvenile fiction",
        "Human-animal relationships -- Juvenile fiction",
      ],
      title:
        "The man among the monkeys; or, Ninety days in apeland\r\nTo which are added: The philosopher and his monkeys, The professor and the crocodile, and other strange stories of men and animals",
    },
    {
      author: ["Deihl, Edna Groff"],
      language: "en",
      subject: [
        "PZ",
        "Kittens -- Juvenile fiction",
        "Animal welfare -- Juvenile fiction",
        "Pets -- Juvenile fiction",
        "Cats -- Juvenile fiction",
        "Girls -- Juvenile fiction",
        "Human-animal relationships -- Juvenile fiction",
        "Children and animals -- Juvenile fiction",
      ],
      title: "My twin kitties",
    },
    {
      author: ["Deihl, Edna Groff"],
      language: "en",
      subject: [
        "Boys -- Juvenile fiction",
        "Puppies -- Juvenile fiction",
        "PZ",
        "Pets -- Juvenile fiction",
        "Circus -- Juvenile fiction",
        "Human-animal relationships -- Juvenile fiction",
        "Children and animals -- Juvenile fiction",
        "Dogs -- Juvenile fiction",
      ],
      title: "My twin puppies",
    },
  ];
//   // // import bookData from './book-data';
  
//   class Book {
//     constructor(title, author, language, subject) {
//       // add required properties for the book
//       this.title = title;
//       this.author = author;
//       this.language = language;
//       this.subject = subject;
//     }
  
//     // method to generate a DOM element for the book
//     render() {
//       const bookElement = document.createElement('li');
//       bookElement.innerHTML = `
//         <h3>${this.title}</h3>
//         <p>by ${this.author}</p>
//         <p>${this.language}</p>
//         <p>${this.subject}</p>
//       `;
//       return bookElement;
//     }
//   }
  
//   class Bookshelf {
//     constructor() {
//       this.books = [];
//     }
  
//     // method to add a book to the bookshelf
//     addBook(book) {
//       this.books.push(book);
//     }
  
//     // method to generate a DOM element for the bookshelf
//     render() {
//       const bookshelfElement = document.createElement('ul');
//       this.books.forEach(book => {
//         const bookElement = book.render();
//         bookshelfElement.appendChild(bookElement);
//       });
//       return bookshelfElement;
//     }
    
//   }
  
//   const bookshelf = new Bookshelf();
  
//   // generate the bookshelf DOM element and append it to the page
//   const bookshelfElement = bookshelf.render();
//   document.getElementById('bookshelf').appendChild(bookshelfElement);
    
  
//   // loop through the book data and create a Book instance for each book
//   for (let i = 0; i < bookData.length; i++) {
//     const book = bookData[i];
//     const newBook = new Book(book.title, book.author, book.language, book.subject);
//     bookshelf.addBook(newBook);
//   }
//   // Allows for searching up a book by the different forms but I dont know how to not make it case sensitive, i tried "tolowercase()"
//   //and got an error every time i did it so i switched it to "includes(searchQuery)"
//   const searchForm = document.querySelector('.search-form');
  
//   searchForm.addEventListener('submit', event => {
//     event.preventDefault();
  
//     const searchQuery = document.querySelector('.search-query').value;
//     const bookshelf = new Bookshelf();
  
//     for (let i = 0; i < bookData.length; i++) {
//       const book = bookData[i];
//       if (book.title.includes(searchQuery) || book.author.includes(searchQuery) || book.subject.includes(searchQuery)) {
//         const newBook = new Book(book.title, book.author, book.language, book.subject);
//         bookshelf.addBook(newBook);
//       }
//     }
  
//     const bookshelfElement = bookshelf.render();
//     document.getElementById('bookshelf').innerHTML = '';
//     document.getElementById('bookshelf').appendChild(bookshelfElement);
  
    
//   });
  
    // Allows for searching up a book by the different forms but I dont know how to not make it case sensitive, i tried "tolowercase()"
    //and got an error every time i did it so i switched it to "includes(searchQuery)"
  
  
    // const searchForm = document.querySelector('.search-form');
    
    // searchForm.addEventListener('submit', event => {
    //   event.preventDefault();
    
    //   const searchQuery = document.querySelector('.search-query').value;
    //   const bookshelf = new Bookshelf();
  
    // this portion i made above attempts to allow for books to be entered but i am getting an unknown error everytime i run it and cant
    // figure out whats wrong so i commented it out.