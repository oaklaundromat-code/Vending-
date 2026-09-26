<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1">

  <title>Oaks Inventory Tracker</title>

  <style>
    *{
      box-sizing:border-box;
    }

    body{
      margin:0;
      font-family:Arial,sans-serif;
      background:#f5f7fa;
      color:#18212e;
    }

    header{
      background:#17365d;
      color:white;
      padding:18px;
    }

    header h1{
      margin:0;
      font-size:28px;
    }

    header p{
      margin:6px 0 0;
      opacity:.9;
    }

    nav{
      position:sticky;
      top:0;
      z-index:20;
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:7px;
      padding:10px;
      background:white;
      border-bottom:1px solid #ccc;
    }

    button{
      border:0;
      border-radius:10px;
      padding:14px 10px;
      font-size:16px;
      font-weight:bold;
      background:#e5ebf2;
      color:#17365d;
      cursor:pointer;
    }

    button.active,
    button.primary{
      background:#1f4e78;
      color:white;
    }

    main{
      max-width:1200px;
      margin:auto;
      padding:12px;
    }

    .page{
      display:none;
    }

    .page.active{
      display:block;
    }

    .card{
      background:white;
      border-radius:12px;
      padding:16px;
      margin-bottom:16px;
      box-shadow:0 1px 4px rgba(0,0,0,.08);
    }

    .store-card{
      border-left:5px solid #1f4e78;
    }

    h2{
      margin-top:0;
      color:#17365d;
    }

    h3{
      color:#17365d;
      margin-top:24px;
    }

    label{
      display:block;
      margin-top:14px;
      margin-bottom:5px;
      font-weight:bold;
    }

    select,
    input{
      width:100%;
      padding:12px;
      font-size:18px;
      border:1px solid #aaa;
      border-radius:8px;
    }

    .grid2{
      display:grid;
      grid-template-columns:1fr;
      gap:10px;
    }

    .metrics{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:8px;
      margin-bottom:16px;
    }

    .metric{
      background:#eef3f8;
      border-radius:9px;
      padding:10px;
    }

    .metric strong{
      display:block;
      font-size:21px;
      color:#17365d;
    }

    .metric span{
      color:#596675;
      font-size:14px;
    }

    .message{
      display:none;
      padding:12px;
      font-weight:bold;
    }

    table{
      width:100%;
      border-collapse:collapse;
    }

    th{
      text-align:left;
      background:#1f4e78;
      color:white;
      padding:8px;
    }

    td{
      padding:8px;
      border-bottom:1px solid #ddd;
      vertical-align:top;
    }

    .small{
      color:#596675;
    }

    .good{
      background:#e6f4ea;
      padding:12px;
      border-radius:8px;
    }

    @media(max-width:700px){
      table,
      tbody,
      tr,
      td{
        display:block;
      }

      thead{
        display:none;
      }

      tr{
        border:1px solid #ccc;
        border-radius:10px;
        padding:8px;
        margin-bottom:10px;
      }

      td{
        display:grid;
        grid-template-columns:125px 1fr;
        gap:8px;
      }

      td::before{
        content:attr(data-label);
        font-weight:bold;
        color:#596675;
      }
    }

    @media(min-width:700px){
      nav{
        grid-template-columns:repeat(6,1fr);
      }

      .grid2{
        grid-template-columns:1fr 1fr;
      }

      .metrics{
        grid-template-columns:repeat(4,1fr);
      }
    }
  </style>
</head>

<body>

<header>
  <h1>Oaks Inventory Tracker</h1>

  <p>
    Fluff &amp; Fold • Snack Vending • Laundry Vending • Shopping List
  </p>
</header>


<nav>

  <button
    class="tab active"
    data-page="fluff">
    Fluff &amp; Fold
  </button>

  <button
    class="tab"
    data-page="snacks">
    Snack Vending
  </button>

  <button
    class="tab"
    data-page="laundry">
    Laundry Vending
  </button>

  <button
    class="tab"
    data-page="shopping">
    Shopping List
  </button>

  <button
    class="tab"
    data-page="tracker">
    Tracker
  </button>

  <button
    class="tab"
    data-page="prices">
    Price Changes
  </button>

