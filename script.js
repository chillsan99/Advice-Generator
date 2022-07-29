let advice = {

    fetchAdvice:function(){
        fetch(
            "https://api.adviceslip.com/advice"
            )
        .then((response)=> response.json())
        .then((data) => this.displayAdvice(data))
    },

    displayAdvice: function(data){
        const{ id , advice } = data.slip;

        document.querySelector(".advicenum").innerText="A D V I C E #" + id;
        document.querySelector(".description").innerText = '"' + advice + '"';
        document.querySelector(".advice").classList.remove("loading");
        
        
    }
    
}

document.querySelector(".generate button").addEventListener("click", function(){
    advice.fetchAdvice();
});

advice.fetchAdvice();