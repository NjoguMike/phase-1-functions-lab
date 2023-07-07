// Code your solution in this file!
function distanceFromHqInBlocks(clientDist){
    const hQ = 42
    return Math.abs(hQ - clientDist)
}

function distanceFromHqInFeet(clientDist){
    const hQ = 42;
    let inFeet = Math.abs((hQ - clientDist) * 264)
    return inFeet

}


function distanceTravelledInFeet(start,destination){
    
    return Math.abs((destination-start) * 264)

}


function calculatesFarePrice(start,destination){
    const distance = Math.abs((destination-start) * 264)

    if (distance <= 400 ){
        return distance * 0
    }
    else if (distance > 400 && distance < 2000){
        const cost = Math.abs(distance - 400) * 0.02
        return cost}
    
    else if (distance > 2000 && distance < 2500){
            const  fare = 25
            return fare
        }

    else if (distance > 2500){
        return 'cannot travel that far'

    }
}

