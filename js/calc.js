class Calculator {
  screen = "";
  div;
  finalAns;
  constructor(div) {
    this.div = document.querySelector(div);
    this.div.innerHTML = `<div class="w-100">
        <input type="text" class="form-control input-lg" readonly id="screen">
        <table style="width:100%;" id="tb1">
         <tr>
           <td><button class="btn btn-light">1</button></td>
           <td><button class="btn btn-light">2</button></td>
           <td><button class="btn btn-light">3</button></td>
           <td><button class="btn btn-light">4</button></td>
           <td><button class="btn btn-light">5</button></td>
           <td><button class="btn btn-light">+</button></td>
         </tr>
         <tr>
           <td><button class="btn btn-light">6</button></td>
           <td><button class="btn btn-light">7</button></td>
           <td><button class="btn btn-light">8</button></td>
           <td><button class="btn btn-light">9</button></td>
           <td><button class="btn btn-light">0</button></td>
           <td><button class="btn btn-light">-</button></td>
         </tr>
         <tr>
           <td colspan="6"><button class="btn btn-dark">=</button></td>
           <td colspan="6"><button class="btn btn-dark">del</button></td>
           <td colspan="6"><button class="btn btn-danger btn-block" onclick="clear()">CLR</button></td>
         </tr>
        </table>
      </div>`;
    this.screen = document.querySelector(`${div} input`);
    const btnn = document.querySelectorAll(`${div} button`);

    btnn.forEach((bt) => {
      bt.addEventListener("click", () => {
        if (bt.innerText == "=") {
          this.showAnswer();
        }
        if (bt.innerText == "del") {
          let delt = this.screen.value.slice(0, -1);
          this.screen.value = delt;
        } else {
          this.showNumbers(bt.innerText);
        }
      });
    });
  }

  showNumbers(numbers) {
    console.log(this.finalAns);
    if (this.screen.value == this.finalAns) this.screen.value = "";
    if (
      this.screen.value.charAt(this.screen.value.length - 1) == "+" &&
      numbers == "-"
    ) {
      this.screen.value = this.screen.value.slice(0, -1);
      this.screen.value += numbers;
    } else if (
      this.screen.value.charAt(this.screen.value.length - 1) == "-" &&
      numbers == "+"
    ) {
      this.screen.value = this.screen.value.slice(0, -1);
      this.screen.value += numbers;
    } else {
      this.screen.value += numbers;
    }
  }
  showAnswer() {
    try {
      this.finalAns = eval(this.screen.value);
      this.screen.value = this.finalAns;
    } catch (error) {
      alert("Invalid something");
      this.screen.value = "";
    }
  }
  init() {}
}
class Calculator2 extends Calculator {
  color;
  constructor(div2, colorId) {
    super(div2);
    document.querySelector(colorId).addEventListener("change", function () {
      this.color = document.querySelector("#colorInp").value;
      document.querySelector(div2).style.backgroundColor = this.color;
    });
  }
}
