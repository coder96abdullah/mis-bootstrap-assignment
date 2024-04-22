const test=()=>{
    fetch('product.json')
    .then(res=>res.json())
    .then(data=>display(data))
}
test();
const display=datas=>{
const mainBox=document.getElementById('cardContainer');
    for (const data of datas) {
      const subBox=document.createElement('div');
      subBox.classList.add('col-md-4');
      subBox.innerHTML=`
      <div class="card h-100">
        <img src=${data.image} class="card-img-top h-50 mb-5" alt="Product 1">
        <div class="card-body">
          <h5 class="card-title">${data.title}</h5>
          <p class="card-text">${data.description}</p>
        </div>
      </div>`;
      mainBox.appendChild(subBox);
    }
}