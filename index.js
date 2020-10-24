var rect = require ('./rectangle');

function solveRect(l,b) {
    console.log("Solving for rectangle width l = " + l + "and b = " + b);

    if ( l <= 0 || b <= 0){
        console.log("rectangle dimentions should be greater than zero l = " + l + " b = " + b);
    }
    else {
        console.log("The area of the rectangle is " + rect.area(l,b));
        console.log("The primeter of the rectangle is " + rect.perimeter(l,b));
    }
}
solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3, 5);