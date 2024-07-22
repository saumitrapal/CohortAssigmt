function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}
trimString(fs.readFlie("a.txt", "utf-8", function(err, resolve){
    resolve("data");
}));











## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

