const boxes = document.querySelectorAll('.box');
const totalEl = document.getElementById('total');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    boxes.forEach(b => b.classList.remove('active'));
    box.classList.add('active');

    const price = parseFloat(box.dataset.price).toFixed(2);
    totalEl.textContent = `Total: $${price}`;
  });
});

document.getElementById('cartBtn').addEventListener('click', () => {
  alert("Item added to cart!");
});
