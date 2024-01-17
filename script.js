(function(){
    'use strict';
    const detailsform=document.querySelector("#destination");

    detailsform.addEventListener('submit', handleFormSubmit);
    
    function handleFormSubmit(event){
        event.preventDefault();
    
        const destname=event.target.elements["name"].value;
        const destlocation= event.target.elements["location"].value;
        const destphoto= event.target.elements["photo"].value;
        const destdesription= event.target.elements["description"].value;
    
        for (let i=0;i<detailsform.length;i++){
            detailsform.elements[i].value="";
        }
    
        //function tht creates a new card
        const destcard= createdestinationcard(destname,destlocation,destphoto,destdesription);
    
        const wishlistcontainer= document.getElementById('destination_container');
    
        if (wishlistcontainer.children.length===0){
            document.getElementById('title').innerHTML='My Wish List';
        }
    
    
        //add the card
        document.querySelector('#destination_container').appendChild(destcard);
        
    }
    
    function createdestinationcard(name,location,photourl,description){
    
        const card=document.createElement('div');
    card.className='card';
    
    const img=document.createElement('img');
    img.setAttribute('alt',name);
    
    const constantphotourl="images/signpost.jpg";
    
    if (photourl.length===0){
        img.setAttribute('src',constantphotourl);
    
    }else{
        img.setAttribute('src',photourl);
    }
    
    //put the img on the card
    card.appendChild(img);
    
    const cardbody=document.createElement('div');
    cardbody.className="card-body";
    
    const cardtitle=document.createElement('h3');
    cardtitle.innerText=name;
    cardbody.appendChild(cardtitle);
    
    const cardsubtitle=document.createElement('h4');
    cardsubtitle.innerText=location;
    cardbody.appendChild(cardsubtitle);
    
    //check if somebody types sthg in the description
    
    if(description.length!==0){
        const cardtext=document.createElement('p');
        cardtext.className="card.text";
        cardtext.innerText=description;
        cardbody.appendChild(cardtext);
    }
    
    //on ajoute un bouton remove we notice that it's added automatically to our html page
    const carddeletebtn=document.createElement("button");
    carddeletebtn.innerHTML="remove";
    
    carddeletebtn.addEventListener('click',removedestination);
    cardbody.appendChild(carddeletebtn);
    
    card.appendChild(cardbody);
    
    return card;
    }
    
    
    //remove card
    
    function removedestination(event){
        const card=event.target.parentElement.parentElement;//on a selectionné le div dont la classe= card
        card.remove();
    
    }
})();


