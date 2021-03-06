import React, {useState} from 'react';
import { IonContent, IonHeader, IonFooter, IonPage, IonTitle, IonToolbar, IonSearchbar, IonCard} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import {IonicSelectableModule} from 'ionic-selectable';
import ItemList from '../ItemList';
import Item from '../item';

const Tab3: React.FC = () => {

  const[searchText, setSearchText] = useState('');
  const [setCurrent] = useState(null);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar  color ="secondary">
          <IonTitle>Find Events</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color = "tertiary">    
        <IonHeader collapse="condense">
          <IonToolbar>
              <IonTitle size="large">Tab 3</IonTitle>      
          </IonToolbar>
        </IonHeader>
        <IonSearchbar color="primary" value={searchText} onIonChange={e => 
          setSearchText(e.detail.value!)} showCancelButton="focus"></IonSearchbar>
        <IonCard>
          <ItemList doEdit={setCurrent}/>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
