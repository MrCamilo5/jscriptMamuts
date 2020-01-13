function generar(){
    function aleatrioentre(min,max){
        return Math.floor(Math.random()*(max-min))+min;
    }
    var mamuts=[];
    var pob=[];
    var anos=[];
    var ano=1;
    var ini=1000;
    var lim;
    for(i=0;i<ini;i++){
    mamuts.push(1);
    }
    // Primera teoria
    while(ano <= 8 && mamuts.length > 0){
        for(x of mamuts){
            d=aleatrioentre(1,7);
            if(d==1 || d==2 ){
                mamuts[mamuts.length]=1;
            }else if(d==3 || d==4){
                mamuts.pop();
            }else{}
        }
        pob.push(mamuts.length);
        ano+=1;
    }
    // Segunda Teoria
    while(mamuts.length <= ini*4 && mamuts.length > 0){
        for(x of mamuts){
            d=aleatrioentre(1,7);
            if(d==1 || d==2 || d==3){
                mamuts[mamuts.length]=1;
            }else if(d==4 || d==5){
                mamuts.pop();
            }else{}
        }
        pob.push(mamuts.length);
        ano+=1;
        lim=ano;
        }
    // Tercera teoria
    while(ano <= lim+8 && mamuts.length > 0){
        for(x of mamuts){
            d=aleatrioentre(1,7);
            if(d==1 || d==2 || d==3){
                mamuts[mamuts.length]=1;
            }else if(d==4 || d==5){
                mamuts.pop();
            }else{}
        }
        pob.push(mamuts.length);
        ano+=1;
        }
    //  Cuarta teoria
    while(mamuts.length > 0){
        for(x of mamuts){
            d=aleatrioentre(1,7);
            if(d==1){
                mamuts[mamuts.length]=1;
            }else if(d==2 || d==3 ||d==4 || d==5){
                mamuts.pop();
            }else{}
        }
        pob.push(mamuts.length);
        ano+=1;
        }
    for(t=0;t<pob.length;t++){
        anos.push(t)
    }
    let grafico= document.getElementById('chrt').getContext("2d");
    var grfico =new Chart(grafico,{
        type:'line',
        data:{
            labels:anos,
            datasets:[{
                label:'Cantidad de Mamuts por año',
                data:pob
            }]
        }
    }) ; 
}
