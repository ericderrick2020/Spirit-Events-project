// Get the input fields and price spans
const ordinarySeatQuantity = document.getElementById('ordinary-seat-quantity');
const ordinarySeatPrice = document.getElementById('ordinary-seat-price');
const ordinarySeatTotal = document.getElementById('ordinary-seat-total');

const vipSeatQuantity = document.getElementById('vip-seat-quantity');
const vipSeatPrice = document.getElementById('vip-seat-price');
const vipSeatTotal = document.getElementById('vip-seat-total');

// Add event listeners to the input fields
ordinarySeatQuantity.addEventListener('input', updateOrdinarySeatTotal);
vipSeatQuantity.addEventListener('input', updateVipSeatTotal);

// Function to update the total cost for ordinary seat
function updateOrdinarySeatTotal() {
    const quantity = parseInt(ordinarySeatQuantity.value) || 0; // Fallback to 0
    const price = parseInt(ordinarySeatPrice.textContent.replace(/shs|,/g, '').trim()) || 0;
    const total = quantity * price;
    ordinarySeatTotal.textContent = `shs${total.toLocaleString()}`;
}

// Function to update the total cost for VIP seat
function updateVipSeatTotal() {
    const quantity = parseInt(vipSeatQuantity.value) || 0; // Fallback to 0
    const price = parseInt(vipSeatPrice.textContent.replace(/shs|,/g, '').trim()) || 0;
    const total = quantity * price;
    vipSeatTotal.textContent = `shs${total.toLocaleString()}`;
}