</nav>


<div id="message" class="message"></div>


<main>

  <!-- FLUFF &amp; FOLD -->

  <section
    id="fluff"
    class="page active">

    <div class="card">

      <h2>Fluff &amp; Fold</h2>

      <p class="small">
        Counter retail inventory and Cleantie movement.
      </p>

      <div
        id="fluffMetrics"
        class="metrics">
      </div>

      <label>Product</label>

      <select id="fluffItem"></select>

      <div class="grid2">

        <div>
          <label>Physical On Hand</label>

          <input
            id="fluffOnHand"
            type="number"
            min="0">
        </div>

        <div>
          <label>Reorder Point</label>

          <input
            id="fluffReorder"
            type="number"
            min="0">
        </div>

      </div>

      <button
        class="primary"
        id="saveFluff"
        style="width:100%;margin-top:14px">
        Save Fluff &amp; Fold Count
      </button>

      <h3>Products</h3>

      <table>

        <thead>
          <tr>
            <th>Product</th>
            <th>Cost</th>
            <th>Sell</th>
            <th>Margin</th>
            <th>Units</th>
            <th>Weekly</th>
            <th>On Hand</th>
            <th>Need</th>
            <th>Supplier</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody id="fluffRows"></tbody>

      </table>

    </div>

  </section>


  <!-- SNACK VENDING -->

  <section
    id="snacks"
    class="page">

    <div class="card">

      <h2>Snack Vending</h2>

      <div
        id="snackMetrics"
        class="metrics">
      </div>

      <h3>Count Stock</h3>

      <label>Product</label>

      <select id="snackItem"></select>

      <div class="grid2">

        <div>
          <label>On Hand</label>

          <input
            id="snackOnHand"
            type="number"
            min="0">
        </div>

        <div>
          <label>Target</label>

          <input
            id="snackTarget"
            type="number"
            min="0">
        </div>

      </div>

      <button
        class="primary"
        id="saveSnack"
        style="width:100%;margin-top:14px">
        Save Snack Count
      </button>

      <h3>Buying Plan</h3>

      <table>

        <thead>
          <tr>
            <th>Product</th>
            <th>On Hand</th>
            <th>Target</th>
            <th>Need</th>
            <th>Cases</th>
            <th>Supplier</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody id="snackBuyRows"></tbody>

      </table>


      <h3>Machine Slots</h3>

      <table>

        <thead>
          <tr>
            <th>Slot</th>
            <th>Product</th>
            <th>Vend Price</th>
            <th>Cost</th>
            <th>Profit</th>
            <th>Margin</th>
          </tr>
        </thead>

        <tbody id="snackSlots"></tbody>

      </table>

    </div>

  </section>


  <!-- LAUNDRY VENDING -->

  <section
    id="laundry"
    class="page">

    <div class="card">

      <h2>Laundry Vending</h2>

      <div
        id="laundryMetrics"
        class="metrics">
      </div>

      <h3>Count Stock</h3>

      <label>Product</label>

      <select id="laundryItem"></select>

      <div class="grid2">

        <div>
          <label>On Hand</label>

          <input
            id="laundryOnHand"
            type="number"
            min="0">
        </div>

        <div>
          <label>Target</label>

          <input
            id="laundryTarget"
            type="number"
            min="0">
        </div>

      </div>

      <button
        class="primary"
        id="saveLaundry"
        style="width:100%;margin-top:14px">
        Save Laundry Count
      </button>


      <h3>Buying Plan</h3>

      <table>

        <thead>
          <tr>
            <th>Product</th>
            <th>On Hand</th>
            <th>Target</th>
            <th>Need</th>
            <th>Cases</th>
            <th>Supplier</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody id="laundryBuyRows"></tbody>

      </table>


      <h3>Machine Slots</h3>

      <table>

        <thead>
          <tr>
            <th>Slot</th>
            <th>Product</th>
            <th>Vend Price</th>
            <th>Cost</th>
            <th>Profit</th>
            <th>Margin</th>
          </tr>
        </thead>

        <tbody id="laundrySlots"></tbody>

      </table>

    </div>

  </section>


  <!-- SHOPPING LIST -->

  <section
    id="shopping"
    class="page">

    <div class="card">

      <h2>Shopping List</h2>

      <p class="small">
        Products currently needing purchase, grouped by store.
      </p>

      <div
        id="shoppingMetrics"
        class="metrics">
      </div>

      <div id="shoppingStores"></div>


      <h3>Sudsy Price Reference</h3>

      <p class="small">
        Documented purchase prices from recent Sudsy orders.
        Shipping and tax are not included unless specifically shown.
      </p>

      <table>

        <thead>
          <tr>
            <th>Date</th>
            <th>Product</th>
            <th>Pack</th>
            <th>Order Cost</th>
            <th>Unit Cost</th>
            <th>Note</th>
          </tr>
        </thead>

        <tbody id="sudsyRows"></tbody>

      </table>

    </div>

  </section>


  <!-- TRACKER -->

  <section
    id="tracker"
    class="page">

    <div class="card">

      <h2>Movement Tracker</h2>

      <div
        id="trackerMetrics"
        class="metrics">
      </div>

      <table>

        <thead>
          <tr>
            <th>Product</th>
            <th>Units</th>
            <th>Revenue</th>
            <th>Gross Profit</th>
            <th>Margin</th>
            <th>Weekly</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody id="trackerRows"></tbody>

      </table>

    </div>

  </section>


  <!-- PRICE CHANGES -->

  <section
    id="prices"
    class="page">

    <div class="card">

      <h2>Price Change Log</h2>

      <table>

        <thead>
          <tr>
            <th>Date</th>
            <th>Product</th>
            <th>Old</th>
            <th>New</th>
            <th>Change</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody id="priceRows"></tbody>

      </table>

    </div>

  </section>

