import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContainerExample from './components/ContainerExample';
import './components/ContainerExample.css';

import VerticalExample from './components/VerticalExample';
import './components/VerticalExample.css';

import BasicExample from './components/BasicExample';
import StackedExample from './components/StackedExample';
import NavDropdownExample from './components/NavDropDownExample';
import OffcanvasExample from './components/OffCanvasExample';
import OffcanvasModified from './components/OffcanvasModified';

import './components/NavExample.css';

function App() {
  return (
    <div className="App">
      <p> This is React Bootstrap Project</p>
      <div className="cExample">
        <ContainerExample /> 
      </div>
      <div className="vertical">
        <VerticalExample/>
      </div>
      <div className='basic__example'>
        <BasicExample/>
      </div>
      <div className="stacked__example">
        <StackedExample/>
      </div>
      <div className="navdropdown__example">
        <NavDropdownExample/>
      </div>

      <div class="offcanvas__example">
        <OffcanvasExample/>
      </div>
      <h3> Testing the modifications to OffCanvas</h3>
      <div class="offcanvas__modified">
        <OffcanvasModified/>
      </div>


    </div>
    
  );
}

export default App;
