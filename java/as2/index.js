
const currentUser = 'Grace Hopper';

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();
'Edsger Dijkstra'.length;
//=> 15

'Edsger Dijkstra'[15];
//=> undefined

'Edsger Dijkstra'[14];
//=> "a"
'Edsger Dijkstra'.slice();
//=> "Edsger Dijkstra"
'Edsger Dijkstra'.slice(0, 3);
//=> "Eds"




const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;