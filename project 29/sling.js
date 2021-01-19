class Sling{
    
        constructor(bodyA, pointB){
            var options = {
                bodyA: bodyA,
                pointB: pointB,
                stiffness: 0.04,
                length: 10
            }
        
            
            this.sling = Constraint.create(options);
            this.pointB = pointB
            this.bodyA = bodyA
            World.add(world, this.sling);
        }
    

        attached(){
            this.sling.bodyA = ball;
        }


        fly(){
            this.sling.bodyA = null;
        }
    
        
    
        display(){
            
            if(this.sling.bodyA){
                var pointA = this.sling.bodyA.position;
                var pointB = this.pointB;
                push();
                
                stroke(48,22,8);
                if(pointA.x < 220) {
                    strokeWeight(7);
                    
                    line(pointA.x, pointA.y, pointB.x + 30, pointB.y - 3);
                    
                }
                
                    
                
               
                
                pop();
            }
        }
        
    }

