const loading=()=>{

    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>display(data))
}
const display=(datas)=>{
    console.log(datas);
    const dataAll=(datas.map(databases=>getalldatas(databases)));
const countries=document.getElementById('container');
countries.innerHTML=dataAll.join(" ");

}
const getalldatas=(gotdata)=>{
return `
<div>
<h2>${gotdata.name.common}</h2>
<img src="${gotdata.flags.png}"/>
</div>
`
}
loading();