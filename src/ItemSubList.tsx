import React from 'react';
import Item from './itemSub';
import firebase from 'firebase';
import {useCollection} from "react-firebase-hooks/firestore";
import {IonList} from '@ionic/react';

interface Props{
    doEdit:any
}

const ItemSubList: React.FC<Props> = ({doEdit}) => 
{
    const [value, loading, error] = useCollection(
        firebase.firestore().collection("data").orderBy("date", "desc"),
        {
            snapshotListenOptions:{includeMetadataChanges:true}
        }
    );
    const closeSlidingItems = () => 
    {
        let list = document.getElementById("list") as any;
    }
    const doDelete = id => 
    {
        firebase.firestore().collection("data").doc(id).delete();
    };
    const doRemove = id =>
    {
        var itemRef = firebase.firestore().collection('data').doc(id);

        var setWithMerge = itemRef.set({
            subscribed: false
        }, { merge: true });
    }
    return (
       <IonList id="list">
           {value && value.docs.map(doc => {
               return (
                   !loading && (
                       <Item doc={doc}
                       doEdit = {i =>{
                    closeSlidingItems();
                    doEdit(i);
                    }}
                    doDelete = {
                        i => 
                        {
                            closeSlidingItems();
                            doDelete(i);
                        }
                    }
                    doRemove = {
                        i => 
                        {
                            closeSlidingItems();
                            doRemove(i);
                        }
                    }
                    key = {doc.id}
                    />
                   )
               )
           })}
       </IonList>
    );
}

export default ItemSubList;