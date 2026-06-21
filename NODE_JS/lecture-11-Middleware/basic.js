let student={
    "name":"akshita",
    age:19
}

let data=JSON.stringify(student);
console.log(data);
console.log(typeof(data));

data=student.parse();
console.log(typeof(data));
