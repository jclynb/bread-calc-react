export default function enrichedMath(flour, water, salt, sugar, preferment, hydroPreferment, yeast, milk, egg, eggnum, yolk, yolknum, white, whitenum, butter, oil, amount){
  let preferment_flour = preferment/(1+(hydroPreferment/100))
  let preferment_water = preferment_flour*(hydroPreferment/100) 

  //approximate weight of egg if given an number
  if (eggnum > 0){
  egg = eggnum*50
  } 
  if (yolknum > 0){
  yolk = yolknum*18
  } 
  if (whitenum > 0){
  white = whitenum*30
  }

  //define the weights//
  let flour_total = (flour + preferment_flour)
  
  let milk_hydro = milk*0.87 //milk is 87% water
  
  let egg_hydro = egg*0.74 //one whole egg is 74% water
  
  let yolk_hydro = yolk*0.48 //one egg yolk is 48% water
  
  let white_hydro = white*0.88 //one egg white is 88% water
  
  let butter_hydro = butter*0.17 //butter water percentage varies, looking at a range of brands I am assuming around 17%
  
  let total_dough = (flour + salt + sugar + water + preferment + yeast + milk + egg + yolk + white + butter + oil)
  let total_water = (water + preferment_water + milk_hydro + egg_hydro + yolk_hydro + white_hydro + butter_hydro)
  
  //define the percentages//

  //percent flour
  let flour_percent = (flour/flour_total * 100)
  let total_flour_percent = (flour_total/flour_total * 100)
  let preferment_flour_percent = (preferment_flour/flour_total * 100)
  //salt
  let salt_percent = (salt/flour_total * 100)
  let sugar_percent = (sugar/flour_total * 100)
  //water
  let water_percent = (water/flour_total * 100)
  let preferment_water_percent = (preferment_water/flour_total * 100)
  //yeast
  let yeast_percent = yeast/flour_total * 100
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
  
  let scale = (amount * total_dough)/(flour_percent + salt_percent + sugar_percent + preferment_flour_percent + 
    preferment_water_percent + yeast_percent + water_percent + milk_percent + egg_percent + yolk_percent + white_percent + 
    butter_percent + oil_percent)
    
    flour = (scale*flour_percent)
    flour_total = (scale*total_flour_percent)
    salt = (scale*salt_percent)
    sugar = (scale*sugar)
    preferment = (scale*preferment_flour_percent + scale*preferment_water_percent)
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
    
  let enriched_table = {flour: [flour, flour_percent], 
                        salt: [salt, salt_percent], 
                        sugar: [sugar, sugar_percent],
                        water: [water, water_percent],
                        preferment: [preferment, preferment_flour_percent],
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