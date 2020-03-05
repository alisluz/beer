import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';

function App() {
  return (
    <div id ="app"> 
      <aside>
        <div className="input" >
          <img src="https://qa-m1-dr.abi-sandbox.net/media/catalog/product//-/R/-R002151.png"></img>
          <br />
          <strong>Modelo Negra</strong>
          <h2>12 Unit - 33oz Bottle</h2>
          <br />
          <h1>RD$32.00/Unit</h1>
          <h3>Buy 3, get 1 free</h3>
          <br />
          <h4>View Details</h4>
          <div className="input-button">
            <button><strong>-</strong></button>
            <input name="qtd" />
            <button>+</button>
            <button type="submit">ADD</button>
          </div>
        </div>
      </aside>

      <aside>
        <div className="input" >
          <img src="https://qa-m1-dr.abi-sandbox.net/media/catalog/product//-/R/-R002151.png"></img>
          <br />
          <strong>President Light</strong>
          <h2>16 Unit - 330ml Bottle</h2>
          <br />
          <h1>RD$43.00/Unit</h1>
          <h3>Buy 3, get 1 free Red Bull or 2 Pepsi Black</h3>
          <br />
          <h4>View Details</h4>
          <div className="input-button">
            <button><strong>-</strong></button>
            <input name="qtd" />
            <button>+</button>
            <button type="submit">ADD</button>
          </div>
        </div>
      </aside>

      <aside>
        <div className="input" >
          <img src="https://qa-m1-dr.abi-sandbox.net/media/catalog/product//-/R/-R002151.png"></img>
          <br />
          <strong>Brahma Light very veru light 33 Onz - Caja [12 Botellas]</strong>
          <h2>16 Unit - 330ml Bottle</h2>
          <br />
          <h1>RD$43.00/Unit</h1>
          <h3>For every 5 you buy, get up to 2 free.</h3>
          <br />
          <h4>View Details</h4>
          <div className="input-button">
            <button><strong>-</strong></button>
            <input name="qtd" />
            <button>+</button>
            <button type="submit">ADD</button>
          </div>
        </div>
      </aside>

      <aside>
        <div className="input" >
          <img src="https://qa-m1-dr.abi-sandbox.net/media/catalog/product//-/R/-R002151.png"></img>
          <br />
          <strong>Budweiser</strong>
          <h2>16 Unit - 330ml Bottle and extra long summary on multiple lines</h2>
          <br />
          <h1>RD$26.00/Unit</h1>
          <h3>For every 5 you buy, get up to 3 free Red Bull or 2 free Pepsi Balck.</h3>
          <br />
          <h4>View Details</h4>
          <div className="input-button">
            <button><strong>-</strong></button>
            <input name="qtd" />
            <button>+</button>
            <button type="submit">ADD</button>
          </div>
        </div>
      </aside>

    </div>
  );
}

export default App;
