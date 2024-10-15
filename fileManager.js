//Importando bibliotecas nativas do node. 
//Forma de infortação chamada de CommonJS
const fs = require('fs')
const path = require('path')


//Promise é uma "bibllioteca que cria assincronismo"
//resolve e reject são parametros da função
// => "arow function" são funções sem parametros
// quando => está dentro de outra função chamamos de Callback (=> dentro do Promise)

//Criando pasta
function createDirectory(dirPath){
    return new Promise((resolve, reject) =>{
        fs.mkdir(dirPath, {recursive: true}, (err) => {
            if(err) {
                reject(err); //rejeita a promisse
            } else {
                resolve(`Directory '${dirPath}' created Successfully`); //resolve a promisse
            }
        });
    });
}

//Criando arquivos
function createFile(filePath, content = '' ){
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf8', (err) => {
            if(err) {
                reject(err); //rejeita a promisse
            } else {
                resolve(`File '${filePath}' created Successfully`); //resolve a promisse
            }
        });
    });
}

//Listando arquivos
function listFile(dirPath){
    //Retorna uma promisse que resolve com a lista de arquivos
    return new Promise((resolve, reject) => {
        fs.readdir(dirPath, (err, files) => {
            if(err) {
                reject(err); //rejeita a promisse
            } else {
                resolve(files); //resolve a promisse
            }
        });
    });
}

//lendo arquivos
function readFile(filePath){
    //Retorna uma promisse que resolve com a lista de arquivos
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if(err) {
                reject(err); //rejeita a promisse
            } else {
                resolve(data); //resolve a promisse
            }
        });
    });
}


//escrevendo arquivos
function writeFile(filePath, content){
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf8', (err) => {
            if(err) {
                reject(err); //rejeita a promisse
            } else {
                resolve('File written sucessffully'); //resolve a promisse
            }
        });
    });
}

//Apagando arquivos
function deleteFile(filePath){
    return new Promise((resolve, reject) => {
        fs.unlink(filePath, (err) => {
            if(err) {
                reject(err); //rejeita a promisse
            } else {
                resolve('File deleted Successfully'); //resolve a promisse
            }
        });
    });
}









module.exports= {createDirectory, createFile, listFile, readFile, writeFile, deleteFile}