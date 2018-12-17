import React from 'react'
import ReCAPTCHA from "react-google-recaptcha"
import './style.css'
class App extends React.Component{
  onChange=(value)=>{
    console.log("Captcha value:", value);
  }
  
  render(){
    return(
      <div>
       <ReCAPTCHA
    sitekey="6LeNR4IUAAAAAOio1wMPNDRn6EBcob1z7x3VCwVU"
    onChange={this.onChange}
  /> 
      <div id="HeaderContainer">
        <div id="Header">
          <center>
            <h1>Image Editor</h1>
            </center>
          <div className="Clear" />
        </div>
      </div>
      <div id="Content">
       
        <img id="example" src="/images/example1_600.jpg" />
        <div id="Filters">
          <div className="Filter">
            <div className="FilterName">
              <p>brightness</p>
            </div>
            <div className="FilterSetting">
              <input type="range" min={-100} max={100} step={1} defaultValue={0} data-filter="brightness" />
              <span className="FilterValue">0</span>
            </div>
          </div>
          <div className="Filter">
            <div className="FilterName">
              <p>contrast</p>
            </div>
            <div className="FilterSetting">
              <input type="range" min={-100} max={100} step={1} defaultValue={0} data-filter="contrast" />
              <span className="FilterValue">0</span>
            </div>
          </div>
          <div className="Filter">
            <div className="FilterName">
              <p>saturation</p>
            </div>
            <div className="FilterSetting">
              <input type="range" min={-100} max={100} step={1} defaultValue={0} data-filter="saturation" />
              <span className="FilterValue">0</span>
            </div>
          </div>
          <div className="Filter">
            <div className="FilterName">
              <p>vibrance</p>
            </div>
            <div className="FilterSetting">
              <input type="range" min={-100} max={100} step={1} defaultValue={0} data-filter="vibrance" />
              <span className="FilterValue">0</span>
            </div>
          </div>
          <div className="Filter">
            <div className="FilterName">
              <p>exposure</p>
            </div>
            <div className="FilterSetting">
              <input type="range" min={-100} max={100} step={1} defaultValue={0} data-filter="exposure" />
              <span className="FilterValue">0</span>
            </div>
          </div>
          <div className="Filter">
            <div className="FilterName">
              <p>hue</p>
            </div>
            <div className="FilterSetting">
              <input type="range" min={0} max={100} step={1} defaultValue={0} data-filter="hue" />
              <span className="FilterValue">0</span>
            </div>
          </div>
          <div className="Filter">
            <div className="FilterName">
              <p>sepia</p>
            </div>
            <div className="FilterSetting">
              <input type="range" min={0} max={100} step={1} defaultValue={0} data-filter="sepia" />
              <span className="FilterValue">0</span>
            </div>
          </div>
          <div className="Filter">
            <div className="FilterName">
              <p>gamma</p>
            </div>
            <div className="FilterSetting">
              <input type="range" min={0} max={10} step="0.1" defaultValue={0} data-filter="gamma" />
              <span className="FilterValue">0</span>
            </div>
          </div>
          <div className="Filter">
            <div className="FilterName">
              <p>noise</p>
            </div>
            <div className="FilterSetting">
              <input type="range" min={0} max={100} step={1} defaultValue={0} data-filter="noise" />
              <span className="FilterValue">0</span>
            </div>
          </div>
          <div className="Filter">
            <div className="FilterName">
              <p>clip</p>
            </div>
            <div className="FilterSetting">
              <input type="range" min={0} max={100} step={1} defaultValue={0} data-filter="clip" />
              <span className="FilterValue">0</span>
            </div>
          </div>
          <div className="Filter">
            <div className="FilterName">
              <p>sharpen</p>
            </div>
            <div className="FilterSetting">
              <input type="range" min={0} max={100} step={1} defaultValue={0} data-filter="sharpen" />
              <span className="FilterValue">0</span>
            </div>
          </div>
          <div className="Filter">
            <div className="FilterName">
              <p>stackBlur</p>
            </div>
            <div className="FilterSetting">
              <input type="range" min={0} max={20} step={1} defaultValue={0} data-filter="stackBlur" />
              <span className="FilterValue">0</span>
            </div>
          </div>
          <div className="Clear" />
        </div>
        <h3>Preset Examples</h3>
        <p>CamanJS has a number of preset filters that show off how to generate consistent effects on many types of images.</p>
        <img id="preset-example" src="/images/example2_600.jpg" data-caman-hidpi="/images/example2_1200.jpg" />
        <div id="PresetFilters">
          <a data-preset="vintage">Vintage</a>
          <a data-preset="lomo">Lomo</a>
          <a data-preset="clarity">Clarity</a>
          <a data-preset="sinCity">Sin City</a>
          <a data-preset="sunrise">Sunrise</a>
          <a data-preset="crossProcess">Cross Process</a>
          <a data-preset="orangePeel">Orange Peel</a>
          <a data-preset="love">Love</a>
          <a data-preset="grungy">Grungy</a>
          <a data-preset="jarques">Jarques</a>
          <a data-preset="pinhole">Pinhole</a>
          <a data-preset="oldBoot">Old Boot</a>
          <a data-preset="glowingSun">Glowing Sun</a>
          <a data-preset="hazyDays">Hazy Days</a>
          <a data-preset="herMajesty">Her Majesty</a>
          <a data-preset="nostalgia">Nostalgia</a>
          <a data-preset="hemingway">Hemingway</a>
          <a data-preset="concentrate">Concentrate</a>
          <a data-preset="blackAndWhite">Black and White</a>
          <a data-preset="bright">Bright</a>
        </div>
      </div>
    </div> 
    )
  }
}
export default App