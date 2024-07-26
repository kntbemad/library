const myLibrary = [];
const submitbtn = document.getElementById("submitbtn");
let bookDiv = document.getElementById("bookDiv");

submitbtn.addEventListener("click", fuck => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const author = document.getElementById("author").value;
    const read = document.getElementById("read").checked;
    console.log(read + "help!");
    console.log("what");

    addBookToLibrary(name, author, read);
    
    
    document.getElementById("form").style.display = "none";
    document.getElementById("bookForm").reset();
});

function addBook(name){
    let bookId = myLibrary.map(x => x.title).indexOf(name);
    let newBookDiv = document.createElement("div");
    let removeBookBtn = document.createElement("button");
    let changeReadBtn = document.createElement("button");
    let bookInfo = document.createElement("p");

    removeBookBtn.textContent = "remove";
    changeReadBtn.textContent = "change read status";
    newBookDiv.style.display = "flex";
    newBookDiv.style.gap = "10px";
    newBookDiv.style.alignItems = "center";
    newBookDiv.id = "bookd" + bookId;

    bookInfo.textContent = myLibrary[bookId].info();
    bookInfo.id = "bookinfo" + bookId;

    removeBookBtn.addEventListener("click", (e) => {
        bookDiv.removeChild(newBookDiv);
    });
    
    changeReadBtn.addEventListener("click", (b) => {
        myLibrary[bookId].read = !myLibrary[bookId].read;
        console.log(myLibrary[bookId].read);
        document.getElementById("bookinfo" + bookId).textContent = myLibrary[bookId].info();
    });

    newBookDiv.appendChild(bookInfo);
    newBookDiv.appendChild(removeBookBtn);
    newBookDiv.appendChild(changeReadBtn);
    bookDiv.appendChild(newBookDiv);
}


function Book(title, author, read){
    this.title = title;
    this.author = author;
    this.read = read;
    this.info = function(){
        let readstr = "";
        if(this.read){
            readstr = "read";
        } else {
            readstr = "not read";
        }
        return title + " by " + author + ", " + readstr + ".";
    }
}

function addBookToLibrary(title, author, read){
    myLibrary.push(new Book(title,author, read));
    addBook(title);
}

addBookToLibrary("bobs book", "bob", true);
addBookToLibrary("book of job", "job", false);

console.log("hello");

function createForm(){
    document.getElementById("form").style.display = 'flex';
}

let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", createForm);

