import { useState } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import "./App.css"
import crumbs from './crumbs.jpg';

function sourmath(flour, hydration, leaven, poolish, biga, ratioStarter, ratioBiga, amount){
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
let salt = (flour_total * .02)
let water = (flour_total*(hydration/100)) - (leaven_water + poolish_half + biga_water)
let total_water = (flour_total*(hydration/100))
let total_dough = (flour + salt + water + poolish + leaven + biga)

//define the percentages
let flour_percent = (flour/flour_total)*100
let total_flour_percent = (flour_total/flour_total * 100)
//salt
let salt_percent = (salt/flour_total * 100)
//preferment flour
let leaven_flour_percent = (leaven_flour/flour_total * 100)
let poolish_flour_percent = (poolish_half/flour_total * 100)
let biga_flour_percent = (biga_flour/flour_total * 100)
//preferment water
let leaven_water_percent = (leaven_water/flour_total *100)
let poolish_water_percent = (poolish_half/flour_total *100)
let biga_water_percent = (biga_water/flour_total * 100)
//water
let water_percent = (water/flour_total * 100)
let total_water_percent = (total_water/flour_total * 100)
//dough
let total_dough_percent = (total_dough/flour_total * 100)

if (amount > 1){

let scale = (amount * total_dough)/(flour_percent + salt_percent + leaven_flour_percent + poolish_flour_percent + biga_flour_percent + leaven_water_percent + poolish_water_percent + biga_water_percent + water_percent)

flour = (scale*flour_percent)
flour_total = (scale*total_flour_percent)
salt = (scale*salt_percent)
leaven = (scale*leaven_flour_percent + scale*leaven_water_percent)
poolish = (scale*poolish_flour_percent + scale*poolish_water_percent)
biga = (scale*biga_flour_percent + scale*biga_water_percent)
water =  (scale*water_percent)
total_water =  (scale*total_water_percent)
total_dough = (scale*total_dough_percent)
}

let data_table = {total_flour: [flour_total, total_flour_percent],
                  total_water: [total_water, total_water_percent],
                  flour: [flour, flour_percent], 
                  salt: [salt, salt_percent], 
                  leaven: [leaven, leaven_flour_percent],
                  poolish: [poolish, poolish_flour_percent],
                  biga: [biga, biga_flour_percent],
                  water: [water, water_percent], 
                  total_dough: [total_dough, total_dough_percent]}

return data_table;
}


