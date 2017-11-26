import React from 'react';

const Meta = ({selectedMovie}) => {
    if(!selectedMovie){
        return null;
    }
    const searchKey = ['Actors','Awards','Country','Director','Genre','Plot','Production','Released','Runtime'];
    let metaArray = [];
    for (let key in selectedMovie) {
        let meta = selectedMovie[key];
        if(searchKey.includes(key) && meta!=='N/A'){
            metaArray.push(
                <p key={key} >
                    {key} : {meta}
                </p>);
        }
    }
    return(
        <div className='col-sm-12 col-md-6 col-lg-8 meta__wrap'>
            {metaArray}
        </div>
    );

}
export default Meta;