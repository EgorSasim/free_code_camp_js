let inventory = [];

const findProductIndex = (name) => {
  const lowerName = name.toLowerCase();
  return inventory.findIndex(item => item.name === lowerName);
};

function addProduct(product) {
  const lowerCaseProductName = product.name.toLowerCase();
  const existingProductIndex = findProductIndex(lowerCaseProductName);

  if (~existingProductIndex) {
    inventory[existingProductIndex].quantity += product.quantity;
    console.log(`${lowerCaseProductName} quantity updated`);
    return;
  }

  const updatedProduct = {
    name: lowerCaseProductName,
    quantity: product.quantity
  };
  
  inventory.push(updatedProduct);
  console.log(`${lowerCaseProductName} added to inventory`);
}

function removeProduct(name, quantity) {
  const lowerCaseName = name.toLowerCase();
  const index = findProductIndex(lowerCaseName);

  if (!~index) {
    console.log(`${lowerCaseName} not found`);
    return;
  }

  const currentProduct = inventory[index];
  const diff = currentProduct.quantity - quantity;

  if (diff < 0) {
    console.log(`Not enough ${lowerCaseName} available, remaining pieces: ${currentProduct.quantity}`);
    return;
  }

  if (!diff) {
    inventory.splice(index, 1);
    console.log(`Remaining ${lowerCaseName} pieces: 0`);
    return;
  }

  currentProduct.quantity = diff;
  console.log(`Remaining ${lowerCaseName} pieces: ${diff}`);
}

