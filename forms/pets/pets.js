const petNames = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam'];

alert(`These are the pet names: ${petNames}`)

let withMarmaduke = [petNames, 'Marmaduke']
alert(`Marmaduke was added to the pet names: ${withMarmaduke}`)

let addPet = petNames.push('Mackenzie');
alert(`Mackenzie was added to the pet names.  There are now ${addPet} pets`)


let userChoice = prompt(`Type in the number of the action you want to take. 1. Delete Vinny 2. Delete Marty 3. Add Nancy to the beginning 4. Add your name 5. Find the location of Riley 6. Find the location of Cindy 7. Show array data with Marmaduke`)

switch(userChoice) {
case '1':
delete petNames[5]
alert(`The action taken was: Vinnys name was removed.  The remaining array data: ${petNames}`)
break

case '2':
delete petNames[3]
alert(`The action taken was: Martys name was removed. The remaining array data are: ${petNames}`)
break

case '3':
petNames[0] = 'Nancy'
alert(`The action taken was: Nancy was added to petNames. The remaining array data are: ${petNames}`)
break

case '4':
let userName = prompt(`What is your name?`)
petNames[10] = userName
alert(`The action taken was: Add your name to the end of the array.  The remaining array data are: ${petNames}`)
break

case '5':
let rileyLocation = petNames.indexOf('Riley')
alert(`The location of Riley in the array is: ${rileyLocation}`)
break

case '6':
let cindyLocation = petNames.indexOf('Cindy')
alert(`The location of Cindy in the array is: ${cindyLocation}`)
break

case '7':
alert(`The array data with Marmaduke are: ${withMarmaduke}`)
break

default:
alert(`You did not select an option`)
} 