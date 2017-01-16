var string="1+5+2-1";
var ops=[];
var c;
var value=[];
var j=0;
var k=0;

function hasPrecedence(op1,op2)
    {
        if (op2 == '(' || op2 == ')')
            return false;
        if ((op1 == '*' || op1 == '/') && (op2 == '+' || op2 == '-'))
            return false;
        else
            return true;
    }


function applyOp(op,b,a)
    {
        switch (op)
        {
        case '+':
            return (a + b);
        case '-':
            return (a - b);
        case '*':
            return (a * b);
        case '/':
            if (b == 0)
                
                console.log("Cannot divide by zero");
            return (a / b);
        }
        return 0;
    }
	
function evaluation(){

for(var i=0;i<string.length;i++){

	if(string[i]>='0'&&string[i]<='9'){
	
		
	c=string[i];
		
	value.push(c);
	++j;
	c=0;
	}
	else if(string[i]=='('){
		ops.push(string[i]);
		++k;
	}

	else if(string[i]==')'){
	
	while(ops[k]!='('){
		
	var re=applyOp(ops.pop(), value.pop(), value.pop());
		value.push(re);
		--j;
		--j;
		--k;
		++j;
	}
	
	ops.pop();
	--k;
}


 else if (string[i] == '+' || string[i] == '-' ||
                     string[i] == '*' || string[i] == '/')
            {
        
		if(k>0){
                while (k>=0 && hasPrecedence(string[i], ops[k]))
                  {
					  
					  var re=applyOp(ops.pop(), value.pop(), value.pop());
					 // console.log(re);
					  value.push(re);
						--j;
						--j;
						--k;
						++j;
 
		}
		
		}
                // Push current token to 'ops'.
                ops.push(string[i]);
				++k;
            }
}			
        while (k>=0)
            {
				
			var re=applyOp(ops.pop(), value.pop(), value.pop());
			//console.log(re);
			value.push(re);			
			--j;
			--j;
			--k;
			++j;
}

console.log(value);

}
evaluation();