</main>


<script>

const $ = id =>
  document.getElementById(id);


let state = {

  flufffold: [],

  snacks: {
    slots: [],
    buying: []
  },

  laundry: {
    slots: [],
    buying: []
  },

  shopping: [],

  sudsyReference: [],

  tracker: [],

  priceChanges: []

};


function num(v) {

  const n = Number(
    String(v ?? '')
      .replace(/[^0-9.-]/g, '')
  );

  return Number.isFinite(n)
    ? n
    : 0;
}


function money(v) {

  if (
    v === '' ||
    v === null ||
    v === undefined
  ) {
    return 'UNKNOWN';
  }

  const cleaned =
    String(v)
      .replace(/[^0-9.-]/g, '');

  const n = Number(cleaned);

  if (!Number.isFinite(n)) {
    return String(v);
  }

  return '$' + n.toFixed(2);
}


function msg(
  text,
  error = false
) {

  $('message').style.display =
    'block';

  $('message').style.background =
    error
      ? '#ffdede'
      : '#dff4df';

  $('message').textContent =
    text;
}


function fillOptions(
  id,
  values
) {

  $(id).innerHTML =
    values
      .map(v => `<option>${v}</option>`)
      .join('');
}


/* TABS */

document
  .querySelectorAll('.tab')
  .forEach(btn => {

    btn.onclick = () => {

      document
        .querySelectorAll('.tab')
        .forEach(
          x =>
            x.classList.remove('active')
        );

      document
        .querySelectorAll('.page')
        .forEach(
          x =>
            x.classList.remove('active')
        );

      btn.classList.add('active');

      $(btn.dataset.page)
        .classList.add('active');
    };

  });


/* FLUFF & FOLD */

