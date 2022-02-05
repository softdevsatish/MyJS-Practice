let verified=true
let paid= true
let guest=true
if (!verified && paid) {
    console.log('Welcome Pro User!')
    console.log('Full Course is ready for you!')
}else if (verified || guest) {
    console.log('Welcome Guest User!')
    console.log('Trial Course is ready for you!')
}else{
    console.log('You are a not a verfied user')
    console.log('Verification link sent to your registered email id')
}