    var dateNow = new Date();  // puxa a data 

    var dayNow = dateNow.getDay()
    var monthNow = (dateNow.getMonth()+ 1) //o mês começa em 0
    var yearNow = dateNow.getFullYear()
    //pega o mês do cliente, recebe o mes indicado de 0 a 11
    //pega o ano do cliente 

const verificar = () => {
    //monthF();
    //console.log(date);

    var AnoDoNascimento = (window.document.getElementById("iAno").value); //AAAA-MM-DD Formato da data fornecida pelo usuário
    
    const day = AnoDoNascimento.split('-')[2]; // dia
    const month = AnoDoNascimento.split('-')[1]; //  nesse caso não precisamos fazer nenhum filtro diante do valor do mês
    const year = AnoDoNascimento.split('-')[0]; // ano
    console.log(day+ "/" + month + "/" + year) 
    
/*
    var resuldado = window.document.querySelector("div#iResultado")  

    if (AnoDoNascimento.length == 0 || AnoDoNascimento > yearNow || AnoDoNascimento == 0) {
        window.alert("Verifique os dados e tente novamente! ");
    } else {
        var sexo = window.document.getElementsByName('nSexo');
        var idade = yearNow - Number(AnoDoNascimento);
        var genero = '';
        var img = document.createElement('img'); //criando html pelo javascript
        img.setAttribute('id', 'img01'); //criamos um id para a foto chamada img1

        if (sexo[0].checked) {
            genero = 'Homem';

            if(yearNow == AnoDoNascimento){
                genero = 'Bebê'
                //bebê
                img.setAttribute('src','https://i.ibb.co/HHBQCnr/beb.png')
            }else if (idade > 0 && idade < 11) {
                genero = 'Criança'
                //criança
                img.setAttribute('src','https://i.ibb.co/7XPYYzf/Crian-a-h.png');
            } else if (idade < 22) {
                genero = 'Jovem'
                //jovem
                img.setAttribute('src','https://i.ibb.co/31CFBDc/Jovens-h.png');
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src','https://i.ibb.co/0QRZLZx/Adulto-h.png');
            } else {
                //idoso
                img.setAttribute('src','https://i.ibb.co/dLJmvsD/Idoso-h.png');
            }

        } else if (sexo[1].checked) {
            genero = 'Mulher';
            if(yearNow == AnoDoNascimento){
                genero = 'Bebê'
                //bebê
                img.setAttribute('src','https://i.ibb.co/HHBQCnr/beb.png')
            }else if (idade > 0 && idade < 11) {
                genero = 'Criança'
                //criança
                img.setAttribute('src','https://i.ibb.co/0XpK2VT/Crian-a-m.png');
            } else if (idade < 22) {
                genero = 'Jovem'
                //jovem
                img.setAttribute('src','https://i.ibb.co/z2wPj2R/Jovens-m.png');
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src','https://i.ibb.co/zf18t4b/Adulto-m.png');
            } else {
                //idoso
                img.setAttribute('src','https://i.ibb.co/ZmSxxRk/Idoso-m.png');
            }
        }
        resuldado.style.textAlign = 'center';
        resuldado.innerHTML = ` ${genero} de ${idade} anos`
        resuldado.innerHTML += `</br>`

        resuldado.appendChild(img);    //atribui de fato a imagem 
    }
    */
}
const monthF = () => {
    switch (monthNow) {
        case 0: 
            console.log("Janeiro");
            break;
        case 1:
            console.log("Fevereiro");
            break;
        case 2: 
            console.log("Março");
            break;        
        case 3: 
            console.log("Abril");
            break;        
        case 4: 
            console.log("Maio");
            break;        
        case 5: 
            console.log("Junho");
            break;        
        case 6: 
            console.log("Julho");
            break;        
        case 7: 
            console.log("Agosto");
            break;
        case 8: 
            console.log("Setembro");
            break;
        case 9: 
            console.log("Outubro");
            break;
        case 10: 
            console.log("Novembro");
            break;
        case 11: 
            console.log("Dezembro");
            break;
        default:
            console.log("Erro 404");
            
    }
}






