
class Calculator{
  screens;
  div;
  constructor(div){
    this.div=document.querySelector(div);
    

    this.div.innerHTML=`<div class="w-50 card ml-5">
    <input type="text" class="form-control input-lg" readonly id="screen">
    <table style="width: 100%;" id="calc1">
      <tr>
        <td><button class="btn btn-light">   1</button></td>
        <td><button class="btn btn-light">   2</button></td>
        <td><button class="btn btn-light">   3</button></td>
        <td><button class="btn btn-light">   4</button></td>
        <td><button class="btn btn-light">   5</button></td>
        <td><button class="btn btn-light">   +</button></td>
      </tr>
      <tr>
        <td><button class="btn btn-light">   6</button></td>
        <td><button class="btn btn-light">   7</button></td>
        <td><button class="btn btn-light">   8</button></td>
        <td><button class="btn btn-light">   9</button></td>
        <td><button class="btn btn-light">   0</button></td>
        <td><button class="btn btn-light">   -</button></td>
      </tr>
      <tr>
        <td colspan="6"><button class="btn btn-dark btn-block">=</button></td>
      </tr>
    </table>
    </div>`;
    this.screens=document.querySelector('#screen');

    const btn=document.querySelectorAll('table button');

  btn.forEach((bt)=>{
   
    bt.addEventListener('click',()=>{
     if (bt.innerText=='=') {
      this.showAnswer()
     }
     else{
       
      this.showNumbas(bt.innerText)
     }
    })
  })
    
  }

  showNumbas(numbers){
    //log(numbers)

   this.screens.value+=numbers
  }

  showAnswer(){
      try { 
        this.screens.value=eval(this.screens.value)
        
      } catch (error) {
        alert('INvalid something')
        this.screens.value=''
      }
  }

  init(){

  }
}

// export default Calculator
