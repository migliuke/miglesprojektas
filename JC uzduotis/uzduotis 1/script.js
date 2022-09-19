1.1
console.log (cars.filter ((car)=>{
    return car.Miles_per_Gallon
  }))
1.2
console.log (cars.filter ((car)=>{
    return !car.Miles_per_Gallon
  }))
1.3
onsole.log (cars.filter ((car)=>{
    return car.Miles_per_Gallon >=15 && car.Cylinders===8
  }))
1.4
console.log(cars.map((car) => {
    return {
      ...car,
      Kilowatts: car.Horsepower * 0.7457,
    }
  }));
  1.5
  const sortByWeight = cars.sort((a,b)=>{
    return a.Weight_in_lbs - b.Weight_in_lbs;
  });
  console.log (sortByWeight)
  1.6
  const carsUsa = cars.every ((cars)=>{
    cars.Origin==="USA"
  })
  console.log (carsUsa);
  