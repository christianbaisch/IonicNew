import React, { useState, useEffect} from 'react';
import {IonItem, IonLabel, IonText, IonItemSliding,
IonItemOption, IonItemOptions, IonIcon, IonImg} from '@ionic/react';
import { document, trash, add} from 'ionicons/icons';

interface Props {
    doEdit: any;
    doDelete:any;
    doc:any;
    doAdd: any;
}

const Item: React.FC<Props> = ({doEdit,doDelete,doAdd,doc}) => {
    let data = doc.data();

    if(data.picture){

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
                    doAdd(doc.id);
                    }}>
                     <IonIcon slot="icon-only" icon={add}>
                    </IonIcon>       
                </IonItemOption>
                
            </IonItemOptions>
        </IonItemSliding>
    )
    }
    else {
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
                    doAdd(doc.id);
                    }}>
                     <IonIcon slot="icon-only" icon={add}>
                    </IonIcon>       
                    </IonItemOption>
                </IonItemOptions>
            </IonItemSliding>
        )
    }
}

export default Item;