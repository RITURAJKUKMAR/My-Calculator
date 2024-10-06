let button = document.querySelectorAll(".button");
let input=document.getElementById("in");
let output=document.getElementById("out");


let entered='';
function store(num)
{
    entered=entered+num;
}

function show()
{
    input.innerText=(entered);
}

function del()
{
    let newentered='';
    let l=entered.length;
    for(let i=0;i<l-1;i++)
        newentered=newentered+entered[i];
    entered=newentered;
}

function answer()
{
    calculation(entered);
    entered=Math.round(ans);
    output.innerText=(ans.toLocaleString("en-IN"));
}

function calculation(entered)
{
    ans=0;
    let n2=0;
    let l=entered.length;
    let o1='';
    {
        for(i=0;i<l;)
        {
            while(entered[i]=='0'||entered[i]=='1'||entered[i]=='2'||entered[i]=='3'||entered[i]=='4'||entered[i]=='5'||entered[i]=='6'||entered[i]=='7'||entered[i]=='8'||entered[i]=='9')
            {
                switch(entered[i])
                {
                    case '0': ans=ans*10+0;
                    break;
                    case '1': ans=ans*10+1;
                    break;
                    case '2': ans=ans*10+2;
                    break;
                    case '3': ans=ans*10+3;
                    break;
                    case '4': ans=ans*10+4;
                    break;
                    case '5': ans=ans*10+5;
                    break;
                    case '6': ans=ans*10+6;
                    break;
                    case '7': ans=ans*10+7;
                    break;
                    case '8': ans=ans*10+8;
                    break;
                    case '9': ans=ans*10+9;
                    break;
                }
                i++;
            }
            while(entered[i]=='+'||entered[i]=='-'||entered[i]=='*'||entered[i]=='/')
            {
                switch(entered[i])
                {
                    case '+': o1='+';
                    break;
                    case '-': o1='-';
                    break;
                    case '/': o1='/';
                    break;
                    case '*': o1='*';
                    break;
                }
                i++;
            }
            while(entered[i]=='0'||entered[i]=='1'||entered[i]=='2'||entered[i]=='3'||entered[i]=='4'||entered[i]=='5'||entered[i]=='6'||entered[i]=='7'||entered[i]=='8'||entered[i]=='9')
            {
                switch(entered[i])
                {
                    case '0': n2=n2*10+0;
                    break;
                    case '1': n2=n2*10+1;
                    break;
                    case '2': n2=n2*10+2;
                    break;
                    case '3': n2=n2*10+3;
                    break;
                    case '4': n2=n2*10+4;
                    break;
                    case '5': n2=n2*10+5;
                    break;
                    case '6': n2=n2*10+6;
                    break;
                    case '7': n2=n2*10+7;
                    break;
                    case '8': n2=n2*10+8;
                    break;
                    case '9': n2=n2*10+9;
                    break;
                }
                i++;
            }
            switch(o1)
            {
                case '+': ans=ans+n2;n2=0;
                break;
                case '-': ans=ans-n2;n2=0;
                break;
                case '*': ans=ans*n2;n2=0;
                break;
                case '/': ans=ans/n2;n2=0;
                break;
            }
        }
    }
}

button[1].addEventListener("click", () => {
    let value=button[1].innerText;
    store('1/100');
    show(value);
    console.log(value);
})
button[2].addEventListener("click", () => {
    let value=button[2].innerText;
    del();
    show();
    console.log(value);
})
button[3].addEventListener("click", () => {
    let value=button[3].innerText;
    store('/');
    show(value);
    console.log(value);
})
button[4].addEventListener("click", () => {
    let value=button[4].innerText;
    store(value);
    show(value);
    console.log(value);
})
button[5].addEventListener("click", () => {
    let value=button[5].innerText;
    store(value);
    show(value);
    console.log(value);
})
button[6].addEventListener("click", () => {
    let value=button[6].innerText;
    store(value);
    show(value);
    console.log(value);
})
button[7].addEventListener("click", () => {
    let value=button[7].innerText;
    store('*');
    show(value);
    console.log(value);
})
button[8].addEventListener("click", () => {
    let value=button[8].innerText;
    store(value);
    show(value);
    console.log(value);
})
button[9].addEventListener("click", () => {
    let value=button[9].innerText;
    store(value);
    show(value);
    console.log(value);
})
button[10].addEventListener("click", () => {
    let value=button[10].innerText;
    store(value);
    show(value);
    console.log(value);
})
button[11].addEventListener("click", () => {
    let value=button[11].innerText;
    store(value);
    show(value);
    console.log(value);
})
button[12].addEventListener("click", () => {
    let value=button[12].innerText;
    store(value);
    show(value);
    console.log(value);
})
button[13].addEventListener("click", () => {
    let value=button[13].innerText;
    store(value);
    show(value);
    console.log(value);
})
button[14].addEventListener("click", () => {
    let value=button[14].innerText;
    store(value);
    show(value);
    console.log(value);
})
button[15].addEventListener("click", () => {
    let value=button[15].innerText;
    store(value);
    show(value);
    console.log(value);
})
button[16].addEventListener("click", () => {
    let value=button[16].innerText;
    store(value);
    show(value);
    console.log(value);
})
button[17].addEventListener("click", () => {
    let value=button[17].innerText;
    answer();
    input.innerText=('');
    console.log(value);
})