"use strict";
{
    const calculateShapeArea = (shape) => {
        if (shape.shape === 'circle') {
            // Calculate circle area
            return Math.PI * Math.pow(shape.radius, 2);
        }
        else if (shape.shape === 'rectangle') {
            // Calculate circle area
            return shape.width * shape.height;
        }
        else {
            throw new Error('Unknown shape');
        }
    };
    const myCircle = {
        shape: 'circle',
        radius: 8
    };
    const myRectangle = {
        shape: 'rectangle',
        width: 8,
        height: 10
    };
    const result1 = calculateShapeArea(myCircle);
    const result2 = calculateShapeArea(myRectangle);
    console.log(result1);
    console.log(result2);
    //
}
