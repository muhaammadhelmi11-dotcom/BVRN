function orderWA(product) {
  const phone = "628XXXXXXXXX";
  const text = `Hello Lifesurgery, I want to order: ${product}`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`);
}
