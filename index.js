// задание 1
class Worker {
    constructor(name,surname,rate,days,salary) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
        this.salary = salary;
    }
       
    getSalary () {
           this.salary = this.rate*this.days;
           return (this.salary);
        }
    getInfo (){
        return {
name: this.name,
surname: this.surname,
rate: this.rate,
days: this.days,
salary:this.salary
        }
    }
}


let worker = new Worker ('Иван','Иванов', 10, 31);
console.log(worker.name);
console.log(worker.surname); 
console.log(worker.rate); 
console.log(worker.days); 
console.log(worker.getSalary());

// Задание 2
const data = [
    {
      id: 1,
      type: 'car',
      brand: 'Audi',
      doors: 4,
      price: 4300000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
      id: 2,
      type: 'car',
      brand: 'Mercedes-Benz',
      doors: 4,
      price: 2800000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
      {
      id: 3,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 210,
      price: 1300000,
      image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
      id: 4,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 220,
      price: 1400000,
      image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
  ];

// cоздаем класс Транспорт
class Transport  {
    constructor (type,price,brand) {
        this.type = type;
        this.price = price;
        this.brand = brand;
    }
    getPrice () {
        return `Цена: ${this.price} руб`;
    }
    getInfo () {
        return {
type: this.type,
price: this.price,
brand: this.brand,
        }
    }
}
// Создаем дочерние классы Сar и Bike
class Car extends Transport {
    constructor (type,price,brand,doors){
    super (type,price,brand);
    this.doors = doors;
    }
getDoorsCount() {
    return `Количество дверей: ${this.doors}`;
}
}

class Bike extends Transport {
    constructor (type,price,brand,maxSpeed){
    super (type,price,brand);
    this.maxSpeed = maxSpeed;
    }
getMaxSpeed () {
    return `Максимальная скорость: ${this.maxSpeed} км/ч`;
}
}

const vehicleInfo = document.querySelector(".vehicles")

// перебираем массив data и создаем  карточки в которые помещаем информацию о 
// каждом автомобиле и мотоцикле
data.forEach(vehicle => {
    let vehicles;
    if (vehicle.type === 'car') {
      vehicles = new Car(vehicle.type, vehicle.price, vehicle.brand, vehicle.doors);
    } else {
      vehicles = new Bike(vehicle.type, vehicle.price, vehicle.brand, vehicle.maxSpeed);
    }
  

    // создаем стандартный вид карточки
    const block = document.createElement('div');
    block.classList.add('transport__block');

    const brand = document.createElement('h3');
    brand.innerText = `Бренд: ${vehicle.brand}`

    const type = document.createElement('p');
    type.innerText = `Тип: ${vehicle.type}`;

    const img = document.createElement('img');
    img.src = vehicle.image;
    img.alt = `${vehicle.brand} ${vehicle.type}`;
  
    const price = document.createElement('p');
    price.innerText = vehicles.getPrice();
  
    // при выведении информации об авто добавляем в карточку информацию о количестве дверей
    // при выведении информации о мотоцикле добавляем в карточку информацию о максимальной скорости
    const optionalInfo = document.createElement('p');
    if (vehicle.type === 'car') {
      optionalInfo.innerText = vehicles.getDoorsCount();
    } else {
      optionalInfo.innerText = vehicles.getMaxSpeed();
    }
  
    // добавляем карточки на страницу
    block.append(brand,type,price,optionalInfo,img);
    vehicleInfo.append(block);
  });
  