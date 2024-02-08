"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCar(manufacturer, modelName, color, feature) {
    return {
        manufacturer: manufacturer,
        modelName: modelName,
        color: color,
        feature: feature
    };
}
let car = createCar('Tesla', 'Model S', 'Red', 'Autopilot');
console.log(car);
