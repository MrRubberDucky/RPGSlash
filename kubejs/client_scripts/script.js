// priority: 0

console.info('Hello, World! -> Client Script Initialzied (REI). Enjoy your day!')

onEvent('rei.hide.item', event => {
  // Hide unused Fabric Furnaces upgrades we got rid off
  event.hide('fabric-furnaces:fabric_furnace')
  event.hide('fabric-furnaces:gold_furnace')
  event.hide('fabric-furnaces:nether_furnace')
  event.hide('fabric-furnaces:crystal_gold_furnace')
  event.hide('fabric-furnaces:crystal_fabric_furnace')
  event.hide('fabric-furnaces:crystal_nether_furnace')
})

onEvent('rei.information', event => {
	// Add Extra Information to Items
	event.add('fabric-furnaces:ethereal_furnace', 'Infinite Resources', ['This furnace will double anything you have'])
})