function createCar(manufacturer: string, modelName: string, color: string, feature: string): object {
    return {
        manufacturer: manufacturer,
        modelName: modelName,
        color: color,
        feature: feature
    };
}

let car = createCar('Tesla', 'Model S', 'Red', 'Autopilot');
console.log(car);

export{}