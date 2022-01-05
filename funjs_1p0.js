const pathLivro = "https://feevale.blackboard.com/bbcswebdav/institution/Publica_WEB/imgs_layout/icones/ico_livro.png";
const pathRevista = "https://feevale.blackboard.com/bbcswebdav/institution/Publica_WEB/imgs_layout/icones/ico_revista.png";
const pathArtigo = "https://feevale.blackboard.com/bbcswebdav/institution/Publica_WEB/imgs_layout/icones/ico_artigo.png";
const pathApresentacao = "https://feevale.blackboard.com/bbcswebdav/institution/Publica_WEB/imgs_layout/icones/ico_apresentacao.png";
const pathVideo = "https://feevale.blackboard.com/bbcswebdav/xid-7122945_1";
const pathSite = "https://feevale.blackboard.com/bbcswebdav/institution/Publica_WEB/imgs_layout/icones/ico_link.png";
const pathPodcast = "https://feevale.blackboard.com/bbcswebdav/institution/Publica_WEB/imgs_layout/icones/PODCAST.png";



//aloooo;
//let inputLinkNodeeeeee;

function addNovo(){
                
                
    let sectionNode = document.createElement("section");
    sectionNode.setAttribute("class","flex");
    let btnNode = document.createElement("button");
    let btnDellNode = document.createElement("button");

    btnNode.textContent = "Adicionar Novo";
    btnNode.setAttribute("onClick","addNovo()"); 
    btnDellNode.textContent= "Excluir";
    btnDellNode.setAttribute("onClick","dellEste(this)");

    

    let spanNode = document.createElement("span");
    spanNode.textContent ="Nome do link";
    let inputNode = document.createElement("input");
    inputNode.setAttribute("class","txt_nome");
    //inputNode.setAttribute('onfocus', "this.value=''");
    //inputNode.setAttribute("value", "Cole aqui o nome do arquivo.......");

    let selectNode = document.createElement("select");
    

	let optionNodeVideo = document.createElement("option");
	let optionNodeApresentacao = document.createElement("option");
    let optionNodeArtigo = document.createElement("option");
    let optionNodeRevista = document.createElement("option");
    let optionNodeLivro = document.createElement("option");
    let optionNodeSite = document.createElement("option");
    let inputLinkNode = document.createElement("input");
    let checkboxInpNode = document.createElement("input");
    let spanCheckNode = document.createElement("span");
	spanCheckNode.setAttribute("class","url_txt");
    spanCheckNode.textContent="URL";
	
    inputLinkNode.setAttribute("class","input_url_txt");
	inputLinkNode.setAttribute("value", "https://www.youtube.com/watch?v=");
    selectNode.setAttribute('onChange', "addTxt_Linkyou(this)");

	optionNodeVideo.textContent= " Vídeo Youtube";
    optionNodeVideo.setAttribute("value", "video");
	optionNodeApresentacao.textContent=" Apresentação ";
    optionNodeApresentacao.setAttribute("value", "apresentacao");
    
    optionNodeArtigo.textContent=" Artigo ";
    optionNodeArtigo.setAttribute("value","artigo");
    
    let optionNodeArquivo = document.createElement("option");
    optionNodeArquivo.textContent=" Arquivo ";
    optionNodeArquivo.setAttribute("value","arquivo");

    optionNodeRevista.textContent=" Revista ";
    optionNodeRevista.setAttribute("value","revista");
    optionNodeLivro.textContent = " Livro ";
    optionNodeLivro.setAttribute("value", "livro");
    optionNodeSite.textContent="Site";
    optionNodeSite.setAttribute("value","site");
    
    //livros
    let optionNodeLivrobv = document.createElement("option");
    optionNodeLivrobv.textContent="Livro B. Virtual";
    optionNodeLivrobv.setAttribute("value","livrobv");
    let optionNodeLivrodl = document.createElement("option");
    optionNodeLivrodl.textContent="Livro Minha B.";
    optionNodeLivrodl.setAttribute("value","livrodl");

    //Vídeocast
    let optionNodeAudiocast = document.createElement("option");
    optionNodeAudiocast.textContent="Audiocast Youtube";
    optionNodeAudiocast.setAttribute("value","audiocast");

    //Vídeocast
    let optionNodeVideoon = document.createElement("option");
    optionNodeVideoon.textContent="Video Outros";
    optionNodeVideoon.setAttribute("value","videoon");
    
    checkboxInpNode.setAttribute("type","checkbox")
    checkboxInpNode.setAttribute("class","feevas_checkbox");
    checkboxInpNode.setAttribute("checked", "true");
        
    inputLinkNode.setAttribute("class", "displayNone");

	selectNode.appendChild(optionNodeVideo);
    selectNode.appendChild(optionNodeAudiocast);
    selectNode.appendChild(optionNodeVideoon);
    selectNode.appendChild(optionNodeApresentacao);	
    selectNode.appendChild(optionNodeArtigo);
    selectNode.appendChild(optionNodeArquivo);
    selectNode.appendChild(optionNodeRevista);
    selectNode.appendChild(optionNodeLivro);
    selectNode.appendChild(optionNodeLivrobv);
    selectNode.appendChild(optionNodeLivrodl);
    selectNode.appendChild(optionNodeSite);


    sectionNode.appendChild(spanNode);
    sectionNode.appendChild(inputNode);
    sectionNode.appendChild(selectNode);
    sectionNode.appendChild(inputLinkNode);
    
    sectionNode.appendChild(checkboxInpNode);
    sectionNode.appendChild(spanCheckNode);
    sectionNode.appendChild(btnNode);
    sectionNode.appendChild(btnDellNode);
    

    tudoDiv.appendChild(sectionNode);
	

}

