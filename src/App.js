//import logo from './logo.svg';
import './App.css';

function App() {
  return (
 <>
<div className="app">
  
    <div className="app_left">
      <h3>Voting Booth</h3>
    <form>
  <div class="form-row">
    <div class="form-group">
      <label for="validationServer01">Your name</label>
      <input type="text" class="form-control is-valid" id="validationServer01" placeholder="First name"  required/>
   
</div>

    <div class="form-group">
      <label for="validationServerUsername">Points(1-100)</label>
      {/* <div class="input-group"> */}
      
        {/* <input type="text" class="form-control is-invalid" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required/> */}
        {/* <input id="quantity" type="number" name="points" min="1" max="100" required="" value=""></input> */}
      
      {/* </div> */}
       <input type="number" id="quantity" name="quantity" min="1" max="100"></input>
    </div>
        <div class="form-group col-md-12">
      <label for="inputState  ">Options</label>
      <select id="inputState" class="form-control">
        <option selected>The Office</option>
        <option>Trailer Park Boys</option>
        <option>Shrek</option>
        <option>Rick and Morty</option>
        <option>Brooklyn 99</option>
        <option>Park Recreation</option>
        <option>F.R.I.E.N.D.S</option>
        <option>Bojack Horseman</option>
        
      </select>
    </div>
  </div>


 
  <div class="d-grid gap-2">
  <button class="btn btn-primary" type="button" >Give Points</button>

</div>
</form>
    </div>
    <div className="app_right">
      <h3>Leaderboard</h3>
    </div>
</div>
<div className="all_votes">
      <h3>All Votes</h3>
      <table class="table table-borderless">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Voter</th>
          <th scope="col">Option</th>
          <th scope="col">Points</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
    </div>
 </>
  );
}

export default App;
