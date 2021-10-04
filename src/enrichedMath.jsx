export default function enrichedMath(flour, water, salt, sugar, leaven, poolish, biga, ratioStarter, ratioBiga, yeast, milk, egg, yolk, white, butter, oil, amount){
    let leaven_flour = leaven/2 
    let leaven_water = leaven/2 
    let biga_flour
    let biga_water
    if (ratioStarter == "2:1") {
      leaven_flour = leaven*(2/3) 
      leaven_water = leaven*(1/3)
    } else if (ratioStarter == "3:2") {
      leaven_flour = leaven*(0.6)
      leaven_water = leaven*(0.4)
    } 
    if (ratioBiga == "3:2") {
      biga_flour = biga*(0.6) 
      biga_water = biga*(0.4)
    } else {
      biga_flour = biga*(2/3) 
      biga_water = biga*(1/3)
    }
  //define the weights
  let poolish_half = poolish/2 //poolish is equal parts water and flour
  
  let flour_total = (flour + leaven_flour + poolish_half + biga_flour)
  
  let milk_hydro = milk*0.87 //milk is 87% water
  
  let egg_hydro = egg*0.74 //one whole egg is 74% water
  
  let yolk_hydro = yolk*0.48 //one egg yolk is 48% water
  
  let white_hydro = white*0.88 //one egg white is 88% water
  
  let butter_hydro = butter*0.16 //butter water percentage varies, looking at a range of brands I am starting with 16%
  
  let total_dough = (flour + salt + sugar + water + poolish + leaven + biga + yeast + milk + egg + yolk + white + butter + oil)
  let total_water = (water + leaven_water + biga_water + poolish_half + milk_hydro + egg_hydro + yolk_hydro + white_hydro + butter_hydro)
  
  //define the percentages
  let flour_percent = (flour/flour_total * 100)
  let total_flour_percent = (flour_total/flour_total * 100)
  //salt
  let salt_percent = (salt/flour_total * 100)
  let sugar_percent = (sugar/flour_total * 100)
  //water
  let water_percent = (water/flour_total * 100)
  //preferment flour
  let leaven_flour_percent = (leaven_flour/flour_total * 100)
  let poolish_flour_percent = (poolish_half/flour_total * 100)
  let biga_flour_percent = (biga_flour/flour_total * 100)
  let yeast_percent = yeast/flour_total * 100
  //preferment water
  let leaven_water_percent = (leaven_water/flour_total * 100)
  let poolish_water_percent = (poolish_half/flour_total * 100)
  let biga_water_percent = (biga_water/flour_total * 100)
  //enriched bread ingredients percet
  let milk_percent = (milk/flour_total * 100)
  let egg_percent = (egg/flour_total * 100)
  let yolk_percent = (yolk/flour_total * 100)
  let white_percent = (white/flour_total * 100)
  let butter_percent = (butter/flour_total * 100)
  let oil_percent = (oil/flour_total * 100)
  
  //hydration percent 
  let hydro_percent = (total_water)/flour_total * 100

  //total dough percent
  let total_dough_percent = total_dough/flour_total * 100
  
  //scale
  if (amount > 1){
  
  let scale = (amount * total_dough)/(flour_percent + salt_percent + sugar_percent + leaven_flour_percent + 
      poolish_flour_percent + biga_flour_percent + leaven_water_percent + poolish_water_percent + 
      biga_water_percent + yeast_percent + water_percent + milk_percent + egg_percent + yolk_percent + white_percent + butter_percent + oil_percent)
    
    flour = (scale*flour_percent)
    flour_total = (scale*total_flour_percent)
    salt = (scale*salt_percent)
    sugar = (scale*sugar)
    leaven = (scale*leaven_flour_percent + scale*leaven_water_percent)
    poolish = (scale*poolish_flour_percent + scale*poolish_water_percent)
    biga = (scale*biga_flour_percent + scale*biga_water_percent)
    yeast = (scale*yeast_percent)
    milk = (scale*milk_percent)
    egg = (scale*egg_percent)
    yolk = (scale*yolk_percent)
    white = (scale*white_percent)
    butter = (scale*butter_percent)
    water =  (scale*water_percent)
    oil = (scale*oil_percent)
    total_water =  (scale*hydro_percent)
    total_dough = (scale*total_dough_percent)
    }
  let enriched_table = {
                        flour: [flour, flour_percent], 
                        salt: [salt, salt_percent], 
                        sugar: [sugar, sugar_percent],
                        water: [water, water_percent],
                        leaven: [leaven, leaven_flour_percent],
                        poolish: [poolish, poolish_flour_percent],
                        biga: [biga, biga_flour_percent],
                        yeast: [yeast, yeast_percent],
                        milk: [milk, milk_percent],
                        egg: [egg, egg_percent],
                        yolk: [yolk, yolk_percent],
                        white: [white, white_percent],
                        butter: [butter, butter_percent],
                        oil: [oil, oil_percent], 
                        hydro: [total_water, hydro_percent],
                        total_flour: [flour_total, total_flour_percent],
                        total_dough: [total_dough, total_dough_percent]}
  
  return enriched_table;

}