import { useState } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import "./App.css"
import crumbs from './crumbs.jpg';
import sourMath  from "./sourMath.js";
import  enrichedMath  from "./enrichedMath.js";
import { SelfHidingRow } from "./SelfHidingRow.jsx";



export default function App() {
    const [flour, setFlour] = useState(200);
    const [hydration, setHydration] = useState(10);
    const [preferment, setPreferment] = useState(0);
    const [hydroPreferment, setHydroPreferment] = useState(null);
    const [yeast, setYeast] = useState(0);
    const [salt, setSalt] = useState(0);
    const [sugar, setSugar] = useState(0);
    const [milk, setMilk] = useState(0);
    const [egg, setEgg] = useState(0);
    const [yolk, setYolk] = useState(0);
    const [white, setWhite] = useState(0);
    const [butter, setButter] = useState(0);
    const [oil, setOil] = useState(0);
    const [water, setWater] = useState(0);
    const [amount, setAmount] = useState(1);
    const [breadtype, setBreadType] = useState(null);
    const bread_options = ["Lean", "Enriched"];
    const isEnriched = breadtype === "Enriched";
    const bread_table = isEnriched 
    ? enrichedMath(flour, water, salt, sugar, preferment, hydroPreferment, yeast, milk, egg, yolk, white, butter, oil, amount)
    :  sourMath(flour, hydration, yeast, preferment, hydroPreferment, amount);

    return (
      <div className="App"> 
        <h1>🥖🌾🌻🍂✨</h1>      
        <h1>Baker's Percentage Calculator</h1>
        <h3>What kind of dough are you making?</h3>
        <div className="input-group">
        <Dropdown
           options={bread_options}
           placeholder="Lean for flour, salt, water, yeast, Enriched if adding butter, milk, and/or eggs."
           value={breadtype}
           onChange={(options) => setBreadType(options.value)}
          />
          </div>

        {breadtype == "Lean" && <>
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
          <div className="input-group"></div>
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
          <label for="yeastSlider">Active Dry Yeast (g)</label>
          <input
            id="yeastSlider"
            type="number"
            min={0}
            max={100}
            value={yeast}
            onChange={(e) => {
              setYeast(e.target.valueAsNumber);
            }}
          />
          <input
          id="yeastRange"
          type="range"
          min={0}
          max={100}
          value={yeast}
          onChange={(e) => {
            setYeast(e.target.valueAsNumber);
            }}
          />
        </div>
        <div className="input-group">
        <label for="prefermentSlider">Preferment (g)</label>
          <input
            id="prefermentSlider"
            type="number"
            min={0}
            max={2000}
            value={preferment}
            onChange={(e) => {
              setPreferment(e.target.valueAsNumber);
            }}
          />
          <label for="hydroprefermentSlider"> &amp; Preferment Hydration (%) </label>
            <input
            id="hydroprefermentSlider"
            type="number"
            min={0}
            max={100}
            value={hydroPreferment}
            placeholder='%'
            onChange={(e) => {
              setHydroPreferment(e.target.valueAsNumber);
            }}
          />
          <label> (mixture of flour, water,  yeast)</label>
          <input
            id="prefermentRange"
            type="range"
            min={0}
            max={1000}
            value={preferment}
            onChange={(e) => {
              setPreferment(e.target.valueAsNumber);
            }}
         />
        </div>
        </>
        }
      
        {breadtype == "Enriched" && <>
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
          <label for="yeastSlider">Active Dry Yeast (g)</label>
          <input
            id="yeastSlider"
            type="number"
            min={0}
            max={100}
            value={yeast}
            onChange={(e) => {
              setYeast(e.target.valueAsNumber);
            }}
          />
          <input
          id="yeastRange"
          type="range"
          min={0}
          max={100}
          value={yeast}
          onChange={(e) => {
            setYeast(e.target.valueAsNumber);
            }}
          />
        </div>
        <div className="input-group">
        <label for="prefermentSlider">Preferment (g)</label>
          <input
            id="prefermentSlider"
            type="number"
            min={0}
            max={2000}
            value={preferment}
            onChange={(e) => {
              setPreferment(e.target.valueAsNumber);
            }}
          />
          <label for="hydroprefermentSlider"> &amp; Preferment Hydration (%) </label>
          <input
          id="hydroprefermentRange"
           type="number"
           min={0}
           max={120}
           placeholder="%"
           value={hydroPreferment}
           onChange={(e) => setHydroPreferment(e.target.valueAsNumber)}
          />
          <label> (mixture of flour, water,  yeast)</label>
          <input
            id="prefermentRange"
            type="range"
            min={0}
            max={1000}
            value={preferment}
            onChange={(e) => {
              setPreferment(e.target.valueAsNumber);
            }}
         />
        </div>
        <div className="input-group">
          <label for="milkSlider">Milk (g)</label>
          <input
            id="milkSlider"
            type="number"
            min={0}
            max={1000}
            value={milk}
            onChange={(e) => {
              setMilk(e.target.valueAsNumber);
            }}
          />
          <input
          id="milkRange"
          type="range"
          min={0}
          max={1000}
          value={milk}
          onChange={(e) => {
            setMilk(e.target.valueAsNumber);
            }}
          />
        </div>
        <div className="input-group">
          <label for="saltSlider">Salt (g)</label>
          <input
            id="saltSlider"
            type="number"
            min={0}
            max={1000}
            value={salt}
            onChange={(e) => {
              setSalt(e.target.valueAsNumber);
            }}
          />
          <input
          id="saltRange"
          type="range"
          min={0}
          max={1000}
          value={salt}
          onChange={(e) => {
            setSalt(e.target.valueAsNumber);
            }}
          />
        </div>
        <div className="input-group">
          <label for="sugarSlider">Sugar (g)</label>
          <input
            id="sugarSlider"
            type="number"
            min={0}
            max={1000}
            value={sugar}
            onChange={(e) => {
              setSugar(e.target.valueAsNumber);
            }}
          />
          <input
          id="sugarRange"
          type="range"
          min={0}
          max={1000}
          value={sugar}
          onChange={(e) => {
            setSugar(e.target.valueAsNumber);
            }}
          />
        </div>
        <div className="input-group">
          <label for="waterSlider">Water (g)</label>
          <input
            id="waterSlider"
            type="number"
            min={0}
            max={1000}
            value={water}
            onChange={(e) => {
              setWater(e.target.valueAsNumber);
            }}
          />
          <input
          id="waterRange"
          type="range"
          min={0}
          max={1000}
          value={water}
          onChange={(e) => {
            setWater(e.target.valueAsNumber);
            }}
          />
        </div>
        <div className="input-group">
          <label for="eggSlider">Whole Egg (#)</label>
          <input
            id="eggSlider"
            type="number"
            min={0}
            max={100}
            value={egg}
            onChange={(e) => {
              setEgg(e.target.valueAsNumber);
            }}
          />
          <input
          id="eggRange"
          type="range"
          min={0}
          max={100}
          value={egg}
          onChange={(e) => {
            setEgg(e.target.valueAsNumber);
            }}
          />
        </div>
        <div className="input-group">
          <label for="yolkSlider">Egg Yolk (#)</label>
          <input
            id="yolkSlider"
            type="number"
            min={0}
            max={100}
            value={yolk}
            onChange={(e) => {
              setYolk(e.target.valueAsNumber);
            }}
          />
          <input
          id="yolkRange"
          type="range"
          min={0}
          max={100}
          value={yolk}
          onChange={(e) => {
            setYolk(e.target.valueAsNumber);
            }}
          />
        </div>
        <div className="input-group">
          <label for="whiteSlider">Egg White (#)</label>
          <input
            id="whiteSlider"
            type="number"
            min={0}
            max={100}
            value={white}
            onChange={(e) => {
              setWhite(e.target.valueAsNumber);
            }}
          />
          <input
          id="whiteRange"
          type="range"
          min={0}
          max={100}
          value={white}
          onChange={(e) => {
            setWhite(e.target.valueAsNumber);
            }}
          />
        </div>
        <div className="input-group">
          <label for="butterSlider">Unsalted Butter (g)</label>
          <input
            id="butterSlider"
            type="number"
            min={0}
            max={1000}
            value={butter}
            onChange={(e) => {
              setButter(e.target.valueAsNumber);
            }}
          />
          <input
          id="butterRange"
          type="range"
          min={0}
          max={1000}
          value={butter}
          onChange={(e) => {
            setButter(e.target.valueAsNumber);
            }}
          />
        </div>
        <div className="input-group">
          <label for="oilSlider">Extra-Virgin Olive Oil (g)</label>
          <input
            id="oilSlider"
            type="number"
            min={0}
            max={1000}
            value={oil}
            onChange={(e) => {
              setOil(e.target.valueAsNumber);
            }}
          />
          <input
          id="oilRange"
          type="range"
          min={0}
          max={1000}
          value={oil}
          onChange={(e) => {
            setOil(e.target.valueAsNumber);
            }}
          />
        </div>
        </>
        }
        <div className="input-group">
        <label for="amountRange">Choose the number of loaves you want to bake</label>
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
          <SelfHidingRow title='Flour' unit='g' dataTuple={bread_table.flour} />
          <SelfHidingRow title='Salt' unit='g' dataTuple={bread_table.salt} />
          <SelfHidingRow title='Sugar' unit='g' dataTuple={bread_table.sugar} />
          <SelfHidingRow title='Preferment' unit='g' dataTuple={bread_table.preferment} />
          <SelfHidingRow title='Active Dry Yeast' unit='g' dataTuple={bread_table.yeast} />
          <SelfHidingRow title='Milk' unit='g' dataTuple={bread_table.milk} />
          <SelfHidingRow title='Whole Egg' unit='#' dataTuple={bread_table.egg} />
          <SelfHidingRow title='Egg Yolk' unit='#' dataTuple={bread_table.yolk} />
          <SelfHidingRow title='Egg White' unit='#' dataTuple={bread_table.white} />
          <SelfHidingRow title='Unsalted Butter' unit='g' dataTuple={bread_table.butter} />
          <SelfHidingRow title='Extra-virgin Olive Oil' unit='g' dataTuple={bread_table.oil} />
          <SelfHidingRow title='Water' unit='g' dataTuple={bread_table.water} />
          <SelfHidingRow title='Total Water' unit='g' dataTuple={bread_table.total_water} />
          <SelfHidingRow title='Total Water and Hydration Percent' unit='g' dataTuple={bread_table.hydro} />
          <SelfHidingRow title='Total Flour' unit='g' dataTuple={bread_table.total_flour} />
          <SelfHidingRow title='Total Dough' unit='g' dataTuple={bread_table.total_dough} />
        </table>
        <ul>
        <li> The percentage for the preferment is the amount of flour in the preferment mixture divided by the total flour in the recipe. If you aren't using any, put 0!</li>
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
        <h3> A web app by <a href="https://www.notion.so/Meet-Jaclyn-3376e41006724ae29445f3733c96c4eb">Jaclyn Baughman</a> </h3> 
      </div>
    );
    }