export default function App() {
    const [flour, setFlour] = useState(200);
    const [hydration, setHydration] = useState(10);
    const [leaven, setLeaven] = useState(0);
    const [poolish, setPoolish] = useState(0);
    const [biga, setBiga] = useState(0);
    const [ratioStarter, setRatioStarter] = useState(null);
    const [ratioBiga, setRatioBiga] = useState(null);
    const [amount, setAmount] = useState(1);
    const bread_table = sourmath(flour, hydration, leaven, poolish, biga, ratioStarter, ratioBiga, amount);
    const ratio_options = ["1:1", "3:2", "2:1"];
    return (
      <div className="App">       
        <h1>Baker's Percentage Calculator</h1>
        <img src={crumbs} style={{
          width: '100%',
          maxwidth: '500px'
        }}
        />
        <h3> A Web App by <a href="http://jclyn.info">Jaclyn Baughman</a> </h3> 
        <p> 🍞 Let's make bread! All we need is flour, water, salt, and yeast, plus some arithmetic. To use this calculator, choose how much flour you want to use, your hydration target, and your amount of preferment.</p>
        <h2>Calculator</h2>
        <div className="input-group">
          <label for="flourSlider">Flour (g)</label>
          <input
            id="flourSlider"
            type="number"
            min={200}
            max={1000}
            value={flour}
            onChange={(e) => {
              setFlour(e.target.valueAsNumber);
            }}
          />
          <input
          id="flourRange"
          type="range"
          min={200}
          max={1000}
          value={flour}
          onChange={(e) => {
            setFlour(e.target.valueAsNumber);
          }}
        />
        </div>
        <div className="input-group">
        <label for="hydrationSlider">Hydration Percentage</label>
          <input
            id="hydrationSlider"
            type="number"
            min={10}
            max={100}
            value={hydration}
            onChange={(e) => {
              setHydration(e.target.valueAsNumber);
            }}
          />
          <input
          id="hydrationRange"
          type="range"
          min={10}
          max={100}
          value={hydration}
          onChange={(e) => {
            setHydration(e.target.valueAsNumber);
          }}
        />
        </div>
        <div className="input-group">
        <label for="leavenSlider">Leaven/Starter (g) (flour, water, natural yeast)</label>
          <input
            id="leavenSlider"
            type="number"
            min={0}
            max={500}
            value={leaven}
            onChange={(e) => {
              setLeaven(e.target.valueAsNumber);
            }}
          />
          <Dropdown
           options={ratio_options}
           placeholder="Choose your ratio of flour:water (standard is 1:1)"
           value={ratioStarter}
           onChange={(options) => setRatioStarter(options.value)}
        />
          <input
          id="leavenRange"
          type="range"
          min={0}
          max={500}
          value={leaven}
          onChange={(e) => {
            setLeaven(e.target.valueAsNumber);
          }}
        />
        </div>
        <div className="input-group">
        <label for="poolishSlider">Poolish (g) (1:1 ratio of flour and water + commercial yeast) </label>
          <input
            id="poolishSlider"
            type="number"
            min={0}
            max={500}
            value={poolish}
            onChange={(e) => {
              setPoolish(e.target.valueAsNumber);
            }}
          />
          <input
          id="poolishRange"
          type="range"
          min={0}
          max={500}
          value={poolish}
          onChange={(e) => {
            setPoolish(e.target.valueAsNumber);
          }}
          />
        </div>
        <div className="input-group">
        <label for="bigaSlider">Biga (g) (flour, water, commercial yeast) </label>
          <input
            id="bigaSlider"
            type="number"
            min={0}
            max={1500}
            value={biga}
            onChange={(e) => {
              setBiga(e.target.valueAsNumber);
            }}
          />
          <Dropdown
          options={ratio_options}
          placeholder="Choose your ratio of flour:water (standard is 2:1)"
          value={ratioBiga}
          onChange={(options) => setRatioBiga(options.value)}
        />
          <input
          id="poolishBiga"
          type="range"
          min={0}
          max={1500}
          value={biga}
          onChange={(e) => {
            setBiga(e.target.valueAsNumber);
          }}
          />
        </div>
        <div className="input-group">
        <label for="amountRange">Choose the amount of loaves you want to bake</label>
        <input
          id="amountRange"
          type="number"
          min={0}
          max={1000}
          value={amount}
          onChange={(e) => {
            setAmount(e.target.valueAsNumber);
          }}
          />

        </div>
        <table>
          <tr>
            <td></td>
            <td>Weight</td>
            <td>Percent</td>
          </tr>
            <tr>
            <td>Flour</td>
            <td>{Math.round(bread_table.flour[0])}g</td>
            <td>{Math.round(bread_table.flour[1])}%</td>
            </tr>
            <tr>
            <td>Salt</td>
            <td>{Math.round(bread_table.salt[0])}g</td>
            <td>{Math.round(bread_table.salt[1])}%</td>
            </tr>
            <tr>
            <td>Leaven</td>
            <td>{Math.round(bread_table.leaven[0])}g</td>
            <td>{Math.round(bread_table.leaven[1])}%</td>
            </tr>
            <tr>
            <td>Poolish</td>
            <td>{Math.round(bread_table.poolish[0])}g</td>
            <td>{Math.round(bread_table.poolish[1])}%</td>
            </tr>
            <tr>
            <td>Biga</td>
            <td>{Math.round(bread_table.biga[0])}g</td>
            <td>{Math.round(bread_table.biga[1])}%</td>
            </tr>
            <tr>
            <td>Water</td>
            <td>{Math.round(bread_table.water[0])}g</td>
            <td>{Math.round(bread_table.water[1])}%</td>
            </tr>
            <tr>
            <td>Total Flour</td>
            <td>{Math.round(bread_table.total_flour[0])}g</td>
            <td>{Math.round(bread_table.total_flour[1])}%</td>
            </tr>
            <tr>
            <td>Total Water</td>
            <td>{Math.round(bread_table.total_water[0])}g</td>
            <td>{Math.round(bread_table.total_water[1])}%</td>
            </tr>
            <tr>
            <td>Total Dough</td>
            <td>{Math.round(bread_table.total_dough[0])}g</td>
            <td>{Math.round(bread_table.total_dough[1])}%</td>
          </tr>
        </table>
        <ul>
        <li> The percentage for the leaven/starter/poolish/biga is the amount of flour in the preferment mixture divided by the total flour in the recipe. If you aren't using any, put 0!</li>
        </ul>
        <h2> Bread Notes </h2>
        <ul>
          <li> <strong>Hydration + flour types:</strong> Whole wheat flour is very absorbant. Rye flours are genearlly less absorbant, but with a wide variety of white/medium/dark rye it's best to learn how your flours affect hydration and fermentaion before incorporating into your breads.  Higher ratios of whole wheat to white flour will need closer to 80% hydration. For pure white flour breads, start around 70% and add about 5-10% hydration when starting to incorporate whole wheat.</li>
          <br></br>
          <li> <strong> Hydration outcomes:</strong> The higher the hydration of the dough, the more air bubbles, rise, and chewiness you'll see (though the dough will also be sticky-er and wetter). But add too much water and you'll end up with a soupy mess. Then again, add too little and you’ll end up with a dense flying saucer...
              Setting your hydration will depend on what kind of end result you're looking for and what kind of flours you are using. Having a lower hydration means a stiffer and easier to work with dough, which might be great for shaping pizza, but may not produce those big airy bubbles you typically look for in sourdough.</li>
          <br></br>
          <li> <strong> Salt choice:</strong> I set the default salt percentage to 2%. You can add a little over or a little under, but don't stray too far from the 2% mark or you'll end up hurting the yeast activity/rise of your bread (yeasts hate salt!) </li>
          <br></br>
          <li> <strong> Why is flour always 100%?:</strong> Bakers use flour as the standard weight to divide the other ingredients against. This means our total flour will always be 100%, and we will always divide by that number. So a bread with 600g of water and 1000g of flour will be 60% hydration. With prefermented doughs, we add a yeasty mixture (starter/biga/poolish) that has its own water-to-flour ratio. This addition to the dough affects our hydration percentage, and needs to be added to our total water and total flour calculation.</li>
        </ul>
      </div>
    );
    }