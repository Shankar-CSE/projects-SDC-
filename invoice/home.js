// Function to add a new item input group
function addItem() {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';
    itemDiv.innerHTML = `
        <label for="itemDescription">Item Description:</label>
        <input type="text" name="itemDescription" required><br>
        <label for="quantity">Quantity:</label>
        <input type="number" name="quantity" required><br>
        <label for="pricePerUnit">Price per Unit:</label>
        <input type="number" name="pricePerUnit" required><br>
    `;
    document.getElementById('items').appendChild(itemDiv);
}

document.getElementById('invoiceForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from being submitted
   

    // Get customer details
    const number= Math.random()*1000000;
    const today = Date();
    const customerName = document.getElementById('customerName').value;
    const customerAddress = document.getElementById('customerAddress').value;
    const phone = document.getElementById('phone').value;
    const type = document.getElementById('type').value;


    // Get item details
    const itemElements = document.querySelectorAll('#items .item');
    let itemDetailsHTML = '';
    let subtotal = 0;

    itemElements.forEach(item => {
        const itemDescription = item.querySelector('input[name="itemDescription"]').value;
        const quantity = item.querySelector('input[name="quantity"]').value;
        const pricePerUnit = item.querySelector('input[name="pricePerUnit"]').value;
        const itemTotal = quantity * pricePerUnit;

        itemDetailsHTML += `
            <tr>
                <td>${itemDescription}</td>
                <td>${quantity}</td>
                <td>${pricePerUnit}</td>
                <td>${itemTotal.toFixed(2)}</td>
            </tr>
        `;
        subtotal += itemTotal;
    });

    // Calculate totals
    const taxAmount = subtotal * 0.18;
    const totalAmount = subtotal + taxAmount;

    // Open the invoice in a new tab
    const invoiceContent = `
       

    
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TrendyMart</title>
    <link rel="icon" href="images/e-commerce logo.png">
    <link rel="stylesheet" href="home.css">
    <script href="home.js"></script>
</head>
<body>
<div class="title">
    <a href="home.html" target="_blank" alt="TrendyMart">
    <img id="logo" src="images/e-commerce logo.png">
</a>
    <h1 id="trendymart">TrendyMart</h1>
</div>

<div style="display: flex;">
    <span style="padding-right: 10em;">
    <h3 style=":0;">Date: ${today}</h3>
        <p><b>Name: ${customerName}</b></p>
        <p> <b>Address: ${customerAddress}</b></p>
    </span>
    <span>
          <p> <b>invoice: #${number.toFixed(0)}</b> </p>
         <p> <b>Phone: ${phone}</b></p>
         <p> <b>Address Type: ${type}</b></p>
    </span>
    </div>
<hr><hr>
        <table>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price per Unit</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                ${itemDetailsHTML}
            </tbody>
        </table>
        <hr><hr>
        <span style="text-align: right">
        <p>Tax: ${taxAmount.toFixed(2)}</p>
        <p> <b>Total Amount: ${totalAmount.toFixed(2)}</b></p>
        <button onclick="print()">Print</button>
    </span>
    <br><br><br>

<div class="title">
Contact: 6382322466<br><br>
E-mail :Shankar.l5252@gmail.com<br><br>
Address: Sri Eshwar Collage of Engineering,Coimbatore<br>
<span style="font-size: 2.5em;">
    <h2>THANK YOU</h2>
</span>
</div>



    </body>
    </html>
    `;
   
});