function renderFluff() {

  fillOptions(
    'fluffItem',
    state.flufffold.map(
      x => x.item
    )
  );

  updateFluffForm();


  const units =
    state.tracker.reduce(
      (s,x) =>
        s + num(x.units),
      0
    );

  const sales =
    state.tracker.reduce(
      (s,x) =>
        s + num(x.sales),
      0
    );

  const gp =
    state.tracker.reduce(
      (s,x) =>
        s + num(x.grossProfit),
      0
    );


  $('fluffMetrics').innerHTML = `

    <div class="metric">
      <strong>${state.flufffold.length}</strong>
      <span>Products</span>
    </div>

    <div class="metric">
      <strong>${units.toFixed(0)}</strong>
      <span>Units Sold</span>
    </div>

    <div class="metric">
      <strong>$${sales.toFixed(2)}</strong>
      <span>Revenue</span>
    </div>

    <div class="metric">
      <strong>$${gp.toFixed(2)}</strong>
      <span>Gross Profit</span>
    </div>
  `;


  $('fluffRows').innerHTML =
    state.flufffold
      .map(x => `

        <tr>

          <td data-label="Product">
            ${x.item}
          </td>

          <td data-label="Cost">
            ${x.unitCost || '—'}
          </td>

          <td data-label="Sell">
            ${x.sellPrice || '—'}
          </td>

          <td data-label="Margin">
            ${x.margin || '—'}
          </td>

          <td data-label="Units">
            ${x.cleantieUnits || '—'}
          </td>

          <td data-label="Weekly">
            ${x.weeklySales || '—'}
          </td>

          <td data-label="On Hand">
            ${
              x.onHand === ''
                ? 'NEED COUNT'
                : x.onHand
            }
          </td>

          <td data-label="Need">
            ${x.needUnits || '—'}
          </td>

          <td data-label="Supplier">
            ${x.vendor || 'UNKNOWN'}
          </td>

          <td data-label="Action">
            ${x.action || '—'}
          </td>

        </tr>

      `)
      .join('');
}


function updateFluffForm() {

  const found =
    state.flufffold.find(
      x =>
        x.item ===
        $('fluffItem').value
    );

  if (!found) return;

  $('fluffOnHand').value =
    found.onHand || '';

  $('fluffReorder').value =
    found.reorderPoint || '';
}


$('fluffItem').onchange =
  updateFluffForm;


$('saveFluff').onclick = () => {

  msg('Saving…');

  google.script.run

    .withSuccessHandler(data => {

      state = data;

      render();

      msg('Saved.');

    })

    .withFailureHandler(e =>
      msg(
        e.message,
        true
      )
    )

    .saveFluffCount({

      item:
        $('fluffItem').value,

      onHand:
        $('fluffOnHand').value,

      reorderPoint:
        $('fluffReorder').value
    });
};


/* VENDING */

function renderVending(
  group,
  prefix
) {

  const obj =
    state[group];

  fillOptions(
    prefix + 'Item',
    obj.buying.map(
      x => x.item
    )
  );

  updateVendForm(
    group,
    prefix
  );


  const need =
    obj.buying.filter(
      x =>
        num(x.needUnits) > 0
    );


  $(prefix + 'Metrics').innerHTML = `

    <div class="metric">
      <strong>${obj.slots.length}</strong>
      <span>Slots</span>
    </div>

    <div class="metric">
      <strong>${obj.buying.length}</strong>
      <span>Products</span>
    </div>

    <div class="metric">
      <strong>${need.length}</strong>
      <span>Need Reorder</span>
    </div>
  `;


  $(prefix + 'BuyRows').innerHTML =
    obj.buying
      .map(x => `

        <tr>

          <td data-label="Product">
            ${x.item}
          </td>

          <td data-label="On Hand">
            ${
              x.onHand === ''
                ? 'NEED COUNT'
                : x.onHand
            }
          </td>

          <td data-label="Target">
            ${x.target || '—'}
          </td>

          <td data-label="Need">
            ${x.needUnits || '—'}
          </td>

          <td data-label="Cases">
            ${x.casesToBuy || '—'}
          </td>

          <td data-label="Supplier">
            ${x.vendor || 'UNKNOWN'}
          </td>

          <td data-label="Status">
            ${x.status || '—'}
          </td>

        </tr>

      `)
      .join('');


  $(prefix + 'Slots').innerHTML =
    obj.slots
      .map(x => `

        <tr>

          <td data-label="Slot">
            ${x.slot}
          </td>

          <td data-label="Product">
            ${x.item}
          </td>

          <td data-label="Vend Price">
            ${x.vendPrice || '—'}
          </td>

          <td data-label="Cost">
            ${x.unitCost || '—'}
          </td>

          <td data-label="Profit">
            ${x.profit || '—'}
          </td>

          <td data-label="Margin">
            ${x.margin || '—'}
          </td>

        </tr>

      `)
      .join('');
}


