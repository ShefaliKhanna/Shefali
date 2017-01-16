var x="2+7*(3-3)*3";var z="";
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
function priority(x)
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
              
			  case '(':
			  return -1;
             
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
         if(y=='(')
               {
                 arr[++top]='(';
               }
        else if(y==')') 
            {  
               z+=".";
               while(arr[top]!='(')  { z+=arr[top]; top--;}
                top--; 
            }
  
             
    else 
      {
           z+=".";
          if(top!=-1&&(arr[top]=='('||priority(arr[top])<priority(y)))
            {
               arr[++top]=y;


            }
         
          else 
              {
                 while(priority(arr[top])>=priority(y)&&top>-1)
                     {
                       z+=arr[top];
                       top--;
           
                   
                     }
                 arr[++top]=y;
                 
              }
      }  
    
      
      
        
 }
 z+=".";
while(top>-1)
{
 z+=arr[top];
 top--;
}
console.log(z);

var sum=0;
var top2=0;
var arr2=[];
var count =0;
 for(var i=0;i<z.length-1;i++)
 { 
   t=z.charAt(i);
  if(t>='0'&&t<='9') 
   {
   count=0;
    sum=sum*10+Number(t);
   }
   else 
   {
      
    if(t=='.'&&count==0){arr2[++top2]=sum;sum=0;count++;}
    else 
         if(t!='.')
          {
             
           arr2[top2-1]=apply(arr2[top2-1],arr2[top2],t);
           
           top2--;
           
          }
     }

   }
console.log(arr2[top2]);
  

  
  

