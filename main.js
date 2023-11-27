const prompt = require('prompt-sync')()

const getMultiplesFrom = (n, mult) => {
	const multiples = []
	mult.forEach((val) => {
		for (let i = val; i < n; i++) {
			if (i % val === 0) {
				multiples.push(i)
			}
		}
	})

	return multiples.filter((data, idx) => multiples.indexOf(data) === idx)
}
const main = () => {
	console.log(
		'=================================================================================='
	)
	console.log("PRESSIONE 'q' PARA SAIR.")
	console.log(
		'=================================================================================='
	)
	while (true) {
		let n = prompt('Qual o numero? ')
		if (n === 'q' || n === 'Q') break
		else if (n < 0) console.log('O numero precisa ser um inteiro positivo.')
		else {
			const multiples = getMultiplesFrom(n, [3, 5])
			const sum = multiples.reduce((acc, cur) => acc + cur, 0)

			console.log(sum)
			console.log(
				'=================================================================================='
			)
			console.log("PRESSIONE'q' PARA SAIR.")
			console.log(
				'=================================================================================='
			)
		}
	}
}

main()
