
const { exit, exitCode, nextTick } = require('process');
const readline = require('readline');
const validator = require('validator');

const rl = readline.createInterface({
    input :process.stdin,
    output:process.stdout
});

let nama,email,number;
rl.question('What is your name? ',(name)=>{
    nama = name;
    cekEmail();
})

function cekEmail() {
    rl.question('What is your email? ',(Temail)=>{
        email = Temail;
        if (validator.isEmail(email)) {
            cekNomer();
        }else{
            console.log('Email masih salah');
            cekEmail();
        }
    })
}

function cekNomer() {
    rl.question('What is your number? ',(Tnumber)=>{
        number = Tnumber;
        if (validator.isMobilePhone(number,'id-ID')) {
            console.log(`Thanks You ${nama} `);
            console.log('Email dan Nomer sudah benar');
            rl.close();
        }else{
            console.log('Nomer masih salah');
            cekNomer();
        }
    })
}






// rl.question('What is your name? ',(name)=>{
    //     //mengecek nomer
    
    //     rl.question('What is your phone? ',(phone)=>{
        //         if (validator.isMobilePhone(phone,'id-ID')==false) {
            //             cekNomer(phone,name);
            //         }
            //         //mengecek email
            //         rl.question('What is your email? ',(email)=>{
                //             if (validator.isEmail(`${email}`)==false) {
                    //                 cekEmail(email);               
//             }
//             else{
    //                 console.log(`\nThank you ${name}`);
    //                 console.log('Email dan No HP kamu sudah benar');
    //                 rl.close();
    //             }
    //         })
//     })
// })

// function cekNomer(phone,name) {
//     if (validator.isMobilePhone(phone)==false) {
//         console.log(`Nomor telepon mu masih salah `);
//         rl.question('Masukkan ulang no hp? ',(phone)=>{
//             cekNomer(phone,name);
//         })
//     }
//     if (validator.isMobilePhone(phone)==true) {
    //         console.log('No hp sudah benar');
    //         cekEmail(email="",name);
//     }


// }
// function cekEmail(email,name) {
    //     rl.question('What is your email? ',(email)=>{
//         if (validator.isEmail(`${email}`)==false) {
    //             cekEmail(email);               
    //         }else{
        //             console.log(`\nThank you ${name}`);
        //             console.log('Email dan No HP kamu sudah benar');
        //             rl.close();
//         }
//     })
// }