var express = require('express');
var app = express();


//Reusable controllers
var productController=function (req, res) {
  console.log("CAlling rest api");
  var products=[
            {Name:'Shirts',category:"clothes",price:'2000',quantity:200},
			{Name:'Shoes',category:"Footwear",price:'4000',quantity:150},
			{Name:'Lays',category:"Fooditems",price:'200',quantity:20},
			{Name:'Samsung',category:"Mobiles",price:'20000',quantity:2},
	 {Name:'Fans',category:'Appliances',price:"1500",quantity:120}

            
      ];
  res.send(products);
};

// setting router to map requests  with controllers

app.get('/products',productController );

var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8088", host, port)
})
