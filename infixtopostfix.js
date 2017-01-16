var x="1+6*3-3*3";
var z="";
var top=-1;
var arr=[];
arr[++top]='(';

function apply(x,y,z)
{
 switch(z)
   { 
    case '+':
	return x+y;
    
	case '-':
	return x-y;
    
	case '^':
	return x^y;
    
	case '*':
	return x*y;
   }
}
function precedence(x)
  {
     switch(x)
            {
              case '+':
			  case'-': 
			  return 1;

              case '*':
			  case'|': 
			  return 2;

              case '^':
			  return 3;
              
			  default:
			  
			  return -1;
            }
   }

for(var i=0;i<x.length;i++)
{
   var y= x.charAt(i);
   if(y>='0'&&y<='9')
        {
          z+=y;
		  
       }
    else 
      {
          
          if(top!=-1&&(arr[top]=='('||precedence(arr[top])<precedence(y)))
            {
               arr[++top]=y;


            }
         
          else 
              {
                 while(precedence(arr[top])>=precedence(y)&&top>-1)
                     {
                       z+=arr[top];
                       top--;
           
                   
                     }
                 arr[++top]=y;
                 
              }
      }  
    
      
      
        
 }

  while(top>-1)
  {
    z+=arr[top];
    top--;
  }
 // console.log(z);
  var arr2=[];
var top2=-1;
  for(var i=0;i<z.length-1;i++)
  {
    var m=z.charAt(i);
     if(m>'0'&&m<='9')
     {
        arr2[++top2]=Number(m);
     }
     else
    {
       arr2[top2-1]=apply(arr2[top2-1],arr2[top2],m);
	   
       top2--;
    }
  }

console.log(arr2[0]);
//console.log(arr2[1]);
  
  

