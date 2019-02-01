function makeBoard(target, size) {
  for (let y = 0; y < size; y += 1) {
    let rowNode = createNode("row");

    for (let x = 0; x < size; x += 1) {
      let cellNode = createNode("cell");

      rowNode.appendChild(cellNode);
    }

    target.appendChild(rowNode);
  }
}

function createNode(className) {
  const node = document.createElement("div");
  node.classList.add(className);

  return node;
}

function getIndexWithinParent(element) {
  return Array.from(element.parentNode.children).indexOf(element);
}

function getNextRow(element) {
  return element.parentElement.nextElementSibling
}

function addingHouses(x) {
  const arr = Array.from(document.querySelectorAll('.cell'))
    .filter((item, index) => index > 0);
  for (let i = 0; i < x; i++) {
    let randomPackageIndex = Math.floor(Math.random() * arr.length);
    arr[randomPackageIndex].classList.add('house');
    arr.splice(randomPackageIndex, 1);
  }
}




function addingTruck() {
  let truckBase = document.querySelector('.cell');
  truckBase.classList.add('truck');
}
function courierCall() {
  const houses = document.querySelectorAll('.house');
  let randomPackage = Math.floor(Math.random() * houses.length - 1);
  if (houses[randomPackage].children === undefined || houses[randomPackage].children.length > 0) {
      randomPackage = Math.floor(Math.random() * houses.length - 1);
  } else {
       const pack = document.createElement('div');
       pack.classList.add('new_package');
       console.log(houses);
       console.log(houses[randomPackage]);
       houses[randomPackage].appendChild(pack);
  }
}


let timeLeft=60;
let countDown = setInterval(function(){
  timeLeft-=1;
  document.getElementById('countdown').textContent=timeLeft + ' seconds left';
  console.log(timeLeft);
  if (timeLeft<=0){
    document.getElementById('countdown').textContent=' Time is up!';
    clearInterval(countDown)
  }
},100)

