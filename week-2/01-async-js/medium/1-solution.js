// Read a file, remove all the extra spaces and write it back to the same file.
// For example, if the file input was
// hello     world    my    name   is       raman
// After the program runs, the output should be:
// hello world my name is raman


const fs=require("fs");

//readFileSync() when you need file data immediately before proceeding.
const contentFile=fs.readFileSync("a.txt","utf-8");

const newContent=contentFile.replace(/\s+/g," ");

//we could also use writeFileSync (cause we didn't really nedded to manage error)
fs.writeFile("a.txt",newContent,(err)=>{
    if(err){
        console.log("Error occur")
    }else{
        console.log("Successful");
    }
    
})

//readFileSync(filepath,fileType)
//writeFileSync(filepath,contentToBeWritten)
//they do not manage errors or have callback function




