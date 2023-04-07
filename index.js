
const getQuote=async()=>{
    try{
        
        const res=await fetch("https://type.fit/api/quotes")
        const data=await res.json();
        let ranNum=Math.floor(Math.random()*1000)
        console.log(data[ranNum])
        const quote=document.querySelector("#quote")
        const author=document.querySelector("#author")
        quote.innerHTML=data[ranNum].text;
        author.innerHTML=data[ranNum].author
        
    }
    catch(e){
        alert("Error occured")
    }
}
window.addEventListener('load',()=>{
    getQuote();
})