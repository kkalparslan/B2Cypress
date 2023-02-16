class Car{
    constructor(carName, model, year){
        this.carName=carName
        this.model=model
        this.year=year
    }
    carAge(){ // function
        let date=new Date() // comes from js
        return date.getFullYear()-this.year 
    }
}

    var myCar=new Car("seat", "leon", 2005)
    console.log(myCar.carName,myCar.model)
    console.log("car age is", myCar.carAge())
