var {colleges}=collegesData;
(function InfiniteScroll(){
    var currentCount=0;
    var totalCollegeCount=colleges.length;
    window.addEventListener("scroll",loadColleges);
    const showColleges=document.querySelector('.showColleges');
    loadColleges();
    function createArrow(collegeCommon,currentCount){
        let currentCollege=colleges[currentCount];
        let isPromoted=currentCollege.promoted;
        let arrow=document.createElement('div');
        arrow.className="arrow";
        collegeCommon.appendChild(arrow);
        // console.log(isPromoted);
        if(isPromoted==true){
            arrow.innerHTML=`PROMOTED`;
        }
        else{
            arrow.innerHTML=`NOT-PROMOTED`;

        }

    }
    function createCollegeUpper(collegeCommon,currentCount){
        let currentCollege=colleges[currentCount];
        let rating_ = currentCollege.rating;
        let collegeUpper=document.createElement('div');
        collegeUpper.className="collegeUpper";
        collegeCommon.appendChild(collegeUpper);
        let rating=document.createElement('div');
        rating.className="rating";
        collegeUpper.appendChild(rating);
        rating.innerHTML=`${rating_}/`;
        let span=document.createElement('span');
        rating.appendChild(span);
        span.innerHTML=`${5}`;
        let br=document.createElement('br');
        rating.appendChild(br);
        span=document.createElement('span')
        rating.appendChild(span);
        span.innerHTML="Very Good";
        let tags_=currentCollege.tags;
        let tags=document.createElement('div');
        tags.className="tags";
        collegeUpper.appendChild(tags);
        for(let i=0;i<tags_.length;i++){
            let tagContent=tags_[i];
            let currentTag=document.createElement('span');
            currentTag.className="tag";
            currentTag.innerHTML=tagContent;
            tags.appendChild(currentTag);
        }
        let ranking_=currentCollege.ranking;
        let ranking=document.createElement('span');
        ranking.className="ranking";
        tags.appendChild(ranking);
        ranking.innerHTML=`#${ranking_}`;

    }
    function createCollegeLowerLeft(collegeLowerContainer,currentCount){
        let collegeLowerLeft=document.createElement('div');
        collegeLowerLeft.className="collegeLowerLeft";
        collegeLowerContainer.appendChild(collegeLowerLeft);
        let collegeLower=document.createElement('div');
        collegeLower.className="collegeLower";
        collegeLowerLeft.appendChild(collegeLower);
        let collegeName_=colleges[currentCount].college_name;
        let collegeName=document.createElement('div');
        collegeName.className="collegeName";
        collegeLower.appendChild(collegeName);
        let clg=document.createElement('div');
        collegeName.appendChild(clg);
        clg.innerHTML=`${collegeName_}`;
        let rating_=colleges[currentCount].rating;
        let starSpan=document.createElement('span');
        starSpan.className="starSpan";
        clg.appendChild(starSpan);
        for(let i=0;i<rating_;i++){
            let span=document.createElement('span');
            span.innerHTML=`&#11089;`;
            span.className="dark";
            starSpan.appendChild(span);
        }
        for(let i=0;i<(5-rating_);i++){
            let span=document.createElement('span');
            span.innerHTML=`&#11090;`;
            span.className="faint";
            starSpan.appendChild(span);

        }

        let nearestPlace=document.createElement('div');
        nearestPlace.className="nearestPlace";
        collegeLower.appendChild(nearestPlace);
        let nearestPlace_=colleges[currentCount].nearest_place;
        for(let i=0;i<nearestPlace_.length;i++){
            let span1=document.createElement('span');
            span1.innerHTML=`${nearestPlace_[i]}`;
            // console.log(nearestPlace_[i]);
            nearestPlace.appendChild(span1);
            let span2=document.createElement('span');
            nearestPlace.appendChild(span2);
        }

        let famousNearestPlace_=colleges[currentCount].famous_nearest_places;
        let famousNearestPlace=document.createElement('div');
        famousNearestPlace.className="famousNearestPlace";
        collegeLower.appendChild(famousNearestPlace);
        let matchSpan=document.createElement('span');
        matchSpan.innerHTML='93% Match : ';
        famousNearestPlace.appendChild(matchSpan);
        famousNearestPlace_=famousNearestPlace_.split(',');
        for(let i=0;i<famousNearestPlace_.length;i++){
            let span=document.createElement('span');
            let place_=famousNearestPlace_[i].split(' ');
            matchSpan.appendChild(span);
            let str=document.createElement('strong');
            str.className="wordBold";
            str.innerHTML=`${place_[0]}`;
            // console.log(place_[0]);
            span.appendChild(str);
            let placeAfter_=place_.slice(1,place_.length).join(' ');
            let innerSpan=document.createElement('span');
            innerSpan.innerHTML=`${placeAfter_}`;
            span.appendChild(innerSpan);
            
        }

        let offerText=document.createElement('div');
        offerText.className="offerText";
        collegeLowerLeft.appendChild(offerText);
        let offerText_=colleges[currentCount].offertext.split(' ');
        offerText.innerHTML=`${offerText_[0]}`;
        for(let i=1;i<offerText_.length;i++){
            let strg=document.createElement('strong');
            if(!isNaN(offerText_[i])||offerText_[i]=="2,000"){
                strg.className="numBlue";
            }
            else if(offerText_[i]=="LOGIN"){
                strg.className="login";
            }
            else{
                strg.className="wordBold";
            }
            strg.innerHTML=` ${offerText_[i]}`;
            offerText.appendChild(strg);
        }




    }
    function createFees(collegeLowerContainer,currentCount){
        let fees=document.createElement('div');
        fees.className="fees";
        collegeLowerContainer.appendChild(fees);
        {   let originalFees=document.createElement('div');
            originalFees.className="originalFees";
            fees.appendChild(originalFees);
            let span1=document.createElement('span');
            let span2=document.createElement('span');
            let originalFees_=colleges[currentCount].original_fees;
            span1.innerHTML=`&#x20B9 ${originalFees_}`;
            originalFees.appendChild(span1);
            let discount_=colleges[currentCount].discount;
            span2.innerHTML=`${discount_}`;
            originalFees.appendChild(span2);
        
        }
        {   let discountedFees=document.createElement('div');
            discountedFees.className="discountedFees";
            let discountedFees_=colleges[currentCount].discounted_fees;
            discountedFees.innerHTML=`&#x20B9 ${discountedFees_}`;
            fees.appendChild(discountedFees);

        }
        {   let feesCycle=document.createElement('div');
            feesCycle.className="feesCycle";
            let feesCycle_=colleges[currentCount].fees_cycle;
            feesCycle.innerHTML=`${feesCycle_}`;
            fees.appendChild(feesCycle);

        }
        {   let amenties=document.createElement('div');
            amenties.className="amenties";
            fees.appendChild(amenties);
            let amenties_=colleges[currentCount].amenties;
            // console.log(amenties_);
            for(let i=0;i<amenties_.length;i++){
                let span1=document.createElement('span');
                span1.innerHTML=`${amenties_[i]}`;
                amenties.appendChild(span1);
                if(i!==amenties_.length-1){
                    let span2=document.createElement('span');
                    span2.className="dot";
                    amenties.appendChild(span2);
                }
                
                
            }

        }

    }
    function createCollegeLower(collegeCommon,currentCount){
        let collegeLowerContainer=document.createElement('div');
        collegeLowerContainer.className="collegeLowerContainer";
        collegeCommon.appendChild(collegeLowerContainer);
        createCollegeLowerLeft(collegeLowerContainer,currentCount);
        createFees(collegeLowerContainer,currentCount);

    }

    function createCollege(collegeCommon,currentCount){
        let currentCollege=colleges[currentCount];
        // console.log(collegeCommon.id);
        createArrow(collegeCommon,currentCount);
        createCollegeUpper(collegeCommon,currentCount);
        createCollegeLower(collegeCommon,currentCount);


    }

    function getColleges(){
        let count=0;
        while(count<10&&currentCount<totalCollegeCount){
            
            // console.log(currentCollege.college_name);
            let collegeCommon=document.createElement('div');
            collegeCommon.id="college_"+currentCount;
            collegeCommon.className="collegeCommon";
            showColleges.appendChild(collegeCommon);
            createCollege(collegeCommon,currentCount);
            count++;
            currentCount++;
        }

    }
    function loadColleges(){
        if((window.innerHeight+window.scrollY)>=document.documentElement.scrollHeight){
            getColleges();
        }
    }
    
})();