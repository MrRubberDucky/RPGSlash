priority: 100

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
  // Change recipes here
  
  // Remove TNT Recipe
  event.remove({id: 'minecraft:tnt'})
  // Loot Crate upcrafting - Common (T0) to Magic (T1)
  event.shapeless(item.of('mmorpg:loot_crate/magic', 1), ['mmorpg:loot_crate/common','mmorpg:loot_crate/common','mmorpg:loot_crate/common','mmorpg:currency/orb_of_transmutation'])
  // Magic (T1) to Rare (T2)
  event.shapeless(item.of('mmorpg:loot_crate/rare', 1), ['mmorpg:loot_crate/magic','mmorpg:loot_crate/magic','mmorpg:loot_crate/magic', 'mmorpg:currency/number_reroll'])
  // Rare (T2) to Relic (T3)
  event.shapeless(item.of('mmorpg:loot_crate/relic', 1), ['mmorpg:loot_crate/rare','mmorpg:loot_crate/rare','mmorpg:loot_crate/rare', 'mmorpg:currency/crystal_of_purification'])
  // Craft T0 Dust into T1
  event.shaped(item.of('mmorpg:mat/salvage/salvage1', 2), [
  'DDD',
  'DDD',
  'DDD'
  ], {
	  D: 'mmorpg:mat/salvage/salvage0'
  })
  // Craft T1 Dust into T2
  event.shaped(item.of('mmorpg:mat/salvage/salvage2', 2), [
  'DDD',
  'DDD',
  'DDD'
  ], {
  D: 'mmorpg:mat/salvage/salvage1'
  })
  // Craft T2 Dust into T3
  event.shaped(item.of('mmorpg:mat/salvage/salvage3', 2), [
  'DDD',
  'DDD',
  'DDD'
   ], {
   D: 'mmorpg:mat/salvage/salvage2'
   })
  // Craft T3 Dust into T4 Dust
  event.shaped(item.of('mmorpg:mat/salvage/salvage4', 2), [
  'DDD',
  'DDD',
  'DDD'
  ], {
  D: 'mmorpg:mat/salvage/salvage3'
  })  
  // Remove Arrow Recipe so only ours is available :)))))
  	event.remove({id: 'minecraft:arrow'})
  // Arrow Recipe
    event.shaped(item.of('minecraft:arrow', 1), [
    ' S ',
    'SDS',
    ' F '
    ], {
    S: 'minecraft:iron_nugget',
    D: 'minecraft:stick',
	F: 'minecraft:feather'
  })
  // Orb of Origin Recipe  
    event.shaped(item.of('origins:orb_of_origin', 1), [
    'GGG',
    'DSD',
    'CCC'
    ], {
    G: 'minecraft:glass',
    S: '#minecraft:saplings',
    D: 'minecraft:iron_ingot',
	C: 'minecraft:cobblestone'
  })
    // Remove Vanilla Hammers recipes before our current ones get initialized so they don't get accidentially voided or something
	event.remove({id: 'vanilla-hammers:diamond_hammer'})
	event.remove({id: 'vanilla-hammers:emerald_hammer'})
	event.remove({id: 'vanilla-hammers:ender_hammer'})
    // Vanilla Hammers - Diamond Hammer Recipe
    event.shaped(item.of('vanilla-hammers:diamond_hammer', 1), [
	' DN',
	'WSD',
	'DW '
	], {
	D: 'minecraft:diamond_block',
	N: 'minecraft:diamond',
	W: 'minecraft:string',
	S: 'minecraft:stick'
})
   // Vanilla Hammers - Emerald Hammer Recipe
   event.shaped(item.of('vanilla-hammers:emerald_hammer', 1), [
   ' EB',
   'WSE',
   'EW '
   ], {
   E: 'minecraft:emerald_block',
   B: 'minecraft:emerald',
   W: 'minecraft:string',
   S: 'minecraft:stick'
})
  // Vanilla Hammers - Ender Hammer Recipe
  event.shaped(item.of('vanilla-hammers:ender_hammer', 1), [
  ' SH',
  'WOS',
  'RW '
  ], {
  S: 'minecraft:end_stone_bricks',
  H: 'minecraft:dragon_head',
  W: 'minecraft:string',
  O: 'minecraft:obsidian',
  R: 'minecraft:respawn_anchor'
  })
  // Shulker Shell Recipe - 2 Wool, 2 Feathers, 1 Lapis Lazuli, 2 Obsidian, 1 String, 1 Anvil
  event.shaped(item.of('minecraft:shulker_shell', 1), [
  'WLW',
  'FAF',
  'OSO'
  ], {
	  W: '#minecraft:wool',
	  L: 'minecraft:lapis_lazuli',
	  F: 'minecraft:feather',
	  A: 'minecraft:anvil',
	  O: 'minecraft:obsidian',
	  S: 'minecraft:string'
  })
  // Cow Spawn Egg Recipe
  event.shaped(item.of('minecraft:cow_spawn_egg', 1), [
  ' R ',
  'BWB',
  'SSS'
  ], {
	  R: 'minecraft:rotten_flesh',
	  B: 'minecraft:bone',
	  W: 'minecraft:wheat',
	  S: 'minecraft:wheat_seeds'
  })
  // Sheep Spawn Egg
  event.shaped(item.of('minecraft:sheep_spawn_egg', 1), [
  ' S ',
  'BRB',
  'WDW'
  ], {
	  S: 'minecraft:string',
	  B: 'minecraft:bone',
	  R: 'minecraft:rotten_flesh',
	  W: 'minecraft:wheat',
	  D: 'minecraft:wheat_seeds'
  })
  // Nametag 
  event.shaped(item.of('minecraft:name_tag', 1), [
  'T  ',
  'FSL',
  'T  '
  ], {
	  T: 'minecraft:tripwire_hook',
	  F: 'minecraft:feather',
	  S: 'minecraft:string',
	  L: 'minecraft:leather'
  })
  // Rotten Flesh, Modded Rotten Flesh to Leather recipe
  event.shapeless(item.of('minecraft:leather', 2), ['minecraft:rotten_flesh', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh'])
  event.shapeless(item.of('minecraft:leather', 2), ['winged:demonic_flesh', 'winged:demonic_flesh', 'winged:demonic_flesh', 'winged:demonic_flesh'])
  event.shapeless(item.of('minecraft:leather', 2), ['mobz:rottenflesh', 'mobz:rottenflesh', 'mobz:rottenflesh', 'mobz:rottenflesh'])
  // Remove some really bloody useless fabric furnace upgrades that only make it more annoying to upgrade
  event.remove({id: 'fabric-furnaces:fabric_furnace'})
  event.remove({id: 'fabric-furnaces:nether_furnace'})
  event.remove({id: 'fabric-furnaces:gold_furnace'})
  event.remove({id: 'fabric-furnaces:crystal_gold_furnace'})
  event.remove({id: 'fabric-furnaces:crystal_fabric_furnace'})
  event.remove({id: 'fabric-furnaces:nether_furnace'})
  // Remove these to make better recipes
  event.remove({id: 'fabric-furnaces:iron_furnace'})
  event.remove({id: 'fabric-furnaces:diamond_furnace'})
  event.remove({id: 'fabric-furnaces:obsidian_furnace'})
  event.remove({id: 'fabric-furnaces:emerald_furnace'})
  event.remove({id: 'fabric-furnaces:ethereal_furnace'})
 event.remove({id: 'fabric-furnaces:end_furnace'})

  // Add new recipes for our fancy furnaces
    event.shaped(item.of('fabric-furnaces:iron_furnace', 1), [
  'III',
  'IFI',
  'III'
  ], {
	  I: 'minecraft:iron_ingot',
	  F: 'minecraft:furnace',
  })
     event.shaped(item.of('fabric-furnaces:diamond_furnace', 1), [
  'DGD',
  'DFD',
  'DGD'
  ], {
	  D: 'minecraft:diamond',
	  G: 'minecraft:gold_block',
	  F: 'fabric-furnaces:iron_furnace'
  })
    event.shaped(item.of('fabric-furnaces:emerald_furnace', 1), [
  'EBE',
  'BFB',
  'GRG'
  ], {
	  E: 'minecraft:emerald',
	  B: 'minecraft:emerald_block',
	  G: 'minecraft:gold_block',
	  R: 'minecraft:redstone_block',
	  F: 'fabric-furnaces:obsidian_furnace'
  })
    event.shaped(item.of('fabric-furnaces:obsidian_furnace', 1), [
  'OMO',
  'OFO',
  'OMO'
  ], {
	  O: 'minecraft:obsidian',
	  F: 'fabric-furnaces:diamond_furnace',
	  M: 'minecraft:magma_cream'
  })
    event.shaped(item.of('fabric-furnaces:end_furnace', 1), [
  'RER',
  'PFP',
  'CIC'
  ], {
	  R: 'minecraft:end_rod',
	  E: 'minecraft:ender_eye',
	  P: 'blockus:ender_block',
	  F: 'fabric-furnaces:emerald_furnace',
	  C: 'minecraft:end_stone_bricks',
	  I: 'minecraft:shulker_shell'
  })
  // This is hella powerful so it requires equal effort to get it.
    event.shaped(item.of('fabric-furnaces:ethereal_furnace', 1), [
  'CHC',
  'TNT',
  'LFL'
  ], {
	  T: 'betterend:eternal_crystal',
	  C: 'minecraft:end_crystal',
	  F: 'fabric-furnaces:end_furnace',
	  H: 'minecraft:dragon_head',
	  N: 'blockus:nether_stars_block',
	  L: 'minecraft:sea_lantern'
  })
  // Add some new recipes for furnaces above
  // Blaze Rod Recipe - Shapeless (no need for crafting table)
  event.shapeless(item.of('minecraft:blaze_rod', 1), ['minecraft:gold_ingot', 'minecraft:stick', 'minecraft:nether_brick', 'minecraft:flint'])
  // Disable the rest of the hammers for now
  event.remove({id: 'vanilla-hammers:netherite_hammer'})
  event.remove({id: 'vanilla-hammers:fiery_hammer'})
  event.remove({id: 'vanilla-hammers:golden_hammer'})
  event.remove({id: 'vanilla-hammers:lapis_hammer'})
  event.remove({id: 'vanilla-hammers:obsidian_hammer'})
  event.remove({id: 'vanilla-hammers:prismarine_hammer'})
  event.remove({id: 'vanilla-hammers:quartz_hammer'})
  event.remove({id: 'vanilla-hammers:slime_hammer'})
  event.remove({id: 'vanilla-hammers:stone_hammer'})
  event.remove({id: 'vanilla-hammers:wooden_hammer'})
  
})

