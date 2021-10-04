export default function sourMath(flour, hydration, preferment, hydroPreferment, amount){
  let preferment_flour = preferment/(1+(hydroPreferment/100))
  let preferment_water = preferment_flour*(hydroPreferment/100) 

  //define the weights//
  let flour_total = (flour + preferment_flour)
  
  let salt = (flour_total * .02) //bread recipes need about 2% salt
  
  let water = (flour_total*(hydration/100)) - (preferment_water) //calculates water needed to be added to dough
  
  let total_water = (flour_total*(hydration/100)) //total water from added water + preferment

  let total_dough = (flour + salt + water + preferment)
  
  //define the percentages//

  //flour percentages
  let flour_percent = (flour/flour_total * 100)
  let total_flour_percent = (flour_total/flour_total * 100)
  //salt
  let salt_percent = (salt/flour_total * 100)
  //preferment percentages
  let preferment_flour_percent = (preferment_flour/flour_total * 100)
  let preferment_water_percent = (preferment_water/flour_total * 100)
  //water
  let water_percent = (water/flour_total * 100)
  let total_water_percent = (total_water/flour_total * 100)
  //dough
  let total_dough_percent = (total_dough/flour_total * 100)
  
  //scale//
  if (amount > 1){
  
  let scale = (amount * total_dough)/(flour_percent + salt_percent + preferment_flour_percent + 
               preferment_water_percent + water_percent)
  
            lour = (scale*flour_percent)
            flour_total = (scale*total_flour_percent)
            salt = (scale*salt_percent)
            leaven = (scale*preferment_flour_percent + scale*preferment_water_percent)
            water =  (scale*water_percent)
            total_water =  (scale*total_water_percent)
            total_dough = (scale*total_dough_percent)
  }
  
  //make table store weights and percents
  let data_table = {total_flour: [flour_total, total_flour_percent],
                    total_water: [total_water, total_water_percent],
                    flour: [flour, flour_percent], 
                    salt: [salt, salt_percent], 
                    preferment: [preferment, preferment_flour_percent],
                    water: [water, water_percent],
                    total_dough: [total_dough, total_dough_percent]}
  
  return data_table;
  }
  