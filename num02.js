function countTo(){
    let from = 0;
    let to = 190 ;
    let step = to > from ? 1 : -1;
    let interval = 40;

    if(from == to){
        document.querySelector(".num02").textContent = from;
        return;
    }

    let counter = setInterval(function(){
        from += step;
        document.querySelector(".num02").textContent = from;

        if(from == to){
            clearInterval(counter);
        }
    }, interval);
}
countTo();