// Configurando a Rede Neural
const config = {
  hiddenLayers: [3]
};


const brain = require('brain.js');
const net = new brain.NeuralNetwork(config);

const meetings = {
  "Ir para Escola": "Segunda",
  "Programar as minhas Tasks": "Terça",
  "Relaxar todo dia assistido Series": "Quarta",
  "Levar  o ção para passeio": "Quinta",
  "Passear com amigos": "Sexta",
  "Ligar para": ""
};
const _Data = [];
for (let taskName in meetings) {
  const dayOfWeek = meetings[taskName];
  _Data.push({
    input: { [dayOfWeek]: 1 },
    output: { [taskName]: 1 },
  });
}

//trainning the model 
 net.train(_Data);
//end of train 


function SpecificDay(dayOfWeek) {
  const result = net.run({ [dayOfWeek]: 1 });
  console.log(result);

  let highestvalue = 0;
  let highestTaskName = '';
  for (let taskName in result) {
    if (result[taskName] > highestvalue) {
      highestvalue = result[taskName];
      highestTaskName = taskName;
    }
  }
  return highestTaskName;
}

console.log(SpecificDay("Segunda"));


// net.train([{
//   input: [0, 0],
//   output: [0]
// },
// {
//   input: [0, 1],
//   output: [1]
// },
// {
//   input: [1, 0],
//   output: [1]
// },
// {
//   input: [1, 1],
//   output: [0]
// }
// ]);

// net.run([0,1]);

// console.log(net.run([1,1]) * 100)





