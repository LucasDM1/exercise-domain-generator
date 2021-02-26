let pronoun =["a","the","my","your"];
let adj=["big","great"]; 
let noun = ["plus","flies"];
let domain= ["es","us"]
let url=[];

function GeneratorDomain(){
    
    for(let i=0;i<pronoun.length;i++){

        for(let j=0;j<adj.length;j++){

            for(let k=0;k<noun.length;k++){

                let helper=false;
               

                for (let z = 0; z < domain.length; z++) {

                   if(noun[k].includes(domain[z])){   
                        //noun.search(domain[z]);

                        let rem = noun[k].replace(domain[z],'');

                        url.push(pronoun[i]+adj[j]+rem+'.'+domain[z]);

                        helper=true;
                       
                        break;
                    }
                }
                 
                if(!helper){
                    for (let v= 0; v < domain.length; v++) {
                        url.push(pronoun[i]+adj[j]+noun[k]+'.'+domain[v]);
                        
                    }
                }
                helper=false;
               
            }

        }
        

    }

    return url;
}


console.log(GeneratorDomain());