function updateVendForm(
  group,
  prefix
) {

  const found =
    state[group]
      .buying
      .find(
        x =>
          x.item ===
          $(prefix + 'Item').value
      );

  if (!found) return;

  $(prefix + 'OnHand').value =
    found.onHand || '';

  $(prefix + 'Target').value =
    found.target || '';
}


$('snackItem').onchange =
  () =>
    updateVendForm(
      'snacks',
      'snack'
    );


$('laundryItem').onchange =
  () =>
    updateVendForm(
      'laundry',
      'laundry'
    );


$('saveSnack').onclick =
  () =>
    saveVend(
      'snacks',
      'snack'
    );


$('saveLaundry').onclick =
  () =>
    saveVend(
      'laundry',
      'laundry'
    );


function saveVend(
  group,
  prefix
) {

  msg('Saving…');

  google.script.run

    .withSuccessHandler(data => {

      state = data;

      render();

      msg('Saved.');

    })

    .withFailureHandler(e =>
      msg(
        e.message,
        true
      )
    )

    .saveVendingCount({

      group: group,

      item:
        $(prefix + 'Item').value,

      onHand:
        $(prefix + 'OnHand').value,

      target:
        $(prefix + 'Target').value
    });
}


/* SHOPPING LIST */

function renderShopping() {

  const rows =
    state.shopping || [];

  const stores = {};


  rows.forEach(x => {

    const store =
      x.store || 'UNKNOWN';

    if (!stores[store]) {
      stores[store] = [];
    }

    stores[store].push(x);
  });


  const storeNames =
    Object.keys(stores).sort();


  const totalCases =
    rows.reduce(
      (sum, x) =>
        sum + num(x.cases),
      0
    );


  $('shoppingMetrics').innerHTML = `

    <div class="metric">
      <strong>${rows.length}</strong>
      <span>Products to Buy</span>
    </div>

    <div class="metric">
      <strong>${storeNames.length}</strong>
      <span>Stores</span>
    </div>

    <div class="metric">
      <strong>${totalCases}</strong>
      <span>Cases / Packs</span>
    </div>
  `;


  if (!rows.length) {

    $('shoppingStores').innerHTML = `

      <div class="good">

        <strong>
          No confirmed purchases are currently required.
        </strong>

        <p class="small">
          If inventory has not been counted yet,
          enter physical counts first.
        </p>

      </div>
    `;

  } else {

    $('shoppingStores').innerHTML =
      storeNames
        .map(store => {

          const items =
            stores[store];

          return `

            <div class="card store-card">

              <h3>${store}</h3>

              <table>

                <thead>
                  <tr>
                    <th>Area</th>
                    <th>Product</th>
                    <th>On Hand</th>
                    <th>Target</th>
                    <th>Need</th>
                    <th>Case Size</th>
                    <th>Buy</th>
                    <th>Expected Price</th>
                    <th>Unit Cost</th>
                  </tr>
                </thead>

                <tbody>

                  ${
                    items
                      .map(x => `

                        <tr>

                          <td data-label="Area">
                            ${x.area}
                          </td>

                          <td data-label="Product">
                            ${x.item}
                          </td>

                          <td data-label="On Hand">
                            ${
                              x.onHand === ''
                                ? 'NEED PHYSICAL COUNT'
                                : x.onHand
                            }
                          </td>

                          <td data-label="Target">
                            ${x.target || '—'}
                          </td>

                          <td data-label="Need">
                            ${x.need}
                          </td>

                          <td data-label="Case Size">
                            ${
                              x.caseSize ||
                              'VERIFY PACK'
                            }
                          </td>

                          <td data-label="Buy">
                            ${
                              x.cases
                                ? x.cases + ' case/pack'
                                : 'VERIFY'
                            }
                          </td>

                          <td data-label="Expected Price">
                            ${
                              x.casePrice ||
                              'NEED CURRENT QUOTE'
                            }
                          </td>

                          <td data-label="Unit Cost">
                            ${
                              x.unitCost ||
                              'UNKNOWN'
                            }
                          </td>

                        </tr>

                      `)
                      .join('')
                  }

                </tbody>

              </table>

            </div>
          `;

        })
        .join('');
  }


  $('sudsyRows').innerHTML =
    (state.sudsyReference || [])
      .map(x => `

        <tr>

          <td data-label="Date">
            ${x.date}
          </td>

          <td data-label="Product">
            ${x.item}
          </td>

          <td data-label="Pack">
            ${x.pack}
          </td>

          <td data-label="Order Cost">
            ${money(x.purchasePrice)}
          </td>

          <td data-label="Unit Cost">
            ${
              x.unitCost === ''
                ? 'VERIFY PRODUCT'
                : money(x.unitCost)
            }
          </td>

          <td data-label="Note">
            ${x.note}
          </td>

        </tr>

      `)
      .join('');
}


