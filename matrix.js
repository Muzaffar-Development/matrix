
// Welcome to matrix calculator

var process = prompt("In order to solve determinant of matrix put number '1', to find inverse matrix put number '2': ")


if (process == 1){
    document.getElementById("demo").innerHTML = "Thanks for choosing to solve determinant of matrix!"
    var matrixType = prompt("What kind of matrix do you want to determine? For example: 1, 2, 3, 4: ")
    if (matrixType == 1){
        var a11 = prompt("a11 = ")
        document.getElementById("demo").innerHTML = "Determinant of 1x1 matrices is element which it consists of: " + a11
    }
    else if (matrixType == 2){
        var a11 = prompt("a11 = ");
        var a12 = prompt("a12 = ");
        var a21 = prompt("a21 = ");
        var a22 = prompt("a22 = ");
        
        
        var determinant_of_2x2 = a11*a22 - a21*a12
        
        document.getElementById("demo").innerHTML = "Determinent of this 2x2 matrix is: " + determinant_of_2x2
    }
    else if (matrixType == 3){
        var a11 = prompt("a11 = ");
        var a12 = prompt("a12 = ");
        var a13 = prompt("a13 = ");
        var a21 = prompt("a21 = ");
        var a22 = prompt("a22 = ");
        var a23 = prompt("a23 = ");
        var a31 = prompt("a31 = ");
        var a32 = prompt("a32 = ");
        var a33 = prompt("a33 = ");

        var   determinant_of_3x3 = a11*a22*a33 + a31*a12*a23 + a13*a21*a32 - a13*a22*a31 - a11*a23*a32 - a33*a12*a21
        
        document.getElementById("demo").innerHTML = "Determinent of this 3x3 matrix is: " + determinant_of_3x3
    }
    else if (matrixType == 4){
        var a11 = prompt("a11 = ");
        var a12 = prompt("a12 = ");
        var a13 = prompt("a13 = ");
        var a14 = prompt("a14 = ");
        var a21 = prompt("a21 = ");
        var a22 = prompt("a22 = ");
        var a23 = prompt("a23 = ");
        var a24 = prompt("a24 = ");
        var a31 = prompt("a31 = ");
        var a32 = prompt("a32 = ");
        var a33 = prompt("a33 = ");
        var a34 = prompt("a34 = ");
        var a41 = prompt("a31 = ");
        var a42 = prompt("a32 = ");
        var a43 = prompt("a33 = ");
        var a44 = prompt("a34 = ");


        var determinant_of_4x4 = a11*(a22*a33*a44+a24*a32*a43+a42*a23*a34-a24*a33*a42-a44*a32*a23-a22*a34*a43) - a12*(a21*a33*a44+a41*a23*a34+a24*a31*a43-a24*a34*a41-a44*a23*a31-a21*a34*a43) + a13*(a21*a32*a44+a41*a22*a34+a24*a31*a42-a24*a32*a41-a21*a34*a42-a44*a31*a22) - a14*(a21*a32*a43+a22*a33*a41+a23*a31*a42-a23*a32*a41-a21*a33*a42-a31*a22*a43)
        
        
        document.getElementById("demo").innerHTML = "Determinent of this 4x4 matrix is: " + determinant_of_4x4
    }
}
else if (process == 2){
    //document.getElementById("demo").innerHTML = "Thanks for choosing to find inverse matrix!"
    var matrixSort = prompt("What kind of matrix do you want to find inverse one? For example: 1, 2, 3, 4: ")
    if (matrixSort == 1){
        var a11 = prompt("a11 = ")
        document.getElementById("demo").innerHTML = "Inverse matrix of 1x1 is: " + 1/a11
    }
    else if (matrixSort == 2){
        var a11 = prompt("a11 = ");
        var a12 = prompt("a12 = ");
        var a21 = prompt("a21 = ");
        var a22 = prompt("a22 = ");

        let first_element = a22;
        let second_element = (-1*a12);
        let third_element = (-1*a21);
        let fourth_element = a11;
        
        
                                                                          
        document.getElementById("demo").innerHTML = "a11 = " + first_element;
        document.getElementById("demo1").innerHTML = "a12 = " +  second_element;
        document.getElementById("demo2").innerHTML  = "a21 = " + third_element;
        document.getElementById("demo3").innerHTML = "a22 = " + fourth_element;
        
    }
    else if (matrixSort == 3){
        var a11 = prompt("a11 = ");
        var a12 = prompt("a12 = ");
        var a13 = prompt("a13 = ");
        var a21 = prompt("a21 = ");
        var a22 = prompt("a22 = ");
        var a23 = prompt("a23 = ");
        var a31 = prompt("a31 = ");
        var a32 = prompt("a32 = ");
        var a33 = prompt("a33 = ");
        var   determinant_of_3x3 = a11*a22*a33 + a31*a12*a23 + a13*a21*a32 - a13*a22*a31 - a11*a23*a32 - a33*a12*a21;
        if (determinant_of_3x3 == 0){
            document.getElementById("demo").innerHTML = "Determinant of this matrix is 0. It has no inverse matrix."
        }
        else {
            let a = (a22*a33 - a23*a32)/determinant_of_3x3;
            let b = -(a21*a33 - a31*a23)/determinant_of_3x3;
            let c = (a21*a32 - a31*a22)/determinant_of_3x3;
            let d = -(a12*a33 - a13*a32)/determinant_of_3x3;
            let e = (a11*a33 - a13*a31)/determinant_of_3x3;
            let f = -(a11*a32 - a12*a31)/determinant_of_3x3;
            let g = (a12*a23 - a13*a22)/determinant_of_3x3;
            let h = -(a11*a23 - a21*a13)/determinant_of_3x3;
            let i = (a11*a22 - a21*a12)/determinant_of_3x3;
           
            document.getElementById("demo").innerHTML = "a11 = " + a;
            document.getElementById("demo1").innerHTML = "a12 = " + b;
            document.getElementById("demo2").innerHTML = "a13 = " + c;
            document.getElementById("demo3").innerHTML = "a21 = " + d;
            document.getElementById("demo4").innerHTML = "a22 = " + e;
            document.getElementById("demo5").innerHTML = "a23 = " + f;
            document.getElementById("demo6").innerHTML = "a31 = " + g;
            document.getElementById("demo7").innerHTML = "a32 = " + h;
            document.getElementById("demo8").innerHTML = "a33 = " + i;
        }
        
        
    }
}