function touching(Ob1,Ob2){
    if(Ob1.x-Ob2.x<(Ob1.width/2+Ob2.width/2)&&
    (Ob2.x-Ob1.x<(Ob1.width/2+Ob2.width/2))&&
    Ob1.y-Ob2.y<Ob1.height/2+Ob2.height/2&&
    Ob2.y-Ob1.y<Ob1.height/2+Ob2.height/2){
   Ob1.shapeColor="red" ; 
   Ob2.shapeColor="red";
  }
  else{
    Ob1.shapeColor=("green")
    Ob2.shapeColor=("green")
  }
  }