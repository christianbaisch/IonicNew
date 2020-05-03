import React, { useState, useEffect} from 'react';
import {IonItem, IonLabel, IonText, IonItemSliding,
IonItemOption, IonItemOptions, IonIcon, IonImg} from '@ionic/react';
import { document, trash, remove} from 'ionicons/icons';

interface Props {
    doEdit: any;
    doDelete:any;
    doc:any;
    doRemove:any;
}

const Item: React.FC<Props> = ({doEdit,doDelete,doRemove,doc}) => {
    let data = doc.data();

    if(data.subscribed == true){
    return(
        <IonItemSliding>
            <IonItem color="tertiary">
                <IonLabel class="ion-text-wrap">
                    <IonText className="item-title">
                        <div>
                            {data.title}
                        </div>
                    </IonText>
                    <IonText className="item-sub-title">
                        <div>
                            {data.content}
                        </div>
                    </IonText>
                    <IonText className="item-sub-title">
                        <div>
                            {new Date(data.date) + ""}
                        </div>
                    </IonText>
                    <IonText className="item-sub-title">
                        <div>
                            {data.location}
                        </div>
                    </IonText>
                    <IonText className="item-sub-title">
                        <div>
                            {data.subscribed}
                        </div>
                    </IonText>
                    <IonImg src={data.picture}>

                    </IonImg>   
                </IonLabel>
            </IonItem>
            <IonItemOptions>
                {/* <IonItemOption onClick={() => {
                    doEdit(doc.id);
                    }}>
                        <IonIcon slot="icon-only" icon={document}>
                        </IonIcon>            
                </IonItemOption> */}
                <IonItemOption onClick={() => {
                    doDelete(doc.id);
                    }}>
                     <IonIcon slot="icon-only" icon={trash}>
                    </IonIcon>       
                </IonItemOption>

                <IonItemOption onClick={() => {
                    doRemove(doc.id);
                    }}>
                     <IonIcon slot="icon-only" icon={remove}>
                    </IonIcon>       
                </IonItemOption>
            </IonItemOptions>
        </IonItemSliding>
    )
    
    } else{
        return(
            <IonItemSliding>

            </IonItemSliding>
        )
    }
}

export default Item;