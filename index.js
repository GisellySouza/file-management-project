const fileManager = require('./fileManager')
const readlineSync = require('readline-sync')
const path = require ('path')


//async é usado pois há uma promise (fileMessage) e quando usamos await na promisse temos que tornar a função mãe dela asyncrona. 
async function main() {
    const baseDir = path.join(__dirname, "my_files");//com o dirnaame aqui os arquivos vão pra dentro de My-files
    fileManager.createDirectory(baseDir)

//while(true) é um loop infinito
    while (true) {
    console.log('=== Menu ===');
    console.log('1. Criar arquivo');
    console.log('2. Listar arquivo');
    console.log('3. Ler arquivo.');
    console.log('4. Escrever arquivo.');
    console.log('5. Deletar arquivo.');
    console.log('6. Sair');
    
    
    const choice = readlineSync.question('Escolha uma opcao: ');
    
    try {
        switch (choice) {
            case '1':
                const fileName = readlineSync.question('Digite o nome do arquivo:');
                const fileContent = readlineSync.question('Digite o conteudo do arquivo ou deixe em branco:');

                const createFilePath = path.join(baseDir, fileName)//cria o endereço do arquivo. Exemplo: //C:\Users\Giselly Souza\Desktop\Programação\DNC\Curriculum.doc
                //para mudar a pasta onde será arquivado mudamos o primeiro nome dentro do parentese acima. (__dirname ou baseDir)
                const fileMessage = await fileManager.createFile(createFilePath, fileContent)



                console.log(fileMessage);
                break;
            case '2':
                const files = await fileManager.listFile(baseDir);
                console.log("Arquivos no Diretório:", files);
                break;


            case '3':
                const readFileName = readlineSync.question(
                    "Digite o nome e extensao do arquivo:"
                );
                const readFilePath = path.join(baseDir, readFileName);
                const content = await fileManager.readFile (readFilePath);
                console.log("Conteudo do arquivo:", content);
                break;
            

            case '4':
                const writeFileName = readlineSync.question(
                    "Digite o nome do Arquivo:"
                );
                const writeFilePath = path.join(baseDir, writeFileName);
                const newContent = readlineSync.question(
                    "Digite o conteúdo a ser escrito:"
                );
                const messageWrite = await fileManager.writeFile (writeFilePath, newContent);
                console.log(messageWrite);
                break;

            case '5':
                const deleteFileName = readlineSync.question(
                    "Digite o nome do Arquivo:"
                );
                const deleteFilePath = path.join(baseDir, deleteFileName);
                const messageDelete = await fileManager.deleteFile (deleteFilePath);
                console.log(messageDelete);
                break;

            case '6':
                console.log("Saindo...");
                return;
                //Quando usamos o return paramos a execução da função e voltamos pro terminal
                     
            default:
                console.log('Opção inválida');
            }

    } catch (err) {
        console.log(err)

    }

        
    }
}

    //try/catch try tente fazer algo (resolver uma promisse), se não der (catch) faça outra coisa
    
    main();