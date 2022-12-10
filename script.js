fetch(
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false "
)
  .then((data) => {
    console.log(data);
    return data.json(); //converted to object
  })
  .then((objectData) => {
    console.log(objectData[0].id);
    let tableData = "";
    objectData.map((values) => {
      tableData += `<tr>
        <td width="15px"><img src="${values.image}"></td>
        <td width="200px">${values.name}</td>
        <td width="200px">${values.symbol.toUpperCase()}</td>
        <td width="200px">$${values.current_price}</td>
        <td width="200px">$${values.total_volume}</td>
        <td width="140px">${values.price_change_percentage_24h}%</td>
        <td>MktCap : $${values.market_cap}</td>

                </tr>`;
    });
    document.getElementById("table-body").innerHTML = tableData;
  });
