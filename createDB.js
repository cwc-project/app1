// созадание рандомной БД
const fs = require('fs');
const COUNT = 24; // нужное количество эл-тов в БД

const initialData = fs.readFileSync('./src/data/initial.json', 'utf8');
const parsedData = JSON.parse(initialData);
const initialQuantity = parsedData.length; // количество элемнтов в образце

const names = parsedData.map(({ name }) => name);
const brands = parsedData.map(({ brand }) => brand);
const getRandomValue = () => Math.floor(Math.random() * initialQuantity); // случайно число в пределах 100
const getRandomFlag = () => (getRandomValue() % 2 === 0 ? 1 : 0);

const addData = Array(COUNT - initialQuantity)
  .fill()
  .map((item, index) => {
    const idx = index + 1 + initialQuantity;
    const artnumber = (Array(4).join('0') + idx).slice(-4);
    return {
      artnumber,
      name: names[getRandomValue()],
      brand: brands[getRandomValue()],
      weight: getRandomValue() * 15 + 1,
      quantity: getRandomValue() + 1,
      price: getRandomValue() + 1,
      stock: getRandomFlag(),
    };
  });

const result = JSON.stringify([...parsedData, ...addData], null, 2);

fs.writeFileSync('./src/data/db.json', result);