function addTxt_Linkyou(s){
    //alert(s.value); 
    //AO SELECIONAR NAS OPÇÕES

    //VÍDEO
    if(s.value == "video" || s.value == "audiocast"){
        //alert(t.value); 
        s.parentNode.children[3].value="https://www.youtube.com/watch?v=";
        //s.parentNode.children[2].removeAttribute('onfocus');
        //console.log(s.parentNode);
    }else if(s.value == "livrodl"){
        s.parentNode.children[3].value="Minha Biblioteca. Cole aqui o ISBN...";
        s.parentNode.children[3].setAttribute('onfocus', "this.value=''; this.removeAttribute('onfocus');");
    }else if(s.value == "livrobv"){
        s.parentNode.children[3].value="Biblioteca Virtual. Cole aqui o ISBN...";
        s.parentNode.children[3].setAttribute('onfocus', "this.value=''; this.removeAttribute('onfocus');");
    }else{
        s.parentNode.children[3].value="Cole aqui a url...";
        s.parentNode.children[3].setAttribute('onfocus', "this.value=''; this.removeAttribute('onfocus');");
    }

}

function dellEste(node){
    let sectionNodeDel =  node.parentNode;
    tudoDiv.removeChild(sectionNodeDel);

}

function geraCode(arrayMateriais){
    

    //let htmlvideos = montaVideos(arrayMateriais);
    let juntaTudo="";
    let htmlTxtInicio = "<div class='container_bs-fluid' style=' overflow:hidden '>"+
                                "AQUITODOMATERIAL"+ 
                        "</div>";
  
    /* juntaTudo = montaVideos(arrayMateriais); */
    juntaTudo = montaIcones(arrayMateriais);
    let novoIndex = htmlTxtInicio.replace("AQUITODOMATERIAL",juntaTudo );
	
    return novoIndex
}  


function montaIcones(arrayMat){
    
    let itensIconeCont = "";
    let contador=0;
    let abriuSection = false;
    let numeroIcones=0;

    for(let i = 0; i< arrayMat.length ; i++){        
            contador++;
            if(contador == 1 || contador == 3 || contador == 5 || contador == 7 || contador == 9 || contador== 11){
                itensIconeCont+="<section class='row_bs'>";
            }
            itensIconeCont+="<div class ='col-sm my-2'><div class='media'> "+
                                "<span class = 'media-left feevas_cinza feevas_icone'><img class='img-fluid' src='"+caminhoIcone(arrayMat[i].tipoItem)+"' alt='icone'></span>"+
                                    "<div class ='media-body my-auto mx-2'>"+
                                    geraNomeArquivo(arrayMat[i]) +
                                    "</div>"+
                            "</div></div>";
            if(contador == 2 || (numeroIcones == 3 && contador==3) || contador == 4 || (numeroIcones == 5 && contador==5) || contador == 6 || (numeroIcones == 7 && contador==7) || contador == 8 || (numeroIcones == 9 && contador==9) || contador == 10){
                 itensIconeCont+="</section>";
            }                

    }
    console.log("contador: "+contador);
    console.log("numeroIcones: "+numeroIcones);
    return itensIconeCont;
}

