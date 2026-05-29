export interface TimelineEvent {
  year: string;
  category: 'Education' | 'Travel' | 'Works' | 'Family' | 'Political';
  title: string;
  description: string;
  imageUrl?: string;
  fullDetails?: string;
  significance?: string;
  impact?: string;
}

export const timelineData: TimelineEvent[] = [
  {
    year: '1861',
    category: 'Family',
    title: 'Birth in Calamba, Laguna',
    description: 'José Protasio Rizal Mercado y Alonso Realonda was born on June 19, 1861, in Calamba, Laguna, to a wealthy family of farmers. He was the seventh of eleven children.',
    fullDetails: 'José Rizal was born in a two-story house in Calamba, a town in the province of Laguna. His parents, Francisco Mercado and Teodora Alonso, were well-educated and belonged to the principalía, the Filipino elite class during Spanish colonial rule.\n\nHis family background was diverse: Chinese, Japanese, and Spanish ancestry mixed with native Tagalog blood. This multicultural heritage would later influence his worldview and writings.\n\nFrom an early age, Rizal showed exceptional intelligence. His mother, Teodora, became his first teacher, teaching him the alphabet and instilling in him a love for learning and the arts.',
    significance: 'Rizal\'s birth into a privileged family gave him access to education and opportunities unavailable to most Filipinos during Spanish colonial rule. This social position, combined with his natural gifts, set the stage for his future as a reformist and national hero.',
    impact: 'His early experiences in Calamba—witnessing both the privileges of his class and the injustices suffered by Filipino farmers—shaped his later advocacy for social reform and his critique of colonial oppression in his novels.',
  },
  {
    year: '1872',
    category: 'Education',
    title: 'Studies at Ateneo Municipal',
    description: 'Enrolled at Ateneo Municipal de Manila, where he excelled academically and won numerous literary competitions. This period shaped his intellectual foundation and love for learning.',
    imageUrl: 'https://images.unsplash.com/photo-1595123550441-d377e017de6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    fullDetails: 'At age 11, Rizal enrolled at Ateneo Municipal de Manila, a prestigious Jesuit-run school. Despite initial difficulties (he was placed in a lower class due to his small stature), he quickly distinguished himself as a brilliant student.\n\nHe consistently topped his class, earning the title "Emperor" in the school\'s merit system. He excelled in poetry, debate, and the sciences. His literary talents blossomed here—he won several poetry competitions and began to develop his voice as a writer.\n\nThe rigorous Jesuit education emphasized logic, classical studies, and moral philosophy, which deeply influenced his intellectual development and later reformist ideas.',
    significance: 'The Ateneo education instilled in Rizal a disciplined mind, a love of learning, and the confidence to compete intellectually with the Spanish elite. It was here that he first encountered discrimination, which awakened his consciousness about colonial injustice.',
    impact: 'The values and skills Rizal acquired at Ateneo—critical thinking, eloquence, and a commitment to excellence—became the foundation for his later work as a writer, reformist, and national hero.',
  },
  {
    year: '1877',
    category: 'Education',
    title: 'University of Santo Tomas',
    description: 'Began studying Philosophy and Letters, then later Medicine at the University of Santo Tomas. His education was interrupted by increasing awareness of colonial injustices.',
    imageUrl: 'https://images.unsplash.com/photo-1419640303358-44f0d27f48e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  },
  {
    year: '1882',
    category: 'Travel',
    title: 'Departure for Europe',
    description: 'Left the Philippines for Spain to continue his medical studies at Universidad Central de Madrid. This marked the beginning of his life as an expatriate and reformist writer.',
  },
  {
    year: '1885',
    category: 'Education',
    title: 'Medical Degree Completed',
    description: 'Earned his degree in Medicine and later studied ophthalmology in Paris and Heidelberg, specializing in eye diseases to help his mother who was going blind.',
  },
  {
    year: '1887',
    category: 'Works',
    title: 'Publication of Noli Me Tangere',
    description: 'Published his groundbreaking novel "Noli Me Tangere" (Touch Me Not) in Berlin, exposing the abuses of Spanish colonial rule and the Catholic Church in the Philippines.',
    imageUrl: 'https://images.unsplash.com/photo-1478641300939-0ec5188d3802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    fullDetails: 'Written during his time in Europe, "Noli Me Tangere" was published in Berlin on March 21, 1887. The novel cost Rizal his entire savings to print, and he even pawned some of his belongings to complete the publication.\n\nThe title comes from Latin, meaning "Touch Me Not," taken from the Bible (John 20:17). The novel tells the story of Crisóstomo Ibarra, a young Filipino who returns from Europe to find his country suffering under corrupt Spanish friars and civil authorities.\n\nThrough vivid characters like the idealistic Ibarra, the cynical Elías, and the tragic María Clara, Rizal painted a damning portrait of colonial society—its hypocrisy, abuse, and systemic corruption.',
    significance: 'The novel became an instant sensation and was immediately banned in the Philippines by Spanish authorities who recognized its seditious nature. It awakened Filipino consciousness and became a foundational text of the Philippine independence movement.',
    impact: 'Noli Me Tangere is considered the spark that ignited the Philippine Revolution. It inspired a generation of Filipinos to question colonial rule and fight for reform and, eventually, independence. The novel remains required reading in Philippine schools today.',
  },
  {
    year: '1891',
    category: 'Works',
    title: 'El Filibusterismo Published',
    description: 'Released his second novel "El Filibusterismo" (The Reign of Greed), a darker sequel that portrayed the failures of reform and the stirrings of revolution.',
    imageUrl: 'https://images.unsplash.com/photo-1592781920723-2d37095ec0ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    fullDetails: 'Published in Ghent, Belgium in September 1891, "El Filibusterismo" was written as a sequel to "Noli Me Tangere." The title translates to "The Reign of Greed" or "Subversion."\n\nThe novel is considerably darker than its predecessor. It follows the story of Simoun, a wealthy jeweler (revealed to be Crisóstomo Ibarra from the first novel) who has abandoned peaceful reform and now plots a violent revolution against the Spanish colonial government.\n\nThrough Simoun\'s tragic arc and his ultimate disillusionment, Rizal explored themes of vengeance, the moral costs of revolution, and the corruption that makes peaceful change impossible. The ending is deliberately ambiguous and tragic.',
    significance: 'While "Noli" awakened Filipino consciousness, "El Fili" radicalized it. The novel reflected Rizal\'s growing pessimism about peaceful reform and his understanding that change might require more drastic measures, even as he personally opposed violent revolution.',
    impact: 'The novel became a rallying text for revolutionaries, though ironically Rizal himself advocated for education and peaceful reform. It strengthened the intellectual case for Philippine independence and remains a masterpiece of political fiction.',
  },
  {
    year: '1892',
    category: 'Political',
    title: 'Founded La Liga Filipina',
    description: 'Established La Liga Filipina, a civic organization aimed at uniting Filipinos and advocating for reforms. He was arrested and exiled to Dapitan shortly after.',
    fullDetails: 'On July 3, 1892, Rizal founded La Liga Filipina (The Philippine League) in Manila. The organization\'s goals were peaceful: mutual protection, defense of Filipino rights, education, agriculture, and commerce development.\n\nThe Liga was meant to be a progressive civic organization that would unite the Filipino people in advocating for reforms within the Spanish colonial system. Its motto was "Unus Instar Omnium" (One Like All).\n\nHowever, just four days after its founding—on July 7, 1892—Rizal was arrested by Spanish authorities who viewed the organization as seditious. He was immediately exiled to Dapitan in Mindanao, effectively ending La Liga\'s brief existence under his leadership.',
    significance: 'Though short-lived, La Liga Filipina represented Rizal\'s final attempt at peaceful, organized reform. Its failure convinced many Filipinos that reform was impossible under Spanish rule, leading some members to form the revolutionary Katipunan.',
    impact: 'The dissolution of La Liga and Rizal\'s exile radicalized the Filipino reform movement. Andrés Bonifacio and others who attended the Liga\'s founding meeting would go on to establish the Katipunan, the secret revolutionary society that launched the Philippine Revolution in 1896.',
  },
  {
    year: '1892-96',
    category: 'Travel',
    title: 'Exile in Dapitan',
    description: 'Spent four years in exile in Dapitan, Zamboanga del Norte, where he practiced medicine, taught students, conducted scientific research, and built community infrastructure.',
    imageUrl: 'https://images.unsplash.com/photo-1660233247590-93242541a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    fullDetails: 'Exiled to Dapitan, a remote town in Mindanao, Rizal made the most of his banishment. He established a school for boys, teaching them languages, science, and practical skills. He practiced ophthalmology, treating hundreds of patients including his own mother whose eyesight he helped restore.\n\nRizal designed and helped build the town\'s water system, bringing fresh water to residents. He cultivated crops, introduced new farming methods, and even won a lottery, using his winnings to purchase land and establish a model farming community.\n\nHe continued his scientific work, collecting specimens of rare flora and fauna. He discovered several new species, including a type of beetle (Apogonia rizali) and a flying frog, both later named in his honor. He corresponded with European scientists and maintained his intellectual life despite isolation.',
    significance: 'Dapitan demonstrated that Rizal was not merely a theorist or agitator, but a practical man of action. His exile years proved that reform and progress were possible through education, science, and community development—his preferred methods over revolution.',
    impact: 'The Dapitan years cemented Rizal\'s reputation as a polymath and renaissance man. His work there—from medicine to engineering to education—showed Filipinos what they could achieve. Today, Dapitan is a pilgrimage site for Filipinos honoring his memory.',
  },
  {
    year: '1896',
    category: 'Political',
    title: 'Execution at Bagumbayan',
    description: 'Arrested upon his return voyage, falsely implicated in the Philippine Revolution. Executed by firing squad on December 30, 1896, at Bagumbayan (now Luneta Park), becoming a martyr.',
    fullDetails: 'On December 30, 1896, at 7:03 AM, José Rizal was executed by firing squad at Bagumbayan Field (now Rizal Park/Luneta). Despite his opposition to violent revolution, Spanish authorities accused him of being the intellectual leader of the Philippine Revolution that had erupted months earlier.\n\nOn the eve of his execution, Rizal wrote his final masterpiece, "Mi Último Adiós" (My Last Farewell), a poem hidden inside an alcohol cooking stove and later given to his family. In it, he bid farewell to his beloved Philippines and expressed his hope for its future freedom.\n\nHis last words were reported to be "Consummatum est" (It is finished). Before the firing squad, Rizal refused the blindfold and requested to face his executioners, but was denied. He was shot in the back as a traitor.',
    significance: 'Rizal\'s execution transformed him from a reformist writer into a martyr and the symbolic leader of Philippine nationalism. His death unified Filipinos across social classes and intensified the revolutionary fervor against Spanish rule.',
    impact: 'The execution backfired spectacularly for Spain. Rather than quelling dissent, it galvanized the revolution. Within two years, the Philippines declared independence. Rizal became the national hero—the embodiment of Filipino identity, intellect, and the peaceful pursuit of justice. December 30 is now a national holiday in the Philippines: Rizal Day.',
  },
];