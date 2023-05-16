// For auth 
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updatePassword, signOut } from "firebase/auth";
// For db 
import { getDatabase, ref, set, onValue, child, push, onChildAdded, remove } from "firebase/database";

import app from "./Firebaseconfig";
const db = getDatabase(app);


const auth = getAuth(app);
// const user = auth.currentUser;



// let signUp = (obj) => {
//     // console.log(obj, "here");
//     return new Promise((resolve, reject) => {

//         createUserWithEmailAndPassword(auth, obj.email, obj.password)
//             .then((userData) => {
//                 // Signed up 
//                 obj.id = userData.user.uid;
//                 const reference = ref(db, `users/${obj.id}`);
//                 set(reference, obj)
//                     .then(() => {
//                         resolve("Data Send Successfully in Database and User Created");

//                     })
//                     .catch((err) => {
//                         reject(err.message);
//                     });
//                 console.log("User signed up Succesfully");
//                 // ...
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 // ..
//             });

//     })


// }

// Testing Start 

// Update Authentication Password method Start
let updateAuthenticationPassword = ( obj) => {
    // console.log("here",user);
    return new Promise((resolve, reject) => {
        
        // const newPassword = getASecureRandomPassword();
        const userNewPassword = obj.password;
        console.log(userNewPassword,auth.currentUser);
        updatePassword(auth.currentUser, userNewPassword).then(() => {
            // Update successful.
            resolve("Update successful");
        }).catch((error) => {
            reject(error);
            // An error ocurred
            // ...
        });

    })


}
// Update Authentication Password method End
// Testing End 

// for new user create with auth purpose 
let userRegistration = (nodeName, obj) => {
    // console.log(obj, "here");
    return new Promise((resolve, reject) => {

        createUserWithEmailAndPassword(auth, obj.email, obj.password)
            .then((userData) => {
                //Register
                obj.id = userData.user.uid;
                const reference = ref(db, `${nodeName}/${obj.id}`);
                set(reference, obj)
                    .then(() => {
                        resolve("Data Send Successfully in Database and User Created");

                    })
                    .catch((err) => {
                        reject(err.message);
                    });
                console.log("User registered Succesfully");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    })


}

let loginUser = (nodeName, obj) => {

    return new Promise((resolve, reject) => {

        signInWithEmailAndPassword(auth, obj.email, obj.password)
            .then((userData) => {
                // Signed in 
                const reference = ref(db, `${nodeName}/${userData.user.uid}`);
                onValue(reference, (data) => {
                    if (data.exists()) {
                        resolve(data.val());

                    } else {
                        reject("Data Not Found :(");
                    }
                });
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    });
}

let getInstitutesList = () => {
    return new Promise((resolve, reject) => {
        const reference = ref(db, `registeredUsers/`);
        onValue(reference, (data) => {

            if (data.exists()) {
                resolve(data.val());

            } else {
                reject("Data Not Found :(");
            }
        })
    });
}

let directInsertionInDb = (nodeName, obj) => {
    return new Promise((resolve, reject) => {
        // Get a key for a new Post.
        // const generatedKey = push(child(ref(db), nodeName)).key;
        const reference = ref(db, `${nodeName}/`);
        set(reference, obj)
            .then(() => {
                resolve("Data Send Successfully in Database and Extra Info Created");
            })
            .catch((err) => {
                reject(err.message);
            });
    })
}

// for update purpose and create user without auth 
let postData = (nodeName, obj, id) => {
    return new Promise((resolve, reject) => {
        if (id) {
            const reference = ref(db, `${nodeName}/${id}`);
            set(reference, obj)
                .then(() => {
                    resolve("Data Update Successfully in Database");
                })
                .catch((err) => {
                    reject(err.message);

                });

        } else {
            // Get a key for a new Post.
            // const newPostKey = push(child(ref(db), nodeName)).key;
            const keyRef = ref(db, `${nodeName}/`)
            obj.id = push(keyRef).key;

            const reference = ref(db, `${nodeName}/${obj.id}`);

            set(reference, obj)
                .then(() => {
                    resolve("Data Send Successfully in Database and Data Created");
                })
                .catch((err) => {
                    reject(err.message);

                });
        }
    })
}

let getDataFromDb = (nodeName, id) => {
    return new Promise((resolve, reject) => {
        if (id) {
            const reference = ref(db, `${nodeName}/${id}`);
            onValue(reference, (data) => {
                if (data.exists()) {
                    resolve(data.val());

                } else {
                    reject("Data Not Found :(");
                }
            })
        } else {
            const reference = ref(db, `${nodeName}/`);
            onValue(reference, (data) => {
                if (data.exists()) {
                    resolve(data.val());

                } else {
                    reject("Data Not Found :(");
                }
            })
        }
    })
}

let deleteData = (nodeName, id) => {

    return new Promise((resolve, reject) => {
        const DeleteById = ref(db, `${nodeName}/${id}`);
        console.log(DeleteById)
        remove(DeleteById).then(() => {
            resolve("Data Deleted Successfully...");
        }).catch((err) => {
            reject(err.message);
        })
    })
}

let signOutUser = () => {
    signOut(auth)
        .then(function () {
            console.log("Logout Successfully");
            window.location.href = "/";

        })
        .catch(function (err) {
            console.log(err);
        });
}

let CheckUser = () => {
    return new Promise((resolve, reject) => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          resolve(user);
  
        } else {
          reject('User not Signed in')
        }
      });
  
    });
  };

export {
    loginUser
    /*, signUp*/,
    userRegistration,
    getInstitutesList,
    directInsertionInDb,
    getDataFromDb,
    postData,
    deleteData,
    signOutUser,
    updateAuthenticationPassword,
    CheckUser
};