function caminhoIcone(tipoMat){
    if(tipoMat){
        if(tipoMat=="artigo" || tipoMat=="arquivo"){
            return pathArtigo;
        }
        if(tipoMat=="apresentacao"){
            return pathApresentacao;
        }
        if(tipoMat=="revista"){
            return pathRevista
        }
        if(tipoMat=="site"){
            return pathSite;
        }
        if(tipoMat=="livro" || tipoMat=="livrobv" || tipoMat=="livrodl"){
            return pathLivro;
        }
        if(tipoMat=="video" || tipoMat=="audiocast" || tipoMat=="videoon"){
            return pathVideo;
        }  
    }else{
        return "ERRO_GERAR_ICONE";
    }
}

function geraNomeArquivo(objMat){
    let textoMaterial="";

        if(objMat.tipoItem=="artigo"){
            textoMaterial = "Artigo: ";
            if(objMat.usaLink){
                textoMaterial += "<a href='"+objMat.linkMaterial+"'  target='_blank' > "+objMat.nomeItem+" </a>"
            }else{
                textoMaterial += objMat.nomeItem;
            }
        }
        if(objMat.tipoItem=="arquivo"){
            textoMaterial = "Arquivo: ";
            if(objMat.usaLink){
                textoMaterial += "<a href='"+objMat.linkMaterial+"'  target='_blank' > "+objMat.nomeItem+" </a>"
            }else{
                textoMaterial += objMat.nomeItem;
            }
        }
        if(objMat.tipoItem=="apresentacao"){
            textoMaterial = "Apresentação: ";
            if(objMat.usaLink){
                textoMaterial += "<a href='"+objMat.linkMaterial+"'  target='_blank' > "+objMat.nomeItem+" </a>"
            }else{
                textoMaterial += objMat.nomeItem;
            }
        }
        if(objMat.tipoItem=="revista"){
            textoMaterial = "Revista: ";
            if(objMat.usaLink){
                textoMaterial += "<a href='"+objMat.linkMaterial+"'  target='_blank' > "+objMat.nomeItem+" </a>"
            }else{
                textoMaterial += objMat.nomeItem;
            }
        }
        if(objMat.tipoItem=="site"){
            textoMaterial = "Site: ";
            if(objMat.usaLink){
                textoMaterial += "<a href='"+objMat.linkMaterial+"'  target='_blank' > "+objMat.nomeItem+" </a>"
            }else{
                textoMaterial += objMat.nomeItem;
            }
        }
        if(objMat.tipoItem=="livro"){
            textoMaterial = "Livro: ";
            if(objMat.usaLink){
                textoMaterial += "<a  href='"+objMat.linkMaterial+"' target='_blank' > "+objMat.nomeItem+" </a>"
            }else{
                textoMaterial += objMat.nomeItem;
            }
        }
        if(objMat.tipoItem=="livrobv"){
            textoMaterial = "Livro: ";
            if(objMat.usaLink){
                textoMaterial += "<a href='#' onclick=\"bvpLivro('@X@user.id@X@','"+objMat.linkMaterial+"');\">"+objMat.nomeItem+"</a>"
            }else{
                textoMaterial += objMat.nomeItem;
            }
        }
        if(objMat.tipoItem=="livrodl"){
            textoMaterial = "Livro: ";
            if(objMat.usaLink){
                textoMaterial += "<a href='#' onclick=\"dlLivro('@X@user.id@X@','"+objMat.linkMaterial+"');\">"+objMat.nomeItem+"</a>"
            }else{
                textoMaterial += objMat.nomeItem;
            }
        }
        if(objMat.tipoItem=="video"){
            textoMaterial = "Vídeo: ";
            if(objMat.usaLink){
                textoMaterial += "<a data-fslightbox  href='"+objMat.linkMaterial+"?rel=0' > "+objMat.nomeItem+" </a>"
            }else{
                textoMaterial += objMat.nomeItem;
            }
        }
        if(objMat.tipoItem=="videoon"){
            textoMaterial = "Vídeo: ";
            if(objMat.usaLink){
                textoMaterial += "<a href='"+objMat.linkMaterial+"' target='_blank' > "+objMat.nomeItem+" </a>"
            }else{
                textoMaterial += objMat.nomeItem;
            }
        }
        if(objMat.tipoItem=="audiocast"){
            textoMaterial = "Audiocast: ";
            if(objMat.usaLink){
                textoMaterial += "<a data-fslightbox  href='"+objMat.linkMaterial+"?rel=0' > "+objMat.nomeItem+" </a>"
            }else{
                textoMaterial += objMat.nomeItem;
            }
        }
    return textoMaterial;
        
}

