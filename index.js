const unmodifiedTestArr = [1, 2, 3, 4]
const unmodifiedTestObj = {one: 1, two: 2, three: 3, four: 4}

function myEach(collection, callback) {
    console.log(collection)
    for(const i in collection) {
        callback(collection[i])
    }
    return collection
}


function myMap(collection, callback) {
    const newArray =[]
    for(const i in collection) {
        newArray.push(callback(collection[i]))
    }
    return newArray
}

function isArray(collection) {
    let newArray;
    if(Array.isArray(collection)) {
        newArray = collection;
    } else {
        newArray = Object.values(collection)
    }
    return newArray;
}

function myReduce(collection, callback, acc) {
    let newArray = isArray(collection)

    for (let i = 0; i < newArray.length; i++) {
        if (acc === undefined) {
          acc = newArray[0];
          i++;
        }
        acc = callback(acc, newArray[i], collection);
      }
      return acc;
}


function myFind(collection, callback) {
    
    for (const i in collection) {
        for (const i in collection) {
            if (callback(collection[i]) === true){
              return collection[i];
            }
          }
    }
}


function myFilter(collection, callback){
    
    const newArray = [];
    for (const i in collection) {
      if (callback(collection[i]) === true) {
        newArray.push(collection[i]);
      }
    }
    return newArray;
}


function mySize(collection) {
    let newArray = isArray(collection)
    let cont = 0
    for (let i=0; i < newArray.length; i++) {
        cont += 1
    }
    return parseInt(cont);
}


function myFirst(array, n=0) {
    if (n === 0) {
        return array[0]
    } else {
        return array.splice(0, n);
    }   
}

 function myLast(array, n=1) {
    const newArray = array.slice(-n);
    return newArray.length < 2 ? newArray[0] : newArray;
  }

function myKeys(object) {
    return Object.keys(object);
}


function myValues(object) {
    return Object.values(object)
}

//{
//     if (n === undefined) {
//         return array.pop()
//     } else {
//         return array.splice(0,-n);
//     }
// }

    // if (acc === undefined) {
    //     acc = newArray[0];  
    //     for (let i = 1; i < newArray.length; i++) {
    //         acc = callback(acc, newArray[i], collection);              
    //        }       
    // } else {
    //     for (let i = 0; i < newArray.length; i++) {
    //         acc = callback(acc, newArray[i], collection);
    // }
    //return acc; 
//}


    //  if(Object.getPrototypeOf(collection).constructor === Object) {
    //     collection = Object.values(collection)
    //  }
    //     console.log(newCollection)
    //     for (let i = 0; i < newCollection.length; i++) {
    //         if (acc === undefined) {
    //           acc = newCollection[0];
    //           i++;
    //         }
    //         acc = callback(acc, newCollection[i], newCollection);
    //       }
    //       return acc;
    // } else if (Object.getPrototypeOf(collection).constructor !== Object) {
        // for (let i = 0; i < collection.length; i++) {
        //     if (acc === undefined) {
        //       acc = collection[0];
        //       i++;
        //     }
        //     acc = callback(acc, collection[i], collection);
        //   }
        //   return acc;
    //}
    
//}


//console.log(myReduce({one: 1, two: 2, three: 3}, function(acc, val, collection) { return acc + val; }))


//console.log(Object.getPrototypeOf(unmodifiedTestObj).constructor === Object)