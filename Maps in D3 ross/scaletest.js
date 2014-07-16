var data = [
	{
		"Country name":"Canada",
		"Alpha-2":"CA",
		"Retail price":81.2, 
		"Wholesale price":35507.8
	},
	{
		"Country name":"Lithuania",
		"Alpha-2":"LT",
		"Retail price":84.5,
		"Wholesale price":null
	},
	{
		"Country name":"Swaziland",
		"Alpha-2":"SZ",
		"Retail price":35.4,
		"Wholesale price":null
	},
	{
		"Country name":"Argentina",
		"Alpha-2":"AR",
		"Retail price":5.9,
		"Wholesale price":4800.0
	}
  ]


colourScale = d3.scale.linear()
	.domain ([0,100])
	.range(['#FFF','#933'])

costScale = function(datum){  
  return colourScale(
      colourScale(data ["Retail price"])
  )
}
data.map(costScale)  
console.log(costScale)
