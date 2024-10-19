const fruits = [
    {
      fruitId: 1,
      fruitName: 'Apel',
      fruitType: 'IMPORT',
      stock: 10,
    },
    {
      fruitId: 2,
      fruitName: 'Kurma',
      fruitType: 'IMPORT',
      stock: 20,
    },
    {
      fruitId: 3,
      fruitName: 'apel',
      fruitType: 'IMPORT',
      stock: 50,
    },
    {
      fruitId: 4,
      fruitName: 'Manggis',
      fruitType: 'LOCAL',
      stock: 100,
    },
    {
      fruitId: 5,
      fruitName: 'Jeruk Bali',
      fruitType: 'LOCAL',
      stock: 10,
    },
    {
      fruitId: 5,
      fruitName: 'KURMA',
      fruitType: 'IMPORT',
      stock: 20,
    },
    {
      fruitId: 5,
      fruitName: 'Salak',
      fruitType: 'LOCAL',
      stock: 150,
    },
];
  
// 1. Fungsi untuk mendapatkan nama buah
function getFruitNames(fruits) {
    return fruits.map(fruit => fruit.fruitName);
}
  
// 2. Fungsi untuk memisahkan buah berdasarkan tipe dan menghitung jumlah wadah
function separateFruitsByType(fruits) {
    return fruits.reduce((acc, fruit) => {
        if (!acc[fruit.fruitType]) {
        acc[fruit.fruitType] = [];
    }
      acc[fruit.fruitType].push(fruit);
      return acc;
    }, {});
}
  
// 3. Fungsi untuk menghitung total stock di masing-masing wadah
function calculateTotalStockByType(fruits) {
    return fruits.reduce((acc, fruit) => {
      if (!acc[fruit.fruitType]) {
        acc[fruit.fruitType] = 0;
    }
      acc[fruit.fruitType] += fruit.stock;
      return acc;
    }, {});
}
// 4. Apakah ada komentar terkait kasus di atas?
const MyComment= "fruitId untuk buah dengan nama berbeda tidak konsisten, fruitId seharusnya unik. terdapat beberapa entri dengan fruitId: 5. Akan lebih baik jika semua nama buah dikonsistensikan dalam format kapitalisasi yang seragam untuk menghindari duplikasi yang tidak diperlukan."


// Menjalankan fungsi
const fruitNames = getFruitNames(fruits);
const separatedFruits = separateFruitsByType(fruits);
const totalStockByType = calculateTotalStockByType(fruits);
  
// Menampilkan hasil
console.log("1. Buah yang dimiliki Andi:", fruitNames);
console.log("2. Buah berdasarkan tipe dan jumlah wadah:",separatedFruits);
console.log("3. Total stock buah di masing-masing wadah:", totalStockByType);
console.log("4. Komentar Terkait kasus diatas :", MyComment)