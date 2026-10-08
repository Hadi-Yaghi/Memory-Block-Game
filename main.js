document.querySelector(".control-buttons span").onclick = function(){
    let yourName =  prompt("Whats your name ?");

    if(yourName== null || yourName == ""){
        document.querySelector(".name span").innerHTML='unkown';
    }else{
         document.querySelector(".name span").innerHTML=yourName;
    }
    //Remove splash Screen
    document.querySelector(".control-buttons").remove();

   

}

 let duration = 1000;

// Select Blocks Container
let blocksContainer = document.querySelector(".memory-game-blocks");

// Create Array From Game Blocks
let blocks = Array.from(blocksContainer.children);

let orderRange  = [...Array(blocks.length).keys()];
console.log(orderRange);
shuffle(orderRange);
console.log(orderRange);

//Add order css property to Game Blocks
blocks.forEach((block,index) =>{
    block.style.order= orderRange[index];
    
    // Add click event
    block.addEventListener('click',function(){
        //Triger The 
        flipBlock(block);
    })
});
//Flip Block Function
function flipBlock(selectedBlock){
    // Add class is-flipped
    selectedBlock.classList.add('is-flipped');

    //collect All flipped card
    
    let allFlippedBlocks =  blocks.filter(flippedBloc => flippedBloc.classList.contains('is-flipped'));
    //If Theres Two Selected Blocks
    if(allFlippedBlocks.length==2){
        console.log("2 selected");
    }
    //stop clicking function

    //Check Matched Block Fucntion
}
//shuffle function
function shuffle(array){
    let current = array.length,
        temp,
        random;

    while(current>0){
        //Get Random Number
        random= Math.floor(Math.random()*current);

        //decrease length by one
        current --;
        //[1] save current element in stash

        temp = array[current];
        // [2] current element = random element
        array[current] = array[random];
        //[3] random element = get element from stash
        array[random]=temp;
    }
    return array;
}

//currnet Element  =  [1,2,3,4,5,6,7,8,9,0]
//new Element =  [1,2,3,0,5,6,7,8,9,4]
/*
 [1] save current element in stash
 [2] current element = random element
 [3] random element = get element from stash
 */