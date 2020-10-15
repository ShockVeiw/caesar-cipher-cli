# Caesar cipher CLI
This is a command line application. It  encrypts and decrypts text with Caesar's cipher. The application encrypts and decrypts only letters of the Latin alphabet. All other characters remain unchanged.

## How to install
To  install this application, you must perform the following steps:
1. Download it from this repository.
2. Run the command line and go to the application folder.
3. Enter the command "npm install" or "npm i" and wait for the dependency installation process to complete.
4. The application is ready to go!

## How to use
In command line type "node app" then specify options you want to use. For example: "node app -s 5 -a encode -i ./1.txt -o ./2.txt".
Then run it.

Avaible options and their description:
* -s, --shift: a shift
* -i, --input: an input file
* -o, --output an output file
* -a, --action: an action (encode/decode)

The **shift** and **action**  options are required. Without them application will not run.

* The **shift** option must be an integer (no matter if it negative or positive). 
* The **input** option must be a path to input file. If this option  is not specifed - stdin will be using as an input source. If this option specifed but the file is doesn't exist or there is no access to read it - error will be thrown.
* The **output** option must be a path to output file. If this option is not specifed - stdout will be using as an output destination. If this option specifed but the file is doesn't exist or there is no access to write here - error will be thrown.
* The **action** must be an "encode" or "decode" only. Otherwise error will be thrown. An "encode" argument will be encrypt text. A "decode" argument will be decrypt text.
## Some examples of using:
### 1.
```>node app --shift 5 --input ./input.txt --output ./output.txt --action encode```

> input.txt:
> *Some text*

> output.txt:
> *Xtrj yjcy*

### 2.

```>node app -s 1 -o ./output.txt -a decode```

> stdin:
> *Hello world!*

> output.txt:
> *Gdkkn vnqkc!*

### 3.
```>node app -s 2 --input ./input.txt -a decode```

> input.txt:
> *English text, Русский текст, 123, &#$*

> stdout:
> *Clejgqf rcvr, Русский текст, 123, &#$*