{
    //Problem-4


    type Circle = {
        shape: 'circle';
        radius: number;
    };

    type Rectangle = {
        shape: 'rectangle';
        width: number;
        height: number;
    };

    type Shape = Circle | Rectangle;

    const calculateShapeArea = (shape: Shape): number => {
        if (shape.shape === 'circle') {
            // Calculate circle area
            return Math.PI * Math.pow(shape.radius, 2);
        } else if (shape.shape === 'rectangle') {
            // Calculate circle area
            return shape.width * shape.height;
        } else {
            throw new Error('Unknown shape');
        }
    };

    const myCircle: Circle = {
        shape: 'circle',
        radius: 8
    };
    const myRectangle: Rectangle = {
        shape: 'rectangle',
        width: 8,
        height: 10
    };

    const circleArea = calculateShapeArea(myCircle);
    const rectangleArea = calculateShapeArea(myRectangle);
    console.log(circleArea);
    console.log(rectangleArea);



    //
}