/* TRACKER */

function renderTracker() {

  const totalUnits =
    state.tracker.reduce(
      (s,x) =>
        s + num(x.units),
      0
    );

  const totalRevenue =
    state.tracker.reduce(
      (s,x) =>
        s + num(x.sales),
      0
    );

  const totalGP =
    state.tracker.reduce(
      (s,x) =>
        s + num(x.grossProfit),
      0
    );


  $('trackerMetrics').innerHTML = `

    <div class="metric">
      <strong>${totalUnits.toFixed(0)}</strong>
      <span>Total Units</span>
    </div>

    <div class="metric">
      <strong>$${totalRevenue.toFixed(2)}</strong>
      <span>Revenue</span>
    </div>

    <div class="metric">
      <strong>$${totalGP.toFixed(2)}</strong>
      <span>Gross Profit</span>
    </div>
  `;


  $('trackerRows').innerHTML =
    state.tracker
      .map(x => `

        <tr>

          <td data-label="Product">
            ${x.item}
          </td>

          <td data-label="Units">
            ${x.units}
          </td>

          <td data-label="Revenue">
            ${x.sales}
          </td>

          <td data-label="Gross Profit">
            ${x.grossProfit}
          </td>

          <td data-label="Margin">
            ${x.margin}
          </td>

          <td data-label="Weekly">
            ${x.weeklyUnits}
          </td>

          <td data-label="Action">
            ${x.action || '—'}
          </td>

        </tr>

      `)
      .join('');
}


/* PRICE CHANGES */

function renderPrices() {

  $('priceRows').innerHTML =
    state.priceChanges
      .slice()
      .reverse()
      .map(x => `

        <tr>

          <td data-label="Date">
            ${x.date}
          </td>

          <td data-label="Product">
            ${x.item}
          </td>

          <td data-label="Old">
            ${x.oldPrice}
          </td>

          <td data-label="New">
            ${x.newPrice}
          </td>

          <td data-label="Change">
            ${x.change}
          </td>

          <td data-label="Reason">
            ${x.reason}
          </td>

          <td data-label="Status">
            ${x.status}
          </td>

        </tr>

      `)
      .join('');
}


/* RENDER EVERYTHING */

function render() {

  renderFluff();

  renderVending(
    'snacks',
    'snack'
  );

  renderVending(
    'laundry',
    'laundry'
  );

  renderShopping();

  renderTracker();

  renderPrices();
}


/* LOAD APP */

msg('Loading…');


google.script.run

  .withSuccessHandler(data => {

    state = data;

    render();

    $('message').style.display =
      'none';

  })

  .withFailureHandler(e =>
    msg(
      e.message,
      true
    )
  )

  .getState();

</script>

</body>
</html>
