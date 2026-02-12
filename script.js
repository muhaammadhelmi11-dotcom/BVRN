function orderWA(product) {
  const phone = "6289620944092";
  const text = `Hello Lifesurgery, I want to order: ${product}`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`);
}
