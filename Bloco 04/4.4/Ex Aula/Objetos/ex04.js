//4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".


let player = {    
    nombre: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 }
}

player ['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018]


let vezes = player.bestInTheWorld.length


console.log('A jogadora ' + player.nombre + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + vezes + ' vezes.')