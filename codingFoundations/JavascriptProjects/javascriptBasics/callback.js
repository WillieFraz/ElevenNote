/* let callback = (num) => {
    if(num % 2 == 0){
        return`${num} this number is even`
    }else if(num % 2 != 0){
        return `${num} this number is odd`
    }else {
        return `${num} what is this`
    }
}

for(i = 0; i <= 10; ++i){
    console.log(callback(i))
}
 */
/* Marty's answer :
    let callback = (num) => {
    if(isNaN(num)) return "What is this?";

    return (num % 2) ? "This number is odd." : "This is number even."
}
*/
let heroes = ["Celestial Pacer", "Compudroid", "Galacticdroid", "Ghost Baroness", "Pelt Warrior",
"Night Cancellor", "Serpent Shadow", "Barkbon", "Smash Mouth", "Mouth Fool"];

let getShortestName = (name) => {
    let shortestLength = 200;
    let shortestName;
    for(name of names) {
        if(name.length < shortestLength){
            shortestLength = name.length;
            shortestName = name.length;
        } else if (name.length === shortestLength){
            shortestName = [shortestName, name]. flat();
        }
    }
    return shortestName;
}

let getLongestName = (name) => {
    let longestLength = 0;
    let longestName;
    for (name of names) {
        if(name.length > longestLength){
            longestLength = name.length;
            longestName = name.length;
        } else if (name.length === longestLength){
            longestName = [longestName, name]. flat();
        }
    } 
    return longestName;
}