onEvent('item.tags', event => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  // event.get('forge:cobblestone').add('minecraft:diamond_ore')
  
  // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
  // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
  
  // Add meat only tag to goldensteak so vegetarians can't eat a delicious steak anymore + make it wanted by piglins
  event.get('origins:meat').add('goldensteak:golden_steak')
  event.get('origins:meat').add('goldensteak:enchanted_golden_steak')
  // They will steal them for themselves but I don't think that's a issue.
  event.get('minecraft:piglin_loved').add('goldensteak:golden_steak')
  event.get('minecraft:piglin_loved').add('goldensteak:enchanted_golden_steak')
  // More beacon payment items
  event.get('minecraft:beacon_payment_items').add('betternether:cincinnasite_ingot')
  event.get('minecraft:beacon_payment_items').add('betterend:thallasium_ingot')
  event.get('minecraft:beacon_payment_items').add('betterend:amber_gem')
  event.get('minecraft:beacon_payment_items').add('minecraft:ender_pearl')
  event.get('minecraft:beacon_payment_items').add('betternether:nether_ruby')
  event.get('minecraft:beacon_payment_items').add('byg:anthracite')
  event.get('minecraft:beacon_payment_items').add('byg:lignite')
  event.get('minecraft:beacon_payment_items').add('minecraft:lapis_lazuli')
  
  // Remove fish from meat tag
  event.get('origins:meat').remove('minecraft:tropical_fish')
  event.get('origins:meat').remove('minecraft:cod')
  event.get('origins:meat').remove('minecraft:salmon')
  event.get('origins:meat').remove('minecraft:pufferfish')
  event.get('origins:meat').remove('minecraft:cooked_salmon')
  event.get('origins:meat').remove('minecraft:cooked_cod')
  
  // Add fish to Pescatarian tag
  event.get('origins:pescatarian').add('minecraft:tropical_fish')
  event.get('origins:pescatarian').add('minecraft:cod')
  event.get('origins:pescatarian').add('minecraft:salmon')
  event.get('origins:pescatarian').add('minecraft:pufferfish')
  event.get('origins:pescatarian').add('minecraft:cooked_salmon')
  event.get('origins:pescatarian').add('gofish:endfish')
  event.get('origins:pescatarian').add('gofish:matrix_fish')
  event.get('origins:pescatarian').add('gofish:ender_eel')
  event.get('origins:pescatarian').add('gofish:smokey_salmon')
  event.get('origins:pescatarian').add('gofish:magma_cod')
  event.get('origins:pescatarian').add('gofish:bonefish')
  event.get('origins:pescatarian').add('gofish:obsidian_halibut')
  event.get('origins:pescatarian').add('gofish:basalt_bass')
  event.get('origins:pescatarian').add('gofish:spikerfish')
  event.get('origins:pescatarian').add('gofish:gilded_blackstone_carp')
  event.get('origins:pescatarian').add('gofish:blackstone_trout')
  event.get('origins:pescatarian').add('gofish:soul_salmon')
  event.get('origins:pescatarian').add('gofish:carrot_carp')
  event.get('origins:pescatarian').add('gofish:oakfish')
  event.get('origins:pescatarian').add('gofish:snowball_fish')
  event.get('origins:pescatarian').add('gofish:icicle_fish')
  event.get('origins:pescatarian').add('gofish:lunarfish')
  event.get('origins:pescatarian').add('gofish:galaxy_starfish')
  event.get('origins:pescatarian').add('gofish:starry_salmon')
  event.get('origins:pescatarian').add('gofish:nebula_swordfish')
  event.get('origins:pescatarian').add('gofish:slimefish')
  event.get('origins:pescatarian').add('gofish:lilyfish')
  event.get('origins:pescatarian').add('gofish:seaweed')
  event.get('origins:pescatarian').add('gofish:baked_endfish')
  event.get('origins:pescatarian').add('gofish:endfish_and_chorus')
  event.get('origins:pescatarian').add('gofish:aquatic_astral_stew')
  event.get('origins:pescatarian').add('gofish:cloudy_crab')
  event.get('origins:pescatarian').add('gofish:blizzard_bass')
  event.get('origins:pescatarian').add('gofish:rainy_bass')
  event.get('origins:pescatarian').add('gofish:charfish')
  event.get('origins:pescatarian').add('gofish:seaweed_eel')
  event.get('origins:pescatarian').add('gofish:baked_seaweed')
  event.get('origins:pescatarian').add('gofish:thundering_bass')
  event.get('origins:pescatarian').add('gofish:grilled_blackstone_deluxe')
})

// Chat stuff - commands
events.listen('player.chat', function (event) {
  // Check if message equals command, ignoring case
  if (event.message.startsWith('!help')) {
    event.player.tell('Welcome to RPG Slash, right now theres not much to talk about.')
    event.cancel()
  }
})