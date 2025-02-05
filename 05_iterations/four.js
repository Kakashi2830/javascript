const myObject={
    js:'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift:'swift by apple'
}

for (const key in myObject){
    console.log(myObject[key]);
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
    
}

const programming = ['js','rb','py','java','cpp']

//for(const key in programming){
//    if (Object.hasOwnProperty.call(object,key)){
        //const element =object[key];
//    }
//}

const map = new Map()
map.set('IN',"India")
map.set('USA',"united Stattes of America")
map.set('Fr',"France")

for (const key in map) {
    console.log(key);
    
}