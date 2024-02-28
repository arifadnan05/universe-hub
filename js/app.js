const loadData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    const allData = data.data.tools;
    // console.log(allData)
    displayData(allData)
}

const displayData = element => {
    const containerArea = document.getElementById('container-area')
    element.forEach(item => {
        // console.log(item)
        const contentCard = document.createElement('div');
        contentCard.classList = (`card w-96 bg-base-100 shadow-xl`);
        contentCard.innerHTML = `
        <figure><img src="${item.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">
            Shoes!
            <div class="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">Fashion</div> 
            <div class="badge badge-outline">Products</div>
          </div>
      </div>
        `;
        containerArea.appendChild(contentCard);
   });
}

loadData();